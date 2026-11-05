// Real dashboard DOM with a local, intercepted API fixture. No production writes.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
const root = resolve('.next/advertising-proof'); mkdirSync(root, { recursive: true });
const next = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3015', '-H', '127.0.0.1'], { stdio: 'ignore', windowsHide: true });
const chrome = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--no-sandbox', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=9345', `--user-data-dir=${root}/chrome-${process.pid}`, 'about:blank'], { stdio: 'ignore', windowsHide: true });
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const pending = new Map(), calls = [], mutations = [];
const data = { advertisers: [], campaigns: [], creatives: [], placements: [{ code: 'content_sponsor', enabled: false, breakpoints: [], failure_policy: 'continue' }, { code: 'preroll', enabled: false, breakpoints: [], failure_policy: 'continue' }] };
let serial = 0, socket, canApprove = true, forbidden = false;
const summary = Object.fromEntries(['impression', 'video_start', 'first_quartile', 'midpoint', 'third_quartile', 'complete', 'click', 'skip', 'failure', 'requests', 'decisions', 'served', 'no_ad'].map(key => [key, 0]));
async function fixture(request) {
  const url = new URL(request.url), path = url.pathname.replace('/backend-api', '');
  calls.push(path); let body = {}; try { body = JSON.parse(request.postData || '{}'); } catch {}
  if (path === '/api/accounts/profile/') return { data: { id: 1, name: 'Local advertising operator', email: 'fixture@example.invalid', is_active: true, is_staff: true, is_superuser: false, dashboard_permissions: ['adverts', ...(canApprove ? ['advertising_approval'] : [])] } };
  if (!path.startsWith('/api/advertising/')) return { data: {} };
  if (forbidden) return { status: 403, data: { detail: 'Forbidden fixture' } };
  const relative = path.slice('/api/advertising/'.length).split('/').filter(Boolean), resource = relative[0];
  if (resource === 'reports') return { data: { enabled: false, summary, by_campaign: [], by_advertiser: [], by_placement: [], by_date: [], cap_utilization: [], no_ad_reasons: [] } };
  if (resource === 'targets') return { data: { categories: [{ id: 'movies', name: 'Movies' }], genres: [], channels: [{ id: 1, name: 'Fixture channel' }], contents: [{ id: 1, name: 'Published fixture title' }] } };
  if (resource === 'images') { mutations.push({ resource, action: 'upload' }); return { status: 201, data: { id: '00000000-0000-4000-8000-000000000001', desktop_url: '/cbmtvwhitelogo.png' } }; }
  if (!(resource in data)) return { status: 404, data: {} };
  if (request.method === 'GET') return { data: { results: data[resource], count: data[resource].length, next: null } };
  const id = relative[1]; const row = data[resource].find(item => String(item.id ?? item.code) === id);
  if (relative[2] === 'preview') return { data: { kind: 'image', url: '/cbmtvwhitelogo.png' } };
  if (relative[2] === 'workflow') {
    if (['approve', 'reject'].includes(body.action) && !canApprove) return { status: 403, data: { detail: 'Approval permission required' } };
    if (body.action === 'submit') row.approval = 'review'; if (body.action === 'approve') row.approval = 'approved';
    if (body.action === 'resume') row.status = 'active'; if (body.action === 'pause') row.status = 'paused';
    mutations.push({ resource, action: body.action }); return { data: row };
  }
  if (id) { Object.assign(row, body); mutations.push({ resource, action: 'edit' }); return { data: row }; }
  const created = { ...body, id: data[resource].length + 1, approval: 'draft', status: 'paused', impressions: 0, ready: true };
  data[resource].push(created); mutations.push({ resource, action: 'create' }); return { status: 201, data: created };
}
function send(method, params = {}) { return new Promise((resolve, reject) => { const id = ++serial; pending.set(id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params })); }); }
async function evaluate(expression) { const { result } = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }); if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails)); return result.result.value; }
async function waitFor(expression, milliseconds = 15000) { const until = Date.now() + milliseconds; while (Date.now() < until) { if (await evaluate(`Boolean(${expression})`).catch(() => false)) return; await delay(100); } throw new Error(`Timed out: ${expression}; ${await evaluate('document.body.innerText')}`); }
async function click(label) { await evaluate(`Array.from(document.querySelectorAll('button')).find(b=>b.textContent.trim()===${JSON.stringify(label)}).click()`); await delay(150); }
async function input(id, value) { await evaluate(`(()=>{const input=document.getElementById(${JSON.stringify(id)});Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(input,${JSON.stringify(value)});input.dispatchEvent(new Event('input',{bubbles:true}));input.dispatchEvent(new Event('change',{bubbles:true}));})()`); }
async function select(id, value) { await evaluate(`(()=>{const input=document.getElementById(${JSON.stringify(id)});input.value=${JSON.stringify(value)};input.dispatchEvent(new Event('change',{bubbles:true}));})()`); }
try {
  let endpoint;
  for (let i = 0; i < 100; i++) { try { endpoint = (await fetch('http://127.0.0.1:9345/json/list').then(r => r.json())).find(p => p.type === 'page')?.webSocketDebuggerUrl; if (endpoint) break; } catch {} await delay(100); }
  assert.ok(endpoint); socket = new WebSocket(endpoint); await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  socket.onmessage = async ({ data }) => {
    const message = JSON.parse(data), task = pending.get(message.id);
    if (task) { pending.delete(message.id); if (message.error) task.reject(new Error(message.error.message)); else task.resolve(message); }
    if (message.method === 'Fetch.requestPaused') {
      const result = await fixture(message.params.request);
      await send('Fetch.fulfillRequest', { requestId: message.params.requestId, responseCode: result.status ?? 200, responseHeaders: [{ name: 'Content-Type', value: 'application/json' }], body: Buffer.from(JSON.stringify(result.data)).toString('base64') });
    }
  };
  await send('Page.enable'); await send('Runtime.enable'); await send('Fetch.enable', { patterns: [{ urlPattern: '*backend-api/*' }] });
  const token = `fixture.${Buffer.from(JSON.stringify({ user_id: 1, exp: 9999999999 })).toString('base64url')}.signature`;
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `localStorage.setItem('access_token',${JSON.stringify(token)});localStorage.setItem('refresh_token',${JSON.stringify(token)});` });
  for (let i=0;i<100;i++) { try { if ((await fetch('http://127.0.0.1:3015')).ok) break; } catch {} await delay(100); }
  await send('Page.navigate', { url: 'http://127.0.0.1:3015/advertising' });
  await waitFor('document.body.innerText.includes("Advertising delivery disabled")');
  await click('Advertisers'); await click('Create advertiser'); await input('ad-name', 'Browser sponsor'); await input('ad-email', 'sponsor@example.com'); await click('Save');
  await waitFor('document.body.innerText.includes("Browser sponsor") && !document.getElementById("ad-name")');
  await click('Deactivate'); await waitFor('document.body.innerText.includes("Inactive")'); await click('Activate');
  await click('Campaigns'); await click('Create campaign'); await input('ad-name','Browser campaign'); await select('ad-advertiser','1');
  await evaluate("Array.from(document.querySelectorAll('label')).find(l=>l.textContent.trim()==='content sponsor').querySelector('input').click()");
  await click('Save'); await waitFor('document.body.innerText.includes("Browser campaign") && !document.getElementById("ad-name")');
  await click('submit'); await click('approve'); await click('resume'); await click('pause');
  await click('Creatives'); await click('Create creative'); await input('ad-name','Browser banner'); await select('ad-campaign','1');
  await evaluate("Array.from(document.querySelectorAll('label')).find(l=>l.textContent.trim()==='content sponsor').querySelector('input').click()");
  await send('DOM.enable'); const { result: dom }=await send('DOM.getDocument'); const { result: picked }=await send('DOM.querySelector',{nodeId:dom.root.nodeId,selector:'#ad-image'});
  await send('DOM.setFileInputFiles',{nodeId:picked.nodeId,files:[resolve('public/cbmtvwhitelogo.png')]});
  await waitFor('document.body.innerText.includes("Verified image attached")'); await click('Save'); await waitFor('!document.getElementById("ad-name")');
  await click('submit'); await click('Preview'); await waitFor('document.body.innerText.includes("Creative preview")'); await click('approve');
  await click('Reports'); await waitFor('document.body.innerText.includes("No recorded activity for this range.")');
  const layouts=[];
  for(const width of [390,1440]) { await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<768}); await delay(200); const layout=await evaluate('({width:innerWidth,scrollWidth:document.documentElement.scrollWidth})'); assert.ok(layout.scrollWidth<=layout.width+1);layouts.push(layout); const { result }=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});writeFileSync(join(root,`${width}.png`),Buffer.from(result.data,'base64')); }
  canApprove=false; await send('Page.reload'); await waitFor('document.body.innerText.includes("Advertising delivery disabled")'); await click('Creatives');
  assert.equal(await evaluate("Array.from(document.querySelectorAll('button')).some(b=>b.textContent.trim()==='approve')"),false);
  forbidden=true; await click('Refresh'); await waitFor('document.body.innerText.includes("does not have permission")');
  writeFileSync(join(root,'results.json'),JSON.stringify({environment:'Headless Chrome, actual dashboard build, intercepted local API fixtures; no production requests',passed:true,advertiser_management:true,campaign_workflow:true,image_upload:true,preview:true,approval_permission:true,reports_empty_state:true,error_handling:true,layouts,mutations,calls},null,2));
  console.log(JSON.stringify({passed:true,artifact:join(root,'results.json'),layouts,mutations}));
} finally { socket?.close();chrome.kill();next.kill(); }
