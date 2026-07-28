(()=>{var a={};a.id=994,a.ids=[994],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},821:(a,b,c)=>{"use strict";let d,e,f,g,h;c.r(b),c.d(b,{default:()=>i1});var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a$,a_,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b$,b_,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,cA,cB,cC,cD,cE,cF,cG,cH,cI,cJ,cK,cL,cM,cN,cO,cP,cQ,cR,cS,cT,cU,cV,cW,cX,cY,cZ,c$,c_,c0,c1,c2,c3,c4={};c.r(c4),c.d(c4,{getPlaybackId:()=>iO,getPosterURLFromPlaybackId:()=>iP,transform:()=>iN});var c5={};c.r(c5),c.d(c5,{transform:()=>iX});var c6={};c.r(c6),c.d(c6,{transform:()=>iY});var c7={};c.r(c7),c.d(c7,{transform:()=>iZ});var c8={};c.r(c8),c.d(c8,{transform:()=>i$});var c9={};c.r(c9),c.d(c9,{amazonS3:()=>c7,backblaze:()=>c6,cloudflareR2:()=>c8,mux:()=>c4,vercelBlob:()=>c5});var da=c(98021),db=c(41344),dc=c(93052);let dd={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},de={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},df={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},dg=Object.entries(df),dh=dg.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{}),di=dg.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(di).reduce((a,[b,c])=>{let d=dh[b];return d&&(a[c]=d),a},{userinactivechange:"userinactive"});let dj=Object.entries(dh).reduce((a,[b,c])=>{let d=di[b];return d&&(a[c]=d),a},{userinactive:"userinactivechange"}),dk={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},dl={DISABLED:"disabled",SHOWING:"showing"},dm={MOUSE:"mouse",TOUCH:"touch"},dn={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},dp={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},dq={FULLSCREEN:"fullscreen"};function dr(a){if(a){let{id:b,width:c,height:d}=a;return[b,c,d].filter(a=>null!=a).join(":")}}function ds(a){if(a){let[b,c,d]=a.split(":");return{id:b,width:+c,height:+d}}}function dt(a){if(a){let{id:b,kind:c,language:d,label:e}=a;return[b,c,d,e].filter(a=>null!=a).join(":")}}function du(a){if(a){let[b,c,d,e]=a.split(":");return{id:b,kind:c,language:d,label:e}}}function dv(a){return"number"==typeof a&&!Number.isNaN(a)&&Number.isFinite(a)}function dw(a){return"string"==typeof a&&!isNaN(a)&&!isNaN(parseFloat(a))}let dx=a=>new Promise(b=>setTimeout(b,a)),dy=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],dz=a=>{if(!dv(a))return"";let b=Math.abs(a),c=b!==a,d=new Date(0,0,0,0,0,b,0),e=[d.getHours(),d.getMinutes(),d.getSeconds()].map((a,b)=>a&&((a,b)=>{let c=1===a?dy[b].singular:dy[b].plural;return`${a} ${c}`})(a,b)).filter(a=>a).join(", ");return`${e}${c?" remaining":""}`};function dA(a,b){let c=!1;a<0&&(c=!0,a=0-a);let d=Math.floor((a=a<0?0:a)%60),e=Math.floor(a/60%60),f=Math.floor(a/3600),g=Math.floor(b/60%60),h=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(f=e=d="0"),e=(((f=f>0||h>0?f+":":"")||g>=10)&&e<10?"0"+e:e)+":",(c?"-":"")+f+e+(d=d<10?"0"+d:d)}Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let dB={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},dC=(null==(i=globalThis.navigator)?void 0:i.language)||"en",dD=(a,b={})=>(a=>{var b,c,d;let[e]=dC.split("-");return(null==(b=dB[dC])?void 0:b[a])||(null==(c=dB[e])?void 0:c[a])||(null==(d=dB.en)?void 0:d[a])||a})(a).replace(/\{(\w+)\}/g,(a,c)=>c in b?String(b[c]):`{${c}}`);class dE{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class dF extends dE{}class dG extends dF{constructor(){super(...arguments),this.role=null}}class dH{observe(){}unobserve(){}disconnect(){}}let dI={createElement:function(){return new dJ.HTMLElement},createElementNS:function(){return new dJ.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:a=>!1},dJ={ResizeObserver:dH,document:dI,Node:dF,Element:dG,HTMLElement:class extends dG{constructor(){super(...arguments),this.innerHTML=""}get content(){return new dJ.DocumentFragment}},DocumentFragment:class extends dE{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:a=>null,setItem(a,b){},removeItem(a){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:a=>({matches:!1,media:a}),DOMParser:class{parseFromString(a,b){return{body:{textContent:a}}}}},dK="undefined"==typeof window||void 0===window.customElements,dL=Object.keys(dJ).every(a=>a in globalThis),dM=dK&&!dL?dJ:globalThis,dN=dK&&!dL?dI:globalThis.document,dO=new WeakMap,dP=a=>{let b=dO.get(a);return b||dO.set(a,b=new Set),b},dQ=new dM.ResizeObserver(a=>{for(let b of a)for(let a of dP(b.target))a(b)});function dR(a,b){dP(a).add(b),dQ.observe(a)}function dS(a,b){let c=dP(a);c.delete(b),c.size||dQ.unobserve(a)}function dT(a){let b={};for(let c of a)b[c.name]=c.value;return b}function dU(a){var b;return null!=(b=dV(a))?b:dZ(a,"media-controller")}function dV(a){var b;let{MEDIA_CONTROLLER:c}=de,d=a.getAttribute(c);if(d)return null==(b=d_(a))?void 0:b.getElementById(d)}let dW=(a,b,c=".value")=>{let d=a.querySelector(c);d&&(d.textContent=b)},dX=(a,b)=>((a,b)=>{let c=`slot[name="${b}"]`,d=a.shadowRoot.querySelector(c);return d?d.children:[]})(a,b)[0],dY=(a,b)=>!!a&&!!b&&(null!=a&&!!a.contains(b)||dY(a,b.getRootNode().host)),dZ=(a,b)=>{if(!a)return null;let c=a.closest(b);return c||dZ(a.getRootNode().host,b)};function d$(a=document){var b;let c=null==a?void 0:a.activeElement;return c?null!=(b=d$(c.shadowRoot))?b:c:null}function d_(a){var b;let c=null==(b=null==a?void 0:a.getRootNode)?void 0:b.call(a);return c instanceof ShadowRoot||c instanceof Document?c:null}function d0(a,{depth:b=3,checkOpacity:c=!0,checkVisibilityCSS:d=!0}={}){if(a.checkVisibility)return a.checkVisibility({checkOpacity:c,checkVisibilityCSS:d});let e=a;for(;e&&b>0;){let a=getComputedStyle(e);if(c&&"0"===a.opacity||d&&"hidden"===a.visibility||"none"===a.display)return!1;e=e.parentElement,b--}return!0}function d1(a,b){let c=function(a,b){var c,d;let e;for(e of null!=(c=a.querySelectorAll("style:not([media])"))?c:[]){let a;try{a=null==(d=e.sheet)?void 0:d.cssRules}catch{continue}for(let c of null!=a?a:[])if(b(c.selectorText))return c}}(a,a=>a===b);return c||d2(a,b)}function d2(a,b){var c,d;let e=null!=(c=a.querySelectorAll("style:not([media])"))?c:[],f=null==e?void 0:e[e.length-1];return(null==f?void 0:f.sheet)?(null==f||f.sheet.insertRule(`${b}{}`,f.sheet.cssRules.length),null==(d=f.sheet.cssRules)?void 0:d[f.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",a),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function d3(a,b,c=NaN){let d=a.getAttribute(b);return null!=d?+d:c}function d4(a,b,c){let d=+c;if(null==c||Number.isNaN(d)){a.hasAttribute(b)&&a.removeAttribute(b);return}d3(a,b,void 0)!==d&&a.setAttribute(b,`${d}`)}function d5(a,b){return a.hasAttribute(b)}function d6(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}d5(a,b)!=c&&a.toggleAttribute(b,c)}function d7(a,b,c=null){var d;return null!=(d=a.getAttribute(b))?d:c}function d8(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}let d=`${c}`;d7(a,b,void 0)!==d&&a.setAttribute(b,d)}var d9=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ea=(a,b,c)=>(d9(a,b,"read from private field"),c?c.call(a):b.get(a)),eb=(a,b,c,d)=>(d9(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ec extends dM.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,j,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[de.MEDIA_CONTROLLER,dh.MEDIA_PAUSED]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===de.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=ea(this,j))?void 0:d.unassociateElement)||e.call(d,this),eb(this,j,null)),c&&this.isConnected&&(eb(this,j,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=ea(this,j))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c,d;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),eb(this,j,function(a){var b;let c=a.getAttribute(de.MEDIA_CONTROLLER);return c?null==(b=a.getRootNode())?void 0:b.getElementById(c):dZ(a,"media-controller")}(this)),this.getAttribute(de.MEDIA_CONTROLLER)&&(null==(b=null==(a=ea(this,j))?void 0:a.associateElement)||b.call(a,this)),null==(c=ea(this,j))||c.addEventListener("pointerdown",this),null==(d=ea(this,j))||d.addEventListener("click",this)}disconnectedCallback(){var a,b,c,d;this.getAttribute(de.MEDIA_CONTROLLER)&&(null==(b=null==(a=ea(this,j))?void 0:a.unassociateElement)||b.call(a,this)),null==(c=ea(this,j))||c.removeEventListener("pointerdown",this),null==(d=ea(this,j))||d.removeEventListener("click",this),eb(this,j,null)}handleEvent(a){var b;let c=null==(b=a.composedPath())?void 0:b[0];if(["video","media-controller"].includes(null==c?void 0:c.localName)){if("pointerdown"===a.type)this._pointerType=a.pointerType;else if("click"===a.type){let{clientX:b,clientY:c}=a,{left:d,top:e,width:f,height:g}=this.getBoundingClientRect(),h=b-d,i=c-e;if(h<0||i<0||h>f||i>g||0===f&&0===g)return;let{pointerType:j=this._pointerType}=a;if(this._pointerType=void 0,j===dm.TOUCH)return void this.handleTap(a);if(j===dm.MOUSE)return void this.handleMouseClick(a)}}}get mediaPaused(){return d5(this,dh.MEDIA_PAUSED)}set mediaPaused(a){d6(this,dh.MEDIA_PAUSED,a)}handleTap(a){}handleMouseClick(a){let b=this.mediaPaused?dd.MEDIA_PLAY_REQUEST:dd.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new dM.CustomEvent(b,{composed:!0,bubbles:!0}))}}j=new WeakMap,ec.shadowRootOptions={mode:"open"},ec.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},dM.customElements.get("media-gesture-receiver")||dM.customElements.define("media-gesture-receiver",ec);var ed=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ee=(a,b,c)=>(ed(a,b,"read from private field"),c?c.call(a):b.get(a)),ef=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},eg=(a,b,c,d)=>(ed(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),eh=(a,b,c)=>(ed(a,b,"access private method"),c);let ei={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},ej=Object.values(dh);function ek(a,b){var c,d,e;if(!a.isConnected)return;let f=Object.fromEntries((null!=(c=a.getAttribute(ei.BREAKPOINTS))?c:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(a=>a.split(":"))),g=(d=f,e=b,Object.keys(d).filter(a=>e>=parseInt(d[a]))),h=!1;if(Object.keys(f).forEach(b=>{if(g.includes(b)){a.hasAttribute(`breakpoint${b}`)||(a.setAttribute(`breakpoint${b}`,""),h=!0);return}a.hasAttribute(`breakpoint${b}`)&&(a.removeAttribute(`breakpoint${b}`),h=!0)}),h){let b=new CustomEvent(di.BREAKPOINTS_CHANGE,{detail:g});a.dispatchEvent(b)}a.breakpointsComputed||(a.breakpointsComputed=!0,a.dispatchEvent(new CustomEvent(di.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class el extends dM.HTMLElement{constructor(){if(super(),ef(this,p),ef(this,t),ef(this,v),ef(this,x),ef(this,z),ef(this,B),ef(this,k,0),ef(this,l,null),ef(this,m,null),ef(this,n,void 0),this.breakpointsComputed=!1,ef(this,o,new MutationObserver(eh(this,p,q).bind(this))),ef(this,r,!1),ef(this,s,a=>{ee(this,r)||(setTimeout(()=>{!function(a){ek(a.target,a.contentRect.width)}(a),eg(this,r,!1)},0),eg(this,r,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}let a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{if(!a.assignedElements({flatten:!0}).length){ee(this,l)&&this.mediaUnsetCallback(ee(this,l));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[ei.AUTOHIDE,ei.GESTURES_DISABLED].concat(ej).filter(a=>![dh.MEDIA_RENDITION_LIST,dh.MEDIA_AUDIO_TRACK_LIST,dh.MEDIA_CHAPTERS_CUES,dh.MEDIA_WIDTH,dh.MEDIA_HEIGHT,dh.MEDIA_ERROR,dh.MEDIA_ERROR_MESSAGE].includes(a))}attributeChangedCallback(a,b,c){a.toLowerCase()==ei.AUTOHIDE&&(this.autohide=c)}get media(){let a=this.querySelector(":scope > [slot=media]");return(null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a}async handleMediaUpdated(a){a&&(eg(this,l,a),a.localName.includes("-")&&await dM.customElements.whenDefined(a.localName),this.mediaSetCallback(a))}connectedCallback(){var a;ee(this,o).observe(this,{childList:!0,subtree:!0}),dR(this,ee(this,s));let b=null!=this.getAttribute(ei.AUDIO)?dD("audio player"):dD("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",b),this.handleMediaUpdated(this.media),this.setAttribute(ei.USER_INACTIVE,""),ek(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(a=dM.window)||a.addEventListener("mouseup",this)}disconnectedCallback(){var a;ee(this,o).disconnect(),dS(this,ee(this,s)),this.media&&this.mediaUnsetCallback(this.media),null==(a=dM.window)||a.removeEventListener("mouseup",this)}mediaSetCallback(a){}mediaUnsetCallback(a){eg(this,l,null)}handleEvent(a){switch(a.type){case"pointerdown":eg(this,k,a.timeStamp);break;case"pointermove":eh(this,t,u).call(this,a);break;case"pointerup":eh(this,v,w).call(this,a);break;case"mouseleave":eh(this,x,y).call(this);break;case"mouseup":this.removeAttribute(ei.KEYBOARD_CONTROL);break;case"keyup":eh(this,B,C).call(this),this.setAttribute(ei.KEYBOARD_CONTROL,"")}}set autohide(a){let b=Number(a);eg(this,n,isNaN(b)?0:b)}get autohide(){return(void 0===ee(this,n)?2:ee(this,n)).toString()}get breakpoints(){return d7(this,ei.BREAKPOINTS)}set breakpoints(a){d8(this,ei.BREAKPOINTS,a)}get audio(){return d5(this,ei.AUDIO)}set audio(a){d6(this,ei.AUDIO,a)}get gesturesDisabled(){return d5(this,ei.GESTURES_DISABLED)}set gesturesDisabled(a){d6(this,ei.GESTURES_DISABLED,a)}get keyboardControl(){return d5(this,ei.KEYBOARD_CONTROL)}set keyboardControl(a){d6(this,ei.KEYBOARD_CONTROL,a)}get noAutohide(){return d5(this,ei.NO_AUTOHIDE)}set noAutohide(a){d6(this,ei.NO_AUTOHIDE,a)}get autohideOverControls(){return d5(this,ei.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(a){d6(this,ei.AUTOHIDE_OVER_CONTROLS,a)}get userInteractive(){return d5(this,ei.USER_INACTIVE)}set userInteractive(a){d6(this,ei.USER_INACTIVE,a)}}k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p=new WeakSet,q=function(a){let b=this.media;for(let c of a)if("childList"===c.type){for(let a of c.removedNodes){if("media"!=a.slot||c.target!=this)continue;let d=c.previousSibling&&c.previousSibling.previousElementSibling;if(d&&b){let b="media"!==d.slot;for(;null!==(d=d.previousSibling);)"media"==d.slot&&(b=!1);b&&this.mediaUnsetCallback(a)}else this.mediaUnsetCallback(a)}if(b)for(let a of c.addedNodes)a===b&&this.handleMediaUpdated(b)}},r=new WeakMap,s=new WeakMap,t=new WeakSet,u=function(a){if("mouse"!==a.pointerType&&a.timeStamp-ee(this,k)<250)return;eh(this,z,A).call(this),clearTimeout(ee(this,m));let b=this.hasAttribute(ei.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(a.target)||b)&&eh(this,B,C).call(this)},v=new WeakSet,w=function(a){if("touch"===a.pointerType){let b=!this.hasAttribute(ei.USER_INACTIVE);[this,this.media].includes(a.target)&&b?eh(this,x,y).call(this):eh(this,B,C).call(this)}else a.composedPath().some(a=>["media-play-button","media-fullscreen-button"].includes(null==a?void 0:a.localName))&&eh(this,B,C).call(this)},x=new WeakSet,y=function(){if(0>ee(this,n)||this.hasAttribute(ei.USER_INACTIVE))return;this.setAttribute(ei.USER_INACTIVE,"");let a=new dM.CustomEvent(di.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(a)},z=new WeakSet,A=function(){if(!this.hasAttribute(ei.USER_INACTIVE))return;this.removeAttribute(ei.USER_INACTIVE);let a=new dM.CustomEvent(di.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(a)},B=new WeakSet,C=function(){eh(this,z,A).call(this),clearTimeout(ee(this,m));let a=parseInt(this.autohide);a<0||eg(this,m,setTimeout(()=>{eh(this,x,y).call(this)},1e3*a))},el.shadowRootOptions={mode:"open"},el.getTemplateHTML=function(a){return`
    <style>
      
      :host([${dh.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${ei.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
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

      
      :host([${ei.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${ei.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${ei.AUDIO}])[${ei.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${ei.AUDIO}])[${ei.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${ei.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${ei.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${ei.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
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

      
      :host(:not([${ei.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${ei.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${ei.USER_INACTIVE}]:not([${dh.MEDIA_PAUSED}]):not([${dh.MEDIA_IS_AIRPLAYING}]):not([${dh.MEDIA_IS_CASTING}]):not([${ei.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${ei.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${ei.USER_INACTIVE}]:not([${ei.NO_AUTOHIDE}]):not([${dh.MEDIA_PAUSED}]):not([${dh.MEDIA_IS_CASTING}]):not([${ei.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${ei.USER_INACTIVE}][${ei.AUTOHIDE_OVER_CONTROLS}]:not([${ei.NO_AUTOHIDE}]):not([${dh.MEDIA_PAUSED}]):not([${dh.MEDIA_IS_CASTING}]):not([${ei.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${ei.AUDIO}])[${dh.MEDIA_HAS_PLAYED}]) slot[name=poster] {
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
        <template shadowrootmode="${ec.shadowRootOptions.mode}">
          ${ec.getTemplateHTML({})}
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
  `},dM.customElements.get("media-container")||dM.customElements.define("media-container",el);var em=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},en=(a,b,c)=>(em(a,b,"read from private field"),c?c.call(a):b.get(a)),eo=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ep=(a,b,c,d)=>(em(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class eq{constructor(a,b,{defaultValue:c}={defaultValue:void 0}){eo(this,H),eo(this,D,void 0),eo(this,E,void 0),eo(this,F,void 0),eo(this,G,new Set),ep(this,D,a),ep(this,E,b),ep(this,F,new Set(c))}[Symbol.iterator](){return en(this,H,I).values()}get length(){return en(this,H,I).size}get value(){var a;return null!=(a=[...en(this,H,I)].join(" "))?a:""}set value(a){var b;a!==this.value&&(ep(this,G,new Set),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return[...en(this,H,I)][a]}values(){return en(this,H,I).values()}forEach(a,b){en(this,H,I).forEach(a,b)}add(...a){var b,c;a.forEach(a=>en(this,G).add(a)),(""!==this.value||(null==(b=en(this,D))?void 0:b.hasAttribute(`${en(this,E)}`)))&&(null==(c=en(this,D))||c.setAttribute(`${en(this,E)}`,`${this.value}`))}remove(...a){var b;a.forEach(a=>en(this,G).delete(a)),null==(b=en(this,D))||b.setAttribute(`${en(this,E)}`,`${this.value}`)}contains(a){return en(this,H,I).has(a)}toggle(a,b){if(void 0!==b)if(b)return this.add(a),!0;else return this.remove(a),!1;return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){return this.remove(a),this.add(b),a===b}}D=new WeakMap,E=new WeakMap,F=new WeakMap,G=new WeakMap,H=new WeakSet,I=function(){return en(this,G).size?en(this,G):en(this,F)};let er=(a="")=>{let[b,c,d]=a.split(":"),e=d?decodeURIComponent(d):void 0;return{kind:"cc"===b?dk.CAPTIONS:dk.SUBTITLES,language:c,label:e}},es=(a="",b={})=>((a="")=>a.split(/\s+/))(a).map(a=>{let c=er(a);return{...b,...c}}),et=a=>a?Array.isArray(a)?a.map(a=>"string"==typeof a?er(a):a):"string"==typeof a?es(a):[a]:[],eu=({kind:a,label:b,language:c}={kind:"subtitles"})=>b?`${"captions"===a?"cc":"sb"}:${c}:${encodeURIComponent(b)}`:c,ev=(a=[])=>Array.prototype.map.call(a,eu).join(" "),ew=a=>{let b=Object.entries(a).map(([a,b])=>c=>c[a]===b);return a=>b.every(b=>b(a))},ex=(a,b=[],c=[])=>{let d=et(c).map(ew);Array.from(b).filter(a=>d.some(b=>b(a))).forEach(b=>{b.mode=a})},ey=(a,b=()=>!0)=>{if(!(null==a?void 0:a.textTracks))return[];let c="function"==typeof b?b:ew(b);return Array.from(a.textTracks).filter(c)},ez=a=>{var b;return!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)||a.hasAttribute(dh.MEDIA_SUBTITLES_SHOWING)},eA="exitFullscreen"in dN?"exitFullscreen":"webkitExitFullscreen"in dN?"webkitExitFullscreen":"webkitCancelFullScreen"in dN?"webkitCancelFullScreen":void 0,eB="fullscreenElement"in dN?"fullscreenElement":"webkitFullscreenElement"in dN?"webkitFullscreenElement":void 0,eC="fullscreenEnabled"in dN?"fullscreenEnabled":"webkitFullscreenEnabled"in dN?"webkitFullscreenEnabled":void 0,eD=()=>{var a;return d||(d=null==(a=null==dN?void 0:dN.createElement)?void 0:a.call(dN,"video"))},eE=async(a=eD())=>{if(!a)return!1;let b=a.volume;a.volume=b/2+.1;let c=new AbortController,d=await Promise.race([eF(a,c.signal),eG(a,b)]);return c.abort(),d},eF=(a,b)=>new Promise(c=>{a.addEventListener("volumechange",()=>c(!0),{signal:b})}),eG=async(a,b)=>{for(let c=0;c<10;c++){if(a.volume===b)return!1;await dx(10)}return a.volume!==b},eH=/.*Version\/.*Safari\/.*/.test(dM.navigator.userAgent),eI=(a=eD())=>(!dM.matchMedia("(display-mode: standalone)").matches||!eH)&&"function"==typeof(null==a?void 0:a.requestPictureInPicture),eJ=(a=eD())=>(a=>{let{documentElement:b,media:c}=a;return!!(null==b?void 0:b[eC])||c&&"webkitSupportsFullscreen"in c})({documentElement:dN,media:a}),eK=eJ(),eL=eI(),eM=!!dM.WebKitPlaybackTargetAvailabilityEvent,eN=!!dM.chrome,eO=a=>ey(a.media,a=>[dk.SUBTITLES,dk.CAPTIONS].includes(a.kind)).sort((a,b)=>a.kind>=b.kind?1:-1),eP=a=>ey(a.media,a=>a.mode===dl.SHOWING&&[dk.SUBTITLES,dk.CAPTIONS].includes(a.kind)),eQ=(a,b)=>{let c=eO(a),d=eP(a),e=!!d.length;if(c.length){if(!1===b||e&&!0!==b)ex(dl.DISABLED,c,d);else if(!0===b||!e&&!1!==b){let b=c[0],{options:e}=a;if(!(null==e?void 0:e.noSubtitlesLangPref)){let a=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=a?[a,...globalThis.navigator.languages]:globalThis.navigator.languages,e=c.filter(a=>d.some(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))).sort((a,b)=>d.findIndex(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(a=>b.language.toLowerCase().startsWith(a.split("-")[0])));e[0]&&(b=e[0])}let{language:f,label:g,kind:h}=b;ex(dl.DISABLED,c,d),ex(dl.SHOWING,c,[{language:f,label:g,kind:h}])}}},eR=(a,b)=>a===b||null!=a&&null!=b&&typeof a==typeof b&&(!!("number"==typeof a&&Number.isNaN(a)&&Number.isNaN(b))||"object"==typeof a&&(Array.isArray(a)?eS(a,b):Object.entries(a).every(([a,c])=>a in b&&eR(c,b[a])))),eS=(a,b)=>{let c=Array.isArray(a),d=Array.isArray(b);return c===d&&(!c&&!d||a.length===b.length&&a.every((a,c)=>eR(a,b[c])))},eT=Object.values(dp),eU=eE().then(a=>e=a),eV=async(...a)=>{await Promise.all(a.filter(a=>a).map(async a=>{if(!("localName"in a&&a instanceof dM.HTMLElement))return;let b=a.localName;if(!b.includes("-"))return;let c=dM.customElements.get(b);c&&a instanceof c||(await dM.customElements.whenDefined(b),dM.customElements.upgrade(a))}))},eW=new dM.DOMParser,eX={mediaError:{get(a,b){let{media:c}=a;if((null==b?void 0:b.type)!=="playing")return null==c?void 0:c.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(a,b){var c;let{media:d}=a;if((null==b?void 0:b.type)!=="playing")return null==(c=null==d?void 0:d.error)?void 0:c.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(a,b){var c,d;let{media:e}=a;if((null==b?void 0:b.type)!=="playing")return null!=(d=null==(c=null==e?void 0:e.error)?void 0:c.message)?d:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoWidth)?b:0},mediaEvents:["resize"]},mediaHeight:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoHeight)?b:0},mediaEvents:["resize"]},mediaPaused:{get(a){var b;let{media:c}=a;return null==(b=null==c?void 0:c.paused)||b},set(a,b){var c;let{media:d}=b;d&&(a?d.pause():null==(c=d.play())||c.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(a,b){let{media:c}=a;return!!c&&(b?"playing"===b.type:!c.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.ended)&&b},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.playbackRate)?b:1},set(a,b){let{media:c}=b;c&&Number.isFinite(+a)&&(c.playbackRate=+a)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.muted)&&b},set(a,b){let{media:c}=b;if(c){try{dM.localStorage.setItem("media-chrome-pref-muted",a?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}c.muted=a}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noMutedPref:c}}=b,{media:d}=b;if(d&&!d.muted&&!c)try{let c="true"===dM.localStorage.getItem("media-chrome-pref-muted");eX.mediaMuted.set(c,b),a(c)}catch(a){console.debug("Error getting muted pref",a)}}]},mediaVolume:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.volume)?b:1},set(a,b){let{media:c}=b;if(c){try{null==a?dM.localStorage.removeItem("media-chrome-pref-volume"):dM.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+a)&&(c.volume=+a)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noVolumePref:c}}=b;if(!c)try{let{media:c}=b;if(!c)return;let d=dM.localStorage.getItem("media-chrome-pref-volume");if(null==d)return;eX.mediaVolume.set(+d,b),a(+d)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(a){let{media:b}=a;return void 0===(null==b?void 0:b.volume)?"high":b.muted||0===b.volume?"off":b.volume<.5?"low":b.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.currentTime)?b:0},set(a,b){let{media:c}=b;c&&dv(a)&&(c.currentTime=a)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(a){let{media:b,options:{defaultDuration:c}={}}=a;return c&&(!b||!b.duration||Number.isNaN(b.duration)||!Number.isFinite(b.duration))?c:Number.isFinite(null==b?void 0:b.duration)?b.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(a){let{media:b}=a;return(null==b?void 0:b.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(a){var b;let{media:c}=a;if(!(null==(b=null==c?void 0:c.seekable)?void 0:b.length))return;let d=c.seekable.start(0),e=c.seekable.end(c.seekable.length-1);if(d||e)return[Number(d.toFixed(3)),Number(e.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(a){var b;let{media:c}=a,d=null!=(b=null==c?void 0:c.buffered)?b:[];return Array.from(d).map((a,b)=>[Number(d.start(b).toFixed(3)),Number(d.end(b).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(a){let{media:b,options:{defaultStreamType:c}={}}=a,d=[dp.LIVE,dp.ON_DEMAND].includes(c)?c:void 0;if(!b)return d;let{streamType:e}=b;if(eT.includes(e))return e===dp.UNKNOWN?d:e;let f=b.duration;return f===1/0?dp.LIVE:Number.isFinite(f)?dp.ON_DEMAND:d},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(a){let{media:b}=a;if(!b)return NaN;let{targetLiveWindow:c}=b,d=eX.mediaStreamType.get(a);return(null==c||Number.isNaN(c))&&d===dp.LIVE?0:c},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(a){let{media:b,options:{liveEdgeOffset:c=10}={}}=a;if(!b)return!1;if("number"==typeof b.liveEdgeStart)return!Number.isNaN(b.liveEdgeStart)&&b.currentTime>=b.liveEdgeStart;if(eX.mediaStreamType.get(a)!==dp.LIVE)return!1;let d=b.seekable;if(!d)return!0;if(!d.length)return!1;let e=d.end(d.length-1)-c;return b.currentTime>=e},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:a=>eO(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:a=>eP(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c,d;let{media:e,options:f}=b;if(!e)return;let g=a=>{var c;f.defaultSubtitles&&(a&&![dk.CAPTIONS,dk.SUBTITLES].includes(null==(c=null==a?void 0:a.track)?void 0:c.kind)||eQ(b,!0))};return e.addEventListener("loadstart",g),null==(c=e.textTracks)||c.addEventListener("addtrack",g),null==(d=e.textTracks)||d.addEventListener("removetrack",g),()=>{var a,b;e.removeEventListener("loadstart",g),null==(a=e.textTracks)||a.removeEventListener("addtrack",g),null==(b=e.textTracks)||b.removeEventListener("removetrack",g)}}]},mediaChaptersCues:{get(a){var b;let{media:c}=a;if(!c)return[];let[d]=ey(c,{kind:dk.CHAPTERS});return Array.from(null!=(b=null==d?void 0:d.cues)?b:[]).map(({text:a,startTime:b,endTime:c})=>({text:a&&eW.parseFromString(a,"text/html").body.textContent||a,startTime:b,endTime:c}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(!d)return;let e=d.querySelector('track[kind="chapters"][default][src]'),f=null==(c=d.shadowRoot)?void 0:c.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==e||e.addEventListener("load",a),null==f||f.addEventListener("load",a),()=>{null==e||e.removeEventListener("load",a),null==f||f.removeEventListener("load",a)}}]},mediaIsPip:{get(a){var b,c;let{media:d,documentElement:e}=a;if(!d||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===d)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(b=d.localName)?void 0:b.includes("-"))&&dY(d,e.pictureInPictureElement);if(e.pictureInPictureElement.localName.includes("-")){let a=e.pictureInPictureElement.shadowRoot;for(;null==a?void 0:a.pictureInPictureElement;){if(a.pictureInPictureElement===d)return!0;a=null==(c=a.pictureInPictureElement)?void 0:c.shadowRoot}}return!1},set(a,b){let{media:c}=b;if(c)if(a){if(!dN.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!c.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};c.requestPictureInPicture().catch(b=>{if(11===b.code){if(!c.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===c.readyState&&"none"===c.preload){let b=()=>{c.removeEventListener("loadedmetadata",d),c.preload="none"},d=()=>{c.requestPictureInPicture().catch(a),b()};c.addEventListener("loadedmetadata",d),c.preload="metadata",setTimeout(()=>{0===c.readyState&&a(),b()},1e3)}else throw b}else throw b})}else dN.pictureInPictureElement&&dN.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.videoRenditions)?b:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(a){var b,c,d;let{media:e}=a;return null==(d=null==(c=null==e?void 0:e.videoRenditions)?void 0:c[null==(b=e.videoRenditions)?void 0:b.selectedIndex])?void 0:d.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let d=Array.prototype.findIndex.call(c.videoRenditions,b=>b.id==a);c.videoRenditions.selectedIndex!=d&&(c.videoRenditions.selectedIndex=d)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.audioTracks)?b:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(a){var b,c;let{media:d}=a;return null==(c=[...null!=(b=null==d?void 0:d.audioTracks)?b:[]].find(a=>a.enabled))?void 0:c.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let b of c.audioTracks)b.enabled=a==b.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:a=>(a=>{var b;let{media:c,documentElement:d,fullscreenElement:e=c}=a;if(!c||!d)return!1;let f=(a=>{let{documentElement:b,media:c}=a,d=null==b?void 0:b[eB];return!d&&"webkitDisplayingFullscreen"in c&&"webkitPresentationMode"in c&&c.webkitDisplayingFullscreen&&c.webkitPresentationMode===dq.FULLSCREEN?c:d})(a);if(!f)return!1;if(f===e||f===c)return!0;if(f.localName.includes("-")){let a=f.shadowRoot;if(!(eB in a))return dY(f,e);for(;null==a?void 0:a[eB];){if(a[eB]===e)return!0;a=null==(b=a[eB])?void 0:b.shadowRoot}}return!1})(a),set(a,b){a?(a=>{var b;let{media:c,fullscreenElement:d}=a;try{let a=d&&"requestFullscreen"in d?"requestFullscreen":d&&"webkitRequestFullScreen"in d?"webkitRequestFullScreen":void 0;if(a){let c=null==(b=d[a])?void 0:b.call(d);if(c instanceof Promise)return c.catch(()=>{})}else(null==c?void 0:c.webkitEnterFullscreen)?c.webkitEnterFullscreen():(null==c?void 0:c.requestFullscreen)&&c.requestFullscreen()}catch(a){console.error(a)}})(b):(a=>{var b;let{documentElement:c}=a;if(eA){let a=null==(b=null==c?void 0:c[eA])?void 0:b.call(c);if(a instanceof Promise)return a.catch(()=>{})}})(b)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(a){var b;let{media:c}=a;return!!(null==c?void 0:c.remote)&&(null==(b=c.remote)?void 0:b.state)!=="disconnected"&&!!c.remote.state},set(a,b){var c,d;let{media:e}=b;if(e&&(!a||(null==(c=e.remote)?void 0:c.state)==="disconnected")&&(a||(null==(d=e.remote)?void 0:d.state)==="connected")){if("function"!=typeof e.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(a,b){let{media:c}=b;if(c){if(!(c.webkitShowPlaybackTargetPicker&&dM.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");c.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(a){let{media:b}=a;if(!eK||!eJ(b))return dn.UNSUPPORTED}},mediaPipUnavailable:{get(a){let{media:b}=a;if(!eL||!eI(b))return dn.UNSUPPORTED}},mediaVolumeUnavailable:{get(a){let{media:b}=a;if(!1===e||(null==b?void 0:b.volume)==void 0)return dn.UNSUPPORTED},stateOwnersUpdateHandlers:[a=>{null==e&&eU.then(b=>a(b?void 0:dn.UNSUPPORTED))}]},mediaCastUnavailable:{get(a,{availability:b="not-available"}={}){var c;let{media:d}=a;return eN&&(null==(c=null==d?void 0:d.remote)?void 0:c.state)?null!=b&&"available"!==b?dn.UNAVAILABLE:void 0:dn.UNSUPPORTED},stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(a,b)=>eM?(null==b?void 0:b.availability)==="not-available"?dn.UNAVAILABLE:void 0:dn.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(a){var b;let{media:c}=a;return(null==c?void 0:c.videoRenditions)?(null==(b=c.videoRenditions)?void 0:b.length)?void 0:dn.UNAVAILABLE:dn.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(a){var b,c;let{media:d}=a;return(null==d?void 0:d.audioTracks)?(null!=(c=null==(b=d.audioTracks)?void 0:b.length)?c:0)<=1?dn.UNAVAILABLE:void 0:dn.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},eY={[dd.MEDIA_PREVIEW_REQUEST](a,b,{detail:c}){var d,e,f;let g,h,{media:i}=b,j=null!=c?c:void 0;if(i&&null!=j){let[a]=ey(i,{kind:dk.METADATA,label:"thumbnails"}),b=Array.prototype.find.call(null!=(d=null==a?void 0:a.cues)?d:[],(a,b,c)=>0===b?a.endTime>j:b===c.length-1?a.startTime<=j:a.startTime<=j&&a.endTime>j);if(b){let a=/'^(?:[a-z]+:)?\/\//i.test(b.text)||null==(e=null==i?void 0:i.querySelector('track[label="thumbnails"]'))?void 0:e.src,c=new URL(b.text,a);h=new URLSearchParams(c.hash).get("#xywh").split(",").map(a=>+a),g=c.href}}let k=a.mediaDuration.get(b),l=null==(f=a.mediaChaptersCues.get(b).find((a,b,c)=>b===c.length-1&&k===a.endTime?a.startTime<=j&&a.endTime>=j:a.startTime<=j&&a.endTime>j))?void 0:f.text;return null!=c&&null==l&&(l=""),{mediaPreviewTime:j,mediaPreviewImage:g,mediaPreviewCoords:h,mediaPreviewChapter:l}},[dd.MEDIA_PAUSE_REQUEST](a,b){a.mediaPaused.set(!0,b)},[dd.MEDIA_PLAY_REQUEST](a,b){var c,d,e,f;let g=a.mediaStreamType.get(b)===dp.LIVE,h=!(null==(c=b.options)?void 0:c.noAutoSeekToLive),i=a.mediaTargetLiveWindow.get(b)>0;if(g&&h&&!i){let c=null==(d=a.mediaSeekable.get(b))?void 0:d[1];if(c){let d=null!=(f=null==(e=b.options)?void 0:e.seekToLiveOffset)?f:0;a.mediaCurrentTime.set(c-d,b)}}a.mediaPaused.set(!1,b)},[dd.MEDIA_PLAYBACK_RATE_REQUEST](a,b,{detail:c}){a.mediaPlaybackRate.set(c,b)},[dd.MEDIA_MUTE_REQUEST](a,b){a.mediaMuted.set(!0,b)},[dd.MEDIA_UNMUTE_REQUEST](a,b){a.mediaVolume.get(b)||a.mediaVolume.set(.25,b),a.mediaMuted.set(!1,b)},[dd.MEDIA_VOLUME_REQUEST](a,b,{detail:c}){c&&a.mediaMuted.get(b)&&a.mediaMuted.set(!1,b),a.mediaVolume.set(c,b)},[dd.MEDIA_SEEK_REQUEST](a,b,{detail:c}){a.mediaCurrentTime.set(c,b)},[dd.MEDIA_SEEK_TO_LIVE_REQUEST](a,b){var c,d,e;let f=null==(c=a.mediaSeekable.get(b))?void 0:c[1];if(Number.isNaN(Number(f)))return;let g=null!=(e=null==(d=b.options)?void 0:d.seekToLiveOffset)?e:0;a.mediaCurrentTime.set(f-g,b)},[dd.MEDIA_SHOW_SUBTITLES_REQUEST](a,b,{detail:c}){var d;let{options:e}=b,f=eO(b),g=et(c),h=null==(d=g[0])?void 0:d.language;h&&!e.noSubtitlesLangPref&&dM.localStorage.setItem("media-chrome-pref-subtitles-lang",h),ex(dl.SHOWING,f,g)},[dd.MEDIA_DISABLE_SUBTITLES_REQUEST](a,b,{detail:c}){let d=eO(b);ex(dl.DISABLED,d,null!=c?c:[])},[dd.MEDIA_TOGGLE_SUBTITLES_REQUEST](a,b,{detail:c}){eQ(b,c)},[dd.MEDIA_RENDITION_REQUEST](a,b,{detail:c}){a.mediaRenditionSelected.set(c,b)},[dd.MEDIA_AUDIO_TRACK_REQUEST](a,b,{detail:c}){a.mediaAudioTrackEnabled.set(c,b)},[dd.MEDIA_ENTER_PIP_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsPip.set(!0,b)},[dd.MEDIA_EXIT_PIP_REQUEST](a,b){a.mediaIsPip.set(!1,b)},[dd.MEDIA_ENTER_FULLSCREEN_REQUEST](a,b){a.mediaIsPip.get(b)&&a.mediaIsPip.set(!1,b),a.mediaIsFullscreen.set(!0,b)},[dd.MEDIA_EXIT_FULLSCREEN_REQUEST](a,b){a.mediaIsFullscreen.set(!1,b)},[dd.MEDIA_ENTER_CAST_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsCasting.set(!0,b)},[dd.MEDIA_EXIT_CAST_REQUEST](a,b){a.mediaIsCasting.set(!1,b)},[dd.MEDIA_AIRPLAY_REQUEST](a,b){a.mediaIsAirplaying.set(!0,b)}};var eZ=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},e$=(a,b,c)=>(eZ(a,b,"read from private field"),c?c.call(a):b.get(a)),e_=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},e0=(a,b,c,d)=>(eZ(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),e1=(a,b,c)=>(eZ(a,b,"access private method"),c);let e2=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],e3={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class e4 extends el{constructor(){super(),e_(this,P),e_(this,R),e_(this,T),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,e_(this,J,new eq(this,e3.HOTKEYS)),e_(this,K,void 0),e_(this,L,void 0),e_(this,M,void 0),e_(this,N,void 0),e_(this,O,a=>{var b;null==(b=e$(this,L))||b.dispatch(a)}),this.associateElement(this);let a={};e0(this,M,b=>{Object.entries(b).forEach(([b,c])=>{if(b in a&&a[b]===c)return;this.propagateMediaState(b,c);let d=b.toLowerCase(),e=new dM.CustomEvent(dj[d],{composed:!0,detail:c});this.dispatchEvent(e)}),a=b}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(e3.NO_HOTKEYS,e3.HOTKEYS,e3.DEFAULT_STREAM_TYPE,e3.DEFAULT_SUBTITLES,e3.DEFAULT_DURATION,e3.LANG)}get mediaStore(){return e$(this,L)}set mediaStore(a){var b,c;if(e$(this,L)&&(null==(b=e$(this,N))||b.call(this),e0(this,N,void 0)),e0(this,L,a),!e$(this,L)&&!this.hasAttribute(e3.NO_DEFAULT_STORE))return void e1(this,P,Q).call(this);e0(this,N,null==(c=e$(this,L))?void 0:c.subscribe(e$(this,M)))}get fullscreenElement(){var a;return null!=(a=e$(this,K))?a:this}set fullscreenElement(a){var b;this.hasAttribute(e3.FULLSCREEN_ELEMENT)&&this.removeAttribute(e3.FULLSCREEN_ELEMENT),e0(this,K,a),null==(b=e$(this,L))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return d5(this,e3.DEFAULT_SUBTITLES)}set defaultSubtitles(a){d6(this,e3.DEFAULT_SUBTITLES,a)}get defaultStreamType(){return d7(this,e3.DEFAULT_STREAM_TYPE)}set defaultStreamType(a){d8(this,e3.DEFAULT_STREAM_TYPE,a)}get defaultDuration(){return d3(this,e3.DEFAULT_DURATION)}set defaultDuration(a){d4(this,e3.DEFAULT_DURATION,a)}get noHotkeys(){return d5(this,e3.NO_HOTKEYS)}set noHotkeys(a){d6(this,e3.NO_HOTKEYS,a)}get keysUsed(){return d7(this,e3.KEYS_USED)}set keysUsed(a){d8(this,e3.KEYS_USED,a)}get liveEdgeOffset(){return d3(this,e3.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){d4(this,e3.LIVE_EDGE_OFFSET,a)}get noAutoSeekToLive(){return d5(this,e3.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(a){d6(this,e3.NO_AUTO_SEEK_TO_LIVE,a)}get noVolumePref(){return d5(this,e3.NO_VOLUME_PREF)}set noVolumePref(a){d6(this,e3.NO_VOLUME_PREF,a)}get noSubtitlesLangPref(){return d5(this,e3.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(a){d6(this,e3.NO_SUBTITLES_LANG_PREF,a)}get noDefaultStore(){return d5(this,e3.NO_DEFAULT_STORE)}set noDefaultStore(a){d6(this,e3.NO_DEFAULT_STORE,a)}attributeChangedCallback(a,b,c){var d,e,f,g,h,i,j,k;if(super.attributeChangedCallback(a,b,c),a===e3.NO_HOTKEYS)c!==b&&""===c?(this.hasAttribute(e3.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):c!==b&&null===c&&this.enableHotkeys();else if(a===e3.HOTKEYS)e$(this,J).value=c;else if(a===e3.DEFAULT_SUBTITLES&&c!==b)null==(d=e$(this,L))||d.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(e3.DEFAULT_SUBTITLES)}});else if(a===e3.DEFAULT_STREAM_TYPE)null==(f=e$(this,L))||f.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(e=this.getAttribute(e3.DEFAULT_STREAM_TYPE))?e:void 0}});else if(a===e3.LIVE_EDGE_OFFSET)null==(g=e$(this,L))||g.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(e3.LIVE_EDGE_OFFSET)?+this.getAttribute(e3.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(e3.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(e3.LIVE_EDGE_OFFSET)}});else if(a===e3.SEEK_TO_LIVE_OFFSET)null==(h=e$(this,L))||h.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(e3.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(e3.SEEK_TO_LIVE_OFFSET):void 0}});else if(a===e3.NO_AUTO_SEEK_TO_LIVE)null==(i=e$(this,L))||i.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(e3.NO_AUTO_SEEK_TO_LIVE)}});else if(a===e3.FULLSCREEN_ELEMENT){let a=c?null==(j=this.getRootNode())?void 0:j.getElementById(c):void 0;e0(this,K,a),null==(k=e$(this,L))||k.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else a===e3.LANG&&c!==b&&(dC=c)}connectedCallback(){var a,b;e$(this,L)||this.hasAttribute(e3.NO_DEFAULT_STORE)||e1(this,P,Q).call(this),null==(a=e$(this,L))||a.dispatch({type:"documentelementchangerequest",detail:dN}),super.connectedCallback(),e$(this,L)&&!e$(this,N)&&e0(this,N,null==(b=e$(this,L))?void 0:b.subscribe(e$(this,M))),this.enableHotkeys()}disconnectedCallback(){var a,b,c,d;null==(a=super.disconnectedCallback)||a.call(this),e$(this,L)&&(null==(b=e$(this,L))||b.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(c=e$(this,L))||c.dispatch({type:dd.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),e$(this,N)&&(null==(d=e$(this,N))||d.call(this),e0(this,N,void 0))}mediaSetCallback(a){var b;super.mediaSetCallback(a),null==(b=e$(this,L))||b.dispatch({type:"mediaelementchangerequest",detail:a}),a.hasAttribute("tabindex")||(a.tabIndex=-1)}mediaUnsetCallback(a){var b;super.mediaUnsetCallback(a),null==(b=e$(this,L))||b.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(a,b){fd(this.mediaStateReceivers,a,b)}associateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;if(b.has(a))return;let c=fe(a,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(dd).forEach(b=>{a.addEventListener(b,e$(this,O))}),b.set(a,c)}unassociateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;b.has(a)&&(b.get(a)(),b.delete(a),Object.values(dd).forEach(b=>{a.removeEventListener(b,e$(this,O))}))}registerMediaStateReceiver(a){if(!a)return;let b=this.mediaStateReceivers;!(b.indexOf(a)>-1)&&(b.push(a),e$(this,L)&&Object.entries(e$(this,L).getState()).forEach(([b,c])=>{fd([a],b,c)}))}unregisterMediaStateReceiver(a){let b=this.mediaStateReceivers,c=b.indexOf(a);c<0||b.splice(c,1)}enableHotkeys(){this.addEventListener("keydown",e1(this,T,U))}disableHotkeys(){this.removeEventListener("keydown",e1(this,T,U)),this.removeEventListener("keyup",e1(this,R,S))}get hotkeys(){return d7(this,e3.HOTKEYS)}set hotkeys(a){d8(this,e3.HOTKEYS,a)}keyboardShortcutHandler(a){var b,c,d,e,f;let g,h,i,j=a.target;if(!((null!=(d=null!=(c=null==(b=j.getAttribute(e3.KEYS_USED))?void 0:b.split(" "))?c:null==j?void 0:j.keysUsed)?d:[]).map(a=>"Space"===a?" ":a).filter(Boolean).includes(a.key)||e$(this,J).contains(`no${a.key.toLowerCase()}`))&&!(" "===a.key&&e$(this,J).contains("nospace")))switch(a.key){case" ":case"k":g=e$(this,L).getState().mediaPaused?dd.MEDIA_PLAY_REQUEST:dd.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new dM.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"m":g="off"===this.mediaStore.getState().mediaVolumeLevel?dd.MEDIA_UNMUTE_REQUEST:dd.MEDIA_MUTE_REQUEST,this.dispatchEvent(new dM.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"f":g=this.mediaStore.getState().mediaIsFullscreen?dd.MEDIA_EXIT_FULLSCREEN_REQUEST:dd.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new dM.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new dM.CustomEvent(dd.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let a=this.hasAttribute(e3.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(e3.KEYBOARD_BACKWARD_SEEK_OFFSET):10;h=Math.max((null!=(e=this.mediaStore.getState().mediaCurrentTime)?e:0)-a,0),i=new dM.CustomEvent(dd.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i);break}case"ArrowRight":{let a=this.hasAttribute(e3.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(e3.KEYBOARD_FORWARD_SEEK_OFFSET):10;h=Math.max((null!=(f=this.mediaStore.getState().mediaCurrentTime)?f:0)+a,0),i=new dM.CustomEvent(dd.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i)}}}}J=new WeakMap,K=new WeakMap,L=new WeakMap,M=new WeakMap,N=new WeakMap,O=new WeakMap,P=new WeakSet,Q=function(){var a;this.mediaStore=(({media:a,fullscreenElement:b,documentElement:c,stateMediator:d=eX,requestMap:e=eY,options:f={},monitorStateOwnersOnlyWithSubscriptions:g=!0})=>{let h,i=[],j={options:{...f}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),l=a=>{void 0!=a&&(eR(a,k)||(k=Object.freeze({...k,...a}),i.forEach(a=>a(k))))},m=()=>{l(Object.entries(d).reduce((a,[b,{get:c}])=>(a[b]=c(j),a),{}))},n={},o=async(a,b)=>{var c,e,f,k,o,p,q,r,s,t,u,v,w,x,y,z;let A=!!h;if(h={...j,...null!=h?h:{},...a},A)return;await eV(...Object.values(a));let B=i.length>0&&0===b&&g,C=j.media!==h.media,D=(null==(c=j.media)?void 0:c.textTracks)!==(null==(e=h.media)?void 0:e.textTracks),E=(null==(f=j.media)?void 0:f.videoRenditions)!==(null==(k=h.media)?void 0:k.videoRenditions),F=(null==(o=j.media)?void 0:o.audioTracks)!==(null==(p=h.media)?void 0:p.audioTracks),G=(null==(q=j.media)?void 0:q.remote)!==(null==(r=h.media)?void 0:r.remote),H=j.documentElement!==h.documentElement,I=!!j.media&&(C||B),J=!!(null==(s=j.media)?void 0:s.textTracks)&&(D||B),K=!!(null==(t=j.media)?void 0:t.videoRenditions)&&(E||B),L=!!(null==(u=j.media)?void 0:u.audioTracks)&&(F||B),M=!!(null==(v=j.media)?void 0:v.remote)&&(G||B),N=!!j.documentElement&&(H||B),O=I||J||K||L||M||N,P=0===i.length&&1===b&&g,Q=!!h.media&&(C||P),R=!!(null==(w=h.media)?void 0:w.textTracks)&&(D||P),S=!!(null==(x=h.media)?void 0:x.videoRenditions)&&(E||P),T=!!(null==(y=h.media)?void 0:y.audioTracks)&&(F||P),U=!!(null==(z=h.media)?void 0:z.remote)&&(G||P),V=!!h.documentElement&&(H||P),W=Q||R||S||T||U||V;if(!(O||W)){Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0;return}Object.entries(d).forEach(([a,{get:b,mediaEvents:c=[],textTracksEvents:d=[],videoRenditionsEvents:e=[],audioTracksEvents:f=[],remoteEvents:g=[],rootEvents:i=[],stateOwnersUpdateHandlers:k=[]}])=>{let m;n[a]||(n[a]={});let o=c=>{l({[a]:b(j,c)})};m=n[a].mediaEvents,c.forEach(b=>{m&&I&&(j.media.removeEventListener(b,m),n[a].mediaEvents=void 0),Q&&(h.media.addEventListener(b,o),n[a].mediaEvents=o)}),m=n[a].textTracksEvents,d.forEach(b=>{var c,d;m&&J&&(null==(c=j.media.textTracks)||c.removeEventListener(b,m),n[a].textTracksEvents=void 0),R&&(null==(d=h.media.textTracks)||d.addEventListener(b,o),n[a].textTracksEvents=o)}),m=n[a].videoRenditionsEvents,e.forEach(b=>{var c,d;m&&K&&(null==(c=j.media.videoRenditions)||c.removeEventListener(b,m),n[a].videoRenditionsEvents=void 0),S&&(null==(d=h.media.videoRenditions)||d.addEventListener(b,o),n[a].videoRenditionsEvents=o)}),m=n[a].audioTracksEvents,f.forEach(b=>{var c,d;m&&L&&(null==(c=j.media.audioTracks)||c.removeEventListener(b,m),n[a].audioTracksEvents=void 0),T&&(null==(d=h.media.audioTracks)||d.addEventListener(b,o),n[a].audioTracksEvents=o)}),m=n[a].remoteEvents,g.forEach(b=>{var c,d;m&&M&&(null==(c=j.media.remote)||c.removeEventListener(b,m),n[a].remoteEvents=void 0),U&&(null==(d=h.media.remote)||d.addEventListener(b,o),n[a].remoteEvents=o)}),m=n[a].rootEvents,i.forEach(b=>{m&&N&&(j.documentElement.removeEventListener(b,m),n[a].rootEvents=void 0),V&&(h.documentElement.addEventListener(b,o),n[a].rootEvents=o)});let p=n[a].stateOwnersUpdateHandlers;k.forEach(b=>{p&&O&&p(),W&&(n[a].stateOwnersUpdateHandlers=b(o,h))})}),Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0};return o({media:a,fullscreenElement:b,documentElement:c,options:f}),{dispatch(a){let{type:b,detail:c}=a;if(e[b]&&null==k.mediaErrorCode)return void l(e[b](d,j,a));"mediaelementchangerequest"===b?o({media:c}):"fullscreenelementchangerequest"===b?o({fullscreenElement:c}):"documentelementchangerequest"===b?o({documentElement:c}):"optionschangerequest"===b&&Object.entries(null!=c?c:{}).forEach(([a,b])=>{j.options[a]=b})},getState:()=>k,subscribe:a=>(o({},i.length+1),i.push(a),a(k),()=>{let b=i.indexOf(a);b>=0&&(o({},i.length-1),i.splice(b,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(e3.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(e3.DEFAULT_DURATION)?+this.getAttribute(e3.DEFAULT_DURATION):void 0,defaultStreamType:null!=(a=this.getAttribute(e3.DEFAULT_STREAM_TYPE))?a:void 0,liveEdgeOffset:this.hasAttribute(e3.LIVE_EDGE_OFFSET)?+this.getAttribute(e3.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(e3.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(e3.SEEK_TO_LIVE_OFFSET):this.hasAttribute(e3.LIVE_EDGE_OFFSET)?+this.getAttribute(e3.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(e3.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(e3.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(e3.NO_SUBTITLES_LANG_PREF)}})},R=new WeakSet,S=function(a){let{key:b}=a;if(!e2.includes(b))return void this.removeEventListener("keyup",e1(this,R,S));this.keyboardShortcutHandler(a)},T=new WeakSet,U=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!e2.includes(d))return void this.removeEventListener("keyup",e1(this,R,S));[" ","ArrowLeft","ArrowRight"].includes(d)&&!(e$(this,J).contains(`no${d.toLowerCase()}`)||" "===d&&e$(this,J).contains("nospace"))&&a.preventDefault(),this.addEventListener("keyup",e1(this,R,S),{once:!0})};let e5=Object.values(dh),e6=Object.values(df),e7=a=>{var b,c,d,e;let{observedAttributes:f}=a.constructor;!f&&(null==(b=a.nodeName)?void 0:b.includes("-"))&&(dM.customElements.upgrade(a),{observedAttributes:f}=a.constructor);let g=null==(e=null==(d=null==(c=null==a?void 0:a.getAttribute)?void 0:c.call(a,de.MEDIA_CHROME_ATTRIBUTES))?void 0:d.split)?void 0:e.call(d,/\s+/);return Array.isArray(f||g)?(f||g).filter(a=>e5.includes(a)):[]},e8=a=>(a=>{var b,c;return(null==(b=a.nodeName)?void 0:b.includes("-"))&&dM.customElements.get(null==(c=a.nodeName)?void 0:c.toLowerCase())&&!(a instanceof dM.customElements.get(a.nodeName.toLowerCase()))&&dM.customElements.upgrade(a),e6.some(b=>b in a)})(a)||!!e7(a).length,e9=a=>{var b;return null==(b=null==a?void 0:a.join)?void 0:b.call(a,":")},fa={[dh.MEDIA_SUBTITLES_LIST]:ev,[dh.MEDIA_SUBTITLES_SHOWING]:ev,[dh.MEDIA_SEEKABLE]:e9,[dh.MEDIA_BUFFERED]:a=>null==a?void 0:a.map(e9).join(" "),[dh.MEDIA_PREVIEW_COORDS]:a=>null==a?void 0:a.join(" "),[dh.MEDIA_RENDITION_LIST]:function(a){return null==a?void 0:a.map(dr).join(" ")},[dh.MEDIA_AUDIO_TRACK_LIST]:function(a){return null==a?void 0:a.map(dt).join(" ")}},fb=async(a,b,c)=>{var d,e;if(a.isConnected||await dx(0),"boolean"==typeof c||null==c)return d6(a,b,c);if("number"==typeof c)return d4(a,b,c);if("string"==typeof c)return d8(a,b,c);if(Array.isArray(c)&&!c.length)return a.removeAttribute(b);let f=null!=(e=null==(d=fa[b])?void 0:d.call(fa,c))?e:c;return a.setAttribute(b,f)},fc=(a,b)=>{if((a=>{var b;return!!(null==(b=a.closest)?void 0:b.call(a,'*[slot="media"]'))})(a))return;let c=(a,b)=>{var c,d;e8(a)&&b(a);let{children:e=[]}=null!=a?a:{};[...e,...null!=(d=null==(c=null==a?void 0:a.shadowRoot)?void 0:c.children)?d:[]].forEach(a=>fc(a,b))},d=null==a?void 0:a.nodeName.toLowerCase();if(d.includes("-")&&!e8(a))return void dM.customElements.whenDefined(d).then(()=>{c(a,b)});c(a,b)},fd=(a,b,c)=>{a.forEach(a=>{if(b in a){a[b]=c;return}let d=e7(a),e=b.toLowerCase();d.includes(e)&&fb(a,e,c)})},fe=(a,b,c)=>{fc(a,b);let d=a=>{var c;b(null!=(c=null==a?void 0:a.composedPath()[0])?c:a.target)},e=a=>{var b;c(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)};a.addEventListener(dd.REGISTER_MEDIA_STATE_RECEIVER,d),a.addEventListener(dd.UNREGISTER_MEDIA_STATE_RECEIVER,e);let f=[],g=a=>{let d=a.target;"media"!==d.name&&(f.forEach(a=>fc(a,c)),(f=[...d.assignedElements({flatten:!0})]).forEach(a=>fc(a,b)))};a.addEventListener("slotchange",g);let h=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:d=[],removedNodes:e=[],type:f,target:g,attributeName:h}=a;"childList"===f?(Array.prototype.forEach.call(d,a=>fc(a,b)),Array.prototype.forEach.call(e,a=>fc(a,c))):"attributes"===f&&h===de.MEDIA_CHROME_ATTRIBUTES&&(e8(g)?b(g):c(g))})});return h.observe(a,{childList:!0,attributes:!0,subtree:!0}),()=>{fc(a,c),a.removeEventListener("slotchange",g),h.disconnect(),a.removeEventListener(dd.REGISTER_MEDIA_STATE_RECEIVER,d),a.removeEventListener(dd.UNREGISTER_MEDIA_STATE_RECEIVER,e)}};dM.customElements.get("media-controller")||dM.customElements.define("media-controller",e4);let ff={PLACEMENT:"placement",BOUNDS:"bounds"};class fg extends dM.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var a;if(!d0(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let b=this.placement;if("left"===b||"right"===b)return void this.style.removeProperty("--media-tooltip-offset-x");let c=getComputedStyle(this),d=null!=(a=dZ(this,"#"+this.bounds))?a:dU(this);if(!d)return;let{x:e,width:f}=d.getBoundingClientRect(),{x:g,width:h}=this.getBoundingClientRect(),i=c.getPropertyValue("--media-tooltip-offset-x"),j=i?parseFloat(i.replace("px","")):0,k=c.getPropertyValue("--media-tooltip-container-margin"),l=k?parseFloat(k.replace("px","")):0,m=g-e+j-l,n=g+h-(e+f)+j+l;return m<0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):n>0?void this.style.setProperty("--media-tooltip-offset-x",`${n}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let a=this.placement;delete this.placement,this.placement=a}}static get observedAttributes(){return[ff.PLACEMENT,ff.BOUNDS]}get placement(){return d7(this,ff.PLACEMENT)}set placement(a){d8(this,ff.PLACEMENT,a)}get bounds(){return d7(this,ff.BOUNDS)}set bounds(a){d8(this,ff.BOUNDS,a)}}fg.shadowRootOptions={mode:"open"},fg.getTemplateHTML=function(a){return`
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
  `},dM.customElements.get("media-tooltip")||dM.customElements.define("media-tooltip",fg);var fh=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fi=(a,b,c)=>(fh(a,b,"read from private field"),c?c.call(a):b.get(a)),fj=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fk=(a,b,c,d)=>(fh(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let fl={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class fm extends dM.HTMLElement{constructor(){if(super(),fj(this,$),fj(this,V,void 0),this.preventClick=!1,this.tooltipEl=null,fj(this,W,a=>{this.preventClick||this.handleClick(a),setTimeout(fi(this,X),0)}),fj(this,X,()=>{var a,b;null==(b=null==(a=this.tooltipEl)?void 0:a.updateXOffset)||b.call(a)}),fj(this,Y,a=>{let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",fi(this,Y));this.preventClick||this.handleClick(a)}),fj(this,Z,a=>{let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",fi(this,Y));this.addEventListener("keyup",fi(this,Y),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",fl.TOOLTIP_PLACEMENT,de.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",fi(this,W)),this.addEventListener("keydown",fi(this,Z)),this.tabIndex=0}disable(){this.removeEventListener("click",fi(this,W)),this.removeEventListener("keydown",fi(this,Z)),this.removeEventListener("keyup",fi(this,Y)),this.tabIndex=-1}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===de.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=fi(this,V))?void 0:d.unassociateElement)||e.call(d,this),fk(this,V,null)),c&&this.isConnected&&(fk(this,V,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fi(this,V))?void 0:g.associateElement)||h.call(g,this))):"disabled"===a&&c!==b?null==c?this.enable():this.disable():a===fl.TOOLTIP_PLACEMENT&&this.tooltipEl&&c!==b&&(this.tooltipEl.placement=c),fi(this,X).call(this)}connectedCallback(){var a,b,c;let{style:d}=d1(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let e=this.getAttribute(de.MEDIA_CONTROLLER);e&&(fk(this,V,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fi(this,V))?void 0:b.associateElement)||c.call(b,this)),dM.customElements.whenDefined("media-tooltip").then(()=>{var a,b;return(a=$,b=_,fh(this,a,"access private method"),b).call(this)})}disconnectedCallback(){var a,b;this.disable(),null==(b=null==(a=fi(this,V))?void 0:a.unassociateElement)||b.call(a,this),fk(this,V,null),this.removeEventListener("mouseenter",fi(this,X)),this.removeEventListener("focus",fi(this,X)),this.removeEventListener("click",fi(this,W))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return d7(this,fl.TOOLTIP_PLACEMENT)}set tooltipPlacement(a){d8(this,fl.TOOLTIP_PLACEMENT,a)}get mediaController(){return d7(this,de.MEDIA_CONTROLLER)}set mediaController(a){d8(this,de.MEDIA_CONTROLLER,a)}get disabled(){return d5(this,fl.DISABLED)}set disabled(a){d6(this,fl.DISABLED,a)}get noTooltip(){return d5(this,fl.NO_TOOLTIP)}set noTooltip(a){d6(this,fl.NO_TOOLTIP,a)}handleClick(a){}}V=new WeakMap,W=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakMap,$=new WeakSet,_=function(){this.addEventListener("mouseenter",fi(this,X)),this.addEventListener("focus",fi(this,X)),this.addEventListener("click",fi(this,W));let a=this.tooltipPlacement;a&&this.tooltipEl&&(this.tooltipEl.placement=a)},fm.shadowRootOptions={mode:"open"},fm.getTemplateHTML=function(a,b={}){return`
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
        <template shadowrootmode="${fg.shadowRootOptions.mode}">
          ${fg.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(a)}
        </slot>
      </media-tooltip>
    </slot>
  `},fm.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},fm.getTooltipContentHTML=function(){return""},dM.customElements.get("media-chrome-button")||dM.customElements.define("media-chrome-button",fm);let fn=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,fo=a=>{let b=a.mediaIsAirplaying?dD("stop airplay"):dD("start airplay");a.setAttribute("aria-label",b)};class fp extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_IS_AIRPLAYING,dh.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fo(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_IS_AIRPLAYING&&fo(this)}get mediaIsAirplaying(){return d5(this,dh.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(a){d6(this,dh.MEDIA_IS_AIRPLAYING,a)}get mediaAirplayUnavailable(){return d7(this,dh.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(a){d8(this,dh.MEDIA_AIRPLAY_UNAVAILABLE,a)}handleClick(){let a=new dM.CustomEvent(dd.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}fp.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dh.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${dh.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${dh.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${dh.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${fn}</slot>
      <slot name="exit">${fn}</slot>
    </slot>
  `},fp.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dD("start airplay")}</slot>
    <slot name="tooltip-exit">${dD("stop airplay")}</slot>
  `},dM.customElements.get("media-airplay-button")||dM.customElements.define("media-airplay-button",fp);let fq=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,fr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,fs=a=>{a.setAttribute("aria-checked",ez(a).toString())};class ft extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_SUBTITLES_LIST,dh.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",dD("closed captions")),fs(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_SUBTITLES_SHOWING&&fs(this)}get mediaSubtitlesList(){return fu(this,dh.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){fv(this,dh.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return fu(this,dh.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){fv(this,dh.MEDIA_SUBTITLES_SHOWING,a)}handleClick(){this.dispatchEvent(new dM.CustomEvent(dd.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}ft.getSlotTemplateHTML=function(a){return`
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
      <slot name="on">${fq}</slot>
      <slot name="off">${fr}</slot>
    </slot>
  `},ft.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${dD("Enable captions")}</slot>
    <slot name="tooltip-disable">${dD("Disable captions")}</slot>
  `};let fu=(a,b)=>{let c=a.getAttribute(b);return c?es(c):[]},fv=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=ev(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dM.customElements.get("media-captions-button")||dM.customElements.define("media-captions-button",ft);let fw=a=>{let b=a.mediaIsCasting?dD("stop casting"):dD("start casting");a.setAttribute("aria-label",b)};class fx extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_IS_CASTING,dh.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fw(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_IS_CASTING&&fw(this)}get mediaIsCasting(){return d5(this,dh.MEDIA_IS_CASTING)}set mediaIsCasting(a){d6(this,dh.MEDIA_IS_CASTING,a)}get mediaCastUnavailable(){return d7(this,dh.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(a){d8(this,dh.MEDIA_CAST_UNAVAILABLE,a)}handleClick(){let a=this.mediaIsCasting?dd.MEDIA_EXIT_CAST_REQUEST:dd.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new dM.CustomEvent(a,{composed:!0,bubbles:!0}))}}fx.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dh.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${dh.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${dh.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${dh.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},fx.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dD("Start casting")}</slot>
    <slot name="tooltip-exit">${dD("Stop casting")}</slot>
  `},dM.customElements.get("media-cast-button")||dM.customElements.define("media-cast-button",fx);var fy=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fz=(a,b,c)=>(fy(a,b,"read from private field"),c?c.call(a):b.get(a)),fA=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fB=(a,b,c,d)=>(fy(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fC=(a,b,c)=>(fy(a,b,"access private method"),c);let fD={OPEN:"open",ANCHOR:"anchor"};class fE extends dM.HTMLElement{constructor(){super(),fA(this,ad),fA(this,af),fA(this,ah),fA(this,aj),fA(this,al),fA(this,an),fA(this,aa,!1),fA(this,ab,null),fA(this,ac,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[fD.OPEN,fD.ANCHOR]}get open(){return d5(this,fD.OPEN)}set open(a){d6(this,fD.OPEN,a)}handleEvent(a){switch(a.type){case"invoke":fC(this,aj,ak).call(this,a);break;case"focusout":fC(this,al,am).call(this,a);break;case"keydown":fC(this,an,ao).call(this,a)}}connectedCallback(){fC(this,ad,ae).call(this),this.role||(this.role="dialog")}attributeChangedCallback(a,b,c){fC(this,ad,ae).call(this),a===fD.OPEN&&c!==b&&(this.open?fC(this,af,ag).call(this):fC(this,ah,ai).call(this))}focus(){fB(this,ab,d$());let a=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),b=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(a||b)return;let c=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==c||c.focus()}get keysUsed(){return["Escape","Tab"]}}aa=new WeakMap,ab=new WeakMap,ac=new WeakMap,ad=new WeakSet,ae=function(){if(!fz(this,aa)&&(fB(this,aa,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a),queueMicrotask(()=>{let{style:a}=d1(this.shadowRoot,":host");a.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},af=new WeakSet,ag=function(){var a;null==(a=fz(this,ac))||a.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},ah=new WeakSet,ai=function(){var a;null==(a=fz(this,ac))||a.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},aj=new WeakSet,ak=function(a){fB(this,ac,a.relatedTarget),dY(this,a.relatedTarget)||(this.open=!this.open)},al=new WeakSet,am=function(a){var b;!dY(this,a.relatedTarget)&&(null==(b=fz(this,ab))||b.focus(),fz(this,ac)&&fz(this,ac)!==a.relatedTarget&&this.open&&(this.open=!1))},an=new WeakSet,ao=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;h||i||j||this.keysUsed.includes(g)&&(a.preventDefault(),a.stopPropagation(),"Tab"===g?(a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()):"Escape"===g&&(null==(f=fz(this,ab))||f.focus(),this.open=!1))},fE.shadowRootOptions={mode:"open"},fE.getTemplateHTML=function(a){return`
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
  `},fE.getSlotTemplateHTML=function(a){return`
    <slot id="content"></slot>
  `},dM.customElements.get("media-chrome-dialog")||dM.customElements.define("media-chrome-dialog",fE);var fF=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fG=(a,b,c)=>(fF(a,b,"read from private field"),c?c.call(a):b.get(a)),fH=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fI=(a,b,c,d)=>(fF(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fJ=(a,b,c)=>(fF(a,b,"access private method"),c);class fK extends dM.HTMLElement{constructor(){if(super(),fH(this,ay),fH(this,aA),fH(this,aC),fH(this,aE),fH(this,aG),fH(this,aI),fH(this,aK),fH(this,aM),fH(this,ap,void 0),fH(this,aq,void 0),fH(this,ar,void 0),fH(this,as,void 0),fH(this,at,{}),fH(this,au,[]),fH(this,av,()=>{if(this.range.matches(":focus-visible")){let{style:a}=d1(this.shadowRoot,":host");a.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),fH(this,aw,()=>{let{style:a}=d1(this.shadowRoot,":host");a.removeProperty("--_focus-visible-box-shadow")}),fH(this,ax,()=>{let a=this.shadowRoot.querySelector("#segments-clipping");a&&a.parentNode.append(a)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.container=this.shadowRoot.querySelector("#container"),fI(this,ar,this.shadowRoot.querySelector("#startpoint")),fI(this,as,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",de.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===de.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=fG(this,ap))?void 0:d.unassociateElement)||e.call(d,this),fI(this,ap,null)),c&&this.isConnected&&(fI(this,ap,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fG(this,ap))?void 0:g.associateElement)||h.call(g,this))):("disabled"===a||"aria-disabled"===a&&b!==c)&&(null==c?(this.range.removeAttribute(a),fJ(this,aA,aB).call(this)):(this.range.setAttribute(a,c),fJ(this,aC,aD).call(this)))}connectedCallback(){var a,b,c;let{style:d}=d1(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),fG(this,at).pointer=d1(this.shadowRoot,"#pointer"),fG(this,at).progress=d1(this.shadowRoot,"#progress"),fG(this,at).thumb=d1(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),fG(this,at).activeSegment=d1(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let e=this.getAttribute(de.MEDIA_CONTROLLER);e&&(fI(this,ap,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fG(this,ap))?void 0:b.associateElement)||c.call(b,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",fG(this,av)),this.shadowRoot.addEventListener("focusout",fG(this,aw)),fJ(this,aA,aB).call(this),dR(this.container,fG(this,ax))}disconnectedCallback(){var a,b;fJ(this,aC,aD).call(this),null==(b=null==(a=fG(this,ap))?void 0:a.unassociateElement)||b.call(a,this),fI(this,ap,null),this.shadowRoot.removeEventListener("focusin",fG(this,av)),this.shadowRoot.removeEventListener("focusout",fG(this,aw)),dS(this.container,fG(this,ax))}updatePointerBar(a){var b;null==(b=fG(this,at).pointer)||b.style.setProperty("width",`${100*this.getPointerRatio(a)}%`)}updateBar(){var a,b;let c=100*this.range.valueAsNumber;null==(a=fG(this,at).progress)||a.style.setProperty("width",`${c}%`),null==(b=fG(this,at).thumb)||b.style.setProperty("left",`${c}%`)}updateSegments(a){let b=this.shadowRoot.querySelector("#segments-clipping");if(b.textContent="",this.container.classList.toggle("segments",!!(null==a?void 0:a.length)),!(null==a?void 0:a.length))return;let c=[...new Set([+this.range.min,...a.flatMap(a=>[a.start,a.end]),+this.range.max])];fI(this,au,[...c]);let d=c.pop();for(let[a,e]of c.entries()){let[f,g]=[0===a,a===c.length-1],h=f?"calc(var(--segments-gap) / -1)":`${100*e}%`,i=g?d:c[a+1],j=`calc(${(i-e)*100}%${f||g?"":" - var(--segments-gap)"})`,k=dN.createElementNS("http://www.w3.org/2000/svg","rect"),l=d1(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);l.style.setProperty("x",h),l.style.setProperty("width",j),b.append(k)}}getPointerRatio(a){return function(a,b,c,d){let e=d.x-c.x,f=d.y-c.y,g=e*e+f*f;return 0===g?0:Math.max(0,Math.min(1,((a-c.x)*e+(b-c.y)*f)/g))}(a.clientX,a.clientY,fG(this,ar).getBoundingClientRect(),fG(this,as).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(a){switch(a.type){case"pointermove":fJ(this,aM,aN).call(this,a);break;case"input":this.updateBar();break;case"pointerenter":fJ(this,aG,aH).call(this,a);break;case"pointerdown":fJ(this,aE,aF).call(this,a);break;case"pointerup":fJ(this,aI,aJ).call(this);break;case"pointerleave":fJ(this,aK,aL).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ap=new WeakMap,aq=new WeakMap,ar=new WeakMap,as=new WeakMap,at=new WeakMap,au=new WeakMap,av=new WeakMap,aw=new WeakMap,ax=new WeakMap,ay=new WeakSet,az=function(a){let b=fG(this,at).activeSegment;if(!b)return;let c=this.getPointerRatio(a),d=fG(this,au).findIndex((a,b,d)=>{let e=d[b+1];return null!=e&&c>=a&&c<=e}),e=`#segments-clipping rect:nth-child(${d+1})`;b.selectorText==e&&b.style.transform||(b.selectorText=e,b.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},aA=new WeakSet,aB=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},aC=new WeakSet,aD=function(){var a,b;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(a=dM.window)||a.removeEventListener("pointerup",this),null==(b=dM.window)||b.removeEventListener("pointermove",this)},aE=new WeakSet,aF=function(a){var b;fI(this,aq,a.composedPath().includes(this.range)),null==(b=dM.window)||b.addEventListener("pointerup",this)},aG=new WeakSet,aH=function(a){var b;"mouse"!==a.pointerType&&fJ(this,aE,aF).call(this,a),this.addEventListener("pointerleave",this),null==(b=dM.window)||b.addEventListener("pointermove",this)},aI=new WeakSet,aJ=function(){var a;null==(a=dM.window)||a.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},aK=new WeakSet,aL=function(){var a,b;this.removeEventListener("pointerleave",this),null==(a=dM.window)||a.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(b=fG(this,at).activeSegment)||b.style.removeProperty("transform")},aM=new WeakSet,aN=function(a){this.toggleAttribute("dragging",1===a.buttons||"mouse"!==a.pointerType),this.updatePointerBar(a),fJ(this,ay,az).call(this,a),this.dragging&&("mouse"!==a.pointerType||!fG(this,aq))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(a),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},fK.shadowRootOptions={mode:"open"},fK.getTemplateHTML=function(a){return`
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
  `},dM.customElements.get("media-chrome-range")||dM.customElements.define("media-chrome-range",fK);var fL=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fM=(a,b,c)=>(fL(a,b,"read from private field"),c?c.call(a):b.get(a)),fN=(a,b,c,d)=>(fL(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fO extends dM.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aO,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[de.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===de.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=fM(this,aO))?void 0:d.unassociateElement)||e.call(d,this),fN(this,aO,null)),c&&this.isConnected&&(fN(this,aO,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fM(this,aO))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(de.MEDIA_CONTROLLER);d&&(fN(this,aO,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=fM(this,aO))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=fM(this,aO))?void 0:a.unassociateElement)||b.call(a,this),fN(this,aO,null)}}aO=new WeakMap,fO.shadowRootOptions={mode:"open"},fO.getTemplateHTML=function(a){return`
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
  `},dM.customElements.get("media-control-bar")||dM.customElements.define("media-control-bar",fO);var fP=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fQ=(a,b,c)=>(fP(a,b,"read from private field"),c?c.call(a):b.get(a)),fR=(a,b,c,d)=>(fP(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fS extends dM.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aP,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[de.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===de.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=fQ(this,aP))?void 0:d.unassociateElement)||e.call(d,this),fR(this,aP,null)),c&&this.isConnected&&(fR(this,aP,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fQ(this,aP))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let{style:d}=d1(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let e=this.getAttribute(de.MEDIA_CONTROLLER);e&&(fR(this,aP,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fQ(this,aP))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=fQ(this,aP))?void 0:a.unassociateElement)||b.call(a,this),fR(this,aP,null)}}aP=new WeakMap,fS.shadowRootOptions={mode:"open"},fS.getTemplateHTML=function(a,b={}){return`
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
  `},fS.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},dM.customElements.get("media-text-display")||dM.customElements.define("media-text-display",fS);var fT=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fU=(a,b,c)=>(fT(a,b,"read from private field"),c?c.call(a):b.get(a));class fV extends fS{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aQ,void 0),((a,b,c,d)=>(fT(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aQ,this.shadowRoot.querySelector("slot")),fU(this,aQ).textContent=dA(null!=(a=this.mediaDuration)?a:0)}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_DURATION]}attributeChangedCallback(a,b,c){a===dh.MEDIA_DURATION&&(fU(this,aQ).textContent=dA(+c)),super.attributeChangedCallback(a,b,c)}get mediaDuration(){return d3(this,dh.MEDIA_DURATION)}set mediaDuration(a){d4(this,dh.MEDIA_DURATION,a)}}aQ=new WeakMap,fV.getSlotTemplateHTML=function(a,b){return`
    <slot>${dA(b.mediaDuration)}</slot>
  `},dM.customElements.get("media-duration-display")||dM.customElements.define("media-duration-display",fV);let fW={2:dD("Network Error"),3:dD("Decode Error"),4:dD("Source Not Supported"),5:dD("Encryption Error")},fX={2:dD("A network error caused the media download to fail."),3:dD("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:dD("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:dD("The media is encrypted and there are no keys to decrypt it.")},fY=a=>{var b,c;return 1===a.code?null:{title:null!=(b=fW[a.code])?b:`Error ${a.code}`,message:null!=(c=fX[a.code])?c:a.message}};var fZ=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};function f$(a){var b;let{title:c,message:d}=null!=(b=fY(a))?b:{},e="";return c&&(e+=`<slot name="error-${a.code}-title"><h3>${c}</h3></slot>`),d&&(e+=`<slot name="error-${a.code}-message"><p>${d}</p></slot>`),e}let f_=[dh.MEDIA_ERROR_CODE,dh.MEDIA_ERROR_MESSAGE];class f0 extends fE{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aR,null)}static get observedAttributes(){return[...super.observedAttributes,...f_]}formatErrorMessage(a){return this.constructor.formatErrorMessage(a)}attributeChangedCallback(a,b,c){var d;if(super.attributeChangedCallback(a,b,c),!f_.includes(a))return;let e=null!=(d=this.mediaError)?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=e.code&&null!==fY(e),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(e))}get mediaError(){var a,b;return fZ(this,a=aR,"read from private field"),b?b.call(this):a.get(this)}set mediaError(a){var b,c;fZ(this,b=aR,"write to private field"),c?c.call(this,a):b.set(this,a)}get mediaErrorCode(){return d3(this,"mediaerrorcode")}set mediaErrorCode(a){d4(this,"mediaerrorcode",a)}get mediaErrorMessage(){return d7(this,"mediaerrormessage")}set mediaErrorMessage(a){d8(this,"mediaerrormessage",a)}}aR=new WeakMap,f0.getSlotTemplateHTML=function(a){return`
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
      ${f$({code:+a.mediaerrorcode,message:a.mediaerrormessage})}
    </slot>
  `},f0.formatErrorMessage=f$,dM.customElements.get("media-error-dialog")||dM.customElements.define("media-error-dialog",f0);let f1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,f2=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,f3=a=>{let b=a.mediaIsFullscreen?dD("exit fullscreen mode"):dD("enter fullscreen mode");a.setAttribute("aria-label",b)};class f4 extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_IS_FULLSCREEN,dh.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),f3(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_IS_FULLSCREEN&&f3(this)}get mediaFullscreenUnavailable(){return d7(this,dh.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(a){d8(this,dh.MEDIA_FULLSCREEN_UNAVAILABLE,a)}get mediaIsFullscreen(){return d5(this,dh.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(a){d6(this,dh.MEDIA_IS_FULLSCREEN,a)}handleClick(){let a=this.mediaIsFullscreen?dd.MEDIA_EXIT_FULLSCREEN_REQUEST:dd.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new dM.CustomEvent(a,{composed:!0,bubbles:!0}))}}f4.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dh.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${dh.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${dh.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${dh.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${f1}</slot>
      <slot name="exit">${f2}</slot>
    </slot>
  `},f4.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dD("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${dD("Exit fullscreen mode")}</slot>
  `},dM.customElements.get("media-fullscreen-button")||dM.customElements.define("media-fullscreen-button",f4);let{MEDIA_TIME_IS_LIVE:f5,MEDIA_PAUSED:f6}=dh,{MEDIA_SEEK_TO_LIVE_REQUEST:f7,MEDIA_PLAY_REQUEST:f8}=dd,f9=a=>{let b=a.mediaPaused||!a.mediaTimeIsLive,c=b?dD("seek to live"):dD("playing live");a.setAttribute("aria-label",c),b?a.removeAttribute("aria-disabled"):a.setAttribute("aria-disabled","true")};class ga extends fm{static get observedAttributes(){return[...super.observedAttributes,f5,f6]}connectedCallback(){super.connectedCallback(),f9(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),f9(this)}get mediaPaused(){return d5(this,dh.MEDIA_PAUSED)}set mediaPaused(a){d6(this,dh.MEDIA_PAUSED,a)}get mediaTimeIsLive(){return d5(this,dh.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(a){d6(this,dh.MEDIA_TIME_IS_LIVE,a)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new dM.CustomEvent(f7,{composed:!0,bubbles:!0})),this.hasAttribute(f6)&&this.dispatchEvent(new dM.CustomEvent(f8,{composed:!0,bubbles:!0})))}}ga.getSlotTemplateHTML=function(a){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${f5}]:not([${f6}])) slot[name=indicator] > *,
      :host([${f5}]:not([${f6}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${f5}]:not([${f6}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${dD("live")}</slot>
  `},dM.customElements.get("media-live-button")||dM.customElements.define("media-live-button",ga);var gb=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gc=(a,b,c)=>(gb(a,b,"read from private field"),c?c.call(a):b.get(a)),gd=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ge=(a,b,c,d)=>(gb(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let gf={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},gg=`
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
`;class gh extends dM.HTMLElement{constructor(){if(super(),gd(this,aS,void 0),gd(this,aT,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[de.MEDIA_CONTROLLER,dh.MEDIA_PAUSED,dh.MEDIA_LOADING,gf.LOADING_DELAY]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===gf.LOADING_DELAY&&b!==c?this.loadingDelay=Number(c):a===de.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=gc(this,aS))?void 0:d.unassociateElement)||e.call(d,this),ge(this,aS,null)),c&&this.isConnected&&(ge(this,aS,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gc(this,aS))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(de.MEDIA_CONTROLLER);d&&(ge(this,aS,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=gc(this,aS))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=gc(this,aS))?void 0:a.unassociateElement)||b.call(a,this),ge(this,aS,null)}get loadingDelay(){return gc(this,aT)}set loadingDelay(a){ge(this,aT,a);let{style:b}=d1(this.shadowRoot,":host");b.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${a}ms)`)}get mediaPaused(){return d5(this,dh.MEDIA_PAUSED)}set mediaPaused(a){d6(this,dh.MEDIA_PAUSED,a)}get mediaLoading(){return d5(this,dh.MEDIA_LOADING)}set mediaLoading(a){d6(this,dh.MEDIA_LOADING,a)}get mediaController(){return d7(this,de.MEDIA_CONTROLLER)}set mediaController(a){d8(this,de.MEDIA_CONTROLLER,a)}get noAutohide(){return d5(this,gf.NO_AUTOHIDE)}set noAutohide(a){d6(this,gf.NO_AUTOHIDE,a)}}aS=new WeakMap,aT=new WeakMap,gh.shadowRootOptions={mode:"open"},gh.getTemplateHTML=function(a){return`
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

      :host([${dh.MEDIA_LOADING}]:not([${dh.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${dh.MEDIA_LOADING}]:not([${dh.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${dh.MEDIA_LOADING}]:not([${dh.MEDIA_PAUSED}])) #status {
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

    <slot name="icon">${gg}</slot>
    <div id="status" role="status" aria-live="polite">${dD("media loading")}</div>
  `},dM.customElements.get("media-loading-indicator")||dM.customElements.define("media-loading-indicator",gh);let gi=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,gj=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,gk=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,gl=a=>{let b="off"===a.mediaVolumeLevel?dD("unmute"):dD("mute");a.setAttribute("aria-label",b)};class gm extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),gl(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_VOLUME_LEVEL&&gl(this)}get mediaVolumeLevel(){return d7(this,dh.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(a){d8(this,dh.MEDIA_VOLUME_LEVEL,a)}handleClick(){let a="off"===this.mediaVolumeLevel?dd.MEDIA_UNMUTE_REQUEST:dd.MEDIA_MUTE_REQUEST;this.dispatchEvent(new dM.CustomEvent(a,{composed:!0,bubbles:!0}))}}gm.getSlotTemplateHTML=function(a){return`
    <style>
      :host(:not([${dh.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${dh.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${dh.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${dh.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${dh.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${dh.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${dh.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${gi}</slot>
      <slot name="low">${gj}</slot>
      <slot name="medium">${gj}</slot>
      <slot name="high">${gk}</slot>
    </slot>
  `},gm.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${dD("Mute")}</slot>
    <slot name="tooltip-unmute">${dD("Unmute")}</slot>
  `},dM.customElements.get("media-mute-button")||dM.customElements.define("media-mute-button",gm);let gn=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,go=a=>{let b=a.mediaIsPip?dD("exit picture in picture mode"):dD("enter picture in picture mode");a.setAttribute("aria-label",b)};class gp extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_IS_PIP,dh.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),go(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_IS_PIP&&go(this)}get mediaPipUnavailable(){return d7(this,dh.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(a){d8(this,dh.MEDIA_PIP_UNAVAILABLE,a)}get mediaIsPip(){return d5(this,dh.MEDIA_IS_PIP)}set mediaIsPip(a){d6(this,dh.MEDIA_IS_PIP,a)}handleClick(){let a=this.mediaIsPip?dd.MEDIA_EXIT_PIP_REQUEST:dd.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new dM.CustomEvent(a,{composed:!0,bubbles:!0}))}}gp.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dh.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${dh.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${dh.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${dh.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gn}</slot>
      <slot name="exit">${gn}</slot>
    </slot>
  `},gp.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dD("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${dD("Exit picture in picture mode")}</slot>
  `},dM.customElements.get("media-pip-button")||dM.customElements.define("media-pip-button",gp);var gq=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};let gr={RATES:"rates"},gs=[1,1.2,1.5,1.7,2];class gt extends fm{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aU,new eq(this,gr.RATES,{defaultValue:gs})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_PLAYBACK_RATE,gr.RATES]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===gr.RATES&&(gq(this,aU).value=c),a===dh.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",dD("Playback rate {playbackRate}",{playbackRate:b}))}}get rates(){return gq(this,aU)}set rates(a){a?Array.isArray(a)?gq(this,aU).value=a.join(" "):"string"==typeof a&&(gq(this,aU).value=a):gq(this,aU).value=""}get mediaPlaybackRate(){return d3(this,dh.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d4(this,dh.MEDIA_PLAYBACK_RATE,a)}handleClick(){var a,b;let c=Array.from(gq(this,aU).values(),a=>+a).sort((a,b)=>a-b),d=null!=(b=null!=(a=c.find(a=>a>this.mediaPlaybackRate))?a:c[0])?b:1,e=new dM.CustomEvent(dd.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d});this.dispatchEvent(e)}}aU=new WeakMap,gt.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},gt.getTooltipContentHTML=function(){return dD("Playback rate")},dM.customElements.get("media-playback-rate-button")||dM.customElements.define("media-playback-rate-button",gt);let gu=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,gv=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,gw=a=>{let b=a.mediaPaused?dD("play"):dD("pause");a.setAttribute("aria-label",b)};class gx extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_PAUSED,dh.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),gw(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_PAUSED&&gw(this)}get mediaPaused(){return d5(this,dh.MEDIA_PAUSED)}set mediaPaused(a){d6(this,dh.MEDIA_PAUSED,a)}handleClick(){let a=this.mediaPaused?dd.MEDIA_PLAY_REQUEST:dd.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new dM.CustomEvent(a,{composed:!0,bubbles:!0}))}}gx.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dh.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${dh.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${dh.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${dh.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${gu}</slot>
      <slot name="pause">${gv}</slot>
    </slot>
  `},gx.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${dD("Play")}</slot>
    <slot name="tooltip-pause">${dD("Pause")}</slot>
  `},dM.customElements.get("media-play-button")||dM.customElements.define("media-play-button",gx);let gy={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class gz extends dM.HTMLElement{static get observedAttributes(){return[gy.PLACEHOLDER_SRC,gy.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(a,b,c){if(a===gy.SRC&&(null==c?this.image.removeAttribute(gy.SRC):this.image.setAttribute(gy.SRC,c)),a===gy.PLACEHOLDER_SRC)if(null==c)this.image.style.removeProperty("background-image");else{var d;d=this.image,d.style["background-image"]=`url('${c}')`}}get placeholderSrc(){return d7(this,gy.PLACEHOLDER_SRC)}set placeholderSrc(a){d8(this,gy.SRC,a)}get src(){return d7(this,gy.SRC)}set src(a){d8(this,gy.SRC,a)}}gz.shadowRootOptions={mode:"open"},gz.getTemplateHTML=function(a){return`
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
  `},dM.customElements.get("media-poster-image")||dM.customElements.define("media-poster-image",gz);var gA=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};class gB extends fS{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aV,void 0),((a,b,c,d)=>(gA(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aV,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dh.MEDIA_PREVIEW_CHAPTER&&c!==b&&null!=c){var d,e;(gA(this,d=aV,"read from private field"),e?e.call(this):d.get(this)).textContent=c,""!==c?this.setAttribute("aria-valuetext",`chapter: ${c}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return d7(this,dh.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(a){d8(this,dh.MEDIA_PREVIEW_CHAPTER,a)}}aV=new WeakMap,dM.customElements.get("media-preview-chapter-display")||dM.customElements.define("media-preview-chapter-display",gB);var gC=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gD=(a,b,c)=>(gC(a,b,"read from private field"),c?c.call(a):b.get(a)),gE=(a,b,c,d)=>(gC(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class gF extends dM.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aW,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[de.MEDIA_CONTROLLER,dh.MEDIA_PREVIEW_IMAGE,dh.MEDIA_PREVIEW_COORDS]}connectedCallback(){var a,b,c;let d=this.getAttribute(de.MEDIA_CONTROLLER);d&&(gE(this,aW,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=gD(this,aW))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=gD(this,aW))?void 0:a.unassociateElement)||b.call(a,this),gE(this,aW,null)}attributeChangedCallback(a,b,c){var d,e,f,g,h;[dh.MEDIA_PREVIEW_IMAGE,dh.MEDIA_PREVIEW_COORDS].includes(a)&&this.update(),a===de.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=gD(this,aW))?void 0:d.unassociateElement)||e.call(d,this),gE(this,aW,null)),c&&this.isConnected&&(gE(this,aW,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gD(this,aW))?void 0:g.associateElement)||h.call(g,this)))}get mediaPreviewImage(){return d7(this,dh.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){d8(this,dh.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewCoords(){let a=this.getAttribute(dh.MEDIA_PREVIEW_COORDS);if(a)return a.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(a){if(!a)return void this.removeAttribute(dh.MEDIA_PREVIEW_COORDS);this.setAttribute(dh.MEDIA_PREVIEW_COORDS,a.join(" "))}update(){let a=this.mediaPreviewCoords,b=this.mediaPreviewImage;if(!(a&&b))return;let[c,d,e,f]=a,g=b.split("#")[0],{maxWidth:h,maxHeight:i,minWidth:j,minHeight:k}=getComputedStyle(this),l=Math.min(parseInt(h)/e,parseInt(i)/f),m=Math.max(parseInt(j)/e,parseInt(k)/f),n=l<1,o=n?l:m>1?m:1,{style:p}=d1(this.shadowRoot,":host"),q=d1(this.shadowRoot,"img").style,r=this.shadowRoot.querySelector("img"),s=n?"min":"max";p.setProperty(`${s}-width`,"initial","important"),p.setProperty(`${s}-height`,"initial","important"),p.width=`${e*o}px`,p.height=`${f*o}px`;let t=()=>{q.width=`${this.imgWidth*o}px`,q.height=`${this.imgHeight*o}px`,q.display="block"};r.src!==g&&(r.onload=()=>{this.imgWidth=r.naturalWidth,this.imgHeight=r.naturalHeight,t()},r.src=g,t()),t(),q.transform=`translate(-${c*o}px, -${d*o}px)`}}aW=new WeakMap,gF.shadowRootOptions={mode:"open"},gF.getTemplateHTML=function(a){return`
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
  `},dM.customElements.get("media-preview-thumbnail")||dM.customElements.define("media-preview-thumbnail",gF);var gG=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gH=(a,b,c)=>(gG(a,b,"read from private field"),c?c.call(a):b.get(a));class gI extends fS{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aX,void 0),((a,b,c,d)=>(gG(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aX,this.shadowRoot.querySelector("slot")),gH(this,aX).textContent=dA(0)}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_PREVIEW_TIME]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_PREVIEW_TIME&&null!=c&&(gH(this,aX).textContent=dA(parseFloat(c)))}get mediaPreviewTime(){return d3(this,dh.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){d4(this,dh.MEDIA_PREVIEW_TIME,a)}}aX=new WeakMap,dM.customElements.get("media-preview-time-display")||dM.customElements.define("media-preview-time-display",gI);let gJ={SEEK_OFFSET:"seekoffset"};class gK extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_CURRENT_TIME,gJ.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=d3(this,gJ.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===gJ.SEEK_OFFSET&&(this.seekOffset=d3(this,gJ.SEEK_OFFSET,30))}get seekOffset(){return d3(this,gJ.SEEK_OFFSET,30)}set seekOffset(a){d4(this,gJ.SEEK_OFFSET,a),this.setAttribute("aria-label",dD("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),dW(dX(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return d3(this,dh.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){d4(this,dh.MEDIA_CURRENT_TIME,a)}handleClick(){let a=Math.max(this.mediaCurrentTime-this.seekOffset,0),b=new dM.CustomEvent(dd.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}gK.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${c}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},gK.getTooltipContentHTML=function(){return dD("Seek backward")},dM.customElements.get("media-seek-backward-button")||dM.customElements.define("media-seek-backward-button",gK);let gL={SEEK_OFFSET:"seekoffset"};class gM extends fm{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_CURRENT_TIME,gL.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=d3(this,gL.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===gL.SEEK_OFFSET&&(this.seekOffset=d3(this,gL.SEEK_OFFSET,30))}get seekOffset(){return d3(this,gL.SEEK_OFFSET,30)}set seekOffset(a){d4(this,gL.SEEK_OFFSET,a),this.setAttribute("aria-label",dD("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),dW(dX(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return d3(this,dh.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){d4(this,dh.MEDIA_CURRENT_TIME,a)}handleClick(){let a=this.mediaCurrentTime+this.seekOffset,b=new dM.CustomEvent(dd.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}gM.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${c}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},gM.getTooltipContentHTML=function(){return dD("Seek forward")},dM.customElements.get("media-seek-forward-button")||dM.customElements.define("media-seek-forward-button",gM);var gN=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gO=(a,b,c)=>(gN(a,b,"read from private field"),c?c.call(a):b.get(a));let gP={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},gQ=[...Object.values(gP),dh.MEDIA_CURRENT_TIME,dh.MEDIA_DURATION,dh.MEDIA_SEEKABLE],gR=["Enter"," "],gS="&nbsp;/&nbsp;",gT=(a,{timesSep:b=gS}={})=>{var c,d;let e=null!=(c=a.mediaCurrentTime)?c:0,[,f]=null!=(d=a.mediaSeekable)?d:[],g=0;Number.isFinite(a.mediaDuration)?g=a.mediaDuration:Number.isFinite(f)&&(g=f);let h=a.remaining?dA(0-(g-e)):dA(e);return a.showDuration?`${h}${b}${dA(g)}`:h};class gU extends fS{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aY,void 0),((a,b,c,d)=>(gN(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aY,this.shadowRoot.querySelector("slot")),gO(this,aY).innerHTML=`${gT(this)}`}static get observedAttributes(){return[...super.observedAttributes,...gQ,"disabled"]}connectedCallback(){let{style:a}=d1(this.shadowRoot,":host(:hover:not([notoggle]))");a.setProperty("cursor","var(--media-cursor, pointer)"),a.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",dD("playback time"));let b=a=>{let{key:c}=a;if(!gR.includes(c))return void this.removeEventListener("keyup",b);this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{let{metaKey:c,altKey:d,key:e}=a;if(c||d||!gR.includes(e))return void this.removeEventListener("keyup",b);this.addEventListener("keyup",b)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(a,b,c){gQ.includes(a)?this.update():"disabled"===a&&c!==b&&(null==c?this.enable():this.disable()),super.attributeChangedCallback(a,b,c)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return d5(this,gP.REMAINING)}set remaining(a){d6(this,gP.REMAINING,a)}get showDuration(){return d5(this,gP.SHOW_DURATION)}set showDuration(a){d6(this,gP.SHOW_DURATION,a)}get noToggle(){return d5(this,gP.NO_TOGGLE)}set noToggle(a){d6(this,gP.NO_TOGGLE,a)}get mediaDuration(){return d3(this,dh.MEDIA_DURATION)}set mediaDuration(a){d4(this,dh.MEDIA_DURATION,a)}get mediaCurrentTime(){return d3(this,dh.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){d4(this,dh.MEDIA_CURRENT_TIME,a)}get mediaSeekable(){let a=this.getAttribute(dh.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(dh.MEDIA_SEEKABLE);this.setAttribute(dh.MEDIA_SEEKABLE,a.join(":"))}update(){let a=gT(this);(a=>{var b;let c=a.mediaCurrentTime,[,d]=null!=(b=a.mediaSeekable)?b:[],e=null;if(Number.isFinite(a.mediaDuration)?e=a.mediaDuration:Number.isFinite(d)&&(e=d),null==c||null===e)return a.setAttribute("aria-valuetext","video not loaded, unknown time.");let f=a.remaining?dz(0-(e-c)):dz(c);if(!a.showDuration)return a.setAttribute("aria-valuetext",f);let g=dz(e),h=`${f} of ${g}`;a.setAttribute("aria-valuetext",h)})(this),a!==gO(this,aY).innerHTML&&(gO(this,aY).innerHTML=a)}}aY=new WeakMap,gU.getSlotTemplateHTML=function(a,b){return`
    <slot>${gT(b)}</slot>
  `},dM.customElements.get("media-time-display")||dM.customElements.define("media-time-display",gU);var gV=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gW=(a,b,c)=>(gV(a,b,"read from private field"),c?c.call(a):b.get(a)),gX=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gY=(a,b,c,d)=>(gV(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class gZ{constructor(a,b,c){gX(this,aZ,void 0),gX(this,a$,void 0),gX(this,a_,void 0),gX(this,a0,void 0),gX(this,a1,void 0),gX(this,a2,void 0),gX(this,a3,void 0),gX(this,a4,void 0),gX(this,a5,0),gX(this,a6,(a=performance.now())=>{gY(this,a5,requestAnimationFrame(gW(this,a6))),gY(this,a0,performance.now()-gW(this,a_));let b=1e3/this.fps;if(gW(this,a0)>b){gY(this,a_,a-gW(this,a0)%b);let c=1e3/((a-gW(this,a$))/++((a,b,c,d)=>({set _(value){gY(a,b,value,c)},get _(){return gW(a,b,d)}}))(this,a1)._),d=(a-gW(this,a2))/1e3/this.duration,e=gW(this,a3)+d*this.playbackRate;e-gW(this,aZ).valueAsNumber>0?gY(this,a4,this.playbackRate/this.duration/c):(gY(this,a4,.995*gW(this,a4)),e=gW(this,aZ).valueAsNumber+gW(this,a4)),this.callback(e)}}),gY(this,aZ,a),this.callback=b,this.fps=c}start(){0===gW(this,a5)&&(gY(this,a_,performance.now()),gY(this,a$,gW(this,a_)),gY(this,a1,0),gW(this,a6).call(this))}stop(){0!==gW(this,a5)&&(cancelAnimationFrame(gW(this,a5)),gY(this,a5,0))}update({start:a,duration:b,playbackRate:c}){let d=a-gW(this,aZ).valueAsNumber,e=Math.abs(b-this.duration);(d>0||d<-.03||e>=.5)&&this.callback(a),gY(this,a3,a),gY(this,a2,performance.now()),this.duration=b,this.playbackRate=c}}aZ=new WeakMap,a$=new WeakMap,a_=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakMap,a5=new WeakMap,a6=new WeakMap;var g$=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},g_=(a,b,c)=>(g$(a,b,"read from private field"),c?c.call(a):b.get(a)),g0=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},g1=(a,b,c,d)=>(g$(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),g2=(a,b,c)=>(g$(a,b,"access private method"),c);let g3=(a,b=a.mediaCurrentTime)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:Math.max(0,Math.min((b-c)/(d-c),1))},g4=(a,b=a.range.valueAsNumber)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:b*(d-c)+c};class g5 extends fK{constructor(){super(),g0(this,bg),g0(this,bi),g0(this,bl),g0(this,bn),g0(this,bp),g0(this,br),g0(this,bt),g0(this,bv),g0(this,a7,void 0),g0(this,a8,void 0),g0(this,a9,void 0),g0(this,ba,void 0),g0(this,bb,void 0),g0(this,bc,void 0),g0(this,bd,void 0),g0(this,be,void 0),g0(this,bf,void 0),g0(this,bk,a=>{this.dragging||(dv(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),g1(this,a9,this.shadowRoot.querySelectorAll('[part~="box"]')),g1(this,bb,this.shadowRoot.querySelector('[part~="preview-box"]')),g1(this,bc,this.shadowRoot.querySelector('[part~="current-box"]'));let a=getComputedStyle(this);g1(this,bd,parseInt(a.getPropertyValue("--media-box-padding-left"))),g1(this,be,parseInt(a.getPropertyValue("--media-box-padding-right"))),g1(this,a8,new gZ(this.range,g_(this,bk),60))}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_PAUSED,dh.MEDIA_DURATION,dh.MEDIA_SEEKABLE,dh.MEDIA_CURRENT_TIME,dh.MEDIA_PREVIEW_IMAGE,dh.MEDIA_PREVIEW_TIME,dh.MEDIA_PREVIEW_CHAPTER,dh.MEDIA_BUFFERED,dh.MEDIA_PLAYBACK_RATE,dh.MEDIA_LOADING,dh.MEDIA_ENDED]}connectedCallback(){var a;super.connectedCallback(),this.range.setAttribute("aria-label",dD("seek")),g2(this,bg,bh).call(this),g1(this,a7,this.getRootNode()),null==(a=g_(this,a7))||a.addEventListener("transitionstart",this)}disconnectedCallback(){var a;super.disconnectedCallback(),g2(this,bg,bh).call(this),null==(a=g_(this,a7))||a.removeEventListener("transitionstart",this),g1(this,a7,null)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),b!=c&&(a===dh.MEDIA_CURRENT_TIME||a===dh.MEDIA_PAUSED||a===dh.MEDIA_ENDED||a===dh.MEDIA_LOADING||a===dh.MEDIA_DURATION||a===dh.MEDIA_SEEKABLE?(g_(this,a8).update({start:g3(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),g2(this,bg,bh).call(this),(a=>{let b=a.range,c=dz(+g4(a)),d=dz(+a.mediaSeekableEnd),e=c&&d?`${c} of ${d}`:"video not loaded, unknown time.";b.setAttribute("aria-valuetext",e)})(this)):a===dh.MEDIA_BUFFERED&&this.updateBufferedBar(),(a===dh.MEDIA_DURATION||a===dh.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=g_(this,bf),this.updateBar()))}get mediaChaptersCues(){return g_(this,bf)}set mediaChaptersCues(a){var b;g1(this,bf,a),this.updateSegments(null==(b=g_(this,bf))?void 0:b.map(a=>({start:g3(this,a.startTime),end:g3(this,a.endTime)})))}get mediaPaused(){return d5(this,dh.MEDIA_PAUSED)}set mediaPaused(a){d6(this,dh.MEDIA_PAUSED,a)}get mediaLoading(){return d5(this,dh.MEDIA_LOADING)}set mediaLoading(a){d6(this,dh.MEDIA_LOADING,a)}get mediaDuration(){return d3(this,dh.MEDIA_DURATION)}set mediaDuration(a){d4(this,dh.MEDIA_DURATION,a)}get mediaCurrentTime(){return d3(this,dh.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){d4(this,dh.MEDIA_CURRENT_TIME,a)}get mediaPlaybackRate(){return d3(this,dh.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d4(this,dh.MEDIA_PLAYBACK_RATE,a)}get mediaBuffered(){let a=this.getAttribute(dh.MEDIA_BUFFERED);return a?a.split(" ").map(a=>a.split(":").map(a=>+a)):[]}set mediaBuffered(a){if(!a)return void this.removeAttribute(dh.MEDIA_BUFFERED);let b=a.map(a=>a.join(":")).join(" ");this.setAttribute(dh.MEDIA_BUFFERED,b)}get mediaSeekable(){let a=this.getAttribute(dh.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(dh.MEDIA_SEEKABLE);this.setAttribute(dh.MEDIA_SEEKABLE,a.join(":"))}get mediaSeekableEnd(){var a;let[,b=this.mediaDuration]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaSeekableStart(){var a;let[b=0]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaPreviewImage(){return d7(this,dh.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){d8(this,dh.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewTime(){return d3(this,dh.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){d4(this,dh.MEDIA_PREVIEW_TIME,a)}get mediaEnded(){return d5(this,dh.MEDIA_ENDED)}set mediaEnded(a){d6(this,dh.MEDIA_ENDED,a)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var a;let b,c=this.mediaBuffered;if(!c.length)return;if(this.mediaEnded)b=1;else{let d=this.mediaCurrentTime,[,e=this.mediaSeekableStart]=null!=(a=c.find(([a,b])=>a<=d&&d<=b))?a:[];b=g3(this,e)}let{style:d}=d1(this.shadowRoot,"#buffered");d.setProperty("width",`${100*b}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let a=d1(this.shadowRoot,"#current-rail"),b=d1(this.shadowRoot,'[part~="current-box"]'),c=g2(this,bl,bm).call(this,g_(this,bc)),d=g2(this,bn,bo).call(this,c,this.range.valueAsNumber),e=g2(this,bp,bq).call(this,c,this.range.valueAsNumber);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${c.range.width}`),b.style.setProperty("--_box-shift",`${e}`),b.style.setProperty("--_box-width",`${c.box.width}px`),b.style.setProperty("visibility","initial")}handleEvent(a){switch(super.handleEvent(a),a.type){case"input":g2(this,bv,bw).call(this);break;case"pointermove":g2(this,br,bs).call(this,a);break;case"pointerup":case"pointerleave":g2(this,bt,bu).call(this,null);break;case"transitionstart":dY(a.target,this)&&setTimeout(()=>g2(this,bg,bh).call(this),0)}}}a7=new WeakMap,a8=new WeakMap,a9=new WeakMap,ba=new WeakMap,bb=new WeakMap,bc=new WeakMap,bd=new WeakMap,be=new WeakMap,bf=new WeakMap,bg=new WeakSet,bh=function(){g2(this,bi,bj).call(this)?g_(this,a8).start():g_(this,a8).stop()},bi=new WeakSet,bj=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&d0(this)},bk=new WeakMap,bl=new WeakSet,bm=function(a){var b;let c=(null!=(b=this.getAttribute("bounds")?dZ(this,`#${this.getAttribute("bounds")}`):this.parentElement)?b:this).getBoundingClientRect(),d=this.range.getBoundingClientRect(),e=a.offsetWidth,f=-(d.left-c.left-e/2),g=c.right-d.left-e/2;return{box:{width:e,min:f,max:g},bounds:c,range:d}},bn=new WeakSet,bo=function(a,b){let c=`${100*b}%`,{width:d,min:e,max:f}=a.box;if(!d)return c;if(!Number.isNaN(e)){let a=`calc(1 / var(--_range-width) * 100 * ${e}% + var(--media-box-padding-left))`;c=`max(${a}, ${c})`}if(!Number.isNaN(f)){let a=`calc(1 / var(--_range-width) * 100 * ${f}% - var(--media-box-padding-right))`;c=`min(${c}, ${a})`}return c},bp=new WeakSet,bq=function(a,b){let{width:c,min:d,max:e}=a.box,f=b*a.range.width;if(f<d+g_(this,bd)){let b=a.range.left-a.bounds.left-g_(this,bd);return`${f-c/2+b}px`}if(f>e-g_(this,be)){let b=a.bounds.right-a.range.right-g_(this,be);return`${f+c/2-b-a.range.width}px`}return 0},br=new WeakSet,bs=function(a){let b=[...g_(this,a9)].some(b=>a.composedPath().includes(b));if(!this.dragging&&(b||!a.composedPath().includes(this)))return void g2(this,bt,bu).call(this,null);let c=this.mediaSeekableEnd;if(!c)return;let d=d1(this.shadowRoot,"#preview-rail"),e=d1(this.shadowRoot,'[part~="preview-box"]'),f=g2(this,bl,bm).call(this,g_(this,bb)),g=(a.clientX-f.range.left)/f.range.width;g=Math.max(0,Math.min(1,g));let h=g2(this,bn,bo).call(this,f,g),i=g2(this,bp,bq).call(this,f,g);d.style.transform=`translateX(${h})`,d.style.setProperty("--_range-width",`${f.range.width}`),e.style.setProperty("--_box-shift",`${i}`),e.style.setProperty("--_box-width",`${f.box.width}px`),1>Math.abs(Math.round(g_(this,ba))-Math.round(g*c))&&g>.01&&g<.99||(g1(this,ba,g*c),g2(this,bt,bu).call(this,g_(this,ba)))},bt=new WeakSet,bu=function(a){this.dispatchEvent(new dM.CustomEvent(dd.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:a}))},bv=new WeakSet,bw=function(){g_(this,a8).stop();let a=g4(this);this.dispatchEvent(new dM.CustomEvent(dd.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a}))},g5.shadowRootOptions={mode:"open"},g5.getTemplateHTML=function(a){return`
    ${fK.getTemplateHTML(a)}
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

      :host(:is([${dh.MEDIA_PREVIEW_IMAGE}], [${dh.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${dh.MEDIA_PREVIEW_IMAGE}], [${dh.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
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

      :host([${dh.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${dh.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${dh.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${dh.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${dh.MEDIA_PREVIEW_TIME}]:hover) {
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

      :host([${dh.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${dh.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${dh.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${dh.MEDIA_PREVIEW_CHAPTER}]) {
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

      :host([${dh.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${dh.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${dh.MEDIA_PREVIEW_TIME}]:hover) {
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
          <template shadowrootmode="${gF.shadowRootOptions.mode}">
            ${gF.getTemplateHTML({})}
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
  `},dM.customElements.get("media-time-range")||dM.customElements.define("media-time-range",g5);class g6 extends fK{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_VOLUME,dh.MEDIA_MUTED,dh.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let a=this.range.value,b=new dM.CustomEvent(dd.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",dD("volume"))}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dh.MEDIA_VOLUME||a===dh.MEDIA_MUTED){let a;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(a=this.range.valueAsNumber,`${Math.round(100*a)}%`)),this.updateBar()}}get mediaVolume(){return d3(this,dh.MEDIA_VOLUME,1)}set mediaVolume(a){d4(this,dh.MEDIA_VOLUME,a)}get mediaMuted(){return d5(this,dh.MEDIA_MUTED)}set mediaMuted(a){d6(this,dh.MEDIA_MUTED,a)}get mediaVolumeUnavailable(){return d7(this,dh.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(a){d8(this,dh.MEDIA_VOLUME_UNAVAILABLE,a)}}dM.customElements.get("media-volume-range")||dM.customElements.define("media-volume-range",g6);var g7=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},g8=(a,b,c)=>(g7(a,b,"read from private field"),c?c.call(a):b.get(a)),g9=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ha=(a,b,c,d)=>(g7(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let hb={processCallback(a,b,c){if(c){for(let[a,d]of b)if(a in c){let b=c[a];"boolean"==typeof b&&d instanceof hj&&"boolean"==typeof d.element[d.attributeName]?d.booleanValue=b:"function"==typeof b&&d instanceof hj?d.element[d.attributeName]=b:d.value=b}}}};class hc extends dM.DocumentFragment{constructor(a,b,c=hb){var d;super(),g9(this,bx,void 0),g9(this,by,void 0),this.append(a.content.cloneNode(!0)),ha(this,bx,hd(this)),ha(this,by,c),null==(d=c.createCallback)||d.call(c,this,g8(this,bx),b),c.processCallback(this,g8(this,bx),b)}update(a){g8(this,by).processCallback(this,g8(this,bx),a)}}bx=new WeakMap,by=new WeakMap;let hd=(a,b=[])=>{let c,d;for(let e of a.attributes||[])if(e.value.includes("{{")){let f=new hi;for([c,d]of hf(e.value))if(c){let c=new hj(a,e.name,e.namespaceURI);f.append(c),b.push([d,c])}else f.append(d);e.value=f.toString()}for(let e of a.childNodes)if(1!==e.nodeType||e instanceof HTMLTemplateElement){let f=e.data;if(1===e.nodeType||f.includes("{{")){let g=[];if(f)for([c,d]of hf(f))if(c){let c=new hk(a);g.push(c),b.push([d,c])}else g.push(new Text(d));else if(e instanceof HTMLTemplateElement){let c=new hl(a,e);g.push(c),b.push([c.expression,c])}e.replaceWith(...g.flatMap(a=>a.replacementNodes||[a]))}}else hd(e,b);return b},he={},hf=a=>{let b="",c=0,d=he[a],e=0,f;if(d)return d;for(d=[];f=a[e];e++)"{"===f&&"{"===a[e+1]&&"\\"!==a[e-1]&&a[e+2]&&1==++c?(b&&d.push([0,b]),b="",e++):"}"!==f||"}"!==a[e+1]||"\\"===a[e-1]||--c?b+=f||"":(d.push([1,b.trim()]),b="",e++);return b&&d.push([0,(c>0?"{{":"")+b]),he[a]=d};class hg{get value(){return""}set value(a){}toString(){return this.value}}let hh=new WeakMap;class hi{constructor(){g9(this,bz,[])}[Symbol.iterator](){return g8(this,bz).values()}get length(){return g8(this,bz).length}item(a){return g8(this,bz)[a]}append(...a){for(let b of a)b instanceof hj&&hh.set(b,this),g8(this,bz).push(b)}toString(){return g8(this,bz).join("")}}bz=new WeakMap;class hj extends hg{constructor(a,b,c){super(),g9(this,bE),g9(this,bA,""),g9(this,bB,void 0),g9(this,bC,void 0),g9(this,bD,void 0),ha(this,bB,a),ha(this,bC,b),ha(this,bD,c)}get attributeName(){return g8(this,bC)}get attributeNamespace(){return g8(this,bD)}get element(){return g8(this,bB)}get value(){return g8(this,bA)}set value(a){g8(this,bA)!==a&&(ha(this,bA,a),g8(this,bE,bF)&&1!==g8(this,bE,bF).length?g8(this,bB).setAttributeNS(g8(this,bD),g8(this,bC),g8(this,bE,bF).toString()):null==a?g8(this,bB).removeAttributeNS(g8(this,bD),g8(this,bC)):g8(this,bB).setAttributeNS(g8(this,bD),g8(this,bC),a))}get booleanValue(){return g8(this,bB).hasAttributeNS(g8(this,bD),g8(this,bC))}set booleanValue(a){if(g8(this,bE,bF)&&1!==g8(this,bE,bF).length)throw new DOMException("Value is not fully templatized");this.value=a?"":null}}bA=new WeakMap,bB=new WeakMap,bC=new WeakMap,bD=new WeakMap,bE=new WeakSet,bF=function(){return hh.get(this)};class hk extends hg{constructor(a,b){super(),g9(this,bG,void 0),g9(this,bH,void 0),ha(this,bG,a),ha(this,bH,b?[...b]:[new Text])}get replacementNodes(){return g8(this,bH)}get parentNode(){return g8(this,bG)}get nextSibling(){return g8(this,bH)[g8(this,bH).length-1].nextSibling}get previousSibling(){return g8(this,bH)[0].previousSibling}get value(){return g8(this,bH).map(a=>a.textContent).join("")}set value(a){this.replace(a)}replace(...a){let b=a.flat().flatMap(a=>null==a?[new Text]:a.forEach?[...a]:11===a.nodeType?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);b.length||b.push(new Text),ha(this,bH,function(a,b,c,d=null){let e=0,f,g,h,i=c.length,j=b.length;for(;e<i&&e<j&&b[e]==c[e];)e++;for(;e<i&&e<j&&c[i-1]==b[j-1];)d=c[--j,--i];if(e==j)for(;e<i;)a.insertBefore(c[e++],d);if(e==i)for(;e<j;)a.removeChild(b[e++]);else{for(f=b[e];e<i;)h=c[e++],g=f?f.nextSibling:d,f==h?f=g:e<i&&c[e]==g?(a.replaceChild(h,f),f=g):a.insertBefore(h,f);for(;f!=d;)g=f.nextSibling,a.removeChild(f),f=g}return c}(g8(this,bH)[0].parentNode,g8(this,bH),b,this.nextSibling))}}bG=new WeakMap,bH=new WeakMap;class hl extends hk{constructor(a,b){let c=b.getAttribute("directive")||b.getAttribute("type"),d=b.getAttribute("expression")||b.getAttribute(c)||"";d.startsWith("{{")&&(d=d.trim().slice(2,-2).trim()),super(a),this.expression=d,this.template=b,this.directive=c}}let hm={string:a=>String(a)};class hn{constructor(a){this.template=a,this.state=void 0}}let ho=new WeakMap,hp=new WeakMap,hq={partial:(a,b)=>{b[a.expression]=new hn(a.template)},if:(a,b)=>{var c;if(hu(a.expression,b))if(ho.get(a)!==a.template){ho.set(a,a.template);let c=new hc(a.template,b,hs);a.replace(c),hp.set(a,c)}else null==(c=hp.get(a))||c.update(b);else a.replace(""),ho.delete(a),hp.delete(a)}},hr=Object.keys(hq),hs={processCallback(a,b,c){var d,e;if(c)for(let[a,f]of b){if(f instanceof hl){if(!f.directive){let a=hr.find(a=>f.template.hasAttribute(a));a&&(f.directive=a,f.expression=f.template.getAttribute(a))}null==(d=hq[f.directive])||d.call(hq,f,c);continue}let b=hu(a,c);if(b instanceof hn){ho.get(f)!==b.template?(ho.set(f,b.template),f.value=b=new hc(b.template,b.state,hs),hp.set(f,b)):null==(e=hp.get(f))||e.update(b.state);continue}b?(f instanceof hj&&f.attributeName.startsWith("aria-")&&(b=String(b)),f instanceof hj?"boolean"==typeof b?f.booleanValue=b:"function"==typeof b?f.element[f.attributeName]=b:f.value=b:(f.value=b,ho.delete(f),hp.delete(f))):f instanceof hj?f.value=void 0:(f.value=void 0,ho.delete(f),hp.delete(f))}}},ht={"!":a=>!a,"!!":a=>!!a,"==":(a,b)=>a==b,"!=":(a,b)=>a!=b,">":(a,b)=>a>b,">=":(a,b)=>a>=b,"<":(a,b)=>a<b,"<=":(a,b)=>a<=b,"??":(a,b)=>null!=a?a:b,"|":(a,b)=>{var c;return null==(c=hm[b])?void 0:c.call(hm,a)}};function hu(a,b={}){var c,d,e,f,g,h,i;let j=(function(a,b){let c,d,e,f=[];for(;a;){for(let f in e=null,c=a.length,b)(d=b[f].exec(a))&&d.index<c&&(e={token:d[0],type:f,matches:d.slice(1)},c=d.index);c&&f.push({token:a.substr(0,c),type:void 0}),e&&f.push(e),a=a.substr(c+(e?e.token.length:0))}return f})(a,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:a})=>"ws"!==a);if(0===j.length||j.some(({type:a})=>!a))return hv(a);if((null==(c=j[0])?void 0:c.token)===">"){let c=b[null==(d=j[1])?void 0:d.token];if(!c)return hv(a);let h={...b};c.state=h;let i=j.slice(2);for(let a=0;a<i.length;a+=3){let c=null==(e=i[a])?void 0:e.token,d=null==(f=i[a+1])?void 0:f.token,j=null==(g=i[a+2])?void 0:g.token;c&&"="===d&&(h[c]=hx(j,b))}return c}if(1===j.length)return hw(j[0])?hx(j[0].token,b):hv(a);if(2===j.length){let c=ht[null==(h=j[0])?void 0:h.token];return c&&hw(j[1])?c(hx(j[1].token,b)):hv(a)}if(3===j.length){let c=null==(i=j[1])?void 0:i.token,d=ht[c];if(!d||!hw(j[0])||!hw(j[2]))return hv(a);let e=hx(j[0].token,b);return d(e,"|"===c?j[2].token:hx(j[2].token,b))}}function hv(a){return console.warn(`Warning: invalid expression \`${a}\``),!1}function hw({type:a}){return["number","boolean","string","param"].includes(a)}function hx(a,b){let c=a[0],d=a.slice(-1);return"true"===a||"false"===a?"true"===a:c===d&&["'",'"'].includes(c)?a.slice(1,-1):dw(a)?parseFloat(a):b[a]}var hy=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hz=(a,b,c)=>(hy(a,b,"read from private field"),c?c.call(a):b.get(a)),hA=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hB=(a,b,c,d)=>(hy(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hC=(a,b,c)=>(hy(a,b,"access private method"),c);let hD={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},hE=dN.createElement("template");hE.innerHTML=`
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
`;class hF extends dM.HTMLElement{constructor(){super(),hA(this,bL),hA(this,bN),hA(this,bI,void 0),hA(this,bJ,void 0),hA(this,bK,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let a=new MutationObserver(a=>{var b;(!this.mediaController||(null==(b=this.mediaController)?void 0:b.breakpointsComputed))&&a.some(a=>{let b=a.target;return b===this||"media-controller"===b.localName&&!!(hD[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});a.observe(this,{attributes:!0}),a.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(di.BREAKPOINTS_COMPUTED,this.render),hC(this,bL,bM).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var a;return null!=(a=hz(this,bI))?a:this.constructor.template}set template(a){hB(this,bK,null),hB(this,bI,a),this.createRenderer()}get props(){var a,b,c;let d=[...Array.from(null!=(b=null==(a=this.mediaController)?void 0:a.attributes)?b:[]).filter(({name:a})=>hD[a]||a.startsWith("breakpoint")),...Array.from(this.attributes)],e={};for(let a of d){let b=null!=(c=hD[a.name])?c:a.name.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()),{value:d}=a;null!=d?(dw(d)&&(d=parseFloat(d)),e[b]=""===d||d):e[b]=!1}return e}attributeChangedCallback(a,b,c){"template"===a&&b!=c&&hC(this,bN,bO).call(this)}connectedCallback(){hC(this,bN,bO).call(this)}createRenderer(){this.template&&this.template!==hz(this,bJ)&&(hB(this,bJ,this.template),this.renderer=new hc(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(hE.content.cloneNode(!0),this.renderer))}render(){var a;null==(a=this.renderer)||a.update(this.props)}}async function hG(a){let b=await fetch(a);if(200!==b.status)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);return b.text()}function hH(a){return a.split("-")[0]}bI=new WeakMap,bJ=new WeakMap,bK=new WeakMap,bL=new WeakSet,bM=function(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}},bN=new WeakSet,bO=function(){var a;let b=this.getAttribute("template");if(!b||b===hz(this,bK))return;let c=this.getRootNode(),d=null==(a=null==c?void 0:c.getElementById)?void 0:a.call(c,b);if(d){hB(this,bK,b),hB(this,bI,d),this.createRenderer();return}(function(a){if(!/^(\/|\.\/|https?:\/\/)/.test(a))return!1;let b=/^https?:\/\//.test(a)?void 0:location.origin;try{new URL(a,b)}catch(a){return!1}return!0})(b)&&(hB(this,bK,b),hG(b).then(a=>{let b=dN.createElement("template");b.innerHTML=a,hB(this,bI,b),this.createRenderer()}).catch(console.error))},hF.observedAttributes=["template"],hF.processor=hs,dM.customElements.get("media-theme")||dM.customElements.define("media-theme",hF);class hI extends Event{constructor({action:a="auto",relatedTarget:b,...c}){super("invoke",c),this.action=a,this.relatedTarget=b}}class hJ extends Event{constructor({newState:a,oldState:b,...c}){super("toggle",c),this.newState=a,this.oldState=b}}var hK=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hL=(a,b,c)=>(hK(a,b,"read from private field"),c?c.call(a):b.get(a)),hM=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hN=(a,b,c,d)=>(hK(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hO=(a,b,c)=>(hK(a,b,"access private method"),c);function hP({type:a,text:b,value:c,checked:d}){let e=dN.createElement("media-chrome-menu-item");e.type=null!=a?a:"",e.part.add("menu-item"),a&&e.part.add(a),e.value=c,e.checked=d;let f=dN.createElement("span");return f.textContent=b,e.append(f),e}function hQ(a,b){let c=a.querySelector(`:scope > [slot="${b}"]`);if((null==c?void 0:c.nodeName)=="SLOT"&&(c=c.assignedElements({flatten:!0})[0]),c)return c.cloneNode(!0);let d=a.shadowRoot.querySelector(`[name="${b}"] > svg`);return d?d.cloneNode(!0):""}let hR={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class hS extends dM.HTMLElement{constructor(){if(super(),hM(this,bW),hM(this,bZ),hM(this,b_),hM(this,b1),hM(this,b3),hM(this,b7),hM(this,b9),hM(this,cb),hM(this,cd),hM(this,cf),hM(this,ch),hM(this,cj),hM(this,cl),hM(this,cn),hM(this,cp),hM(this,cr),hM(this,ct),hM(this,bP,null),hM(this,bQ,null),hM(this,bR,null),hM(this,bS,new Set),hM(this,bT,void 0),hM(this,bU,!1),hM(this,bV,null),hM(this,bY,()=>{let a=hL(this,bS),b=new Set(this.items);for(let c of a)b.has(c)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:c}));for(let c of b)a.has(c)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:c}));hN(this,bS,b)}),hM(this,b5,()=>{hO(this,b7,b8).call(this),hO(this,b9,ca).call(this,!1)}),hM(this,b6,()=>{hO(this,b7,b8).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),hN(this,bT,new MutationObserver(hL(this,bY))),hL(this,bT).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[hR.DISABLED,hR.HIDDEN,hR.STYLE,hR.ANCHOR,de.MEDIA_CONTROLLER]}static formatMenuItemText(a,b){return a}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(a){switch(a.type){case"slotchange":hO(this,bW,bX).call(this,a);break;case"invoke":hO(this,b_,b0).call(this,a);break;case"click":hO(this,cb,cc).call(this,a);break;case"toggle":hO(this,cf,cg).call(this,a);break;case"focusout":hO(this,cj,ck).call(this,a);break;case"keydown":hO(this,cl,cm).call(this,a)}}connectedCallback(){var a,b;hN(this,bV,d2(this.shadowRoot,":host")),hO(this,bZ,b$).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),hN(this,bP,dV(this)),null==(b=null==(a=hL(this,bP))?void 0:a.associateElement)||b.call(a,this),this.hidden||(dR(hU(this),hL(this,b5)),dR(this,hL(this,b6)))}disconnectedCallback(){var a,b;dS(hU(this),hL(this,b5)),dS(this,hL(this,b6)),this.disable(),null==(b=null==(a=hL(this,bP))?void 0:a.unassociateElement)||b.call(a,this),hN(this,bP,null)}attributeChangedCallback(a,b,c){var d,e,f,g;a===hR.HIDDEN&&c!==b?(hL(this,bU)||hN(this,bU,!0),this.hidden?hO(this,b3,b4).call(this):hO(this,b1,b2).call(this),this.dispatchEvent(new hJ({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):a===de.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=hL(this,bP))?void 0:d.unassociateElement)||e.call(d,this),hN(this,bP,null)),c&&this.isConnected&&(hN(this,bP,dV(this)),null==(g=null==(f=hL(this,bP))?void 0:f.associateElement)||g.call(f,this))):a===hR.DISABLED&&c!==b?null==c?this.enable():this.disable():a===hR.STYLE&&c!==b&&hO(this,bZ,b$).call(this)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}get anchor(){return this.getAttribute("anchor")}set anchor(a){this.setAttribute("anchor",`${a}`)}get anchorElement(){var a;return this.anchor?null==(a=d_(this))?void 0:a.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(hT)}get radioGroupItems(){return this.items.filter(a=>"menuitemradio"===a.role)}get checkedItems(){return this.items.filter(a=>a.checked)}get value(){var a,b;return null!=(b=null==(a=this.checkedItems[0])?void 0:a.value)?b:""}set value(a){let b=this.items.find(b=>b.value===a);b&&hO(this,ct,cu).call(this,b)}focus(){if(hN(this,bQ,d$()),this.items.length){hO(this,cr,cs).call(this,this.items[0]),this.items[0].focus();return}let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}handleSelect(a){var b;let c=hO(this,cn,co).call(this,a);c&&(hO(this,ct,cu).call(this,c,"checkbox"===c.type),hL(this,bR)&&!this.hidden&&(null==(b=hL(this,bQ))||b.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(a){var b,c;let{key:d}=a,e=this.items,f=null!=(c=null!=(b=hO(this,cn,co).call(this,a))?b:hO(this,cp,cq).call(this))?c:e[0],g=Math.max(0,e.indexOf(f));"ArrowDown"===d?g++:"ArrowUp"===d?g--:"Home"===a.key?g=0:"End"===a.key&&(g=e.length-1),g<0&&(g=e.length-1),g>e.length-1&&(g=0),hO(this,cr,cs).call(this,e[g]),e[g].focus()}}function hT(a){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==a?void 0:a.role)}function hU(a){var b;return null!=(b=a.getAttribute("bounds")?dZ(a,`#${a.getAttribute("bounds")}`):dU(a)||a.parentElement)?b:a}bP=new WeakMap,bQ=new WeakMap,bR=new WeakMap,bS=new WeakMap,bT=new WeakMap,bU=new WeakMap,bV=new WeakMap,bW=new WeakSet,bX=function(a){let b=a.target;for(let a of b.assignedNodes({flatten:!0}))3===a.nodeType&&""===a.textContent.trim()&&a.remove();["header","title"].includes(b.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===b.assignedNodes().length),b.name||hL(this,bY).call(this)},bY=new WeakMap,bZ=new WeakSet,b$=function(){var a;let b=this.shadowRoot.querySelector("#layout-row"),c=null==(a=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:a.trim();b.setAttribute("media","row"===c?"":"width:0")},b_=new WeakSet,b0=function(a){hN(this,bR,a.relatedTarget),dY(this,a.relatedTarget)||(this.hidden=!this.hidden)},b1=new WeakSet,b2=function(){var a;null==(a=hL(this,bR))||a.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),dR(hU(this),hL(this,b5)),dR(this,hL(this,b6))},b3=new WeakSet,b4=function(){var a;null==(a=hL(this,bR))||a.setAttribute("aria-expanded","false"),dS(hU(this),hL(this,b5)),dS(this,hL(this,b6))},b5=new WeakMap,b6=new WeakMap,b7=new WeakSet,b8=function(a){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:b,y:c}=function({anchor:a,floating:b,placement:c}){let{x:d,y:e}=function({anchor:a,floating:b},c){let d,e="x"==(["top","bottom"].includes(hH(c))?"y":"x")?"y":"x",f="y"===e?"height":"width",g=hH(c),h=a.x+a.width/2-b.width/2,i=a.y+a.height/2-b.height/2,j=a[f]/2-b[f]/2;switch(g){case"top":d={x:h,y:a.y-b.height};break;case"bottom":d={x:h,y:a.y+a.height};break;case"right":d={x:a.x+a.width,y:i};break;case"left":d={x:a.x-b.width,y:i};break;default:d={x:a.x,y:a.y}}switch(c.split("-")[1]){case"start":d[e]-=j;break;case"end":d[e]+=j}return d}(function({anchor:a,floating:b}){return{anchor:function(a,b){var c;let d=a.getBoundingClientRect(),e=null!=(c=null==b?void 0:b.getBoundingClientRect())?c:{x:0,y:0};return{x:d.x-e.x,y:d.y-e.y,width:d.width,height:d.height}}(a,b.offsetParent),floating:{x:0,y:0,width:b.offsetWidth,height:b.offsetHeight}}}({anchor:a,floating:b}),c);return{x:d,y:e}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=a||(a=this.offsetWidth);let d=hU(this).getBoundingClientRect(),e=d.width-b-a,f=d.height-c-this.offsetHeight,{style:g}=hL(this,bV);g.setProperty("position","absolute"),g.setProperty("right",`${Math.max(0,e)}px`),g.setProperty("--_menu-bottom",`${f}px`);let h=getComputedStyle(this),i=g.getPropertyValue("--_menu-bottom")===h.bottom?f:parseFloat(h.bottom),j=d.height-i-parseFloat(h.marginBottom);this.style.setProperty("--_menu-max-height",`${j}px`)},b9=new WeakSet,ca=function(a){let b=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),c=null==b?void 0:b.querySelector('[role="menu"]'),{style:d}=hL(this,bV);if(a||d.setProperty("--media-menu-transition-in","none"),c){let a=c.offsetHeight,d=Math.max(c.offsetWidth,b.offsetWidth);this.style.setProperty("min-width",`${d}px`),this.style.setProperty("min-height",`${a}px`),hO(this,b7,b8).call(this,d)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),hO(this,b7,b8).call(this);d.removeProperty("--media-menu-transition-in")},cb=new WeakSet,cc=function(a){var b;if(a.stopPropagation(),a.composedPath().includes(hL(this,cd,ce))){null==(b=hL(this,bQ))||b.focus(),this.hidden=!0;return}let c=hO(this,cn,co).call(this,a);!c||c.hasAttribute("disabled")||(hO(this,cr,cs).call(this,c),this.handleSelect(a))},cd=new WeakSet,ce=function(){var a;return null==(a=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:a.find(a=>a.matches('button[part~="back"]'))},cf=new WeakSet,cg=function(a){if(a.target===this)return;hO(this,ch,ci).call(this);let b=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let c of b)c.invokeTargetElement!=a.target&&("open"!=a.newState||"true"!=c.getAttribute("aria-expanded")||c.invokeTargetElement.hidden||c.invokeTargetElement.dispatchEvent(new hI({relatedTarget:c})));for(let a of b)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);hO(this,b9,ca).call(this,!0)},ch=new WeakSet,ci=function(){let a=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!a)},cj=new WeakSet,ck=function(a){var b;dY(this,a.relatedTarget)||(hL(this,bU)&&(null==(b=hL(this,bQ))||b.focus()),hL(this,bR)&&hL(this,bR)!==a.relatedTarget&&!this.hidden&&(this.hidden=!0))},cl=new WeakSet,cm=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;if(!h&&!i&&!j&&this.keysUsed.includes(g))if(a.preventDefault(),a.stopPropagation(),"Tab"===g){if(hL(this,bU)){this.hidden=!0;return}a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()}else"Escape"===g?(null==(f=hL(this,bQ))||f.focus(),hL(this,bU)&&(this.hidden=!0)):"Enter"===g||" "===g?this.handleSelect(a):this.handleMove(a)},cn=new WeakSet,co=function(a){return a.composedPath().find(a=>["menuitemradio","menuitemcheckbox"].includes(a.role))},cp=new WeakSet,cq=function(){return this.items.find(a=>0===a.tabIndex)},cr=new WeakSet,cs=function(a){for(let b of this.items)b.tabIndex=b===a?0:-1},ct=new WeakSet,cu=function(a,b){let c=[...this.checkedItems];"radio"===a.type&&this.radioGroupItems.forEach(a=>a.checked=!1),b?a.checked=!a.checked:a.checked=!0,this.checkedItems.some((a,b)=>a!=c[b])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},hS.shadowRootOptions={mode:"open"},hS.getTemplateHTML=function(a){return`
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
        display: var(--media-menu-display, inline-flex);
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
    <div id="container">
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
  `},dM.customElements.get("media-chrome-menu")||dM.customElements.define("media-chrome-menu",hS);var hV=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hW=(a,b,c)=>(hV(a,b,"read from private field"),c?c.call(a):b.get(a)),hX=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hY=(a,b,c,d)=>(hV(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hZ=(a,b,c)=>(hV(a,b,"access private method"),c);let h$={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class h_ extends dM.HTMLElement{constructor(){if(super(),hX(this,cx),hX(this,cz),hX(this,cB),hX(this,cE),hX(this,cG),hX(this,cI),hX(this,cv,!1),hX(this,cw,void 0),hX(this,cD,()=>{var a,b;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let c=this.shadowRoot.querySelector('slot[name="description"]'),d=null==(a=this.submenuElement.checkedItems)?void 0:a[0],e=null!=(b=null==d?void 0:d.dataset.description)?b:null==d?void 0:d.text,f=dN.createElement("span");f.textContent=null!=e?e:"",c.replaceChildren(f)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[h$.TYPE,h$.DISABLED,h$.CHECKED,h$.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),h0(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(a){switch(a.type){case"slotchange":hZ(this,cx,cy).call(this,a);break;case"click":this.handleClick(a);break;case"keydown":hZ(this,cG,cH).call(this,a);break;case"keyup":hZ(this,cE,cF).call(this,a)}}attributeChangedCallback(a,b,c){a===h$.CHECKED&&h0(this)&&!hW(this,cv)?this.setAttribute("aria-checked",null!=c?"true":"false"):a===h$.TYPE&&c!==b?this.role="menuitem"+c:a===h$.DISABLED&&c!==b&&(null==c?this.enable():this.disable())}connectedCallback(){this.hasAttribute(h$.DISABLED)||this.enable(),this.role="menuitem"+this.type,hY(this,cw,function a(b,c){if(!b)return null;let{host:d}=b.getRootNode();return!c&&d?a(b,d):(null==c?void 0:c.items)?c:a(c,null==c?void 0:c.parentNode)}(this,this.parentNode)),hZ(this,cI,cJ).call(this)}disconnectedCallback(){this.disable(),hZ(this,cI,cJ).call(this),hY(this,cw,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=d_(this))?void 0:a.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var a;return null!=(a=this.getAttribute(h$.TYPE))?a:""}set type(a){this.setAttribute(h$.TYPE,`${a}`)}get value(){var a;return null!=(a=this.getAttribute(h$.VALUE))?a:this.text}set value(a){this.setAttribute(h$.VALUE,a)}get text(){var a;return(null!=(a=this.textContent)?a:"").trim()}get checked(){if(h0(this))return"true"===this.getAttribute("aria-checked")}set checked(a){h0(this)&&(hY(this,cv,!0),this.setAttribute("aria-checked",a?"true":"false"),a?this.part.add("checked"):this.part.remove("checked"))}handleClick(a){!h0(this)&&this.invokeTargetElement&&dY(this,a.target)&&this.invokeTargetElement.dispatchEvent(new hI({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function h0(a){return"radio"===a.type||"checkbox"===a.type}cv=new WeakMap,cw=new WeakMap,cx=new WeakSet,cy=function(a){let b=a.target;if(!(null==b?void 0:b.name))for(let a of b.assignedNodes({flatten:!0}))a instanceof Text&&""===a.textContent.trim()&&a.remove();"submenu"===b.name&&(this.submenuElement?hZ(this,cz,cA).call(this):hZ(this,cB,cC).call(this))},cz=new WeakSet,cA=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",hW(this,cD)),this.submenuElement.addEventListener("addmenuitem",hW(this,cD)),this.submenuElement.addEventListener("removemenuitem",hW(this,cD)),hW(this,cD).call(this)},cB=new WeakSet,cC=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",hW(this,cD)),this.submenuElement.removeEventListener("addmenuitem",hW(this,cD)),this.submenuElement.removeEventListener("removemenuitem",hW(this,cD)),hW(this,cD).call(this)},cD=new WeakMap,cE=new WeakSet,cF=function(a){let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",hZ(this,cE,cF));this.handleClick(a)},cG=new WeakSet,cH=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",hZ(this,cE,cF));this.addEventListener("keyup",hZ(this,cE,cF),{once:!0})},cI=new WeakSet,cJ=function(){var a;let b=null==(a=hW(this,cw))?void 0:a.radioGroupItems;if(!b)return;let c=b.filter(a=>"true"===a.getAttribute("aria-checked")).pop();for(let a of(c||(c=b[0]),b))a.setAttribute("aria-checked","false");null==c||c.setAttribute("aria-checked","true")},h_.shadowRootOptions={mode:"open"},h_.getTemplateHTML=function(a){return`
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
  `},h_.getSuffixSlotInnerHTML=function(a){return""},dM.customElements.get("media-chrome-menu-item")||dM.customElements.define("media-chrome-menu-item",h_);class h1 extends hS{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dU(this).querySelector("media-settings-menu-button")}}h1.getTemplateHTML=function(a){return`
    ${hS.getTemplateHTML(a)}
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
  `},dM.customElements.get("media-settings-menu")||dM.customElements.define("media-settings-menu",h1);class h2 extends h_{}h2.shadowRootOptions={mode:"open"},h2.getTemplateHTML=function(a){return`
    ${h_.getTemplateHTML.call(this,a)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},h2.getSuffixSlotInnerHTML=function(a){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},dM.customElements.get("media-settings-menu-item")||dM.customElements.define("media-settings-menu-item",h2);class h3 extends fm{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=d_(this))?void 0:a.querySelector(`#${this.invokeTarget}`):null}handleClick(){var a;null==(a=this.invokeTargetElement)||a.dispatchEvent(new hI({relatedTarget:this}))}}dM.customElements.get("media-chrome-menu-button")||dM.customElements.define("media-chrome-menu-button",h3);class h4 extends h3{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dD("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dU(this).querySelector("media-settings-menu")}}h4.getSlotTemplateHTML=function(){return`
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
  `},h4.getTooltipContentHTML=function(){return dD("Settings")},dM.customElements.get("media-settings-menu-button")||dM.customElements.define("media-settings-menu-button",h4);var h5=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},h6=(a,b,c)=>(h5(a,b,"read from private field"),c?c.call(a):b.get(a)),h7=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},h8=(a,b,c,d)=>(h5(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),h9=(a,b,c)=>(h5(a,b,"access private method"),c);class ia extends hS{constructor(){super(...arguments),h7(this,cM),h7(this,cO),h7(this,cK,[]),h7(this,cL,void 0)}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_AUDIO_TRACK_LIST,dh.MEDIA_AUDIO_TRACK_ENABLED,dh.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dh.MEDIA_AUDIO_TRACK_ENABLED&&b!==c)this.value=c;else if(a===dh.MEDIA_AUDIO_TRACK_LIST&&b!==c){var d;h8(this,cK,null==(d=null!=c?c:"")?void 0:d.split(/\s+/).map(du)),h9(this,cM,cN).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",h9(this,cO,cP))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",h9(this,cO,cP))}get anchorElement(){var a;return"auto"!==this.anchor?super.anchorElement:null==(a=dU(this))?void 0:a.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return h6(this,cK)}set mediaAudioTrackList(a){h8(this,cK,a),h9(this,cM,cN).call(this)}get mediaAudioTrackEnabled(){var a;return null!=(a=d7(this,dh.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){d8(this,dh.MEDIA_AUDIO_TRACK_ENABLED,a)}}cK=new WeakMap,cL=new WeakMap,cM=new WeakSet,cN=function(){if(h6(this,cL)===JSON.stringify(this.mediaAudioTrackList))return;h8(this,cL,JSON.stringify(this.mediaAudioTrackList));let a=this.mediaAudioTrackList;for(let b of(this.defaultSlot.textContent="",a)){let a=hP({type:"radio",text:this.formatMenuItemText(b.label,b),value:`${b.id}`,checked:b.enabled});a.prepend(hQ(this,"checked-indicator")),this.defaultSlot.append(a)}},cO=new WeakSet,cP=function(){if(null==this.value)return;let a=new dM.CustomEvent(dd.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dM.customElements.get("media-audio-track-menu")||dM.customElements.define("media-audio-track-menu",ia);let ib=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class ic extends h3{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_AUDIO_TRACK_ENABLED,dh.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dD("Audio"))}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=dU(this))?void 0:a.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var a;return null!=(a=d7(this,dh.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){d8(this,dh.MEDIA_AUDIO_TRACK_ENABLED,a)}}ic.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ib}</slot>
  `},ic.getTooltipContentHTML=function(){return dD("Audio")},dM.customElements.get("media-audio-track-menu-button")||dM.customElements.define("media-audio-track-menu-button",ic);var id=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ie=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ig=(a,b,c)=>(id(a,b,"access private method"),c);let ih=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class ii extends hS{constructor(){super(...arguments),ie(this,cR),ie(this,cT),ie(this,cQ,void 0)}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_SUBTITLES_LIST,dh.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_SUBTITLES_LIST&&b!==c?ig(this,cR,cS).call(this):a===dh.MEDIA_SUBTITLES_SHOWING&&b!==c&&(this.value=c)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ig(this,cT,cU))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ig(this,cT,cU))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dU(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return ij(this,dh.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){ik(this,dh.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return ij(this,dh.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){ik(this,dh.MEDIA_SUBTITLES_SHOWING,a)}}cQ=new WeakMap,cR=new WeakSet,cS=function(){var a,b,c,d,e,f;if(id(this,b=cQ,"read from private field"),(c?c.call(this):b.get(this))===JSON.stringify(this.mediaSubtitlesList))return;d=cQ,e=JSON.stringify(this.mediaSubtitlesList),id(this,d,"write to private field"),f?f.call(this,e):d.set(this,e),this.defaultSlot.textContent="";let g=!this.value,h=hP({type:"radio",text:this.formatMenuItemText(dD("Off")),value:"off",checked:g});for(let b of(h.prepend(hQ(this,"checked-indicator")),this.defaultSlot.append(h),this.mediaSubtitlesList)){let c=hP({type:"radio",text:this.formatMenuItemText(b.label,b),value:eu(b),checked:this.value==eu(b)});c.prepend(hQ(this,"checked-indicator")),"captions"===(null!=(a=b.kind)?a:"subs")&&c.append(hQ(this,"captions-indicator")),this.defaultSlot.append(c)}},cT=new WeakSet,cU=function(){let a=this.mediaSubtitlesShowing,b=this.getAttribute(dh.MEDIA_SUBTITLES_SHOWING),c=this.value!==b;if((null==a?void 0:a.length)&&c&&this.dispatchEvent(new dM.CustomEvent(dd.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:a})),!this.value||!c)return;let d=new dM.CustomEvent(dd.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(d)},ii.getTemplateHTML=function(a){return`
    ${hS.getTemplateHTML(a)}
    <slot name="captions-indicator" hidden>${ih}</slot>
  `};let ij=(a,b)=>{let c=a.getAttribute(b);return c?es(c):[]},ik=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=ev(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dM.customElements.get("media-captions-menu")||dM.customElements.define("media-captions-menu",ii);let il=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,im=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,io=a=>{a.setAttribute("aria-checked",ez(a).toString())};class ip extends h3{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_SUBTITLES_LIST,dh.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dD("closed captions")),io(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_SUBTITLES_SHOWING&&io(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=dU(this))?void 0:a.querySelector("media-captions-menu")}get mediaSubtitlesList(){return iq(this,dh.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){ir(this,dh.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return iq(this,dh.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){ir(this,dh.MEDIA_SUBTITLES_SHOWING,a)}}ip.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${il}</slot>
      <slot name="off">${im}</slot>
    </slot>
  `},ip.getTooltipContentHTML=function(){return dD("Captions")};let iq=(a,b)=>{let c=a.getAttribute(b);return c?es(c):[]},ir=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=ev(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dM.customElements.get("media-captions-menu-button")||dM.customElements.define("media-captions-menu-button",ip);var is=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},it=(a,b,c)=>(is(a,b,"read from private field"),c?c.call(a):b.get(a)),iu=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iv=(a,b,c)=>(is(a,b,"access private method"),c);let iw={RATES:"rates"};class ix extends hS{constructor(){super(),iu(this,cW),iu(this,cY),iu(this,cV,new eq(this,iw.RATES,{defaultValue:gs})),iv(this,cW,cX).call(this)}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_PLAYBACK_RATE,iw.RATES]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dh.MEDIA_PLAYBACK_RATE&&b!=c?this.value=c:a===iw.RATES&&b!=c&&(it(this,cV).value=c,iv(this,cW,cX).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",iv(this,cY,cZ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",iv(this,cY,cZ))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dU(this).querySelector("media-playback-rate-menu-button")}get rates(){return it(this,cV)}set rates(a){a?Array.isArray(a)?it(this,cV).value=a.join(" "):"string"==typeof a&&(it(this,cV).value=a):it(this,cV).value="",iv(this,cW,cX).call(this)}get mediaPlaybackRate(){return d3(this,dh.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d4(this,dh.MEDIA_PLAYBACK_RATE,a)}}cV=new WeakMap,cW=new WeakSet,cX=function(){for(let a of(this.defaultSlot.textContent="",it(this,cV))){let b=hP({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a,checked:this.mediaPlaybackRate===Number(a)});b.prepend(hQ(this,"checked-indicator")),this.defaultSlot.append(b)}},cY=new WeakSet,cZ=function(){if(!this.value)return;let a=new dM.CustomEvent(dd.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dM.customElements.get("media-playback-rate-menu")||dM.customElements.define("media-playback-rate-menu",ix);class iy extends h3{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_PLAYBACK_RATE]}constructor(){var a;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dh.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",dD("Playback rate {playbackRate}",{playbackRate:b}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dU(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return d3(this,dh.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d4(this,dh.MEDIA_PLAYBACK_RATE,a)}}iy.getSlotTemplateHTML=function(a){return`
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
  `},iy.getTooltipContentHTML=function(){return dD("Playback rate")},dM.customElements.get("media-playback-rate-menu-button")||dM.customElements.define("media-playback-rate-menu-button",iy);var iz=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iA=(a,b,c)=>(iz(a,b,"read from private field"),c?c.call(a):b.get(a)),iB=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iC=(a,b,c,d)=>(iz(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),iD=(a,b,c)=>(iz(a,b,"access private method"),c);class iE extends hS{constructor(){super(...arguments),iB(this,c0),iB(this,c2),iB(this,c$,[]),iB(this,c_,{})}static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_RENDITION_LIST,dh.MEDIA_RENDITION_SELECTED,dh.MEDIA_RENDITION_UNAVAILABLE,dh.MEDIA_HEIGHT]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dh.MEDIA_RENDITION_SELECTED&&b!==c)this.value=null!=c?c:"auto",iD(this,c0,c1).call(this);else if(a===dh.MEDIA_RENDITION_LIST&&b!==c)iC(this,c$,null==c?void 0:c.split(/\s+/).map(ds)),iD(this,c0,c1).call(this);else a===dh.MEDIA_HEIGHT&&b!==c&&iD(this,c0,c1).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",iD(this,c2,c3))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",iD(this,c2,c3))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dU(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return iA(this,c$)}set mediaRenditionList(a){iC(this,c$,a),iD(this,c0,c1).call(this)}get mediaRenditionSelected(){return d7(this,dh.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){d8(this,dh.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return d3(this,dh.MEDIA_HEIGHT)}set mediaHeight(a){d4(this,dh.MEDIA_HEIGHT,a)}}c$=new WeakMap,c_=new WeakMap,c0=new WeakSet,c1=function(){if(iA(this,c_).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&iA(this,c_).mediaHeight===this.mediaHeight)return;iA(this,c_).mediaRenditionList=JSON.stringify(this.mediaRenditionList),iA(this,c_).mediaHeight=this.mediaHeight;let a=this.mediaRenditionList.sort((a,b)=>b.height-a.height);for(let b of a)b.selected=b.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let b=!this.mediaRenditionSelected;for(let c of a){let a=hP({type:"radio",text:this.formatMenuItemText(`${Math.min(c.width,c.height)}p`,c),value:`${c.id}`,checked:c.selected&&!b});a.prepend(hQ(this,"checked-indicator")),this.defaultSlot.append(a)}let c=hP({type:"radio",text:b?this.formatMenuItemText(`${dD("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(dD("Auto")),value:"auto",checked:b}),d=this.mediaHeight>0?`${dD("Auto")} (${this.mediaHeight}p)`:dD("Auto");c.dataset.description=d,c.prepend(hQ(this,"checked-indicator")),this.defaultSlot.append(c)},c2=new WeakSet,c3=function(){if(null==this.value)return;let a=new dM.CustomEvent(dd.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dM.customElements.get("media-rendition-menu")||dM.customElements.define("media-rendition-menu",iE);let iF=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class iG extends h3{static get observedAttributes(){return[...super.observedAttributes,dh.MEDIA_RENDITION_SELECTED,dh.MEDIA_RENDITION_UNAVAILABLE,dh.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dD("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dU(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return d7(this,dh.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){d8(this,dh.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return d3(this,dh.MEDIA_HEIGHT)}set mediaHeight(a){d4(this,dh.MEDIA_HEIGHT,a)}}iG.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${iF}</slot>
  `},iG.getTooltipContentHTML=function(){return dD("Quality")},dM.customElements.get("media-rendition-menu-button")||dM.customElements.define("media-rendition-menu-button",iG);let iH=dM.document?.createElement?.("template");iH&&(iH.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class iI extends hF{static template=iH}dM.customElements&&!dM.customElements.get("media-theme-sutro")&&dM.customElements.define("media-theme-sutro",iI);var iJ=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),iK={className:"class",htmlFor:"for"},iL=function({react:a,tagName:b,elementClass:c,events:d,displayName:e,toAttributeName:f=function(a){return a.toLowerCase()},toAttributeValue:g=function(a){return"boolean"==typeof a?a?"":void 0:"function"==typeof a?void 0:"object"!=typeof a||null===a?a:void 0}}){let h=Number.parseInt(a.version)>=19,i=a.forwardRef((d,e)=>{let i=a.useRef(null);a.useRef(new Map);let j={},k={},l={},m={};for(let[a,b]of Object.entries(d)){if(iJ.has(a)){l[a]=b;continue}let d=f(iK[a]??a);if(a in c.prototype&&!(a in(globalThis.HTMLElement?.prototype??{}))&&!c.observedAttributes?.some(a=>a===d)){m[a]=b;continue}if(a.startsWith("on")){j[a]=b;continue}let e=g(b);d&&null!=e&&(k[d]=String(e),h||(l[d]=e)),d&&h&&(l[d]=b)}if(c?.getTemplateHTML&&c?.shadowRootOptions){let{mode:b,delegatesFocus:d}=c.shadowRootOptions;l.children=[a.createElement("template",{shadowrootmode:b,shadowrootdelegatesfocus:d,dangerouslySetInnerHTML:{__html:c.getTemplateHTML(k)}}),l.children]}return a.createElement(b,{...l,ref:a.useCallback(a=>{i.current=a,"function"==typeof e?e(a):null!==e&&(e.current=a)},[e])})});return i.displayName=e??c.name,i}({react:db,tagName:"media-theme-sutro",elementClass:iI});let iM="mux.com";function iN(a,b){let c=iO(a);if(!c)return a;let d=a.providerMetadata?.mux?.thumbnailTime??b?.thumbnailTime??b?.startTime,e={...a,sources:[{src:`https://stream.${b?.customDomain??iM}/${c}.m3u8`,type:"application/x-mpegURL"}],poster:iP(c,{thumbnailTime:d,customDomain:b?.customDomain,token:b?.tokens?.thumbnail})};return d>=0&&(e.thumbnailTime=d),e}function iO(a){let b=a.providerMetadata?.mux??a.externalIds;return b?.playbackId}let iP=(a,{token:b,thumbnailTime:c,width:d,customDomain:e=iM}={})=>{let f=null==b?c:void 0,{aud:g}=function(a){let b=(a??"").split(".")[1];return b?JSON.parse(decodeURIComponent(atob(b.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}(b);if(!b||"t"===g)return`https://image.${e}/${a}/thumbnail.webp${function(a){let b=(function(a){let b={};for(let c in a)null!=a[c]&&(b[c]=a[c]);return new URLSearchParams(b)})(a).toString();return b?"?"+b:""}({token:b,time:f,width:d})}`},iQ=JSON.parse(process.env.NEXT_PUBLIC_DEV_VIDEO_OPTS??process.env.NEXT_PUBLIC_VIDEO_OPTS??"{}"),iR=`${iQ.folder??"videos"}/`;function iS(a){if("string"==typeof a)return a.split(/[#?]/)[0].split(".").pop()?.trim()}let iT=(0,db.forwardRef)((a,b)=>{if("string"==typeof a.playbackId)return f??(f=(0,db.lazy)(()=>Promise.all([c.e(527),c.e(628),c.e(814)]).then(c.bind(c,81814)))),(0,da.jsx)(f,{ref:b,...a,controls:!1});let d=iS(a.src);return"m3u8"===d?(g??(g=(0,db.lazy)(()=>Promise.all([c.e(527),c.e(848)]).then(c.bind(c,35848)))),(0,da.jsx)(g,{ref:b,...a,controls:!1})):"mpd"===d?(h??(h=(0,db.lazy)(()=>c.e(170).then(c.bind(c,75170)))),(0,da.jsx)(h,{ref:b,...a,controls:!1})):(0,da.jsx)("video",{ref:b,...a,controls:!1})}),iU=(0,db.forwardRef)((a,b)=>{let c,d,{style:e,children:f,asset:g,controls:h=!0,poster:i,blurDataURL:j,theme:k=iL,...l}=a,m=db.Children.toArray(f).find(a=>"object"==typeof a&&"type"in a&&"poster"===a.props.slot);(0,db.isValidElement)(m)&&(i="",j=void 0,c=m,f=db.Children.toArray(f).filter(a=>a!==m));let n={},o=g?iO(g):void 0,p=!0;if(o&&g?.status==="ready"&&(l.src=void 0,l.playbackId=o,i&&((p=i!==iP(o,l))||(d=`${iP(o,{...l,width:480})} 480w,${iP(o,{...l,width:640})} 640w,${iP(o,{...l,width:960})} 960w,${iP(o,{...l,width:1280})} 1280w,${iP(o,{...l,width:1600})} 1600w,${iP(o,{...l})} 1920w`))),j){let a=!p&&j===g?.blurDataURL,b=p&&j!==g?.blurDataURL;if(a||b){var q;n.gridArea="1/1",n.width="100%",n.height="100%",n.color="transparent",n.backgroundSize="cover",n.backgroundPosition="center",n.backgroundRepeat="no-repeat",n.backgroundImage=`url('data:image/svg+xml;charset=utf-8,${q=j,`<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${q}"/></g></svg>`.replace(/#/g,"%23")}')`}}if(delete l.thumbnailTime,h&&k){let a=l["data-next-video"];return i&&(c=(0,da.jsx)("img",{slot:"poster",src:p?i:void 0,srcSet:d,style:n,decoding:"async","aria-hidden":"true"}),i=""),(0,da.jsxs)(k,{"data-next-video":a,style:{display:"grid",...e},children:[c,(0,da.jsx)(db.Suspense,{fallback:null,children:(0,da.jsxs)(iT,{suppressHydrationWarning:!0,ref:b,style:{gridArea:"1/1"},slot:"media",poster:i,crossOrigin:"",...l,children:[o&&(0,da.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${o}/storyboard.vtt`}),f]})})]})}return(0,da.jsx)(db.Suspense,{fallback:null,children:(0,da.jsxs)(iT,{suppressHydrationWarning:!0,ref:b,style:{gridArea:"1/1",...e},controls:!1!==h||void 0,poster:i,crossOrigin:"",...l,children:[o&&(0,da.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${o}/storyboard.vtt`}),f]})})});function iV({status:a,hidden:b}){let c="",d="";switch(a){case"error":c="Error",d="An error occurred while uploading your video. Please check the CLI logs for more info.";break;case"sourced":c="Video is not processing",d="Make sure to run next-video sync. The currently loaded video is the source file.";break;default:c="Upload in progress...",d="Your video file is being uploaded. The currently loaded video is the source file."}return(0,da.jsxs)(da.Fragment,{children:[(0,da.jsx)("style",{children:`
        .next-video-alert {
          position: absolute;
          inset: 1em;
          bottom: auto;
          padding: .75rem 1rem;
          border-radius: 1rem;
          color: hsl(0, 0%, 100%);
          background-color: hsl(240 10% 3.9% / .7);
          border: 1px solid hsl(240 3.7% 15.9%);
          transition: visibility 0s, opacity .25s;
          visibility: visible;
          opacity: 1;
        }

        .next-video-alert[hidden] {
          display: block;
          transition: visibility 1s, opacity 1s;
          visibility: hidden;
          opacity: 0;
        }

        .next-video-alert svg {
          position: absolute;
        }

        .next-video-alert h5 {
          line-height: 1;
          font-weight: 500;
          margin-bottom: 0.25rem;
          padding-left: 1.75rem;
          font-size: inherit;
        }

        .next-video-alert div {
          padding-left: 1.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        `}),(0,da.jsxs)("div",{role:"alert",className:`next-video-alert next-video-alert-${a}`,hidden:b,children:["error"===a?(0,da.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,da.jsx)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}):(0,da.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,da.jsx)("path",{d:"M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,da.jsx)("h5",{children:c}),(0,da.jsx)("div",{children:d})]})]})}async function iW({config:a,src:b,width:c,height:d}){let e=`${a.path}?url=${encodeURIComponent(`${b}`)}`;return c&&(e+=`&w=${c}`),d&&(e+=`&h=${d}`),`${e}`}function iX(a){let b=a.providerMetadata?.["vercel-blob"]??a.externalIds;if(!b)return a;let c={src:b.url};return b.contentType&&(c.type=b.contentType),{...a,sources:[c]}}function iY(a){let b=a.providerMetadata?.backblaze;if(!b)return a;let c=new URL(b.endpoint);c.hostname=`${b.bucket}.${c.hostname}`,c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}function iZ(a){let b=a.providerMetadata?.["amazon-s3"];if(!b)return a;let c=new URL(b.endpoint);c.hostname=`${b.bucket}.${c.hostname}`,c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}function i$(a){let b=a.providerMetadata?.["cloudflare-r2"];if(!b)return a;let c=new URL(b.bucketUrlPublic);c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}let i_=(0,db.forwardRef)((a,b)=>{let{as:c=iU,loader:d=iW,transform:e=i0,className:f,style:g,src:h,width:i,height:j}=a,[k,l]=(0,db.useState)("object"==typeof h?h:void 0),[m,n]=(0,db.useState)(!1);"object"==typeof h&&(k=h,h=void 0);let o=function(a,b,c){return async d=>{if("string"==typeof b.src)try{let e=await a({...b,config:iQ}),f=await fetch(e,{signal:d}),g=await f.json();if(f.ok)c(g);else{let a=`[next-video] The request to ${f.url} failed. `;throw a+=`Did you configure the \`${iQ.path}\` route to handle video API requests?
`,Error(a)}}catch(a){d.aborted||console.error(a)}}}(d,{src:h,width:i,height:j},a=>l(a)),p=k?.status,q=iS(h);!function(a,b=5e3){let c=(0,db.useRef)(new AbortController);(0,db.useEffect)(()=>(c.current=new AbortController,a(c.current.signal),()=>{c.current.abort()}),[]),function(a,b){let c=(0,db.useRef)(null);(0,db.useEffect)(()=>{c.current=a}),(0,db.useEffect)(()=>{let a=async()=>{await c.current?.()};if(null!=b){let c=setInterval(a,b);return()=>clearInterval(c)}},[b])}((0,db.useCallback)(()=>a(c.current.signal),[]),b)}(o,"string"!=typeof h||"ready"==p||["m3u8","mpd"].includes(q??"")?null:1e3);let r=function(a,b){let{asset:c}=b,{controls:d=!0,as:e,className:f,style:g,src:h,poster:i,blurDataURL:j,loader:k,transform:l,...m}=a,n={src:h,poster:i,controls:d,blurDataURL:j,...m};if("object"==typeof i&&(n.poster=i.src,n.blurDataURL??(n.blurDataURL=i.blurDataURL)),c)if("ready"===c.status){n.blurDataURL??(n.blurDataURL=c.blurDataURL);let a=l(c,n);a&&(n.src=a.sources?.[0]?.src,n.poster??(n.poster=a.poster),n.thumbnailTime??(n.thumbnailTime=a.thumbnailTime))}else{var o;o=c.originalFilePath,n.src=o?.startsWith(iR)?o?.replace(iR,"_next-video/"):o}return n}({...a,transform:e,src:h},{asset:k});return!function(a){var b,c;return"function"==typeof(b=a)&&(()=>{let a=Object.getPrototypeOf(b);return a.prototype&&a.prototype.isReactComponent})()||"function"==typeof a||"object"==typeof(c=a)&&"symbol"==typeof c.$$typeof&&["react.memo","react.forward_ref"].includes(c.$$typeof.description)}(c)&&console.warn("The `as` property is not a valid component:",c),(0,da.jsxs)("div",{className:`${f?`${f} `:""}next-video-container`,style:g,children:[(0,da.jsx)("style",{children:`
        .next-video-container {
          display: grid;  /* Fixes a Safari aspect-ratio + height bug. */
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        [data-next-video] {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
        }

        [data-next-video] img {
          object-fit: var(--media-object-fit, contain);
          object-position: var(--media-object-position, center);
          max-width: 100%;
          max-height: 100%;
          min-width: 100%;
          min-height: 100%;
        }
        `}),(0,da.jsx)(c,{ref:b,"data-next-video":p??"",style:{width:i,height:j},asset:k,onPlaying:()=>n(!0),onPause:()=>n(!1),...r}),(0,da.jsx)(iV,{hidden:!!(m||!p||"ready"===p),status:p})]})});function i0(a,b){let c=a.provider??iQ.provider;for(let[d,e]of Object.entries(c9))if(d===c.toLowerCase().replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()))return e.transform(a,b)}function i1(){let[a,b]=(0,db.useState)(""),[c,d]=(0,db.useState)(""),[e,f]=(0,db.useState)("initializing"),[g,h]=(0,db.useState)(null),[i,j]=(0,db.useState)(!1),k=async()=>{if(c)try{let a=await fetch(`/api/upload-status?uploadId=${c}`),b=await a.json();console.log("\uD83D\uDD0D Upload status check:",b.data),b.data?.status==="asset_created"&&b.data?.asset_id?(console.log("\uD83C\uDF89 Asset created! ID:",b.data.asset_id),await l(b.data.asset_id),j(!1)):b.data?.status==="errored"&&(console.error("❌ Upload failed:",b.data.error),j(!1))}catch(a){console.error("❌ Failed to check upload status:",a)}},l=async a=>{try{let b=await fetch(`/api/asset-details?assetId=${a}`),c=await b.json();console.log("\uD83C\uDFAC Asset details:",c.data),h(c.data)}catch(a){console.error("❌ Failed to get asset details:",a)}};return"fetching"===e?(0,da.jsx)("p",{children:"Getting upload URL..."}):"error"===e?(0,da.jsx)("p",{children:"Error loading uploader"}):a?(0,da.jsxs)("div",{className:"p-6 max-w-4xl mx-auto",children:[(0,da.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Mux Upload Test"}),(0,da.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,da.jsxs)("div",{className:"border rounded-lg p-4",children:[(0,da.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Upload Video"}),(0,da.jsx)(dc.Ay,{endpoint:a,onUploadStart:()=>{console.log("\uD83C\uDFAC Upload started")},onProgress:a=>{console.log(`📊 Upload progress: ${a.detail}%`)},onSuccess:a=>{console.log("\uD83C\uDF89 Upload completed:",a.detail),(()=>{if(i)return;j(!0),console.log("⏱️ Starting upload status polling...");let a=setInterval(async()=>{await k(),i||clearInterval(a)},3e3);setTimeout(()=>{clearInterval(a),j(!1),console.log("⏰ Polling timeout reached")},3e5)})()},onError:a=>{console.error("❌ Upload failed:",a.detail)}}),i&&(0,da.jsx)("div",{className:"mt-4 p-3 bg-blue-50 rounded",children:(0,da.jsx)("p",{className:"text-blue-700",children:"⏱️ Processing upload and creating asset..."})})]}),(0,da.jsxs)("div",{className:"border rounded-lg p-4",children:[(0,da.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Upload Info"}),(0,da.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Upload ID:"}),(0,da.jsx)("p",{className:"font-mono text-xs bg-gray-100 p-1 rounded mt-1",children:c||"Not available"})]}),g&&(0,da.jsxs)(da.Fragment,{children:[(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Asset ID:"}),(0,da.jsx)("p",{className:"font-mono text-xs bg-gray-100 p-1 rounded mt-1",children:g.id})]}),(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Status:"}),(0,da.jsx)("span",{className:`ml-2 px-2 py-1 rounded text-xs ${"ready"===g.status?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:g.status})]}),g.playback_ids?.[0]&&(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Playback ID:"}),(0,da.jsx)("p",{className:"font-mono text-xs bg-gray-100 p-1 rounded mt-1",children:g.playback_ids[0].id})]}),g.duration&&(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Duration:"})," ",Math.round(g.duration),"s"]}),g.aspect_ratio&&(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Aspect Ratio:"})," ",g.aspect_ratio]})]})]}),(0,da.jsxs)("div",{className:"mt-4 space-x-2",children:[(0,da.jsx)("button",{onClick:k,disabled:!c,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:bg-gray-300",children:"Check Status"}),g&&(0,da.jsx)("button",{onClick:()=>l(g.id),className:"px-3 py-1 bg-green-500 text-white rounded text-sm",children:"Refresh Asset"})]})]})]}),g&&"ready"===g.status&&g.playback_ids?.[0]&&(0,da.jsxs)("div",{className:"mt-6 border rounded-lg p-4",children:[(0,da.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Video Player"}),(0,da.jsx)(i_,{src:g.playback_ids[0].id,width:"100%",height:"auto",accentColor:"#ff0055"}),(0,da.jsxs)("div",{className:"mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Duration:"}),(0,da.jsx)("p",{children:g.duration?`${Math.round(g.duration)}s`:"N/A"})]}),(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Resolution:"}),(0,da.jsx)("p",{children:g.aspect_ratio||"N/A"})]}),(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Status:"}),(0,da.jsx)("span",{className:`px-2 py-1 rounded text-xs ${"ready"===g.status?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:g.status})]}),(0,da.jsxs)("div",{children:[(0,da.jsx)("strong",{children:"Playback ID:"}),(0,da.jsx)("p",{className:"font-mono text-xs truncate",children:g.playback_ids[0].id})]})]}),(0,da.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[(0,da.jsx)("a",{href:`https://stream.mux.com/${g.playback_ids[0].id}/high.mp4`,download:!0,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",target:"_blank",rel:"noopener noreferrer",children:"\uD83D\uDCE5 Download MP4"}),(0,da.jsx)("a",{href:`https://image.mux.com/${g.playback_ids[0].id}/thumbnail.jpg`,download:!0,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",target:"_blank",rel:"noopener noreferrer",children:"\uD83D\uDDBC️ Download Thumbnail"}),(0,da.jsx)("button",{onClick:()=>navigator.clipboard.writeText(`https://stream.mux.com/${g.playback_ids[0].id}.m3u8`),className:"px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors",children:"\uD83D\uDCCB Copy HLS URL"})]})]}),g&&(0,da.jsxs)("div",{className:"mt-6 border rounded-lg p-4",children:[(0,da.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Asset Details"}),(0,da.jsx)("pre",{className:"bg-gray-100 p-4 rounded text-xs overflow-x-auto",children:JSON.stringify(g,null,2)})]})]}):(0,da.jsx)("p",{children:"Loading..."})}},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:a=>{"use strict";a.exports=require("assert")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},25196:(a,b,c)=>{Promise.resolve().then(c.bind(c,86041))},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},72396:(a,b,c)=>{Promise.resolve().then(c.bind(c,821))},73496:a=>{"use strict";a.exports=require("http2")},74075:a=>{"use strict";a.exports=require("zlib")},79551:a=>{"use strict";a.exports=require("url")},81630:a=>{"use strict";a.exports=require("http")},83997:a=>{"use strict";a.exports=require("tty")},86041:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(27851).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Chris Gadgets Ug\\\\Desktop\\\\cbmtv\\\\cbmtv-dashboard\\\\src\\\\app\\\\upload\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\upload\\page.js","default")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},93893:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(53197),e=c(90426),f=c(76362),g=c(59851),h=c(38649),i=c(43385),j=c(30336),k=c(38337),l=c(48977),m=c(98227),n=c(63847),o=c(38544),p=c(55654),q=c(9931),r=c(261),s=c(5330),t=c(53439),u=c(26713),v=c(73507),w=c(99712),x=c(70804),y=c(52541),z=c(17163),A=c(61273),B=c(86439),C=c(38791),D=c.n(C),E=c(15059),F=c(16002),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["upload",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,86041)),"C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\upload\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,42742)),"C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,38791,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.bind(c,29446)),"C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,40482,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,10493,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["C:\\Users\\Chris Gadgets Ug\\Desktop\\cbmtv\\cbmtv-dashboard\\src\\app\\upload\\page.js"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/upload/page",pathname:"/upload",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/upload/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},94735:a=>{"use strict";a.exports=require("events")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[619,613,52,402],()=>b(b.s=93893));module.exports=c})();