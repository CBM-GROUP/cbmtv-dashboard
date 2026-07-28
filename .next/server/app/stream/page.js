(()=>{var a={};a.id=283,a.ids=[283],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:a=>{"use strict";a.exports=require("assert")},16766:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(27851).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Chris Gadgets Ug\\\\Desktop\\\\cbmtv\\\\cbmtv-dashboard\\\\src\\\\app\\\\stream\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\stream\\page.js","default")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},69169:(a,b,c)=>{Promise.resolve().then(c.bind(c,91588))},69841:(a,b,c)=>{Promise.resolve().then(c.bind(c,16766))},73399:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(53197),e=c(90426),f=c(76362),g=c(59851),h=c(38649),i=c(43385),j=c(30336),k=c(38337),l=c(48977),m=c(98227),n=c(63847),o=c(38544),p=c(55654),q=c(9931),r=c(261),s=c(5330),t=c(53439),u=c(26713),v=c(73507),w=c(99712),x=c(70804),y=c(52541),z=c(17163),A=c(61273),B=c(86439),C=c(38791),D=c.n(C),E=c(15059),F=c(16002),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["stream",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,16766)),"C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\stream\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,42742)),"C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,38791,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.bind(c,29446)),"C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,40482,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,10493,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\stream\\page.js"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/stream/page",pathname:"/stream",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/stream/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},73496:a=>{"use strict";a.exports=require("http2")},74075:a=>{"use strict";a.exports=require("zlib")},79551:a=>{"use strict";a.exports=require("url")},81630:a=>{"use strict";a.exports=require("http")},83997:a=>{"use strict";a.exports=require("tty")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91588:(a,b,c)=>{"use strict";let d,e;c.r(b),c.d(b,{default:()=>ml});var f=c(98021),g=c(41344),h=c(47790),i=c(76083).Ay,j={VIDEO:"video",DRM:"drm"},k={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},l=a=>a===j.VIDEO?"playback":a,m=class a extends Error{constructor(b,c=a.MEDIA_ERR_CUSTOM,d,e){var f;super(b),this.name="MediaError",this.code=c,this.context=e,this.fatal=null!=d?d:c>=a.MEDIA_ERR_NETWORK&&c<=a.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(f=a.defaultMessages[this.code])?f:"")}};m.MEDIA_ERR_ABORTED=1,m.MEDIA_ERR_NETWORK=2,m.MEDIA_ERR_DECODE=3,m.MEDIA_ERR_SRC_NOT_SUPPORTED=4,m.MEDIA_ERR_ENCRYPTED=5,m.MEDIA_ERR_CUSTOM=100,m.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var n=(a,b)=>null!=b&&a in b,o={ANY:"any",MUTED:"muted"},p={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},q={MSE:"mse",NATIVE:"native"},r={HEADER:"header",QUERY:"query",NONE:"none"},s=Object.values(r),t={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},u={HLS:t.M3U8};Object.keys(u),[...Object.values(t)];var v={code:"en"},w=(a,b,c,d,e=a)=>{e.addEventListener(b,c,d),a.addEventListener("teardown",()=>{e.removeEventListener(b,c)},{once:!0})},x=a=>{let b=a.indexOf("?");return b<0?[a]:[a.slice(0,b),a.slice(b)]},y=a=>{let{type:b}=a;if(b){let a=b.toUpperCase();return n(a,u)?u[a]:b}return B(a)},z=a=>"VOD"===a?p.ON_DEMAND:p.LIVE,A=a=>"EVENT"===a?1/0:"VOD"===a?NaN:0,B=a=>{let{src:b}=a;if(!b)return"";let c="";try{c=new URL(b).pathname}catch{console.error("invalid url")}let d=c.lastIndexOf(".");if(d<0)return D(a)?t.M3U8:"";let e=c.slice(d+1).toUpperCase();return n(e,t)?t[e]:""},C="mux.com",D=({src:a,customDomain:b=C})=>{let c;try{c=new URL(`${a}`)}catch{return!1}let d="https:"===c.protocol,e=c.hostname===`stream.${b}`.toLowerCase(),f=c.pathname.split("/"),g=2===f.length,h=!(null!=f&&f[1].includes("."));return d&&e&&g&&h},E=a=>{let b=(null!=a?a:"").split(".")[1];if(b)try{let a=b.replace(/-/g,"+").replace(/_/g,"/"),c=decodeURIComponent(atob(a).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(c)}catch{return}};function F(a,b=!0){var c;return new G(b&&null!=(c=null==v?void 0:v[a])?c:a,b?v.code:"en")}var G=class{constructor(a,b=(a=>null!=(a=v)?a:"en")()){this.message=a,this.locale=b}format(a){return this.message.replace(/\{(\w+)\}/g,(b,c)=>{var d;return null!=(d=a[c])?d:""})}toString(){return this.message}},H=Object.values(o),I=a=>"boolean"==typeof a||"string"==typeof a&&H.includes(a),J=(a,b)=>{if(!b)return;let c=a.muted,d=()=>a.muted=c;switch(b){case o.ANY:a.play().catch(()=>{a.muted=!0,a.play().catch(d)});break;case o.MUTED:a.muted=!0,a.play().catch(d);break;default:a.play().catch(()=>{})}},K=a=>"time"in a?a.time:a.startTime;function L(a,b,c,d,e,f){let g=document.createElement("track");return g.kind=b,g.label=c,d&&(g.srclang=d),e&&(g.id=e),f&&(g.default=!0),g.track.mode=["subtitles","captions"].includes(b)?"disabled":"hidden",g.setAttribute("data-removeondestroy",""),a.append(g),g.track}function M(a,b,c){var d;return null==(d=Array.from(a.querySelectorAll("track")).find(a=>a.track.label===b&&a.track.kind===c))?void 0:d.track}async function N(a,b,c,d){let e=M(a,c,d);return e||((e=L(a,d,c)).mode="hidden",await new Promise(a=>setTimeout(()=>a(void 0),0))),"hidden"!==e.mode&&(e.mode="hidden"),[...b].sort((a,b)=>K(b)-K(a)).forEach(b=>{var c,f;let g=b.value,h=K(b);if("endTime"in b&&null!=b.endTime)null==e||e.addCue(new VTTCue(h,b.endTime,"chapters"===d?g:JSON.stringify(null!=g?g:null)));else{let b=Array.prototype.findIndex.call(null==e?void 0:e.cues,a=>a.startTime>=h),i=null==(c=null==e?void 0:e.cues)?void 0:c[b],j=i?i.startTime:Number.isFinite(a.duration)?a.duration:Number.MAX_SAFE_INTEGER,k=null==(f=null==e?void 0:e.cues)?void 0:f[b-1];k&&(k.endTime=h),null==e||e.addCue(new VTTCue(h,j,"chapters"===d?g:JSON.stringify(null!=g?g:null)))}}),a.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e}var O="cuepoints",P=Object.freeze({label:O});async function Q(a,b,c=P){return N(a,b,c.label,"metadata")}var R=a=>({time:a.startTime,value:JSON.parse(a.text)});function S(a,b={label:O}){var c,d;let e=M(a,b.label,"metadata");if(!(null!=(c=null==e?void 0:e.activeCues)&&c.length))return;if(1===e.activeCues.length)return R(e.activeCues[0]);let{currentTime:f}=a;return R(Array.prototype.find.call(null!=(d=e.activeCues)?d:[],({startTime:a,endTime:b})=>a<=f&&b>f)||e.activeCues[0])}async function T(a,b=P){return new Promise(c=>{w(a,"loadstart",async()=>{let d=await Q(a,[],b);w(a,"cuechange",()=>{let b=S(a);if(b){let c=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:b});a.dispatchEvent(c)}},{},d),c(d)})})}var U="chapters",V=Object.freeze({label:U}),W=a=>({startTime:a.startTime,endTime:a.endTime,value:a.text});async function X(a,b,c=V){return N(a,b,c.label,"chapters")}function Y(a,b={label:U}){var c,d;let e=M(a,b.label,"chapters");if(!(null!=(c=null==e?void 0:e.activeCues)&&c.length))return;if(1===e.activeCues.length)return W(e.activeCues[0]);let{currentTime:f}=a;return W(Array.prototype.find.call(null!=(d=e.activeCues)?d:[],({startTime:a,endTime:b})=>a<=f&&b>f)||e.activeCues[0])}async function Z(a,b=V){return new Promise(c=>{w(a,"loadstart",async()=>{let d=await X(a,[],b);w(a,"cuechange",()=>{let b=Y(a);if(b){let c=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:b});a.dispatchEvent(c)}},{},d),c(d)})})}var $={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},_=(a,b,c,d,e=!1,f=!(a=>null==(a=globalThis.navigator)?void 0:a.onLine)())=>{var g,h;if(f){let c=F("Your device appears to be offline",e),d=m.MEDIA_ERR_NETWORK,f=new m(c,d,!1,void 0);return f.errorCategory=b,f.muxCode=k.NETWORK_OFFLINE,f.data=a,f}let i="status"in a?a.status:a.code,o=Date.now(),q=m.MEDIA_ERR_NETWORK;if(200===i)return;let r=l(b),s=((a,b)=>{var c,d;let e=l(a),f=`${e}Token`;return null!=(c=b.tokens)&&c[e]?null==(d=b.tokens)?void 0:d[e]:n(f,b)?b[f]:void 0})(b,c),t=(a=>a===j.VIDEO?$.VIDEO:a===j.DRM?$.DRM:void 0)(b),[u]=x(null!=(g=c.playbackId)?g:"");if(!i||!u)return;let v=E(s);if(s&&!v){let c=new m(F("The {tokenNamePrefix}-token provided is invalid or malformed.",e).format({tokenNamePrefix:r}),q,!0,F("Compact JWT string: {token}",e).format({token:s}));return c.errorCategory=b,c.muxCode=k.NETWORK_TOKEN_MALFORMED,c.data=a,c}if(i>=500){let a=new m("",q,null==d||d);return a.errorCategory=b,a.muxCode=k.NETWORK_UNKNOWN_ERROR,a}if(403===i)if(v){if((({exp:a},b=Date.now())=>!a||1e3*a<b)(v,o)){let c={timeStyle:"medium",dateStyle:"medium"},d=new m(F("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:r}),q,!0,F("Expired at: {expiredDate}. Current time: {currentDate}.",e).format({expiredDate:new Intl.DateTimeFormat("en",c).format(null!=(h=v.exp)?h:0),currentDate:new Intl.DateTimeFormat("en",c).format(o)}));return d.errorCategory=b,d.muxCode=k.NETWORK_TOKEN_EXPIRED,d.data=a,d}if((({sub:a},b)=>a!==b)(v,u)){let c=new m(F("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:r}),q,!0,F("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",e).format({tokenNamePrefix:r,playbackId:u,tokenPlaybackId:v.sub}));return c.errorCategory=b,c.muxCode=k.NETWORK_TOKEN_SUB_MISMATCH,c.data=a,c}if((({aud:a},b)=>!a)(v,0)){let c=new m(F("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:r}),q,!0,F("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",e).format({tokenNamePrefix:r,expectedAud:t}));return c.errorCategory=b,c.muxCode=k.NETWORK_TOKEN_AUD_MISSING,c.data=a,c}if((({aud:a},b)=>a!==b)(v,t)){let c=new m(F("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:r}),q,!0,F("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",e).format({tokenNamePrefix:r,expectedAud:t,aud:v.aud}));return c.errorCategory=b,c.muxCode=k.NETWORK_TOKEN_AUD_MISMATCH,c.data=a,c}}else{let c=new m(F("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",e).format({tokenNamePrefix:r,category:b}),q,null==d||d,F("Specified playback ID: {playbackId}",e).format({playbackId:u}));return c.errorCategory=b,c.muxCode=k.NETWORK_TOKEN_MISSING,c.data=a,c}if(412===i){let f=new m(F("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",e),q,null==d||d,F("Specified playback ID: {playbackId}",e).format({playbackId:u}));return f.errorCategory=b,f.muxCode=k.NETWORK_NOT_READY,f.streamType=c.streamType===p.LIVE?"live":c.streamType===p.ON_DEMAND?"on-demand":"unknown",f.data=a,f}if(404===i){let c=new m(F("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",e),q,null==d||d,F("Specified playback ID: {playbackId}",e).format({playbackId:u}));return c.errorCategory=b,c.muxCode=k.NETWORK_NOT_FOUND,c.data=a,c}if(400===i){let c=new m(F("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),q,null==d||d,F("Specified playback ID: {playbackId}",e).format({playbackId:u}));return c.errorCategory=b,c.muxCode=k.NETWORK_INVALID_URL,c.data=a,c}let w=new m("",q,null==d||d);return w.errorCategory=b,w.muxCode=k.NETWORK_UNKNOWN_ERROR,w.data=a,w},aa=i.DefaultConfig.capLevelController,ab=class a extends aa{constructor(a){super(a)}get levels(){var a;return null!=(a=this.hls.levels)?a:[]}getValidLevels(a){return this.levels.filter((b,c)=>this.isLevelAllowed(b)&&c<=a)}getMaxLevel(b){let c=super.getMaxLevel(b),d=this.getValidLevels(b);if(!d[c])return c;let e=Math.min(d[c].width,d[c].height),f=a.minMaxResolution;return e>=f?c:aa.getMaxLevelByMediaSize(d,16/9*f,f)}};ab.minMaxResolution=720;var ac,ad,ae,af,ag,ah,ai,aj,ak,al={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},am=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,an=async(a,b)=>{if(b===t.MP4)return{streamType:p.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(b===t.M3U8){let b=await fetch(a);if(!b.ok)return Promise.reject(b);let c=await b.text(),d=await fetch(c.split(`
`).find((a,b,c)=>b&&c[b-1].startsWith("#EXT-X-STREAM-INF"))).then(a=>200!==a.status?Promise.reject(a):a.text());return{...(a=>{let b=a.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!b.length)return{};let c={};for(let a of b){let b=Object.fromEntries([...a.matchAll(am)].map(([,a,b])=>[a,b])),d=b["DATA-ID"];d&&(c[d]={...b})}return{sessionData:c}})(c),...(a=>{var b,c,d;let e=a.split(`
`),f=null==(c=(null!=(b=e.find(a=>a.startsWith("#EXT-X-PLAYLIST-TYPE")))?b:"").split(":")[1])?void 0:c.trim(),g=z(f),h=A(f),i;if(g===p.LIVE){let a=e.find(a=>a.startsWith("#EXT-X-PART-INF"));if(a)i=2*a.split(":")[1].split("=")[1];else{let a=e.find(a=>a.startsWith("#EXT-X-TARGETDURATION")),b=null==(d=null==a?void 0:a.split(":"))?void 0:d[1];i=(null!=b?b:6)*3}}return{streamType:g,targetLiveWindow:h,liveEdgeStartOffset:i}})(d)}}return console.error(`Media type ${b} is an unrecognized or unsupported type for src ${a}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},ao=async(a,b,c=y({src:a}))=>{var d,e,f,g;let{streamType:h,targetLiveWindow:i,liveEdgeStartOffset:j,sessionData:k}=await an(a,c),l=null==k?void 0:k["com.apple.hls.chapters"];(null!=l&&l.URI||null!=l&&l.VALUE.toLocaleLowerCase().startsWith("http"))&&ap(null!=(d=l.URI)?d:l.VALUE,b),(null!=(e=au.get(b))?e:{}).liveEdgeStartOffset=j,(null!=(f=au.get(b))?f:{}).targetLiveWindow=i,b.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(g=au.get(b))?g:{}).streamType=h,b.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ap=async(a,b)=>{var c,d;try{let e=await fetch(a);if(!e.ok)throw Error(`Failed to fetch Mux metadata: ${e.status} ${e.statusText}`);let f=await e.json(),g={};if(!(null!=(c=null==f?void 0:f[0])&&c.metadata))return;for(let a of f[0].metadata)a.key&&a.value&&(g[a.key]=a.value);(null!=(d=au.get(b))?d:{}).metadata=g;let h=new CustomEvent("muxmetadata");b.dispatchEvent(h)}catch(a){console.error(a)}},aq=null!=(ad=null==(ac=null==globalThis?void 0:globalThis.navigator)?void 0:ac.userAgent)?ad:"",ar=null!=(ag=null==(af=null==(ae=null==globalThis?void 0:globalThis.navigator)?void 0:ae.userAgentData)?void 0:af.platform)?ag:"",as=null==(aj=null==(ai=null==(ah=null==globalThis?void 0:globalThis.navigator)?void 0:ah.userAgentData)?void 0:ai.brands)?void 0:aj[0],at=aq.toLowerCase().includes("android")||["x11","android"].some(a=>ar.toLowerCase().includes(a)),au=new WeakMap,av="mux.com",aw=null==(ak=i.isSupported)?void 0:ak.call(i),ax=()=>h.A.utils.now(),ay=h.A.utils.generateUUID,az=({playbackId:a,customDomain:b=av,maxResolution:c,minResolution:d,renditionOrder:e,programStartTime:f,programEndTime:g,assetStartTime:h,assetEndTime:i,playbackToken:j,tokens:{playback:k=j}={},extraSourceParams:l={}}={})=>{if(!a)return;let[m,n=""]=x(a),o=new URL(`https://stream.${b}/${m}.m3u8${n}`);return k||o.searchParams.has("token")?(o.searchParams.forEach((a,b)=>{"token"!=b&&o.searchParams.delete(b)}),k&&o.searchParams.set("token",k)):(c&&o.searchParams.set("max_resolution",c),d&&(o.searchParams.set("min_resolution",d),c&&+c.slice(0,-1)<+d.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",d,"maxResolution",c)),e&&o.searchParams.set("rendition_order",e),f&&o.searchParams.set("program_start_time",`${f}`),g&&o.searchParams.set("program_end_time",`${g}`),h&&o.searchParams.set("asset_start_time",`${h}`),i&&o.searchParams.set("asset_end_time",`${i}`),Object.entries(l).forEach(([a,b])=>{null!=b&&o.searchParams.set(a,b)})),o.toString()},aA=a=>{if(!a)return;let[b]=a.split("?");return b||void 0},aB=a=>{if(!a||!a.startsWith("https://stream."))return;let[b]=new URL(a).pathname.slice(1).split(/\.m3u8|\//);return b||void 0},aC=a=>{var b;return null==(b=au.get(a))?void 0:b.error},aD=a=>{var b,c;return null!=(c=null==(b=au.get(a))?void 0:b.streamType)?c:p.UNKNOWN},aE=a=>{var b,c;return null!=(c=null==(b=au.get(a))?void 0:b.seekable)?c:a.seekable},aF=.034,aG=(a,b,c=aF)=>a>b||((a,b,c=aF)=>Math.abs(a-b)<=c)(a,b,c),aH=(a,b)=>{var c,d,e;if(!b||!a.buffered.length)return;if(a.readyState>2)return!1;let f=b.currentLevel>=0?null==(d=null==(c=b.levels)?void 0:c[b.currentLevel])?void 0:d.details:null==(e=b.levels.find(a=>!!a.details))?void 0:e.details;if(!f||f.live)return;let{fragments:g}=f;if(!(null!=g&&g.length))return;if(a.currentTime<a.duration-(f.targetduration+.5))return!1;let h=g[g.length-1];if(a.currentTime<=h.start)return!1;let i=h.start+h.duration/2,j=a.buffered.start(a.buffered.length-1),k=a.buffered.end(a.buffered.length-1);return i>j&&i<k},aI=(a,b)=>a.ended||a.loop?a.ended:!!(b&&aH(a,b))||((a,b=aF)=>a.paused&&aG(a.currentTime,a.duration,b))(a),aJ=(a,b,c)=>{let d=null==b?void 0:b.engine;null!=a&&a.mux&&!a.mux.deleted&&(null!=c&&c.muxDataKeepSession?d&&a.mux.removeHLSJS():(a.mux.destroy(),delete a.mux)),d&&(d.detachMedia(),d.destroy()),a&&(a.hasAttribute("src")&&(a.removeAttribute("src"),a.load()),a.removeEventListener("error",aT),a.removeEventListener("error",aV),a.removeEventListener("durationchange",aS),au.delete(a),a.dispatchEvent(new Event("teardown")))};function aK(a,b){var c,d;let e=y(a);if(e!==t.M3U8)return!0;let f=!e||null==(c=b.canPlayType(e))||c,{preferPlayback:g}=a,h=g===q.MSE,i=g===q.NATIVE,j=aw&&(h||at||!!b.canPlayType("application/vnd.apple.mpegurl")&&(null==as?void 0:as.brand)==="Google Chrome"&&parseInt(null!=(d=null==as?void 0:as.version)?d:"0")>=141);return f&&(i||!j)}var aL=a=>a===p.LIVE?{backBufferLength:8}:{},aM=a=>{let{tokens:{drm:b}={},playbackId:c,drmTypeCb:d}=a,e=aA(c);return b&&e?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:aP(a,"fairplay"),serverCertificateUrl:aQ(a,"fairplay")},"com.widevine.alpha":{licenseUrl:aP(a,"widevine")},"com.microsoft.playready":{licenseUrl:aP(a,"playready")}},requestMediaKeySystemAccessFunc:(a,b)=>("com.widevine.alpha"===a&&(b=[...b.map(a=>{var b;let c=null==(b=a.videoCapabilities)?void 0:b.map(a=>({...a,robustness:"HW_SECURE_ALL"}));return{...a,videoCapabilities:c}}),...b]),navigator.requestMediaKeySystemAccess(a,b).then(b=>{let c=(a=>a.includes("fps")?al.FAIRPLAY:a.includes("playready")?al.PLAYREADY:a.includes("widevine")?al.WIDEVINE:void 0)(a);return null==d||d(c),b}))}:{}},aN=async a=>{let b=await fetch(a);return 200!==b.status?Promise.reject(b):await b.arrayBuffer()},aO=async(a,b)=>{let c=await fetch(b,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:a});return 200!==c.status?Promise.reject(c):new Uint8Array(await c.arrayBuffer())},aP=({playbackId:a,tokens:{drm:b}={},customDomain:c=av},d)=>{let e=aA(a);return`https://license.${c.toLocaleLowerCase().endsWith(av)?c:av}/license/${d}/${e}?token=${b}`},aQ=({playbackId:a,tokens:{drm:b}={},customDomain:c=av},d)=>{let e=aA(a);return`https://license.${c.toLocaleLowerCase().endsWith(av)?c:av}/appcert/${d}/${e}?token=${b}`},aR=({playbackId:a,src:b,customDomain:c})=>{if(a)return!0;if("string"!=typeof b)return!1;let d=new URL(b,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return d.includes(av)||!!c&&d.includes(c.toLocaleLowerCase())};function aS(a){var b;let c=a.target,d=null==(b=au.get(c))?void 0:b.startTime;if(d&&function(a,b,c){b&&c>b&&(c=b);for(let b=0;b<a.length;b++)if(a.start(b)<=c&&a.end(b)>=c)return!0;return!1}(c.seekable,c.duration,d)){let a="auto"===c.preload;a&&(c.preload="none"),c.currentTime=d,a&&(c.preload="auto")}}async function aT(a){if(!a.isTrusted)return;a.stopImmediatePropagation();let b=a.target;if(!(null!=b&&b.error))return;let{message:c,code:d}=b.error,e=new m(c,d);if(b.src&&d===m.MEDIA_ERR_SRC_NOT_SUPPORTED&&b.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var a;let c=null!=(a=aC(b))?a:b.error;(null==c?void 0:c.code)===m.MEDIA_ERR_SRC_NOT_SUPPORTED&&aU(b,e)},500);if(b.src&&(d!==m.MEDIA_ERR_DECODE||void 0!==d))try{let{status:a}=await fetch(b.src);e.data={response:{code:a}}}catch{}aU(b,e)}function aU(a,b){var c;b.fatal&&((null!=(c=au.get(a))?c:{}).error=b,a.dispatchEvent(new CustomEvent("error",{detail:b})))}function aV(a){var b,c;if(!(a instanceof CustomEvent)||!(a.detail instanceof m))return;let d=a.target,e=a.detail;e&&e.fatal&&((null!=(b=au.get(d))?b:{}).error=e,null==(c=d.mux)||c.emit("error",{player_error_code:e.code,player_error_message:e.message,player_error_context:e.context}))}var aW,aX,aY,aZ,a$,a_,a0,a1,a2,a3,a4,a5,a6=(a,b)=>{var c,d,e;console.error("getErrorFromHlsErrorData()",a);let f={[i.ErrorTypes.NETWORK_ERROR]:m.MEDIA_ERR_NETWORK,[i.ErrorTypes.MEDIA_ERROR]:m.MEDIA_ERR_DECODE,[i.ErrorTypes.KEY_SYSTEM_ERROR]:m.MEDIA_ERR_ENCRYPTED},g,h=(a=>[i.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,i.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(a.details)?m.MEDIA_ERR_NETWORK:f[a.type])(a);if(h===m.MEDIA_ERR_NETWORK&&a.response){let e=null!=(c=(a=>a.type===i.ErrorTypes.KEY_SYSTEM_ERROR?j.DRM:a.type===i.ErrorTypes.NETWORK_ERROR?j.VIDEO:void 0)(a))?c:j.VIDEO;g=null!=(d=_(a.response,e,b,a.fatal))?d:new m("",h,a.fatal)}else h===m.MEDIA_ERR_ENCRYPTED?a.details===i.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((g=new m(F("Attempting to play DRM-protected content without providing a DRM token."),m.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=j.DRM,g.muxCode=k.ENCRYPTED_MISSING_TOKEN):a.details===i.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((g=new m(F("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),m.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=j.DRM,g.muxCode=k.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):a.details===i.ErrorDetails.KEY_SYSTEM_NO_SESSION?((g=new m(F("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),m.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=j.DRM,g.muxCode=k.ENCRYPTED_GENERATE_REQUEST_FAILED):a.details===i.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((g=new m(F("Failed to update DRM license. This may be an issue with the player or your protected content."),m.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=j.DRM,g.muxCode=k.ENCRYPTED_UPDATE_LICENSE_FAILED):a.details===i.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((g=new m(F("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),m.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=j.DRM,g.muxCode=k.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):a.details===i.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((g=new m(F("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),m.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=j.DRM,g.muxCode=k.ENCRYPTED_CDM_ERROR):a.details===i.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((g=new m(F("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),m.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=j.DRM,g.muxCode=k.ENCRYPTED_OUTPUT_RESTRICTED):((g=new m(a.error.message,m.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=j.DRM,g.muxCode=k.ENCRYPTED_ERROR):g=new m("",h,a.fatal);return g.context||(g.context=`${a.url?`url: ${a.url}
`:""}${a.response&&(a.response.code||a.response.text)?`response: ${a.response.code}, ${a.response.text}
`:""}${a.reason?`failure reason: ${a.reason}
`:""}${a.level?`level: ${a.level}
`:""}${a.parent?`parent stream controller: ${a.parent}
`:""}${a.buffer?`buffer length: ${a.buffer}
`:""}${a.error?`error: ${a.error}
`:""}${a.event?`event: ${a.event}
`:""}${a.err?`error message: ${null==(e=a.err)?void 0:e.message}
`:""}`),g.data=a,g},a7=c(95287),a8=a=>{throw TypeError(a)},a9=(a,b,c)=>b.has(a)||a8("Cannot "+c),ba=(a,b,c)=>(a9(a,b,"read from private field"),c?c.call(a):b.get(a)),bb=(a,b,c)=>b.has(a)?a8("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),bc=(a,b,c,d)=>(a9(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),bd=(a,b,c)=>(a9(a,b,"access private method"),c),be=(()=>{try{return"0.27.1"}catch{}return"UNKNOWN"})(),bf=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,bg={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},bh=Object.values(bg),bi="mux-video",bj=class extends a7.lB{constructor(){super(),bb(this,a4),bb(this,aW),bb(this,aX),bb(this,aY),bb(this,aZ,{}),bb(this,a$,{}),bb(this,a_),bb(this,a0),bb(this,a1),bb(this,a2),bb(this,a3,""),bc(this,aY,ax()),this.nativeEl.addEventListener("muxmetadata",a=>{var b;let c=(a=>{var b;return null==(b=au.get(a))?void 0:b.metadata})(this.nativeEl),d=null!=(b=this.metadata)?b:{};this.metadata={...c,...d},(null==c?void 0:c["com.mux.video.branding"])==="mux-free-plan"&&(bc(this,a3,"default"),this.updateLogo())})}static get NAME(){return bi}static get VERSION(){return be}static get observedAttributes(){var a;return[...bh,...null!=(a=a7.lB.observedAttributes)?a:[]]}static getLogoHTML(a){return a&&"false"!==a?"default"===a?bf:`<img part="logo" src="${a}" />`:""}static getTemplateHTML(a={}){var b;return`
      ${a7.lB.getTemplateHTML(a)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(b=a[bg.LOGO])?b:"")}
      </slot>
    `}get preferCmcd(){var a;return null!=(a=this.getAttribute(bg.PREFER_CMCD))?a:void 0}set preferCmcd(a){a!==this.preferCmcd&&(a?s.includes(a)?this.setAttribute(bg.PREFER_CMCD,a):console.warn(`Invalid value for preferCmcd. Must be one of ${s.join()}`):this.removeAttribute(bg.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(bg.PLAYER_INIT_TIME)?+this.getAttribute(bg.PLAYER_INIT_TIME):ba(this,aY)}set playerInitTime(a){a!=this.playerInitTime&&(null==a?this.removeAttribute(bg.PLAYER_INIT_TIME):this.setAttribute(bg.PLAYER_INIT_TIME,`${+a}`))}get playerSoftwareName(){var a;return null!=(a=ba(this,a1))?a:bi}set playerSoftwareName(a){bc(this,a1,a)}get playerSoftwareVersion(){var a;return null!=(a=ba(this,a0))?a:be}set playerSoftwareVersion(a){bc(this,a0,a)}get _hls(){var a;return null==(a=ba(this,aW))?void 0:a.engine}get mux(){var a;return null==(a=this.nativeEl)?void 0:a.mux}get error(){var a;return null!=(a=aC(this.nativeEl))?a:null}get errorTranslator(){return ba(this,a2)}set errorTranslator(a){bc(this,a2,a)}get src(){return this.getAttribute("src")}set src(a){a!==this.src&&(null==a?this.removeAttribute("src"):this.setAttribute("src",a))}get type(){var a;return null!=(a=this.getAttribute(bg.TYPE))?a:void 0}set type(a){a!==this.type&&(a?this.setAttribute(bg.TYPE,a):this.removeAttribute(bg.TYPE))}get preload(){let a=this.getAttribute("preload");return""===a?"auto":["none","metadata","auto"].includes(a)?a:super.preload}set preload(a){a!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(a)?this.setAttribute("preload",a):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(bg.DEBUG)}set debug(a){a!==this.debug&&(a?this.setAttribute(bg.DEBUG,""):this.removeAttribute(bg.DEBUG))}get disableTracking(){return this.hasAttribute(bg.DISABLE_TRACKING)}set disableTracking(a){a!==this.disableTracking&&this.toggleAttribute(bg.DISABLE_TRACKING,!!a)}get disableCookies(){return this.hasAttribute(bg.DISABLE_COOKIES)}set disableCookies(a){a!==this.disableCookies&&(a?this.setAttribute(bg.DISABLE_COOKIES,""):this.removeAttribute(bg.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(bg.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(a){a!==this.disablePseudoEnded&&(a?this.setAttribute(bg.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(bg.DISABLE_PSEUDO_ENDED))}get startTime(){let a=this.getAttribute(bg.START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set startTime(a){a!==this.startTime&&(null==a?this.removeAttribute(bg.START_TIME):this.setAttribute(bg.START_TIME,`${a}`))}get playbackId(){var a;return this.hasAttribute(bg.PLAYBACK_ID)?this.getAttribute(bg.PLAYBACK_ID):null!=(a=aB(this.src))?a:void 0}set playbackId(a){a!==this.playbackId&&(a?this.setAttribute(bg.PLAYBACK_ID,a):this.removeAttribute(bg.PLAYBACK_ID))}get maxResolution(){var a;return null!=(a=this.getAttribute(bg.MAX_RESOLUTION))?a:void 0}set maxResolution(a){a!==this.maxResolution&&(a?this.setAttribute(bg.MAX_RESOLUTION,a):this.removeAttribute(bg.MAX_RESOLUTION))}get minResolution(){var a;return null!=(a=this.getAttribute(bg.MIN_RESOLUTION))?a:void 0}set minResolution(a){a!==this.minResolution&&(a?this.setAttribute(bg.MIN_RESOLUTION,a):this.removeAttribute(bg.MIN_RESOLUTION))}get renditionOrder(){var a;return null!=(a=this.getAttribute(bg.RENDITION_ORDER))?a:void 0}set renditionOrder(a){a!==this.renditionOrder&&(a?this.setAttribute(bg.RENDITION_ORDER,a):this.removeAttribute(bg.RENDITION_ORDER))}get programStartTime(){let a=this.getAttribute(bg.PROGRAM_START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set programStartTime(a){null==a?this.removeAttribute(bg.PROGRAM_START_TIME):this.setAttribute(bg.PROGRAM_START_TIME,`${a}`)}get programEndTime(){let a=this.getAttribute(bg.PROGRAM_END_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set programEndTime(a){null==a?this.removeAttribute(bg.PROGRAM_END_TIME):this.setAttribute(bg.PROGRAM_END_TIME,`${a}`)}get assetStartTime(){let a=this.getAttribute(bg.ASSET_START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set assetStartTime(a){null==a?this.removeAttribute(bg.ASSET_START_TIME):this.setAttribute(bg.ASSET_START_TIME,`${a}`)}get assetEndTime(){let a=this.getAttribute(bg.ASSET_END_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set assetEndTime(a){null==a?this.removeAttribute(bg.ASSET_END_TIME):this.setAttribute(bg.ASSET_END_TIME,`${a}`)}get customDomain(){var a;return null!=(a=this.getAttribute(bg.CUSTOM_DOMAIN))?a:void 0}set customDomain(a){a!==this.customDomain&&(a?this.setAttribute(bg.CUSTOM_DOMAIN,a):this.removeAttribute(bg.CUSTOM_DOMAIN))}get drmToken(){var a;return null!=(a=this.getAttribute(bg.DRM_TOKEN))?a:void 0}set drmToken(a){a!==this.drmToken&&(a?this.setAttribute(bg.DRM_TOKEN,a):this.removeAttribute(bg.DRM_TOKEN))}get playbackToken(){var a,b,c,d;if(this.hasAttribute(bg.PLAYBACK_TOKEN))return null!=(a=this.getAttribute(bg.PLAYBACK_TOKEN))?a:void 0;if(this.hasAttribute(bg.PLAYBACK_ID)){let[,a]=x(null!=(b=this.playbackId)?b:"");return null!=(c=new URLSearchParams(a).get("token"))?c:void 0}if(this.src)return null!=(d=new URLSearchParams(this.src).get("token"))?d:void 0}set playbackToken(a){a!==this.playbackToken&&(a?this.setAttribute(bg.PLAYBACK_TOKEN,a):this.removeAttribute(bg.PLAYBACK_TOKEN))}get tokens(){let a=this.getAttribute(bg.PLAYBACK_TOKEN),b=this.getAttribute(bg.DRM_TOKEN);return{...ba(this,a$),...null!=a?{playback:a}:{},...null!=b?{drm:b}:{}}}set tokens(a){bc(this,a$,null!=a?a:{})}get ended(){return aI(this.nativeEl,this._hls)}get envKey(){var a;return null!=(a=this.getAttribute(bg.ENV_KEY))?a:void 0}set envKey(a){a!==this.envKey&&(a?this.setAttribute(bg.ENV_KEY,a):this.removeAttribute(bg.ENV_KEY))}get beaconCollectionDomain(){var a;return null!=(a=this.getAttribute(bg.BEACON_COLLECTION_DOMAIN))?a:void 0}set beaconCollectionDomain(a){a!==this.beaconCollectionDomain&&(a?this.setAttribute(bg.BEACON_COLLECTION_DOMAIN,a):this.removeAttribute(bg.BEACON_COLLECTION_DOMAIN))}get streamType(){var a;return null!=(a=this.getAttribute(bg.STREAM_TYPE))?a:aD(this.nativeEl)}set streamType(a){a!==this.streamType&&(a?this.setAttribute(bg.STREAM_TYPE,a):this.removeAttribute(bg.STREAM_TYPE))}get targetLiveWindow(){var a,b,c;return this.hasAttribute(bg.TARGET_LIVE_WINDOW)?+this.getAttribute(bg.TARGET_LIVE_WINDOW):(a=this.nativeEl,null!=(c=null==(b=au.get(a))?void 0:b.targetLiveWindow)?c:NaN)}set targetLiveWindow(a){a!=this.targetLiveWindow&&(null==a?this.removeAttribute(bg.TARGET_LIVE_WINDOW):this.setAttribute(bg.TARGET_LIVE_WINDOW,`${+a}`))}get liveEdgeStart(){var a,b;if(this.hasAttribute(bg.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:c}=this,d=null!=(a=this.nativeEl.seekable.end(0))?a:0;return Math.max(null!=(b=this.nativeEl.seekable.start(0))?b:0,d-c)}return(a=>{var b;let c=null==(b=au.get(a))?void 0:b.liveEdgeStartOffset;if("number"!=typeof c)return NaN;let d=aE(a);return d.length?d.end(d.length-1)-c:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(bg.LIVE_EDGE_OFFSET))return+this.getAttribute(bg.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){a!=this.liveEdgeOffset&&(null==a?this.removeAttribute(bg.LIVE_EDGE_OFFSET):this.setAttribute(bg.LIVE_EDGE_OFFSET,`${+a}`))}get seekable(){return aE(this.nativeEl)}async addCuePoints(a){return Q(this.nativeEl,a)}get activeCuePoint(){return S(this.nativeEl)}get cuePoints(){return function(a,b={label:O}){let c=M(a,b.label,"metadata");return null!=c&&c.cues?Array.from(c.cues,a=>R(a)):[]}(this.nativeEl)}async addChapters(a){return X(this.nativeEl,a)}get activeChapter(){return Y(this.nativeEl)}get chapters(){return function(a,b={label:U}){var c;let d=M(a,b.label,"chapters");return null!=(c=null==d?void 0:d.cues)&&c.length?Array.from(d.cues,a=>W(a)):[]}(this.nativeEl)}getStartDate(){return function(a,b){if(b){let c=b.playingDate;if(null!=c)return new Date(c.getTime()-1e3*a.currentTime)}return"function"==typeof a.getStartDate?a.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var a,b;return a=this.nativeEl,(b=this._hls)&&b.playingDate?b.playingDate:new Date("function"==typeof a.getStartDate?a.getStartDate().getTime()+1e3*a.currentTime:NaN)}get preferPlayback(){let a=this.getAttribute(bg.PREFER_PLAYBACK);if(a===q.MSE||a===q.NATIVE)return a}set preferPlayback(a){a!==this.preferPlayback&&(a===q.MSE||a===q.NATIVE?this.setAttribute(bg.PREFER_PLAYBACK,a):this.removeAttribute(bg.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(a=>a.startsWith("metadata-")&&![bg.METADATA_URL].includes(a)).reduce((a,b)=>{let c=this.getAttribute(b);return null!=c&&(a[b.replace(/^metadata-/,"").replace(/-/g,"_")]=c),a},{}),...ba(this,aZ)}}set metadata(a){bc(this,aZ,null!=a?a:{}),this.mux&&this.mux.emit("hb",ba(this,aZ))}get _hlsConfig(){return ba(this,a_)}set _hlsConfig(a){bc(this,a_,a)}get logo(){var a;return null!=(a=this.getAttribute(bg.LOGO))?a:ba(this,a3)}set logo(a){a?this.setAttribute(bg.LOGO,a):this.removeAttribute(bg.LOGO)}load(){bc(this,aW,((a,b,c)=>{var d,e,f,g;aJ(b,c,a);let{metadata:l={}}=a,{view_session_id:n=ay()}=l,o=null!=(e=null==(d=a)?void 0:d.metadata)&&e.video_id?d.metadata.video_id:aR(d)&&null!=(g=null!=(f=aA(d.playbackId))?f:aB(d.src))?g:d.src;l.view_session_id=n,l.video_id=o,a.metadata=l,a.drmTypeCb=a=>{var c;null==(c=b.mux)||c.emit("hb",{view_drm_type:a})},au.set(b,{retryCount:0});let q=((a,b)=>{let{debug:c,streamType:d,startTime:e=-1,metadata:f,preferCmcd:g,_hlsConfig:h={}}=a,j=y(a)===t.M3U8,k=aK(a,b);if(j&&!k&&aw){let j=aL(d),k=aM(a),l=new i({debug:c,startPosition:e,cmcd:[r.QUERY,r.HEADER].includes(g)?{useHeaders:g===r.HEADER,sessionId:null==f?void 0:f.view_session_id,contentId:null==f?void 0:f.video_id}:void 0,xhrSetup:(a,b)=>{var c,d;if(g&&g!==r.QUERY)return;let e=new URL(b);if(!e.searchParams.has("CMCD"))return;let f=(null!=(d=null==(c=e.searchParams.get("CMCD"))?void 0:c.split(","))?d:[]).filter(a=>a.startsWith("sid")||a.startsWith("cid")).join(",");e.searchParams.set("CMCD",f),a.open("GET",e)},...null==h.capLevelToPlayerSize?{capLevelController:ab}:{},...{backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},...j,...k,...h});return l.on(i.Events.MANIFEST_PARSED,async function(a,c){var d,e;let f=null==(d=c.sessionData)?void 0:d["com.apple.hls.chapters"];(null!=f&&f.URI||null!=f&&f.VALUE.toLocaleLowerCase().startsWith("http"))&&ap(null!=(e=null==f?void 0:f.URI)?e:null==f?void 0:f.VALUE,b)}),l}})(a,b),s=(({preload:a,src:b},c,d)=>{let e=a=>{null!=a&&["","none","metadata","auto"].includes(a)?c.setAttribute("preload",a):c.removeAttribute("preload")};if(!d)return e(a),e;let f=!1,g=!1,h=d.config.maxBufferLength,i=d.config.maxBufferSize,j=a=>{e(a);let b=null!=a?a:c.preload;g||"none"===b||("metadata"===b?(d.config.maxBufferLength=1,d.config.maxBufferSize=1):(d.config.maxBufferLength=h,d.config.maxBufferSize=i),k())},k=()=>{!f&&b&&(f=!0,d.loadSource(b))};return w(c,"play",()=>{g=!0,d.config.maxBufferLength=h,d.config.maxBufferSize=i,k()},{once:!0}),j(a),j})(a,b,q);null!=a&&a.muxDataKeepSession&&null!=b&&b.mux&&!b.mux.deleted?q&&b.mux.addHLSJS({hlsjs:q,Hls:q?i:void 0}):((a,b,c)=>{var d;let{envKey:e,disableTracking:f,muxDataSDK:g=h.A,muxDataSDKOptions:j={}}=a,k=aR(a);if(!f&&(e||k)){let{playerInitTime:f,playerSoftwareName:h,playerSoftwareVersion:k,beaconCollectionDomain:l,debug:m,disableCookies:n}=a,o={...a.metadata,video_title:(null==(d=null==a?void 0:a.metadata)?void 0:d.video_title)||void 0};g.monitor(b,{debug:m,beaconCollectionDomain:l,hlsjs:c,Hls:c?i:void 0,automaticErrorTracking:!1,errorTranslator:b=>"string"!=typeof b.player_error_code&&("function"==typeof a.errorTranslator?a.errorTranslator(b):b),disableCookies:n,...j,data:{...e?{env_key:e}:{},player_software_name:h,player_software:h,player_software_version:k,player_init_time:f,...o}})}})(a,b,q),((a,b,c)=>{var d,e;let f=aK(a,b),{src:g,customDomain:h=av}=a,l=()=>{b.ended||a.disablePseudoEnded||!aI(b,c)||(aH(b,c)?b.currentTime=b.buffered.end(b.buffered.length-1):b.dispatchEvent(new Event("ended")))},n,o,q=()=>{let a=aE(b),c,d;a.length>0&&(c=a.start(0),d=a.end(0)),(o!==d||n!==c)&&b.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),n=c,o=d};if(w(b,"durationchange",q),b&&f){let c=y(a);if("string"==typeof g){if(g.endsWith(".mp4")&&g.includes(h)){let a=aB(g);ap(new URL(`https://stream.${h}/${a}/metadata.json`).toString(),b)}let f=()=>{if(aD(b)!==p.LIVE||Number.isFinite(b.duration))return;let a=setInterval(q,1e3);b.addEventListener("teardown",()=>{clearInterval(a)},{once:!0}),w(b,"durationchange",()=>{Number.isFinite(b.duration)&&clearInterval(a)})},i=async()=>ao(g,b,c).then(f).catch(c=>{if(c instanceof Response){let d=_(c,j.VIDEO,a);if(d)return void aU(b,d)}});if("none"===b.preload){let a=()=>{i(),b.removeEventListener("loadedmetadata",c)},c=()=>{i(),b.removeEventListener("play",a)};w(b,"play",a,{once:!0}),w(b,"loadedmetadata",c,{once:!0})}else i();null!=(d=a.tokens)&&d.drm?((a,b)=>{w(b,"encrypted",async c=>{try{let d=c.initDataType;if("skd"!==d)return void console.error(`Received unexpected initialization data type "${d}"`);if(!b.mediaKeys){let c=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[d],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(b=>{var c;return null==(c=a.drmTypeCb)||c.call(a,al.FAIRPLAY),b}).catch(()=>{let a=F("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),c=new m(a,m.MEDIA_ERR_ENCRYPTED,!0);c.errorCategory=j.DRM,c.muxCode=k.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,aU(b,c)});if(!c)return;let e=await c.createMediaKeys();try{let b=await aN(aQ(a,"fairplay")).catch(b=>{if(b instanceof Response){let c=_(b,j.DRM,a);return console.error("mediaError",null==c?void 0:c.message,null==c?void 0:c.context),c?Promise.reject(c):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(b)});await e.setServerCertificate(b).catch(()=>{let a=F("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),b=new m(a,m.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory=j.DRM,b.muxCode=k.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(b)})}catch(a){aU(b,a);return}await b.setMediaKeys(e)}let e=c.initData;if(null==e)return void console.error(`Could not start encrypted playback due to missing initData in ${c.type} event`);let f=b.mediaKeys.createSession();f.addEventListener("keystatuseschange",()=>{f.keyStatuses.forEach(a=>{let c;if("internal-error"===a){let a=F("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");(c=new m(a,m.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=j.DRM,c.muxCode=k.ENCRYPTED_CDM_ERROR}else if("output-restricted"===a||"output-downscaled"===a){let a=F("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");(c=new m(a,m.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=j.DRM,c.muxCode=k.ENCRYPTED_OUTPUT_RESTRICTED}c&&aU(b,c)})});let g=await Promise.all([f.generateRequest(d,e).catch(()=>{let a=F("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),c=new m(a,m.MEDIA_ERR_ENCRYPTED,!0);c.errorCategory=j.DRM,c.muxCode=k.ENCRYPTED_GENERATE_REQUEST_FAILED,aU(b,c)}),new Promise(a=>{f.addEventListener("message",b=>{a(b.message)},{once:!0})})]).then(([,a])=>a),h=await aO(g,aP(a,"fairplay")).catch(b=>{if(b instanceof Response){let c=_(b,j.DRM,a);return console.error("mediaError",null==c?void 0:c.message,null==c?void 0:c.context),c?Promise.reject(c):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(b)});await f.update(h).catch(()=>{let a=F("Failed to update DRM license. This may be an issue with the player or your protected content."),b=new m(a,m.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory=j.DRM,b.muxCode=k.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(b)})}catch(a){aU(b,a);return}})})(a,b):w(b,"encrypted",()=>{let a=new m(F("Attempting to play DRM-protected content without providing a DRM token."),m.MEDIA_ERR_ENCRYPTED,!0);a.errorCategory=j.DRM,a.muxCode=k.ENCRYPTED_MISSING_TOKEN,aU(b,a)},{once:!0}),b.setAttribute("src",g),a.startTime&&((null!=(e=au.get(b))?e:{}).startTime=a.startTime,b.addEventListener("durationchange",aS,{once:!0}))}else b.removeAttribute("src");b.addEventListener("error",aT),b.addEventListener("error",aV),b.addEventListener("emptied",()=>{b.querySelectorAll("track[data-removeondestroy]").forEach(a=>{a.remove()})},{once:!0}),w(b,"pause",l),w(b,"seeked",l),w(b,"play",()=>{b.ended||aG(b.currentTime,b.duration)&&(b.currentTime=b.seekable.length?b.seekable.start(0):0)})}else c&&g?(c.once(i.Events.LEVEL_LOADED,(a,d)=>{((a,b,c)=>{var d,e,f,g,h,i,j,k;let{streamType:l,targetLiveWindow:m,liveEdgeStartOffset:n,lowLatency:o}=(a=>{var b;let c=a.type,d=z(c),e=A(c),f,g=!!(null!=(b=a.partList)&&b.length);return d===p.LIVE&&(f=g?2*a.partTarget:3*a.targetduration),{streamType:d,targetLiveWindow:e,liveEdgeStartOffset:f,lowLatency:g}})(a);if(l===p.LIVE){o?(c.config.backBufferLength=null!=(d=c.userConfig.backBufferLength)?d:4,c.config.maxFragLookUpTolerance=null!=(e=c.userConfig.maxFragLookUpTolerance)?e:.001,c.config.abrBandWidthUpFactor=null!=(f=c.userConfig.abrBandWidthUpFactor)?f:c.config.abrBandWidthFactor):c.config.backBufferLength=null!=(g=c.userConfig.backBufferLength)?g:8;let a=Object.freeze({get length(){return b.seekable.length},start:a=>b.seekable.start(a),end(a){var d;return a>this.length||a<0||Number.isFinite(b.duration)?b.seekable.end(a):null!=(d=c.liveSyncPosition)?d:b.seekable.end(a)}});(null!=(h=au.get(b))?h:{}).seekable=a}(null!=(i=au.get(b))?i:{}).liveEdgeStartOffset=n,(null!=(j=au.get(b))?j:{}).targetLiveWindow=m,b.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(k=au.get(b))?k:{}).streamType=l,b.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(d.details,b,c),q(),aD(b)!==p.LIVE||Number.isFinite(b.duration)||(c.on(i.Events.LEVEL_UPDATED,q),w(b,"durationchange",()=>{Number.isFinite(b.duration)&&c.off(i.Events.LEVELS_UPDATED,q)}))}),c.on(i.Events.ERROR,(d,e)=>{var f,g;let h=a6(e,a);if(h.muxCode===k.NETWORK_NOT_READY){let a=null!=(f=au.get(b))?f:{},d=null!=(g=a.retryCount)?g:0;if(d<6){let f=0===d?5e3:6e4,g=new m(`Retrying in ${f/1e3} seconds...`,h.code,h.fatal);Object.assign(g,h),aU(b,g),setTimeout(()=>{a.retryCount=d+1,"manifestLoadError"===e.details&&e.url&&c.loadSource(e.url)},f);return}{a.retryCount=0;let c=new m('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',h.code,h.fatal);Object.assign(c,h),aU(b,c);return}}aU(b,h)}),c.on(i.Events.MANIFEST_LOADED,()=>{let a=au.get(b);a&&a.error&&(a.error=null,a.retryCount=0,b.dispatchEvent(new Event("emptied")),b.dispatchEvent(new Event("loadstart")))}),b.addEventListener("error",aV),w(b,"waiting",l),function(a,b){var c;if(!("videoTracks"in a))return;let d=new WeakMap;b.on(i.Events.MANIFEST_PARSED,function(b,c){f();let e=a.addVideoTrack("main");for(let[a,b]of(e.selected=!0,c.levels.entries())){let c=e.addRendition(b.url[0],b.width,b.height,b.videoCodec,b.bitrate);d.set(b,`${a}`),c.id=`${a}`}}),b.on(i.Events.AUDIO_TRACKS_UPDATED,function(b,c){for(let b of(e(),c.audioTracks)){let c=b.default?"main":"alternative",d=a.addAudioTrack(c,b.name,b.lang);d.id=`${b.id}`,b.default&&(d.enabled=!0)}}),a.audioTracks.addEventListener("change",()=>{var c;let d=+(null==(c=[...a.audioTracks].find(a=>a.enabled))?void 0:c.id),e=b.audioTracks.map(a=>a.id);d!=b.audioTrack&&e.includes(d)&&(b.audioTrack=d)}),b.on(i.Events.LEVELS_UPDATED,function(b,c){var e;let f=a.videoTracks[null!=(e=a.videoTracks.selectedIndex)?e:0];if(!f)return;let g=c.levels.map(a=>d.get(a));for(let b of a.videoRenditions)b.id&&!g.includes(b.id)&&f.removeRendition(b)}),null==(c=a.videoRenditions)||c.addEventListener("change",a=>{let c=a.target.selectedIndex;c!=b.nextLevel&&(b.nextLevel=c)});let e=()=>{for(let b of a.audioTracks)a.removeAudioTrack(b)},f=()=>{(()=>{for(let b of a.videoTracks)a.removeVideoTrack(b)})(),e()};b.once(i.Events.DESTROYING,f)}(a,c),function(a,b){b.on(i.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(c,{tracks:d})=>{d.forEach(c=>{var d,e;let f=null!=(d=c.subtitleTrack)?d:c.closedCaptions,g=b.subtitleTracks.findIndex(({lang:a,name:b,type:d})=>a==(null==f?void 0:f.lang)&&b===c.label&&d.toLowerCase()===c.kind),h=(null!=(e=c._id)?e:c.default)?"default":`${c.kind}${g}`;L(a,c.kind,c.label,null==f?void 0:f.lang,h,c.default)})});let c=()=>{if(!b.subtitleTracks.length)return;let c=Array.from(a.textTracks).find(a=>a.id&&"showing"===a.mode&&["subtitles","captions"].includes(a.kind));if(!c)return;let d=b.subtitleTracks[b.subtitleTrack],e=d?d.default?"default":`${b.subtitleTracks[b.subtitleTrack].type.toLowerCase()}${b.subtitleTrack}`:void 0;if(b.subtitleTrack<0||(null==c?void 0:c.id)!==e){let a=b.subtitleTracks.findIndex(({lang:a,name:b,type:d,default:e})=>"default"===c.id&&e||a==c.language&&b===c.label&&d.toLowerCase()===c.kind);b.subtitleTrack=a}(null==c?void 0:c.id)===e&&c.cues&&Array.from(c.cues).forEach(a=>{c.addCue(a)})};a.textTracks.addEventListener("change",c),b.on(i.Events.CUES_PARSED,(b,{track:c,cues:d})=>{let e=a.textTracks.getTrackById(c);if(!e)return;let f="disabled"===e.mode;f&&(e.mode="hidden"),d.forEach(a=>{var b;null!=(b=e.cues)&&b.getCueById(a.id)||e.addCue(a)}),f&&(e.mode="disabled")}),b.once(i.Events.DESTROYING,()=>{a.textTracks.removeEventListener("change",c),a.querySelectorAll("track[data-removeondestroy]").forEach(a=>{a.remove()})});let d=()=>{Array.from(a.textTracks).forEach(b=>{var c,d;if(!["subtitles","caption"].includes(b.kind)&&("thumbnails"===b.label||"chapters"===b.kind)){if(!(null!=(c=b.cues)&&c.length)){let c="track";b.kind&&(c+=`[kind="${b.kind}"]`),b.label&&(c+=`[label="${b.label}"]`);let e=a.querySelector(c),f=null!=(d=null==e?void 0:e.getAttribute("src"))?d:"";null==e||e.removeAttribute("src"),setTimeout(()=>{null==e||e.setAttribute("src",f)},0)}"hidden"!==b.mode&&(b.mode="hidden")}})};b.once(i.Events.MANIFEST_LOADED,d),b.once(i.Events.MEDIA_ATTACHED,d)}(b,c),c.attachMedia(b)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")})(a,b,q),T(b),Z(b);let u=((a,b,c)=>{let{autoplay:d}=a,e=!1,f=!1,g=I(d)?d:!!d,h=()=>{e||w(b,"playing",()=>{e=!0},{once:!0})};if(h(),w(b,"loadstart",()=>{e=!1,h(),J(b,g)},{once:!0}),w(b,"loadstart",()=>{c||(f=a.streamType&&a.streamType!==p.UNKNOWN?a.streamType===p.LIVE:!Number.isFinite(b.duration)),J(b,g)},{once:!0}),c&&c.once(i.Events.LEVEL_LOADED,(b,c)=>{var d;f=a.streamType&&a.streamType!==p.UNKNOWN?a.streamType===p.LIVE:null!=(d=c.details.live)&&d}),!g){let d=()=>{!f||Number.isFinite(a.startTime)||(null!=c&&c.liveSyncPosition?b.currentTime=c.liveSyncPosition:Number.isFinite(b.seekable.end(0))&&(b.currentTime=b.seekable.end(0)))};c&&w(b,"play",()=>{"metadata"===b.preload?c.once(i.Events.LEVEL_UPDATED,d):d()},{once:!0})}return a=>{e||J(b,g=I(a)?a:!!a)}})(a,b,q);return{engine:q,setAutoplay:u,setPreload:s}})(this,this.nativeEl,ba(this,aW)))}unload(){aJ(this.nativeEl,ba(this,aW),this),bc(this,aW,void 0)}attributeChangedCallback(a,b,c){var d,e;switch(a7.lB.observedAttributes.includes(a)&&!["src","autoplay","preload"].includes(a)&&super.attributeChangedCallback(a,b,c),a){case bg.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=c?c:void 0;break;case bg.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=c?c:void 0;break;case"src":{let a=!!b,d=!!c;!a&&d?bd(this,a4,a5).call(this):a&&!d?this.unload():a&&d&&(this.unload(),bd(this,a4,a5).call(this));break}case"autoplay":if(c===b)break;null==(d=ba(this,aW))||d.setAutoplay(this.autoplay);break;case"preload":if(c===b)break;null==(e=ba(this,aW))||e.setPreload(c);break;case bg.PLAYBACK_ID:this.src=az(this);break;case bg.DEBUG:{let a=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=a);break}case bg.METADATA_URL:c&&fetch(c).then(a=>a.json()).then(a=>this.metadata=a).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${c}!`));break;case bg.STREAM_TYPE:(null==c||c!==b)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case bg.TARGET_LIVE_WINDOW:(null==c||c!==b)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case bg.LOGO:(null==c||c!==b)&&this.updateLogo()}}updateLogo(){if(!this.shadowRoot)return;let a=this.shadowRoot.querySelector('slot[name="logo"]');a&&(a.innerHTML=this.constructor.getLogoHTML(ba(this,a3)||this.logo))}connectedCallback(){var a;null==(a=super.connectedCallback)||a.call(this),this.nativeEl&&this.src&&!ba(this,aW)&&bd(this,a4,a5).call(this)}disconnectedCallback(){this.unload()}handleEvent(a){a.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(a.type,{composed:!0,detail:a.detail}))}};aW=new WeakMap,aX=new WeakMap,aY=new WeakMap,aZ=new WeakMap,a$=new WeakMap,a_=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakSet,a5=async function(){ba(this,aX)||(await bc(this,aX,Promise.resolve()),bc(this,aX,null),this.load())};var bk=c(67307),bl=c(79291),bm=a=>{throw TypeError(a)},bn=(a,b,c)=>b.has(a)||bm("Cannot "+c),bo=(a,b,c)=>(bn(a,b,"read from private field"),c?c.call(a):b.get(a)),bp=(a,b,c)=>b.has(a)?bm("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),bq=(a,b,c,d)=>(bn(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),br=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};if("undefined"==typeof DocumentFragment){class a extends br{}globalThis.DocumentFragment=a}var bs,bt=class extends br{},bu=class{constructor(a,b={}){bp(this,bs),bq(this,bs,null==b?void 0:b.detail)}get detail(){return bo(this,bs)}initCustomEvent(){}};bs=new WeakMap;var bv={document:{createElement:function(a,b){return new bt}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(bt)},CustomEvent:bu,EventTarget:br,HTMLElement:bt,HTMLVideoElement:class extends br{}},bw="undefined"==typeof window||void 0===globalThis.customElements,bx=bw?bv:globalThis;bw?bv.document:globalThis.document;var by,bz=class extends(0,bk.J)((0,bl.u6)(bj)){constructor(){super(...arguments),bp(this,by)}get autoplay(){let a=this.getAttribute("autoplay");return null!==a&&(""===a||a)}set autoplay(a){a!==this.autoplay&&(a?this.setAttribute("autoplay","string"==typeof a?a:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var a;return null!=(a=bo(this,by))?a:this.muxCastCustomData}set castCustomData(a){bq(this,by,a)}};by=new WeakMap,bx.customElements.get("mux-video")||(bx.customElements.define("mux-video",bz),bx.MuxVideoElement=bz);let bA={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},bB={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},bC={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},bD=Object.entries(bC),bE=bD.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{}),bF=bD.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(bF).reduce((a,[b,c])=>{let d=bE[b];return d&&(a[c]=d),a},{userinactivechange:"userinactive"});let bG=Object.entries(bE).reduce((a,[b,c])=>{let d=bF[b];return d&&(a[c]=d),a},{userinactive:"userinactivechange"}),bH={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},bI={DISABLED:"disabled",SHOWING:"showing"},bJ={MOUSE:"mouse",TOUCH:"touch"},bK={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},bL={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},bM={FULLSCREEN:"fullscreen"};function bN(a){if(a){let{id:b,width:c,height:d}=a;return[b,c,d].filter(a=>null!=a).join(":")}}function bO(a){if(a){let[b,c,d]=a.split(":");return{id:b,width:+c,height:+d}}}function bP(a){if(a){let{id:b,kind:c,language:d,label:e}=a;return[b,c,d,e].filter(a=>null!=a).join(":")}}function bQ(a){if(a){let[b,c,d,e]=a.split(":");return{id:b,kind:c,language:d,label:e}}}function bR(a){return"number"==typeof a&&!Number.isNaN(a)&&Number.isFinite(a)}function bS(a){return"string"==typeof a&&!isNaN(a)&&!isNaN(parseFloat(a))}let bT=a=>new Promise(b=>setTimeout(b,a)),bU=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],bV=a=>{if(!bR(a))return"";let b=Math.abs(a),c=b!==a,d=new Date(0,0,0,0,0,b,0),e=[d.getHours(),d.getMinutes(),d.getSeconds()].map((a,b)=>a&&((a,b)=>{let c=1===a?bU[b].singular:bU[b].plural;return`${a} ${c}`})(a,b)).filter(a=>a).join(", ");return`${e}${c?" remaining":""}`};function bW(a,b){let c=!1;a<0&&(c=!0,a=0-a);let d=Math.floor((a=a<0?0:a)%60),e=Math.floor(a/60%60),f=Math.floor(a/3600),g=Math.floor(b/60%60),h=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(f=e=d="0"),e=(((f=f>0||h>0?f+":":"")||g>=10)&&e<10?"0"+e:e)+":",(c?"-":"")+f+e+(d=d<10?"0"+d:d)}Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let bX={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},bY=(null==(g9=globalThis.navigator)?void 0:g9.language)||"en",bZ=(a,b={})=>(a=>{var b,c,d;let[e]=bY.split("-");return(null==(b=bX[bY])?void 0:b[a])||(null==(c=bX[e])?void 0:c[a])||(null==(d=bX.en)?void 0:d[a])||a})(a).replace(/\{(\w+)\}/g,(a,c)=>c in b?String(b[c]):`{${c}}`);class b${addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class b_ extends b${}class b0 extends b_{constructor(){super(...arguments),this.role=null}}class b1{observe(){}unobserve(){}disconnect(){}}let b2={createElement:function(){return new b3.HTMLElement},createElementNS:function(){return new b3.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:a=>!1},b3={ResizeObserver:b1,document:b2,Node:b_,Element:b0,HTMLElement:class extends b0{constructor(){super(...arguments),this.innerHTML=""}get content(){return new b3.DocumentFragment}},DocumentFragment:class extends b${},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:a=>null,setItem(a,b){},removeItem(a){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:a=>({matches:!1,media:a}),DOMParser:class{parseFromString(a,b){return{body:{textContent:a}}}}},b4="undefined"==typeof window||void 0===window.customElements,b5=Object.keys(b3).every(a=>a in globalThis),b6=b4&&!b5?b3:globalThis,b7=b4&&!b5?b2:globalThis.document,b8=new WeakMap,b9=a=>{let b=b8.get(a);return b||b8.set(a,b=new Set),b},ca=new b6.ResizeObserver(a=>{for(let b of a)for(let a of b9(b.target))a(b)});function cb(a,b){b9(a).add(b),ca.observe(a)}function cc(a,b){let c=b9(a);c.delete(b),c.size||ca.unobserve(a)}function cd(a){let b={};for(let c of a)b[c.name]=c.value;return b}function ce(a){var b;return null!=(b=cf(a))?b:cj(a,"media-controller")}function cf(a){var b;let{MEDIA_CONTROLLER:c}=bB,d=a.getAttribute(c);if(d)return null==(b=cl(a))?void 0:b.getElementById(d)}let cg=(a,b,c=".value")=>{let d=a.querySelector(c);d&&(d.textContent=b)},ch=(a,b)=>((a,b)=>{let c=`slot[name="${b}"]`,d=a.shadowRoot.querySelector(c);return d?d.children:[]})(a,b)[0],ci=(a,b)=>!!a&&!!b&&(null!=a&&!!a.contains(b)||ci(a,b.getRootNode().host)),cj=(a,b)=>{if(!a)return null;let c=a.closest(b);return c||cj(a.getRootNode().host,b)};function ck(a=document){var b;let c=null==a?void 0:a.activeElement;return c?null!=(b=ck(c.shadowRoot))?b:c:null}function cl(a){var b;let c=null==(b=null==a?void 0:a.getRootNode)?void 0:b.call(a);return c instanceof ShadowRoot||c instanceof Document?c:null}function cm(a,{depth:b=3,checkOpacity:c=!0,checkVisibilityCSS:d=!0}={}){if(a.checkVisibility)return a.checkVisibility({checkOpacity:c,checkVisibilityCSS:d});let e=a;for(;e&&b>0;){let a=getComputedStyle(e);if(c&&"0"===a.opacity||d&&"hidden"===a.visibility||"none"===a.display)return!1;e=e.parentElement,b--}return!0}function cn(a,b){let c=function(a,b){var c,d;let e;for(e of null!=(c=a.querySelectorAll("style:not([media])"))?c:[]){let a;try{a=null==(d=e.sheet)?void 0:d.cssRules}catch{continue}for(let c of null!=a?a:[])if(b(c.selectorText))return c}}(a,a=>a===b);return c||co(a,b)}function co(a,b){var c,d;let e=null!=(c=a.querySelectorAll("style:not([media])"))?c:[],f=null==e?void 0:e[e.length-1];return(null==f?void 0:f.sheet)?(null==f||f.sheet.insertRule(`${b}{}`,f.sheet.cssRules.length),null==(d=f.sheet.cssRules)?void 0:d[f.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",a),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function cp(a,b,c=NaN){let d=a.getAttribute(b);return null!=d?+d:c}function cq(a,b,c){let d=+c;if(null==c||Number.isNaN(d)){a.hasAttribute(b)&&a.removeAttribute(b);return}cp(a,b,void 0)!==d&&a.setAttribute(b,`${d}`)}function cr(a,b){return a.hasAttribute(b)}function cs(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}cr(a,b)!=c&&a.toggleAttribute(b,c)}function ct(a,b,c=null){var d;return null!=(d=a.getAttribute(b))?d:c}function cu(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}let d=`${c}`;ct(a,b,void 0)!==d&&a.setAttribute(b,d)}var cv=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},cw=(a,b,c)=>(cv(a,b,"read from private field"),c?c.call(a):b.get(a)),cx=(a,b,c,d)=>(cv(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class cy extends b6.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,ha,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[bB.MEDIA_CONTROLLER,bE.MEDIA_PAUSED]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===bB.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=cw(this,ha))?void 0:d.unassociateElement)||e.call(d,this),cx(this,ha,null)),c&&this.isConnected&&(cx(this,ha,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=cw(this,ha))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c,d;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),cx(this,ha,function(a){var b;let c=a.getAttribute(bB.MEDIA_CONTROLLER);return c?null==(b=a.getRootNode())?void 0:b.getElementById(c):cj(a,"media-controller")}(this)),this.getAttribute(bB.MEDIA_CONTROLLER)&&(null==(b=null==(a=cw(this,ha))?void 0:a.associateElement)||b.call(a,this)),null==(c=cw(this,ha))||c.addEventListener("pointerdown",this),null==(d=cw(this,ha))||d.addEventListener("click",this)}disconnectedCallback(){var a,b,c,d;this.getAttribute(bB.MEDIA_CONTROLLER)&&(null==(b=null==(a=cw(this,ha))?void 0:a.unassociateElement)||b.call(a,this)),null==(c=cw(this,ha))||c.removeEventListener("pointerdown",this),null==(d=cw(this,ha))||d.removeEventListener("click",this),cx(this,ha,null)}handleEvent(a){var b;let c=null==(b=a.composedPath())?void 0:b[0];if(["video","media-controller"].includes(null==c?void 0:c.localName)){if("pointerdown"===a.type)this._pointerType=a.pointerType;else if("click"===a.type){let{clientX:b,clientY:c}=a,{left:d,top:e,width:f,height:g}=this.getBoundingClientRect(),h=b-d,i=c-e;if(h<0||i<0||h>f||i>g||0===f&&0===g)return;let j=this._pointerType||"mouse";if(this._pointerType=void 0,j===bJ.TOUCH)return void this.handleTap(a);if(j===bJ.MOUSE)return void this.handleMouseClick(a)}}}get mediaPaused(){return cr(this,bE.MEDIA_PAUSED)}set mediaPaused(a){cs(this,bE.MEDIA_PAUSED,a)}handleTap(a){}handleMouseClick(a){let b=this.mediaPaused?bA.MEDIA_PLAY_REQUEST:bA.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new b6.CustomEvent(b,{composed:!0,bubbles:!0}))}}ha=new WeakMap,cy.shadowRootOptions={mode:"open"},cy.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},b6.customElements.get("media-gesture-receiver")||b6.customElements.define("media-gesture-receiver",cy);var cz=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},cA=(a,b,c)=>(cz(a,b,"read from private field"),c?c.call(a):b.get(a)),cB=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},cC=(a,b,c,d)=>(cz(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),cD=(a,b,c)=>(cz(a,b,"access private method"),c);let cE={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},cF=Object.values(bE);function cG(a,b){var c,d,e;if(!a.isConnected)return;let f=Object.fromEntries((null!=(c=a.getAttribute(cE.BREAKPOINTS))?c:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(a=>a.split(":"))),g=(d=f,e=b,Object.keys(d).filter(a=>e>=parseInt(d[a]))),h=!1;if(Object.keys(f).forEach(b=>{if(g.includes(b)){a.hasAttribute(`breakpoint${b}`)||(a.setAttribute(`breakpoint${b}`,""),h=!0);return}a.hasAttribute(`breakpoint${b}`)&&(a.removeAttribute(`breakpoint${b}`),h=!0)}),h){let b=new CustomEvent(bF.BREAKPOINTS_CHANGE,{detail:g});a.dispatchEvent(b)}a.breakpointsComputed||(a.breakpointsComputed=!0,a.dispatchEvent(new CustomEvent(bF.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class cH extends b6.HTMLElement{constructor(){if(super(),cB(this,hg),cB(this,hk),cB(this,hm),cB(this,ho),cB(this,hq),cB(this,hs),cB(this,hb,0),cB(this,hc,null),cB(this,hd,null),cB(this,he,void 0),this.breakpointsComputed=!1,cB(this,hf,new MutationObserver(cD(this,hg,hh).bind(this))),cB(this,hi,!1),cB(this,hj,a=>{cA(this,hi)||(setTimeout(()=>{!function(a){cG(a.target,a.contentRect.width)}(a),cC(this,hi,!1)},0),cC(this,hi,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}let a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{if(!a.assignedElements({flatten:!0}).length){cA(this,hc)&&this.mediaUnsetCallback(cA(this,hc));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[cE.AUTOHIDE,cE.GESTURES_DISABLED].concat(cF).filter(a=>![bE.MEDIA_RENDITION_LIST,bE.MEDIA_AUDIO_TRACK_LIST,bE.MEDIA_CHAPTERS_CUES,bE.MEDIA_WIDTH,bE.MEDIA_HEIGHT,bE.MEDIA_ERROR,bE.MEDIA_ERROR_MESSAGE].includes(a))}attributeChangedCallback(a,b,c){a.toLowerCase()==cE.AUTOHIDE&&(this.autohide=c)}get media(){let a=this.querySelector(":scope > [slot=media]");return(null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a}async handleMediaUpdated(a){a&&(cC(this,hc,a),a.localName.includes("-")&&await b6.customElements.whenDefined(a.localName),this.mediaSetCallback(a))}connectedCallback(){var a;cA(this,hf).observe(this,{childList:!0,subtree:!0}),cb(this,cA(this,hj));let b=null!=this.getAttribute(cE.AUDIO)?bZ("audio player"):bZ("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",b),this.handleMediaUpdated(this.media),this.setAttribute(cE.USER_INACTIVE,""),cG(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(a=b6.window)||a.addEventListener("mouseup",this)}disconnectedCallback(){var a;cA(this,hf).disconnect(),cc(this,cA(this,hj)),this.media&&this.mediaUnsetCallback(this.media),null==(a=b6.window)||a.removeEventListener("mouseup",this)}mediaSetCallback(a){}mediaUnsetCallback(a){cC(this,hc,null)}handleEvent(a){switch(a.type){case"pointerdown":cC(this,hb,a.timeStamp);break;case"pointermove":cD(this,hk,hl).call(this,a);break;case"pointerup":cD(this,hm,hn).call(this,a);break;case"mouseleave":cD(this,ho,hp).call(this);break;case"mouseup":this.removeAttribute(cE.KEYBOARD_CONTROL);break;case"keyup":cD(this,hs,ht).call(this),this.setAttribute(cE.KEYBOARD_CONTROL,"")}}set autohide(a){let b=Number(a);cC(this,he,isNaN(b)?0:b)}get autohide(){return(void 0===cA(this,he)?2:cA(this,he)).toString()}get breakpoints(){return ct(this,cE.BREAKPOINTS)}set breakpoints(a){cu(this,cE.BREAKPOINTS,a)}get audio(){return cr(this,cE.AUDIO)}set audio(a){cs(this,cE.AUDIO,a)}get gesturesDisabled(){return cr(this,cE.GESTURES_DISABLED)}set gesturesDisabled(a){cs(this,cE.GESTURES_DISABLED,a)}get keyboardControl(){return cr(this,cE.KEYBOARD_CONTROL)}set keyboardControl(a){cs(this,cE.KEYBOARD_CONTROL,a)}get noAutohide(){return cr(this,cE.NO_AUTOHIDE)}set noAutohide(a){cs(this,cE.NO_AUTOHIDE,a)}get autohideOverControls(){return cr(this,cE.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(a){cs(this,cE.AUTOHIDE_OVER_CONTROLS,a)}get userInteractive(){return cr(this,cE.USER_INACTIVE)}set userInteractive(a){cs(this,cE.USER_INACTIVE,a)}}hb=new WeakMap,hc=new WeakMap,hd=new WeakMap,he=new WeakMap,hf=new WeakMap,hg=new WeakSet,hh=function(a){let b=this.media;for(let c of a)if("childList"===c.type){for(let a of c.removedNodes){if("media"!=a.slot||c.target!=this)continue;let d=c.previousSibling&&c.previousSibling.previousElementSibling;if(d&&b){let b="media"!==d.slot;for(;null!==(d=d.previousSibling);)"media"==d.slot&&(b=!1);b&&this.mediaUnsetCallback(a)}else this.mediaUnsetCallback(a)}if(b)for(let a of c.addedNodes)a===b&&this.handleMediaUpdated(b)}},hi=new WeakMap,hj=new WeakMap,hk=new WeakSet,hl=function(a){if("mouse"!==a.pointerType&&a.timeStamp-cA(this,hb)<250)return;cD(this,hq,hr).call(this),clearTimeout(cA(this,hd));let b=this.hasAttribute(cE.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(a.target)||b)&&cD(this,hs,ht).call(this)},hm=new WeakSet,hn=function(a){if("touch"===a.pointerType){let b=!this.hasAttribute(cE.USER_INACTIVE);[this,this.media].includes(a.target)&&b?cD(this,ho,hp).call(this):cD(this,hs,ht).call(this)}else a.composedPath().some(a=>["media-play-button","media-fullscreen-button"].includes(null==a?void 0:a.localName))&&cD(this,hs,ht).call(this)},ho=new WeakSet,hp=function(){if(0>cA(this,he)||this.hasAttribute(cE.USER_INACTIVE))return;this.setAttribute(cE.USER_INACTIVE,"");let a=new b6.CustomEvent(bF.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(a)},hq=new WeakSet,hr=function(){if(!this.hasAttribute(cE.USER_INACTIVE))return;this.removeAttribute(cE.USER_INACTIVE);let a=new b6.CustomEvent(bF.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(a)},hs=new WeakSet,ht=function(){cD(this,hq,hr).call(this),clearTimeout(cA(this,hd));let a=parseInt(this.autohide);a<0||cC(this,hd,setTimeout(()=>{cD(this,ho,hp).call(this)},1e3*a))},cH.shadowRootOptions={mode:"open"},cH.getTemplateHTML=function(a){return`
    <style>
      
      :host([${bE.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${cE.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${cE.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${cE.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${cE.AUDIO}])[${cE.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${cE.AUDIO}])[${cE.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${cE.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${cE.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${cE.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${cE.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${cE.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${cE.USER_INACTIVE}]:not([${bE.MEDIA_PAUSED}]):not([${bE.MEDIA_IS_AIRPLAYING}]):not([${bE.MEDIA_IS_CASTING}]):not([${cE.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${cE.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${cE.USER_INACTIVE}]:not([${cE.NO_AUTOHIDE}]):not([${bE.MEDIA_PAUSED}]):not([${bE.MEDIA_IS_CASTING}]):not([${cE.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${cE.USER_INACTIVE}][${cE.AUTOHIDE_OVER_CONTROLS}]:not([${cE.NO_AUTOHIDE}]):not([${bE.MEDIA_PAUSED}]):not([${bE.MEDIA_IS_CASTING}]):not([${cE.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${cE.AUDIO}])[${bE.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${cy.shadowRootOptions.mode}">
          ${cy.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},b6.customElements.get("media-container")||b6.customElements.define("media-container",cH);var cI=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},cJ=(a,b,c)=>(cI(a,b,"read from private field"),c?c.call(a):b.get(a)),cK=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},cL=(a,b,c,d)=>(cI(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class cM{constructor(a,b,{defaultValue:c}={defaultValue:void 0}){cK(this,hy),cK(this,hu,void 0),cK(this,hv,void 0),cK(this,hw,void 0),cK(this,hx,new Set),cL(this,hu,a),cL(this,hv,b),cL(this,hw,new Set(c))}[Symbol.iterator](){return cJ(this,hy,hz).values()}get length(){return cJ(this,hy,hz).size}get value(){var a;return null!=(a=[...cJ(this,hy,hz)].join(" "))?a:""}set value(a){var b;a!==this.value&&(cL(this,hx,new Set),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return[...cJ(this,hy,hz)][a]}values(){return cJ(this,hy,hz).values()}forEach(a,b){cJ(this,hy,hz).forEach(a,b)}add(...a){var b,c;a.forEach(a=>cJ(this,hx).add(a)),(""!==this.value||(null==(b=cJ(this,hu))?void 0:b.hasAttribute(`${cJ(this,hv)}`)))&&(null==(c=cJ(this,hu))||c.setAttribute(`${cJ(this,hv)}`,`${this.value}`))}remove(...a){var b;a.forEach(a=>cJ(this,hx).delete(a)),null==(b=cJ(this,hu))||b.setAttribute(`${cJ(this,hv)}`,`${this.value}`)}contains(a){return cJ(this,hy,hz).has(a)}toggle(a,b){if(void 0!==b)if(b)return this.add(a),!0;else return this.remove(a),!1;return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){return this.remove(a),this.add(b),a===b}}hu=new WeakMap,hv=new WeakMap,hw=new WeakMap,hx=new WeakMap,hy=new WeakSet,hz=function(){return cJ(this,hx).size?cJ(this,hx):cJ(this,hw)};let cN=(a="")=>{let[b,c,d]=a.split(":"),e=d?decodeURIComponent(d):void 0;return{kind:"cc"===b?bH.CAPTIONS:bH.SUBTITLES,language:c,label:e}},cO=(a="",b={})=>((a="")=>a.split(/\s+/))(a).map(a=>{let c=cN(a);return{...b,...c}}),cP=a=>a?Array.isArray(a)?a.map(a=>"string"==typeof a?cN(a):a):"string"==typeof a?cO(a):[a]:[],cQ=({kind:a,label:b,language:c}={kind:"subtitles"})=>b?`${"captions"===a?"cc":"sb"}:${c}:${encodeURIComponent(b)}`:c,cR=(a=[])=>Array.prototype.map.call(a,cQ).join(" "),cS=a=>{let b=Object.entries(a).map(([a,b])=>c=>c[a]===b);return a=>b.every(b=>b(a))},cT=(a,b=[],c=[])=>{let d=cP(c).map(cS);Array.from(b).filter(a=>d.some(b=>b(a))).forEach(b=>{b.mode=a})},cU=(a,b=()=>!0)=>{if(!(null==a?void 0:a.textTracks))return[];let c="function"==typeof b?b:cS(b);return Array.from(a.textTracks).filter(c)},cV=a=>{var b;return!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)||a.hasAttribute(bE.MEDIA_SUBTITLES_SHOWING)},cW="exitFullscreen"in b7?"exitFullscreen":"webkitExitFullscreen"in b7?"webkitExitFullscreen":"webkitCancelFullScreen"in b7?"webkitCancelFullScreen":void 0,cX="fullscreenElement"in b7?"fullscreenElement":"webkitFullscreenElement"in b7?"webkitFullscreenElement":void 0,cY="fullscreenEnabled"in b7?"fullscreenEnabled":"webkitFullscreenEnabled"in b7?"webkitFullscreenEnabled":void 0,cZ=()=>{var a;return d||(d=null==(a=null==b7?void 0:b7.createElement)?void 0:a.call(b7,"video"))},c$=async(a=cZ())=>{if(!a)return!1;let b=a.volume;a.volume=b/2+.1;let c=new AbortController,d=await Promise.race([c_(a,c.signal),c0(a,b)]);return c.abort(),d},c_=(a,b)=>new Promise(c=>{a.addEventListener("volumechange",()=>c(!0),{signal:b})}),c0=async(a,b)=>{for(let c=0;c<10;c++){if(a.volume===b)return!1;await bT(10)}return a.volume!==b},c1=/.*Version\/.*Safari\/.*/.test(b6.navigator.userAgent),c2=(a=cZ())=>(!b6.matchMedia("(display-mode: standalone)").matches||!c1)&&"function"==typeof(null==a?void 0:a.requestPictureInPicture),c3=(a=cZ())=>(a=>{let{documentElement:b,media:c}=a;return!!(null==b?void 0:b[cY])||c&&"webkitSupportsFullscreen"in c})({documentElement:b7,media:a}),c4=c3(),c5=c2(),c6=!!b6.WebKitPlaybackTargetAvailabilityEvent,c7=!!b6.chrome,c8=a=>cU(a.media,a=>[bH.SUBTITLES,bH.CAPTIONS].includes(a.kind)).sort((a,b)=>a.kind>=b.kind?1:-1),c9=a=>cU(a.media,a=>a.mode===bI.SHOWING&&[bH.SUBTITLES,bH.CAPTIONS].includes(a.kind)),da=(a,b)=>{let c=c8(a),d=c9(a),e=!!d.length;if(c.length){if(!1===b||e&&!0!==b)cT(bI.DISABLED,c,d);else if(!0===b||!e&&!1!==b){let b=c[0],{options:e}=a;if(!(null==e?void 0:e.noSubtitlesLangPref)){let a=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=a?[a,...globalThis.navigator.languages]:globalThis.navigator.languages,e=c.filter(a=>d.some(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))).sort((a,b)=>d.findIndex(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(a=>b.language.toLowerCase().startsWith(a.split("-")[0])));e[0]&&(b=e[0])}let{language:f,label:g,kind:h}=b;cT(bI.DISABLED,c,d),cT(bI.SHOWING,c,[{language:f,label:g,kind:h}])}}},db=(a,b)=>a===b||null!=a&&null!=b&&typeof a==typeof b&&(!!("number"==typeof a&&Number.isNaN(a)&&Number.isNaN(b))||"object"==typeof a&&(Array.isArray(a)?dc(a,b):Object.entries(a).every(([a,c])=>a in b&&db(c,b[a])))),dc=(a,b)=>{let c=Array.isArray(a),d=Array.isArray(b);return c===d&&(!c&&!d||a.length===b.length&&a.every((a,c)=>db(a,b[c])))},dd=Object.values(bL),de=c$().then(a=>e=a),df=async(...a)=>{await Promise.all(a.filter(a=>a).map(async a=>{if(!("localName"in a&&a instanceof b6.HTMLElement))return;let b=a.localName;if(!b.includes("-"))return;let c=b6.customElements.get(b);c&&a instanceof c||(await b6.customElements.whenDefined(b),b6.customElements.upgrade(a))}))},dg=new b6.DOMParser,dh={mediaError:{get(a,b){let{media:c}=a;if((null==b?void 0:b.type)!=="playing")return null==c?void 0:c.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(a,b){var c;let{media:d}=a;if((null==b?void 0:b.type)!=="playing")return null==(c=null==d?void 0:d.error)?void 0:c.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(a,b){var c,d;let{media:e}=a;if((null==b?void 0:b.type)!=="playing")return null!=(d=null==(c=null==e?void 0:e.error)?void 0:c.message)?d:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoWidth)?b:0},mediaEvents:["resize"]},mediaHeight:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoHeight)?b:0},mediaEvents:["resize"]},mediaPaused:{get(a){var b;let{media:c}=a;return null==(b=null==c?void 0:c.paused)||b},set(a,b){var c;let{media:d}=b;d&&(a?d.pause():null==(c=d.play())||c.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(a,b){let{media:c}=a;return!!c&&(b?"playing"===b.type:!c.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.ended)&&b},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.playbackRate)?b:1},set(a,b){let{media:c}=b;c&&Number.isFinite(+a)&&(c.playbackRate=+a)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.muted)&&b},set(a,b){let{media:c,options:{noMutedPref:d}={}}=b;if(c){if(!c.hasAttribute("muted")&&!d)try{b6.localStorage.setItem("media-chrome-pref-muted",a?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}c.muted=a}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noMutedPref:c}}=b,{media:d}=b;if(d&&!d.muted&&!c)try{let c="true"===b6.localStorage.getItem("media-chrome-pref-muted");dh.mediaMuted.set(c,b),a(c)}catch(a){console.debug("Error getting muted pref",a)}}]},mediaVolume:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.volume)?b:1},set(a,b){let{media:c,options:{noVolumePref:d}={}}=b;if(c){try{null==a?b6.localStorage.removeItem("media-chrome-pref-volume"):c.hasAttribute("muted")||d||b6.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+a)&&(c.volume=+a)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noVolumePref:c}}=b;if(!c)try{let{media:c}=b;if(!c)return;let d=b6.localStorage.getItem("media-chrome-pref-volume");if(null==d)return;dh.mediaVolume.set(+d,b),a(+d)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(a){let{media:b}=a;return void 0===(null==b?void 0:b.volume)?"high":b.muted||0===b.volume?"off":b.volume<.5?"low":b.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.currentTime)?b:0},set(a,b){let{media:c}=b;c&&bR(a)&&(c.currentTime=a)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(a){let{media:b,options:{defaultDuration:c}={}}=a;return c&&(!b||!b.duration||Number.isNaN(b.duration)||!Number.isFinite(b.duration))?c:Number.isFinite(null==b?void 0:b.duration)?b.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(a){let{media:b}=a;return(null==b?void 0:b.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(a){var b;let{media:c}=a;if(!(null==(b=null==c?void 0:c.seekable)?void 0:b.length))return;let d=c.seekable.start(0),e=c.seekable.end(c.seekable.length-1);if(d||e)return[Number(d.toFixed(3)),Number(e.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(a){var b;let{media:c}=a,d=null!=(b=null==c?void 0:c.buffered)?b:[];return Array.from(d).map((a,b)=>[Number(d.start(b).toFixed(3)),Number(d.end(b).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(a){let{media:b,options:{defaultStreamType:c}={}}=a,d=[bL.LIVE,bL.ON_DEMAND].includes(c)?c:void 0;if(!b)return d;let{streamType:e}=b;if(dd.includes(e))return e===bL.UNKNOWN?d:e;let f=b.duration;return f===1/0?bL.LIVE:Number.isFinite(f)?bL.ON_DEMAND:d},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(a){let{media:b}=a;if(!b)return NaN;let{targetLiveWindow:c}=b,d=dh.mediaStreamType.get(a);return(null==c||Number.isNaN(c))&&d===bL.LIVE?0:c},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(a){let{media:b,options:{liveEdgeOffset:c=10}={}}=a;if(!b)return!1;if("number"==typeof b.liveEdgeStart)return!Number.isNaN(b.liveEdgeStart)&&b.currentTime>=b.liveEdgeStart;if(dh.mediaStreamType.get(a)!==bL.LIVE)return!1;let d=b.seekable;if(!d)return!0;if(!d.length)return!1;let e=d.end(d.length-1)-c;return b.currentTime>=e},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:a=>c8(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:a=>c9(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c,d;let{media:e,options:f}=b;if(!e)return;let g=a=>{var c;f.defaultSubtitles&&(a&&![bH.CAPTIONS,bH.SUBTITLES].includes(null==(c=null==a?void 0:a.track)?void 0:c.kind)||da(b,!0))};return e.addEventListener("loadstart",g),null==(c=e.textTracks)||c.addEventListener("addtrack",g),null==(d=e.textTracks)||d.addEventListener("removetrack",g),()=>{var a,b;e.removeEventListener("loadstart",g),null==(a=e.textTracks)||a.removeEventListener("addtrack",g),null==(b=e.textTracks)||b.removeEventListener("removetrack",g)}}]},mediaChaptersCues:{get(a){var b;let{media:c}=a;if(!c)return[];let[d]=cU(c,{kind:bH.CHAPTERS});return Array.from(null!=(b=null==d?void 0:d.cues)?b:[]).map(({text:a,startTime:b,endTime:c})=>({text:a&&dg.parseFromString(a,"text/html").body.textContent||a,startTime:b,endTime:c}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(!d)return;let e=d.querySelector('track[kind="chapters"][default][src]'),f=null==(c=d.shadowRoot)?void 0:c.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==e||e.addEventListener("load",a),null==f||f.addEventListener("load",a),()=>{null==e||e.removeEventListener("load",a),null==f||f.removeEventListener("load",a)}}]},mediaIsPip:{get(a){var b,c;let{media:d,documentElement:e}=a;if(!d||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===d)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(b=d.localName)?void 0:b.includes("-"))&&ci(d,e.pictureInPictureElement);if(e.pictureInPictureElement.localName.includes("-")){let a=e.pictureInPictureElement.shadowRoot;for(;null==a?void 0:a.pictureInPictureElement;){if(a.pictureInPictureElement===d)return!0;a=null==(c=a.pictureInPictureElement)?void 0:c.shadowRoot}}return!1},set(a,b){let{media:c}=b;if(c)if(a){if(!b7.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!c.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};c.requestPictureInPicture().catch(b=>{if(11===b.code){if(!c.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===c.readyState&&"none"===c.preload){let b=()=>{c.removeEventListener("loadedmetadata",d),c.preload="none"},d=()=>{c.requestPictureInPicture().catch(a),b()};c.addEventListener("loadedmetadata",d),c.preload="metadata",setTimeout(()=>{0===c.readyState&&a(),b()},1e3)}else throw b}else throw b})}else b7.pictureInPictureElement&&b7.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.videoRenditions)?b:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(a){var b,c,d;let{media:e}=a;return null==(d=null==(c=null==e?void 0:e.videoRenditions)?void 0:c[null==(b=e.videoRenditions)?void 0:b.selectedIndex])?void 0:d.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let d=Array.prototype.findIndex.call(c.videoRenditions,b=>b.id==a);c.videoRenditions.selectedIndex!=d&&(c.videoRenditions.selectedIndex=d)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.audioTracks)?b:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(a){var b,c;let{media:d}=a;return null==(c=[...null!=(b=null==d?void 0:d.audioTracks)?b:[]].find(a=>a.enabled))?void 0:c.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let b of c.audioTracks)b.enabled=a==b.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:a=>(a=>{var b;let{media:c,documentElement:d,fullscreenElement:e=c}=a;if(!c||!d)return!1;let f=(a=>{let{documentElement:b,media:c}=a,d=null==b?void 0:b[cX];return!d&&"webkitDisplayingFullscreen"in c&&"webkitPresentationMode"in c&&c.webkitDisplayingFullscreen&&c.webkitPresentationMode===bM.FULLSCREEN?c:d})(a);if(!f)return!1;if(f===e||f===c)return!0;if(f.localName.includes("-")){let a=f.shadowRoot;if(!(cX in a))return ci(f,e);for(;null==a?void 0:a[cX];){if(a[cX]===e)return!0;a=null==(b=a[cX])?void 0:b.shadowRoot}}return!1})(a),set(a,b){a?(a=>{var b;let{media:c,fullscreenElement:d}=a;try{let a=d&&"requestFullscreen"in d?"requestFullscreen":d&&"webkitRequestFullScreen"in d?"webkitRequestFullScreen":void 0;if(a){let c=null==(b=d[a])?void 0:b.call(d);if(c instanceof Promise)return c.catch(()=>{})}else(null==c?void 0:c.webkitEnterFullscreen)?c.webkitEnterFullscreen():(null==c?void 0:c.requestFullscreen)&&c.requestFullscreen()}catch(a){console.error(a)}})(b):(a=>{var b;let{documentElement:c}=a;if(cW){let a=null==(b=null==c?void 0:c[cW])?void 0:b.call(c);if(a instanceof Promise)return a.catch(()=>{})}})(b)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(a){var b;let{media:c}=a;return!!(null==c?void 0:c.remote)&&(null==(b=c.remote)?void 0:b.state)!=="disconnected"&&!!c.remote.state},set(a,b){var c,d;let{media:e}=b;if(e&&(!a||(null==(c=e.remote)?void 0:c.state)==="disconnected")&&(a||(null==(d=e.remote)?void 0:d.state)==="connected")){if("function"!=typeof e.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(a,b){let{media:c}=b;if(c){if(!(c.webkitShowPlaybackTargetPicker&&b6.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");c.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(a){let{media:b}=a;if(!c4||!c3(b))return bK.UNSUPPORTED}},mediaPipUnavailable:{get(a){let{media:b}=a;return c5&&c2(b)?(null==b?void 0:b.disablePictureInPicture)?bK.UNAVAILABLE:void 0:bK.UNSUPPORTED}},mediaVolumeUnavailable:{get(a){let{media:b}=a;if(!1===e||(null==b?void 0:b.volume)==void 0)return bK.UNSUPPORTED},stateOwnersUpdateHandlers:[a=>{null==e&&de.then(b=>a(b?void 0:bK.UNSUPPORTED))}]},mediaCastUnavailable:{get(a,{availability:b="not-available"}={}){var c;let{media:d}=a;return c7&&(null==(c=null==d?void 0:d.remote)?void 0:c.state)?null!=b&&"available"!==b?bK.UNAVAILABLE:void 0:bK.UNSUPPORTED},stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(a,b)=>c6?(null==b?void 0:b.availability)==="not-available"?bK.UNAVAILABLE:void 0:bK.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(a){var b;let{media:c}=a;return(null==c?void 0:c.videoRenditions)?(null==(b=c.videoRenditions)?void 0:b.length)?void 0:bK.UNAVAILABLE:bK.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(a){var b,c;let{media:d}=a;return(null==d?void 0:d.audioTracks)?(null!=(c=null==(b=d.audioTracks)?void 0:b.length)?c:0)<=1?bK.UNAVAILABLE:void 0:bK.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(a){let{options:{mediaLang:b}={}}=a;return null!=b?b:"en"}}},di={[bA.MEDIA_PREVIEW_REQUEST](a,b,{detail:c}){var d,e,f;let g,h,{media:i}=b,j=null!=c?c:void 0;if(i&&null!=j){let[a]=cU(i,{kind:bH.METADATA,label:"thumbnails"}),b=Array.prototype.find.call(null!=(d=null==a?void 0:a.cues)?d:[],(a,b,c)=>0===b?a.endTime>j:b===c.length-1?a.startTime<=j:a.startTime<=j&&a.endTime>j);if(b){let a=/'^(?:[a-z]+:)?\/\//i.test(b.text)||null==(e=null==i?void 0:i.querySelector('track[label="thumbnails"]'))?void 0:e.src,c=new URL(b.text,a);h=new URLSearchParams(c.hash).get("#xywh").split(",").map(a=>+a),g=c.href}}let k=a.mediaDuration.get(b),l=null==(f=a.mediaChaptersCues.get(b).find((a,b,c)=>b===c.length-1&&k===a.endTime?a.startTime<=j&&a.endTime>=j:a.startTime<=j&&a.endTime>j))?void 0:f.text;return null!=c&&null==l&&(l=""),{mediaPreviewTime:j,mediaPreviewImage:g,mediaPreviewCoords:h,mediaPreviewChapter:l}},[bA.MEDIA_PAUSE_REQUEST](a,b){a.mediaPaused.set(!0,b)},[bA.MEDIA_PLAY_REQUEST](a,b){var c,d,e,f;let g=a.mediaStreamType.get(b)===bL.LIVE,h=!(null==(c=b.options)?void 0:c.noAutoSeekToLive),i=a.mediaTargetLiveWindow.get(b)>0;if(g&&h&&!i){let c=null==(d=a.mediaSeekable.get(b))?void 0:d[1];if(c){let d=null!=(f=null==(e=b.options)?void 0:e.seekToLiveOffset)?f:0;a.mediaCurrentTime.set(c-d,b)}}a.mediaPaused.set(!1,b)},[bA.MEDIA_PLAYBACK_RATE_REQUEST](a,b,{detail:c}){a.mediaPlaybackRate.set(c,b)},[bA.MEDIA_MUTE_REQUEST](a,b){a.mediaMuted.set(!0,b)},[bA.MEDIA_UNMUTE_REQUEST](a,b){a.mediaVolume.get(b)||a.mediaVolume.set(.25,b),a.mediaMuted.set(!1,b)},[bA.MEDIA_VOLUME_REQUEST](a,b,{detail:c}){c&&a.mediaMuted.get(b)&&a.mediaMuted.set(!1,b),a.mediaVolume.set(c,b)},[bA.MEDIA_SEEK_REQUEST](a,b,{detail:c}){a.mediaCurrentTime.set(c,b)},[bA.MEDIA_SEEK_TO_LIVE_REQUEST](a,b){var c,d,e;let f=null==(c=a.mediaSeekable.get(b))?void 0:c[1];if(Number.isNaN(Number(f)))return;let g=null!=(e=null==(d=b.options)?void 0:d.seekToLiveOffset)?e:0;a.mediaCurrentTime.set(f-g,b)},[bA.MEDIA_SHOW_SUBTITLES_REQUEST](a,b,{detail:c}){var d;let{options:e}=b,f=c8(b),g=cP(c),h=null==(d=g[0])?void 0:d.language;h&&!e.noSubtitlesLangPref&&b6.localStorage.setItem("media-chrome-pref-subtitles-lang",h),cT(bI.SHOWING,f,g)},[bA.MEDIA_DISABLE_SUBTITLES_REQUEST](a,b,{detail:c}){let d=c8(b);cT(bI.DISABLED,d,null!=c?c:[])},[bA.MEDIA_TOGGLE_SUBTITLES_REQUEST](a,b,{detail:c}){da(b,c)},[bA.MEDIA_RENDITION_REQUEST](a,b,{detail:c}){a.mediaRenditionSelected.set(c,b)},[bA.MEDIA_AUDIO_TRACK_REQUEST](a,b,{detail:c}){a.mediaAudioTrackEnabled.set(c,b)},[bA.MEDIA_ENTER_PIP_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsPip.set(!0,b)},[bA.MEDIA_EXIT_PIP_REQUEST](a,b){a.mediaIsPip.set(!1,b)},[bA.MEDIA_ENTER_FULLSCREEN_REQUEST](a,b){a.mediaIsPip.get(b)&&a.mediaIsPip.set(!1,b),a.mediaIsFullscreen.set(!0,b)},[bA.MEDIA_EXIT_FULLSCREEN_REQUEST](a,b){a.mediaIsFullscreen.set(!1,b)},[bA.MEDIA_ENTER_CAST_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsCasting.set(!0,b)},[bA.MEDIA_EXIT_CAST_REQUEST](a,b){a.mediaIsCasting.set(!1,b)},[bA.MEDIA_AIRPLAY_REQUEST](a,b){a.mediaIsAirplaying.set(!0,b)}};var dj=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},dk=(a,b,c)=>(dj(a,b,"read from private field"),c?c.call(a):b.get(a)),dl=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},dm=(a,b,c,d)=>(dj(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),dn=(a,b,c)=>(dj(a,b,"access private method"),c);let dp=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],dq={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class dr extends cH{constructor(){super(),dl(this,hG),dl(this,hI),dl(this,hK),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,dl(this,hA,new cM(this,dq.HOTKEYS)),dl(this,hB,void 0),dl(this,hC,void 0),dl(this,hD,void 0),dl(this,hE,void 0),dl(this,hF,a=>{var b;null==(b=dk(this,hC))||b.dispatch(a)}),this.associateElement(this);let a={};dm(this,hD,b=>{Object.entries(b).forEach(([b,c])=>{if(b in a&&a[b]===c)return;this.propagateMediaState(b,c);let d=b.toLowerCase(),e=new b6.CustomEvent(bG[d],{composed:!0,detail:c});this.dispatchEvent(e)}),a=b}),this.hasAttribute(dq.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(dq.NO_HOTKEYS,dq.HOTKEYS,dq.DEFAULT_STREAM_TYPE,dq.DEFAULT_SUBTITLES,dq.DEFAULT_DURATION,dq.LANG)}get mediaStore(){return dk(this,hC)}set mediaStore(a){var b,c;if(dk(this,hC)&&(null==(b=dk(this,hE))||b.call(this),dm(this,hE,void 0)),dm(this,hC,a),!dk(this,hC)&&!this.hasAttribute(dq.NO_DEFAULT_STORE))return void dn(this,hG,hH).call(this);dm(this,hE,null==(c=dk(this,hC))?void 0:c.subscribe(dk(this,hD)))}get fullscreenElement(){var a;return null!=(a=dk(this,hB))?a:this}set fullscreenElement(a){var b;this.hasAttribute(dq.FULLSCREEN_ELEMENT)&&this.removeAttribute(dq.FULLSCREEN_ELEMENT),dm(this,hB,a),null==(b=dk(this,hC))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return cr(this,dq.DEFAULT_SUBTITLES)}set defaultSubtitles(a){cs(this,dq.DEFAULT_SUBTITLES,a)}get defaultStreamType(){return ct(this,dq.DEFAULT_STREAM_TYPE)}set defaultStreamType(a){cu(this,dq.DEFAULT_STREAM_TYPE,a)}get defaultDuration(){return cp(this,dq.DEFAULT_DURATION)}set defaultDuration(a){cq(this,dq.DEFAULT_DURATION,a)}get noHotkeys(){return cr(this,dq.NO_HOTKEYS)}set noHotkeys(a){cs(this,dq.NO_HOTKEYS,a)}get keysUsed(){return ct(this,dq.KEYS_USED)}set keysUsed(a){cu(this,dq.KEYS_USED,a)}get liveEdgeOffset(){return cp(this,dq.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){cq(this,dq.LIVE_EDGE_OFFSET,a)}get noAutoSeekToLive(){return cr(this,dq.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(a){cs(this,dq.NO_AUTO_SEEK_TO_LIVE,a)}get noVolumePref(){return cr(this,dq.NO_VOLUME_PREF)}set noVolumePref(a){cs(this,dq.NO_VOLUME_PREF,a)}get noMutedPref(){return cr(this,dq.NO_MUTED_PREF)}set noMutedPref(a){cs(this,dq.NO_MUTED_PREF,a)}get noSubtitlesLangPref(){return cr(this,dq.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(a){cs(this,dq.NO_SUBTITLES_LANG_PREF,a)}get noDefaultStore(){return cr(this,dq.NO_DEFAULT_STORE)}set noDefaultStore(a){cs(this,dq.NO_DEFAULT_STORE,a)}attributeChangedCallback(a,b,c){var d,e,f,g,h,i,j,k,l;if(super.attributeChangedCallback(a,b,c),a===dq.NO_HOTKEYS)c!==b&&""===c?(this.hasAttribute(dq.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):c!==b&&null===c&&this.enableHotkeys();else if(a===dq.HOTKEYS)dk(this,hA).value=c;else if(a===dq.DEFAULT_SUBTITLES&&c!==b)null==(d=dk(this,hC))||d.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(dq.DEFAULT_SUBTITLES)}});else if(a===dq.DEFAULT_STREAM_TYPE)null==(f=dk(this,hC))||f.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(e=this.getAttribute(dq.DEFAULT_STREAM_TYPE))?e:void 0}});else if(a===dq.LIVE_EDGE_OFFSET)null==(g=dk(this,hC))||g.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(dq.LIVE_EDGE_OFFSET)?+this.getAttribute(dq.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(dq.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(dq.LIVE_EDGE_OFFSET)}});else if(a===dq.SEEK_TO_LIVE_OFFSET)null==(h=dk(this,hC))||h.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(dq.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(dq.SEEK_TO_LIVE_OFFSET):void 0}});else if(a===dq.NO_AUTO_SEEK_TO_LIVE)null==(i=dk(this,hC))||i.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(dq.NO_AUTO_SEEK_TO_LIVE)}});else if(a===dq.FULLSCREEN_ELEMENT){let a=c?null==(j=this.getRootNode())?void 0:j.getElementById(c):void 0;dm(this,hB,a),null==(k=dk(this,hC))||k.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else a===dq.LANG&&c!==b&&(bY=c,null==(l=dk(this,hC))||l.dispatch({type:"optionschangerequest",detail:{mediaLang:c}}))}connectedCallback(){var a,b;dk(this,hC)||this.hasAttribute(dq.NO_DEFAULT_STORE)||dn(this,hG,hH).call(this),null==(a=dk(this,hC))||a.dispatch({type:"documentelementchangerequest",detail:b7}),super.connectedCallback(),dk(this,hC)&&!dk(this,hE)&&dm(this,hE,null==(b=dk(this,hC))?void 0:b.subscribe(dk(this,hD))),this.hasAttribute(dq.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var a,b,c,d;null==(a=super.disconnectedCallback)||a.call(this),dk(this,hC)&&(null==(b=dk(this,hC))||b.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(c=dk(this,hC))||c.dispatch({type:bA.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),dk(this,hE)&&(null==(d=dk(this,hE))||d.call(this),dm(this,hE,void 0))}mediaSetCallback(a){var b;super.mediaSetCallback(a),null==(b=dk(this,hC))||b.dispatch({type:"mediaelementchangerequest",detail:a}),a.hasAttribute("tabindex")||(a.tabIndex=-1)}mediaUnsetCallback(a){var b;super.mediaUnsetCallback(a),null==(b=dk(this,hC))||b.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(a,b){dA(this.mediaStateReceivers,a,b)}associateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;if(b.has(a))return;let c=dB(a,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(bA).forEach(b=>{a.addEventListener(b,dk(this,hF))}),b.set(a,c)}unassociateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;b.has(a)&&(b.get(a)(),b.delete(a),Object.values(bA).forEach(b=>{a.removeEventListener(b,dk(this,hF))}))}registerMediaStateReceiver(a){if(!a)return;let b=this.mediaStateReceivers;!(b.indexOf(a)>-1)&&(b.push(a),dk(this,hC)&&Object.entries(dk(this,hC).getState()).forEach(([b,c])=>{dA([a],b,c)}))}unregisterMediaStateReceiver(a){let b=this.mediaStateReceivers,c=b.indexOf(a);c<0||b.splice(c,1)}enableHotkeys(){this.addEventListener("keydown",dn(this,hK,hL))}disableHotkeys(){this.removeEventListener("keydown",dn(this,hK,hL)),this.removeEventListener("keyup",dn(this,hI,hJ))}get hotkeys(){return ct(this,dq.HOTKEYS)}set hotkeys(a){cu(this,dq.HOTKEYS,a)}keyboardShortcutHandler(a){var b,c,d,e,f;let g,h,i,j=a.target;if(!((null!=(d=null!=(c=null==(b=j.getAttribute(dq.KEYS_USED))?void 0:b.split(" "))?c:null==j?void 0:j.keysUsed)?d:[]).map(a=>"Space"===a?" ":a).filter(Boolean).includes(a.key)||dk(this,hA).contains(`no${a.key.toLowerCase()}`))&&!(" "===a.key&&dk(this,hA).contains("nospace")))switch(a.key){case" ":case"k":g=dk(this,hC).getState().mediaPaused?bA.MEDIA_PLAY_REQUEST:bA.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new b6.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"m":g="off"===this.mediaStore.getState().mediaVolumeLevel?bA.MEDIA_UNMUTE_REQUEST:bA.MEDIA_MUTE_REQUEST,this.dispatchEvent(new b6.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"f":g=this.mediaStore.getState().mediaIsFullscreen?bA.MEDIA_EXIT_FULLSCREEN_REQUEST:bA.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new b6.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new b6.CustomEvent(bA.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let a=this.hasAttribute(dq.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(dq.KEYBOARD_BACKWARD_SEEK_OFFSET):10;h=Math.max((null!=(e=this.mediaStore.getState().mediaCurrentTime)?e:0)-a,0),i=new b6.CustomEvent(bA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i);break}case"ArrowRight":{let a=this.hasAttribute(dq.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(dq.KEYBOARD_FORWARD_SEEK_OFFSET):10;h=Math.max((null!=(f=this.mediaStore.getState().mediaCurrentTime)?f:0)+a,0),i=new b6.CustomEvent(bA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i)}}}}hA=new WeakMap,hB=new WeakMap,hC=new WeakMap,hD=new WeakMap,hE=new WeakMap,hF=new WeakMap,hG=new WeakSet,hH=function(){var a;this.mediaStore=(({media:a,fullscreenElement:b,documentElement:c,stateMediator:d=dh,requestMap:e=di,options:f={},monitorStateOwnersOnlyWithSubscriptions:g=!0})=>{let h,i=[],j={options:{...f}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),l=a=>{void 0!=a&&(db(a,k)||(k=Object.freeze({...k,...a}),i.forEach(a=>a(k))))},m=()=>{l(Object.entries(d).reduce((a,[b,{get:c}])=>(a[b]=c(j),a),{}))},n={},o=async(a,b)=>{var c,e,f,k,o,p,q,r,s,t,u,v,w,x,y,z;let A=!!h;if(h={...j,...null!=h?h:{},...a},A)return;await df(...Object.values(a));let B=i.length>0&&0===b&&g,C=j.media!==h.media,D=(null==(c=j.media)?void 0:c.textTracks)!==(null==(e=h.media)?void 0:e.textTracks),E=(null==(f=j.media)?void 0:f.videoRenditions)!==(null==(k=h.media)?void 0:k.videoRenditions),F=(null==(o=j.media)?void 0:o.audioTracks)!==(null==(p=h.media)?void 0:p.audioTracks),G=(null==(q=j.media)?void 0:q.remote)!==(null==(r=h.media)?void 0:r.remote),H=j.documentElement!==h.documentElement,I=!!j.media&&(C||B),J=!!(null==(s=j.media)?void 0:s.textTracks)&&(D||B),K=!!(null==(t=j.media)?void 0:t.videoRenditions)&&(E||B),L=!!(null==(u=j.media)?void 0:u.audioTracks)&&(F||B),M=!!(null==(v=j.media)?void 0:v.remote)&&(G||B),N=!!j.documentElement&&(H||B),O=I||J||K||L||M||N,P=0===i.length&&1===b&&g,Q=!!h.media&&(C||P),R=!!(null==(w=h.media)?void 0:w.textTracks)&&(D||P),S=!!(null==(x=h.media)?void 0:x.videoRenditions)&&(E||P),T=!!(null==(y=h.media)?void 0:y.audioTracks)&&(F||P),U=!!(null==(z=h.media)?void 0:z.remote)&&(G||P),V=!!h.documentElement&&(H||P),W=Q||R||S||T||U||V;if(!(O||W)){Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0;return}Object.entries(d).forEach(([a,{get:b,mediaEvents:c=[],textTracksEvents:d=[],videoRenditionsEvents:e=[],audioTracksEvents:f=[],remoteEvents:g=[],rootEvents:i=[],stateOwnersUpdateHandlers:k=[]}])=>{let m;n[a]||(n[a]={});let o=c=>{l({[a]:b(j,c)})};m=n[a].mediaEvents,c.forEach(b=>{m&&I&&(j.media.removeEventListener(b,m),n[a].mediaEvents=void 0),Q&&(h.media.addEventListener(b,o),n[a].mediaEvents=o)}),m=n[a].textTracksEvents,d.forEach(b=>{var c,d;m&&J&&(null==(c=j.media.textTracks)||c.removeEventListener(b,m),n[a].textTracksEvents=void 0),R&&(null==(d=h.media.textTracks)||d.addEventListener(b,o),n[a].textTracksEvents=o)}),m=n[a].videoRenditionsEvents,e.forEach(b=>{var c,d;m&&K&&(null==(c=j.media.videoRenditions)||c.removeEventListener(b,m),n[a].videoRenditionsEvents=void 0),S&&(null==(d=h.media.videoRenditions)||d.addEventListener(b,o),n[a].videoRenditionsEvents=o)}),m=n[a].audioTracksEvents,f.forEach(b=>{var c,d;m&&L&&(null==(c=j.media.audioTracks)||c.removeEventListener(b,m),n[a].audioTracksEvents=void 0),T&&(null==(d=h.media.audioTracks)||d.addEventListener(b,o),n[a].audioTracksEvents=o)}),m=n[a].remoteEvents,g.forEach(b=>{var c,d;m&&M&&(null==(c=j.media.remote)||c.removeEventListener(b,m),n[a].remoteEvents=void 0),U&&(null==(d=h.media.remote)||d.addEventListener(b,o),n[a].remoteEvents=o)}),m=n[a].rootEvents,i.forEach(b=>{m&&N&&(j.documentElement.removeEventListener(b,m),n[a].rootEvents=void 0),V&&(h.documentElement.addEventListener(b,o),n[a].rootEvents=o)});let p=n[a].stateOwnersUpdateHandlers;k.forEach(b=>{p&&O&&p(),W&&(n[a].stateOwnersUpdateHandlers=b(o,h))})}),Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0};return o({media:a,fullscreenElement:b,documentElement:c,options:f}),{dispatch(a){let{type:b,detail:c}=a;if(e[b]&&null==k.mediaErrorCode)return void l(e[b](d,j,a));"mediaelementchangerequest"===b?o({media:c}):"fullscreenelementchangerequest"===b?o({fullscreenElement:c}):"documentelementchangerequest"===b?o({documentElement:c}):"optionschangerequest"===b&&(Object.entries(null!=c?c:{}).forEach(([a,b])=>{j.options[a]=b}),m())},getState:()=>k,subscribe:a=>(o({},i.length+1),i.push(a),a(k),()=>{let b=i.indexOf(a);b>=0&&(o({},i.length-1),i.splice(b,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(dq.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(dq.DEFAULT_DURATION)?+this.getAttribute(dq.DEFAULT_DURATION):void 0,defaultStreamType:null!=(a=this.getAttribute(dq.DEFAULT_STREAM_TYPE))?a:void 0,liveEdgeOffset:this.hasAttribute(dq.LIVE_EDGE_OFFSET)?+this.getAttribute(dq.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(dq.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(dq.SEEK_TO_LIVE_OFFSET):this.hasAttribute(dq.LIVE_EDGE_OFFSET)?+this.getAttribute(dq.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(dq.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(dq.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(dq.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(dq.NO_SUBTITLES_LANG_PREF)}})},hI=new WeakSet,hJ=function(a){let{key:b}=a;if(!dp.includes(b))return void this.removeEventListener("keyup",dn(this,hI,hJ));this.keyboardShortcutHandler(a)},hK=new WeakSet,hL=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!dp.includes(d))return void this.removeEventListener("keyup",dn(this,hI,hJ));[" ","ArrowLeft","ArrowRight"].includes(d)&&!(dk(this,hA).contains(`no${d.toLowerCase()}`)||" "===d&&dk(this,hA).contains("nospace"))&&a.preventDefault(),this.addEventListener("keyup",dn(this,hI,hJ),{once:!0})};let ds=Object.values(bE),dt=Object.values(bC),du=a=>{var b,c,d,e;let{observedAttributes:f}=a.constructor;!f&&(null==(b=a.nodeName)?void 0:b.includes("-"))&&(b6.customElements.upgrade(a),{observedAttributes:f}=a.constructor);let g=null==(e=null==(d=null==(c=null==a?void 0:a.getAttribute)?void 0:c.call(a,bB.MEDIA_CHROME_ATTRIBUTES))?void 0:d.split)?void 0:e.call(d,/\s+/);return Array.isArray(f||g)?(f||g).filter(a=>ds.includes(a)):[]},dv=a=>(a=>{var b,c;return(null==(b=a.nodeName)?void 0:b.includes("-"))&&b6.customElements.get(null==(c=a.nodeName)?void 0:c.toLowerCase())&&!(a instanceof b6.customElements.get(a.nodeName.toLowerCase()))&&b6.customElements.upgrade(a),dt.some(b=>b in a)})(a)||!!du(a).length,dw=a=>{var b;return null==(b=null==a?void 0:a.join)?void 0:b.call(a,":")},dx={[bE.MEDIA_SUBTITLES_LIST]:cR,[bE.MEDIA_SUBTITLES_SHOWING]:cR,[bE.MEDIA_SEEKABLE]:dw,[bE.MEDIA_BUFFERED]:a=>null==a?void 0:a.map(dw).join(" "),[bE.MEDIA_PREVIEW_COORDS]:a=>null==a?void 0:a.join(" "),[bE.MEDIA_RENDITION_LIST]:function(a){return null==a?void 0:a.map(bN).join(" ")},[bE.MEDIA_AUDIO_TRACK_LIST]:function(a){return null==a?void 0:a.map(bP).join(" ")}},dy=async(a,b,c)=>{var d,e;if(a.isConnected||await bT(0),"boolean"==typeof c||null==c)return cs(a,b,c);if("number"==typeof c)return cq(a,b,c);if("string"==typeof c)return cu(a,b,c);if(Array.isArray(c)&&!c.length)return a.removeAttribute(b);let f=null!=(e=null==(d=dx[b])?void 0:d.call(dx,c))?e:c;return a.setAttribute(b,f)},dz=(a,b)=>{if((a=>{var b;return!!(null==(b=a.closest)?void 0:b.call(a,'*[slot="media"]'))})(a))return;let c=(a,b)=>{var c,d;dv(a)&&b(a);let{children:e=[]}=null!=a?a:{};[...e,...null!=(d=null==(c=null==a?void 0:a.shadowRoot)?void 0:c.children)?d:[]].forEach(a=>dz(a,b))},d=null==a?void 0:a.nodeName.toLowerCase();if(d.includes("-")&&!dv(a))return void b6.customElements.whenDefined(d).then(()=>{c(a,b)});c(a,b)},dA=(a,b,c)=>{a.forEach(a=>{if(b in a){a[b]=c;return}let d=du(a),e=b.toLowerCase();d.includes(e)&&dy(a,e,c)})},dB=(a,b,c)=>{dz(a,b);let d=a=>{var c;b(null!=(c=null==a?void 0:a.composedPath()[0])?c:a.target)},e=a=>{var b;c(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)};a.addEventListener(bA.REGISTER_MEDIA_STATE_RECEIVER,d),a.addEventListener(bA.UNREGISTER_MEDIA_STATE_RECEIVER,e);let f=[],g=a=>{let d=a.target;"media"!==d.name&&(f.forEach(a=>dz(a,c)),(f=[...d.assignedElements({flatten:!0})]).forEach(a=>dz(a,b)))};a.addEventListener("slotchange",g);let h=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:d=[],removedNodes:e=[],type:f,target:g,attributeName:h}=a;"childList"===f?(Array.prototype.forEach.call(d,a=>dz(a,b)),Array.prototype.forEach.call(e,a=>dz(a,c))):"attributes"===f&&h===bB.MEDIA_CHROME_ATTRIBUTES&&(dv(g)?b(g):c(g))})});return h.observe(a,{childList:!0,attributes:!0,subtree:!0}),()=>{dz(a,c),a.removeEventListener("slotchange",g),h.disconnect(),a.removeEventListener(bA.REGISTER_MEDIA_STATE_RECEIVER,d),a.removeEventListener(bA.UNREGISTER_MEDIA_STATE_RECEIVER,e)}};b6.customElements.get("media-controller")||b6.customElements.define("media-controller",dr);let dC={PLACEMENT:"placement",BOUNDS:"bounds"};class dD extends b6.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var a;if(!cm(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let b=this.placement;if("left"===b||"right"===b)return void this.style.removeProperty("--media-tooltip-offset-x");let c=getComputedStyle(this),d=null!=(a=cj(this,"#"+this.bounds))?a:ce(this);if(!d)return;let{x:e,width:f}=d.getBoundingClientRect(),{x:g,width:h}=this.getBoundingClientRect(),i=c.getPropertyValue("--media-tooltip-offset-x"),j=i?parseFloat(i.replace("px","")):0,k=c.getPropertyValue("--media-tooltip-container-margin"),l=k?parseFloat(k.replace("px","")):0,m=g-e+j-l,n=g+h-(e+f)+j+l;return m<0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):n>0?void this.style.setProperty("--media-tooltip-offset-x",`${n}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let a=this.placement;delete this.placement,this.placement=a}}static get observedAttributes(){return[dC.PLACEMENT,dC.BOUNDS]}get placement(){return ct(this,dC.PLACEMENT)}set placement(a){cu(this,dC.PLACEMENT,a)}get bounds(){return ct(this,dC.BOUNDS)}set bounds(a){cu(this,dC.BOUNDS,a)}}dD.shadowRootOptions={mode:"open"},dD.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},b6.customElements.get("media-tooltip")||b6.customElements.define("media-tooltip",dD);var dE=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},dF=(a,b,c)=>(dE(a,b,"read from private field"),c?c.call(a):b.get(a)),dG=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},dH=(a,b,c,d)=>(dE(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let dI={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class dJ extends b6.HTMLElement{constructor(){if(super(),dG(this,hR),dG(this,hM,void 0),this.preventClick=!1,this.tooltipEl=null,dG(this,hN,a=>{this.preventClick||this.handleClick(a),setTimeout(dF(this,hO),0)}),dG(this,hO,()=>{var a,b;null==(b=null==(a=this.tooltipEl)?void 0:a.updateXOffset)||b.call(a)}),dG(this,hP,a=>{let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",dF(this,hP));this.preventClick||this.handleClick(a)}),dG(this,hQ,a=>{let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",dF(this,hP));this.addEventListener("keyup",dF(this,hP),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",dI.TOOLTIP_PLACEMENT,bB.MEDIA_CONTROLLER,bE.MEDIA_LANG]}enable(){this.addEventListener("click",dF(this,hN)),this.addEventListener("keydown",dF(this,hQ)),this.tabIndex=0}disable(){this.removeEventListener("click",dF(this,hN)),this.removeEventListener("keydown",dF(this,hQ)),this.removeEventListener("keyup",dF(this,hP)),this.tabIndex=-1}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===bB.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=dF(this,hM))?void 0:d.unassociateElement)||e.call(d,this),dH(this,hM,null)),c&&this.isConnected&&(dH(this,hM,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=dF(this,hM))?void 0:g.associateElement)||h.call(g,this))):"disabled"===a&&c!==b?null==c?this.enable():this.disable():a===dI.TOOLTIP_PLACEMENT&&this.tooltipEl&&c!==b?this.tooltipEl.placement=c:a===bE.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),dF(this,hO).call(this)}connectedCallback(){var a,b,c;let{style:d}=cn(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let e=this.getAttribute(bB.MEDIA_CONTROLLER);e&&(dH(this,hM,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=dF(this,hM))?void 0:b.associateElement)||c.call(b,this)),b6.customElements.whenDefined("media-tooltip").then(()=>{var a,b;return(a=hR,b=hS,dE(this,a,"access private method"),b).call(this)})}disconnectedCallback(){var a,b;this.disable(),null==(b=null==(a=dF(this,hM))?void 0:a.unassociateElement)||b.call(a,this),dH(this,hM,null),this.removeEventListener("mouseenter",dF(this,hO)),this.removeEventListener("focus",dF(this,hO)),this.removeEventListener("click",dF(this,hN))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ct(this,dI.TOOLTIP_PLACEMENT)}set tooltipPlacement(a){cu(this,dI.TOOLTIP_PLACEMENT,a)}get mediaController(){return ct(this,bB.MEDIA_CONTROLLER)}set mediaController(a){cu(this,bB.MEDIA_CONTROLLER,a)}get disabled(){return cr(this,dI.DISABLED)}set disabled(a){cs(this,dI.DISABLED,a)}get noTooltip(){return cr(this,dI.NO_TOOLTIP)}set noTooltip(a){cs(this,dI.NO_TOOLTIP,a)}handleClick(a){}}hM=new WeakMap,hN=new WeakMap,hO=new WeakMap,hP=new WeakMap,hQ=new WeakMap,hR=new WeakSet,hS=function(){this.addEventListener("mouseenter",dF(this,hO)),this.addEventListener("focus",dF(this,hO)),this.addEventListener("click",dF(this,hN));let a=this.tooltipPlacement;a&&this.tooltipEl&&(this.tooltipEl.placement=a)},dJ.shadowRootOptions={mode:"open"},dJ.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${dD.shadowRootOptions.mode}">
          ${dD.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(a)}
        </slot>
      </media-tooltip>
    </slot>
  `},dJ.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},dJ.getTooltipContentHTML=function(){return""},b6.customElements.get("media-chrome-button")||b6.customElements.define("media-chrome-button",dJ);let dK=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,dL=a=>{let b=a.mediaIsAirplaying?bZ("stop airplay"):bZ("start airplay");a.setAttribute("aria-label",b)};class dM extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_IS_AIRPLAYING,bE.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),dL(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_IS_AIRPLAYING&&dL(this)}get mediaIsAirplaying(){return cr(this,bE.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(a){cs(this,bE.MEDIA_IS_AIRPLAYING,a)}get mediaAirplayUnavailable(){return ct(this,bE.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(a){cu(this,bE.MEDIA_AIRPLAY_UNAVAILABLE,a)}handleClick(){let a=new b6.CustomEvent(bA.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}dM.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${bE.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${bE.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${bE.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${bE.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${dK}</slot>
      <slot name="exit">${dK}</slot>
    </slot>
  `},dM.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${bZ("start airplay")}</slot>
    <slot name="tooltip-exit">${bZ("stop airplay")}</slot>
  `},b6.customElements.get("media-airplay-button")||b6.customElements.define("media-airplay-button",dM);let dN=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dO=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,dP=a=>{a.setAttribute("aria-checked",cV(a).toString())};class dQ extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_SUBTITLES_LIST,bE.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",bZ("closed captions")),dP(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_SUBTITLES_SHOWING&&dP(this)}get mediaSubtitlesList(){return dR(this,bE.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){dS(this,bE.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return dR(this,bE.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){dS(this,bE.MEDIA_SUBTITLES_SHOWING,a)}handleClick(){this.dispatchEvent(new b6.CustomEvent(bA.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}dQ.getSlotTemplateHTML=function(a){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${dN}</slot>
      <slot name="off">${dO}</slot>
    </slot>
  `},dQ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${bZ("Enable captions")}</slot>
    <slot name="tooltip-disable">${bZ("Disable captions")}</slot>
  `};let dR=(a,b)=>{let c=a.getAttribute(b);return c?cO(c):[]},dS=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=cR(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};b6.customElements.get("media-captions-button")||b6.customElements.define("media-captions-button",dQ);let dT=a=>{let b=a.mediaIsCasting?bZ("stop casting"):bZ("start casting");a.setAttribute("aria-label",b)};class dU extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_IS_CASTING,bE.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),dT(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_IS_CASTING&&dT(this)}get mediaIsCasting(){return cr(this,bE.MEDIA_IS_CASTING)}set mediaIsCasting(a){cs(this,bE.MEDIA_IS_CASTING,a)}get mediaCastUnavailable(){return ct(this,bE.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(a){cu(this,bE.MEDIA_CAST_UNAVAILABLE,a)}handleClick(){let a=this.mediaIsCasting?bA.MEDIA_EXIT_CAST_REQUEST:bA.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new b6.CustomEvent(a,{composed:!0,bubbles:!0}))}}dU.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${bE.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${bE.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${bE.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${bE.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},dU.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${bZ("Start casting")}</slot>
    <slot name="tooltip-exit">${bZ("Stop casting")}</slot>
  `},b6.customElements.get("media-cast-button")||b6.customElements.define("media-cast-button",dU);var dV=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},dW=(a,b,c)=>(dV(a,b,"read from private field"),c?c.call(a):b.get(a)),dX=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},dY=(a,b,c,d)=>(dV(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),dZ=(a,b,c)=>(dV(a,b,"access private method"),c);let d$={OPEN:"open",ANCHOR:"anchor"};class d_ extends b6.HTMLElement{constructor(){super(),dX(this,hW),dX(this,hY),dX(this,h$),dX(this,h0),dX(this,h2),dX(this,h4),dX(this,hT,!1),dX(this,hU,null),dX(this,hV,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[d$.OPEN,d$.ANCHOR]}get open(){return cr(this,d$.OPEN)}set open(a){cs(this,d$.OPEN,a)}handleEvent(a){switch(a.type){case"invoke":dZ(this,h0,h1).call(this,a);break;case"focusout":dZ(this,h2,h3).call(this,a);break;case"keydown":dZ(this,h4,h5).call(this,a)}}connectedCallback(){dZ(this,hW,hX).call(this),this.role||(this.role="dialog")}attributeChangedCallback(a,b,c){dZ(this,hW,hX).call(this),a===d$.OPEN&&c!==b&&(this.open?dZ(this,hY,hZ).call(this):dZ(this,h$,h_).call(this))}focus(){dY(this,hU,ck());let a=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),b=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(a||b)return;let c=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==c||c.focus()}get keysUsed(){return["Escape","Tab"]}}hT=new WeakMap,hU=new WeakMap,hV=new WeakMap,hW=new WeakSet,hX=function(){if(!dW(this,hT)&&(dY(this,hT,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a),queueMicrotask(()=>{let{style:a}=cn(this.shadowRoot,":host");a.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},hY=new WeakSet,hZ=function(){var a;null==(a=dW(this,hV))||a.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},h$=new WeakSet,h_=function(){var a;null==(a=dW(this,hV))||a.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},h0=new WeakSet,h1=function(a){dY(this,hV,a.relatedTarget),ci(this,a.relatedTarget)||(this.open=!this.open)},h2=new WeakSet,h3=function(a){var b;!ci(this,a.relatedTarget)&&(null==(b=dW(this,hU))||b.focus(),dW(this,hV)&&dW(this,hV)!==a.relatedTarget&&this.open&&(this.open=!1))},h4=new WeakSet,h5=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;h||i||j||this.keysUsed.includes(g)&&(a.preventDefault(),a.stopPropagation(),"Tab"===g?(a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()):"Escape"===g&&(null==(f=dW(this,hU))||f.focus(),this.open=!1))},d_.shadowRootOptions={mode:"open"},d_.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(a)}
  `},d_.getSlotTemplateHTML=function(a){return`
    <slot id="content"></slot>
  `},b6.customElements.get("media-chrome-dialog")||b6.customElements.define("media-chrome-dialog",d_);var d0=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},d1=(a,b,c)=>(d0(a,b,"read from private field"),c?c.call(a):b.get(a)),d2=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},d3=(a,b,c,d)=>(d0(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),d4=(a,b,c)=>(d0(a,b,"access private method"),c);class d5 extends b6.HTMLElement{constructor(){if(super(),d2(this,ig),d2(this,ii),d2(this,ik),d2(this,im),d2(this,ip),d2(this,ir),d2(this,it),d2(this,iv),d2(this,h6,void 0),d2(this,h7,void 0),d2(this,h8,void 0),d2(this,h9,void 0),d2(this,ia,{}),d2(this,ib,[]),d2(this,ic,()=>{if(this.range.matches(":focus-visible")){let{style:a}=cn(this.shadowRoot,":host");a.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),d2(this,id,()=>{let{style:a}=cn(this.shadowRoot,":host");a.removeProperty("--_focus-visible-box-shadow")}),d2(this,ie,()=>{let a=this.shadowRoot.querySelector("#segments-clipping");a&&a.parentNode.append(a)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.container=this.shadowRoot.querySelector("#container"),d3(this,h8,this.shadowRoot.querySelector("#startpoint")),d3(this,h9,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",bB.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===bB.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=d1(this,h6))?void 0:d.unassociateElement)||e.call(d,this),d3(this,h6,null)),c&&this.isConnected&&(d3(this,h6,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=d1(this,h6))?void 0:g.associateElement)||h.call(g,this))):("disabled"===a||"aria-disabled"===a&&b!==c)&&(null==c?(this.range.removeAttribute(a),d4(this,ii,ij).call(this)):(this.range.setAttribute(a,c),d4(this,ik,il).call(this)))}connectedCallback(){var a,b,c;let{style:d}=cn(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),d1(this,ia).pointer=cn(this.shadowRoot,"#pointer"),d1(this,ia).progress=cn(this.shadowRoot,"#progress"),d1(this,ia).thumb=cn(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),d1(this,ia).activeSegment=cn(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let e=this.getAttribute(bB.MEDIA_CONTROLLER);e&&(d3(this,h6,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=d1(this,h6))?void 0:b.associateElement)||c.call(b,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",d1(this,ic)),this.shadowRoot.addEventListener("focusout",d1(this,id)),d4(this,ii,ij).call(this),cb(this.container,d1(this,ie))}disconnectedCallback(){var a,b;d4(this,ik,il).call(this),null==(b=null==(a=d1(this,h6))?void 0:a.unassociateElement)||b.call(a,this),d3(this,h6,null),this.shadowRoot.removeEventListener("focusin",d1(this,ic)),this.shadowRoot.removeEventListener("focusout",d1(this,id)),cc(this.container,d1(this,ie))}updatePointerBar(a){var b;null==(b=d1(this,ia).pointer)||b.style.setProperty("width",`${100*this.getPointerRatio(a)}%`)}updateBar(){var a,b;let c=100*this.range.valueAsNumber;null==(a=d1(this,ia).progress)||a.style.setProperty("width",`${c}%`),null==(b=d1(this,ia).thumb)||b.style.setProperty("left",`${c}%`)}updateSegments(a){let b=this.shadowRoot.querySelector("#segments-clipping");if(b.textContent="",this.container.classList.toggle("segments",!!(null==a?void 0:a.length)),!(null==a?void 0:a.length))return;let c=[...new Set([+this.range.min,...a.flatMap(a=>[a.start,a.end]),+this.range.max])];d3(this,ib,[...c]);let d=c.pop();for(let[a,e]of c.entries()){let[f,g]=[0===a,a===c.length-1],h=f?"calc(var(--segments-gap) / -1)":`${100*e}%`,i=g?d:c[a+1],j=`calc(${(i-e)*100}%${f||g?"":" - var(--segments-gap)"})`,k=b7.createElementNS("http://www.w3.org/2000/svg","rect"),l=cn(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);l.style.setProperty("x",h),l.style.setProperty("width",j),b.append(k)}}getPointerRatio(a){return function(a,b,c,d){let e=d.x-c.x,f=d.y-c.y,g=e*e+f*f;return 0===g?0:Math.max(0,Math.min(1,((a-c.x)*e+(b-c.y)*f)/g))}(a.clientX,a.clientY,d1(this,h8).getBoundingClientRect(),d1(this,h9).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(a){switch(a.type){case"pointermove":d4(this,iv,iw).call(this,a);break;case"input":this.updateBar();break;case"pointerenter":d4(this,ip,iq).call(this,a);break;case"pointerdown":d4(this,im,io).call(this,a);break;case"pointerup":d4(this,ir,is).call(this);break;case"pointerleave":d4(this,it,iu).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}h6=new WeakMap,h7=new WeakMap,h8=new WeakMap,h9=new WeakMap,ia=new WeakMap,ib=new WeakMap,ic=new WeakMap,id=new WeakMap,ie=new WeakMap,ig=new WeakSet,ih=function(a){let b=d1(this,ia).activeSegment;if(!b)return;let c=this.getPointerRatio(a),d=d1(this,ib).findIndex((a,b,d)=>{let e=d[b+1];return null!=e&&c>=a&&c<=e}),e=`#segments-clipping rect:nth-child(${d+1})`;b.selectorText==e&&b.style.transform||(b.selectorText=e,b.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},ii=new WeakSet,ij=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},ik=new WeakSet,il=function(){var a,b;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(a=b6.window)||a.removeEventListener("pointerup",this),null==(b=b6.window)||b.removeEventListener("pointermove",this)},im=new WeakSet,io=function(a){var b;d3(this,h7,a.composedPath().includes(this.range)),null==(b=b6.window)||b.addEventListener("pointerup",this)},ip=new WeakSet,iq=function(a){var b;"mouse"!==a.pointerType&&d4(this,im,io).call(this,a),this.addEventListener("pointerleave",this),null==(b=b6.window)||b.addEventListener("pointermove",this)},ir=new WeakSet,is=function(){var a;null==(a=b6.window)||a.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},it=new WeakSet,iu=function(){var a,b;this.removeEventListener("pointerleave",this),null==(a=b6.window)||a.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(b=d1(this,ia).activeSegment)||b.style.removeProperty("transform")},iv=new WeakSet,iw=function(a){this.toggleAttribute("dragging",1===a.buttons||"mouse"!==a.pointerType),this.updatePointerBar(a),d4(this,ig,ih).call(this,a),this.dragging&&("mouse"!==a.pointerType||!d1(this,h7))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(a),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},d5.shadowRootOptions={mode:"open"},d5.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},b6.customElements.get("media-chrome-range")||b6.customElements.define("media-chrome-range",d5);var d6=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},d7=(a,b,c)=>(d6(a,b,"read from private field"),c?c.call(a):b.get(a)),d8=(a,b,c,d)=>(d6(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class d9 extends b6.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,ix,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[bB.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===bB.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=d7(this,ix))?void 0:d.unassociateElement)||e.call(d,this),d8(this,ix,null)),c&&this.isConnected&&(d8(this,ix,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=d7(this,ix))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(bB.MEDIA_CONTROLLER);d&&(d8(this,ix,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=d7(this,ix))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=d7(this,ix))?void 0:a.unassociateElement)||b.call(a,this),d8(this,ix,null)}}ix=new WeakMap,d9.shadowRootOptions={mode:"open"},d9.getTemplateHTML=function(a){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},b6.customElements.get("media-control-bar")||b6.customElements.define("media-control-bar",d9);var ea=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},eb=(a,b,c)=>(ea(a,b,"read from private field"),c?c.call(a):b.get(a)),ec=(a,b,c,d)=>(ea(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ed extends b6.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,iy,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[bB.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===bB.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=eb(this,iy))?void 0:d.unassociateElement)||e.call(d,this),ec(this,iy,null)),c&&this.isConnected&&(ec(this,iy,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=eb(this,iy))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let{style:d}=cn(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let e=this.getAttribute(bB.MEDIA_CONTROLLER);e&&(ec(this,iy,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=eb(this,iy))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=eb(this,iy))?void 0:a.unassociateElement)||b.call(a,this),ec(this,iy,null)}}iy=new WeakMap,ed.shadowRootOptions={mode:"open"},ed.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}
  `},ed.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},b6.customElements.get("media-text-display")||b6.customElements.define("media-text-display",ed);var ee=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ef=(a,b,c)=>(ee(a,b,"read from private field"),c?c.call(a):b.get(a));class eg extends ed{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,iz,void 0),((a,b,c,d)=>(ee(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,iz,this.shadowRoot.querySelector("slot")),ef(this,iz).textContent=bW(null!=(a=this.mediaDuration)?a:0)}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_DURATION]}attributeChangedCallback(a,b,c){a===bE.MEDIA_DURATION&&(ef(this,iz).textContent=bW(+c)),super.attributeChangedCallback(a,b,c)}get mediaDuration(){return cp(this,bE.MEDIA_DURATION)}set mediaDuration(a){cq(this,bE.MEDIA_DURATION,a)}}iz=new WeakMap,eg.getSlotTemplateHTML=function(a,b){return`
    <slot>${bW(b.mediaDuration)}</slot>
  `},b6.customElements.get("media-duration-display")||b6.customElements.define("media-duration-display",eg);let eh={2:bZ("Network Error"),3:bZ("Decode Error"),4:bZ("Source Not Supported"),5:bZ("Encryption Error")},ei={2:bZ("A network error caused the media download to fail."),3:bZ("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:bZ("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:bZ("The media is encrypted and there are no keys to decrypt it.")},ej=a=>{var b,c;return 1===a.code?null:{title:null!=(b=eh[a.code])?b:`Error ${a.code}`,message:null!=(c=ei[a.code])?c:a.message}};var ek=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};function el(a){var b;let{title:c,message:d}=null!=(b=ej(a))?b:{},e="";return c&&(e+=`<slot name="error-${a.code}-title"><h3>${c}</h3></slot>`),d&&(e+=`<slot name="error-${a.code}-message"><p>${d}</p></slot>`),e}let em=[bE.MEDIA_ERROR_CODE,bE.MEDIA_ERROR_MESSAGE];class en extends d_{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,iA,null)}static get observedAttributes(){return[...super.observedAttributes,...em]}formatErrorMessage(a){return this.constructor.formatErrorMessage(a)}attributeChangedCallback(a,b,c){var d;if(super.attributeChangedCallback(a,b,c),!em.includes(a))return;let e=null!=(d=this.mediaError)?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=e.code&&null!==ej(e),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(e))}get mediaError(){var a,b;return ek(this,a=iA,"read from private field"),b?b.call(this):a.get(this)}set mediaError(a){var b,c;ek(this,b=iA,"write to private field"),c?c.call(this,a):b.set(this,a)}get mediaErrorCode(){return cp(this,"mediaerrorcode")}set mediaErrorCode(a){cq(this,"mediaerrorcode",a)}get mediaErrorMessage(){return ct(this,"mediaerrormessage")}set mediaErrorMessage(a){cu(this,"mediaerrormessage",a)}}iA=new WeakMap,en.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${a.mediaerrorcode}" id="content">
      ${el({code:+a.mediaerrorcode,message:a.mediaerrormessage})}
    </slot>
  `},en.formatErrorMessage=el,b6.customElements.get("media-error-dialog")||b6.customElements.define("media-error-dialog",en);let eo=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,ep=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,eq=a=>{let b=a.mediaIsFullscreen?bZ("exit fullscreen mode"):bZ("enter fullscreen mode");a.setAttribute("aria-label",b)};class er extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_IS_FULLSCREEN,bE.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),eq(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_IS_FULLSCREEN&&eq(this)}get mediaFullscreenUnavailable(){return ct(this,bE.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(a){cu(this,bE.MEDIA_FULLSCREEN_UNAVAILABLE,a)}get mediaIsFullscreen(){return cr(this,bE.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(a){cs(this,bE.MEDIA_IS_FULLSCREEN,a)}handleClick(){let a=this.mediaIsFullscreen?bA.MEDIA_EXIT_FULLSCREEN_REQUEST:bA.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new b6.CustomEvent(a,{composed:!0,bubbles:!0}))}}er.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${bE.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${bE.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${bE.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${bE.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${eo}</slot>
      <slot name="exit">${ep}</slot>
    </slot>
  `},er.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${bZ("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${bZ("Exit fullscreen mode")}</slot>
  `},b6.customElements.get("media-fullscreen-button")||b6.customElements.define("media-fullscreen-button",er);let{MEDIA_TIME_IS_LIVE:es,MEDIA_PAUSED:et}=bE,{MEDIA_SEEK_TO_LIVE_REQUEST:eu,MEDIA_PLAY_REQUEST:ev}=bA,ew=a=>{var b;let c=a.mediaPaused||!a.mediaTimeIsLive,d=c?bZ("seek to live"):bZ("playing live");a.setAttribute("aria-label",d);let e=null==(b=a.shadowRoot)?void 0:b.querySelector('slot[name="text"]');e&&(e.textContent=bZ("live")),c?a.removeAttribute("aria-disabled"):a.setAttribute("aria-disabled","true")};class ex extends dJ{static get observedAttributes(){return[...super.observedAttributes,es,et]}connectedCallback(){super.connectedCallback(),ew(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),ew(this)}get mediaPaused(){return cr(this,bE.MEDIA_PAUSED)}set mediaPaused(a){cs(this,bE.MEDIA_PAUSED,a)}get mediaTimeIsLive(){return cr(this,bE.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(a){cs(this,bE.MEDIA_TIME_IS_LIVE,a)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new b6.CustomEvent(eu,{composed:!0,bubbles:!0})),this.hasAttribute(et)&&this.dispatchEvent(new b6.CustomEvent(ev,{composed:!0,bubbles:!0})))}}ex.getSlotTemplateHTML=function(a){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${es}]:not([${et}])) slot[name=indicator] > *,
      :host([${es}]:not([${et}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${es}]:not([${et}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${bZ("live")}</slot>
  `},b6.customElements.get("media-live-button")||b6.customElements.define("media-live-button",ex);var ey=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ez=(a,b,c)=>(ey(a,b,"read from private field"),c?c.call(a):b.get(a)),eA=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},eB=(a,b,c,d)=>(ey(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let eC={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},eD=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class eE extends b6.HTMLElement{constructor(){if(super(),eA(this,iB,void 0),eA(this,iC,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[bB.MEDIA_CONTROLLER,bE.MEDIA_PAUSED,bE.MEDIA_LOADING,eC.LOADING_DELAY]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===eC.LOADING_DELAY&&b!==c?this.loadingDelay=Number(c):a===bB.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=ez(this,iB))?void 0:d.unassociateElement)||e.call(d,this),eB(this,iB,null)),c&&this.isConnected&&(eB(this,iB,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=ez(this,iB))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(bB.MEDIA_CONTROLLER);d&&(eB(this,iB,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=ez(this,iB))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=ez(this,iB))?void 0:a.unassociateElement)||b.call(a,this),eB(this,iB,null)}get loadingDelay(){return ez(this,iC)}set loadingDelay(a){eB(this,iC,a);let{style:b}=cn(this.shadowRoot,":host");b.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${a}ms)`)}get mediaPaused(){return cr(this,bE.MEDIA_PAUSED)}set mediaPaused(a){cs(this,bE.MEDIA_PAUSED,a)}get mediaLoading(){return cr(this,bE.MEDIA_LOADING)}set mediaLoading(a){cs(this,bE.MEDIA_LOADING,a)}get mediaController(){return ct(this,bB.MEDIA_CONTROLLER)}set mediaController(a){cu(this,bB.MEDIA_CONTROLLER,a)}get noAutohide(){return cr(this,eC.NO_AUTOHIDE)}set noAutohide(a){cs(this,eC.NO_AUTOHIDE,a)}}iB=new WeakMap,iC=new WeakMap,eE.shadowRootOptions={mode:"open"},eE.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${bE.MEDIA_LOADING}]:not([${bE.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${bE.MEDIA_LOADING}]:not([${bE.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${bE.MEDIA_LOADING}]:not([${bE.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${eD}</slot>
    <div id="status" role="status" aria-live="polite">${bZ("media loading")}</div>
  `},b6.customElements.get("media-loading-indicator")||b6.customElements.define("media-loading-indicator",eE);let eF=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,eG=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,eH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,eI=a=>{let b="off"===a.mediaVolumeLevel?bZ("unmute"):bZ("mute");a.setAttribute("aria-label",b)};class eJ extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),eI(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_VOLUME_LEVEL&&eI(this)}get mediaVolumeLevel(){return ct(this,bE.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(a){cu(this,bE.MEDIA_VOLUME_LEVEL,a)}handleClick(){let a="off"===this.mediaVolumeLevel?bA.MEDIA_UNMUTE_REQUEST:bA.MEDIA_MUTE_REQUEST;this.dispatchEvent(new b6.CustomEvent(a,{composed:!0,bubbles:!0}))}}eJ.getSlotTemplateHTML=function(a){return`
    <style>
      :host(:not([${bE.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${bE.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${bE.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${bE.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${bE.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${bE.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${bE.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${eF}</slot>
      <slot name="low">${eG}</slot>
      <slot name="medium">${eG}</slot>
      <slot name="high">${eH}</slot>
    </slot>
  `},eJ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${bZ("Mute")}</slot>
    <slot name="tooltip-unmute">${bZ("Unmute")}</slot>
  `},b6.customElements.get("media-mute-button")||b6.customElements.define("media-mute-button",eJ);let eK=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,eL=a=>{let b=a.mediaIsPip?bZ("exit picture in picture mode"):bZ("enter picture in picture mode");a.setAttribute("aria-label",b)};class eM extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_IS_PIP,bE.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),eL(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_IS_PIP&&eL(this)}get mediaPipUnavailable(){return ct(this,bE.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(a){cu(this,bE.MEDIA_PIP_UNAVAILABLE,a)}get mediaIsPip(){return cr(this,bE.MEDIA_IS_PIP)}set mediaIsPip(a){cs(this,bE.MEDIA_IS_PIP,a)}handleClick(){let a=this.mediaIsPip?bA.MEDIA_EXIT_PIP_REQUEST:bA.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new b6.CustomEvent(a,{composed:!0,bubbles:!0}))}}eM.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${bE.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${bE.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${bE.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${bE.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${eK}</slot>
      <slot name="exit">${eK}</slot>
    </slot>
  `},eM.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${bZ("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${bZ("Exit picture in picture mode")}</slot>
  `},b6.customElements.get("media-pip-button")||b6.customElements.define("media-pip-button",eM);var eN=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};let eO={RATES:"rates"},eP=[1,1.2,1.5,1.7,2];class eQ extends dJ{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,iD,new cM(this,eO.RATES,{defaultValue:eP})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_PLAYBACK_RATE,eO.RATES]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===eO.RATES&&(eN(this,iD).value=c),a===bE.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",bZ("Playback rate {playbackRate}",{playbackRate:b}))}}get rates(){return eN(this,iD)}set rates(a){a?Array.isArray(a)?eN(this,iD).value=a.join(" "):"string"==typeof a&&(eN(this,iD).value=a):eN(this,iD).value=""}get mediaPlaybackRate(){return cp(this,bE.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){cq(this,bE.MEDIA_PLAYBACK_RATE,a)}handleClick(){var a,b;let c=Array.from(eN(this,iD).values(),a=>+a).sort((a,b)=>a-b),d=null!=(b=null!=(a=c.find(a=>a>this.mediaPlaybackRate))?a:c[0])?b:1,e=new b6.CustomEvent(bA.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d});this.dispatchEvent(e)}}iD=new WeakMap,eQ.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},eQ.getTooltipContentHTML=function(){return bZ("Playback rate")},b6.customElements.get("media-playback-rate-button")||b6.customElements.define("media-playback-rate-button",eQ);let eR=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,eS=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,eT=a=>{let b=a.mediaPaused?bZ("play"):bZ("pause");a.setAttribute("aria-label",b)};class eU extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_PAUSED,bE.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),eT(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),(a===bE.MEDIA_PAUSED||a===bE.MEDIA_LANG)&&eT(this)}get mediaPaused(){return cr(this,bE.MEDIA_PAUSED)}set mediaPaused(a){cs(this,bE.MEDIA_PAUSED,a)}handleClick(){let a=this.mediaPaused?bA.MEDIA_PLAY_REQUEST:bA.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new b6.CustomEvent(a,{composed:!0,bubbles:!0}))}}eU.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${bE.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${bE.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${bE.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${bE.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${eR}</slot>
      <slot name="pause">${eS}</slot>
    </slot>
  `},eU.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${bZ("Play")}</slot>
    <slot name="tooltip-pause">${bZ("Pause")}</slot>
  `},b6.customElements.get("media-play-button")||b6.customElements.define("media-play-button",eU);let eV={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class eW extends b6.HTMLElement{static get observedAttributes(){return[eV.PLACEHOLDER_SRC,eV.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(a,b,c){if(a===eV.SRC&&(null==c?this.image.removeAttribute(eV.SRC):this.image.setAttribute(eV.SRC,c)),a===eV.PLACEHOLDER_SRC)if(null==c)this.image.style.removeProperty("background-image");else{var d;d=this.image,d.style["background-image"]=`url('${c}')`}}get placeholderSrc(){return ct(this,eV.PLACEHOLDER_SRC)}set placeholderSrc(a){cu(this,eV.SRC,a)}get src(){return ct(this,eV.SRC)}set src(a){cu(this,eV.SRC,a)}}eW.shadowRootOptions={mode:"open"},eW.getTemplateHTML=function(a){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},b6.customElements.get("media-poster-image")||b6.customElements.define("media-poster-image",eW);var eX=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};class eY extends ed{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,iE,void 0),((a,b,c,d)=>(eX(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,iE,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_PREVIEW_CHAPTER,bE.MEDIA_LANG]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),(a===bE.MEDIA_PREVIEW_CHAPTER||a===bE.MEDIA_LANG)&&c!==b&&null!=c){var d,e;if((eX(this,d=iE,"read from private field"),e?e.call(this):d.get(this)).textContent=c,""!==c){let a=bZ("chapter: {chapterName}",{chapterName:c});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return ct(this,bE.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(a){cu(this,bE.MEDIA_PREVIEW_CHAPTER,a)}}iE=new WeakMap,b6.customElements.get("media-preview-chapter-display")||b6.customElements.define("media-preview-chapter-display",eY);var eZ=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},e$=(a,b,c)=>(eZ(a,b,"read from private field"),c?c.call(a):b.get(a)),e_=(a,b,c,d)=>(eZ(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class e0 extends b6.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,iF,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[bB.MEDIA_CONTROLLER,bE.MEDIA_PREVIEW_IMAGE,bE.MEDIA_PREVIEW_COORDS]}connectedCallback(){var a,b,c;let d=this.getAttribute(bB.MEDIA_CONTROLLER);d&&(e_(this,iF,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=e$(this,iF))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=e$(this,iF))?void 0:a.unassociateElement)||b.call(a,this),e_(this,iF,null)}attributeChangedCallback(a,b,c){var d,e,f,g,h;[bE.MEDIA_PREVIEW_IMAGE,bE.MEDIA_PREVIEW_COORDS].includes(a)&&this.update(),a===bB.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=e$(this,iF))?void 0:d.unassociateElement)||e.call(d,this),e_(this,iF,null)),c&&this.isConnected&&(e_(this,iF,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=e$(this,iF))?void 0:g.associateElement)||h.call(g,this)))}get mediaPreviewImage(){return ct(this,bE.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){cu(this,bE.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewCoords(){let a=this.getAttribute(bE.MEDIA_PREVIEW_COORDS);if(a)return a.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(a){if(!a)return void this.removeAttribute(bE.MEDIA_PREVIEW_COORDS);this.setAttribute(bE.MEDIA_PREVIEW_COORDS,a.join(" "))}update(){let a=this.mediaPreviewCoords,b=this.mediaPreviewImage;if(!(a&&b))return;let[c,d,e,f]=a,g=b.split("#")[0],{maxWidth:h,maxHeight:i,minWidth:j,minHeight:k}=getComputedStyle(this),l=Math.min(parseInt(h)/e,parseInt(i)/f),m=Math.max(parseInt(j)/e,parseInt(k)/f),n=l<1,o=n?l:m>1?m:1,{style:p}=cn(this.shadowRoot,":host"),q=cn(this.shadowRoot,"img").style,r=this.shadowRoot.querySelector("img"),s=n?"min":"max";p.setProperty(`${s}-width`,"initial","important"),p.setProperty(`${s}-height`,"initial","important"),p.width=`${e*o}px`,p.height=`${f*o}px`;let t=()=>{q.width=`${this.imgWidth*o}px`,q.height=`${this.imgHeight*o}px`,q.display="block"};r.src!==g&&(r.onload=()=>{this.imgWidth=r.naturalWidth,this.imgHeight=r.naturalHeight,t()},r.src=g,t()),t(),q.transform=`translate(-${c*o}px, -${d*o}px)`}}iF=new WeakMap,e0.shadowRootOptions={mode:"open"},e0.getTemplateHTML=function(a){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},b6.customElements.get("media-preview-thumbnail")||b6.customElements.define("media-preview-thumbnail",e0);var e1=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},e2=(a,b,c)=>(e1(a,b,"read from private field"),c?c.call(a):b.get(a));class e3 extends ed{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,iG,void 0),((a,b,c,d)=>(e1(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,iG,this.shadowRoot.querySelector("slot")),e2(this,iG).textContent=bW(0)}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_PREVIEW_TIME]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_PREVIEW_TIME&&null!=c&&(e2(this,iG).textContent=bW(parseFloat(c)))}get mediaPreviewTime(){return cp(this,bE.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){cq(this,bE.MEDIA_PREVIEW_TIME,a)}}iG=new WeakMap,b6.customElements.get("media-preview-time-display")||b6.customElements.define("media-preview-time-display",e3);let e4={SEEK_OFFSET:"seekoffset"};class e5 extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_CURRENT_TIME,e4.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=cp(this,e4.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===e4.SEEK_OFFSET&&(this.seekOffset=cp(this,e4.SEEK_OFFSET,30))}get seekOffset(){return cp(this,e4.SEEK_OFFSET,30)}set seekOffset(a){cq(this,e4.SEEK_OFFSET,a),this.setAttribute("aria-label",bZ("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),cg(ch(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return cp(this,bE.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){cq(this,bE.MEDIA_CURRENT_TIME,a)}handleClick(){let a=Math.max(this.mediaCurrentTime-this.seekOffset,0),b=new b6.CustomEvent(bA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}e5.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${c}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},e5.getTooltipContentHTML=function(){return bZ("Seek backward")},b6.customElements.get("media-seek-backward-button")||b6.customElements.define("media-seek-backward-button",e5);let e6={SEEK_OFFSET:"seekoffset"};class e7 extends dJ{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_CURRENT_TIME,e6.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=cp(this,e6.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===e6.SEEK_OFFSET&&(this.seekOffset=cp(this,e6.SEEK_OFFSET,30))}get seekOffset(){return cp(this,e6.SEEK_OFFSET,30)}set seekOffset(a){cq(this,e6.SEEK_OFFSET,a),this.setAttribute("aria-label",bZ("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),cg(ch(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return cp(this,bE.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){cq(this,bE.MEDIA_CURRENT_TIME,a)}handleClick(){let a=this.mediaCurrentTime+this.seekOffset,b=new b6.CustomEvent(bA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}e7.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${c}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},e7.getTooltipContentHTML=function(){return bZ("Seek forward")},b6.customElements.get("media-seek-forward-button")||b6.customElements.define("media-seek-forward-button",e7);var e8=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},e9=(a,b,c)=>(e8(a,b,"read from private field"),c?c.call(a):b.get(a));let fa={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},fb=[...Object.values(fa),bE.MEDIA_CURRENT_TIME,bE.MEDIA_DURATION,bE.MEDIA_SEEKABLE],fc=["Enter"," "],fd="&nbsp;/&nbsp;",fe=(a,{timesSep:b=fd}={})=>{var c,d;let e=null!=(c=a.mediaCurrentTime)?c:0,[,f]=null!=(d=a.mediaSeekable)?d:[],g=0;Number.isFinite(a.mediaDuration)?g=a.mediaDuration:Number.isFinite(f)&&(g=f);let h=a.remaining?bW(0-(g-e)):bW(e);return a.showDuration?`${h}${b}${bW(g)}`:h};class ff extends ed{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,iH,void 0),((a,b,c,d)=>(e8(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,iH,this.shadowRoot.querySelector("slot")),e9(this,iH).innerHTML=`${fe(this)}`}static get observedAttributes(){return[...super.observedAttributes,...fb,"disabled"]}connectedCallback(){let{style:a}=cn(this.shadowRoot,":host(:hover:not([notoggle]))");a.setProperty("cursor","var(--media-cursor, pointer)"),a.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",bZ("playback time"));let b=a=>{let{key:c}=a;if(!fc.includes(c))return void this.removeEventListener("keyup",b);this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{let{metaKey:c,altKey:d,key:e}=a;if(c||d||!fc.includes(e))return void this.removeEventListener("keyup",b);this.addEventListener("keyup",b)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(a,b,c){fb.includes(a)?this.update():"disabled"===a&&c!==b&&(null==c?this.enable():this.disable()),super.attributeChangedCallback(a,b,c)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return cr(this,fa.REMAINING)}set remaining(a){cs(this,fa.REMAINING,a)}get showDuration(){return cr(this,fa.SHOW_DURATION)}set showDuration(a){cs(this,fa.SHOW_DURATION,a)}get noToggle(){return cr(this,fa.NO_TOGGLE)}set noToggle(a){cs(this,fa.NO_TOGGLE,a)}get mediaDuration(){return cp(this,bE.MEDIA_DURATION)}set mediaDuration(a){cq(this,bE.MEDIA_DURATION,a)}get mediaCurrentTime(){return cp(this,bE.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){cq(this,bE.MEDIA_CURRENT_TIME,a)}get mediaSeekable(){let a=this.getAttribute(bE.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(bE.MEDIA_SEEKABLE);this.setAttribute(bE.MEDIA_SEEKABLE,a.join(":"))}update(){let a=fe(this);(a=>{var b;let c=a.mediaCurrentTime,[,d]=null!=(b=a.mediaSeekable)?b:[],e=null;if(Number.isFinite(a.mediaDuration)?e=a.mediaDuration:Number.isFinite(d)&&(e=d),null==c||null===e)return a.setAttribute("aria-valuetext","video not loaded, unknown time.");let f=a.remaining?bV(0-(e-c)):bV(c);if(!a.showDuration)return a.setAttribute("aria-valuetext",f);let g=bV(e),h=`${f} of ${g}`;a.setAttribute("aria-valuetext",h)})(this),a!==e9(this,iH).innerHTML&&(e9(this,iH).innerHTML=a)}}iH=new WeakMap,ff.getSlotTemplateHTML=function(a,b){return`
    <slot>${fe(b)}</slot>
  `},b6.customElements.get("media-time-display")||b6.customElements.define("media-time-display",ff);var fg=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fh=(a,b,c)=>(fg(a,b,"read from private field"),c?c.call(a):b.get(a)),fi=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fj=(a,b,c,d)=>(fg(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fk{constructor(a,b,c){fi(this,iI,void 0),fi(this,iJ,void 0),fi(this,iK,void 0),fi(this,iL,void 0),fi(this,iM,void 0),fi(this,iN,void 0),fi(this,iO,void 0),fi(this,iP,void 0),fi(this,iQ,0),fi(this,iR,(a=performance.now())=>{fj(this,iQ,requestAnimationFrame(fh(this,iR))),fj(this,iL,performance.now()-fh(this,iK));let b=1e3/this.fps;if(fh(this,iL)>b){fj(this,iK,a-fh(this,iL)%b);let c=1e3/((a-fh(this,iJ))/++((a,b,c,d)=>({set _(value){fj(a,b,value,c)},get _(){return fh(a,b,d)}}))(this,iM)._),d=(a-fh(this,iN))/1e3/this.duration,e=fh(this,iO)+d*this.playbackRate;e-fh(this,iI).valueAsNumber>0?fj(this,iP,this.playbackRate/this.duration/c):(fj(this,iP,.995*fh(this,iP)),e=fh(this,iI).valueAsNumber+fh(this,iP)),this.callback(e)}}),fj(this,iI,a),this.callback=b,this.fps=c}start(){0===fh(this,iQ)&&(fj(this,iK,performance.now()),fj(this,iJ,fh(this,iK)),fj(this,iM,0),fh(this,iR).call(this))}stop(){0!==fh(this,iQ)&&(cancelAnimationFrame(fh(this,iQ)),fj(this,iQ,0))}update({start:a,duration:b,playbackRate:c}){let d=a-fh(this,iI).valueAsNumber,e=Math.abs(b-this.duration);(d>0||d<-.03||e>=.5)&&this.callback(a),fj(this,iO,a),fj(this,iN,performance.now()),this.duration=b,this.playbackRate=c}}iI=new WeakMap,iJ=new WeakMap,iK=new WeakMap,iL=new WeakMap,iM=new WeakMap,iN=new WeakMap,iO=new WeakMap,iP=new WeakMap,iQ=new WeakMap,iR=new WeakMap;var fl=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fm=(a,b,c)=>(fl(a,b,"read from private field"),c?c.call(a):b.get(a)),fn=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fo=(a,b,c,d)=>(fl(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fp=(a,b,c)=>(fl(a,b,"access private method"),c);let fq=(a,b=a.mediaCurrentTime)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:Math.max(0,Math.min((b-c)/(d-c),1))},fr=(a,b=a.range.valueAsNumber)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:b*(d-c)+c};class fs extends d5{constructor(){super(),fn(this,i0),fn(this,i2),fn(this,i5),fn(this,i7),fn(this,i9),fn(this,jb),fn(this,jd),fn(this,jf),fn(this,iS,void 0),fn(this,iT,void 0),fn(this,iU,void 0),fn(this,iV,void 0),fn(this,iW,void 0),fn(this,iX,void 0),fn(this,iY,void 0),fn(this,iZ,void 0),fn(this,i$,void 0),fn(this,i_,void 0),fn(this,i4,a=>{!this.dragging&&(bR(a)&&(this.range.valueAsNumber=a),fm(this,i_)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),fo(this,iU,this.shadowRoot.querySelectorAll('[part~="box"]')),fo(this,iW,this.shadowRoot.querySelector('[part~="preview-box"]')),fo(this,iX,this.shadowRoot.querySelector('[part~="current-box"]'));let a=getComputedStyle(this);fo(this,iY,parseInt(a.getPropertyValue("--media-box-padding-left"))),fo(this,iZ,parseInt(a.getPropertyValue("--media-box-padding-right"))),fo(this,iT,new fk(this.range,fm(this,i4),60))}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_PAUSED,bE.MEDIA_DURATION,bE.MEDIA_SEEKABLE,bE.MEDIA_CURRENT_TIME,bE.MEDIA_PREVIEW_IMAGE,bE.MEDIA_PREVIEW_TIME,bE.MEDIA_PREVIEW_CHAPTER,bE.MEDIA_BUFFERED,bE.MEDIA_PLAYBACK_RATE,bE.MEDIA_LOADING,bE.MEDIA_ENDED]}connectedCallback(){var a;super.connectedCallback(),this.range.setAttribute("aria-label",bZ("seek")),fp(this,i0,i1).call(this),fo(this,iS,this.getRootNode()),null==(a=fm(this,iS))||a.addEventListener("transitionstart",this)}disconnectedCallback(){var a;super.disconnectedCallback(),fp(this,i0,i1).call(this),null==(a=fm(this,iS))||a.removeEventListener("transitionstart",this),fo(this,iS,null)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),b!=c&&(a===bE.MEDIA_CURRENT_TIME||a===bE.MEDIA_PAUSED||a===bE.MEDIA_ENDED||a===bE.MEDIA_LOADING||a===bE.MEDIA_DURATION||a===bE.MEDIA_SEEKABLE?(fm(this,iT).update({start:fq(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),fp(this,i0,i1).call(this),(a=>{let b=a.range,c=bV(+fr(a)),d=bV(+a.mediaSeekableEnd),e=c&&d?`${c} of ${d}`:"video not loaded, unknown time.";b.setAttribute("aria-valuetext",e)})(this)):a===bE.MEDIA_BUFFERED&&this.updateBufferedBar(),(a===bE.MEDIA_DURATION||a===bE.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=fm(this,i$),this.updateBar()))}get mediaChaptersCues(){return fm(this,i$)}set mediaChaptersCues(a){var b;fo(this,i$,a),this.updateSegments(null==(b=fm(this,i$))?void 0:b.map(a=>({start:fq(this,a.startTime),end:fq(this,a.endTime)})))}get mediaPaused(){return cr(this,bE.MEDIA_PAUSED)}set mediaPaused(a){cs(this,bE.MEDIA_PAUSED,a)}get mediaLoading(){return cr(this,bE.MEDIA_LOADING)}set mediaLoading(a){cs(this,bE.MEDIA_LOADING,a)}get mediaDuration(){return cp(this,bE.MEDIA_DURATION)}set mediaDuration(a){cq(this,bE.MEDIA_DURATION,a)}get mediaCurrentTime(){return cp(this,bE.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){cq(this,bE.MEDIA_CURRENT_TIME,a)}get mediaPlaybackRate(){return cp(this,bE.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){cq(this,bE.MEDIA_PLAYBACK_RATE,a)}get mediaBuffered(){let a=this.getAttribute(bE.MEDIA_BUFFERED);return a?a.split(" ").map(a=>a.split(":").map(a=>+a)):[]}set mediaBuffered(a){if(!a)return void this.removeAttribute(bE.MEDIA_BUFFERED);let b=a.map(a=>a.join(":")).join(" ");this.setAttribute(bE.MEDIA_BUFFERED,b)}get mediaSeekable(){let a=this.getAttribute(bE.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(bE.MEDIA_SEEKABLE);this.setAttribute(bE.MEDIA_SEEKABLE,a.join(":"))}get mediaSeekableEnd(){var a;let[,b=this.mediaDuration]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaSeekableStart(){var a;let[b=0]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaPreviewImage(){return ct(this,bE.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){cu(this,bE.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewTime(){return cp(this,bE.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){cq(this,bE.MEDIA_PREVIEW_TIME,a)}get mediaEnded(){return cr(this,bE.MEDIA_ENDED)}set mediaEnded(a){cs(this,bE.MEDIA_ENDED,a)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var a;let b,c=this.mediaBuffered;if(!c.length)return;if(this.mediaEnded)b=1;else{let d=this.mediaCurrentTime,[,e=this.mediaSeekableStart]=null!=(a=c.find(([a,b])=>a<=d&&d<=b))?a:[];b=fq(this,e)}let{style:d}=cn(this.shadowRoot,"#buffered");d.setProperty("width",`${100*b}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let a=cn(this.shadowRoot,"#current-rail"),b=cn(this.shadowRoot,'[part~="current-box"]'),c=fp(this,i5,i6).call(this,fm(this,iX)),d=fp(this,i7,i8).call(this,c,this.range.valueAsNumber),e=fp(this,i9,ja).call(this,c,this.range.valueAsNumber);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${c.range.width}`),b.style.setProperty("--_box-shift",`${e}`),b.style.setProperty("--_box-width",`${c.box.width}px`),b.style.setProperty("visibility","initial")}handleEvent(a){switch(super.handleEvent(a),a.type){case"input":fp(this,jf,jg).call(this);break;case"pointermove":fp(this,jb,jc).call(this,a);break;case"pointerup":fm(this,i_)&&fo(this,i_,!1);break;case"pointerdown":fo(this,i_,!0);break;case"pointerleave":fp(this,jd,je).call(this,null);break;case"transitionstart":ci(a.target,this)&&setTimeout(()=>fp(this,i0,i1).call(this),0)}}}iS=new WeakMap,iT=new WeakMap,iU=new WeakMap,iV=new WeakMap,iW=new WeakMap,iX=new WeakMap,iY=new WeakMap,iZ=new WeakMap,i$=new WeakMap,i_=new WeakMap,i0=new WeakSet,i1=function(){fp(this,i2,i3).call(this)?fm(this,iT).start():fm(this,iT).stop()},i2=new WeakSet,i3=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&cm(this)},i4=new WeakMap,i5=new WeakSet,i6=function(a){var b;let c=(null!=(b=this.getAttribute("bounds")?cj(this,`#${this.getAttribute("bounds")}`):this.parentElement)?b:this).getBoundingClientRect(),d=this.range.getBoundingClientRect(),e=a.offsetWidth,f=-(d.left-c.left-e/2),g=c.right-d.left-e/2;return{box:{width:e,min:f,max:g},bounds:c,range:d}},i7=new WeakSet,i8=function(a,b){let c=`${100*b}%`,{width:d,min:e,max:f}=a.box;if(!d)return c;if(!Number.isNaN(e)){let a=`calc(1 / var(--_range-width) * 100 * ${e}% + var(--media-box-padding-left))`;c=`max(${a}, ${c})`}if(!Number.isNaN(f)){let a=`calc(1 / var(--_range-width) * 100 * ${f}% - var(--media-box-padding-right))`;c=`min(${c}, ${a})`}return c},i9=new WeakSet,ja=function(a,b){let{width:c,min:d,max:e}=a.box,f=b*a.range.width;if(f<d+fm(this,iY)){let b=a.range.left-a.bounds.left-fm(this,iY);return`${f-c/2+b}px`}if(f>e-fm(this,iZ)){let b=a.bounds.right-a.range.right-fm(this,iZ);return`${f+c/2-b-a.range.width}px`}return 0},jb=new WeakSet,jc=function(a){let b=[...fm(this,iU)].some(b=>a.composedPath().includes(b));if(!this.dragging&&(b||!a.composedPath().includes(this)))return void fp(this,jd,je).call(this,null);let c=this.mediaSeekableEnd;if(!c)return;let d=cn(this.shadowRoot,"#preview-rail"),e=cn(this.shadowRoot,'[part~="preview-box"]'),f=fp(this,i5,i6).call(this,fm(this,iW)),g=(a.clientX-f.range.left)/f.range.width;g=Math.max(0,Math.min(1,g));let h=fp(this,i7,i8).call(this,f,g),i=fp(this,i9,ja).call(this,f,g);d.style.transform=`translateX(${h})`,d.style.setProperty("--_range-width",`${f.range.width}`),e.style.setProperty("--_box-shift",`${i}`),e.style.setProperty("--_box-width",`${f.box.width}px`),1>Math.abs(Math.round(fm(this,iV))-Math.round(g*c))&&g>.01&&g<.99||(fo(this,iV,g*c),fp(this,jd,je).call(this,fm(this,iV)))},jd=new WeakSet,je=function(a){this.dispatchEvent(new b6.CustomEvent(bA.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:a}))},jf=new WeakSet,jg=function(){fm(this,iT).stop();let a=fr(this);this.dispatchEvent(new b6.CustomEvent(bA.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a}))},fs.shadowRootOptions={mode:"open"},fs.getTemplateHTML=function(a){return`
    ${d5.getTemplateHTML(a)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${bE.MEDIA_PREVIEW_IMAGE}], [${bE.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${bE.MEDIA_PREVIEW_IMAGE}], [${bE.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${bE.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${bE.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${bE.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${bE.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${bE.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${bE.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${bE.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${bE.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${bE.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${bE.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${bE.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${bE.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${e0.shadowRootOptions.mode}">
            ${e0.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},b6.customElements.get("media-time-range")||b6.customElements.define("media-time-range",fs);class ft extends d5{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_VOLUME,bE.MEDIA_MUTED,bE.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let a=this.range.value,b=new b6.CustomEvent(bA.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",bZ("volume"))}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===bE.MEDIA_VOLUME||a===bE.MEDIA_MUTED){let a;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(a=this.range.valueAsNumber,`${Math.round(100*a)}%`)),this.updateBar()}}get mediaVolume(){return cp(this,bE.MEDIA_VOLUME,1)}set mediaVolume(a){cq(this,bE.MEDIA_VOLUME,a)}get mediaMuted(){return cr(this,bE.MEDIA_MUTED)}set mediaMuted(a){cs(this,bE.MEDIA_MUTED,a)}get mediaVolumeUnavailable(){return ct(this,bE.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(a){cu(this,bE.MEDIA_VOLUME_UNAVAILABLE,a)}}b6.customElements.get("media-volume-range")||b6.customElements.define("media-volume-range",ft);var fu=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fv=(a,b,c)=>(fu(a,b,"read from private field"),c?c.call(a):b.get(a)),fw=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fx=(a,b,c,d)=>(fu(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let fy={processCallback(a,b,c){if(c){for(let[a,d]of b)if(a in c){let b=c[a];"boolean"==typeof b&&d instanceof fG&&"boolean"==typeof d.element[d.attributeName]?d.booleanValue=b:"function"==typeof b&&d instanceof fG?d.element[d.attributeName]=b:d.value=b}}}};class fz extends b6.DocumentFragment{constructor(a,b,c=fy){var d;super(),fw(this,jh,void 0),fw(this,ji,void 0),this.append(a.content.cloneNode(!0)),fx(this,jh,fA(this)),fx(this,ji,c),null==(d=c.createCallback)||d.call(c,this,fv(this,jh),b),c.processCallback(this,fv(this,jh),b)}update(a){fv(this,ji).processCallback(this,fv(this,jh),a)}}jh=new WeakMap,ji=new WeakMap;let fA=(a,b=[])=>{let c,d;for(let e of a.attributes||[])if(e.value.includes("{{")){let f=new fF;for([c,d]of fC(e.value))if(c){let c=new fG(a,e.name,e.namespaceURI);f.append(c),b.push([d,c])}else f.append(d);e.value=f.toString()}for(let e of a.childNodes)if(1!==e.nodeType||e instanceof HTMLTemplateElement){let f=e.data;if(1===e.nodeType||f.includes("{{")){let g=[];if(f)for([c,d]of fC(f))if(c){let c=new fH(a);g.push(c),b.push([d,c])}else g.push(new Text(d));else if(e instanceof HTMLTemplateElement){let c=new fI(a,e);g.push(c),b.push([c.expression,c])}e.replaceWith(...g.flatMap(a=>a.replacementNodes||[a]))}}else fA(e,b);return b},fB={},fC=a=>{let b="",c=0,d=fB[a],e=0,f;if(d)return d;for(d=[];f=a[e];e++)"{"===f&&"{"===a[e+1]&&"\\"!==a[e-1]&&a[e+2]&&1==++c?(b&&d.push([0,b]),b="",e++):"}"!==f||"}"!==a[e+1]||"\\"===a[e-1]||--c?b+=f||"":(d.push([1,b.trim()]),b="",e++);return b&&d.push([0,(c>0?"{{":"")+b]),fB[a]=d};class fD{get value(){return""}set value(a){}toString(){return this.value}}let fE=new WeakMap;class fF{constructor(){fw(this,jj,[])}[Symbol.iterator](){return fv(this,jj).values()}get length(){return fv(this,jj).length}item(a){return fv(this,jj)[a]}append(...a){for(let b of a)b instanceof fG&&fE.set(b,this),fv(this,jj).push(b)}toString(){return fv(this,jj).join("")}}jj=new WeakMap;class fG extends fD{constructor(a,b,c){super(),fw(this,jo),fw(this,jk,""),fw(this,jl,void 0),fw(this,jm,void 0),fw(this,jn,void 0),fx(this,jl,a),fx(this,jm,b),fx(this,jn,c)}get attributeName(){return fv(this,jm)}get attributeNamespace(){return fv(this,jn)}get element(){return fv(this,jl)}get value(){return fv(this,jk)}set value(a){fv(this,jk)!==a&&(fx(this,jk,a),fv(this,jo,jp)&&1!==fv(this,jo,jp).length?fv(this,jl).setAttributeNS(fv(this,jn),fv(this,jm),fv(this,jo,jp).toString()):null==a?fv(this,jl).removeAttributeNS(fv(this,jn),fv(this,jm)):fv(this,jl).setAttributeNS(fv(this,jn),fv(this,jm),a))}get booleanValue(){return fv(this,jl).hasAttributeNS(fv(this,jn),fv(this,jm))}set booleanValue(a){if(fv(this,jo,jp)&&1!==fv(this,jo,jp).length)throw new DOMException("Value is not fully templatized");this.value=a?"":null}}jk=new WeakMap,jl=new WeakMap,jm=new WeakMap,jn=new WeakMap,jo=new WeakSet,jp=function(){return fE.get(this)};class fH extends fD{constructor(a,b){super(),fw(this,jq,void 0),fw(this,jr,void 0),fx(this,jq,a),fx(this,jr,b?[...b]:[new Text])}get replacementNodes(){return fv(this,jr)}get parentNode(){return fv(this,jq)}get nextSibling(){return fv(this,jr)[fv(this,jr).length-1].nextSibling}get previousSibling(){return fv(this,jr)[0].previousSibling}get value(){return fv(this,jr).map(a=>a.textContent).join("")}set value(a){this.replace(a)}replace(...a){let b=a.flat().flatMap(a=>null==a?[new Text]:a.forEach?[...a]:11===a.nodeType?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);b.length||b.push(new Text),fx(this,jr,function(a,b,c,d=null){let e=0,f,g,h,i=c.length,j=b.length;for(;e<i&&e<j&&b[e]==c[e];)e++;for(;e<i&&e<j&&c[i-1]==b[j-1];)d=c[--j,--i];if(e==j)for(;e<i;)a.insertBefore(c[e++],d);if(e==i)for(;e<j;)a.removeChild(b[e++]);else{for(f=b[e];e<i;)h=c[e++],g=f?f.nextSibling:d,f==h?f=g:e<i&&c[e]==g?(a.replaceChild(h,f),f=g):a.insertBefore(h,f);for(;f!=d;)g=f.nextSibling,a.removeChild(f),f=g}return c}(fv(this,jr)[0].parentNode,fv(this,jr),b,this.nextSibling))}}jq=new WeakMap,jr=new WeakMap;class fI extends fH{constructor(a,b){let c=b.getAttribute("directive")||b.getAttribute("type"),d=b.getAttribute("expression")||b.getAttribute(c)||"";d.startsWith("{{")&&(d=d.trim().slice(2,-2).trim()),super(a),this.expression=d,this.template=b,this.directive=c}}let fJ={string:a=>String(a)};class fK{constructor(a){this.template=a,this.state=void 0}}let fL=new WeakMap,fM=new WeakMap,fN={partial:(a,b)=>{b[a.expression]=new fK(a.template)},if:(a,b)=>{var c;if(fR(a.expression,b))if(fL.get(a)!==a.template){fL.set(a,a.template);let c=new fz(a.template,b,fP);a.replace(c),fM.set(a,c)}else null==(c=fM.get(a))||c.update(b);else a.replace(""),fL.delete(a),fM.delete(a)}},fO=Object.keys(fN),fP={processCallback(a,b,c){var d,e;if(c)for(let[a,f]of b){if(f instanceof fI){if(!f.directive){let a=fO.find(a=>f.template.hasAttribute(a));a&&(f.directive=a,f.expression=f.template.getAttribute(a))}null==(d=fN[f.directive])||d.call(fN,f,c);continue}let b=fR(a,c);if(b instanceof fK){fL.get(f)!==b.template?(fL.set(f,b.template),f.value=b=new fz(b.template,b.state,fP),fM.set(f,b)):null==(e=fM.get(f))||e.update(b.state);continue}b?(f instanceof fG&&f.attributeName.startsWith("aria-")&&(b=String(b)),f instanceof fG?"boolean"==typeof b?f.booleanValue=b:"function"==typeof b?f.element[f.attributeName]=b:f.value=b:(f.value=b,fL.delete(f),fM.delete(f))):f instanceof fG?f.value=void 0:(f.value=void 0,fL.delete(f),fM.delete(f))}}},fQ={"!":a=>!a,"!!":a=>!!a,"==":(a,b)=>a==b,"!=":(a,b)=>a!=b,">":(a,b)=>a>b,">=":(a,b)=>a>=b,"<":(a,b)=>a<b,"<=":(a,b)=>a<=b,"??":(a,b)=>null!=a?a:b,"|":(a,b)=>{var c;return null==(c=fJ[b])?void 0:c.call(fJ,a)}};function fR(a,b={}){var c,d,e,f,g,h,i;let j=(function(a,b){let c,d,e,f=[];for(;a;){for(let f in e=null,c=a.length,b)(d=b[f].exec(a))&&d.index<c&&(e={token:d[0],type:f,matches:d.slice(1)},c=d.index);c&&f.push({token:a.substr(0,c),type:void 0}),e&&f.push(e),a=a.substr(c+(e?e.token.length:0))}return f})(a,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:a})=>"ws"!==a);if(0===j.length||j.some(({type:a})=>!a))return fS(a);if((null==(c=j[0])?void 0:c.token)===">"){let c=b[null==(d=j[1])?void 0:d.token];if(!c)return fS(a);let h={...b};c.state=h;let i=j.slice(2);for(let a=0;a<i.length;a+=3){let c=null==(e=i[a])?void 0:e.token,d=null==(f=i[a+1])?void 0:f.token,j=null==(g=i[a+2])?void 0:g.token;c&&"="===d&&(h[c]=fU(j,b))}return c}if(1===j.length)return fT(j[0])?fU(j[0].token,b):fS(a);if(2===j.length){let c=fQ[null==(h=j[0])?void 0:h.token];return c&&fT(j[1])?c(fU(j[1].token,b)):fS(a)}if(3===j.length){let c=null==(i=j[1])?void 0:i.token,d=fQ[c];if(!d||!fT(j[0])||!fT(j[2]))return fS(a);let e=fU(j[0].token,b);return d(e,"|"===c?j[2].token:fU(j[2].token,b))}}function fS(a){return console.warn(`Warning: invalid expression \`${a}\``),!1}function fT({type:a}){return["number","boolean","string","param"].includes(a)}function fU(a,b){let c=a[0],d=a.slice(-1);return"true"===a||"false"===a?"true"===a:c===d&&["'",'"'].includes(c)?a.slice(1,-1):bS(a)?parseFloat(a):b[a]}var fV=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fW=(a,b,c)=>(fV(a,b,"read from private field"),c?c.call(a):b.get(a)),fX=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fY=(a,b,c,d)=>(fV(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fZ=(a,b,c)=>(fV(a,b,"access private method"),c);let f$={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},f_=b7.createElement("template");f_.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class f0 extends b6.HTMLElement{constructor(){super(),fX(this,jv),fX(this,jx),fX(this,js,void 0),fX(this,jt,void 0),fX(this,ju,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let a=new MutationObserver(a=>{var b;(!this.mediaController||(null==(b=this.mediaController)?void 0:b.breakpointsComputed))&&a.some(a=>{let b=a.target;return b===this||"media-controller"===b.localName&&!!(f$[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});a.observe(this,{attributes:!0}),a.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(bF.BREAKPOINTS_COMPUTED,this.render),fZ(this,jv,jw).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var a;return null!=(a=fW(this,js))?a:this.constructor.template}set template(a){if(null===a)return void this.removeAttribute("template");"string"==typeof a?this.setAttribute("template",a):a instanceof HTMLTemplateElement&&(fY(this,js,a),fY(this,ju,null),this.createRenderer())}get props(){var a,b,c;let d=[...Array.from(null!=(b=null==(a=this.mediaController)?void 0:a.attributes)?b:[]).filter(({name:a})=>f$[a]||a.startsWith("breakpoint")),...Array.from(this.attributes)],e={};for(let a of d){let b=null!=(c=f$[a.name])?c:a.name.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()),{value:d}=a;null!=d?(bS(d)&&(d=parseFloat(d)),e[b]=""===d||d):e[b]=!1}return e}attributeChangedCallback(a,b,c){"template"===a&&b!=c&&fZ(this,jx,jy).call(this)}connectedCallback(){fZ(this,jx,jy).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==fW(this,jt)&&(fY(this,jt,this.template),this.renderer=new fz(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(f_.content.cloneNode(!0),this.renderer))}render(){var a;null==(a=this.renderer)||a.update(this.props)}}async function f1(a){let b=await fetch(a);if(200!==b.status)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);return b.text()}function f2(a){return a.split("-")[0]}js=new WeakMap,jt=new WeakMap,ju=new WeakMap,jv=new WeakSet,jw=function(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}},jx=new WeakSet,jy=function(){var a;let b=this.getAttribute("template");if(!b||b===fW(this,ju))return;let c=this.getRootNode(),d=null==(a=null==c?void 0:c.getElementById)?void 0:a.call(c,b);if(d){fY(this,ju,b),fY(this,js,d),this.createRenderer();return}(function(a){if(!/^(\/|\.\/|https?:\/\/)/.test(a))return!1;let b=/^https?:\/\//.test(a)?void 0:location.origin;try{new URL(a,b)}catch(a){return!1}return!0})(b)&&(fY(this,ju,b),f1(b).then(a=>{let b=b7.createElement("template");b.innerHTML=a,fY(this,js,b),this.createRenderer()}).catch(console.error))},f0.observedAttributes=["template"],f0.processor=fP,b6.customElements.get("media-theme")||b6.customElements.define("media-theme",f0);class f3 extends Event{constructor({action:a="auto",relatedTarget:b,...c}){super("invoke",c),this.action=a,this.relatedTarget=b}}class f4 extends Event{constructor({newState:a,oldState:b,...c}){super("toggle",c),this.newState=a,this.oldState=b}}var f5=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},f6=(a,b,c)=>(f5(a,b,"read from private field"),c?c.call(a):b.get(a)),f7=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},f8=(a,b,c,d)=>(f5(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),f9=(a,b,c)=>(f5(a,b,"access private method"),c);function ga({type:a,text:b,value:c,checked:d}){let e=b7.createElement("media-chrome-menu-item");e.type=null!=a?a:"",e.part.add("menu-item"),a&&e.part.add(a),e.value=c,e.checked=d;let f=b7.createElement("span");return f.textContent=b,e.append(f),e}function gb(a,b){let c=a.querySelector(`:scope > [slot="${b}"]`);if((null==c?void 0:c.nodeName)=="SLOT"&&(c=c.assignedElements({flatten:!0})[0]),c)return c.cloneNode(!0);let d=a.shadowRoot.querySelector(`[name="${b}"] > svg`);return d?d.cloneNode(!0):""}let gc={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class gd extends b6.HTMLElement{constructor(){if(super(),f7(this,jG),f7(this,jI),f7(this,jL),f7(this,jN),f7(this,jP),f7(this,jR),f7(this,jV),f7(this,jX),f7(this,jZ),f7(this,j_),f7(this,j1),f7(this,j3),f7(this,j5),f7(this,j7),f7(this,j9),f7(this,kb),f7(this,kd),f7(this,kf),f7(this,jz,null),f7(this,jA,null),f7(this,jB,null),f7(this,jC,new Set),f7(this,jD,void 0),f7(this,jE,!1),f7(this,jF,null),f7(this,jK,()=>{let a=f6(this,jC),b=new Set(this.items);for(let c of a)b.has(c)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:c}));for(let c of b)a.has(c)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:c}));f8(this,jC,b)}),f7(this,jT,()=>{f9(this,jV,jW).call(this),f9(this,jX,jY).call(this,!1)}),f7(this,jU,()=>{f9(this,jV,jW).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),f8(this,jD,new MutationObserver(f6(this,jK))),f6(this,jD).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[gc.DISABLED,gc.HIDDEN,gc.STYLE,gc.ANCHOR,bB.MEDIA_CONTROLLER]}static formatMenuItemText(a,b){return a}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(a){switch(a.type){case"slotchange":f9(this,jG,jH).call(this,a);break;case"invoke":f9(this,jN,jO).call(this,a);break;case"click":f9(this,jZ,j$).call(this,a);break;case"toggle":f9(this,j1,j2).call(this,a);break;case"focusout":f9(this,j5,j6).call(this,a);break;case"keydown":f9(this,j7,j8).call(this,a)}}connectedCallback(){var a,b;f8(this,jF,co(this.shadowRoot,":host")),f9(this,jL,jM).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),f8(this,jz,cf(this)),null==(b=null==(a=f6(this,jz))?void 0:a.associateElement)||b.call(a,this),this.hidden||(cb(gf(this),f6(this,jT)),cb(this,f6(this,jU))),f9(this,jI,jJ).call(this)}disconnectedCallback(){var a,b;cc(gf(this),f6(this,jT)),cc(this,f6(this,jU)),this.disable(),null==(b=null==(a=f6(this,jz))?void 0:a.unassociateElement)||b.call(a,this),f8(this,jz,null)}attributeChangedCallback(a,b,c){var d,e,f,g;a===gc.HIDDEN&&c!==b?(f6(this,jE)||f8(this,jE,!0),this.hidden?f9(this,jR,jS).call(this):f9(this,jP,jQ).call(this),this.dispatchEvent(new f4({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):a===bB.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=f6(this,jz))?void 0:d.unassociateElement)||e.call(d,this),f8(this,jz,null)),c&&this.isConnected&&(f8(this,jz,cf(this)),null==(g=null==(f=f6(this,jz))?void 0:f.associateElement)||g.call(f,this))):a===gc.DISABLED&&c!==b?null==c?this.enable():this.disable():a===gc.STYLE&&c!==b&&f9(this,jL,jM).call(this)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}get anchor(){return this.getAttribute("anchor")}set anchor(a){this.setAttribute("anchor",`${a}`)}get anchorElement(){var a;return this.anchor?null==(a=cl(this))?void 0:a.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ge)}get radioGroupItems(){return this.items.filter(a=>"menuitemradio"===a.role)}get checkedItems(){return this.items.filter(a=>a.checked)}get value(){var a,b;return null!=(b=null==(a=this.checkedItems[0])?void 0:a.value)?b:""}set value(a){let b=this.items.find(b=>b.value===a);b&&f9(this,kf,kg).call(this,b)}focus(){if(f8(this,jA,ck()),this.items.length){f9(this,kd,ke).call(this,this.items[0]),this.items[0].focus();return}let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}handleSelect(a){var b;let c=f9(this,j9,ka).call(this,a);c&&(f9(this,kf,kg).call(this,c,"checkbox"===c.type),f6(this,jB)&&!this.hidden&&(null==(b=f6(this,jA))||b.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(a){var b,c;let{key:d}=a,e=this.items,f=null!=(c=null!=(b=f9(this,j9,ka).call(this,a))?b:f9(this,kb,kc).call(this))?c:e[0],g=Math.max(0,e.indexOf(f));"ArrowDown"===d?g++:"ArrowUp"===d?g--:"Home"===a.key?g=0:"End"===a.key&&(g=e.length-1),g<0&&(g=e.length-1),g>e.length-1&&(g=0),f9(this,kd,ke).call(this,e[g]),e[g].focus()}}function ge(a){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==a?void 0:a.role)}function gf(a){var b;return null!=(b=a.getAttribute("bounds")?cj(a,`#${a.getAttribute("bounds")}`):ce(a)||a.parentElement)?b:a}jz=new WeakMap,jA=new WeakMap,jB=new WeakMap,jC=new WeakMap,jD=new WeakMap,jE=new WeakMap,jF=new WeakMap,jG=new WeakSet,jH=function(a){let b=a.target;for(let a of b.assignedNodes({flatten:!0}))3===a.nodeType&&""===a.textContent.trim()&&a.remove();["header","title"].includes(b.name)&&f9(this,jI,jJ).call(this),b.name||f6(this,jK).call(this)},jI=new WeakSet,jJ=function(){let a=this.shadowRoot.querySelector('slot[name="header"]');a.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===a.assignedNodes().length},jK=new WeakMap,jL=new WeakSet,jM=function(){var a;let b=this.shadowRoot.querySelector("#layout-row"),c=null==(a=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:a.trim();b.setAttribute("media","row"===c?"":"width:0")},jN=new WeakSet,jO=function(a){f8(this,jB,a.relatedTarget),ci(this,a.relatedTarget)||(this.hidden=!this.hidden)},jP=new WeakSet,jQ=function(){var a;null==(a=f6(this,jB))||a.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),cb(gf(this),f6(this,jT)),cb(this,f6(this,jU))},jR=new WeakSet,jS=function(){var a;null==(a=f6(this,jB))||a.setAttribute("aria-expanded","false"),cc(gf(this),f6(this,jT)),cc(this,f6(this,jU))},jT=new WeakMap,jU=new WeakMap,jV=new WeakSet,jW=function(a){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:b,y:c}=function({anchor:a,floating:b,placement:c}){let{x:d,y:e}=function({anchor:a,floating:b},c){let d,e="x"==(["top","bottom"].includes(f2(c))?"y":"x")?"y":"x",f="y"===e?"height":"width",g=f2(c),h=a.x+a.width/2-b.width/2,i=a.y+a.height/2-b.height/2,j=a[f]/2-b[f]/2;switch(g){case"top":d={x:h,y:a.y-b.height};break;case"bottom":d={x:h,y:a.y+a.height};break;case"right":d={x:a.x+a.width,y:i};break;case"left":d={x:a.x-b.width,y:i};break;default:d={x:a.x,y:a.y}}switch(c.split("-")[1]){case"start":d[e]-=j;break;case"end":d[e]+=j}return d}(function({anchor:a,floating:b}){return{anchor:function(a,b){var c;let d=a.getBoundingClientRect(),e=null!=(c=null==b?void 0:b.getBoundingClientRect())?c:{x:0,y:0};return{x:d.x-e.x,y:d.y-e.y,width:d.width,height:d.height}}(a,b.offsetParent),floating:{x:0,y:0,width:b.offsetWidth,height:b.offsetHeight}}}({anchor:a,floating:b}),c);return{x:d,y:e}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=a||(a=this.offsetWidth);let d=gf(this).getBoundingClientRect(),e=d.width-b-a,f=d.height-c-this.offsetHeight,{style:g}=f6(this,jF);g.setProperty("position","absolute"),g.setProperty("right",`${Math.max(0,e)}px`),g.setProperty("--_menu-bottom",`${f}px`);let h=getComputedStyle(this),i=g.getPropertyValue("--_menu-bottom")===h.bottom?f:parseFloat(h.bottom),j=d.height-i-parseFloat(h.marginBottom);this.style.setProperty("--_menu-max-height",`${j}px`)},jX=new WeakSet,jY=function(a){let b=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),c=null==b?void 0:b.querySelector('[role="menu"]'),{style:d}=f6(this,jF);if(a||d.setProperty("--media-menu-transition-in","none"),c){let a=c.offsetHeight,d=Math.max(c.offsetWidth,b.offsetWidth);this.style.setProperty("min-width",`${d}px`),this.style.setProperty("min-height",`${a}px`),f9(this,jV,jW).call(this,d)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),f9(this,jV,jW).call(this);d.removeProperty("--media-menu-transition-in")},jZ=new WeakSet,j$=function(a){var b;if(a.stopPropagation(),a.composedPath().includes(f6(this,j_,j0))){null==(b=f6(this,jA))||b.focus(),this.hidden=!0;return}let c=f9(this,j9,ka).call(this,a);!c||c.hasAttribute("disabled")||(f9(this,kd,ke).call(this,c),this.handleSelect(a))},j_=new WeakSet,j0=function(){var a;return null==(a=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:a.find(a=>a.matches('button[part~="back"]'))},j1=new WeakSet,j2=function(a){if(a.target===this)return;f9(this,j3,j4).call(this);let b=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let c of b)c.invokeTargetElement!=a.target&&("open"!=a.newState||"true"!=c.getAttribute("aria-expanded")||c.invokeTargetElement.hidden||c.invokeTargetElement.dispatchEvent(new f3({relatedTarget:c})));for(let a of b)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);f9(this,jX,jY).call(this,!0)},j3=new WeakSet,j4=function(){let a=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!a)},j5=new WeakSet,j6=function(a){var b;ci(this,a.relatedTarget)||(f6(this,jE)&&(null==(b=f6(this,jA))||b.focus()),f6(this,jB)&&f6(this,jB)!==a.relatedTarget&&!this.hidden&&(this.hidden=!0))},j7=new WeakSet,j8=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;if(!h&&!i&&!j&&this.keysUsed.includes(g))if(a.preventDefault(),a.stopPropagation(),"Tab"===g){if(f6(this,jE)){this.hidden=!0;return}a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()}else"Escape"===g?(null==(f=f6(this,jA))||f.focus(),f6(this,jE)&&(this.hidden=!0)):"Enter"===g||" "===g?this.handleSelect(a):this.handleMove(a)},j9=new WeakSet,ka=function(a){return a.composedPath().find(a=>["menuitemradio","menuitemcheckbox"].includes(a.role))},kb=new WeakSet,kc=function(){return this.items.find(a=>0===a.tabIndex)},kd=new WeakSet,ke=function(a){for(let b of this.items)b.tabIndex=b===a?0:-1},kf=new WeakSet,kg=function(a,b){let c=[...this.checkedItems];"radio"===a.type&&this.radioGroupItems.forEach(a=>a.checked=!1),b?a.checked=!a.checked:a.checked=!0,this.checkedItems.some((a,b)=>a!=c[b])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},gd.shadowRootOptions={mode:"open"},gd.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},b6.customElements.get("media-chrome-menu")||b6.customElements.define("media-chrome-menu",gd);var gg=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gh=(a,b,c)=>(gg(a,b,"read from private field"),c?c.call(a):b.get(a)),gi=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gj=(a,b,c,d)=>(gg(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),gk=(a,b,c)=>(gg(a,b,"access private method"),c);let gl={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class gm extends b6.HTMLElement{constructor(){if(super(),gi(this,kj),gi(this,kl),gi(this,kn),gi(this,kq),gi(this,ks),gi(this,ku),gi(this,kh,!1),gi(this,ki,void 0),gi(this,kp,()=>{var a,b;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let c=this.shadowRoot.querySelector('slot[name="description"]'),d=null==(a=this.submenuElement.checkedItems)?void 0:a[0],e=null!=(b=null==d?void 0:d.dataset.description)?b:null==d?void 0:d.text,f=b7.createElement("span");f.textContent=null!=e?e:"",c.replaceChildren(f)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=cd(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[gl.TYPE,gl.DISABLED,gl.CHECKED,gl.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),gn(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(a){switch(a.type){case"slotchange":gk(this,kj,kk).call(this,a);break;case"click":this.handleClick(a);break;case"keydown":gk(this,ks,kt).call(this,a);break;case"keyup":gk(this,kq,kr).call(this,a)}}attributeChangedCallback(a,b,c){a===gl.CHECKED&&gn(this)&&!gh(this,kh)?this.setAttribute("aria-checked",null!=c?"true":"false"):a===gl.TYPE&&c!==b?this.role="menuitem"+c:a===gl.DISABLED&&c!==b&&(null==c?this.enable():this.disable())}connectedCallback(){this.hasAttribute(gl.DISABLED)||this.enable(),this.role="menuitem"+this.type,gj(this,ki,function a(b,c){if(!b)return null;let{host:d}=b.getRootNode();return!c&&d?a(b,d):(null==c?void 0:c.items)?c:a(c,null==c?void 0:c.parentNode)}(this,this.parentNode)),gk(this,ku,kv).call(this),this.submenuElement&&gk(this,kl,km).call(this)}disconnectedCallback(){this.disable(),gk(this,ku,kv).call(this),gj(this,ki,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=cl(this))?void 0:a.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var a;return null!=(a=this.getAttribute(gl.TYPE))?a:""}set type(a){this.setAttribute(gl.TYPE,`${a}`)}get value(){var a;return null!=(a=this.getAttribute(gl.VALUE))?a:this.text}set value(a){this.setAttribute(gl.VALUE,a)}get text(){var a;return(null!=(a=this.textContent)?a:"").trim()}get checked(){if(gn(this))return"true"===this.getAttribute("aria-checked")}set checked(a){gn(this)&&(gj(this,kh,!0),this.setAttribute("aria-checked",a?"true":"false"),a?this.part.add("checked"):this.part.remove("checked"))}handleClick(a){!gn(this)&&this.invokeTargetElement&&ci(this,a.target)&&this.invokeTargetElement.dispatchEvent(new f3({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function gn(a){return"radio"===a.type||"checkbox"===a.type}kh=new WeakMap,ki=new WeakMap,kj=new WeakSet,kk=function(a){let b=a.target;if(!(null==b?void 0:b.name))for(let a of b.assignedNodes({flatten:!0}))a instanceof Text&&""===a.textContent.trim()&&a.remove();"submenu"===b.name&&(this.submenuElement?gk(this,kl,km).call(this):gk(this,kn,ko).call(this))},kl=new WeakSet,km=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",gh(this,kp)),this.submenuElement.addEventListener("addmenuitem",gh(this,kp)),this.submenuElement.addEventListener("removemenuitem",gh(this,kp)),gh(this,kp).call(this)},kn=new WeakSet,ko=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",gh(this,kp)),this.submenuElement.removeEventListener("addmenuitem",gh(this,kp)),this.submenuElement.removeEventListener("removemenuitem",gh(this,kp)),gh(this,kp).call(this)},kp=new WeakMap,kq=new WeakSet,kr=function(a){let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",gk(this,kq,kr));this.handleClick(a)},ks=new WeakSet,kt=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",gk(this,kq,kr));this.addEventListener("keyup",gk(this,kq,kr),{once:!0})},ku=new WeakSet,kv=function(){var a;let b=null==(a=gh(this,ki))?void 0:a.radioGroupItems;if(!b)return;let c=b.filter(a=>"true"===a.getAttribute("aria-checked")).pop();for(let a of(c||(c=b[0]),b))a.setAttribute("aria-checked","false");null==c||c.setAttribute("aria-checked","true")},gm.shadowRootOptions={mode:"open"},gm.getTemplateHTML=function(a){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(a)}
    </slot>
    <slot name="submenu"></slot>
  `},gm.getSuffixSlotInnerHTML=function(a){return""},b6.customElements.get("media-chrome-menu-item")||b6.customElements.define("media-chrome-menu-item",gm);class go extends gd{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:ce(this).querySelector("media-settings-menu-button")}}go.getTemplateHTML=function(a){return`
    ${gd.getTemplateHTML(a)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},b6.customElements.get("media-settings-menu")||b6.customElements.define("media-settings-menu",go);class gp extends gm{}gp.shadowRootOptions={mode:"open"},gp.getTemplateHTML=function(a){return`
    ${gm.getTemplateHTML.call(this,a)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},gp.getSuffixSlotInnerHTML=function(a){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},b6.customElements.get("media-settings-menu-item")||b6.customElements.define("media-settings-menu-item",gp);class gq extends dJ{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=cl(this))?void 0:a.querySelector(`#${this.invokeTarget}`):null}handleClick(){var a;null==(a=this.invokeTargetElement)||a.dispatchEvent(new f3({relatedTarget:this}))}}b6.customElements.get("media-chrome-menu-button")||b6.customElements.define("media-chrome-menu-button",gq);class gr extends gq{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",bZ("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:ce(this).querySelector("media-settings-menu")}}gr.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},gr.getTooltipContentHTML=function(){return bZ("Settings")},b6.customElements.get("media-settings-menu-button")||b6.customElements.define("media-settings-menu-button",gr);var gs=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gt=(a,b,c)=>(gs(a,b,"read from private field"),c?c.call(a):b.get(a)),gu=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gv=(a,b,c,d)=>(gs(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),gw=(a,b,c)=>(gs(a,b,"access private method"),c);class gx extends gd{constructor(){super(...arguments),gu(this,ky),gu(this,kA),gu(this,kw,[]),gu(this,kx,void 0)}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_AUDIO_TRACK_LIST,bE.MEDIA_AUDIO_TRACK_ENABLED,bE.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===bE.MEDIA_AUDIO_TRACK_ENABLED&&b!==c)this.value=c;else if(a===bE.MEDIA_AUDIO_TRACK_LIST&&b!==c){var d;gv(this,kw,null==(d=null!=c?c:"")?void 0:d.split(/\s+/).map(bQ)),gw(this,ky,kz).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",gw(this,kA,kB))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",gw(this,kA,kB))}get anchorElement(){var a;return"auto"!==this.anchor?super.anchorElement:null==(a=ce(this))?void 0:a.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return gt(this,kw)}set mediaAudioTrackList(a){gv(this,kw,a),gw(this,ky,kz).call(this)}get mediaAudioTrackEnabled(){var a;return null!=(a=ct(this,bE.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){cu(this,bE.MEDIA_AUDIO_TRACK_ENABLED,a)}}kw=new WeakMap,kx=new WeakMap,ky=new WeakSet,kz=function(){if(gt(this,kx)===JSON.stringify(this.mediaAudioTrackList))return;gv(this,kx,JSON.stringify(this.mediaAudioTrackList));let a=this.mediaAudioTrackList;for(let b of(this.defaultSlot.textContent="",a)){let a=ga({type:"radio",text:this.formatMenuItemText(b.label,b),value:`${b.id}`,checked:b.enabled});a.prepend(gb(this,"checked-indicator")),this.defaultSlot.append(a)}},kA=new WeakSet,kB=function(){if(null==this.value)return;let a=new b6.CustomEvent(bA.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},b6.customElements.get("media-audio-track-menu")||b6.customElements.define("media-audio-track-menu",gx);let gy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,gz=a=>{let b=bZ("Audio");a.setAttribute("aria-label",b)};class gA extends gq{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_AUDIO_TRACK_ENABLED,bE.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gz(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_LANG&&gz(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=ce(this))?void 0:a.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var a;return null!=(a=ct(this,bE.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){cu(this,bE.MEDIA_AUDIO_TRACK_ENABLED,a)}}gA.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${gy}</slot>
  `},gA.getTooltipContentHTML=function(){return bZ("Audio")},b6.customElements.get("media-audio-track-menu-button")||b6.customElements.define("media-audio-track-menu-button",gA);var gB=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gC=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gD=(a,b,c)=>(gB(a,b,"access private method"),c);let gE=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class gF extends gd{constructor(){super(...arguments),gC(this,kD),gC(this,kF),gC(this,kC,void 0)}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_SUBTITLES_LIST,bE.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_SUBTITLES_LIST&&b!==c?gD(this,kD,kE).call(this):a===bE.MEDIA_SUBTITLES_SHOWING&&b!==c&&(this.value=c)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",gD(this,kF,kG))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",gD(this,kF,kG))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:ce(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return gG(this,bE.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){gH(this,bE.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return gG(this,bE.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){gH(this,bE.MEDIA_SUBTITLES_SHOWING,a)}}kC=new WeakMap,kD=new WeakSet,kE=function(){var a,b,c,d,e,f;if(gB(this,b=kC,"read from private field"),(c?c.call(this):b.get(this))===JSON.stringify(this.mediaSubtitlesList))return;d=kC,e=JSON.stringify(this.mediaSubtitlesList),gB(this,d,"write to private field"),f?f.call(this,e):d.set(this,e),this.defaultSlot.textContent="";let g=!this.value,h=ga({type:"radio",text:this.formatMenuItemText(bZ("Off")),value:"off",checked:g});for(let b of(h.prepend(gb(this,"checked-indicator")),this.defaultSlot.append(h),this.mediaSubtitlesList)){let c=ga({type:"radio",text:this.formatMenuItemText(b.label,b),value:cQ(b),checked:this.value==cQ(b)});c.prepend(gb(this,"checked-indicator")),"captions"===(null!=(a=b.kind)?a:"subs")&&c.append(gb(this,"captions-indicator")),this.defaultSlot.append(c)}},kF=new WeakSet,kG=function(){let a=this.mediaSubtitlesShowing,b=this.getAttribute(bE.MEDIA_SUBTITLES_SHOWING),c=this.value!==b;if((null==a?void 0:a.length)&&c&&this.dispatchEvent(new b6.CustomEvent(bA.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:a})),!this.value||!c)return;let d=new b6.CustomEvent(bA.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(d)},gF.getTemplateHTML=function(a){return`
    ${gd.getTemplateHTML(a)}
    <slot name="captions-indicator" hidden>${gE}</slot>
  `};let gG=(a,b)=>{let c=a.getAttribute(b);return c?cO(c):[]},gH=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=cR(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};b6.customElements.get("media-captions-menu")||b6.customElements.define("media-captions-menu",gF);let gI=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,gJ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,gK=a=>{a.setAttribute("data-captions-enabled",cV(a).toString())},gL=a=>{a.setAttribute("aria-label",bZ("closed captions"))};class gM extends gq{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_SUBTITLES_LIST,bE.MEDIA_SUBTITLES_SHOWING,bE.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),gL(this),gK(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_SUBTITLES_SHOWING?gK(this):a===bE.MEDIA_LANG&&gL(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=ce(this))?void 0:a.querySelector("media-captions-menu")}get mediaSubtitlesList(){return gN(this,bE.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){gO(this,bE.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return gN(this,bE.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){gO(this,bE.MEDIA_SUBTITLES_SHOWING,a)}}gM.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${gI}</slot>
      <slot name="off">${gJ}</slot>
    </slot>
  `},gM.getTooltipContentHTML=function(){return bZ("Captions")};let gN=(a,b)=>{let c=a.getAttribute(b);return c?cO(c):[]},gO=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=cR(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};b6.customElements.get("media-captions-menu-button")||b6.customElements.define("media-captions-menu-button",gM);var gP=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gQ=(a,b,c)=>(gP(a,b,"read from private field"),c?c.call(a):b.get(a)),gR=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gS=(a,b,c)=>(gP(a,b,"access private method"),c);let gT={RATES:"rates"};class gU extends gd{constructor(){super(),gR(this,kI),gR(this,kK),gR(this,kH,new cM(this,gT.RATES,{defaultValue:eP})),gS(this,kI,kJ).call(this)}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_PLAYBACK_RATE,gT.RATES]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===bE.MEDIA_PLAYBACK_RATE&&b!=c?this.value=c:a===gT.RATES&&b!=c&&(gQ(this,kH).value=c,gS(this,kI,kJ).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",gS(this,kK,kL))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",gS(this,kK,kL))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:ce(this).querySelector("media-playback-rate-menu-button")}get rates(){return gQ(this,kH)}set rates(a){a?Array.isArray(a)?gQ(this,kH).value=a.join(" "):"string"==typeof a&&(gQ(this,kH).value=a):gQ(this,kH).value="",gS(this,kI,kJ).call(this)}get mediaPlaybackRate(){return cp(this,bE.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){cq(this,bE.MEDIA_PLAYBACK_RATE,a)}}kH=new WeakMap,kI=new WeakSet,kJ=function(){for(let a of(this.defaultSlot.textContent="",gQ(this,kH))){let b=ga({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a,checked:this.mediaPlaybackRate===Number(a)});b.prepend(gb(this,"checked-indicator")),this.defaultSlot.append(b)}},kK=new WeakSet,kL=function(){if(!this.value)return;let a=new b6.CustomEvent(bA.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},b6.customElements.get("media-playback-rate-menu")||b6.customElements.define("media-playback-rate-menu",gU);class gV extends gq{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_PLAYBACK_RATE]}constructor(){var a;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===bE.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",bZ("Playback rate {playbackRate}",{playbackRate:b}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:ce(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return cp(this,bE.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){cq(this,bE.MEDIA_PLAYBACK_RATE,a)}}gV.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},gV.getTooltipContentHTML=function(){return bZ("Playback rate")},b6.customElements.get("media-playback-rate-menu-button")||b6.customElements.define("media-playback-rate-menu-button",gV);var gW=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gX=(a,b,c)=>(gW(a,b,"read from private field"),c?c.call(a):b.get(a)),gY=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gZ=(a,b,c,d)=>(gW(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),g$=(a,b,c)=>(gW(a,b,"access private method"),c);class g_ extends gd{constructor(){super(...arguments),gY(this,kO),gY(this,kQ),gY(this,kM,[]),gY(this,kN,{})}static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_RENDITION_LIST,bE.MEDIA_RENDITION_SELECTED,bE.MEDIA_RENDITION_UNAVAILABLE,bE.MEDIA_HEIGHT]}static formatMenuItemText(a,b){return super.formatMenuItemText(a,b)}static formatRendition(a,{showBitrate:b=!1}={}){let c=`${Math.min(a.width,a.height)}p`;if(b&&a.bitrate){let b=a.bitrate/1e6,d=`${b.toFixed(+(b<1))} Mbps`;return`${c} (${d})`}return this.formatMenuItemText(c,a)}static compareRendition(a,b){var c,d;return b.height===a.height?(null!=(c=b.bitrate)?c:0)-(null!=(d=a.bitrate)?d:0):b.height-a.height}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===bE.MEDIA_RENDITION_SELECTED&&b!==c)this.value=null!=c?c:"auto",g$(this,kO,kP).call(this);else if(a===bE.MEDIA_RENDITION_LIST&&b!==c)gZ(this,kM,null==c?void 0:c.split(/\s+/).map(bO)),g$(this,kO,kP).call(this);else a===bE.MEDIA_HEIGHT&&b!==c&&g$(this,kO,kP).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",g$(this,kQ,kR))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",g$(this,kQ,kR))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:ce(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return gX(this,kM)}set mediaRenditionList(a){gZ(this,kM,a),g$(this,kO,kP).call(this)}get mediaRenditionSelected(){return ct(this,bE.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){cu(this,bE.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return cp(this,bE.MEDIA_HEIGHT)}set mediaHeight(a){cq(this,bE.MEDIA_HEIGHT,a)}compareRendition(a,b){return this.constructor.compareRendition(a,b)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}formatRendition(a,b){return this.constructor.formatRendition(a,b)}showRenditionBitrate(a){return this.mediaRenditionList.some(b=>b!==a&&b.height===a.height&&b.bitrate!==a.bitrate)}}kM=new WeakMap,kN=new WeakMap,kO=new WeakSet,kP=function(){if(gX(this,kN).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&gX(this,kN).mediaHeight===this.mediaHeight)return;gX(this,kN).mediaRenditionList=JSON.stringify(this.mediaRenditionList),gX(this,kN).mediaHeight=this.mediaHeight;let a=this.mediaRenditionList.sort(this.compareRendition.bind(this)),b=a.find(a=>a.id===this.mediaRenditionSelected);for(let c of a)c.selected=c===b;this.defaultSlot.textContent="";let c=!this.mediaRenditionSelected;for(let b of a){let a=ga({type:"radio",text:this.formatRendition(b,{showBitrate:this.showRenditionBitrate(b)}),value:`${b.id}`,checked:b.selected&&!c});a.prepend(gb(this,"checked-indicator")),this.defaultSlot.append(a)}let d=b&&this.showRenditionBitrate(b),e=c?b?this.formatMenuItemText(`${bZ("Auto")} \u2022 ${this.formatRendition(b,{showBitrate:d})}`,b):this.formatMenuItemText(`${bZ("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(bZ("Auto")),f=ga({type:"radio",text:e,value:"auto",checked:c});f.dataset.description=e,f.prepend(gb(this,"checked-indicator")),this.defaultSlot.append(f)},kQ=new WeakSet,kR=function(){if(null==this.value)return;let a=new b6.CustomEvent(bA.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},b6.customElements.get("media-rendition-menu")||b6.customElements.define("media-rendition-menu",g_);let g0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class g1 extends gq{static get observedAttributes(){return[...super.observedAttributes,bE.MEDIA_RENDITION_SELECTED,bE.MEDIA_RENDITION_UNAVAILABLE,bE.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",bZ("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:ce(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ct(this,bE.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){cu(this,bE.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return cp(this,bE.MEDIA_HEIGHT)}set mediaHeight(a){cq(this,bE.MEDIA_HEIGHT,a)}}g1.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${g0}</slot>
  `},g1.getTooltipContentHTML=function(){return bZ("Quality")},b6.customElements.get("media-rendition-menu-button")||b6.customElements.define("media-rendition-menu-button",g1);var g2=a=>{throw TypeError(a)},g3=(a,b,c)=>b.has(a)||g2("Cannot "+c),g4=(a,b,c)=>(g3(a,b,"read from private field"),c?c.call(a):b.get(a)),g5=(a,b,c)=>b.has(a)?g2("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),g6=(a,b,c,d)=>(g3(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),g7=(a,b,c)=>(g3(a,b,"access private method"),c),g8=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};if("undefined"==typeof DocumentFragment){class a extends g8{}globalThis.DocumentFragment=a}var g9,ha,hb,hc,hd,he,hf,hg,hh,hi,hj,hk,hl,hm,hn,ho,hp,hq,hr,hs,ht,hu,hv,hw,hx,hy,hz,hA,hB,hC,hD,hE,hF,hG,hH,hI,hJ,hK,hL,hM,hN,hO,hP,hQ,hR,hS,hT,hU,hV,hW,hX,hY,hZ,h$,h_,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,ia,ib,ic,id,ie,ig,ih,ii,ij,ik,il,im,io,ip,iq,ir,is,it,iu,iv,iw,ix,iy,iz,iA,iB,iC,iD,iE,iF,iG,iH,iI,iJ,iK,iL,iM,iN,iO,iP,iQ,iR,iS,iT,iU,iV,iW,iX,iY,iZ,i$,i_,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,ja,jb,jc,jd,je,jf,jg,jh,ji,jj,jk,jl,jm,jn,jo,jp,jq,jr,js,jt,ju,jv,jw,jx,jy,jz,jA,jB,jC,jD,jE,jF,jG,jH,jI,jJ,jK,jL,jM,jN,jO,jP,jQ,jR,jS,jT,jU,jV,jW,jX,jY,jZ,j$,j_,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,ka,kb,kc,kd,ke,kf,kg,kh,ki,kj,kk,kl,km,kn,ko,kp,kq,kr,ks,kt,ku,kv,kw,kx,ky,kz,kA,kB,kC,kD,kE,kF,kG,kH,kI,kJ,kK,kL,kM,kN,kO,kP,kQ,kR,kS,kT=class extends g8{},kU=class{constructor(a,b={}){g5(this,kS),g6(this,kS,null==b?void 0:b.detail)}get detail(){return g4(this,kS)}initCustomEvent(){}};kS=new WeakMap;var kV={document:{createElement:function(a,b){return new kT}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(kT)},CustomEvent:kU,EventTarget:g8,HTMLElement:kT,HTMLVideoElement:class extends g8{}},kW="undefined"==typeof window||void 0===globalThis.customElements,kX=kW?kV:globalThis,kY=kW?kV.document:globalThis.document;function kZ(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function k$(a){return a.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase())}function k_(a){if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}function k0(a){let b=(function(a){let b={};for(let c in a)null!=a[c]&&(b[c]=a[c]);return new URLSearchParams(b)})(a).toString();return b?"?"+b:""}var k1,k2,k3,k4=(a,b)=>!!a&&!!b&&(!!a.contains(b)||k4(a,b.getRootNode().host)),k5="mux.com",k6=(()=>{try{return"3.7.0"}catch{}return"UNKNOWN"})(),k7=a=>{if(a){if([p.LIVE,p.ON_DEMAND].includes(a))return a;if(null!=a&&a.includes("live"))return p.LIVE}},k8={crossorigin:"crossOrigin",playsinline:"playsInline"},k9=class{constructor(a,b){g5(this,k1),g5(this,k2),g5(this,k3,[]),g6(this,k1,a),g6(this,k2,b)}[Symbol.iterator](){return g4(this,k3).values()}get length(){return g4(this,k3).length}get value(){var a;return null!=(a=g4(this,k3).join(" "))?a:""}set value(a){var b;a!==this.value&&(g6(this,k3,[]),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return g4(this,k3)[a]}values(){return g4(this,k3).values()}keys(){return g4(this,k3).keys()}forEach(a){g4(this,k3).forEach(a)}add(...a){var b,c;a.forEach(a=>{this.contains(a)||g4(this,k3).push(a)}),(""!==this.value||null!=(b=g4(this,k1))&&b.hasAttribute(`${g4(this,k2)}`))&&null!=(c=g4(this,k1))&&c.setAttribute(`${g4(this,k2)}`,`${this.value}`)}remove(...a){var b;a.forEach(a=>{g4(this,k3).splice(g4(this,k3).indexOf(a),1)}),null==(b=g4(this,k1))||b.setAttribute(`${g4(this,k2)}`,`${this.value}`)}contains(a){return g4(this,k3).includes(a)}toggle(a,b){return void 0!==b?b?(this.add(a),!0):(this.remove(a),!1):this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){this.remove(a),this.add(b)}};k1=new WeakMap,k2=new WeakMap,k3=new WeakMap;var la=`[mux-player ${k6}]`;function lb(...a){console.warn(la,...a)}function lc(...a){console.error(la,...a)}function ld(a){var b;let c=null!=(b=a.message)?b:"";a.context&&(c+=` ${a.context}`),a.file&&(c+=` ${F("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${a.file}`),lb(c)}var le={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},lf={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},lg=Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),lh=[...Object.values(le).filter(a=>le.PLAYSINLINE!==a),...Object.values(lf)];function li(a,b){return a.media?a.media.getAttribute(b):a.getAttribute(b)}var lj=class extends kX.HTMLElement{static get observedAttributes(){return lh}constructor(){super()}attributeChangedCallback(a,b,c){var d,e;switch(a){case lf.MUTED:this.media&&(this.media.muted=null!=c,this.media.defaultMuted=null!=c);return;case lf.VOLUME:{let a=null!=(d=k_(c))?d:1;this.media&&(this.media.volume=a);return}case lf.PLAYBACKRATE:{let a=null!=(e=k_(c))?e:1;this.media&&(this.media.playbackRate=a,this.media.defaultPlaybackRate=a);return}}}play(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.play())?b:Promise.reject()}pause(){var a;null==(a=this.media)||a.pause()}load(){var a;null==(a=this.media)||a.load()}get media(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var a,b;return null==(b=null==(a=this.media)?void 0:a.paused)||b}get duration(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.duration)?b:NaN}get ended(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.ended)&&b}get buffered(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.buffered)?b:lg}get seekable(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.seekable)?b:lg}get readyState(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.readyState)?b:0}get videoWidth(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.videoWidth)?b:0}get videoHeight(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.videoHeight)?b:0}get currentSrc(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.currentSrc)?b:""}get currentTime(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.currentTime)?b:0}set currentTime(a){this.media&&(this.media.currentTime=Number(a))}get volume(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.volume)?b:1}set volume(a){this.media&&(this.media.volume=Number(a))}get playbackRate(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.playbackRate)?b:1}set playbackRate(a){this.media&&(this.media.playbackRate=Number(a))}get defaultPlaybackRate(){var a;return null!=(a=k_(this.getAttribute(lf.PLAYBACKRATE)))?a:1}set defaultPlaybackRate(a){null!=a?this.setAttribute(lf.PLAYBACKRATE,`${a}`):this.removeAttribute(lf.PLAYBACKRATE)}get crossOrigin(){return li(this,le.CROSSORIGIN)}set crossOrigin(a){this.setAttribute(le.CROSSORIGIN,`${a}`)}get autoplay(){return null!=li(this,le.AUTOPLAY)}set autoplay(a){a?this.setAttribute(le.AUTOPLAY,"string"==typeof a?a:""):this.removeAttribute(le.AUTOPLAY)}get loop(){return null!=li(this,le.LOOP)}set loop(a){a?this.setAttribute(le.LOOP,""):this.removeAttribute(le.LOOP)}get muted(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.muted)&&b}set muted(a){this.media&&(this.media.muted=!!a)}get defaultMuted(){return null!=li(this,le.MUTED)}set defaultMuted(a){a?this.setAttribute(le.MUTED,""):this.removeAttribute(le.MUTED)}get playsInline(){return null!=li(this,le.PLAYSINLINE)}set playsInline(a){lc("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(a){["","none","metadata","auto"].includes(a)?this.setAttribute(le.PRELOAD,a):this.removeAttribute(le.PRELOAD)}},lk=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,ll=new WeakMap,lm=class a{constructor(a,b){this.element=a,this.type=b,this.element.addEventListener(this.type,this);let c=ll.get(this.element);c&&c.set(this.type,this)}set(a){if("function"==typeof a)this.handleEvent=a.bind(this.element);else if("object"==typeof a&&"function"==typeof a.handleEvent)this.handleEvent=a.handleEvent.bind(a);else{this.element.removeEventListener(this.type,this);let a=ll.get(this.element);a&&a.delete(this.type)}}static for(b){ll.has(b.element)||ll.set(b.element,new Map);let c=b.attributeName.slice(2),d=ll.get(b.element);return d&&d.has(c)?d.get(c):new a(b.element,c)}},ln=new Map,lo=new WeakMap,lp=new WeakMap,lq=class{constructor(a,b,c){this.strings=a,this.values=b,this.processor=c,this.stringsKey=this.strings.join("\x01")}get template(){if(ln.has(this.stringsKey))return ln.get(this.stringsKey);{let a=kY.createElement("template"),b=this.strings.length-1;return a.innerHTML=this.strings.reduce((a,c,d)=>a+c+(d<b?`{{ ${d} }}`:""),""),ln.set(this.stringsKey,a),a}}renderInto(a){var b;let c=this.template;if(lo.get(a)!==c){lo.set(a,c);let b=new fz(c,this.values,this.processor);lp.set(a,b),a instanceof fH?a.replace(...b.children):a.appendChild(b);return}let d=lp.get(a);null==(b=null==d?void 0:d.update)||b.call(d,this.values)}},lr={processCallback(a,b,c){var d;if(c)for(let[a,e]of b)a in c&&function(a,b){(function(a,b){if(a instanceof fG&&b instanceof Element){let c=a.element;return c[a.attributeName]!==b&&(a.element.removeAttributeNS(a.attributeNamespace,a.attributeName),c[a.attributeName]=b),!0}return!1})(a,b)||function(a,b){if("boolean"==typeof b&&a instanceof fG){let c=a.attributeNamespace;return b!==a.element.hasAttributeNS(c,a.attributeName)&&(a.booleanValue=b),!0}return!1}(a,b)||a instanceof fG&&a.attributeName.startsWith("on")&&(lm.for(a).set(b),a.element.removeAttributeNS(a.attributeNamespace,a.attributeName),1)||!1===b&&a instanceof fH&&(a.replace(""),1)||b instanceof lq&&a instanceof fH&&(b.renderInto(a),1)||b instanceof DocumentFragment&&a instanceof fH&&(b.childNodes.length&&a.replace(...b.childNodes),1)||function(a,b){if(a instanceof fG){let c=a.attributeNamespace,d=a.element.getAttributeNS(c,a.attributeName);return String(b)!==d&&(a.value=String(b))}a.value=String(b)}(a,b)}(e,null!=(d=c[a])?d:"")}};function ls(a,...b){return new lq(a,b,lr)}var lt=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),lu=a=>a.charAt(0).toUpperCase()+a.slice(1),lv=(a,b)=>{let c=(a=>{if(a.muxCode){if(a.muxCode===k.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(a.muxCode===k.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([k.NETWORK_TOKEN_AUD_MISMATCH,k.NETWORK_TOKEN_AUD_MISSING].includes(a.muxCode))return"403-incorrect-aud-value.md";if(a.muxCode===k.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(a.muxCode===k.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(a.muxCode===k.NETWORK_NOT_FOUND)return"404-not-found.md";if(a.muxCode===k.NETWORK_NOT_READY)return"412-not-playable.md"}if(a.code){if(a.code===m.MEDIA_ERR_NETWORK)return"";if(a.code===m.MEDIA_ERR_DECODE)return"media-decode-error.md";if(a.code===m.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(a);return{message:a.message,context:a.context,file:c}},lw=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,lx=kY.createElement("template");"innerHTML"in lx&&(lx.innerHTML=lw);var ly,lz,lA=class extends f0{};lA.template=null==(lz=null==(ly=lx.content)?void 0:ly.children)?void 0:lz[0],kX.customElements.get("media-theme-gerwig")||kX.customElements.define("media-theme-gerwig",lA);var lB={SRC:"src",POSTER:"poster"},lC={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},lD=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","proudlydisplaymuxbadge"],lE=en.formatErrorMessage;function lF(a){let b=a.videoTitle?{video_title:a.videoTitle}:{};return a.getAttributeNames().filter(a=>a.startsWith("metadata-")).reduce((b,c)=>{let d=a.getAttribute(c);return null!==d&&(b[c.replace(/^metadata-/,"").replace(/-/g,"_")]=d),b},b)}en.formatErrorMessage=a=>{var b,c;if(a instanceof m){let d=((a,b=!1)=>({title:((a,b=!1)=>{var c,d;if(a.muxCode){let e=lu(null!=(c=a.errorCategory)?c:"video"),f=l(null!=(d=a.errorCategory)?d:j.VIDEO);if(a.muxCode===k.NETWORK_OFFLINE)return F("Your device appears to be offline",b);if(a.muxCode===k.NETWORK_TOKEN_EXPIRED)return F("{category} URL has expired",b).format({category:e});if([k.NETWORK_TOKEN_SUB_MISMATCH,k.NETWORK_TOKEN_AUD_MISMATCH,k.NETWORK_TOKEN_AUD_MISSING,k.NETWORK_TOKEN_MALFORMED].includes(a.muxCode))return F("{category} URL is formatted incorrectly",b).format({category:e});if(a.muxCode===k.NETWORK_TOKEN_MISSING)return F("Invalid {categoryName} URL",b).format({categoryName:f});if(a.muxCode===k.NETWORK_NOT_FOUND)return F("{category} does not exist",b).format({category:e});if(a.muxCode===k.NETWORK_NOT_READY){let c="live"===a.streamType?"Live stream":"Video";return F("{mediaType} is not currently available",b).format({mediaType:c})}}if(a.code){if(a.code===m.MEDIA_ERR_NETWORK)return F("Network Error",b);if(a.code===m.MEDIA_ERR_DECODE)return F("Media Error",b);if(a.code===m.MEDIA_ERR_SRC_NOT_SUPPORTED)return F("Source Not Supported",b)}return F("Error",b)})(a,b).toString(),message:((a,b=!1)=>{var c,d;if(a.muxCode){let e=lu(null!=(c=a.errorCategory)?c:"video"),f=l(null!=(d=a.errorCategory)?d:j.VIDEO);return a.muxCode===k.NETWORK_OFFLINE?F("Check your internet connection and try reloading this video.",b):a.muxCode===k.NETWORK_TOKEN_EXPIRED?F("The video’s secured {tokenNamePrefix}-token has expired.",b).format({tokenNamePrefix:f}):a.muxCode===k.NETWORK_TOKEN_SUB_MISMATCH?F("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",b).format({tokenNamePrefix:f}):a.muxCode===k.NETWORK_TOKEN_MALFORMED?F("{category} URL is formatted incorrectly",b).format({category:e}):[k.NETWORK_TOKEN_AUD_MISMATCH,k.NETWORK_TOKEN_AUD_MISSING].includes(a.muxCode)?F("The {tokenNamePrefix}-token is formatted with incorrect information.",b).format({tokenNamePrefix:f}):[k.NETWORK_TOKEN_MISSING,k.NETWORK_INVALID_URL].includes(a.muxCode)?F("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",b).format({tokenNamePrefix:f}):a.muxCode===k.NETWORK_NOT_FOUND?"":a.message}return a.code&&(a.code===m.MEDIA_ERR_NETWORK||a.code===m.MEDIA_ERR_DECODE||a.code===m.MEDIA_ERR_SRC_NOT_SUPPORTED),a.message})(a,b).toString()}))(a,!1);return`
      ${null!=d&&d.title?`<h3>${d.title}</h3>`:""}
      ${null!=d&&d.message||null!=d&&d.linkUrl?`<p>
        ${null==d?void 0:d.message}
        ${null!=d&&d.linkUrl?`<a
              href="${d.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(b=d.linkText)?b:""} ${F("(opens in a new window)")}"
              >${null!=(c=d.linkText)?c:d.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return lE(a)};var lG,lH,lI,lJ,lK,lL,lM,lN,lO,lP,lQ,lR,lS,lT,lU,lV=Object.values(bg),lW=Object.values(lB),lX=Object.values(lC),lY="mux-player",lZ={isDialogOpen:!1},l$={redundant_streams:!0},l_=class extends lj{constructor(){super(),g5(this,lM),g5(this,lG),g5(this,lH,!1),g5(this,lI,{}),g5(this,lJ,!0),g5(this,lK,new k9(this,"hotkeys")),g5(this,lL,{...lZ,onCloseErrorDialog:a=>{var b;(null==(b=a.composedPath()[0])?void 0:b.localName)==="media-error-dialog"&&g7(this,lM,lP).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:a=>{var b;(null==(b=a.composedPath()[0])?void 0:b.localName)==="media-error-dialog"&&(k4(this,kY.activeElement)||a.preventDefault())}}),g6(this,lG,ax()),this.attachShadow({mode:"open"}),g7(this,lM,lO).call(this),this.isConnected&&g7(this,lM,lN).call(this)}static get NAME(){return lY}static get VERSION(){return k6}static get observedAttributes(){var a;return[...null!=(a=lj.observedAttributes)?a:[],...lW,...lV,...lX]}get mediaTheme(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("media-theme")}get mediaController(){var a,b;return null==(b=null==(a=this.mediaTheme)?void 0:a.shadowRoot)?void 0:b.querySelector("media-controller")}connectedCallback(){let a=this.media;a&&(a.metadata=lF(this))}attributeChangedCallback(a,b,c){var d;switch(g7(this,lM,lN).call(this),super.attributeChangedCallback(a,b,c),a){case lC.HOTKEYS:g4(this,lK).value=c;break;case lC.THUMBNAIL_TIME:null!=c&&this.tokens.thumbnail&&lb(F("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case lC.THUMBNAIL_TOKEN:if(c){let a=E(c);if(a){let{aud:b}=a,c=$.THUMBNAIL;b!==c&&lb(F("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:c,tokenNamePrefix:"thumbnail"}))}}break;case lC.STORYBOARD_TOKEN:if(c){let a=E(c);if(a){let{aud:b}=a,c=$.STORYBOARD;b!==c&&lb(F("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:c,tokenNamePrefix:"storyboard"}))}}break;case lC.DRM_TOKEN:if(c){let a=E(c);if(a){let{aud:b}=a,c=$.DRM;b!==c&&lb(F("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:c,tokenNamePrefix:"drm"}))}}break;case bg.PLAYBACK_ID:null!=c&&c.includes("?token")&&lc(F("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:c}));break;case bg.STREAM_TYPE:c&&![p.LIVE,p.ON_DEMAND,p.UNKNOWN].includes(c)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=c.includes("dvr")?1/0:0:ld({file:"invalid-stream-type.md",message:F("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):c===p.LIVE?null==this.getAttribute(lC.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN}[bg.PLAYBACK_ID,lB.SRC,lC.PLAYBACK_TOKEN].includes(a)&&b!==c&&g6(this,lL,{...g4(this,lL),...lZ}),g7(this,lM,lQ).call(this,{[null!=(d=k8[a])?d:k$(a)]:c})}async requestFullscreen(a){var b;if(!(!this.mediaController||this.mediaController.hasAttribute(bE.MEDIA_IS_FULLSCREEN)))return null==(b=this.mediaController)||b.dispatchEvent(new kX.CustomEvent(bA.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,b)=>{var c;null==(c=this.mediaController)||c.addEventListener(bF.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var a;if(!(!this.mediaController||!this.mediaController.hasAttribute(bE.MEDIA_IS_FULLSCREEN)))return null==(a=this.mediaController)||a.dispatchEvent(new kX.CustomEvent(bA.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,b)=>{var c;null==(c=this.mediaController)||c.addEventListener(bF.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}get preferCmcd(){var a;return null!=(a=this.getAttribute(bg.PREFER_CMCD))?a:void 0}set preferCmcd(a){a!==this.preferCmcd&&(a?s.includes(a)?this.setAttribute(bg.PREFER_CMCD,a):lb(`Invalid value for preferCmcd. Must be one of ${s.join()}`):this.removeAttribute(bg.PREFER_CMCD))}get hasPlayed(){var a,b;return null!=(b=null==(a=this.mediaController)?void 0:a.hasAttribute(bE.MEDIA_HAS_PLAYED))&&b}get inLiveWindow(){var a;return null==(a=this.mediaController)?void 0:a.hasAttribute(bE.MEDIA_TIME_IS_LIVE)}get _hls(){var a;return null==(a=this.media)?void 0:a._hls}get mux(){var a;return null==(a=this.media)?void 0:a.mux}get theme(){var a;return null!=(a=this.getAttribute(lC.THEME))?a:"gerwig"}set theme(a){this.setAttribute(lC.THEME,`${a}`)}get themeProps(){let a=this.mediaTheme;if(!a)return;let b={};for(let c of a.getAttributeNames()){if(lD.includes(c))continue;let d=a.getAttribute(c);b[k$(c)]=""===d||d}return b}set themeProps(a){var b,c;g7(this,lM,lN).call(this);let d={...this.themeProps,...a};for(let e in d){if(lD.includes(e))continue;let d=null==a?void 0:a[e];"boolean"==typeof d||null==d?null==(b=this.mediaTheme)||b.toggleAttribute(kZ(e),!!d):null==(c=this.mediaTheme)||c.setAttribute(kZ(e),d)}}get playbackId(){var a;return null!=(a=this.getAttribute(bg.PLAYBACK_ID))?a:void 0}set playbackId(a){a?this.setAttribute(bg.PLAYBACK_ID,a):this.removeAttribute(bg.PLAYBACK_ID)}get src(){var a,b;return this.playbackId?null!=(a=l0(this,lB.SRC))?a:void 0:null!=(b=this.getAttribute(lB.SRC))?b:void 0}set src(a){a?this.setAttribute(lB.SRC,a):this.removeAttribute(lB.SRC)}get poster(){var a;let b=this.getAttribute(lB.POSTER);if(null!=b)return b;let{tokens:c}=this;return c.playback&&!c.thumbnail?void lb("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((a,{token:b,customDomain:c=k5,thumbnailTime:d,programTime:e}={})=>{var f;let g=null==b?d:void 0,{aud:h}=null!=(f=E(b))?f:{};if(!(b&&"t"!==h))return`https://image.${c}/${a}/thumbnail.webp${k0({token:b,time:g,program_time:e})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(a=this.thumbnailTime)?a:this.startTime,programTime:this.programStartTime,token:c.thumbnail}):void 0}set poster(a){a||""===a?this.setAttribute(lB.POSTER,a):this.removeAttribute(lB.POSTER)}get storyboardSrc(){var a;return null!=(a=this.getAttribute(lC.STORYBOARD_SRC))?a:void 0}set storyboardSrc(a){a?this.setAttribute(lC.STORYBOARD_SRC,a):this.removeAttribute(lC.STORYBOARD_SRC)}get storyboard(){let{tokens:a}=this;return this.storyboardSrc&&!a.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[p.LIVE,p.UNKNOWN].includes(this.streamType)||a.playback&&!a.storyboard?void 0:((a,{token:b,customDomain:c=k5,programStartTime:d,programEndTime:e}={})=>{var f;let{aud:g}=null!=(f=E(b))?f:{};if(!(b&&"s"!==g))return`https://image.${c}/${a}/storyboard.vtt${k0({token:b,format:"webp",program_start_time:d,program_end_time:e})}`})(this.playbackId,{customDomain:this.customDomain,token:a.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(lC.AUDIO)}set audio(a){if(!a)return void this.removeAttribute(lC.AUDIO);this.setAttribute(lC.AUDIO,"")}get hotkeys(){return g4(this,lK)}get nohotkeys(){return this.hasAttribute(lC.NOHOTKEYS)}set nohotkeys(a){if(!a)return void this.removeAttribute(lC.NOHOTKEYS);this.setAttribute(lC.NOHOTKEYS,"")}get thumbnailTime(){return k_(this.getAttribute(lC.THUMBNAIL_TIME))}set thumbnailTime(a){this.setAttribute(lC.THUMBNAIL_TIME,`${a}`)}get videoTitle(){var a,b;return null!=(b=null!=(a=this.getAttribute(lC.VIDEO_TITLE))?a:this.getAttribute(lC.TITLE))?b:""}set videoTitle(a){a!==this.videoTitle&&(a?this.setAttribute(lC.VIDEO_TITLE,a):this.removeAttribute(lC.VIDEO_TITLE))}get placeholder(){var a;return null!=(a=l0(this,lC.PLACEHOLDER))?a:""}set placeholder(a){this.setAttribute(lC.PLACEHOLDER,`${a}`)}get primaryColor(){var a,b;let c=this.getAttribute(lC.PRIMARY_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=kX.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_primary-color"))?void 0:b.trim()))return c}set primaryColor(a){this.setAttribute(lC.PRIMARY_COLOR,`${a}`)}get secondaryColor(){var a,b;let c=this.getAttribute(lC.SECONDARY_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=kX.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_secondary-color"))?void 0:b.trim()))return c}set secondaryColor(a){this.setAttribute(lC.SECONDARY_COLOR,`${a}`)}get accentColor(){var a,b;let c=this.getAttribute(lC.ACCENT_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=kX.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_accent-color"))?void 0:b.trim()))return c}set accentColor(a){this.setAttribute(lC.ACCENT_COLOR,`${a}`)}get defaultShowRemainingTime(){return this.hasAttribute(lC.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(a){a?this.setAttribute(lC.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(lC.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(lC.PLAYBACK_RATES))return this.getAttribute(lC.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(a=>Number(a)).filter(a=>!Number.isNaN(a)).sort((a,b)=>a-b)}set playbackRates(a){if(!a)return void this.removeAttribute(lC.PLAYBACK_RATES);this.setAttribute(lC.PLAYBACK_RATES,a.join(" "))}get forwardSeekOffset(){var a;return null!=(a=k_(this.getAttribute(lC.FORWARD_SEEK_OFFSET)))?a:10}set forwardSeekOffset(a){this.setAttribute(lC.FORWARD_SEEK_OFFSET,`${a}`)}get backwardSeekOffset(){var a;return null!=(a=k_(this.getAttribute(lC.BACKWARD_SEEK_OFFSET)))?a:10}set backwardSeekOffset(a){this.setAttribute(lC.BACKWARD_SEEK_OFFSET,`${a}`)}get defaultHiddenCaptions(){return this.hasAttribute(lC.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(a){a?this.setAttribute(lC.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(lC.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return k_(this.getAttribute(lC.DEFAULT_DURATION))}set defaultDuration(a){null==a?this.removeAttribute(lC.DEFAULT_DURATION):this.setAttribute(lC.DEFAULT_DURATION,`${a}`)}get playerInitTime(){return this.hasAttribute(bg.PLAYER_INIT_TIME)?k_(this.getAttribute(bg.PLAYER_INIT_TIME)):g4(this,lG)}set playerInitTime(a){a!=this.playerInitTime&&(null==a?this.removeAttribute(bg.PLAYER_INIT_TIME):this.setAttribute(bg.PLAYER_INIT_TIME,`${+a}`))}get playerSoftwareName(){var a;return null!=(a=this.getAttribute(bg.PLAYER_SOFTWARE_NAME))?a:lY}get playerSoftwareVersion(){var a;return null!=(a=this.getAttribute(bg.PLAYER_SOFTWARE_VERSION))?a:k6}get beaconCollectionDomain(){var a;return null!=(a=this.getAttribute(bg.BEACON_COLLECTION_DOMAIN))?a:void 0}set beaconCollectionDomain(a){a!==this.beaconCollectionDomain&&(a?this.setAttribute(bg.BEACON_COLLECTION_DOMAIN,a):this.removeAttribute(bg.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var a;return null!=(a=this.getAttribute(bg.MAX_RESOLUTION))?a:void 0}set maxResolution(a){a!==this.maxResolution&&(a?this.setAttribute(bg.MAX_RESOLUTION,a):this.removeAttribute(bg.MAX_RESOLUTION))}get minResolution(){var a;return null!=(a=this.getAttribute(bg.MIN_RESOLUTION))?a:void 0}set minResolution(a){a!==this.minResolution&&(a?this.setAttribute(bg.MIN_RESOLUTION,a):this.removeAttribute(bg.MIN_RESOLUTION))}get renditionOrder(){var a;return null!=(a=this.getAttribute(bg.RENDITION_ORDER))?a:void 0}set renditionOrder(a){a!==this.renditionOrder&&(a?this.setAttribute(bg.RENDITION_ORDER,a):this.removeAttribute(bg.RENDITION_ORDER))}get programStartTime(){return k_(this.getAttribute(bg.PROGRAM_START_TIME))}set programStartTime(a){null==a?this.removeAttribute(bg.PROGRAM_START_TIME):this.setAttribute(bg.PROGRAM_START_TIME,`${a}`)}get programEndTime(){return k_(this.getAttribute(bg.PROGRAM_END_TIME))}set programEndTime(a){null==a?this.removeAttribute(bg.PROGRAM_END_TIME):this.setAttribute(bg.PROGRAM_END_TIME,`${a}`)}get assetStartTime(){return k_(this.getAttribute(bg.ASSET_START_TIME))}set assetStartTime(a){null==a?this.removeAttribute(bg.ASSET_START_TIME):this.setAttribute(bg.ASSET_START_TIME,`${a}`)}get assetEndTime(){return k_(this.getAttribute(bg.ASSET_END_TIME))}set assetEndTime(a){null==a?this.removeAttribute(bg.ASSET_END_TIME):this.setAttribute(bg.ASSET_END_TIME,`${a}`)}get extraSourceParams(){return this.hasAttribute(lC.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(lC.EXTRA_SOURCE_PARAMS)).entries()].reduce((a,[b,c])=>(a[b]=c,a),{}):l$}set extraSourceParams(a){null==a?this.removeAttribute(lC.EXTRA_SOURCE_PARAMS):this.setAttribute(lC.EXTRA_SOURCE_PARAMS,new URLSearchParams(a).toString())}get customDomain(){var a;return null!=(a=this.getAttribute(bg.CUSTOM_DOMAIN))?a:void 0}set customDomain(a){a!==this.customDomain&&(a?this.setAttribute(bg.CUSTOM_DOMAIN,a):this.removeAttribute(bg.CUSTOM_DOMAIN))}get envKey(){var a;return null!=(a=l0(this,bg.ENV_KEY))?a:void 0}set envKey(a){this.setAttribute(bg.ENV_KEY,`${a}`)}get noVolumePref(){return this.hasAttribute(lC.NO_VOLUME_PREF)}set noVolumePref(a){a?this.setAttribute(lC.NO_VOLUME_PREF,""):this.removeAttribute(lC.NO_VOLUME_PREF)}get debug(){return null!=l0(this,bg.DEBUG)}set debug(a){a?this.setAttribute(bg.DEBUG,""):this.removeAttribute(bg.DEBUG)}get disableTracking(){return null!=l0(this,bg.DISABLE_TRACKING)}set disableTracking(a){this.toggleAttribute(bg.DISABLE_TRACKING,!!a)}get disableCookies(){return null!=l0(this,bg.DISABLE_COOKIES)}set disableCookies(a){a?this.setAttribute(bg.DISABLE_COOKIES,""):this.removeAttribute(bg.DISABLE_COOKIES)}get streamType(){var a,b,c;return null!=(c=null!=(b=this.getAttribute(bg.STREAM_TYPE))?b:null==(a=this.media)?void 0:a.streamType)?c:p.UNKNOWN}set streamType(a){this.setAttribute(bg.STREAM_TYPE,`${a}`)}get defaultStreamType(){var a,b,c;return null!=(c=null!=(b=this.getAttribute(lC.DEFAULT_STREAM_TYPE))?b:null==(a=this.mediaController)?void 0:a.getAttribute(lC.DEFAULT_STREAM_TYPE))?c:p.ON_DEMAND}set defaultStreamType(a){a?this.setAttribute(lC.DEFAULT_STREAM_TYPE,a):this.removeAttribute(lC.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var a,b;return this.hasAttribute(lC.TARGET_LIVE_WINDOW)?+this.getAttribute(lC.TARGET_LIVE_WINDOW):null!=(b=null==(a=this.media)?void 0:a.targetLiveWindow)?b:NaN}set targetLiveWindow(a){a==this.targetLiveWindow||Number.isNaN(a)&&Number.isNaN(this.targetLiveWindow)||(null==a?this.removeAttribute(lC.TARGET_LIVE_WINDOW):this.setAttribute(lC.TARGET_LIVE_WINDOW,`${+a}`))}get liveEdgeStart(){var a;return null==(a=this.media)?void 0:a.liveEdgeStart}get startTime(){return k_(l0(this,bg.START_TIME))}set startTime(a){this.setAttribute(bg.START_TIME,`${a}`)}get preferPlayback(){let a=this.getAttribute(bg.PREFER_PLAYBACK);if(a===q.MSE||a===q.NATIVE)return a}set preferPlayback(a){a!==this.preferPlayback&&(a===q.MSE||a===q.NATIVE?this.setAttribute(bg.PREFER_PLAYBACK,a):this.removeAttribute(bg.PREFER_PLAYBACK))}get metadata(){var a;return null==(a=this.media)?void 0:a.metadata}set metadata(a){if(g7(this,lM,lN).call(this),!this.media)return void lc("underlying media element missing when trying to set metadata. metadata will not be set.");this.media.metadata={...lF(this),...a}}get _hlsConfig(){var a;return null==(a=this.media)?void 0:a._hlsConfig}set _hlsConfig(a){if(g7(this,lM,lN).call(this),!this.media)return void lc("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");this.media._hlsConfig=a}async addCuePoints(a){var b;return(g7(this,lM,lN).call(this),this.media)?null==(b=this.media)?void 0:b.addCuePoints(a):void lc("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var a;return null==(a=this.media)?void 0:a.activeCuePoint}get cuePoints(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.cuePoints)?b:[]}addChapters(a){var b;return(g7(this,lM,lN).call(this),this.media)?null==(b=this.media)?void 0:b.addChapters(a):void lc("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var a;return null==(a=this.media)?void 0:a.activeChapter}get chapters(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.chapters)?b:[]}getStartDate(){var a;return null==(a=this.media)?void 0:a.getStartDate()}get currentPdt(){var a;return null==(a=this.media)?void 0:a.currentPdt}get tokens(){let a=this.getAttribute(lC.PLAYBACK_TOKEN),b=this.getAttribute(lC.DRM_TOKEN),c=this.getAttribute(lC.THUMBNAIL_TOKEN),d=this.getAttribute(lC.STORYBOARD_TOKEN);return{...g4(this,lI),...null!=a?{playback:a}:{},...null!=b?{drm:b}:{},...null!=c?{thumbnail:c}:{},...null!=d?{storyboard:d}:{}}}set tokens(a){g6(this,lI,null!=a?a:{})}get playbackToken(){var a;return null!=(a=this.getAttribute(lC.PLAYBACK_TOKEN))?a:void 0}set playbackToken(a){this.setAttribute(lC.PLAYBACK_TOKEN,`${a}`)}get drmToken(){var a;return null!=(a=this.getAttribute(lC.DRM_TOKEN))?a:void 0}set drmToken(a){this.setAttribute(lC.DRM_TOKEN,`${a}`)}get thumbnailToken(){var a;return null!=(a=this.getAttribute(lC.THUMBNAIL_TOKEN))?a:void 0}set thumbnailToken(a){this.setAttribute(lC.THUMBNAIL_TOKEN,`${a}`)}get storyboardToken(){var a;return null!=(a=this.getAttribute(lC.STORYBOARD_TOKEN))?a:void 0}set storyboardToken(a){this.setAttribute(lC.STORYBOARD_TOKEN,`${a}`)}addTextTrack(a,b,c,d){var e;let f=null==(e=this.media)?void 0:e.nativeEl;if(f)return L(f,a,b,c,d)}removeTextTrack(a){var b;let c=null==(b=this.media)?void 0:b.nativeEl;if(c){let b;return void(null==(b=Array.prototype.find.call(c.querySelectorAll("track"),b=>b.track===a))||b.remove())}}get textTracks(){var a;return null==(a=this.media)?void 0:a.textTracks}get castReceiver(){var a;return null!=(a=this.getAttribute(lC.CAST_RECEIVER))?a:void 0}set castReceiver(a){a!==this.castReceiver&&(a?this.setAttribute(lC.CAST_RECEIVER,a):this.removeAttribute(lC.CAST_RECEIVER))}get castCustomData(){var a;return null==(a=this.media)?void 0:a.castCustomData}set castCustomData(a){if(!this.media)return void lc("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");this.media.castCustomData=a}get noTooltips(){return this.hasAttribute(lC.NO_TOOLTIPS)}set noTooltips(a){if(!a)return void this.removeAttribute(lC.NO_TOOLTIPS);this.setAttribute(lC.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(lC.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(a){a?this.setAttribute(lC.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(lC.PROUDLY_DISPLAY_MUX_BADGE)}};function l0(a,b){return a.media?a.media.getAttribute(b):a.getAttribute(b)}lG=new WeakMap,lH=new WeakMap,lI=new WeakMap,lJ=new WeakMap,lK=new WeakMap,lL=new WeakMap,lM=new WeakSet,lN=function(){var a,b,c,d;if(!g4(this,lH)){g6(this,lH,!0),g7(this,lM,lQ).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof kX.HTMLElement))throw""}catch{lc("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{lc("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof dr))throw""}catch{lc("<media-controller> failed to upgrade!")}g7(this,lM,lR).call(this),g7(this,lM,lS).call(this),g7(this,lM,lT).call(this),g6(this,lJ,null==(b=null==(a=this.mediaController)?void 0:a.hasAttribute(cE.USER_INACTIVE))||b),g7(this,lM,lU).call(this),null==(c=this.media)||c.addEventListener("streamtypechange",()=>g7(this,lM,lQ).call(this)),null==(d=this.media)||d.addEventListener("loadstart",()=>g7(this,lM,lQ).call(this))}},lO=function(){var a,b;try{null==(a=null==window?void 0:window.CSS)||a.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(b=null==window?void 0:window.CSS)||b.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},lP=function(a){Object.assign(g4(this,lL),a),g7(this,lM,lQ).call(this)},lQ=function(a={}){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;let U,V;b={...g4(this,lL),...a},U={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(lC.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(a){var b,c;let d=a.theme;if(d){let e=null==(c=null==(b=a.getRootNode())?void 0:b.getElementById)?void 0:c.call(b,d);if(e&&e instanceof HTMLTemplateElement)return e;d.startsWith("media-theme-")||(d=`media-theme-${d}`);let f=kX.customElements.get(d);if(null!=f&&f.template)return f.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(lC.NOHOTKEYS),hotKeys:this.getAttribute(lC.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(bg.TARGET_LIVE_WINDOW),streamType:k7(this.getAttribute(bg.STREAM_TYPE)),primaryColor:this.getAttribute(lC.PRIMARY_COLOR),secondaryColor:this.getAttribute(lC.SECONDARY_COLOR),accentColor:this.getAttribute(lC.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(V=null==(e=this.mediaController)?void 0:e.querySelector("media-time-display"))&&"none"===getComputedStyle(V).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(lC.PLAYBACK_RATES),customDomain:null!=(c=this.getAttribute(bg.CUSTOM_DOMAIN))?c:void 0,title:this.getAttribute(lC.TITLE),videoTitle:null!=(d=this.getAttribute(lC.VIDEO_TITLE))?d:this.getAttribute(lC.TITLE),novolumepref:this.hasAttribute(lC.NO_VOLUME_PREF),proudlyDisplayMuxBadge:this.hasAttribute(lC.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(lC.DISABLE_PSEUDO_ENDED),...b,extraSourceParams:this.extraSourceParams},f=ls`
  <style>
    ${(a=>{let{tokens:b}=a;return b.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(U)}
    ${lk}
  </style>
  ${h=U,ls`
  <media-theme
    template="${h.themeTemplate||!1}"
    defaultstreamtype="${null!=(i=h.defaultStreamType)&&i}"
    hotkeys="${(a=>{let b=a.hotKeys?`${a.hotKeys}`:"";return"live"===k7(a.streamType)&&(b+=" noarrowleft noarrowright"),b})(h)||!1}"
    nohotkeys="${h.noHotKeys||!h.hasSrc||!1}"
    noautoseektolive="${!!(null!=(j=h.streamType)&&j.includes(p.LIVE))&&0!==h.targetLiveWindow}"
    novolumepref="${h.novolumepref||!1}"
    disabled="${!h.hasSrc||h.isDialogOpen}"
    audio="${null!=(k=h.audio)&&k}"
    style="${null!=(l=function(a){let b="";return Object.entries(a).forEach(([a,c])=>{null!=c&&(b+=`${kZ(a)}: ${c}; `)}),b?b.trim():void 0}({"--media-primary-color":h.primaryColor,"--media-secondary-color":h.secondaryColor,"--media-accent-color":h.accentColor}))&&l}"
    defaultsubtitles="${!h.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=h.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(n=h.backwardSeekOffset)&&n}"
    playbackrates="${null!=(o=h.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(q=h.defaultShowRemainingTime)&&q}"
    defaultduration="${null!=(r=h.defaultDuration)&&r}"
    hideduration="${null!=(s=h.hideDuration)&&s}"
    title="${null!=(t=h.title)&&t}"
    videotitle="${null!=(u=h.videoTitle)&&u}"
    proudlydisplaymuxbadge="${null!=(v=h.proudlyDisplayMuxBadge)&&v}"
    exportparts="${lt}"
    onclose="${h.onCloseErrorDialog}"
    onfocusin="${h.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(w=h.noHotKeys)&&w}"
      target-live-window="${null!=(x=h.targetLiveWindow)&&x}"
      stream-type="${null!=(y=k7(h.streamType))&&y}"
      crossorigin="${null!=(z=h.crossOrigin)?z:""}"
      playsinline
      autoplay="${null!=(A=h.autoplay)&&A}"
      muted="${null!=(B=h.muted)&&B}"
      loop="${null!=(C=h.loop)&&C}"
      preload="${null!=(D=h.preload)&&D}"
      debug="${null!=(E=h.debug)&&E}"
      prefer-cmcd="${null!=(F=h.preferCmcd)&&F}"
      disable-tracking="${null!=(G=h.disableTracking)&&G}"
      disable-cookies="${null!=(H=h.disableCookies)&&H}"
      prefer-playback="${null!=(I=h.preferPlayback)&&I}"
      start-time="${null!=h.startTime&&h.startTime}"
      beacon-collection-domain="${null!=(J=h.beaconCollectionDomain)&&J}"
      player-init-time="${null!=(K=h.playerInitTime)&&K}"
      player-software-name="${null!=(L=h.playerSoftwareName)&&L}"
      player-software-version="${null!=(M=h.playerSoftwareVersion)&&M}"
      env-key="${null!=(N=h.envKey)&&N}"
      custom-domain="${null!=(O=h.customDomain)&&O}"
      src="${h.src?h.src:!!h.playbackId&&az(h)}"
      cast-src="${h.src?h.src:!!h.playbackId&&az(h)}"
      cast-receiver="${null!=(P=h.castReceiver)&&P}"
      drm-token="${null!=(R=null==(Q=h.tokens)?void 0:Q.drm)&&R}"
      exportparts="video"
      disable-pseudo-ended="${null!=(S=h.disablePseudoEnded)&&S}"
    >
      ${h.storyboard?ls`<track label="thumbnails" default kind="metadata" src="${h.storyboard}" />`:ls``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!h.poster&&h.poster}"
        placeholdersrc="${null!=(T=h.placeholder)&&T}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,g=this.shadowRoot,f.renderInto(g)},lR=function(){let a=a=>{var b,c;if(!(null!=a&&a.startsWith("theme-")))return;let d=a.replace(/^theme-/,"");if(lD.includes(d))return;let e=this.getAttribute(a);null!=e?null==(b=this.mediaTheme)||b.setAttribute(d,e):null==(c=this.mediaTheme)||c.removeAttribute(d)};new MutationObserver(b=>{for(let{attributeName:c}of b)a(c)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(a)},lS=function(){let a=a=>{var b;let c=null==(b=this.media)?void 0:b.error;if(!(c instanceof m)){let{message:a,code:b}=null!=c?c:{};c=new m(a,b)}if(!(null!=c&&c.fatal)){lb(c),c.data&&lb(`${c.name} data:`,c.data);return}let d=lv(c,!1);d.message&&ld(d),lc(c),c.data&&lc(`${c.name} data:`,c.data),g7(this,lM,lP).call(this,{isDialogOpen:!0})};this.addEventListener("error",a),this.media&&(this.media.errorTranslator=(a={})=>{var b,c,d;if(!((null==(b=this.media)?void 0:b.error)instanceof m))return a;let e=lv(null==(c=this.media)?void 0:c.error,!1);return{player_error_code:null==(d=this.media)?void 0:d.error.code,player_error_message:e.message?String(e.message):a.player_error_message,player_error_context:e.context?String(e.context):a.player_error_context}})},lT=function(){var a,b,c,d;let e=()=>g7(this,lM,lQ).call(this);null==(b=null==(a=this.media)?void 0:a.textTracks)||b.addEventListener("addtrack",e),null==(d=null==(c=this.media)?void 0:c.textTracks)||d.addEventListener("removetrack",e)},lU=function(){var a,b;if(!/Firefox/i.test(navigator.userAgent))return;let c,d=new WeakMap,e=()=>this.streamType===p.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,f=(a,b,c=!1)=>{e()||Array.from(a&&a.activeCues||[]).forEach(a=>{if(!(!a.snapToLines||a.line<-5||a.line>=0&&a.line<10))if(!b||this.paused){let b=a.text.split(`
`).length,e=-3;this.streamType===p.LIVE&&(e=-2);let f=e-b;if(a.line===f&&!c)return;d.has(a)||d.set(a,a.line),a.line=f}else setTimeout(()=>{a.line=d.get(a)||"auto"},500)})},g=()=>{var a,b;f(c,null!=(b=null==(a=this.mediaController)?void 0:a.hasAttribute(cE.USER_INACTIVE))&&b)},h=()=>{var a,b;let d=Array.from((null==(b=null==(a=this.mediaController)?void 0:a.media)?void 0:b.textTracks)||[]).filter(a=>["subtitles","captions"].includes(a.kind)&&"showing"===a.mode)[0];d!==c&&(null==c||c.removeEventListener("cuechange",g)),null==(c=d)||c.addEventListener("cuechange",g),f(c,g4(this,lJ))};h(),null==(a=this.textTracks)||a.addEventListener("change",h),null==(b=this.textTracks)||b.addEventListener("addtrack",h),this.addEventListener("userinactivechange",()=>{var a,b;let d=null==(b=null==(a=this.mediaController)?void 0:a.hasAttribute(cE.USER_INACTIVE))||b;g4(this,lJ)!==d&&(g6(this,lJ,d),f(c,g4(this,lJ)))})};var l1=a=>{throw TypeError(a)},l2=(a,b,c)=>b.has(a)||l1("Cannot "+c),l3=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};if("undefined"==typeof DocumentFragment){class a extends l3{}globalThis.DocumentFragment=a}var l4,l5=class extends l3{},l6=class{constructor(a,b={}){((a,b,c)=>b.has(a)?l1("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c))(this,l4),((a,b,c,d)=>(l2(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,l4,null==b?void 0:b.detail)}get detail(){let a,b;return l2(this,a=l4,"read from private field"),b?b.call(this):a.get(this)}initCustomEvent(){}};l4=new WeakMap;var l7={document:{createElement:function(a,b){return new l5}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(l5)},CustomEvent:l6,EventTarget:l3,HTMLElement:l5,HTMLVideoElement:class extends l3{}},l8="undefined"==typeof window||void 0===globalThis.customElements,l9=l8?l7:globalThis;l8?l7.document:globalThis.document,l9.customElements.get("mux-player")||(l9.customElements.define("mux-player",l_),l9.MuxPlayerElement=l_);var ma=parseInt(g.version)>=19,mb={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function mc(a,b){if("function"==typeof a)return a(b);null!=a&&(a.current=b)}var md=Object.prototype.hasOwnProperty,me=(a,b,c)=>!((a,b)=>{if(Object.is(a,b))return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;if(Array.isArray(a))return!!Array.isArray(b)&&a.length===b.length&&a.some((a,c)=>b[c]===a);let c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(let d=0;d<c.length;d++)if(!md.call(b,c[d])||!Object.is(a[c[d]],b[c[d]]))return!1;return!0})(b,a[c]),mf=(a,b,c)=>{a[c]=b},mg=(a,b,c,d=mf,e=me)=>(0,g.useEffect)(()=>{let f=null==c?void 0:c.current;f&&e(f,b,a)&&d(f,b,a)},[null==c?void 0:c.current,b]),mh=(()=>{try{return"3.7.0"}catch{}return"UNKNOWN"})(),mi=(a,b,c)=>(0,g.useEffect)(()=>{let d=null==b?void 0:b.current;if(d&&c)return d.addEventListener(a,c),()=>{d.removeEventListener(a,c)}},[null==b?void 0:b.current,c,a]),mj=g.forwardRef(({children:a,...b},c)=>g.createElement("mux-player",{suppressHydrationWarning:!0,...((a={})=>{let{ref:b,...c}=a;return Object.entries(c).reduce((a,[b,c])=>{let d=((a,b)=>{if(!(!ma&&"boolean"==typeof b&&!b)){if(((a,b)=>null!=b&&a in b)(a,mb))return mb[a];if(void 0!==b)return/[A-Z]/.test(a)?a.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`):a}})(b,c);if(!d)return a;let e=((a,b)=>ma||"boolean"!=typeof a?a:"")(c,0);return a[d]=e,a},{})})(b),ref:c},a)),mk=g.forwardRef((a,b)=>{var c;let d=(0,g.useRef)(null),e=function(...a){return g.useCallback(function(...a){return b=>{let c=!1,d=a.map(a=>{let d=mc(a,b);return c||"function"!=typeof d||(c=!0),d});if(c)return()=>{for(let b=0;b<d.length;b++){let c=d[b];"function"==typeof c?c():mc(a[b],null)}}}}(...a),a)}(d,b),[f]=((a,b)=>{let{onAbort:c,onCanPlay:d,onCanPlayThrough:e,onEmptied:f,onLoadStart:g,onLoadedData:h,onLoadedMetadata:i,onProgress:j,onDurationChange:k,onVolumeChange:l,onRateChange:m,onResize:n,onWaiting:o,onPlay:p,onPlaying:q,onTimeUpdate:r,onPause:s,onSeeking:t,onSeeked:u,onStalled:v,onSuspend:w,onEnded:x,onError:y,onCuePointChange:z,onChapterChange:A,metadata:B,tokens:C,paused:D,playbackId:E,playbackRates:F,currentTime:G,themeProps:H,extraSourceParams:I,castCustomData:J,_hlsConfig:K,...L}=b;return mg("tokens",C,a),mg("playbackId",E,a),mg("playbackRates",F,a),mg("metadata",B,a),mg("extraSourceParams",I,a),mg("_hlsConfig",K,a),mg("themeProps",H,a),mg("castCustomData",J,a),mg("paused",D,a,(a,b)=>{null!=b&&(b?a.pause():a.play())},(a,b,c)=>(!a.hasAttribute("autoplay")||!!a.hasPlayed)&&me(a,b,c)),mg("currentTime",G,a,(a,b)=>{null!=b&&(a.currentTime=b)}),mi("abort",a,c),mi("canplay",a,d),mi("canplaythrough",a,e),mi("emptied",a,f),mi("loadstart",a,g),mi("loadeddata",a,h),mi("loadedmetadata",a,i),mi("progress",a,j),mi("durationchange",a,k),mi("volumechange",a,l),mi("ratechange",a,m),mi("resize",a,n),mi("waiting",a,o),mi("play",a,p),mi("playing",a,q),mi("timeupdate",a,r),mi("pause",a,s),mi("seeking",a,t),mi("seeked",a,u),mi("stalled",a,v),mi("suspend",a,w),mi("ended",a,x),mi("error",a,y),mi("cuepointchange",a,z),mi("chapterchange",a,A),[L]})(d,a),[h]=(0,g.useState)(null!=(c=a.playerInitTime)?c:ax());return g.createElement(mj,{ref:e,defaultHiddenCaptions:a.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:mh,playerInitTime:h,...f})});function ml(){let[a,b]=(0,g.useState)(null),[c,d]=(0,g.useState)(!1),e=async()=>{d(!0);let a=await fetch("/api/create-live",{method:"POST"});b(await a.json()),d(!1)};return(0,f.jsxs)("div",{className:"p-6 space-y-4",children:[(0,f.jsx)("h1",{className:"text-2xl font-bold",children:"\uD83C\uDFA5 Start a Live Stream"}),(0,f.jsx)("button",{onClick:e,disabled:c,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50",children:c?"Creating Stream...":"Create Live Stream"}),a&&(0,f.jsxs)("div",{className:"mt-6 space-y-4",children:[(0,f.jsx)("h2",{className:"text-xl font-semibold",children:"\uD83D\uDD11 Stream Details"}),(0,f.jsxs)("p",{children:[(0,f.jsx)("strong",{children:"RTMP Server:"})," ",a.rtmp?.url]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("strong",{children:"Stream Key:"})," ",a.stream_key]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("strong",{children:"Playback URL:"})," ","https://stream.mux.com/",a.playback_ids[0].id,".m3u8"]}),(0,f.jsx)("h2",{className:"text-xl font-semibold mt-6",children:"▶ Live Player"}),(0,f.jsx)(mk,{streamType:"live",playbackId:a.playback_ids[0].id,metadataVideoTitle:"Concert Live",primaryColor:"#ff0055",style:{width:"100%",aspectRatio:"16/9",borderRadius:"12px"}})]})]})}},94735:a=>{"use strict";a.exports=require("events")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[619,613,527,628,402],()=>b(b.s=73399));module.exports=c})();