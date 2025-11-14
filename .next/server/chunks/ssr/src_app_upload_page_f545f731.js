module.exports=[79114,a=>{"use strict";let b,c,d,e,f;a.s(["default",()=>i_],79114);var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a$,a_,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b$,b_,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,cA,cB,cC,cD,cE,cF,cG,cH,cI,cJ,cK,cL,cM,cN,cO,cP,cQ,cR,cS,cT,cU,cV,cW,cX,cY,cZ,c$,c_,c0,c1,c2=a.i(11755),c3=a.i(80150),c4=a.i(58181);a.s(["AttributeToStateChangeEventMap",()=>dc,"AvailabilityStates",()=>dh,"MediaStateChangeEvents",()=>da,"MediaStateReceiverAttributes",()=>c6,"MediaUIAttributes",()=>c9,"MediaUIEvents",()=>c5,"MediaUIProps",()=>c7,"PointerTypes",()=>dg,"ReadyStates",()=>df,"StateChangeEventToAttributeMap",()=>db,"StreamTypes",()=>di,"TextTrackKinds",()=>dd,"TextTrackModes",()=>de,"VolumeLevels",()=>dj,"WebkitPresentationModes",()=>dk],5498);let c5={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},c6={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},c7={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},c8=Object.entries(c7),c9=c8.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{}),da=c8.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),db=Object.entries(da).reduce((a,[b,c])=>{let d=c9[b];return d&&(a[c]=d),a},{userinactivechange:"userinactive"}),dc=Object.entries(c9).reduce((a,[b,c])=>{let d=da[b];return d&&(a[c]=d),a},{userinactive:"userinactivechange"}),dd={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},de={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},df={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},dg={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},dh={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},di={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},dj={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},dk={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function dl(a){if(a){let{id:b,width:c,height:d}=a;return[b,c,d].filter(a=>null!=a).join(":")}}function dm(a){if(a){let[b,c,d]=a.split(":");return{id:b,width:+c,height:+d}}}function dn(a){if(a){let{id:b,kind:c,language:d,label:e}=a;return[b,c,d,e].filter(a=>null!=a).join(":")}}function dp(a){if(a){let[b,c,d,e]=a.split(":");return{id:b,kind:c,language:d,label:e}}}function dq(a){return"number"==typeof a&&!Number.isNaN(a)&&Number.isFinite(a)}function dr(a){return"string"==typeof a&&!isNaN(a)&&!isNaN(parseFloat(a))}a.i(5498),a.s(["emptyTimeRanges",()=>dw,"formatAsTimePhrase",()=>du,"formatTime",()=>dv,"serializeTimeRanges",()=>dx],74166);let ds=a=>new Promise(b=>setTimeout(b,a)),dt=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],du=a=>{if(!dq(a))return"";let b=Math.abs(a),c=b!==a,d=new Date(0,0,0,0,0,b,0),e=[d.getHours(),d.getMinutes(),d.getSeconds()].map((a,b)=>a&&((a,b)=>{let c=1===a?dt[b].singular:dt[b].plural;return`${a} ${c}`})(a,b)).filter(a=>a).join(", ");return`${e}${c?" remaining":""}`};function dv(a,b){let c=!1;a<0&&(c=!0,a=0-a);let d=Math.floor((a=a<0?0:a)%60),e=Math.floor(a/60%60),f=Math.floor(a/3600),g=Math.floor(b/60%60),h=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(f=e=d="0"),e=(((f=f>0||h>0?f+":":"")||g>=10)&&e<10?"0"+e:e)+":",(c?"-":"")+f+e+(d=d<10?"0"+d:d)}let dw=Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function dx(a=dw){return Array.from(a).map((b,c)=>[Number(a.start(c).toFixed(3)),Number(a.end(c).toFixed(3))].join(":")).join(" ")}a.i(74166);let dy={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},dz=(null==(g=globalThis.navigator)?void 0:g.language)||"en",dA=(a,b={})=>(a=>{var b,c,d;let[e]=dz.split("-");return(null==(b=dy[dz])?void 0:b[a])||(null==(c=dy[e])?void 0:c[a])||(null==(d=dy.en)?void 0:d[a])||a})(a).replace(/\{(\w+)\}/g,(a,c)=>c in b?String(b[c]):`{${c}}`);class dB{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class dC extends dB{}class dD extends dC{constructor(){super(...arguments),this.role=null}}let dE={createElement:function(){return new dF.HTMLElement},createElementNS:function(){return new dF.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:a=>!1},dF={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:dE,Node:dC,Element:dD,HTMLElement:class extends dD{constructor(){super(...arguments),this.innerHTML=""}get content(){return new dF.DocumentFragment}},DocumentFragment:class extends dB{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:a=>null,setItem(a,b){},removeItem(a){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:a=>({matches:!1,media:a}),DOMParser:class{parseFromString(a,b){return{body:{textContent:a}}}}},dG=Object.keys(dF).every(a=>a in globalThis),dH=dG?globalThis:dF,dI=dG?globalThis.document:dE,dJ=new WeakMap,dK=a=>{let b=dJ.get(a);return b||dJ.set(a,b=new Set),b},dL=new dH.ResizeObserver(a=>{for(let b of a)for(let a of dK(b.target))a(b)});function dM(a,b){dK(a).add(b),dL.observe(a)}function dN(a,b){let c=dK(a);c.delete(b),c.size||dL.unobserve(a)}function dO(a){let b={};for(let c of a)b[c.name]=c.value;return b}function dP(a){var b;return null!=(b=dQ(a))?b:dU(a,"media-controller")}function dQ(a){var b;let{MEDIA_CONTROLLER:c}=c6,d=a.getAttribute(c);if(d)return null==(b=dW(a))?void 0:b.getElementById(d)}let dR=(a,b,c=".value")=>{let d=a.querySelector(c);d&&(d.textContent=b)},dS=(a,b)=>((a,b)=>{let c=`slot[name="${b}"]`,d=a.shadowRoot.querySelector(c);return d?d.children:[]})(a,b)[0],dT=(a,b)=>!!a&&!!b&&(null!=a&&!!a.contains(b)||dT(a,b.getRootNode().host)),dU=(a,b)=>{if(!a)return null;let c=a.closest(b);return c||dU(a.getRootNode().host,b)};function dV(a=document){var b;let c=null==a?void 0:a.activeElement;return c?null!=(b=dV(c.shadowRoot))?b:c:null}function dW(a){var b;let c=null==(b=null==a?void 0:a.getRootNode)?void 0:b.call(a);return c instanceof ShadowRoot||c instanceof Document?c:null}function dX(a,{depth:b=3,checkOpacity:c=!0,checkVisibilityCSS:d=!0}={}){if(a.checkVisibility)return a.checkVisibility({checkOpacity:c,checkVisibilityCSS:d});let e=a;for(;e&&b>0;){let a=getComputedStyle(e);if(c&&"0"===a.opacity||d&&"hidden"===a.visibility||"none"===a.display)return!1;e=e.parentElement,b--}return!0}function dY(a,b){let c=function(a,b){var c,d;let e;for(e of null!=(c=a.querySelectorAll("style:not([media])"))?c:[]){let a;try{a=null==(d=e.sheet)?void 0:d.cssRules}catch{continue}for(let c of null!=a?a:[])if(b(c.selectorText))return c}}(a,a=>a===b);return c||dZ(a,b)}function dZ(a,b){var c,d;let e=null!=(c=a.querySelectorAll("style:not([media])"))?c:[],f=null==e?void 0:e[e.length-1];return(null==f?void 0:f.sheet)?(null==f||f.sheet.insertRule(`${b}{}`,f.sheet.cssRules.length),null==(d=f.sheet.cssRules)?void 0:d[f.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",a),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function d$(a,b,c=NaN){let d=a.getAttribute(b);return null!=d?+d:c}function d_(a,b,c){let d=+c;if(null==c||Number.isNaN(d)){a.hasAttribute(b)&&a.removeAttribute(b);return}d$(a,b,void 0)!==d&&a.setAttribute(b,`${d}`)}function d0(a,b){return a.hasAttribute(b)}function d1(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}d0(a,b)!=c&&a.toggleAttribute(b,c)}function d2(a,b,c=null){var d;return null!=(d=a.getAttribute(b))?d:c}function d3(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}let d=`${c}`;d2(a,b,void 0)!==d&&a.setAttribute(b,d)}var d4=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},d5=(a,b,c)=>(d4(a,b,"read from private field"),c?c.call(a):b.get(a)),d6=(a,b,c,d)=>(d4(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class d7 extends dH.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,h,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[c6.MEDIA_CONTROLLER,c9.MEDIA_PAUSED]}attributeChangedCallback(a,b,c){var d,e,f,g,i;a===c6.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=d5(this,h))?void 0:d.unassociateElement)||e.call(d,this),d6(this,h,null)),c&&this.isConnected&&(d6(this,h,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(i=null==(g=d5(this,h))?void 0:g.associateElement)||i.call(g,this)))}connectedCallback(){var a,b,c,d;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),d6(this,h,function(a){var b;let c=a.getAttribute(c6.MEDIA_CONTROLLER);return c?null==(b=a.getRootNode())?void 0:b.getElementById(c):dU(a,"media-controller")}(this)),this.getAttribute(c6.MEDIA_CONTROLLER)&&(null==(b=null==(a=d5(this,h))?void 0:a.associateElement)||b.call(a,this)),null==(c=d5(this,h))||c.addEventListener("pointerdown",this),null==(d=d5(this,h))||d.addEventListener("click",this)}disconnectedCallback(){var a,b,c,d;this.getAttribute(c6.MEDIA_CONTROLLER)&&(null==(b=null==(a=d5(this,h))?void 0:a.unassociateElement)||b.call(a,this)),null==(c=d5(this,h))||c.removeEventListener("pointerdown",this),null==(d=d5(this,h))||d.removeEventListener("click",this),d6(this,h,null)}handleEvent(a){var b;let c=null==(b=a.composedPath())?void 0:b[0];if(["video","media-controller"].includes(null==c?void 0:c.localName)){if("pointerdown"===a.type)this._pointerType=a.pointerType;else if("click"===a.type){let{clientX:b,clientY:c}=a,{left:d,top:e,width:f,height:g}=this.getBoundingClientRect(),h=b-d,i=c-e;if(h<0||i<0||h>f||i>g||0===f&&0===g)return;let{pointerType:j=this._pointerType}=a;if(this._pointerType=void 0,j===dg.TOUCH)return void this.handleTap(a);if(j===dg.MOUSE)return void this.handleMouseClick(a)}}}get mediaPaused(){return d0(this,c9.MEDIA_PAUSED)}set mediaPaused(a){d1(this,c9.MEDIA_PAUSED,a)}handleTap(a){}handleMouseClick(a){let b=this.mediaPaused?c5.MEDIA_PLAY_REQUEST:c5.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new dH.CustomEvent(b,{composed:!0,bubbles:!0}))}}h=new WeakMap,d7.shadowRootOptions={mode:"open"},d7.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},dH.customElements.get("media-gesture-receiver")||dH.customElements.define("media-gesture-receiver",d7);var d8=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},d9=(a,b,c)=>(d8(a,b,"read from private field"),c?c.call(a):b.get(a)),ea=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},eb=(a,b,c,d)=>(d8(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),ec=(a,b,c)=>(d8(a,b,"access private method"),c);let ed={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},ee=Object.values(c9);function ef(a,b){var c,d,e;if(!a.isConnected)return;let f=Object.fromEntries((null!=(c=a.getAttribute(ed.BREAKPOINTS))?c:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(a=>a.split(":"))),g=(d=f,e=b,Object.keys(d).filter(a=>e>=parseInt(d[a]))),h=!1;if(Object.keys(f).forEach(b=>{if(g.includes(b)){a.hasAttribute(`breakpoint${b}`)||(a.setAttribute(`breakpoint${b}`,""),h=!0);return}a.hasAttribute(`breakpoint${b}`)&&(a.removeAttribute(`breakpoint${b}`),h=!0)}),h){let b=new CustomEvent(da.BREAKPOINTS_CHANGE,{detail:g});a.dispatchEvent(b)}a.breakpointsComputed||(a.breakpointsComputed=!0,a.dispatchEvent(new CustomEvent(da.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class eg extends dH.HTMLElement{constructor(){if(super(),ea(this,n),ea(this,r),ea(this,t),ea(this,v),ea(this,x),ea(this,z),ea(this,i,0),ea(this,j,null),ea(this,k,null),ea(this,l,void 0),this.breakpointsComputed=!1,ea(this,m,new MutationObserver(ec(this,n,o).bind(this))),ea(this,p,!1),ea(this,q,a=>{d9(this,p)||(setTimeout(()=>{!function(a){ef(a.target,a.contentRect.width)}(a),eb(this,p,!1)},0),eb(this,p,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}let a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{if(!a.assignedElements({flatten:!0}).length){d9(this,j)&&this.mediaUnsetCallback(d9(this,j));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[ed.AUTOHIDE,ed.GESTURES_DISABLED].concat(ee).filter(a=>![c9.MEDIA_RENDITION_LIST,c9.MEDIA_AUDIO_TRACK_LIST,c9.MEDIA_CHAPTERS_CUES,c9.MEDIA_WIDTH,c9.MEDIA_HEIGHT,c9.MEDIA_ERROR,c9.MEDIA_ERROR_MESSAGE].includes(a))}attributeChangedCallback(a,b,c){a.toLowerCase()==ed.AUTOHIDE&&(this.autohide=c)}get media(){let a=this.querySelector(":scope > [slot=media]");return(null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a}async handleMediaUpdated(a){a&&(eb(this,j,a),a.localName.includes("-")&&await dH.customElements.whenDefined(a.localName),this.mediaSetCallback(a))}connectedCallback(){var a;d9(this,m).observe(this,{childList:!0,subtree:!0}),dM(this,d9(this,q));let b=null!=this.getAttribute(ed.AUDIO)?dA("audio player"):dA("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",b),this.handleMediaUpdated(this.media),this.setAttribute(ed.USER_INACTIVE,""),ef(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(a=dH.window)||a.addEventListener("mouseup",this)}disconnectedCallback(){var a;d9(this,m).disconnect(),dN(this,d9(this,q)),this.media&&this.mediaUnsetCallback(this.media),null==(a=dH.window)||a.removeEventListener("mouseup",this)}mediaSetCallback(a){}mediaUnsetCallback(a){eb(this,j,null)}handleEvent(a){switch(a.type){case"pointerdown":eb(this,i,a.timeStamp);break;case"pointermove":ec(this,r,s).call(this,a);break;case"pointerup":ec(this,t,u).call(this,a);break;case"mouseleave":ec(this,v,w).call(this);break;case"mouseup":this.removeAttribute(ed.KEYBOARD_CONTROL);break;case"keyup":ec(this,z,A).call(this),this.setAttribute(ed.KEYBOARD_CONTROL,"")}}set autohide(a){let b=Number(a);eb(this,l,isNaN(b)?0:b)}get autohide(){return(void 0===d9(this,l)?2:d9(this,l)).toString()}get breakpoints(){return d2(this,ed.BREAKPOINTS)}set breakpoints(a){d3(this,ed.BREAKPOINTS,a)}get audio(){return d0(this,ed.AUDIO)}set audio(a){d1(this,ed.AUDIO,a)}get gesturesDisabled(){return d0(this,ed.GESTURES_DISABLED)}set gesturesDisabled(a){d1(this,ed.GESTURES_DISABLED,a)}get keyboardControl(){return d0(this,ed.KEYBOARD_CONTROL)}set keyboardControl(a){d1(this,ed.KEYBOARD_CONTROL,a)}get noAutohide(){return d0(this,ed.NO_AUTOHIDE)}set noAutohide(a){d1(this,ed.NO_AUTOHIDE,a)}get autohideOverControls(){return d0(this,ed.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(a){d1(this,ed.AUTOHIDE_OVER_CONTROLS,a)}get userInteractive(){return d0(this,ed.USER_INACTIVE)}set userInteractive(a){d1(this,ed.USER_INACTIVE,a)}}i=new WeakMap,j=new WeakMap,k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakSet,o=function(a){let b=this.media;for(let c of a)if("childList"===c.type){for(let a of c.removedNodes){if("media"!=a.slot||c.target!=this)continue;let d=c.previousSibling&&c.previousSibling.previousElementSibling;if(d&&b){let b="media"!==d.slot;for(;null!==(d=d.previousSibling);)"media"==d.slot&&(b=!1);b&&this.mediaUnsetCallback(a)}else this.mediaUnsetCallback(a)}if(b)for(let a of c.addedNodes)a===b&&this.handleMediaUpdated(b)}},p=new WeakMap,q=new WeakMap,r=new WeakSet,s=function(a){if("mouse"!==a.pointerType&&a.timeStamp-d9(this,i)<250)return;ec(this,x,y).call(this),clearTimeout(d9(this,k));let b=this.hasAttribute(ed.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(a.target)||b)&&ec(this,z,A).call(this)},t=new WeakSet,u=function(a){if("touch"===a.pointerType){let b=!this.hasAttribute(ed.USER_INACTIVE);[this,this.media].includes(a.target)&&b?ec(this,v,w).call(this):ec(this,z,A).call(this)}else a.composedPath().some(a=>["media-play-button","media-fullscreen-button"].includes(null==a?void 0:a.localName))&&ec(this,z,A).call(this)},v=new WeakSet,w=function(){if(0>d9(this,l)||this.hasAttribute(ed.USER_INACTIVE))return;this.setAttribute(ed.USER_INACTIVE,"");let a=new dH.CustomEvent(da.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(a)},x=new WeakSet,y=function(){if(!this.hasAttribute(ed.USER_INACTIVE))return;this.removeAttribute(ed.USER_INACTIVE);let a=new dH.CustomEvent(da.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(a)},z=new WeakSet,A=function(){ec(this,x,y).call(this),clearTimeout(d9(this,k));let a=parseInt(this.autohide);a<0||eb(this,k,setTimeout(()=>{ec(this,v,w).call(this)},1e3*a))},eg.shadowRootOptions={mode:"open"},eg.getTemplateHTML=function(a){return`
    <style>
      
      :host([${c9.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${ed.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
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

      
      :host([${ed.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${ed.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${ed.AUDIO}])[${ed.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${ed.AUDIO}])[${ed.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${ed.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${ed.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${ed.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
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

      
      :host(:not([${ed.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${ed.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${ed.USER_INACTIVE}]:not([${c9.MEDIA_PAUSED}]):not([${c9.MEDIA_IS_AIRPLAYING}]):not([${c9.MEDIA_IS_CASTING}]):not([${ed.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${ed.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${ed.USER_INACTIVE}]:not([${ed.NO_AUTOHIDE}]):not([${c9.MEDIA_PAUSED}]):not([${c9.MEDIA_IS_CASTING}]):not([${ed.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${ed.USER_INACTIVE}][${ed.AUTOHIDE_OVER_CONTROLS}]:not([${ed.NO_AUTOHIDE}]):not([${c9.MEDIA_PAUSED}]):not([${c9.MEDIA_IS_CASTING}]):not([${ed.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${ed.AUDIO}])[${c9.MEDIA_HAS_PLAYED}]) slot[name=poster] {
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
        <template shadowrootmode="${d7.shadowRootOptions.mode}">
          ${d7.getTemplateHTML({})}
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
  `},dH.customElements.get("media-container")||dH.customElements.define("media-container",eg);var eh=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ei=(a,b,c)=>(eh(a,b,"read from private field"),c?c.call(a):b.get(a)),ej=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ek=(a,b,c,d)=>(eh(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class el{constructor(a,b,{defaultValue:c}={defaultValue:void 0}){ej(this,F),ej(this,B,void 0),ej(this,C,void 0),ej(this,D,void 0),ej(this,E,new Set),ek(this,B,a),ek(this,C,b),ek(this,D,new Set(c))}[Symbol.iterator](){return ei(this,F,G).values()}get length(){return ei(this,F,G).size}get value(){var a;return null!=(a=[...ei(this,F,G)].join(" "))?a:""}set value(a){var b;a!==this.value&&(ek(this,E,new Set),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return[...ei(this,F,G)][a]}values(){return ei(this,F,G).values()}forEach(a,b){ei(this,F,G).forEach(a,b)}add(...a){var b,c;a.forEach(a=>ei(this,E).add(a)),(""!==this.value||(null==(b=ei(this,B))?void 0:b.hasAttribute(`${ei(this,C)}`)))&&(null==(c=ei(this,B))||c.setAttribute(`${ei(this,C)}`,`${this.value}`))}remove(...a){var b;a.forEach(a=>ei(this,E).delete(a)),null==(b=ei(this,B))||b.setAttribute(`${ei(this,C)}`,`${this.value}`)}contains(a){return ei(this,F,G).has(a)}toggle(a,b){if(void 0!==b)if(b)return this.add(a),!0;else return this.remove(a),!1;return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){return this.remove(a),this.add(b),a===b}}B=new WeakMap,C=new WeakMap,D=new WeakMap,E=new WeakMap,F=new WeakSet,G=function(){return ei(this,E).size?ei(this,E):ei(this,D)};let em=(a="")=>{let[b,c,d]=a.split(":"),e=d?decodeURIComponent(d):void 0;return{kind:"cc"===b?dd.CAPTIONS:dd.SUBTITLES,language:c,label:e}},en=(a="",b={})=>((a="")=>a.split(/\s+/))(a).map(a=>{let c=em(a);return{...b,...c}}),eo=a=>a?Array.isArray(a)?a.map(a=>"string"==typeof a?em(a):a):"string"==typeof a?en(a):[a]:[],ep=({kind:a,label:b,language:c}={kind:"subtitles"})=>b?`${"captions"===a?"cc":"sb"}:${c}:${encodeURIComponent(b)}`:c,eq=(a=[])=>Array.prototype.map.call(a,ep).join(" "),er=a=>{let b=Object.entries(a).map(([a,b])=>c=>c[a]===b);return a=>b.every(b=>b(a))},es=(a,b=[],c=[])=>{let d=eo(c).map(er);Array.from(b).filter(a=>d.some(b=>b(a))).forEach(b=>{b.mode=a})},et=(a,b=()=>!0)=>{if(!(null==a?void 0:a.textTracks))return[];let c="function"==typeof b?b:er(b);return Array.from(a.textTracks).filter(c)},eu=a=>{var b;return!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)||a.hasAttribute(c9.MEDIA_SUBTITLES_SHOWING)},ev="exitFullscreen"in dI?"exitFullscreen":"webkitExitFullscreen"in dI?"webkitExitFullscreen":"webkitCancelFullScreen"in dI?"webkitCancelFullScreen":void 0,ew="fullscreenElement"in dI?"fullscreenElement":"webkitFullscreenElement"in dI?"webkitFullscreenElement":void 0,ex="fullscreenEnabled"in dI?"fullscreenEnabled":"webkitFullscreenEnabled"in dI?"webkitFullscreenEnabled":void 0,ey=()=>{var a;return b||(b=null==(a=null==dI?void 0:dI.createElement)?void 0:a.call(dI,"video"))},ez=async(a=ey())=>{if(!a)return!1;let b=a.volume;a.volume=b/2+.1;let c=new AbortController,d=await Promise.race([eA(a,c.signal),eB(a,b)]);return c.abort(),d},eA=(a,b)=>new Promise(c=>{a.addEventListener("volumechange",()=>c(!0),{signal:b})}),eB=async(a,b)=>{for(let c=0;c<10;c++){if(a.volume===b)return!1;await ds(10)}return a.volume!==b},eC=/.*Version\/.*Safari\/.*/.test(dH.navigator.userAgent),eD=(a=ey())=>(!dH.matchMedia("(display-mode: standalone)").matches||!eC)&&"function"==typeof(null==a?void 0:a.requestPictureInPicture),eE=(a=ey())=>(a=>{let{documentElement:b,media:c}=a;return!!(null==b?void 0:b[ex])||c&&"webkitSupportsFullscreen"in c})({documentElement:dI,media:a}),eF=eE(),eG=eD(),eH=!!dH.WebKitPlaybackTargetAvailabilityEvent,eI=!!dH.chrome,eJ=a=>et(a.media,a=>[dd.SUBTITLES,dd.CAPTIONS].includes(a.kind)).sort((a,b)=>a.kind>=b.kind?1:-1),eK=a=>et(a.media,a=>a.mode===de.SHOWING&&[dd.SUBTITLES,dd.CAPTIONS].includes(a.kind)),eL=(a,b)=>{let c=eJ(a),d=eK(a),e=!!d.length;if(c.length){if(!1===b||e&&!0!==b)es(de.DISABLED,c,d);else if(!0===b||!e&&!1!==b){let b=c[0],{options:e}=a;if(!(null==e?void 0:e.noSubtitlesLangPref)){let a=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=a?[a,...globalThis.navigator.languages]:globalThis.navigator.languages,e=c.filter(a=>d.some(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))).sort((a,b)=>d.findIndex(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(a=>b.language.toLowerCase().startsWith(a.split("-")[0])));e[0]&&(b=e[0])}let{language:f,label:g,kind:h}=b;es(de.DISABLED,c,d),es(de.SHOWING,c,[{language:f,label:g,kind:h}])}}},eM=(a,b)=>a===b||null!=a&&null!=b&&typeof a==typeof b&&(!!("number"==typeof a&&Number.isNaN(a)&&Number.isNaN(b))||"object"==typeof a&&(Array.isArray(a)?eN(a,b):Object.entries(a).every(([a,c])=>a in b&&eM(c,b[a])))),eN=(a,b)=>{let c=Array.isArray(a),d=Array.isArray(b);return c===d&&(!c&&!d||a.length===b.length&&a.every((a,c)=>eM(a,b[c])))},eO=Object.values(di),eP=ez().then(a=>c=a),eQ=async(...a)=>{await Promise.all(a.filter(a=>a).map(async a=>{if(!("localName"in a&&a instanceof dH.HTMLElement))return;let b=a.localName;if(!b.includes("-"))return;let c=dH.customElements.get(b);c&&a instanceof c||(await dH.customElements.whenDefined(b),dH.customElements.upgrade(a))}))},eR=new dH.DOMParser,eS={mediaError:{get(a,b){let{media:c}=a;if((null==b?void 0:b.type)!=="playing")return null==c?void 0:c.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(a,b){var c;let{media:d}=a;if((null==b?void 0:b.type)!=="playing")return null==(c=null==d?void 0:d.error)?void 0:c.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(a,b){var c,d;let{media:e}=a;if((null==b?void 0:b.type)!=="playing")return null!=(d=null==(c=null==e?void 0:e.error)?void 0:c.message)?d:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoWidth)?b:0},mediaEvents:["resize"]},mediaHeight:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoHeight)?b:0},mediaEvents:["resize"]},mediaPaused:{get(a){var b;let{media:c}=a;return null==(b=null==c?void 0:c.paused)||b},set(a,b){var c;let{media:d}=b;d&&(a?d.pause():null==(c=d.play())||c.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(a,b){let{media:c}=a;return!!c&&(b?"playing"===b.type:!c.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.ended)&&b},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.playbackRate)?b:1},set(a,b){let{media:c}=b;c&&Number.isFinite(+a)&&(c.playbackRate=+a)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.muted)&&b},set(a,b){let{media:c}=b;if(c){try{dH.localStorage.setItem("media-chrome-pref-muted",a?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}c.muted=a}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noMutedPref:c}}=b,{media:d}=b;if(d&&!d.muted&&!c)try{let c="true"===dH.localStorage.getItem("media-chrome-pref-muted");eS.mediaMuted.set(c,b),a(c)}catch(a){console.debug("Error getting muted pref",a)}}]},mediaVolume:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.volume)?b:1},set(a,b){let{media:c}=b;if(c){try{null==a?dH.localStorage.removeItem("media-chrome-pref-volume"):dH.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+a)&&(c.volume=+a)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noVolumePref:c}}=b;if(!c)try{let{media:c}=b;if(!c)return;let d=dH.localStorage.getItem("media-chrome-pref-volume");if(null==d)return;eS.mediaVolume.set(+d,b),a(+d)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(a){let{media:b}=a;return void 0===(null==b?void 0:b.volume)?"high":b.muted||0===b.volume?"off":b.volume<.5?"low":b.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.currentTime)?b:0},set(a,b){let{media:c}=b;c&&dq(a)&&(c.currentTime=a)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(a){let{media:b,options:{defaultDuration:c}={}}=a;return c&&(!b||!b.duration||Number.isNaN(b.duration)||!Number.isFinite(b.duration))?c:Number.isFinite(null==b?void 0:b.duration)?b.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(a){let{media:b}=a;return(null==b?void 0:b.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(a){var b;let{media:c}=a;if(!(null==(b=null==c?void 0:c.seekable)?void 0:b.length))return;let d=c.seekable.start(0),e=c.seekable.end(c.seekable.length-1);if(d||e)return[Number(d.toFixed(3)),Number(e.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(a){var b;let{media:c}=a,d=null!=(b=null==c?void 0:c.buffered)?b:[];return Array.from(d).map((a,b)=>[Number(d.start(b).toFixed(3)),Number(d.end(b).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(a){let{media:b,options:{defaultStreamType:c}={}}=a,d=[di.LIVE,di.ON_DEMAND].includes(c)?c:void 0;if(!b)return d;let{streamType:e}=b;if(eO.includes(e))return e===di.UNKNOWN?d:e;let f=b.duration;return f===1/0?di.LIVE:Number.isFinite(f)?di.ON_DEMAND:d},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(a){let{media:b}=a;if(!b)return NaN;let{targetLiveWindow:c}=b,d=eS.mediaStreamType.get(a);return(null==c||Number.isNaN(c))&&d===di.LIVE?0:c},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(a){let{media:b,options:{liveEdgeOffset:c=10}={}}=a;if(!b)return!1;if("number"==typeof b.liveEdgeStart)return!Number.isNaN(b.liveEdgeStart)&&b.currentTime>=b.liveEdgeStart;if(eS.mediaStreamType.get(a)!==di.LIVE)return!1;let d=b.seekable;if(!d)return!0;if(!d.length)return!1;let e=d.end(d.length-1)-c;return b.currentTime>=e},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:a=>eJ(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:a=>eK(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c,d;let{media:e,options:f}=b;if(!e)return;let g=a=>{var c;f.defaultSubtitles&&(a&&![dd.CAPTIONS,dd.SUBTITLES].includes(null==(c=null==a?void 0:a.track)?void 0:c.kind)||eL(b,!0))};return e.addEventListener("loadstart",g),null==(c=e.textTracks)||c.addEventListener("addtrack",g),null==(d=e.textTracks)||d.addEventListener("removetrack",g),()=>{var a,b;e.removeEventListener("loadstart",g),null==(a=e.textTracks)||a.removeEventListener("addtrack",g),null==(b=e.textTracks)||b.removeEventListener("removetrack",g)}}]},mediaChaptersCues:{get(a){var b;let{media:c}=a;if(!c)return[];let[d]=et(c,{kind:dd.CHAPTERS});return Array.from(null!=(b=null==d?void 0:d.cues)?b:[]).map(({text:a,startTime:b,endTime:c})=>({text:a&&eR.parseFromString(a,"text/html").body.textContent||a,startTime:b,endTime:c}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(!d)return;let e=d.querySelector('track[kind="chapters"][default][src]'),f=null==(c=d.shadowRoot)?void 0:c.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==e||e.addEventListener("load",a),null==f||f.addEventListener("load",a),()=>{null==e||e.removeEventListener("load",a),null==f||f.removeEventListener("load",a)}}]},mediaIsPip:{get(a){var b,c;let{media:d,documentElement:e}=a;if(!d||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===d)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(b=d.localName)?void 0:b.includes("-"))&&dT(d,e.pictureInPictureElement);if(e.pictureInPictureElement.localName.includes("-")){let a=e.pictureInPictureElement.shadowRoot;for(;null==a?void 0:a.pictureInPictureElement;){if(a.pictureInPictureElement===d)return!0;a=null==(c=a.pictureInPictureElement)?void 0:c.shadowRoot}}return!1},set(a,b){let{media:c}=b;if(c)if(a){if(!dI.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!c.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};c.requestPictureInPicture().catch(b=>{if(11===b.code){if(!c.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===c.readyState&&"none"===c.preload){let b=()=>{c.removeEventListener("loadedmetadata",d),c.preload="none"},d=()=>{c.requestPictureInPicture().catch(a),b()};c.addEventListener("loadedmetadata",d),c.preload="metadata",setTimeout(()=>{0===c.readyState&&a(),b()},1e3)}else throw b}else throw b})}else dI.pictureInPictureElement&&dI.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.videoRenditions)?b:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(a){var b,c,d;let{media:e}=a;return null==(d=null==(c=null==e?void 0:e.videoRenditions)?void 0:c[null==(b=e.videoRenditions)?void 0:b.selectedIndex])?void 0:d.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let d=Array.prototype.findIndex.call(c.videoRenditions,b=>b.id==a);c.videoRenditions.selectedIndex!=d&&(c.videoRenditions.selectedIndex=d)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.audioTracks)?b:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(a){var b,c;let{media:d}=a;return null==(c=[...null!=(b=null==d?void 0:d.audioTracks)?b:[]].find(a=>a.enabled))?void 0:c.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let b of c.audioTracks)b.enabled=a==b.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:a=>(a=>{var b;let{media:c,documentElement:d,fullscreenElement:e=c}=a;if(!c||!d)return!1;let f=(a=>{let{documentElement:b,media:c}=a,d=null==b?void 0:b[ew];return!d&&"webkitDisplayingFullscreen"in c&&"webkitPresentationMode"in c&&c.webkitDisplayingFullscreen&&c.webkitPresentationMode===dk.FULLSCREEN?c:d})(a);if(!f)return!1;if(f===e||f===c)return!0;if(f.localName.includes("-")){let a=f.shadowRoot;if(!(ew in a))return dT(f,e);for(;null==a?void 0:a[ew];){if(a[ew]===e)return!0;a=null==(b=a[ew])?void 0:b.shadowRoot}}return!1})(a),set(a,b){a?(a=>{var b;let{media:c,fullscreenElement:d}=a;try{let a=d&&"requestFullscreen"in d?"requestFullscreen":d&&"webkitRequestFullScreen"in d?"webkitRequestFullScreen":void 0;if(a){let c=null==(b=d[a])?void 0:b.call(d);if(c instanceof Promise)return c.catch(()=>{})}else(null==c?void 0:c.webkitEnterFullscreen)?c.webkitEnterFullscreen():(null==c?void 0:c.requestFullscreen)&&c.requestFullscreen()}catch(a){console.error(a)}})(b):(a=>{var b;let{documentElement:c}=a;if(ev){let a=null==(b=null==c?void 0:c[ev])?void 0:b.call(c);if(a instanceof Promise)return a.catch(()=>{})}})(b)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(a){var b;let{media:c}=a;return!!(null==c?void 0:c.remote)&&(null==(b=c.remote)?void 0:b.state)!=="disconnected"&&!!c.remote.state},set(a,b){var c,d;let{media:e}=b;if(e&&(!a||(null==(c=e.remote)?void 0:c.state)==="disconnected")&&(a||(null==(d=e.remote)?void 0:d.state)==="connected")){if("function"!=typeof e.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(a,b){let{media:c}=b;if(c){if(!(c.webkitShowPlaybackTargetPicker&&dH.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");c.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(a){let{media:b}=a;if(!eF||!eE(b))return dh.UNSUPPORTED}},mediaPipUnavailable:{get(a){let{media:b}=a;if(!eG||!eD(b))return dh.UNSUPPORTED}},mediaVolumeUnavailable:{get(a){let{media:b}=a;if(!1===c||(null==b?void 0:b.volume)==void 0)return dh.UNSUPPORTED},stateOwnersUpdateHandlers:[a=>{null==c&&eP.then(b=>a(b?void 0:dh.UNSUPPORTED))}]},mediaCastUnavailable:{get(a,{availability:b="not-available"}={}){var c;let{media:d}=a;return eI&&(null==(c=null==d?void 0:d.remote)?void 0:c.state)?null!=b&&"available"!==b?dh.UNAVAILABLE:void 0:dh.UNSUPPORTED},stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(a,b)=>eH?(null==b?void 0:b.availability)==="not-available"?dh.UNAVAILABLE:void 0:dh.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(a){var b;let{media:c}=a;return(null==c?void 0:c.videoRenditions)?(null==(b=c.videoRenditions)?void 0:b.length)?void 0:dh.UNAVAILABLE:dh.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(a){var b,c;let{media:d}=a;return(null==d?void 0:d.audioTracks)?(null!=(c=null==(b=d.audioTracks)?void 0:b.length)?c:0)<=1?dh.UNAVAILABLE:void 0:dh.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},eT={[c5.MEDIA_PREVIEW_REQUEST](a,b,{detail:c}){var d,e,f;let g,h,{media:i}=b,j=null!=c?c:void 0;if(i&&null!=j){let[a]=et(i,{kind:dd.METADATA,label:"thumbnails"}),b=Array.prototype.find.call(null!=(d=null==a?void 0:a.cues)?d:[],(a,b,c)=>0===b?a.endTime>j:b===c.length-1?a.startTime<=j:a.startTime<=j&&a.endTime>j);if(b){let a=/'^(?:[a-z]+:)?\/\//i.test(b.text)||null==(e=null==i?void 0:i.querySelector('track[label="thumbnails"]'))?void 0:e.src,c=new URL(b.text,a);h=new URLSearchParams(c.hash).get("#xywh").split(",").map(a=>+a),g=c.href}}let k=a.mediaDuration.get(b),l=null==(f=a.mediaChaptersCues.get(b).find((a,b,c)=>b===c.length-1&&k===a.endTime?a.startTime<=j&&a.endTime>=j:a.startTime<=j&&a.endTime>j))?void 0:f.text;return null!=c&&null==l&&(l=""),{mediaPreviewTime:j,mediaPreviewImage:g,mediaPreviewCoords:h,mediaPreviewChapter:l}},[c5.MEDIA_PAUSE_REQUEST](a,b){a.mediaPaused.set(!0,b)},[c5.MEDIA_PLAY_REQUEST](a,b){var c,d,e,f;let g=a.mediaStreamType.get(b)===di.LIVE,h=!(null==(c=b.options)?void 0:c.noAutoSeekToLive),i=a.mediaTargetLiveWindow.get(b)>0;if(g&&h&&!i){let c=null==(d=a.mediaSeekable.get(b))?void 0:d[1];if(c){let d=null!=(f=null==(e=b.options)?void 0:e.seekToLiveOffset)?f:0;a.mediaCurrentTime.set(c-d,b)}}a.mediaPaused.set(!1,b)},[c5.MEDIA_PLAYBACK_RATE_REQUEST](a,b,{detail:c}){a.mediaPlaybackRate.set(c,b)},[c5.MEDIA_MUTE_REQUEST](a,b){a.mediaMuted.set(!0,b)},[c5.MEDIA_UNMUTE_REQUEST](a,b){a.mediaVolume.get(b)||a.mediaVolume.set(.25,b),a.mediaMuted.set(!1,b)},[c5.MEDIA_VOLUME_REQUEST](a,b,{detail:c}){c&&a.mediaMuted.get(b)&&a.mediaMuted.set(!1,b),a.mediaVolume.set(c,b)},[c5.MEDIA_SEEK_REQUEST](a,b,{detail:c}){a.mediaCurrentTime.set(c,b)},[c5.MEDIA_SEEK_TO_LIVE_REQUEST](a,b){var c,d,e;let f=null==(c=a.mediaSeekable.get(b))?void 0:c[1];if(Number.isNaN(Number(f)))return;let g=null!=(e=null==(d=b.options)?void 0:d.seekToLiveOffset)?e:0;a.mediaCurrentTime.set(f-g,b)},[c5.MEDIA_SHOW_SUBTITLES_REQUEST](a,b,{detail:c}){var d;let{options:e}=b,f=eJ(b),g=eo(c),h=null==(d=g[0])?void 0:d.language;h&&!e.noSubtitlesLangPref&&dH.localStorage.setItem("media-chrome-pref-subtitles-lang",h),es(de.SHOWING,f,g)},[c5.MEDIA_DISABLE_SUBTITLES_REQUEST](a,b,{detail:c}){let d=eJ(b);es(de.DISABLED,d,null!=c?c:[])},[c5.MEDIA_TOGGLE_SUBTITLES_REQUEST](a,b,{detail:c}){eL(b,c)},[c5.MEDIA_RENDITION_REQUEST](a,b,{detail:c}){a.mediaRenditionSelected.set(c,b)},[c5.MEDIA_AUDIO_TRACK_REQUEST](a,b,{detail:c}){a.mediaAudioTrackEnabled.set(c,b)},[c5.MEDIA_ENTER_PIP_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsPip.set(!0,b)},[c5.MEDIA_EXIT_PIP_REQUEST](a,b){a.mediaIsPip.set(!1,b)},[c5.MEDIA_ENTER_FULLSCREEN_REQUEST](a,b){a.mediaIsPip.get(b)&&a.mediaIsPip.set(!1,b),a.mediaIsFullscreen.set(!0,b)},[c5.MEDIA_EXIT_FULLSCREEN_REQUEST](a,b){a.mediaIsFullscreen.set(!1,b)},[c5.MEDIA_ENTER_CAST_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsCasting.set(!0,b)},[c5.MEDIA_EXIT_CAST_REQUEST](a,b){a.mediaIsCasting.set(!1,b)},[c5.MEDIA_AIRPLAY_REQUEST](a,b){a.mediaIsAirplaying.set(!0,b)}};var eU=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},eV=(a,b,c)=>(eU(a,b,"read from private field"),c?c.call(a):b.get(a)),eW=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},eX=(a,b,c,d)=>(eU(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),eY=(a,b,c)=>(eU(a,b,"access private method"),c);let eZ=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],e$={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};H=new WeakMap,I=new WeakMap,J=new WeakMap,K=new WeakMap,L=new WeakMap,M=new WeakMap,N=new WeakSet,O=function(){var a;this.mediaStore=(({media:a,fullscreenElement:b,documentElement:c,stateMediator:d=eS,requestMap:e=eT,options:f={},monitorStateOwnersOnlyWithSubscriptions:g=!0})=>{let h,i=[],j={options:{...f}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),l=a=>{void 0!=a&&(eM(a,k)||(k=Object.freeze({...k,...a}),i.forEach(a=>a(k))))},m=()=>{l(Object.entries(d).reduce((a,[b,{get:c}])=>(a[b]=c(j),a),{}))},n={},o=async(a,b)=>{var c,e,f,k,o,p,q,r,s,t,u,v,w,x,y,z;let A=!!h;if(h={...j,...null!=h?h:{},...a},A)return;await eQ(...Object.values(a));let B=i.length>0&&0===b&&g,C=j.media!==h.media,D=(null==(c=j.media)?void 0:c.textTracks)!==(null==(e=h.media)?void 0:e.textTracks),E=(null==(f=j.media)?void 0:f.videoRenditions)!==(null==(k=h.media)?void 0:k.videoRenditions),F=(null==(o=j.media)?void 0:o.audioTracks)!==(null==(p=h.media)?void 0:p.audioTracks),G=(null==(q=j.media)?void 0:q.remote)!==(null==(r=h.media)?void 0:r.remote),H=j.documentElement!==h.documentElement,I=!!j.media&&(C||B),J=!!(null==(s=j.media)?void 0:s.textTracks)&&(D||B),K=!!(null==(t=j.media)?void 0:t.videoRenditions)&&(E||B),L=!!(null==(u=j.media)?void 0:u.audioTracks)&&(F||B),M=!!(null==(v=j.media)?void 0:v.remote)&&(G||B),N=!!j.documentElement&&(H||B),O=I||J||K||L||M||N,P=0===i.length&&1===b&&g,Q=!!h.media&&(C||P),R=!!(null==(w=h.media)?void 0:w.textTracks)&&(D||P),S=!!(null==(x=h.media)?void 0:x.videoRenditions)&&(E||P),T=!!(null==(y=h.media)?void 0:y.audioTracks)&&(F||P),U=!!(null==(z=h.media)?void 0:z.remote)&&(G||P),V=!!h.documentElement&&(H||P),W=Q||R||S||T||U||V;if(!(O||W)){Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0;return}Object.entries(d).forEach(([a,{get:b,mediaEvents:c=[],textTracksEvents:d=[],videoRenditionsEvents:e=[],audioTracksEvents:f=[],remoteEvents:g=[],rootEvents:i=[],stateOwnersUpdateHandlers:k=[]}])=>{let m;n[a]||(n[a]={});let o=c=>{l({[a]:b(j,c)})};m=n[a].mediaEvents,c.forEach(b=>{m&&I&&(j.media.removeEventListener(b,m),n[a].mediaEvents=void 0),Q&&(h.media.addEventListener(b,o),n[a].mediaEvents=o)}),m=n[a].textTracksEvents,d.forEach(b=>{var c,d;m&&J&&(null==(c=j.media.textTracks)||c.removeEventListener(b,m),n[a].textTracksEvents=void 0),R&&(null==(d=h.media.textTracks)||d.addEventListener(b,o),n[a].textTracksEvents=o)}),m=n[a].videoRenditionsEvents,e.forEach(b=>{var c,d;m&&K&&(null==(c=j.media.videoRenditions)||c.removeEventListener(b,m),n[a].videoRenditionsEvents=void 0),S&&(null==(d=h.media.videoRenditions)||d.addEventListener(b,o),n[a].videoRenditionsEvents=o)}),m=n[a].audioTracksEvents,f.forEach(b=>{var c,d;m&&L&&(null==(c=j.media.audioTracks)||c.removeEventListener(b,m),n[a].audioTracksEvents=void 0),T&&(null==(d=h.media.audioTracks)||d.addEventListener(b,o),n[a].audioTracksEvents=o)}),m=n[a].remoteEvents,g.forEach(b=>{var c,d;m&&M&&(null==(c=j.media.remote)||c.removeEventListener(b,m),n[a].remoteEvents=void 0),U&&(null==(d=h.media.remote)||d.addEventListener(b,o),n[a].remoteEvents=o)}),m=n[a].rootEvents,i.forEach(b=>{m&&N&&(j.documentElement.removeEventListener(b,m),n[a].rootEvents=void 0),V&&(h.documentElement.addEventListener(b,o),n[a].rootEvents=o)});let p=n[a].stateOwnersUpdateHandlers;k.forEach(b=>{p&&O&&p(),W&&(n[a].stateOwnersUpdateHandlers=b(o,h))})}),Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0};return o({media:a,fullscreenElement:b,documentElement:c,options:f}),{dispatch(a){let{type:b,detail:c}=a;if(e[b]&&null==k.mediaErrorCode)return void l(e[b](d,j,a));"mediaelementchangerequest"===b?o({media:c}):"fullscreenelementchangerequest"===b?o({fullscreenElement:c}):"documentelementchangerequest"===b?o({documentElement:c}):"optionschangerequest"===b&&Object.entries(null!=c?c:{}).forEach(([a,b])=>{j.options[a]=b})},getState:()=>k,subscribe:a=>(o({},i.length+1),i.push(a),a(k),()=>{let b=i.indexOf(a);b>=0&&(o({},i.length-1),i.splice(b,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(e$.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(e$.DEFAULT_DURATION)?+this.getAttribute(e$.DEFAULT_DURATION):void 0,defaultStreamType:null!=(a=this.getAttribute(e$.DEFAULT_STREAM_TYPE))?a:void 0,liveEdgeOffset:this.hasAttribute(e$.LIVE_EDGE_OFFSET)?+this.getAttribute(e$.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(e$.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(e$.SEEK_TO_LIVE_OFFSET):this.hasAttribute(e$.LIVE_EDGE_OFFSET)?+this.getAttribute(e$.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(e$.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(e$.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(e$.NO_SUBTITLES_LANG_PREF)}})},P=new WeakSet,Q=function(a){let{key:b}=a;if(!eZ.includes(b))return void this.removeEventListener("keyup",eY(this,P,Q));this.keyboardShortcutHandler(a)},R=new WeakSet,S=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!eZ.includes(d))return void this.removeEventListener("keyup",eY(this,P,Q));[" ","ArrowLeft","ArrowRight"].includes(d)&&!(eV(this,H).contains(`no${d.toLowerCase()}`)||" "===d&&eV(this,H).contains("nospace"))&&a.preventDefault(),this.addEventListener("keyup",eY(this,P,Q),{once:!0})};let e_=Object.values(c9),e0=Object.values(c7),e1=a=>{var b,c,d,e;let{observedAttributes:f}=a.constructor;!f&&(null==(b=a.nodeName)?void 0:b.includes("-"))&&(dH.customElements.upgrade(a),{observedAttributes:f}=a.constructor);let g=null==(e=null==(d=null==(c=null==a?void 0:a.getAttribute)?void 0:c.call(a,c6.MEDIA_CHROME_ATTRIBUTES))?void 0:d.split)?void 0:e.call(d,/\s+/);return Array.isArray(f||g)?(f||g).filter(a=>e_.includes(a)):[]},e2=a=>(a=>{var b,c;return(null==(b=a.nodeName)?void 0:b.includes("-"))&&dH.customElements.get(null==(c=a.nodeName)?void 0:c.toLowerCase())&&!(a instanceof dH.customElements.get(a.nodeName.toLowerCase()))&&dH.customElements.upgrade(a),e0.some(b=>b in a)})(a)||!!e1(a).length,e3=a=>{var b;return null==(b=null==a?void 0:a.join)?void 0:b.call(a,":")},e4={[c9.MEDIA_SUBTITLES_LIST]:eq,[c9.MEDIA_SUBTITLES_SHOWING]:eq,[c9.MEDIA_SEEKABLE]:e3,[c9.MEDIA_BUFFERED]:a=>null==a?void 0:a.map(e3).join(" "),[c9.MEDIA_PREVIEW_COORDS]:a=>null==a?void 0:a.join(" "),[c9.MEDIA_RENDITION_LIST]:function(a){return null==a?void 0:a.map(dl).join(" ")},[c9.MEDIA_AUDIO_TRACK_LIST]:function(a){return null==a?void 0:a.map(dn).join(" ")}},e5=async(a,b,c)=>{var d,e;if(a.isConnected||await ds(0),"boolean"==typeof c||null==c)return d1(a,b,c);if("number"==typeof c)return d_(a,b,c);if("string"==typeof c)return d3(a,b,c);if(Array.isArray(c)&&!c.length)return a.removeAttribute(b);let f=null!=(e=null==(d=e4[b])?void 0:d.call(e4,c))?e:c;return a.setAttribute(b,f)},e6=(a,b)=>{if((a=>{var b;return!!(null==(b=a.closest)?void 0:b.call(a,'*[slot="media"]'))})(a))return;let c=(a,b)=>{var c,d;e2(a)&&b(a);let{children:e=[]}=null!=a?a:{};[...e,...null!=(d=null==(c=null==a?void 0:a.shadowRoot)?void 0:c.children)?d:[]].forEach(a=>e6(a,b))},d=null==a?void 0:a.nodeName.toLowerCase();if(d.includes("-")&&!e2(a))return void dH.customElements.whenDefined(d).then(()=>{c(a,b)});c(a,b)},e7=(a,b,c)=>{a.forEach(a=>{if(b in a){a[b]=c;return}let d=e1(a),e=b.toLowerCase();d.includes(e)&&e5(a,e,c)})};dH.customElements.get("media-controller")||dH.customElements.define("media-controller",class extends eg{constructor(){super(),eW(this,N),eW(this,P),eW(this,R),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,eW(this,H,new el(this,e$.HOTKEYS)),eW(this,I,void 0),eW(this,J,void 0),eW(this,K,void 0),eW(this,L,void 0),eW(this,M,a=>{var b;null==(b=eV(this,J))||b.dispatch(a)}),this.associateElement(this);let a={};eX(this,K,b=>{Object.entries(b).forEach(([b,c])=>{if(b in a&&a[b]===c)return;this.propagateMediaState(b,c);let d=b.toLowerCase(),e=new dH.CustomEvent(dc[d],{composed:!0,detail:c});this.dispatchEvent(e)}),a=b}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(e$.NO_HOTKEYS,e$.HOTKEYS,e$.DEFAULT_STREAM_TYPE,e$.DEFAULT_SUBTITLES,e$.DEFAULT_DURATION,e$.LANG)}get mediaStore(){return eV(this,J)}set mediaStore(a){var b,c;if(eV(this,J)&&(null==(b=eV(this,L))||b.call(this),eX(this,L,void 0)),eX(this,J,a),!eV(this,J)&&!this.hasAttribute(e$.NO_DEFAULT_STORE))return void eY(this,N,O).call(this);eX(this,L,null==(c=eV(this,J))?void 0:c.subscribe(eV(this,K)))}get fullscreenElement(){var a;return null!=(a=eV(this,I))?a:this}set fullscreenElement(a){var b;this.hasAttribute(e$.FULLSCREEN_ELEMENT)&&this.removeAttribute(e$.FULLSCREEN_ELEMENT),eX(this,I,a),null==(b=eV(this,J))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return d0(this,e$.DEFAULT_SUBTITLES)}set defaultSubtitles(a){d1(this,e$.DEFAULT_SUBTITLES,a)}get defaultStreamType(){return d2(this,e$.DEFAULT_STREAM_TYPE)}set defaultStreamType(a){d3(this,e$.DEFAULT_STREAM_TYPE,a)}get defaultDuration(){return d$(this,e$.DEFAULT_DURATION)}set defaultDuration(a){d_(this,e$.DEFAULT_DURATION,a)}get noHotkeys(){return d0(this,e$.NO_HOTKEYS)}set noHotkeys(a){d1(this,e$.NO_HOTKEYS,a)}get keysUsed(){return d2(this,e$.KEYS_USED)}set keysUsed(a){d3(this,e$.KEYS_USED,a)}get liveEdgeOffset(){return d$(this,e$.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){d_(this,e$.LIVE_EDGE_OFFSET,a)}get noAutoSeekToLive(){return d0(this,e$.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(a){d1(this,e$.NO_AUTO_SEEK_TO_LIVE,a)}get noVolumePref(){return d0(this,e$.NO_VOLUME_PREF)}set noVolumePref(a){d1(this,e$.NO_VOLUME_PREF,a)}get noSubtitlesLangPref(){return d0(this,e$.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(a){d1(this,e$.NO_SUBTITLES_LANG_PREF,a)}get noDefaultStore(){return d0(this,e$.NO_DEFAULT_STORE)}set noDefaultStore(a){d1(this,e$.NO_DEFAULT_STORE,a)}attributeChangedCallback(a,b,c){var d,e,f,g,h,i,j,k;(super.attributeChangedCallback(a,b,c),a===e$.NO_HOTKEYS)?c!==b&&""===c?(this.hasAttribute(e$.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):c!==b&&null===c&&this.enableHotkeys():a===e$.HOTKEYS?eV(this,H).value=c:a===e$.DEFAULT_SUBTITLES&&c!==b?null==(d=eV(this,J))||d.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(e$.DEFAULT_SUBTITLES)}}):a===e$.DEFAULT_STREAM_TYPE?null==(f=eV(this,J))||f.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(e=this.getAttribute(e$.DEFAULT_STREAM_TYPE))?e:void 0}}):a===e$.LIVE_EDGE_OFFSET?null==(g=eV(this,J))||g.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(e$.LIVE_EDGE_OFFSET)?+this.getAttribute(e$.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(e$.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(e$.LIVE_EDGE_OFFSET)}}):a===e$.SEEK_TO_LIVE_OFFSET?null==(h=eV(this,J))||h.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(e$.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(e$.SEEK_TO_LIVE_OFFSET):void 0}}):a===e$.NO_AUTO_SEEK_TO_LIVE?null==(i=eV(this,J))||i.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(e$.NO_AUTO_SEEK_TO_LIVE)}}):a===e$.FULLSCREEN_ELEMENT?(eX(this,I,c?null==(j=this.getRootNode())?void 0:j.getElementById(c):void 0),null==(k=eV(this,J))||k.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})):a===e$.LANG&&c!==b&&(dz=c)}connectedCallback(){var a,b;eV(this,J)||this.hasAttribute(e$.NO_DEFAULT_STORE)||eY(this,N,O).call(this),null==(a=eV(this,J))||a.dispatch({type:"documentelementchangerequest",detail:dI}),super.connectedCallback(),eV(this,J)&&!eV(this,L)&&eX(this,L,null==(b=eV(this,J))?void 0:b.subscribe(eV(this,K))),this.enableHotkeys()}disconnectedCallback(){var a,b,c,d;null==(a=super.disconnectedCallback)||a.call(this),eV(this,J)&&(null==(b=eV(this,J))||b.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(c=eV(this,J))||c.dispatch({type:c5.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),eV(this,L)&&(null==(d=eV(this,L))||d.call(this),eX(this,L,void 0))}mediaSetCallback(a){var b;super.mediaSetCallback(a),null==(b=eV(this,J))||b.dispatch({type:"mediaelementchangerequest",detail:a}),a.hasAttribute("tabindex")||(a.tabIndex=-1)}mediaUnsetCallback(a){var b;super.mediaUnsetCallback(a),null==(b=eV(this,J))||b.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(a,b){e7(this.mediaStateReceivers,a,b)}associateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;if(b.has(a))return;let c=((a,b,c)=>{e6(a,b);let d=a=>{var c;b(null!=(c=null==a?void 0:a.composedPath()[0])?c:a.target)},e=a=>{var b;c(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)};a.addEventListener(c5.REGISTER_MEDIA_STATE_RECEIVER,d),a.addEventListener(c5.UNREGISTER_MEDIA_STATE_RECEIVER,e);let f=[],g=a=>{let d=a.target;"media"!==d.name&&(f.forEach(a=>e6(a,c)),(f=[...d.assignedElements({flatten:!0})]).forEach(a=>e6(a,b)))};a.addEventListener("slotchange",g);let h=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:d=[],removedNodes:e=[],type:f,target:g,attributeName:h}=a;"childList"===f?(Array.prototype.forEach.call(d,a=>e6(a,b)),Array.prototype.forEach.call(e,a=>e6(a,c))):"attributes"===f&&h===c6.MEDIA_CHROME_ATTRIBUTES&&(e2(g)?b(g):c(g))})});return h.observe(a,{childList:!0,attributes:!0,subtree:!0}),()=>{e6(a,c),a.removeEventListener("slotchange",g),h.disconnect(),a.removeEventListener(c5.REGISTER_MEDIA_STATE_RECEIVER,d),a.removeEventListener(c5.UNREGISTER_MEDIA_STATE_RECEIVER,e)}})(a,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(c5).forEach(b=>{a.addEventListener(b,eV(this,M))}),b.set(a,c)}unassociateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;b.has(a)&&(b.get(a)(),b.delete(a),Object.values(c5).forEach(b=>{a.removeEventListener(b,eV(this,M))}))}registerMediaStateReceiver(a){if(!a)return;let b=this.mediaStateReceivers;!(b.indexOf(a)>-1)&&(b.push(a),eV(this,J)&&Object.entries(eV(this,J).getState()).forEach(([b,c])=>{e7([a],b,c)}))}unregisterMediaStateReceiver(a){let b=this.mediaStateReceivers,c=b.indexOf(a);c<0||b.splice(c,1)}enableHotkeys(){this.addEventListener("keydown",eY(this,R,S))}disableHotkeys(){this.removeEventListener("keydown",eY(this,R,S)),this.removeEventListener("keyup",eY(this,P,Q))}get hotkeys(){return d2(this,e$.HOTKEYS)}set hotkeys(a){d3(this,e$.HOTKEYS,a)}keyboardShortcutHandler(a){var b,c,d,e,f;let g,h,i,j=a.target;if(!((null!=(d=null!=(c=null==(b=j.getAttribute(e$.KEYS_USED))?void 0:b.split(" "))?c:null==j?void 0:j.keysUsed)?d:[]).map(a=>"Space"===a?" ":a).filter(Boolean).includes(a.key)||eV(this,H).contains(`no${a.key.toLowerCase()}`))&&!(" "===a.key&&eV(this,H).contains("nospace")))switch(a.key){case" ":case"k":g=eV(this,J).getState().mediaPaused?c5.MEDIA_PLAY_REQUEST:c5.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new dH.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"m":g="off"===this.mediaStore.getState().mediaVolumeLevel?c5.MEDIA_UNMUTE_REQUEST:c5.MEDIA_MUTE_REQUEST,this.dispatchEvent(new dH.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"f":g=this.mediaStore.getState().mediaIsFullscreen?c5.MEDIA_EXIT_FULLSCREEN_REQUEST:c5.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new dH.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new dH.CustomEvent(c5.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let a=this.hasAttribute(e$.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(e$.KEYBOARD_BACKWARD_SEEK_OFFSET):10;h=Math.max((null!=(e=this.mediaStore.getState().mediaCurrentTime)?e:0)-a,0),i=new dH.CustomEvent(c5.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i);break}case"ArrowRight":{let a=this.hasAttribute(e$.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(e$.KEYBOARD_FORWARD_SEEK_OFFSET):10;h=Math.max((null!=(f=this.mediaStore.getState().mediaCurrentTime)?f:0)+a,0),i=new dH.CustomEvent(c5.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i)}}}});let e8={PLACEMENT:"placement",BOUNDS:"bounds"};class e9 extends dH.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var a;if(!dX(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let b=this.placement;if("left"===b||"right"===b)return void this.style.removeProperty("--media-tooltip-offset-x");let c=getComputedStyle(this),d=null!=(a=dU(this,"#"+this.bounds))?a:dP(this);if(!d)return;let{x:e,width:f}=d.getBoundingClientRect(),{x:g,width:h}=this.getBoundingClientRect(),i=c.getPropertyValue("--media-tooltip-offset-x"),j=i?parseFloat(i.replace("px","")):0,k=c.getPropertyValue("--media-tooltip-container-margin"),l=k?parseFloat(k.replace("px","")):0,m=g-e+j-l,n=g+h-(e+f)+j+l;return m<0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):n>0?void this.style.setProperty("--media-tooltip-offset-x",`${n}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let a=this.placement;delete this.placement,this.placement=a}}static get observedAttributes(){return[e8.PLACEMENT,e8.BOUNDS]}get placement(){return d2(this,e8.PLACEMENT)}set placement(a){d3(this,e8.PLACEMENT,a)}get bounds(){return d2(this,e8.BOUNDS)}set bounds(a){d3(this,e8.BOUNDS,a)}}e9.shadowRootOptions={mode:"open"},e9.getTemplateHTML=function(a){return`
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
  `},dH.customElements.get("media-tooltip")||dH.customElements.define("media-tooltip",e9);var fa=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fb=(a,b,c)=>(fa(a,b,"read from private field"),c?c.call(a):b.get(a)),fc=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fd=(a,b,c,d)=>(fa(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let fe={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class ff extends dH.HTMLElement{constructor(){if(super(),fc(this,Y),fc(this,T,void 0),this.preventClick=!1,this.tooltipEl=null,fc(this,U,a=>{this.preventClick||this.handleClick(a),setTimeout(fb(this,V),0)}),fc(this,V,()=>{var a,b;null==(b=null==(a=this.tooltipEl)?void 0:a.updateXOffset)||b.call(a)}),fc(this,W,a=>{let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",fb(this,W));this.preventClick||this.handleClick(a)}),fc(this,X,a=>{let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",fb(this,W));this.addEventListener("keyup",fb(this,W),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",fe.TOOLTIP_PLACEMENT,c6.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",fb(this,U)),this.addEventListener("keydown",fb(this,X)),this.tabIndex=0}disable(){this.removeEventListener("click",fb(this,U)),this.removeEventListener("keydown",fb(this,X)),this.removeEventListener("keyup",fb(this,W)),this.tabIndex=-1}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===c6.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=fb(this,T))?void 0:d.unassociateElement)||e.call(d,this),fd(this,T,null)),c&&this.isConnected&&(fd(this,T,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fb(this,T))?void 0:g.associateElement)||h.call(g,this))):"disabled"===a&&c!==b?null==c?this.enable():this.disable():a===fe.TOOLTIP_PLACEMENT&&this.tooltipEl&&c!==b&&(this.tooltipEl.placement=c),fb(this,V).call(this)}connectedCallback(){var a,b,c;let{style:d}=dY(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let e=this.getAttribute(c6.MEDIA_CONTROLLER);e&&(fd(this,T,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fb(this,T))?void 0:b.associateElement)||c.call(b,this)),dH.customElements.whenDefined("media-tooltip").then(()=>{var a,b;return(a=Y,b=Z,fa(this,a,"access private method"),b).call(this)})}disconnectedCallback(){var a,b;this.disable(),null==(b=null==(a=fb(this,T))?void 0:a.unassociateElement)||b.call(a,this),fd(this,T,null),this.removeEventListener("mouseenter",fb(this,V)),this.removeEventListener("focus",fb(this,V)),this.removeEventListener("click",fb(this,U))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return d2(this,fe.TOOLTIP_PLACEMENT)}set tooltipPlacement(a){d3(this,fe.TOOLTIP_PLACEMENT,a)}get mediaController(){return d2(this,c6.MEDIA_CONTROLLER)}set mediaController(a){d3(this,c6.MEDIA_CONTROLLER,a)}get disabled(){return d0(this,fe.DISABLED)}set disabled(a){d1(this,fe.DISABLED,a)}get noTooltip(){return d0(this,fe.NO_TOOLTIP)}set noTooltip(a){d1(this,fe.NO_TOOLTIP,a)}handleClick(a){}}T=new WeakMap,U=new WeakMap,V=new WeakMap,W=new WeakMap,X=new WeakMap,Y=new WeakSet,Z=function(){this.addEventListener("mouseenter",fb(this,V)),this.addEventListener("focus",fb(this,V)),this.addEventListener("click",fb(this,U));let a=this.tooltipPlacement;a&&this.tooltipEl&&(this.tooltipEl.placement=a)},ff.shadowRootOptions={mode:"open"},ff.getTemplateHTML=function(a,b={}){return`
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
        <template shadowrootmode="${e9.shadowRootOptions.mode}">
          ${e9.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(a)}
        </slot>
      </media-tooltip>
    </slot>
  `},ff.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},ff.getTooltipContentHTML=function(){return""},dH.customElements.get("media-chrome-button")||dH.customElements.define("media-chrome-button",ff);let fg=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,fh=a=>{let b=a.mediaIsAirplaying?dA("stop airplay"):dA("start airplay");a.setAttribute("aria-label",b)};class fi extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_IS_AIRPLAYING,c9.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fh(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_IS_AIRPLAYING&&fh(this)}get mediaIsAirplaying(){return d0(this,c9.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(a){d1(this,c9.MEDIA_IS_AIRPLAYING,a)}get mediaAirplayUnavailable(){return d2(this,c9.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(a){d3(this,c9.MEDIA_AIRPLAY_UNAVAILABLE,a)}handleClick(){let a=new dH.CustomEvent(c5.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}fi.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${c9.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c9.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c9.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${c9.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${fg}</slot>
      <slot name="exit">${fg}</slot>
    </slot>
  `},fi.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dA("start airplay")}</slot>
    <slot name="tooltip-exit">${dA("stop airplay")}</slot>
  `},dH.customElements.get("media-airplay-button")||dH.customElements.define("media-airplay-button",fi);let fj=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,fk=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,fl=a=>{a.setAttribute("aria-checked",eu(a).toString())};class fm extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_SUBTITLES_LIST,c9.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",dA("closed captions")),fl(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_SUBTITLES_SHOWING&&fl(this)}get mediaSubtitlesList(){return fn(this,c9.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){fo(this,c9.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return fn(this,c9.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){fo(this,c9.MEDIA_SUBTITLES_SHOWING,a)}handleClick(){this.dispatchEvent(new dH.CustomEvent(c5.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}fm.getSlotTemplateHTML=function(a){return`
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
      <slot name="on">${fj}</slot>
      <slot name="off">${fk}</slot>
    </slot>
  `},fm.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${dA("Enable captions")}</slot>
    <slot name="tooltip-disable">${dA("Disable captions")}</slot>
  `};let fn=(a,b)=>{let c=a.getAttribute(b);return c?en(c):[]},fo=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=eq(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dH.customElements.get("media-captions-button")||dH.customElements.define("media-captions-button",fm);let fp=a=>{let b=a.mediaIsCasting?dA("stop casting"):dA("start casting");a.setAttribute("aria-label",b)};class fq extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_IS_CASTING,c9.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fp(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_IS_CASTING&&fp(this)}get mediaIsCasting(){return d0(this,c9.MEDIA_IS_CASTING)}set mediaIsCasting(a){d1(this,c9.MEDIA_IS_CASTING,a)}get mediaCastUnavailable(){return d2(this,c9.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(a){d3(this,c9.MEDIA_CAST_UNAVAILABLE,a)}handleClick(){let a=this.mediaIsCasting?c5.MEDIA_EXIT_CAST_REQUEST:c5.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new dH.CustomEvent(a,{composed:!0,bubbles:!0}))}}fq.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${c9.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c9.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c9.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${c9.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},fq.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dA("Start casting")}</slot>
    <slot name="tooltip-exit">${dA("Stop casting")}</slot>
  `},dH.customElements.get("media-cast-button")||dH.customElements.define("media-cast-button",fq);var fr=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fs=(a,b,c)=>(fr(a,b,"read from private field"),c?c.call(a):b.get(a)),ft=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fu=(a,b,c,d)=>(fr(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fv=(a,b,c)=>(fr(a,b,"access private method"),c);let fw={OPEN:"open",ANCHOR:"anchor"};class fx extends dH.HTMLElement{constructor(){super(),ft(this,ab),ft(this,ad),ft(this,af),ft(this,ah),ft(this,aj),ft(this,al),ft(this,$,!1),ft(this,_,null),ft(this,aa,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[fw.OPEN,fw.ANCHOR]}get open(){return d0(this,fw.OPEN)}set open(a){d1(this,fw.OPEN,a)}handleEvent(a){switch(a.type){case"invoke":fv(this,ah,ai).call(this,a);break;case"focusout":fv(this,aj,ak).call(this,a);break;case"keydown":fv(this,al,am).call(this,a)}}connectedCallback(){fv(this,ab,ac).call(this),this.role||(this.role="dialog")}attributeChangedCallback(a,b,c){fv(this,ab,ac).call(this),a===fw.OPEN&&c!==b&&(this.open?fv(this,ad,ae).call(this):fv(this,af,ag).call(this))}focus(){fu(this,_,dV());let a=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),b=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(a||b)return;let c=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==c||c.focus()}get keysUsed(){return["Escape","Tab"]}}$=new WeakMap,_=new WeakMap,aa=new WeakMap,ab=new WeakSet,ac=function(){if(!fs(this,$)&&(fu(this,$,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a),queueMicrotask(()=>{let{style:a}=dY(this.shadowRoot,":host");a.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},ad=new WeakSet,ae=function(){var a;null==(a=fs(this,aa))||a.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},af=new WeakSet,ag=function(){var a;null==(a=fs(this,aa))||a.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},ah=new WeakSet,ai=function(a){fu(this,aa,a.relatedTarget),dT(this,a.relatedTarget)||(this.open=!this.open)},aj=new WeakSet,ak=function(a){var b;!dT(this,a.relatedTarget)&&(null==(b=fs(this,_))||b.focus(),fs(this,aa)&&fs(this,aa)!==a.relatedTarget&&this.open&&(this.open=!1))},al=new WeakSet,am=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;h||i||j||this.keysUsed.includes(g)&&(a.preventDefault(),a.stopPropagation(),"Tab"===g?(a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()):"Escape"===g&&(null==(f=fs(this,_))||f.focus(),this.open=!1))},fx.shadowRootOptions={mode:"open"},fx.getTemplateHTML=function(a){return`
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
  `},fx.getSlotTemplateHTML=function(a){return`
    <slot id="content"></slot>
  `},dH.customElements.get("media-chrome-dialog")||dH.customElements.define("media-chrome-dialog",fx);var fy=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fz=(a,b,c)=>(fy(a,b,"read from private field"),c?c.call(a):b.get(a)),fA=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fB=(a,b,c,d)=>(fy(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fC=(a,b,c)=>(fy(a,b,"access private method"),c);class fD extends dH.HTMLElement{constructor(){if(super(),fA(this,aw),fA(this,ay),fA(this,aA),fA(this,aC),fA(this,aE),fA(this,aG),fA(this,aI),fA(this,aK),fA(this,an,void 0),fA(this,ao,void 0),fA(this,ap,void 0),fA(this,aq,void 0),fA(this,ar,{}),fA(this,as,[]),fA(this,at,()=>{if(this.range.matches(":focus-visible")){let{style:a}=dY(this.shadowRoot,":host");a.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),fA(this,au,()=>{let{style:a}=dY(this.shadowRoot,":host");a.removeProperty("--_focus-visible-box-shadow")}),fA(this,av,()=>{let a=this.shadowRoot.querySelector("#segments-clipping");a&&a.parentNode.append(a)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.container=this.shadowRoot.querySelector("#container"),fB(this,ap,this.shadowRoot.querySelector("#startpoint")),fB(this,aq,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",c6.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===c6.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=fz(this,an))?void 0:d.unassociateElement)||e.call(d,this),fB(this,an,null)),c&&this.isConnected&&(fB(this,an,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fz(this,an))?void 0:g.associateElement)||h.call(g,this))):("disabled"===a||"aria-disabled"===a&&b!==c)&&(null==c?(this.range.removeAttribute(a),fC(this,ay,az).call(this)):(this.range.setAttribute(a,c),fC(this,aA,aB).call(this)))}connectedCallback(){var a,b,c;let{style:d}=dY(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),fz(this,ar).pointer=dY(this.shadowRoot,"#pointer"),fz(this,ar).progress=dY(this.shadowRoot,"#progress"),fz(this,ar).thumb=dY(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),fz(this,ar).activeSegment=dY(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let e=this.getAttribute(c6.MEDIA_CONTROLLER);e&&(fB(this,an,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fz(this,an))?void 0:b.associateElement)||c.call(b,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",fz(this,at)),this.shadowRoot.addEventListener("focusout",fz(this,au)),fC(this,ay,az).call(this),dM(this.container,fz(this,av))}disconnectedCallback(){var a,b;fC(this,aA,aB).call(this),null==(b=null==(a=fz(this,an))?void 0:a.unassociateElement)||b.call(a,this),fB(this,an,null),this.shadowRoot.removeEventListener("focusin",fz(this,at)),this.shadowRoot.removeEventListener("focusout",fz(this,au)),dN(this.container,fz(this,av))}updatePointerBar(a){var b;null==(b=fz(this,ar).pointer)||b.style.setProperty("width",`${100*this.getPointerRatio(a)}%`)}updateBar(){var a,b;let c=100*this.range.valueAsNumber;null==(a=fz(this,ar).progress)||a.style.setProperty("width",`${c}%`),null==(b=fz(this,ar).thumb)||b.style.setProperty("left",`${c}%`)}updateSegments(a){let b=this.shadowRoot.querySelector("#segments-clipping");if(b.textContent="",this.container.classList.toggle("segments",!!(null==a?void 0:a.length)),!(null==a?void 0:a.length))return;let c=[...new Set([+this.range.min,...a.flatMap(a=>[a.start,a.end]),+this.range.max])];fB(this,as,[...c]);let d=c.pop();for(let[a,e]of c.entries()){let[f,g]=[0===a,a===c.length-1],h=f?"calc(var(--segments-gap) / -1)":`${100*e}%`,i=g?d:c[a+1],j=`calc(${(i-e)*100}%${f||g?"":" - var(--segments-gap)"})`,k=dI.createElementNS("http://www.w3.org/2000/svg","rect"),l=dY(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);l.style.setProperty("x",h),l.style.setProperty("width",j),b.append(k)}}getPointerRatio(a){return function(a,b,c,d){let e=d.x-c.x,f=d.y-c.y,g=e*e+f*f;return 0===g?0:Math.max(0,Math.min(1,((a-c.x)*e+(b-c.y)*f)/g))}(a.clientX,a.clientY,fz(this,ap).getBoundingClientRect(),fz(this,aq).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(a){switch(a.type){case"pointermove":fC(this,aK,aL).call(this,a);break;case"input":this.updateBar();break;case"pointerenter":fC(this,aE,aF).call(this,a);break;case"pointerdown":fC(this,aC,aD).call(this,a);break;case"pointerup":fC(this,aG,aH).call(this);break;case"pointerleave":fC(this,aI,aJ).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}an=new WeakMap,ao=new WeakMap,ap=new WeakMap,aq=new WeakMap,ar=new WeakMap,as=new WeakMap,at=new WeakMap,au=new WeakMap,av=new WeakMap,aw=new WeakSet,ax=function(a){let b=fz(this,ar).activeSegment;if(!b)return;let c=this.getPointerRatio(a),d=fz(this,as).findIndex((a,b,d)=>{let e=d[b+1];return null!=e&&c>=a&&c<=e}),e=`#segments-clipping rect:nth-child(${d+1})`;b.selectorText==e&&b.style.transform||(b.selectorText=e,b.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},ay=new WeakSet,az=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},aA=new WeakSet,aB=function(){var a,b;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(a=dH.window)||a.removeEventListener("pointerup",this),null==(b=dH.window)||b.removeEventListener("pointermove",this)},aC=new WeakSet,aD=function(a){var b;fB(this,ao,a.composedPath().includes(this.range)),null==(b=dH.window)||b.addEventListener("pointerup",this)},aE=new WeakSet,aF=function(a){var b;"mouse"!==a.pointerType&&fC(this,aC,aD).call(this,a),this.addEventListener("pointerleave",this),null==(b=dH.window)||b.addEventListener("pointermove",this)},aG=new WeakSet,aH=function(){var a;null==(a=dH.window)||a.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},aI=new WeakSet,aJ=function(){var a,b;this.removeEventListener("pointerleave",this),null==(a=dH.window)||a.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(b=fz(this,ar).activeSegment)||b.style.removeProperty("transform")},aK=new WeakSet,aL=function(a){this.toggleAttribute("dragging",1===a.buttons||"mouse"!==a.pointerType),this.updatePointerBar(a),fC(this,aw,ax).call(this,a),this.dragging&&("mouse"!==a.pointerType||!fz(this,ao))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(a),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},fD.shadowRootOptions={mode:"open"},fD.getTemplateHTML=function(a){return`
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
  `},dH.customElements.get("media-chrome-range")||dH.customElements.define("media-chrome-range",fD);var fE=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fF=(a,b,c)=>(fE(a,b,"read from private field"),c?c.call(a):b.get(a)),fG=(a,b,c,d)=>(fE(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fH extends dH.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aM,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[c6.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===c6.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=fF(this,aM))?void 0:d.unassociateElement)||e.call(d,this),fG(this,aM,null)),c&&this.isConnected&&(fG(this,aM,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fF(this,aM))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(c6.MEDIA_CONTROLLER);d&&(fG(this,aM,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=fF(this,aM))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=fF(this,aM))?void 0:a.unassociateElement)||b.call(a,this),fG(this,aM,null)}}aM=new WeakMap,fH.shadowRootOptions={mode:"open"},fH.getTemplateHTML=function(a){return`
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
  `},dH.customElements.get("media-control-bar")||dH.customElements.define("media-control-bar",fH);var fI=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fJ=(a,b,c)=>(fI(a,b,"read from private field"),c?c.call(a):b.get(a)),fK=(a,b,c,d)=>(fI(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fL extends dH.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aN,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[c6.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===c6.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=fJ(this,aN))?void 0:d.unassociateElement)||e.call(d,this),fK(this,aN,null)),c&&this.isConnected&&(fK(this,aN,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fJ(this,aN))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let{style:d}=dY(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let e=this.getAttribute(c6.MEDIA_CONTROLLER);e&&(fK(this,aN,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fJ(this,aN))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=fJ(this,aN))?void 0:a.unassociateElement)||b.call(a,this),fK(this,aN,null)}}aN=new WeakMap,fL.shadowRootOptions={mode:"open"},fL.getTemplateHTML=function(a,b={}){return`
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
  `},fL.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},dH.customElements.get("media-text-display")||dH.customElements.define("media-text-display",fL);var fM=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fN=(a,b,c)=>(fM(a,b,"read from private field"),c?c.call(a):b.get(a));class fO extends fL{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aO,void 0),((a,b,c,d)=>(fM(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aO,this.shadowRoot.querySelector("slot")),fN(this,aO).textContent=dv(null!=(a=this.mediaDuration)?a:0)}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_DURATION]}attributeChangedCallback(a,b,c){a===c9.MEDIA_DURATION&&(fN(this,aO).textContent=dv(+c)),super.attributeChangedCallback(a,b,c)}get mediaDuration(){return d$(this,c9.MEDIA_DURATION)}set mediaDuration(a){d_(this,c9.MEDIA_DURATION,a)}}aO=new WeakMap,fO.getSlotTemplateHTML=function(a,b){return`
    <slot>${dv(b.mediaDuration)}</slot>
  `},dH.customElements.get("media-duration-display")||dH.customElements.define("media-duration-display",fO);let fP={2:dA("Network Error"),3:dA("Decode Error"),4:dA("Source Not Supported"),5:dA("Encryption Error")},fQ={2:dA("A network error caused the media download to fail."),3:dA("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:dA("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:dA("The media is encrypted and there are no keys to decrypt it.")},fR=a=>{var b,c;return 1===a.code?null:{title:null!=(b=fP[a.code])?b:`Error ${a.code}`,message:null!=(c=fQ[a.code])?c:a.message}};var fS=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};function fT(a){var b;let{title:c,message:d}=null!=(b=fR(a))?b:{},e="";return c&&(e+=`<slot name="error-${a.code}-title"><h3>${c}</h3></slot>`),d&&(e+=`<slot name="error-${a.code}-message"><p>${d}</p></slot>`),e}let fU=[c9.MEDIA_ERROR_CODE,c9.MEDIA_ERROR_MESSAGE];class fV extends fx{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aP,null)}static get observedAttributes(){return[...super.observedAttributes,...fU]}formatErrorMessage(a){return this.constructor.formatErrorMessage(a)}attributeChangedCallback(a,b,c){var d;if(super.attributeChangedCallback(a,b,c),!fU.includes(a))return;let e=null!=(d=this.mediaError)?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=e.code&&null!==fR(e),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(e))}get mediaError(){var a,b;return fS(this,a=aP,"read from private field"),b?b.call(this):a.get(this)}set mediaError(a){var b,c;fS(this,b=aP,"write to private field"),c?c.call(this,a):b.set(this,a)}get mediaErrorCode(){return d$(this,"mediaerrorcode")}set mediaErrorCode(a){d_(this,"mediaerrorcode",a)}get mediaErrorMessage(){return d2(this,"mediaerrormessage")}set mediaErrorMessage(a){d3(this,"mediaerrormessage",a)}}aP=new WeakMap,fV.getSlotTemplateHTML=function(a){return`
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
      ${fT({code:+a.mediaerrorcode,message:a.mediaerrormessage})}
    </slot>
  `},fV.formatErrorMessage=fT,dH.customElements.get("media-error-dialog")||dH.customElements.define("media-error-dialog",fV);let fW=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,fX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,fY=a=>{let b=a.mediaIsFullscreen?dA("exit fullscreen mode"):dA("enter fullscreen mode");a.setAttribute("aria-label",b)};class fZ extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_IS_FULLSCREEN,c9.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fY(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_IS_FULLSCREEN&&fY(this)}get mediaFullscreenUnavailable(){return d2(this,c9.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(a){d3(this,c9.MEDIA_FULLSCREEN_UNAVAILABLE,a)}get mediaIsFullscreen(){return d0(this,c9.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(a){d1(this,c9.MEDIA_IS_FULLSCREEN,a)}handleClick(){let a=this.mediaIsFullscreen?c5.MEDIA_EXIT_FULLSCREEN_REQUEST:c5.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new dH.CustomEvent(a,{composed:!0,bubbles:!0}))}}fZ.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${c9.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c9.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c9.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${c9.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${fW}</slot>
      <slot name="exit">${fX}</slot>
    </slot>
  `},fZ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dA("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${dA("Exit fullscreen mode")}</slot>
  `},dH.customElements.get("media-fullscreen-button")||dH.customElements.define("media-fullscreen-button",fZ);let{MEDIA_TIME_IS_LIVE:f$,MEDIA_PAUSED:f_}=c9,{MEDIA_SEEK_TO_LIVE_REQUEST:f0,MEDIA_PLAY_REQUEST:f1}=c5,f2=a=>{let b=a.mediaPaused||!a.mediaTimeIsLive,c=b?dA("seek to live"):dA("playing live");a.setAttribute("aria-label",c),b?a.removeAttribute("aria-disabled"):a.setAttribute("aria-disabled","true")};class f3 extends ff{static get observedAttributes(){return[...super.observedAttributes,f$,f_]}connectedCallback(){super.connectedCallback(),f2(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),f2(this)}get mediaPaused(){return d0(this,c9.MEDIA_PAUSED)}set mediaPaused(a){d1(this,c9.MEDIA_PAUSED,a)}get mediaTimeIsLive(){return d0(this,c9.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(a){d1(this,c9.MEDIA_TIME_IS_LIVE,a)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new dH.CustomEvent(f0,{composed:!0,bubbles:!0})),this.hasAttribute(f_)&&this.dispatchEvent(new dH.CustomEvent(f1,{composed:!0,bubbles:!0})))}}f3.getSlotTemplateHTML=function(a){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${f$}]:not([${f_}])) slot[name=indicator] > *,
      :host([${f$}]:not([${f_}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${f$}]:not([${f_}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${dA("live")}</slot>
  `},dH.customElements.get("media-live-button")||dH.customElements.define("media-live-button",f3);var f4=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},f5=(a,b,c)=>(f4(a,b,"read from private field"),c?c.call(a):b.get(a)),f6=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},f7=(a,b,c,d)=>(f4(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let f8={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},f9=`
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
`;class ga extends dH.HTMLElement{constructor(){if(super(),f6(this,aQ,void 0),f6(this,aR,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[c6.MEDIA_CONTROLLER,c9.MEDIA_PAUSED,c9.MEDIA_LOADING,f8.LOADING_DELAY]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===f8.LOADING_DELAY&&b!==c?this.loadingDelay=Number(c):a===c6.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=f5(this,aQ))?void 0:d.unassociateElement)||e.call(d,this),f7(this,aQ,null)),c&&this.isConnected&&(f7(this,aQ,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=f5(this,aQ))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(c6.MEDIA_CONTROLLER);d&&(f7(this,aQ,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=f5(this,aQ))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=f5(this,aQ))?void 0:a.unassociateElement)||b.call(a,this),f7(this,aQ,null)}get loadingDelay(){return f5(this,aR)}set loadingDelay(a){f7(this,aR,a);let{style:b}=dY(this.shadowRoot,":host");b.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${a}ms)`)}get mediaPaused(){return d0(this,c9.MEDIA_PAUSED)}set mediaPaused(a){d1(this,c9.MEDIA_PAUSED,a)}get mediaLoading(){return d0(this,c9.MEDIA_LOADING)}set mediaLoading(a){d1(this,c9.MEDIA_LOADING,a)}get mediaController(){return d2(this,c6.MEDIA_CONTROLLER)}set mediaController(a){d3(this,c6.MEDIA_CONTROLLER,a)}get noAutohide(){return d0(this,f8.NO_AUTOHIDE)}set noAutohide(a){d1(this,f8.NO_AUTOHIDE,a)}}aQ=new WeakMap,aR=new WeakMap,ga.shadowRootOptions={mode:"open"},ga.getTemplateHTML=function(a){return`
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

      :host([${c9.MEDIA_LOADING}]:not([${c9.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${c9.MEDIA_LOADING}]:not([${c9.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${c9.MEDIA_LOADING}]:not([${c9.MEDIA_PAUSED}])) #status {
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

    <slot name="icon">${f9}</slot>
    <div id="status" role="status" aria-live="polite">${dA("media loading")}</div>
  `},dH.customElements.get("media-loading-indicator")||dH.customElements.define("media-loading-indicator",ga);let gb=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,gc=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,gd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,ge=a=>{let b="off"===a.mediaVolumeLevel?dA("unmute"):dA("mute");a.setAttribute("aria-label",b)};class gf extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),ge(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_VOLUME_LEVEL&&ge(this)}get mediaVolumeLevel(){return d2(this,c9.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(a){d3(this,c9.MEDIA_VOLUME_LEVEL,a)}handleClick(){let a="off"===this.mediaVolumeLevel?c5.MEDIA_UNMUTE_REQUEST:c5.MEDIA_MUTE_REQUEST;this.dispatchEvent(new dH.CustomEvent(a,{composed:!0,bubbles:!0}))}}gf.getSlotTemplateHTML=function(a){return`
    <style>
      :host(:not([${c9.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${c9.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${c9.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${c9.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${c9.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${c9.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${c9.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${gb}</slot>
      <slot name="low">${gc}</slot>
      <slot name="medium">${gc}</slot>
      <slot name="high">${gd}</slot>
    </slot>
  `},gf.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${dA("Mute")}</slot>
    <slot name="tooltip-unmute">${dA("Unmute")}</slot>
  `},dH.customElements.get("media-mute-button")||dH.customElements.define("media-mute-button",gf);let gg=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,gh=a=>{let b=a.mediaIsPip?dA("exit picture in picture mode"):dA("enter picture in picture mode");a.setAttribute("aria-label",b)};class gi extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_IS_PIP,c9.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gh(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_IS_PIP&&gh(this)}get mediaPipUnavailable(){return d2(this,c9.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(a){d3(this,c9.MEDIA_PIP_UNAVAILABLE,a)}get mediaIsPip(){return d0(this,c9.MEDIA_IS_PIP)}set mediaIsPip(a){d1(this,c9.MEDIA_IS_PIP,a)}handleClick(){let a=this.mediaIsPip?c5.MEDIA_EXIT_PIP_REQUEST:c5.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new dH.CustomEvent(a,{composed:!0,bubbles:!0}))}}gi.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${c9.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${c9.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c9.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${c9.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gg}</slot>
      <slot name="exit">${gg}</slot>
    </slot>
  `},gi.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dA("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${dA("Exit picture in picture mode")}</slot>
  `},dH.customElements.get("media-pip-button")||dH.customElements.define("media-pip-button",gi);var gj=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};let gk={RATES:"rates"},gl=[1,1.2,1.5,1.7,2];class gm extends ff{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aS,new el(this,gk.RATES,{defaultValue:gl})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_PLAYBACK_RATE,gk.RATES]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===gk.RATES&&(gj(this,aS).value=c),a===c9.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",dA("Playback rate {playbackRate}",{playbackRate:b}))}}get rates(){return gj(this,aS)}set rates(a){a?Array.isArray(a)?gj(this,aS).value=a.join(" "):"string"==typeof a&&(gj(this,aS).value=a):gj(this,aS).value=""}get mediaPlaybackRate(){return d$(this,c9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d_(this,c9.MEDIA_PLAYBACK_RATE,a)}handleClick(){var a,b;let c=Array.from(gj(this,aS).values(),a=>+a).sort((a,b)=>a-b),d=null!=(b=null!=(a=c.find(a=>a>this.mediaPlaybackRate))?a:c[0])?b:1,e=new dH.CustomEvent(c5.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d});this.dispatchEvent(e)}}aS=new WeakMap,gm.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},gm.getTooltipContentHTML=function(){return dA("Playback rate")},dH.customElements.get("media-playback-rate-button")||dH.customElements.define("media-playback-rate-button",gm);let gn=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,go=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,gp=a=>{let b=a.mediaPaused?dA("play"):dA("pause");a.setAttribute("aria-label",b)};class gq extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_PAUSED,c9.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),gp(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_PAUSED&&gp(this)}get mediaPaused(){return d0(this,c9.MEDIA_PAUSED)}set mediaPaused(a){d1(this,c9.MEDIA_PAUSED,a)}handleClick(){let a=this.mediaPaused?c5.MEDIA_PLAY_REQUEST:c5.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new dH.CustomEvent(a,{composed:!0,bubbles:!0}))}}gq.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${c9.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${c9.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${c9.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${c9.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${gn}</slot>
      <slot name="pause">${go}</slot>
    </slot>
  `},gq.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${dA("Play")}</slot>
    <slot name="tooltip-pause">${dA("Pause")}</slot>
  `},dH.customElements.get("media-play-button")||dH.customElements.define("media-play-button",gq);let gr={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class gs extends dH.HTMLElement{static get observedAttributes(){return[gr.PLACEHOLDER_SRC,gr.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(a,b,c){if(a===gr.SRC&&(null==c?this.image.removeAttribute(gr.SRC):this.image.setAttribute(gr.SRC,c)),a===gr.PLACEHOLDER_SRC)if(null==c)this.image.style.removeProperty("background-image");else{var d;d=this.image,d.style["background-image"]=`url('${c}')`}}get placeholderSrc(){return d2(this,gr.PLACEHOLDER_SRC)}set placeholderSrc(a){d3(this,gr.SRC,a)}get src(){return d2(this,gr.SRC)}set src(a){d3(this,gr.SRC,a)}}gs.shadowRootOptions={mode:"open"},gs.getTemplateHTML=function(a){return`
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
  `},dH.customElements.get("media-poster-image")||dH.customElements.define("media-poster-image",gs);var gt=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};aT=new WeakMap,dH.customElements.get("media-preview-chapter-display")||dH.customElements.define("media-preview-chapter-display",class extends fL{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aT,void 0),((a,b,c,d)=>(gt(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aT,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===c9.MEDIA_PREVIEW_CHAPTER&&c!==b&&null!=c){var d;(gt(this,aT,"read from private field"),d?d.call(this):aT.get(this)).textContent=c,""!==c?this.setAttribute("aria-valuetext",`chapter: ${c}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return d2(this,c9.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(a){d3(this,c9.MEDIA_PREVIEW_CHAPTER,a)}});var gu=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gv=(a,b,c)=>(gu(a,b,"read from private field"),c?c.call(a):b.get(a)),gw=(a,b,c,d)=>(gu(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class gx extends dH.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aU,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[c6.MEDIA_CONTROLLER,c9.MEDIA_PREVIEW_IMAGE,c9.MEDIA_PREVIEW_COORDS]}connectedCallback(){var a,b,c;let d=this.getAttribute(c6.MEDIA_CONTROLLER);d&&(gw(this,aU,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=gv(this,aU))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=gv(this,aU))?void 0:a.unassociateElement)||b.call(a,this),gw(this,aU,null)}attributeChangedCallback(a,b,c){var d,e,f,g,h;[c9.MEDIA_PREVIEW_IMAGE,c9.MEDIA_PREVIEW_COORDS].includes(a)&&this.update(),a===c6.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=gv(this,aU))?void 0:d.unassociateElement)||e.call(d,this),gw(this,aU,null)),c&&this.isConnected&&(gw(this,aU,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gv(this,aU))?void 0:g.associateElement)||h.call(g,this)))}get mediaPreviewImage(){return d2(this,c9.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){d3(this,c9.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewCoords(){let a=this.getAttribute(c9.MEDIA_PREVIEW_COORDS);if(a)return a.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(a){if(!a)return void this.removeAttribute(c9.MEDIA_PREVIEW_COORDS);this.setAttribute(c9.MEDIA_PREVIEW_COORDS,a.join(" "))}update(){let a=this.mediaPreviewCoords,b=this.mediaPreviewImage;if(!(a&&b))return;let[c,d,e,f]=a,g=b.split("#")[0],{maxWidth:h,maxHeight:i,minWidth:j,minHeight:k}=getComputedStyle(this),l=Math.min(parseInt(h)/e,parseInt(i)/f),m=Math.max(parseInt(j)/e,parseInt(k)/f),n=l<1,o=n?l:m>1?m:1,{style:p}=dY(this.shadowRoot,":host"),q=dY(this.shadowRoot,"img").style,r=this.shadowRoot.querySelector("img"),s=n?"min":"max";p.setProperty(`${s}-width`,"initial","important"),p.setProperty(`${s}-height`,"initial","important"),p.width=`${e*o}px`,p.height=`${f*o}px`;let t=()=>{q.width=`${this.imgWidth*o}px`,q.height=`${this.imgHeight*o}px`,q.display="block"};r.src!==g&&(r.onload=()=>{this.imgWidth=r.naturalWidth,this.imgHeight=r.naturalHeight,t()},r.src=g,t()),t(),q.transform=`translate(-${c*o}px, -${d*o}px)`}}aU=new WeakMap,gx.shadowRootOptions={mode:"open"},gx.getTemplateHTML=function(a){return`
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
  `},dH.customElements.get("media-preview-thumbnail")||dH.customElements.define("media-preview-thumbnail",gx);var gy=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gz=(a,b,c)=>(gy(a,b,"read from private field"),c?c.call(a):b.get(a));aV=new WeakMap,dH.customElements.get("media-preview-time-display")||dH.customElements.define("media-preview-time-display",class extends fL{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aV,void 0),((a,b,c,d)=>(gy(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aV,this.shadowRoot.querySelector("slot")),gz(this,aV).textContent=dv(0)}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_PREVIEW_TIME]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_PREVIEW_TIME&&null!=c&&(gz(this,aV).textContent=dv(parseFloat(c)))}get mediaPreviewTime(){return d$(this,c9.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){d_(this,c9.MEDIA_PREVIEW_TIME,a)}});let gA={SEEK_OFFSET:"seekoffset"};class gB extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_CURRENT_TIME,gA.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=d$(this,gA.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===gA.SEEK_OFFSET&&(this.seekOffset=d$(this,gA.SEEK_OFFSET,30))}get seekOffset(){return d$(this,gA.SEEK_OFFSET,30)}set seekOffset(a){d_(this,gA.SEEK_OFFSET,a),this.setAttribute("aria-label",dA("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),dR(dS(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return d$(this,c9.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){d_(this,c9.MEDIA_CURRENT_TIME,a)}handleClick(){let a=Math.max(this.mediaCurrentTime-this.seekOffset,0),b=new dH.CustomEvent(c5.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}gB.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${c}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},gB.getTooltipContentHTML=function(){return dA("Seek backward")},dH.customElements.get("media-seek-backward-button")||dH.customElements.define("media-seek-backward-button",gB);let gC={SEEK_OFFSET:"seekoffset"};class gD extends ff{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_CURRENT_TIME,gC.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=d$(this,gC.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===gC.SEEK_OFFSET&&(this.seekOffset=d$(this,gC.SEEK_OFFSET,30))}get seekOffset(){return d$(this,gC.SEEK_OFFSET,30)}set seekOffset(a){d_(this,gC.SEEK_OFFSET,a),this.setAttribute("aria-label",dA("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),dR(dS(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return d$(this,c9.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){d_(this,c9.MEDIA_CURRENT_TIME,a)}handleClick(){let a=this.mediaCurrentTime+this.seekOffset,b=new dH.CustomEvent(c5.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}gD.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${c}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},gD.getTooltipContentHTML=function(){return dA("Seek forward")},dH.customElements.get("media-seek-forward-button")||dH.customElements.define("media-seek-forward-button",gD);var gE=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gF=(a,b,c)=>(gE(a,b,"read from private field"),c?c.call(a):b.get(a));let gG={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},gH=[...Object.values(gG),c9.MEDIA_CURRENT_TIME,c9.MEDIA_DURATION,c9.MEDIA_SEEKABLE],gI=["Enter"," "],gJ="&nbsp;/&nbsp;",gK=(a,{timesSep:b=gJ}={})=>{var c,d;let e=null!=(c=a.mediaCurrentTime)?c:0,[,f]=null!=(d=a.mediaSeekable)?d:[],g=0;Number.isFinite(a.mediaDuration)?g=a.mediaDuration:Number.isFinite(f)&&(g=f);let h=a.remaining?dv(0-(g-e)):dv(e);return a.showDuration?`${h}${b}${dv(g)}`:h};class gL extends fL{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aW,void 0),((a,b,c,d)=>(gE(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aW,this.shadowRoot.querySelector("slot")),gF(this,aW).innerHTML=`${gK(this)}`}static get observedAttributes(){return[...super.observedAttributes,...gH,"disabled"]}connectedCallback(){let{style:a}=dY(this.shadowRoot,":host(:hover:not([notoggle]))");a.setProperty("cursor","var(--media-cursor, pointer)"),a.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",dA("playback time"));let b=a=>{let{key:c}=a;if(!gI.includes(c))return void this.removeEventListener("keyup",b);this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{let{metaKey:c,altKey:d,key:e}=a;if(c||d||!gI.includes(e))return void this.removeEventListener("keyup",b);this.addEventListener("keyup",b)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(a,b,c){gH.includes(a)?this.update():"disabled"===a&&c!==b&&(null==c?this.enable():this.disable()),super.attributeChangedCallback(a,b,c)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return d0(this,gG.REMAINING)}set remaining(a){d1(this,gG.REMAINING,a)}get showDuration(){return d0(this,gG.SHOW_DURATION)}set showDuration(a){d1(this,gG.SHOW_DURATION,a)}get noToggle(){return d0(this,gG.NO_TOGGLE)}set noToggle(a){d1(this,gG.NO_TOGGLE,a)}get mediaDuration(){return d$(this,c9.MEDIA_DURATION)}set mediaDuration(a){d_(this,c9.MEDIA_DURATION,a)}get mediaCurrentTime(){return d$(this,c9.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){d_(this,c9.MEDIA_CURRENT_TIME,a)}get mediaSeekable(){let a=this.getAttribute(c9.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(c9.MEDIA_SEEKABLE);this.setAttribute(c9.MEDIA_SEEKABLE,a.join(":"))}update(){let a=gK(this);(a=>{var b;let c=a.mediaCurrentTime,[,d]=null!=(b=a.mediaSeekable)?b:[],e=null;if(Number.isFinite(a.mediaDuration)?e=a.mediaDuration:Number.isFinite(d)&&(e=d),null==c||null===e)return a.setAttribute("aria-valuetext","video not loaded, unknown time.");let f=a.remaining?du(0-(e-c)):du(c);if(!a.showDuration)return a.setAttribute("aria-valuetext",f);let g=du(e),h=`${f} of ${g}`;a.setAttribute("aria-valuetext",h)})(this),a!==gF(this,aW).innerHTML&&(gF(this,aW).innerHTML=a)}}aW=new WeakMap,gL.getSlotTemplateHTML=function(a,b){return`
    <slot>${gK(b)}</slot>
  `},dH.customElements.get("media-time-display")||dH.customElements.define("media-time-display",gL);var gM=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gN=(a,b,c)=>(gM(a,b,"read from private field"),c?c.call(a):b.get(a)),gO=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gP=(a,b,c,d)=>(gM(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class gQ{constructor(a,b,c){gO(this,aX,void 0),gO(this,aY,void 0),gO(this,aZ,void 0),gO(this,a$,void 0),gO(this,a_,void 0),gO(this,a0,void 0),gO(this,a1,void 0),gO(this,a2,void 0),gO(this,a3,0),gO(this,a4,(a=performance.now())=>{gP(this,a3,requestAnimationFrame(gN(this,a4))),gP(this,a$,performance.now()-gN(this,aZ));let b=1e3/this.fps;if(gN(this,a$)>b){gP(this,aZ,a-gN(this,a$)%b);let c=1e3/((a-gN(this,aY))/++((a,b,c,d)=>({set _(value){gP(a,b,value,c)},get _(){return gN(a,b,d)}}))(this,a_)._),d=(a-gN(this,a0))/1e3/this.duration,e=gN(this,a1)+d*this.playbackRate;e-gN(this,aX).valueAsNumber>0?gP(this,a2,this.playbackRate/this.duration/c):(gP(this,a2,.995*gN(this,a2)),e=gN(this,aX).valueAsNumber+gN(this,a2)),this.callback(e)}}),gP(this,aX,a),this.callback=b,this.fps=c}start(){0===gN(this,a3)&&(gP(this,aZ,performance.now()),gP(this,aY,gN(this,aZ)),gP(this,a_,0),gN(this,a4).call(this))}stop(){0!==gN(this,a3)&&(cancelAnimationFrame(gN(this,a3)),gP(this,a3,0))}update({start:a,duration:b,playbackRate:c}){let d=a-gN(this,aX).valueAsNumber,e=Math.abs(b-this.duration);(d>0||d<-.03||e>=.5)&&this.callback(a),gP(this,a1,a),gP(this,a0,performance.now()),this.duration=b,this.playbackRate=c}}aX=new WeakMap,aY=new WeakMap,aZ=new WeakMap,a$=new WeakMap,a_=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakMap;var gR=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gS=(a,b,c)=>(gR(a,b,"read from private field"),c?c.call(a):b.get(a)),gT=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gU=(a,b,c,d)=>(gR(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),gV=(a,b,c)=>(gR(a,b,"access private method"),c);let gW=(a,b=a.mediaCurrentTime)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:Math.max(0,Math.min((b-c)/(d-c),1))},gX=(a,b=a.range.valueAsNumber)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:b*(d-c)+c};class gY extends fD{constructor(){super(),gT(this,be),gT(this,bg),gT(this,bj),gT(this,bl),gT(this,bn),gT(this,bp),gT(this,br),gT(this,bt),gT(this,a5,void 0),gT(this,a6,void 0),gT(this,a7,void 0),gT(this,a8,void 0),gT(this,a9,void 0),gT(this,ba,void 0),gT(this,bb,void 0),gT(this,bc,void 0),gT(this,bd,void 0),gT(this,bi,a=>{this.dragging||(dq(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),gU(this,a7,this.shadowRoot.querySelectorAll('[part~="box"]')),gU(this,a9,this.shadowRoot.querySelector('[part~="preview-box"]')),gU(this,ba,this.shadowRoot.querySelector('[part~="current-box"]'));let a=getComputedStyle(this);gU(this,bb,parseInt(a.getPropertyValue("--media-box-padding-left"))),gU(this,bc,parseInt(a.getPropertyValue("--media-box-padding-right"))),gU(this,a6,new gQ(this.range,gS(this,bi),60))}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_PAUSED,c9.MEDIA_DURATION,c9.MEDIA_SEEKABLE,c9.MEDIA_CURRENT_TIME,c9.MEDIA_PREVIEW_IMAGE,c9.MEDIA_PREVIEW_TIME,c9.MEDIA_PREVIEW_CHAPTER,c9.MEDIA_BUFFERED,c9.MEDIA_PLAYBACK_RATE,c9.MEDIA_LOADING,c9.MEDIA_ENDED]}connectedCallback(){var a;super.connectedCallback(),this.range.setAttribute("aria-label",dA("seek")),gV(this,be,bf).call(this),gU(this,a5,this.getRootNode()),null==(a=gS(this,a5))||a.addEventListener("transitionstart",this)}disconnectedCallback(){var a;super.disconnectedCallback(),gV(this,be,bf).call(this),null==(a=gS(this,a5))||a.removeEventListener("transitionstart",this),gU(this,a5,null)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),b!=c&&(a===c9.MEDIA_CURRENT_TIME||a===c9.MEDIA_PAUSED||a===c9.MEDIA_ENDED||a===c9.MEDIA_LOADING||a===c9.MEDIA_DURATION||a===c9.MEDIA_SEEKABLE?(gS(this,a6).update({start:gW(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),gV(this,be,bf).call(this),(a=>{let b=a.range,c=du(+gX(a)),d=du(+a.mediaSeekableEnd),e=c&&d?`${c} of ${d}`:"video not loaded, unknown time.";b.setAttribute("aria-valuetext",e)})(this)):a===c9.MEDIA_BUFFERED&&this.updateBufferedBar(),(a===c9.MEDIA_DURATION||a===c9.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=gS(this,bd),this.updateBar()))}get mediaChaptersCues(){return gS(this,bd)}set mediaChaptersCues(a){var b;gU(this,bd,a),this.updateSegments(null==(b=gS(this,bd))?void 0:b.map(a=>({start:gW(this,a.startTime),end:gW(this,a.endTime)})))}get mediaPaused(){return d0(this,c9.MEDIA_PAUSED)}set mediaPaused(a){d1(this,c9.MEDIA_PAUSED,a)}get mediaLoading(){return d0(this,c9.MEDIA_LOADING)}set mediaLoading(a){d1(this,c9.MEDIA_LOADING,a)}get mediaDuration(){return d$(this,c9.MEDIA_DURATION)}set mediaDuration(a){d_(this,c9.MEDIA_DURATION,a)}get mediaCurrentTime(){return d$(this,c9.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){d_(this,c9.MEDIA_CURRENT_TIME,a)}get mediaPlaybackRate(){return d$(this,c9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d_(this,c9.MEDIA_PLAYBACK_RATE,a)}get mediaBuffered(){let a=this.getAttribute(c9.MEDIA_BUFFERED);return a?a.split(" ").map(a=>a.split(":").map(a=>+a)):[]}set mediaBuffered(a){if(!a)return void this.removeAttribute(c9.MEDIA_BUFFERED);let b=a.map(a=>a.join(":")).join(" ");this.setAttribute(c9.MEDIA_BUFFERED,b)}get mediaSeekable(){let a=this.getAttribute(c9.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(c9.MEDIA_SEEKABLE);this.setAttribute(c9.MEDIA_SEEKABLE,a.join(":"))}get mediaSeekableEnd(){var a;let[,b=this.mediaDuration]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaSeekableStart(){var a;let[b=0]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaPreviewImage(){return d2(this,c9.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){d3(this,c9.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewTime(){return d$(this,c9.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){d_(this,c9.MEDIA_PREVIEW_TIME,a)}get mediaEnded(){return d0(this,c9.MEDIA_ENDED)}set mediaEnded(a){d1(this,c9.MEDIA_ENDED,a)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var a;let b,c=this.mediaBuffered;if(!c.length)return;if(this.mediaEnded)b=1;else{let d=this.mediaCurrentTime,[,e=this.mediaSeekableStart]=null!=(a=c.find(([a,b])=>a<=d&&d<=b))?a:[];b=gW(this,e)}let{style:d}=dY(this.shadowRoot,"#buffered");d.setProperty("width",`${100*b}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let a=dY(this.shadowRoot,"#current-rail"),b=dY(this.shadowRoot,'[part~="current-box"]'),c=gV(this,bj,bk).call(this,gS(this,ba)),d=gV(this,bl,bm).call(this,c,this.range.valueAsNumber),e=gV(this,bn,bo).call(this,c,this.range.valueAsNumber);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${c.range.width}`),b.style.setProperty("--_box-shift",`${e}`),b.style.setProperty("--_box-width",`${c.box.width}px`),b.style.setProperty("visibility","initial")}handleEvent(a){switch(super.handleEvent(a),a.type){case"input":gV(this,bt,bu).call(this);break;case"pointermove":gV(this,bp,bq).call(this,a);break;case"pointerup":case"pointerleave":gV(this,br,bs).call(this,null);break;case"transitionstart":dT(a.target,this)&&setTimeout(()=>gV(this,be,bf).call(this),0)}}}a5=new WeakMap,a6=new WeakMap,a7=new WeakMap,a8=new WeakMap,a9=new WeakMap,ba=new WeakMap,bb=new WeakMap,bc=new WeakMap,bd=new WeakMap,be=new WeakSet,bf=function(){gV(this,bg,bh).call(this)?gS(this,a6).start():gS(this,a6).stop()},bg=new WeakSet,bh=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&dX(this)},bi=new WeakMap,bj=new WeakSet,bk=function(a){var b;let c=(null!=(b=this.getAttribute("bounds")?dU(this,`#${this.getAttribute("bounds")}`):this.parentElement)?b:this).getBoundingClientRect(),d=this.range.getBoundingClientRect(),e=a.offsetWidth,f=-(d.left-c.left-e/2),g=c.right-d.left-e/2;return{box:{width:e,min:f,max:g},bounds:c,range:d}},bl=new WeakSet,bm=function(a,b){let c=`${100*b}%`,{width:d,min:e,max:f}=a.box;if(!d)return c;if(!Number.isNaN(e)){let a=`calc(1 / var(--_range-width) * 100 * ${e}% + var(--media-box-padding-left))`;c=`max(${a}, ${c})`}if(!Number.isNaN(f)){let a=`calc(1 / var(--_range-width) * 100 * ${f}% - var(--media-box-padding-right))`;c=`min(${c}, ${a})`}return c},bn=new WeakSet,bo=function(a,b){let{width:c,min:d,max:e}=a.box,f=b*a.range.width;if(f<d+gS(this,bb)){let b=a.range.left-a.bounds.left-gS(this,bb);return`${f-c/2+b}px`}if(f>e-gS(this,bc)){let b=a.bounds.right-a.range.right-gS(this,bc);return`${f+c/2-b-a.range.width}px`}return 0},bp=new WeakSet,bq=function(a){let b=[...gS(this,a7)].some(b=>a.composedPath().includes(b));if(!this.dragging&&(b||!a.composedPath().includes(this)))return void gV(this,br,bs).call(this,null);let c=this.mediaSeekableEnd;if(!c)return;let d=dY(this.shadowRoot,"#preview-rail"),e=dY(this.shadowRoot,'[part~="preview-box"]'),f=gV(this,bj,bk).call(this,gS(this,a9)),g=(a.clientX-f.range.left)/f.range.width;g=Math.max(0,Math.min(1,g));let h=gV(this,bl,bm).call(this,f,g),i=gV(this,bn,bo).call(this,f,g);d.style.transform=`translateX(${h})`,d.style.setProperty("--_range-width",`${f.range.width}`),e.style.setProperty("--_box-shift",`${i}`),e.style.setProperty("--_box-width",`${f.box.width}px`),1>Math.abs(Math.round(gS(this,a8))-Math.round(g*c))&&g>.01&&g<.99||(gU(this,a8,g*c),gV(this,br,bs).call(this,gS(this,a8)))},br=new WeakSet,bs=function(a){this.dispatchEvent(new dH.CustomEvent(c5.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:a}))},bt=new WeakSet,bu=function(){gS(this,a6).stop();let a=gX(this);this.dispatchEvent(new dH.CustomEvent(c5.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a}))},gY.shadowRootOptions={mode:"open"},gY.getTemplateHTML=function(a){return`
    ${fD.getTemplateHTML(a)}
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

      :host(:is([${c9.MEDIA_PREVIEW_IMAGE}], [${c9.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${c9.MEDIA_PREVIEW_IMAGE}], [${c9.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
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

      :host([${c9.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${c9.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${c9.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${c9.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${c9.MEDIA_PREVIEW_TIME}]:hover) {
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

      :host([${c9.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${c9.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${c9.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${c9.MEDIA_PREVIEW_CHAPTER}]) {
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

      :host([${c9.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${c9.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${c9.MEDIA_PREVIEW_TIME}]:hover) {
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
          <template shadowrootmode="${gx.shadowRootOptions.mode}">
            ${gx.getTemplateHTML({})}
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
  `},dH.customElements.get("media-time-range")||dH.customElements.define("media-time-range",gY),dH.customElements.get("media-volume-range")||dH.customElements.define("media-volume-range",class extends fD{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_VOLUME,c9.MEDIA_MUTED,c9.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let a=this.range.value,b=new dH.CustomEvent(c5.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",dA("volume"))}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===c9.MEDIA_VOLUME||a===c9.MEDIA_MUTED){let a;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(a=this.range.valueAsNumber,`${Math.round(100*a)}%`)),this.updateBar()}}get mediaVolume(){return d$(this,c9.MEDIA_VOLUME,1)}set mediaVolume(a){d_(this,c9.MEDIA_VOLUME,a)}get mediaMuted(){return d0(this,c9.MEDIA_MUTED)}set mediaMuted(a){d1(this,c9.MEDIA_MUTED,a)}get mediaVolumeUnavailable(){return d2(this,c9.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(a){d3(this,c9.MEDIA_VOLUME_UNAVAILABLE,a)}});var gZ=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},g$=(a,b,c)=>(gZ(a,b,"read from private field"),c?c.call(a):b.get(a)),g_=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},g0=(a,b,c,d)=>(gZ(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let g1={processCallback(a,b,c){if(c){for(let[a,d]of b)if(a in c){let b=c[a];"boolean"==typeof b&&d instanceof g9&&"boolean"==typeof d.element[d.attributeName]?d.booleanValue=b:"function"==typeof b&&d instanceof g9?d.element[d.attributeName]=b:d.value=b}}}};class g2 extends dH.DocumentFragment{constructor(a,b,c=g1){var d;super(),g_(this,bv,void 0),g_(this,bw,void 0),this.append(a.content.cloneNode(!0)),g0(this,bv,g3(this)),g0(this,bw,c),null==(d=c.createCallback)||d.call(c,this,g$(this,bv),b),c.processCallback(this,g$(this,bv),b)}update(a){g$(this,bw).processCallback(this,g$(this,bv),a)}}bv=new WeakMap,bw=new WeakMap;let g3=(a,b=[])=>{let c,d;for(let e of a.attributes||[])if(e.value.includes("{{")){let f=new g8;for([c,d]of g5(e.value))if(c){let c=new g9(a,e.name,e.namespaceURI);f.append(c),b.push([d,c])}else f.append(d);e.value=f.toString()}for(let e of a.childNodes)if(1!==e.nodeType||e instanceof HTMLTemplateElement){let f=e.data;if(1===e.nodeType||f.includes("{{")){let g=[];if(f)for([c,d]of g5(f))if(c){let c=new ha(a);g.push(c),b.push([d,c])}else g.push(new Text(d));else if(e instanceof HTMLTemplateElement){let c=new hb(a,e);g.push(c),b.push([c.expression,c])}e.replaceWith(...g.flatMap(a=>a.replacementNodes||[a]))}}else g3(e,b);return b},g4={},g5=a=>{let b="",c=0,d=g4[a],e=0,f;if(d)return d;for(d=[];f=a[e];e++)"{"===f&&"{"===a[e+1]&&"\\"!==a[e-1]&&a[e+2]&&1==++c?(b&&d.push([0,b]),b="",e++):"}"!==f||"}"!==a[e+1]||"\\"===a[e-1]||--c?b+=f||"":(d.push([1,b.trim()]),b="",e++);return b&&d.push([0,(c>0?"{{":"")+b]),g4[a]=d};class g6{get value(){return""}set value(a){}toString(){return this.value}}let g7=new WeakMap;class g8{constructor(){g_(this,bx,[])}[Symbol.iterator](){return g$(this,bx).values()}get length(){return g$(this,bx).length}item(a){return g$(this,bx)[a]}append(...a){for(let b of a)b instanceof g9&&g7.set(b,this),g$(this,bx).push(b)}toString(){return g$(this,bx).join("")}}bx=new WeakMap;class g9 extends g6{constructor(a,b,c){super(),g_(this,bC),g_(this,by,""),g_(this,bz,void 0),g_(this,bA,void 0),g_(this,bB,void 0),g0(this,bz,a),g0(this,bA,b),g0(this,bB,c)}get attributeName(){return g$(this,bA)}get attributeNamespace(){return g$(this,bB)}get element(){return g$(this,bz)}get value(){return g$(this,by)}set value(a){g$(this,by)!==a&&(g0(this,by,a),g$(this,bC,bD)&&1!==g$(this,bC,bD).length?g$(this,bz).setAttributeNS(g$(this,bB),g$(this,bA),g$(this,bC,bD).toString()):null==a?g$(this,bz).removeAttributeNS(g$(this,bB),g$(this,bA)):g$(this,bz).setAttributeNS(g$(this,bB),g$(this,bA),a))}get booleanValue(){return g$(this,bz).hasAttributeNS(g$(this,bB),g$(this,bA))}set booleanValue(a){if(g$(this,bC,bD)&&1!==g$(this,bC,bD).length)throw new DOMException("Value is not fully templatized");this.value=a?"":null}}by=new WeakMap,bz=new WeakMap,bA=new WeakMap,bB=new WeakMap,bC=new WeakSet,bD=function(){return g7.get(this)};class ha extends g6{constructor(a,b){super(),g_(this,bE,void 0),g_(this,bF,void 0),g0(this,bE,a),g0(this,bF,b?[...b]:[new Text])}get replacementNodes(){return g$(this,bF)}get parentNode(){return g$(this,bE)}get nextSibling(){return g$(this,bF)[g$(this,bF).length-1].nextSibling}get previousSibling(){return g$(this,bF)[0].previousSibling}get value(){return g$(this,bF).map(a=>a.textContent).join("")}set value(a){this.replace(a)}replace(...a){let b=a.flat().flatMap(a=>null==a?[new Text]:a.forEach?[...a]:11===a.nodeType?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);b.length||b.push(new Text),g0(this,bF,function(a,b,c,d=null){let e=0,f,g,h,i=c.length,j=b.length;for(;e<i&&e<j&&b[e]==c[e];)e++;for(;e<i&&e<j&&c[i-1]==b[j-1];)d=c[--j,--i];if(e==j)for(;e<i;)a.insertBefore(c[e++],d);if(e==i)for(;e<j;)a.removeChild(b[e++]);else{for(f=b[e];e<i;)h=c[e++],g=f?f.nextSibling:d,f==h?f=g:e<i&&c[e]==g?(a.replaceChild(h,f),f=g):a.insertBefore(h,f);for(;f!=d;)g=f.nextSibling,a.removeChild(f),f=g}return c}(g$(this,bF)[0].parentNode,g$(this,bF),b,this.nextSibling))}}bE=new WeakMap,bF=new WeakMap;class hb extends ha{constructor(a,b){let c=b.getAttribute("directive")||b.getAttribute("type"),d=b.getAttribute("expression")||b.getAttribute(c)||"";d.startsWith("{{")&&(d=d.trim().slice(2,-2).trim()),super(a),this.expression=d,this.template=b,this.directive=c}}let hc={string:a=>String(a)};class hd{constructor(a){this.template=a,this.state=void 0}}let he=new WeakMap,hf=new WeakMap,hg={partial:(a,b)=>{b[a.expression]=new hd(a.template)},if:(a,b)=>{var c;if(hk(a.expression,b))if(he.get(a)!==a.template){he.set(a,a.template);let c=new g2(a.template,b,hi);a.replace(c),hf.set(a,c)}else null==(c=hf.get(a))||c.update(b);else a.replace(""),he.delete(a),hf.delete(a)}},hh=Object.keys(hg),hi={processCallback(a,b,c){var d,e;if(c)for(let[a,f]of b){if(f instanceof hb){if(!f.directive){let a=hh.find(a=>f.template.hasAttribute(a));a&&(f.directive=a,f.expression=f.template.getAttribute(a))}null==(d=hg[f.directive])||d.call(hg,f,c);continue}let b=hk(a,c);if(b instanceof hd){he.get(f)!==b.template?(he.set(f,b.template),f.value=b=new g2(b.template,b.state,hi),hf.set(f,b)):null==(e=hf.get(f))||e.update(b.state);continue}b?(f instanceof g9&&f.attributeName.startsWith("aria-")&&(b=String(b)),f instanceof g9?"boolean"==typeof b?f.booleanValue=b:"function"==typeof b?f.element[f.attributeName]=b:f.value=b:(f.value=b,he.delete(f),hf.delete(f))):f instanceof g9?f.value=void 0:(f.value=void 0,he.delete(f),hf.delete(f))}}},hj={"!":a=>!a,"!!":a=>!!a,"==":(a,b)=>a==b,"!=":(a,b)=>a!=b,">":(a,b)=>a>b,">=":(a,b)=>a>=b,"<":(a,b)=>a<b,"<=":(a,b)=>a<=b,"??":(a,b)=>null!=a?a:b,"|":(a,b)=>{var c;return null==(c=hc[b])?void 0:c.call(hc,a)}};function hk(a,b={}){var c,d,e,f,g,h,i;let j=(function(a,b){let c,d,e,f=[];for(;a;){for(let f in e=null,c=a.length,b)(d=b[f].exec(a))&&d.index<c&&(e={token:d[0],type:f,matches:d.slice(1)},c=d.index);c&&f.push({token:a.substr(0,c),type:void 0}),e&&f.push(e),a=a.substr(c+(e?e.token.length:0))}return f})(a,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:a})=>"ws"!==a);if(0===j.length||j.some(({type:a})=>!a))return hl(a);if((null==(c=j[0])?void 0:c.token)===">"){let c=b[null==(d=j[1])?void 0:d.token];if(!c)return hl(a);let h={...b};c.state=h;let i=j.slice(2);for(let a=0;a<i.length;a+=3){let c=null==(e=i[a])?void 0:e.token,d=null==(f=i[a+1])?void 0:f.token,j=null==(g=i[a+2])?void 0:g.token;c&&"="===d&&(h[c]=hn(j,b))}return c}if(1===j.length)return hm(j[0])?hn(j[0].token,b):hl(a);if(2===j.length){let c=hj[null==(h=j[0])?void 0:h.token];return c&&hm(j[1])?c(hn(j[1].token,b)):hl(a)}if(3===j.length){let c=null==(i=j[1])?void 0:i.token,d=hj[c];if(!d||!hm(j[0])||!hm(j[2]))return hl(a);let e=hn(j[0].token,b);return d(e,"|"===c?j[2].token:hn(j[2].token,b))}}function hl(a){return console.warn(`Warning: invalid expression \`${a}\``),!1}function hm({type:a}){return["number","boolean","string","param"].includes(a)}function hn(a,b){let c=a[0],d=a.slice(-1);return"true"===a||"false"===a?"true"===a:c===d&&["'",'"'].includes(c)?a.slice(1,-1):dr(a)?parseFloat(a):b[a]}var ho=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hp=(a,b,c)=>(ho(a,b,"read from private field"),c?c.call(a):b.get(a)),hq=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hr=(a,b,c,d)=>(ho(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hs=(a,b,c)=>(ho(a,b,"access private method"),c);let ht={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},hu=dI.createElement("template");hu.innerHTML=`
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
`;class hv extends dH.HTMLElement{constructor(){super(),hq(this,bJ),hq(this,bL),hq(this,bG,void 0),hq(this,bH,void 0),hq(this,bI,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let a=new MutationObserver(a=>{var b;(!this.mediaController||(null==(b=this.mediaController)?void 0:b.breakpointsComputed))&&a.some(a=>{let b=a.target;return b===this||"media-controller"===b.localName&&!!(ht[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});a.observe(this,{attributes:!0}),a.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(da.BREAKPOINTS_COMPUTED,this.render),hs(this,bJ,bK).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var a;return null!=(a=hp(this,bG))?a:this.constructor.template}set template(a){hr(this,bI,null),hr(this,bG,a),this.createRenderer()}get props(){var a,b,c;let d=[...Array.from(null!=(b=null==(a=this.mediaController)?void 0:a.attributes)?b:[]).filter(({name:a})=>ht[a]||a.startsWith("breakpoint")),...Array.from(this.attributes)],e={};for(let a of d){let b=null!=(c=ht[a.name])?c:a.name.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()),{value:d}=a;null!=d?(dr(d)&&(d=parseFloat(d)),e[b]=""===d||d):e[b]=!1}return e}attributeChangedCallback(a,b,c){"template"===a&&b!=c&&hs(this,bL,bM).call(this)}connectedCallback(){hs(this,bL,bM).call(this)}createRenderer(){this.template&&this.template!==hp(this,bH)&&(hr(this,bH,this.template),this.renderer=new g2(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(hu.content.cloneNode(!0),this.renderer))}render(){var a;null==(a=this.renderer)||a.update(this.props)}}async function hw(a){let b=await fetch(a);if(200!==b.status)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);return b.text()}function hx(a){return a.split("-")[0]}bG=new WeakMap,bH=new WeakMap,bI=new WeakMap,bJ=new WeakSet,bK=function(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}},bL=new WeakSet,bM=function(){var a;let b=this.getAttribute("template");if(!b||b===hp(this,bI))return;let c=this.getRootNode(),d=null==(a=null==c?void 0:c.getElementById)?void 0:a.call(c,b);if(d){hr(this,bI,b),hr(this,bG,d),this.createRenderer();return}(function(a){if(!/^(\/|\.\/|https?:\/\/)/.test(a))return!1;let b=/^https?:\/\//.test(a)?void 0:location.origin;try{new URL(a,b)}catch(a){return!1}return!0})(b)&&(hr(this,bI,b),hw(b).then(a=>{let b=dI.createElement("template");b.innerHTML=a,hr(this,bG,b),this.createRenderer()}).catch(console.error))},hv.observedAttributes=["template"],hv.processor=hi,dH.customElements.get("media-theme")||dH.customElements.define("media-theme",hv);class hy extends Event{constructor({action:a="auto",relatedTarget:b,...c}){super("invoke",c),this.action=a,this.relatedTarget=b}}class hz extends Event{constructor({newState:a,oldState:b,...c}){super("toggle",c),this.newState=a,this.oldState=b}}var hA=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hB=(a,b,c)=>(hA(a,b,"read from private field"),c?c.call(a):b.get(a)),hC=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hD=(a,b,c,d)=>(hA(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hE=(a,b,c)=>(hA(a,b,"access private method"),c);function hF({type:a,text:b,value:c,checked:d}){let e=dI.createElement("media-chrome-menu-item");e.type=null!=a?a:"",e.part.add("menu-item"),a&&e.part.add(a),e.value=c,e.checked=d;let f=dI.createElement("span");return f.textContent=b,e.append(f),e}function hG(a,b){let c=a.querySelector(`:scope > [slot="${b}"]`);if((null==c?void 0:c.nodeName)=="SLOT"&&(c=c.assignedElements({flatten:!0})[0]),c)return c.cloneNode(!0);let d=a.shadowRoot.querySelector(`[name="${b}"] > svg`);return d?d.cloneNode(!0):""}let hH={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class hI extends dH.HTMLElement{constructor(){if(super(),hC(this,bU),hC(this,bX),hC(this,bZ),hC(this,b_),hC(this,b1),hC(this,b5),hC(this,b7),hC(this,b9),hC(this,cb),hC(this,cd),hC(this,cf),hC(this,ch),hC(this,cj),hC(this,cl),hC(this,cn),hC(this,cp),hC(this,cr),hC(this,bN,null),hC(this,bO,null),hC(this,bP,null),hC(this,bQ,new Set),hC(this,bR,void 0),hC(this,bS,!1),hC(this,bT,null),hC(this,bW,()=>{let a=hB(this,bQ),b=new Set(this.items);for(let c of a)b.has(c)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:c}));for(let c of b)a.has(c)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:c}));hD(this,bQ,b)}),hC(this,b3,()=>{hE(this,b5,b6).call(this),hE(this,b7,b8).call(this,!1)}),hC(this,b4,()=>{hE(this,b5,b6).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),hD(this,bR,new MutationObserver(hB(this,bW))),hB(this,bR).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[hH.DISABLED,hH.HIDDEN,hH.STYLE,hH.ANCHOR,c6.MEDIA_CONTROLLER]}static formatMenuItemText(a,b){return a}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(a){switch(a.type){case"slotchange":hE(this,bU,bV).call(this,a);break;case"invoke":hE(this,bZ,b$).call(this,a);break;case"click":hE(this,b9,ca).call(this,a);break;case"toggle":hE(this,cd,ce).call(this,a);break;case"focusout":hE(this,ch,ci).call(this,a);break;case"keydown":hE(this,cj,ck).call(this,a)}}connectedCallback(){var a,b;hD(this,bT,dZ(this.shadowRoot,":host")),hE(this,bX,bY).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),hD(this,bN,dQ(this)),null==(b=null==(a=hB(this,bN))?void 0:a.associateElement)||b.call(a,this),this.hidden||(dM(hK(this),hB(this,b3)),dM(this,hB(this,b4)))}disconnectedCallback(){var a,b;dN(hK(this),hB(this,b3)),dN(this,hB(this,b4)),this.disable(),null==(b=null==(a=hB(this,bN))?void 0:a.unassociateElement)||b.call(a,this),hD(this,bN,null)}attributeChangedCallback(a,b,c){var d,e,f,g;a===hH.HIDDEN&&c!==b?(hB(this,bS)||hD(this,bS,!0),this.hidden?hE(this,b1,b2).call(this):hE(this,b_,b0).call(this),this.dispatchEvent(new hz({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):a===c6.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=hB(this,bN))?void 0:d.unassociateElement)||e.call(d,this),hD(this,bN,null)),c&&this.isConnected&&(hD(this,bN,dQ(this)),null==(g=null==(f=hB(this,bN))?void 0:f.associateElement)||g.call(f,this))):a===hH.DISABLED&&c!==b?null==c?this.enable():this.disable():a===hH.STYLE&&c!==b&&hE(this,bX,bY).call(this)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}get anchor(){return this.getAttribute("anchor")}set anchor(a){this.setAttribute("anchor",`${a}`)}get anchorElement(){var a;return this.anchor?null==(a=dW(this))?void 0:a.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(hJ)}get radioGroupItems(){return this.items.filter(a=>"menuitemradio"===a.role)}get checkedItems(){return this.items.filter(a=>a.checked)}get value(){var a,b;return null!=(b=null==(a=this.checkedItems[0])?void 0:a.value)?b:""}set value(a){let b=this.items.find(b=>b.value===a);b&&hE(this,cr,cs).call(this,b)}focus(){if(hD(this,bO,dV()),this.items.length){hE(this,cp,cq).call(this,this.items[0]),this.items[0].focus();return}let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}handleSelect(a){var b;let c=hE(this,cl,cm).call(this,a);c&&(hE(this,cr,cs).call(this,c,"checkbox"===c.type),hB(this,bP)&&!this.hidden&&(null==(b=hB(this,bO))||b.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(a){var b,c;let{key:d}=a,e=this.items,f=null!=(c=null!=(b=hE(this,cl,cm).call(this,a))?b:hE(this,cn,co).call(this))?c:e[0],g=Math.max(0,e.indexOf(f));"ArrowDown"===d?g++:"ArrowUp"===d?g--:"Home"===a.key?g=0:"End"===a.key&&(g=e.length-1),g<0&&(g=e.length-1),g>e.length-1&&(g=0),hE(this,cp,cq).call(this,e[g]),e[g].focus()}}function hJ(a){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==a?void 0:a.role)}function hK(a){var b;return null!=(b=a.getAttribute("bounds")?dU(a,`#${a.getAttribute("bounds")}`):dP(a)||a.parentElement)?b:a}bN=new WeakMap,bO=new WeakMap,bP=new WeakMap,bQ=new WeakMap,bR=new WeakMap,bS=new WeakMap,bT=new WeakMap,bU=new WeakSet,bV=function(a){let b=a.target;for(let a of b.assignedNodes({flatten:!0}))3===a.nodeType&&""===a.textContent.trim()&&a.remove();["header","title"].includes(b.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===b.assignedNodes().length),b.name||hB(this,bW).call(this)},bW=new WeakMap,bX=new WeakSet,bY=function(){var a;let b=this.shadowRoot.querySelector("#layout-row"),c=null==(a=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:a.trim();b.setAttribute("media","row"===c?"":"width:0")},bZ=new WeakSet,b$=function(a){hD(this,bP,a.relatedTarget),dT(this,a.relatedTarget)||(this.hidden=!this.hidden)},b_=new WeakSet,b0=function(){var a;null==(a=hB(this,bP))||a.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),dM(hK(this),hB(this,b3)),dM(this,hB(this,b4))},b1=new WeakSet,b2=function(){var a;null==(a=hB(this,bP))||a.setAttribute("aria-expanded","false"),dN(hK(this),hB(this,b3)),dN(this,hB(this,b4))},b3=new WeakMap,b4=new WeakMap,b5=new WeakSet,b6=function(a){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:b,y:c}=function({anchor:a,floating:b,placement:c}){let{x:d,y:e}=function({anchor:a,floating:b},c){let d,e="x"==(["top","bottom"].includes(hx(c))?"y":"x")?"y":"x",f="y"===e?"height":"width",g=hx(c),h=a.x+a.width/2-b.width/2,i=a.y+a.height/2-b.height/2,j=a[f]/2-b[f]/2;switch(g){case"top":d={x:h,y:a.y-b.height};break;case"bottom":d={x:h,y:a.y+a.height};break;case"right":d={x:a.x+a.width,y:i};break;case"left":d={x:a.x-b.width,y:i};break;default:d={x:a.x,y:a.y}}switch(c.split("-")[1]){case"start":d[e]-=j;break;case"end":d[e]+=j}return d}(function({anchor:a,floating:b}){return{anchor:function(a,b){var c;let d=a.getBoundingClientRect(),e=null!=(c=null==b?void 0:b.getBoundingClientRect())?c:{x:0,y:0};return{x:d.x-e.x,y:d.y-e.y,width:d.width,height:d.height}}(a,b.offsetParent),floating:{x:0,y:0,width:b.offsetWidth,height:b.offsetHeight}}}({anchor:a,floating:b}),c);return{x:d,y:e}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=a||(a=this.offsetWidth);let d=hK(this).getBoundingClientRect(),e=d.width-b-a,f=d.height-c-this.offsetHeight,{style:g}=hB(this,bT);g.setProperty("position","absolute"),g.setProperty("right",`${Math.max(0,e)}px`),g.setProperty("--_menu-bottom",`${f}px`);let h=getComputedStyle(this),i=g.getPropertyValue("--_menu-bottom")===h.bottom?f:parseFloat(h.bottom),j=d.height-i-parseFloat(h.marginBottom);this.style.setProperty("--_menu-max-height",`${j}px`)},b7=new WeakSet,b8=function(a){let b=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),c=null==b?void 0:b.querySelector('[role="menu"]'),{style:d}=hB(this,bT);if(a||d.setProperty("--media-menu-transition-in","none"),c){let a=c.offsetHeight,d=Math.max(c.offsetWidth,b.offsetWidth);this.style.setProperty("min-width",`${d}px`),this.style.setProperty("min-height",`${a}px`),hE(this,b5,b6).call(this,d)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),hE(this,b5,b6).call(this);d.removeProperty("--media-menu-transition-in")},b9=new WeakSet,ca=function(a){var b;if(a.stopPropagation(),a.composedPath().includes(hB(this,cb,cc))){null==(b=hB(this,bO))||b.focus(),this.hidden=!0;return}let c=hE(this,cl,cm).call(this,a);!c||c.hasAttribute("disabled")||(hE(this,cp,cq).call(this,c),this.handleSelect(a))},cb=new WeakSet,cc=function(){var a;return null==(a=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:a.find(a=>a.matches('button[part~="back"]'))},cd=new WeakSet,ce=function(a){if(a.target===this)return;hE(this,cf,cg).call(this);let b=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let c of b)c.invokeTargetElement!=a.target&&("open"!=a.newState||"true"!=c.getAttribute("aria-expanded")||c.invokeTargetElement.hidden||c.invokeTargetElement.dispatchEvent(new hy({relatedTarget:c})));for(let a of b)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);hE(this,b7,b8).call(this,!0)},cf=new WeakSet,cg=function(){let a=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!a)},ch=new WeakSet,ci=function(a){var b;dT(this,a.relatedTarget)||(hB(this,bS)&&(null==(b=hB(this,bO))||b.focus()),hB(this,bP)&&hB(this,bP)!==a.relatedTarget&&!this.hidden&&(this.hidden=!0))},cj=new WeakSet,ck=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;if(!h&&!i&&!j&&this.keysUsed.includes(g))if(a.preventDefault(),a.stopPropagation(),"Tab"===g){if(hB(this,bS)){this.hidden=!0;return}a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()}else"Escape"===g?(null==(f=hB(this,bO))||f.focus(),hB(this,bS)&&(this.hidden=!0)):"Enter"===g||" "===g?this.handleSelect(a):this.handleMove(a)},cl=new WeakSet,cm=function(a){return a.composedPath().find(a=>["menuitemradio","menuitemcheckbox"].includes(a.role))},cn=new WeakSet,co=function(){return this.items.find(a=>0===a.tabIndex)},cp=new WeakSet,cq=function(a){for(let b of this.items)b.tabIndex=b===a?0:-1},cr=new WeakSet,cs=function(a,b){let c=[...this.checkedItems];"radio"===a.type&&this.radioGroupItems.forEach(a=>a.checked=!1),b?a.checked=!a.checked:a.checked=!0,this.checkedItems.some((a,b)=>a!=c[b])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},hI.shadowRootOptions={mode:"open"},hI.getTemplateHTML=function(a){return`
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
  `},dH.customElements.get("media-chrome-menu")||dH.customElements.define("media-chrome-menu",hI);var hL=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hM=(a,b,c)=>(hL(a,b,"read from private field"),c?c.call(a):b.get(a)),hN=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hO=(a,b,c,d)=>(hL(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hP=(a,b,c)=>(hL(a,b,"access private method"),c);let hQ={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class hR extends dH.HTMLElement{constructor(){if(super(),hN(this,cv),hN(this,cx),hN(this,cz),hN(this,cC),hN(this,cE),hN(this,cG),hN(this,ct,!1),hN(this,cu,void 0),hN(this,cB,()=>{var a,b;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let c=this.shadowRoot.querySelector('slot[name="description"]'),d=null==(a=this.submenuElement.checkedItems)?void 0:a[0],e=null!=(b=null==d?void 0:d.dataset.description)?b:null==d?void 0:d.text,f=dI.createElement("span");f.textContent=null!=e?e:"",c.replaceChildren(f)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[hQ.TYPE,hQ.DISABLED,hQ.CHECKED,hQ.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),hS(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(a){switch(a.type){case"slotchange":hP(this,cv,cw).call(this,a);break;case"click":this.handleClick(a);break;case"keydown":hP(this,cE,cF).call(this,a);break;case"keyup":hP(this,cC,cD).call(this,a)}}attributeChangedCallback(a,b,c){a===hQ.CHECKED&&hS(this)&&!hM(this,ct)?this.setAttribute("aria-checked",null!=c?"true":"false"):a===hQ.TYPE&&c!==b?this.role="menuitem"+c:a===hQ.DISABLED&&c!==b&&(null==c?this.enable():this.disable())}connectedCallback(){this.hasAttribute(hQ.DISABLED)||this.enable(),this.role="menuitem"+this.type,hO(this,cu,function a(b,c){if(!b)return null;let{host:d}=b.getRootNode();return!c&&d?a(b,d):(null==c?void 0:c.items)?c:a(c,null==c?void 0:c.parentNode)}(this,this.parentNode)),hP(this,cG,cH).call(this)}disconnectedCallback(){this.disable(),hP(this,cG,cH).call(this),hO(this,cu,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=dW(this))?void 0:a.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var a;return null!=(a=this.getAttribute(hQ.TYPE))?a:""}set type(a){this.setAttribute(hQ.TYPE,`${a}`)}get value(){var a;return null!=(a=this.getAttribute(hQ.VALUE))?a:this.text}set value(a){this.setAttribute(hQ.VALUE,a)}get text(){var a;return(null!=(a=this.textContent)?a:"").trim()}get checked(){if(hS(this))return"true"===this.getAttribute("aria-checked")}set checked(a){hS(this)&&(hO(this,ct,!0),this.setAttribute("aria-checked",a?"true":"false"),a?this.part.add("checked"):this.part.remove("checked"))}handleClick(a){!hS(this)&&this.invokeTargetElement&&dT(this,a.target)&&this.invokeTargetElement.dispatchEvent(new hy({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function hS(a){return"radio"===a.type||"checkbox"===a.type}ct=new WeakMap,cu=new WeakMap,cv=new WeakSet,cw=function(a){let b=a.target;if(!(null==b?void 0:b.name))for(let a of b.assignedNodes({flatten:!0}))a instanceof Text&&""===a.textContent.trim()&&a.remove();"submenu"===b.name&&(this.submenuElement?hP(this,cx,cy).call(this):hP(this,cz,cA).call(this))},cx=new WeakSet,cy=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",hM(this,cB)),this.submenuElement.addEventListener("addmenuitem",hM(this,cB)),this.submenuElement.addEventListener("removemenuitem",hM(this,cB)),hM(this,cB).call(this)},cz=new WeakSet,cA=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",hM(this,cB)),this.submenuElement.removeEventListener("addmenuitem",hM(this,cB)),this.submenuElement.removeEventListener("removemenuitem",hM(this,cB)),hM(this,cB).call(this)},cB=new WeakMap,cC=new WeakSet,cD=function(a){let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",hP(this,cC,cD));this.handleClick(a)},cE=new WeakSet,cF=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",hP(this,cC,cD));this.addEventListener("keyup",hP(this,cC,cD),{once:!0})},cG=new WeakSet,cH=function(){var a;let b=null==(a=hM(this,cu))?void 0:a.radioGroupItems;if(!b)return;let c=b.filter(a=>"true"===a.getAttribute("aria-checked")).pop();for(let a of(c||(c=b[0]),b))a.setAttribute("aria-checked","false");null==c||c.setAttribute("aria-checked","true")},hR.shadowRootOptions={mode:"open"},hR.getTemplateHTML=function(a){return`
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
  `},hR.getSuffixSlotInnerHTML=function(a){return""},dH.customElements.get("media-chrome-menu-item")||dH.customElements.define("media-chrome-menu-item",hR);class hT extends hI{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dP(this).querySelector("media-settings-menu-button")}}hT.getTemplateHTML=function(a){return`
    ${hI.getTemplateHTML(a)}
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
  `},dH.customElements.get("media-settings-menu")||dH.customElements.define("media-settings-menu",hT);class hU extends hR{}hU.shadowRootOptions={mode:"open"},hU.getTemplateHTML=function(a){return`
    ${hR.getTemplateHTML.call(this,a)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},hU.getSuffixSlotInnerHTML=function(a){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},dH.customElements.get("media-settings-menu-item")||dH.customElements.define("media-settings-menu-item",hU);class hV extends ff{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=dW(this))?void 0:a.querySelector(`#${this.invokeTarget}`):null}handleClick(){var a;null==(a=this.invokeTargetElement)||a.dispatchEvent(new hy({relatedTarget:this}))}}dH.customElements.get("media-chrome-menu-button")||dH.customElements.define("media-chrome-menu-button",hV);class hW extends hV{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dA("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dP(this).querySelector("media-settings-menu")}}hW.getSlotTemplateHTML=function(){return`
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
  `},hW.getTooltipContentHTML=function(){return dA("Settings")},dH.customElements.get("media-settings-menu-button")||dH.customElements.define("media-settings-menu-button",hW);var hX=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hY=(a,b,c)=>(hX(a,b,"read from private field"),c?c.call(a):b.get(a)),hZ=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},h$=(a,b,c,d)=>(hX(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),h_=(a,b,c)=>(hX(a,b,"access private method"),c);cI=new WeakMap,cJ=new WeakMap,cK=new WeakSet,cL=function(){if(hY(this,cJ)===JSON.stringify(this.mediaAudioTrackList))return;h$(this,cJ,JSON.stringify(this.mediaAudioTrackList));let a=this.mediaAudioTrackList;for(let b of(this.defaultSlot.textContent="",a)){let a=hF({type:"radio",text:this.formatMenuItemText(b.label,b),value:`${b.id}`,checked:b.enabled});a.prepend(hG(this,"checked-indicator")),this.defaultSlot.append(a)}},cM=new WeakSet,cN=function(){if(null==this.value)return;let a=new dH.CustomEvent(c5.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dH.customElements.get("media-audio-track-menu")||dH.customElements.define("media-audio-track-menu",class extends hI{constructor(){super(...arguments),hZ(this,cK),hZ(this,cM),hZ(this,cI,[]),hZ(this,cJ,void 0)}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_AUDIO_TRACK_LIST,c9.MEDIA_AUDIO_TRACK_ENABLED,c9.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===c9.MEDIA_AUDIO_TRACK_ENABLED&&b!==c)this.value=c;else if(a===c9.MEDIA_AUDIO_TRACK_LIST&&b!==c){var d;h$(this,cI,null==(d=null!=c?c:"")?void 0:d.split(/\s+/).map(dp)),h_(this,cK,cL).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",h_(this,cM,cN))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",h_(this,cM,cN))}get anchorElement(){var a;return"auto"!==this.anchor?super.anchorElement:null==(a=dP(this))?void 0:a.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return hY(this,cI)}set mediaAudioTrackList(a){h$(this,cI,a),h_(this,cK,cL).call(this)}get mediaAudioTrackEnabled(){var a;return null!=(a=d2(this,c9.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){d3(this,c9.MEDIA_AUDIO_TRACK_ENABLED,a)}});let h0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class h1 extends hV{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_AUDIO_TRACK_ENABLED,c9.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dA("Audio"))}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=dP(this))?void 0:a.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var a;return null!=(a=d2(this,c9.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){d3(this,c9.MEDIA_AUDIO_TRACK_ENABLED,a)}}h1.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${h0}</slot>
  `},h1.getTooltipContentHTML=function(){return dA("Audio")},dH.customElements.get("media-audio-track-menu-button")||dH.customElements.define("media-audio-track-menu-button",h1);var h2=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},h3=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},h4=(a,b,c)=>(h2(a,b,"access private method"),c);let h5=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class h6 extends hI{constructor(){super(...arguments),h3(this,cP),h3(this,cR),h3(this,cO,void 0)}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_SUBTITLES_LIST,c9.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_SUBTITLES_LIST&&b!==c?h4(this,cP,cQ).call(this):a===c9.MEDIA_SUBTITLES_SHOWING&&b!==c&&(this.value=c)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",h4(this,cR,cS))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",h4(this,cR,cS))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dP(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return h7(this,c9.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){h8(this,c9.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return h7(this,c9.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){h8(this,c9.MEDIA_SUBTITLES_SHOWING,a)}}cO=new WeakMap,cP=new WeakSet,cQ=function(){var a,b,c,d,e,f;if(h2(this,b=cO,"read from private field"),(c?c.call(this):b.get(this))===JSON.stringify(this.mediaSubtitlesList))return;d=cO,e=JSON.stringify(this.mediaSubtitlesList),h2(this,d,"write to private field"),f?f.call(this,e):d.set(this,e),this.defaultSlot.textContent="";let g=!this.value,h=hF({type:"radio",text:this.formatMenuItemText(dA("Off")),value:"off",checked:g});for(let b of(h.prepend(hG(this,"checked-indicator")),this.defaultSlot.append(h),this.mediaSubtitlesList)){let c=hF({type:"radio",text:this.formatMenuItemText(b.label,b),value:ep(b),checked:this.value==ep(b)});c.prepend(hG(this,"checked-indicator")),"captions"===(null!=(a=b.kind)?a:"subs")&&c.append(hG(this,"captions-indicator")),this.defaultSlot.append(c)}},cR=new WeakSet,cS=function(){let a=this.mediaSubtitlesShowing,b=this.getAttribute(c9.MEDIA_SUBTITLES_SHOWING),c=this.value!==b;if((null==a?void 0:a.length)&&c&&this.dispatchEvent(new dH.CustomEvent(c5.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:a})),!this.value||!c)return;let d=new dH.CustomEvent(c5.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(d)},h6.getTemplateHTML=function(a){return`
    ${hI.getTemplateHTML(a)}
    <slot name="captions-indicator" hidden>${h5}</slot>
  `};let h7=(a,b)=>{let c=a.getAttribute(b);return c?en(c):[]},h8=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=eq(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dH.customElements.get("media-captions-menu")||dH.customElements.define("media-captions-menu",h6);let h9=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ia=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,ib=a=>{a.setAttribute("aria-checked",eu(a).toString())};class ic extends hV{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_SUBTITLES_LIST,c9.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dA("closed captions")),ib(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_SUBTITLES_SHOWING&&ib(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=dP(this))?void 0:a.querySelector("media-captions-menu")}get mediaSubtitlesList(){return id(this,c9.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){ie(this,c9.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return id(this,c9.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){ie(this,c9.MEDIA_SUBTITLES_SHOWING,a)}}ic.getSlotTemplateHTML=function(){return`
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
      <slot name="on">${h9}</slot>
      <slot name="off">${ia}</slot>
    </slot>
  `},ic.getTooltipContentHTML=function(){return dA("Captions")};let id=(a,b)=>{let c=a.getAttribute(b);return c?en(c):[]},ie=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=eq(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dH.customElements.get("media-captions-menu-button")||dH.customElements.define("media-captions-menu-button",ic);var ig=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ih=(a,b,c)=>(ig(a,b,"read from private field"),c?c.call(a):b.get(a)),ii=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ij=(a,b,c)=>(ig(a,b,"access private method"),c);let ik={RATES:"rates"};cT=new WeakMap,cU=new WeakSet,cV=function(){for(let a of(this.defaultSlot.textContent="",ih(this,cT))){let b=hF({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a,checked:this.mediaPlaybackRate===Number(a)});b.prepend(hG(this,"checked-indicator")),this.defaultSlot.append(b)}},cW=new WeakSet,cX=function(){if(!this.value)return;let a=new dH.CustomEvent(c5.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dH.customElements.get("media-playback-rate-menu")||dH.customElements.define("media-playback-rate-menu",class extends hI{constructor(){super(),ii(this,cU),ii(this,cW),ii(this,cT,new el(this,ik.RATES,{defaultValue:gl})),ij(this,cU,cV).call(this)}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_PLAYBACK_RATE,ik.RATES]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===c9.MEDIA_PLAYBACK_RATE&&b!=c?this.value=c:a===ik.RATES&&b!=c&&(ih(this,cT).value=c,ij(this,cU,cV).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ij(this,cW,cX))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ij(this,cW,cX))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dP(this).querySelector("media-playback-rate-menu-button")}get rates(){return ih(this,cT)}set rates(a){a?Array.isArray(a)?ih(this,cT).value=a.join(" "):"string"==typeof a&&(ih(this,cT).value=a):ih(this,cT).value="",ij(this,cU,cV).call(this)}get mediaPlaybackRate(){return d$(this,c9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d_(this,c9.MEDIA_PLAYBACK_RATE,a)}});class il extends hV{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_PLAYBACK_RATE]}constructor(){var a;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===c9.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",dA("Playback rate {playbackRate}",{playbackRate:b}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dP(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return d$(this,c9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d_(this,c9.MEDIA_PLAYBACK_RATE,a)}}il.getSlotTemplateHTML=function(a){return`
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
  `},il.getTooltipContentHTML=function(){return dA("Playback rate")},dH.customElements.get("media-playback-rate-menu-button")||dH.customElements.define("media-playback-rate-menu-button",il);var im=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},io=(a,b,c)=>(im(a,b,"read from private field"),c?c.call(a):b.get(a)),ip=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iq=(a,b,c,d)=>(im(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),ir=(a,b,c)=>(im(a,b,"access private method"),c);cY=new WeakMap,cZ=new WeakMap,c$=new WeakSet,c_=function(){if(io(this,cZ).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&io(this,cZ).mediaHeight===this.mediaHeight)return;io(this,cZ).mediaRenditionList=JSON.stringify(this.mediaRenditionList),io(this,cZ).mediaHeight=this.mediaHeight;let a=this.mediaRenditionList.sort((a,b)=>b.height-a.height);for(let b of a)b.selected=b.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let b=!this.mediaRenditionSelected;for(let c of a){let a=hF({type:"radio",text:this.formatMenuItemText(`${Math.min(c.width,c.height)}p`,c),value:`${c.id}`,checked:c.selected&&!b});a.prepend(hG(this,"checked-indicator")),this.defaultSlot.append(a)}let c=hF({type:"radio",text:b?this.formatMenuItemText(`${dA("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(dA("Auto")),value:"auto",checked:b}),d=this.mediaHeight>0?`${dA("Auto")} (${this.mediaHeight}p)`:dA("Auto");c.dataset.description=d,c.prepend(hG(this,"checked-indicator")),this.defaultSlot.append(c)},c0=new WeakSet,c1=function(){if(null==this.value)return;let a=new dH.CustomEvent(c5.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dH.customElements.get("media-rendition-menu")||dH.customElements.define("media-rendition-menu",class extends hI{constructor(){super(...arguments),ip(this,c$),ip(this,c0),ip(this,cY,[]),ip(this,cZ,{})}static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_RENDITION_LIST,c9.MEDIA_RENDITION_SELECTED,c9.MEDIA_RENDITION_UNAVAILABLE,c9.MEDIA_HEIGHT]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===c9.MEDIA_RENDITION_SELECTED&&b!==c)this.value=null!=c?c:"auto",ir(this,c$,c_).call(this);else if(a===c9.MEDIA_RENDITION_LIST&&b!==c)iq(this,cY,null==c?void 0:c.split(/\s+/).map(dm)),ir(this,c$,c_).call(this);else a===c9.MEDIA_HEIGHT&&b!==c&&ir(this,c$,c_).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ir(this,c0,c1))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ir(this,c0,c1))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dP(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return io(this,cY)}set mediaRenditionList(a){iq(this,cY,a),ir(this,c$,c_).call(this)}get mediaRenditionSelected(){return d2(this,c9.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){d3(this,c9.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return d$(this,c9.MEDIA_HEIGHT)}set mediaHeight(a){d_(this,c9.MEDIA_HEIGHT,a)}});let is=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class it extends hV{static get observedAttributes(){return[...super.observedAttributes,c9.MEDIA_RENDITION_SELECTED,c9.MEDIA_RENDITION_UNAVAILABLE,c9.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dA("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dP(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return d2(this,c9.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){d3(this,c9.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return d$(this,c9.MEDIA_HEIGHT)}set mediaHeight(a){d_(this,c9.MEDIA_HEIGHT,a)}}it.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${is}</slot>
  `},it.getTooltipContentHTML=function(){return dA("Quality")},dH.customElements.get("media-rendition-menu-button")||dH.customElements.define("media-rendition-menu-button",it);let iu=dH.document?.createElement?.("template");iu&&(iu.innerHTML=`
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

  `);class iv extends hv{static template=iu}dH.customElements&&!dH.customElements.get("media-theme-sutro")&&dH.customElements.define("media-theme-sutro",iv);var iw=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),ix={className:"class",htmlFor:"for"},iy=function({react:a,tagName:b,elementClass:c,events:d,displayName:e,toAttributeName:f=function(a){return a.toLowerCase()},toAttributeValue:g=function(a){return"boolean"==typeof a?a?"":void 0:"function"==typeof a?void 0:"object"!=typeof a||null===a?a:void 0}}){let h=Number.parseInt(a.version)>=19,i=a.forwardRef((d,e)=>{let i=a.useRef(null);a.useRef(new Map);let j={},k={},l={},m={};for(let[a,b]of Object.entries(d)){if(iw.has(a)){l[a]=b;continue}let d=f(ix[a]??a);if(a in c.prototype&&!(a in(globalThis.HTMLElement?.prototype??{}))&&!c.observedAttributes?.some(a=>a===d)){m[a]=b;continue}if(a.startsWith("on")){j[a]=b;continue}let e=g(b);d&&null!=e&&(k[d]=String(e),h||(l[d]=e)),d&&h&&(l[d]=b)}if(c?.getTemplateHTML&&c?.shadowRootOptions){let{mode:b,delegatesFocus:d}=c.shadowRootOptions;l.children=[a.createElement("template",{shadowrootmode:b,shadowrootdelegatesfocus:d,dangerouslySetInnerHTML:{__html:c.getTemplateHTML(k)}}),l.children]}return a.createElement(b,{...l,ref:a.useCallback(a=>{i.current=a,"function"==typeof e?e(a):null!==e&&(e.current=a)},[e])})});return i.displayName=e??c.name,i}({react:c3.default,tagName:"media-theme-sutro",elementClass:iv});a.s(["getPlaybackId",()=>iB,"getPosterURLFromPlaybackId",()=>iC,"transform",()=>iA],58452);let iz="mux.com";function iA(a,b){let c=iB(a);if(!c)return a;let d=a.providerMetadata?.mux?.thumbnailTime??b?.thumbnailTime??b?.startTime,e={...a,sources:[{src:`https://stream.${b?.customDomain??iz}/${c}.m3u8`,type:"application/x-mpegURL"}],poster:iC(c,{thumbnailTime:d,customDomain:b?.customDomain,token:b?.tokens?.thumbnail})};return d>=0&&(e.thumbnailTime=d),e}function iB(a){let b=a.providerMetadata?.mux??a.externalIds;return b?.playbackId}let iC=(a,{token:b,thumbnailTime:c,width:d,customDomain:e=iz}={})=>{let f=null==b?c:void 0,{aud:g}=function(a){let b=(a??"").split(".")[1];return b?JSON.parse(decodeURIComponent(atob(b.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}(b);if(!b||"t"===g)return`https://image.${e}/${a}/thumbnail.webp${function(a){let b=(function(a){let b={};for(let c in a)null!=a[c]&&(b[c]=a[c]);return new URLSearchParams(b)})(a).toString();return b?"?"+b:""}({token:b,time:f,width:d})}`},iD=JSON.parse(process.env.NEXT_PUBLIC_DEV_VIDEO_OPTS??process.env.NEXT_PUBLIC_VIDEO_OPTS??"{}"),iE=`${iD.folder??"videos"}/`;function iF(a){if("string"==typeof a)return a.split(/[#?]/)[0].split(".").pop()?.trim()}let iG=(0,c3.forwardRef)((b,c)=>{if("string"==typeof b.playbackId)return d??(d=(0,c3.lazy)(()=>a.A(45791))),(0,c2.jsx)(d,{ref:c,...b,controls:!1});let g=iF(b.src);return"m3u8"===g?(e??(e=(0,c3.lazy)(()=>a.A(41554))),(0,c2.jsx)(e,{ref:c,...b,controls:!1})):"mpd"===g?(f??(f=(0,c3.lazy)(()=>a.A(56676))),(0,c2.jsx)(f,{ref:c,...b,controls:!1})):(0,c2.jsx)("video",{ref:c,...b,controls:!1})}),iH=(0,c3.forwardRef)((a,b)=>{let c,d,{style:e,children:f,asset:g,controls:h=!0,poster:i,blurDataURL:j,theme:k=iy,...l}=a,m=c3.Children.toArray(f).find(a=>"object"==typeof a&&"type"in a&&"poster"===a.props.slot);(0,c3.isValidElement)(m)&&(i="",j=void 0,c=m,f=c3.Children.toArray(f).filter(a=>a!==m));let n={},o=g?iB(g):void 0,p=!0;if(o&&g?.status==="ready"&&(l.src=void 0,l.playbackId=o,i&&((p=i!==iC(o,l))||(d=`${iC(o,{...l,width:480})} 480w,${iC(o,{...l,width:640})} 640w,${iC(o,{...l,width:960})} 960w,${iC(o,{...l,width:1280})} 1280w,${iC(o,{...l,width:1600})} 1600w,${iC(o,{...l})} 1920w`))),j){let a=!p&&j===g?.blurDataURL,b=p&&j!==g?.blurDataURL;if(a||b){var q;n.gridArea="1/1",n.width="100%",n.height="100%",n.color="transparent",n.backgroundSize="cover",n.backgroundPosition="center",n.backgroundRepeat="no-repeat",n.backgroundImage=`url('data:image/svg+xml;charset=utf-8,${q=j,`<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${q}"/></g></svg>`.replace(/#/g,"%23")}')`}}if(delete l.thumbnailTime,h&&k){let a=l["data-next-video"];return i&&(c=(0,c2.jsx)("img",{slot:"poster",src:p?i:void 0,srcSet:d,style:n,decoding:"async","aria-hidden":"true"}),i=""),(0,c2.jsxs)(k,{"data-next-video":a,style:{display:"grid",...e},children:[c,(0,c2.jsx)(c3.Suspense,{fallback:null,children:(0,c2.jsxs)(iG,{suppressHydrationWarning:!0,ref:b,style:{gridArea:"1/1"},slot:"media",poster:i,crossOrigin:"",...l,children:[o&&(0,c2.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${o}/storyboard.vtt`}),f]})})]})}return(0,c2.jsx)(c3.Suspense,{fallback:null,children:(0,c2.jsxs)(iG,{suppressHydrationWarning:!0,ref:b,style:{gridArea:"1/1",...e},controls:!1!==h||void 0,poster:i,crossOrigin:"",...l,children:[o&&(0,c2.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${o}/storyboard.vtt`}),f]})})});function iI({status:a,hidden:b}){let c="",d="";switch(a){case"error":c="Error",d="An error occurred while uploading your video. Please check the CLI logs for more info.";break;case"sourced":c="Video is not processing",d="Make sure to run next-video sync. The currently loaded video is the source file.";break;default:c="Upload in progress...",d="Your video file is being uploaded. The currently loaded video is the source file."}return(0,c2.jsxs)(c2.Fragment,{children:[(0,c2.jsx)("style",{children:`
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
        `}),(0,c2.jsxs)("div",{role:"alert",className:`next-video-alert next-video-alert-${a}`,hidden:b,children:["error"===a?(0,c2.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,c2.jsx)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}):(0,c2.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,c2.jsx)("path",{d:"M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,c2.jsx)("h5",{children:c}),(0,c2.jsx)("div",{children:d})]})]})}async function iJ({config:a,src:b,width:c,height:d}){let e=`${a.path}?url=${encodeURIComponent(`${b}`)}`;return c&&(e+=`&w=${c}`),d&&(e+=`&h=${d}`),`${e}`}a.s([],6140);var iK=a.i(58452);function iL(a){let b=a.providerMetadata?.["vercel-blob"]??a.externalIds;if(!b)return a;let c={src:b.url};return b.contentType&&(c.type=b.contentType),{...a,sources:[c]}}a.s(["transform",()=>iL],91233);var iM=a.i(91233);function iN(a){let b=a.providerMetadata?.backblaze;if(!b)return a;let c=new URL(b.endpoint);c.hostname=`${b.bucket}.${c.hostname}`,c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}a.s(["transform",()=>iN],35865);var iO=a.i(35865);function iP(a){let b=a.providerMetadata?.["amazon-s3"];if(!b)return a;let c=new URL(b.endpoint);c.hostname=`${b.bucket}.${c.hostname}`,c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}a.s(["transform",()=>iP],81350);var iQ=a.i(81350);function iR(a){let b=a.providerMetadata?.["cloudflare-r2"];if(!b)return a;let c=new URL(b.bucketUrlPublic);c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}a.s(["transform",()=>iR],41767);var iS=a.i(41767);a.s(["amazonS3",()=>iW,"backblaze",()=>iV,"cloudflareR2",()=>iX,"mux",()=>iT,"vercelBlob",()=>iU],72704),a.i(6140);var iT=iK,iU=iM,iV=iO,iW=iQ,iX=iS,iY=a.i(72704);let iZ=(0,c3.forwardRef)((a,b)=>{let{as:c=iH,loader:d=iJ,transform:e=i$,className:f,style:g,src:h,width:i,height:j}=a,[k,l]=(0,c3.useState)("object"==typeof h?h:void 0),[m,n]=(0,c3.useState)(!1);"object"==typeof h&&(k=h,h=void 0);let o=function(a,b,c){return async d=>{if("string"==typeof b.src)try{let e=await a({...b,config:iD}),f=await fetch(e,{signal:d}),g=await f.json();if(f.ok)c(g);else{let a=`[next-video] The request to ${f.url} failed. `;throw a+=`Did you configure the \`${iD.path}\` route to handle video API requests?
`,Error(a)}}catch(a){d.aborted||console.error(a)}}}(d,{src:h,width:i,height:j},a=>l(a)),p=k?.status,q=iF(h);!function(a,b=5e3){let c=(0,c3.useRef)(new AbortController);(0,c3.useEffect)(()=>(c.current=new AbortController,a(c.current.signal),()=>{c.current.abort()}),[]),function(a,b){let c=(0,c3.useRef)(null);(0,c3.useEffect)(()=>{c.current=a}),(0,c3.useEffect)(()=>{let a=async()=>{await c.current?.()};if(null!=b){let c=setInterval(a,b);return()=>clearInterval(c)}},[b])}((0,c3.useCallback)(()=>a(c.current.signal),[]),b)}(o,"string"!=typeof h||"ready"==p||["m3u8","mpd"].includes(q??"")?null:1e3);let r=function(a,b){let{asset:c}=b,{controls:d=!0,as:e,className:f,style:g,src:h,poster:i,blurDataURL:j,loader:k,transform:l,...m}=a,n={src:h,poster:i,controls:d,blurDataURL:j,...m};if("object"==typeof i&&(n.poster=i.src,n.blurDataURL??(n.blurDataURL=i.blurDataURL)),c)if("ready"===c.status){n.blurDataURL??(n.blurDataURL=c.blurDataURL);let a=l(c,n);a&&(n.src=a.sources?.[0]?.src,n.poster??(n.poster=a.poster),n.thumbnailTime??(n.thumbnailTime=a.thumbnailTime))}else{var o;o=c.originalFilePath,n.src=o?.startsWith(iE)?o?.replace(iE,"_next-video/"):o}return n}({...a,transform:e,src:h},{asset:k});return!function(a){var b,c;return"function"==typeof(b=a)&&(()=>{let a=Object.getPrototypeOf(b);return a.prototype&&a.prototype.isReactComponent})()||"function"==typeof a||"object"==typeof(c=a)&&"symbol"==typeof c.$$typeof&&["react.memo","react.forward_ref"].includes(c.$$typeof.description)}(c)&&console.warn("The `as` property is not a valid component:",c),(0,c2.jsxs)("div",{className:`${f?`${f} `:""}next-video-container`,style:g,children:[(0,c2.jsx)("style",{children:`
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
        `}),(0,c2.jsx)(c,{ref:b,"data-next-video":p??"",style:{width:i,height:j},asset:k,onPlaying:()=>n(!0),onPause:()=>n(!1),...r}),(0,c2.jsx)(iI,{hidden:!!(m||!p||"ready"===p),status:p})]})});function i$(a,b){let c=a.provider??iD.provider;for(let[d,e]of Object.entries(iY))if(d===c.toLowerCase().replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()))return e.transform(a,b)}function i_(){let[a,b]=(0,c3.useState)(""),[c,d]=(0,c3.useState)(""),[e,f]=(0,c3.useState)("initializing"),[g,h]=(0,c3.useState)(null),[i,j]=(0,c3.useState)(!1);(0,c3.useEffect)(()=>{!async function(){try{console.log("🚀 Requesting upload URL..."),f("fetching");let a=await fetch("/api/create-upload",{method:"POST"}),c=await a.json();console.log("📥 Client received data:",{status:a.status,hasUrl:!!c.data?.url,uploadId:c.data?.id,timestamp:new Date().toISOString()}),c.data?.url?(b(c.data.url),d(c.data.id),f("ready"),console.log("✅ Upload URL set successfully")):(console.error("❌ No upload URL in response:",c),f("error"))}catch(a){console.error("❌ Failed to get upload URL:",a),f("error")}}()},[]);let k=async()=>{if(c)try{let a=await fetch(`/api/upload-status?uploadId=${c}`),b=await a.json();console.log("🔍 Upload status check:",b.data),b.data?.status==="asset_created"&&b.data?.asset_id?(console.log("🎉 Asset created! ID:",b.data.asset_id),await l(b.data.asset_id),j(!1)):b.data?.status==="errored"&&(console.error("❌ Upload failed:",b.data.error),j(!1))}catch(a){console.error("❌ Failed to check upload status:",a)}},l=async a=>{try{let b=await fetch(`/api/asset-details?assetId=${a}`),c=await b.json();console.log("🎬 Asset details:",c.data),h(c.data)}catch(a){console.error("❌ Failed to get asset details:",a)}};return"fetching"===e?(0,c2.jsx)("p",{children:"Getting upload URL..."}):"error"===e?(0,c2.jsx)("p",{children:"Error loading uploader"}):a?(0,c2.jsxs)("div",{className:"p-6 max-w-4xl mx-auto",children:[(0,c2.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Mux Upload Test"}),(0,c2.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,c2.jsxs)("div",{className:"border rounded-lg p-4",children:[(0,c2.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Upload Video"}),(0,c2.jsx)(c4.default,{endpoint:a,onUploadStart:()=>{console.log("🎬 Upload started")},onProgress:a=>{console.log(`📊 Upload progress: ${a.detail}%`)},onSuccess:a=>{console.log("🎉 Upload completed:",a.detail),(()=>{if(i)return;j(!0),console.log("⏱️ Starting upload status polling...");let a=setInterval(async()=>{await k(),i||clearInterval(a)},3e3);setTimeout(()=>{clearInterval(a),j(!1),console.log("⏰ Polling timeout reached")},3e5)})()},onError:a=>{console.error("❌ Upload failed:",a.detail)}}),i&&(0,c2.jsx)("div",{className:"mt-4 p-3 bg-blue-50 rounded",children:(0,c2.jsx)("p",{className:"text-blue-700",children:"⏱️ Processing upload and creating asset..."})})]}),(0,c2.jsxs)("div",{className:"border rounded-lg p-4",children:[(0,c2.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Upload Info"}),(0,c2.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Upload ID:"}),(0,c2.jsx)("p",{className:"font-mono text-xs bg-gray-100 p-1 rounded mt-1",children:c||"Not available"})]}),g&&(0,c2.jsxs)(c2.Fragment,{children:[(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Asset ID:"}),(0,c2.jsx)("p",{className:"font-mono text-xs bg-gray-100 p-1 rounded mt-1",children:g.id})]}),(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Status:"}),(0,c2.jsx)("span",{className:`ml-2 px-2 py-1 rounded text-xs ${"ready"===g.status?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:g.status})]}),g.playback_ids?.[0]&&(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Playback ID:"}),(0,c2.jsx)("p",{className:"font-mono text-xs bg-gray-100 p-1 rounded mt-1",children:g.playback_ids[0].id})]}),g.duration&&(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Duration:"})," ",Math.round(g.duration),"s"]}),g.aspect_ratio&&(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Aspect Ratio:"})," ",g.aspect_ratio]})]})]}),(0,c2.jsxs)("div",{className:"mt-4 space-x-2",children:[(0,c2.jsx)("button",{onClick:k,disabled:!c,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:bg-gray-300",children:"Check Status"}),g&&(0,c2.jsx)("button",{onClick:()=>l(g.id),className:"px-3 py-1 bg-green-500 text-white rounded text-sm",children:"Refresh Asset"})]})]})]}),g&&"ready"===g.status&&g.playback_ids?.[0]&&(0,c2.jsxs)("div",{className:"mt-6 border rounded-lg p-4",children:[(0,c2.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Video Player"}),(0,c2.jsx)(iZ,{src:g.playback_ids[0].id,width:"100%",height:"auto",accentColor:"#ff0055"}),(0,c2.jsxs)("div",{className:"mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Duration:"}),(0,c2.jsx)("p",{children:g.duration?`${Math.round(g.duration)}s`:"N/A"})]}),(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Resolution:"}),(0,c2.jsx)("p",{children:g.aspect_ratio||"N/A"})]}),(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Status:"}),(0,c2.jsx)("span",{className:`px-2 py-1 rounded text-xs ${"ready"===g.status?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:g.status})]}),(0,c2.jsxs)("div",{children:[(0,c2.jsx)("strong",{children:"Playback ID:"}),(0,c2.jsx)("p",{className:"font-mono text-xs truncate",children:g.playback_ids[0].id})]})]}),(0,c2.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[(0,c2.jsx)("a",{href:`https://stream.mux.com/${g.playback_ids[0].id}/high.mp4`,download:!0,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",target:"_blank",rel:"noopener noreferrer",children:"📥 Download MP4"}),(0,c2.jsx)("a",{href:`https://image.mux.com/${g.playback_ids[0].id}/thumbnail.jpg`,download:!0,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",target:"_blank",rel:"noopener noreferrer",children:"🖼️ Download Thumbnail"}),(0,c2.jsx)("button",{onClick:()=>navigator.clipboard.writeText(`https://stream.mux.com/${g.playback_ids[0].id}.m3u8`),className:"px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors",children:"📋 Copy HLS URL"})]})]}),g&&(0,c2.jsxs)("div",{className:"mt-6 border rounded-lg p-4",children:[(0,c2.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Asset Details"}),(0,c2.jsx)("pre",{className:"bg-gray-100 p-4 rounded text-xs overflow-x-auto",children:JSON.stringify(g,null,2)})]})]}):(0,c2.jsx)("p",{children:"Loading..."})}}];

//# sourceMappingURL=src_app_upload_page_f545f731.js.map