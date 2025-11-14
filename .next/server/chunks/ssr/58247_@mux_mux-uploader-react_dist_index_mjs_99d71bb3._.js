module.exports=[58181,a=>{"use strict";a.s(["default",()=>bp]);var b=a.i(80150),c=Object.create,d=Object.defineProperty,e=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,g=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,i=(a,b)=>function(){return b||(0,a[f(a)[0]])((b={exports:{}}).exports,b),b.exports},j=i({"node_modules/global/window.js"(b,c){c.exports=a.g}}),k=i({"node_modules/is-function/index.js"(a,b){b.exports=function(a){if(!a)return!1;var b=c.call(a);return"[object Function]"===b||"function"==typeof a&&"[object RegExp]"!==b};var c=Object.prototype.toString}}),l=i({"node_modules/parse-headers/parse-headers.js"(a,b){var c=function(a){return a.replace(/^\s+|\s+$/g,"")};b.exports=function(a){if(!a)return{};for(var b={},d=c(a).split(`
`),e=0;e<d.length;e++){var f,g=d[e],h=g.indexOf(":"),i=c(g.slice(0,h)).toLowerCase(),j=c(g.slice(h+1));void 0===b[i]?b[i]=j:(f=b[i],"[object Array]"===Object.prototype.toString.call(f))?b[i].push(j):b[i]=[b[i],j]}return b}}}),m=i({"node_modules/xtend/immutable.js"(a,b){b.exports=function(){for(var a={},b=0;b<arguments.length;b++){var d=arguments[b];for(var e in d)c.call(d,e)&&(a[e]=d[e])}return a};var c=Object.prototype.hasOwnProperty}}),n=i({"node_modules/xhr/index.js"(a,b){var c=j(),d=k(),e=l(),f=m();function g(a,b,c){var e=a;return d(b)?(c=b,"string"==typeof a&&(e={uri:a})):e=f(b,{uri:a}),e.callback=c,e}function h(a,b,c){return i(b=g(a,b,c))}function i(a){if(void 0===a.callback)throw Error("callback argument missing");var b=!1,c=function(c,d,e){b||(b=!0,a.callback(c,d,e))};function d(a){return clearTimeout(k),a instanceof Error||(a=Error(""+(a||"Unknown XMLHttpRequest Error"))),a.statusCode=0,c(a,r)}function f(){if(!j){clearTimeout(k);var b,d=r,f=null;return 0!==(b=a.useXDR&&void 0===g.status?200:1223===g.status?204:g.status)?(d={body:function(){var a=void 0;if(a=g.response?g.response:g.responseText||function(a){try{if("document"===a.responseType)return a.responseXML;var b=a.responseXML&&"parsererror"===a.responseXML.documentElement.nodeName;if(""===a.responseType&&!b)return a.responseXML}catch{}return null}(g),q)try{a=JSON.parse(a)}catch{}return a}(),statusCode:b,method:m,headers:{},url:l,rawRequest:g},g.getAllResponseHeaders&&(d.headers=e(g.getAllResponseHeaders()))):f=Error("Internal XMLHttpRequest Error"),c(f,d,d.body)}}var g=a.xhr||null;g||(g=a.cors||a.useXDR?new h.XDomainRequest:new h.XMLHttpRequest);var i,j,k,l=g.url=a.uri||a.url,m=g.method=a.method||"GET",n=a.body||a.data,o=g.headers=a.headers||{},p=!!a.sync,q=!1,r={body:void 0,headers:{},statusCode:0,method:m,url:l,rawRequest:g};if("json"in a&&!1!==a.json&&(q=!0,o.accept||o.Accept||(o.Accept="application/json"),"GET"!==m&&"HEAD"!==m&&(o["content-type"]||o["Content-Type"]||(o["Content-Type"]="application/json"),n=JSON.stringify(!0===a.json?n:a.json))),g.onreadystatechange=function(){4===g.readyState&&setTimeout(f,0)},g.onload=f,g.onerror=d,g.onprogress=function(){},g.onabort=function(){j=!0},g.ontimeout=d,g.open(m,l,!p,a.username,a.password),p||(g.withCredentials=!!a.withCredentials),!p&&a.timeout>0&&(k=setTimeout(function(){if(!j){j=!0,g.abort("timeout");var a=Error("XMLHttpRequest timeout");a.code="ETIMEDOUT",d(a)}},a.timeout)),g.setRequestHeader)for(i in o)o.hasOwnProperty(i)&&g.setRequestHeader(i,o[i]);else if(a.headers&&!function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}(a.headers))throw Error("Headers cannot be set on an XDomainRequest object");return"responseType"in a&&(g.responseType=a.responseType),"beforeSend"in a&&"function"==typeof a.beforeSend&&a.beforeSend(g),g.send(n||null),g}b.exports=h,b.exports.default=h,h.XMLHttpRequest=c.XMLHttpRequest||function(){},h.XDomainRequest="withCredentials"in new h.XMLHttpRequest?h.XMLHttpRequest:c.XDomainRequest,function(a,b){for(var c=0;c<a.length;c++)b(a[c])}(["get","put","post","patch","head","delete"],function(a){h["delete"===a?"del":a]=function(b,c,d){return(c=g(b,c,d)).method=a.toUpperCase(),i(c)}})}});function o(a,b,...c){if(!a)throw TypeError(p(b,c))}function p(a,b){let c=0;return a.replace(/%[os]/gu,()=>q(b[c++]))}function q(a){return"object"!=typeof a||null===a?String(a):Object.prototype.toString.call(a)}var r,s,t="undefined"!=typeof self?self:a.g,u=class{constructor(a,b){this.code=a,this.message=b}warn(...a){var b;try{if(s)return void s({...this,args:a});let c=(null!=(b=Error().stack)?b:"").replace(/^(?:.+?\n){2}/gu,`
`);console.warn(this.message,...a,c)}catch{}}},v=new u("W01","Unable to initialize event under dispatching."),w=new u("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),x=new u("W03","Assigning any truthy value to 'returnValue' property has no effect."),y=new u("W04","Unable to preventDefault on non-cancelable events."),z=new u("W05","Unable to preventDefault inside passive event listener invocation."),A=new u("W06","An event listener wasn't added because it has been added already: %o, %o"),B=new u("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),C=new u("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"),D=(new u("W09","Event attribute handler must be a function: %o"),class{static get NONE(){return E}static get CAPTURING_PHASE(){return F}static get AT_TARGET(){return G}static get BUBBLING_PHASE(){return H}constructor(a,b){Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});let c=null!=b?b:{};I.set(this,{type:String(a),bubbles:!!c.bubbles,cancelable:!!c.cancelable,composed:!!c.composed,target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()})}get type(){return J(this).type}get target(){return J(this).target}get srcElement(){return J(this).target}get currentTarget(){return J(this).currentTarget}composedPath(){let a=J(this).currentTarget;return a?[a]:[]}get NONE(){return E}get CAPTURING_PHASE(){return F}get AT_TARGET(){return G}get BUBBLING_PHASE(){return H}get eventPhase(){return 2*!!J(this).dispatchFlag}stopPropagation(){J(this).stopPropagationFlag=!0}get cancelBubble(){return J(this).stopPropagationFlag}set cancelBubble(a){a?J(this).stopPropagationFlag=!0:w.warn()}stopImmediatePropagation(){let a=J(this);a.stopPropagationFlag=a.stopImmediatePropagationFlag=!0}get bubbles(){return J(this).bubbles}get cancelable(){return J(this).cancelable}get returnValue(){return!J(this).canceledFlag}set returnValue(a){a?x.warn():K(J(this))}preventDefault(){K(J(this))}get defaultPrevented(){return J(this).canceledFlag}get composed(){return J(this).composed}get isTrusted(){return!1}get timeStamp(){return J(this).timeStamp}initEvent(a,b=!1,c=!1){let d=J(this);if(d.dispatchFlag)return void v.warn();I.set(this,{...d,type:String(a),bubbles:!!b,cancelable:!!c,target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1})}}),E=0,F=1,G=2,H=3,I=new WeakMap;function J(a,b="this"){let c=I.get(a);return o(null!=c,"'%s' must be an object that Event constructor created, but got another one: %o",b,a),c}function K(a){return a.inPassiveListenerFlag?void z.warn():a.cancelable?void(a.canceledFlag=!0):void y.warn()}Object.defineProperty(D,"NONE",{enumerable:!0}),Object.defineProperty(D,"CAPTURING_PHASE",{enumerable:!0}),Object.defineProperty(D,"AT_TARGET",{enumerable:!0}),Object.defineProperty(D,"BUBBLING_PHASE",{enumerable:!0});var L=Object.getOwnPropertyNames(D.prototype);for(let a=0;a<L.length;++a)"constructor"!==L[a]&&Object.defineProperty(D.prototype,L[a],{enumerable:!0});void 0!==t&&void 0!==t.Event&&Object.setPrototypeOf(D.prototype,t.Event.prototype);var M,N={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function O(a){let b=Object.keys(N);for(let c=0;c<b.length;++c){let d=b[c],e=N[d];Object.defineProperty(a,d,{get:()=>e,configurable:!0,enumerable:!0})}}var P=class extends D{static wrap(a){return new(function a(b){let c=Object.getPrototypeOf(b);if(null==c)return P;let d=S.get(c);return null==d&&(d=function(a,b){class c extends a{}let d=Object.keys(b);for(let a=0;a<d.length;++a)Object.defineProperty(c.prototype,d[a],T(b,d[a]));return c}(a(c),c),S.set(c,d)),d}(a))(a)}constructor(a){super(a.type,{bubbles:a.bubbles,cancelable:a.cancelable,composed:a.composed}),a.cancelBubble&&super.stopPropagation(),a.defaultPrevented&&super.preventDefault(),Q.set(this,{original:a});let b=Object.keys(a);for(let c=0;c<b.length;++c){let d=b[c];d in this||Object.defineProperty(this,d,T(a,d))}}stopPropagation(){super.stopPropagation();let{original:a}=R(this);"stopPropagation"in a&&a.stopPropagation()}get cancelBubble(){return super.cancelBubble}set cancelBubble(a){super.cancelBubble=a;let{original:b}=R(this);"cancelBubble"in b&&(b.cancelBubble=a)}stopImmediatePropagation(){super.stopImmediatePropagation();let{original:a}=R(this);"stopImmediatePropagation"in a&&a.stopImmediatePropagation()}get returnValue(){return super.returnValue}set returnValue(a){super.returnValue=a;let{original:b}=R(this);"returnValue"in b&&(b.returnValue=a)}preventDefault(){super.preventDefault();let{original:a}=R(this);"preventDefault"in a&&a.preventDefault()}get timeStamp(){let{original:a}=R(this);return"timeStamp"in a?a.timeStamp:super.timeStamp}},Q=new WeakMap;function R(a){let b=Q.get(a);return o(null!=b,"'this' is expected an Event object, but got",a),b}var S=new WeakMap;function T(a,b){let c=Object.getOwnPropertyDescriptor(a,b);return{get(){let a=R(this).original,c=a[b];return"function"==typeof c?c.bind(a):c},set(a){R(this).original[b]=a},configurable:c.configurable,enumerable:c.enumerable}}function U(a){return(1&a.flags)==1}function V(a){return(2&a.flags)==2}function W(a){return(4&a.flags)==4}function X({listeners:a},b,c){for(let d=0;d<a.length;++d)if(a[d].callback===b&&U(a[d])===c)return d;return -1}function Y(a,b,c){let d=X(a,b,c);return -1!==d&&Z(a,d)}function Z(a,b,c=!1){let d=a.listeners[b];return d.flags|=8,d.signal&&d.signal.removeEventListener("abort",d.signalListener),a.cow&&!c?(a.cow=!1,a.listeners=a.listeners.filter((a,c)=>c!==b),!1):(a.listeners.splice(b,1),!0)}S.set(Object.prototype,P),void 0!==t&&void 0!==t.Event&&S.set(t.Event.prototype,P);var $=class{constructor(){_.set(this,Object.create(null))}addEventListener(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;let s,t,u=aa(this),{callback:v,capture:w,once:x,passive:y,signal:z,type:C}=(e=a,f=b,g=c,ab(f),"object"==typeof g&&null!==g?{type:String(e),callback:null!=f?f:void 0,capture:!!g.capture,passive:!!g.passive,once:!!g.once,signal:null!=(h=g.signal)?h:void 0}:{type:String(e),callback:null!=f?f:void 0,capture:!!g,passive:!1,once:!1,signal:void 0});if(null==v||null!=z&&z.aborted)return;let D=null!=(d=u[C])?d:u[C]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]},E=X(D,v,w);if(-1!==E){return void(i=D.listeners[E],j=y,k=x,l=z,A.warn(U(i)?"capture":"bubble",i.callback),V(i)!==j&&B.warn("passive"),W(i)!==k&&B.warn("once"),i.signal!==l&&B.warn("signal"))}m=D,n=v,o=w,p=y,q=x,(r=z)&&(s=Y.bind(null,m,n,o),r.addEventListener("abort",s)),t={callback:n,flags:!!o|2*!!p|4*!!q,signal:r,signalListener:s},m.cow?(m.cow=!1,m.listeners=[...m.listeners,t]):m.listeners.push(t)}removeEventListener(a,b,c){var d,e,f;let g=aa(this),{callback:h,capture:i,type:j}=(d=a,e=b,f=c,ab(e),"object"==typeof f&&null!==f?{type:String(d),callback:null!=e?e:void 0,capture:!!f.capture}:{type:String(d),callback:null!=e?e:void 0,capture:!!f}),k=g[j];null!=h&&k&&Y(k,h,i)}dispatchEvent(a){let b=aa(this)[String(a.type)];if(null==b)return!0;let c=a instanceof D?a:P.wrap(a),d=J(c,"event");if(d.dispatchFlag){var e;throw e="This event has been in dispatching.",t.DOMException?new t.DOMException(e,"InvalidStateError"):(null==M&&(Object.defineProperties((M=class a extends Error{constructor(b){super(b),Error.captureStackTrace&&Error.captureStackTrace(this,a)}get code(){return 11}get name(){return"InvalidStateError"}}).prototype,{code:{enumerable:!0},name:{enumerable:!0}}),O(M),O(M.prototype)),new M(e))}if(d.dispatchFlag=!0,d.target=d.currentTarget=this,!d.stopPropagationFlag){let{cow:a,listeners:e}=b;b.cow=!0;for(let f=0;f<e.length;++f){let g=e[f];if((8&g.flags)!=8&&(W(g)&&Z(b,f,!a)&&(f-=1),d.inPassiveListenerFlag=V(g),function({callback:a},b,c){try{"function"==typeof a?a.call(b,c):"function"==typeof a.handleEvent&&a.handleEvent(c)}catch(a){!function(a){try{let b=a instanceof Error?a:Error(q(a));if(r)return void r(b);if("function"==typeof dispatchEvent&&"function"==typeof ErrorEvent)dispatchEvent(new ErrorEvent("error",{error:b,message:b.message}));else if("undefined"!=typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",b);console.error(b)}catch{}}(a)}}(g,this,c),d.inPassiveListenerFlag=!1,d.stopImmediatePropagationFlag))break}a||(b.cow=!1)}return d.target=null,d.currentTarget=null,d.stopImmediatePropagationFlag=!1,d.stopPropagationFlag=!1,d.dispatchFlag=!1,!d.canceledFlag}},_=new WeakMap;function aa(a,b="this"){let c=_.get(a);return o(null!=c,"'%s' must be an object that EventTarget constructor created, but got another one: %o",b,a),c}function ab(a){if("function"!=typeof a&&("object"!=typeof a||null===a||"function"!=typeof a.handleEvent)){if(null==a||"object"==typeof a)return void C.warn(a);throw TypeError(p(C.message,[a]))}}var ac=Object.getOwnPropertyNames($.prototype);for(let a=0;a<ac.length;++a)"constructor"!==ac[a]&&Object.defineProperty($.prototype,ac[a],{enumerable:!0});void 0!==t&&void 0!==t.EventTarget&&Object.setPrototypeOf($.prototype,t.EventTarget.prototype);var ad=((a,b,i)=>(i=null!=a?c(g(a)):{},((a,b,c,g)=>{if(b&&"object"==typeof b||"function"==typeof b)for(let i of f(b))h.call(a,i)||i===c||d(a,i,{get:()=>b[i],enumerable:!(g=e(b,i))||g.enumerable});return a})(!b&&a&&a.__esModule?i:d(i,"default",{value:a,enumerable:!0}),a)))(n()),ae=512e3,af=256,ag=(a,{minChunkSize:b=af,maxChunkSize:c=ae}={})=>null==a||"number"==typeof a&&a>=256&&a%256==0&&a>=b&&a<=c,ah=(a,{minChunkSize:b=af,maxChunkSize:c=ae}={})=>TypeError(`chunkSize ${a} must be a positive number in multiples of 256, between ${b} and ${c}`),ai=class{constructor(a,b={}){var c,d,e;if(this.readableStream=a,!ag(b.defaultChunkSize,b))throw ah(b.defaultChunkSize,b);this.defaultChunkSize=null!=(c=b.defaultChunkSize)?c:30720,this.minChunkSize=null!=(d=b.minChunkSize)?d:af,this.maxChunkSize=null!=(e=b.maxChunkSize)?e:ae}get chunkSize(){var a;return null!=(a=this._chunkSize)?a:this.defaultChunkSize}set chunkSize(a){if(!ag(a,this))throw ah(a,this);this._chunkSize=a}get chunkByteSize(){return 1024*this.chunkSize}get error(){return this._error}async *[Symbol.asyncIterator](){let a,b=this.readableStream.getReader();try{for(;;){let{done:c,value:d}=await b.read();if(c){if(a){let b=a;a=void 0,yield b}break}let e=d instanceof Uint8Array?new Blob([d],{type:"application/octet-stream"}):d;for(a=a?new Blob([a,e]):e;a;)if(a.size===this.chunkByteSize){let b=a;a=void 0,yield b;break}else{if(a.size<this.chunkByteSize)break;{let b=a.slice(0,this.chunkByteSize);a=a.slice(this.chunkByteSize),yield b}}}}catch(a){this._error=a}finally{if(a){let b=a;a=void 0,yield b}b.releaseLock();return}}},aj=class{constructor(a,b={}){var c,d,e;if(this.file=a,!ag(b.defaultChunkSize,b))throw ah(b.defaultChunkSize,b);this.defaultChunkSize=null!=(c=b.defaultChunkSize)?c:30720,this.minChunkSize=null!=(d=b.minChunkSize)?d:af,this.maxChunkSize=null!=(e=b.maxChunkSize)?e:ae}get chunkSize(){var a;return null!=(a=this._chunkSize)?a:this.defaultChunkSize}set chunkSize(a){if(!ag(a,this))throw ah(a,this);this._chunkSize=a}get chunkByteSize(){return 1024*this.chunkSize}get error(){return this._error}async *[Symbol.asyncIterator](){let a=new FileReader,b=0,c=()=>new Promise(c=>{if(b>=this.file.size)return void c(void 0);let d=Math.min(this.chunkByteSize,this.file.size-b);a.onload=()=>{null!==a.result?c(new Blob([a.result],{type:"application/octet-stream"})):c(void 0)},a.readAsArrayBuffer(this.file.slice(b,b+d))});try{for(;;){let a=await c();if(a)b+=a.size,yield a;else break}}catch(a){this._error=a}}},ak=[200,201,202,204,308],al=[408,502,503,504],am=[308],an=(a,b)=>!!a&&ak.includes(a.statusCode),ao=class{static createUpload(a){return new ao(a)}constructor(a){if(this.eventTarget=new $,this.endpoint=a.endpoint,this.file=a.file,this.headers=a.headers||{},this.method=a.method||"PUT",this.attempts=a.attempts||5,this.delayBeforeAttempt=a.delayBeforeAttempt||1,this.retryCodes=a.retryCodes||al,this.dynamicChunkSize=a.dynamicChunkSize||!1,this.maxFileBytes=1024*(a.maxFileSize||0),this.chunkCount=0,this.attemptCount=0,this._offline=!1,this._paused=!1,this.success=!1,this.nextChunkRangeStart=0,a.useLargeFileWorkaround){let b=c=>{this.chunkedIterable.error&&(console.warn(`Unable to read file of size ${this.file.size} bytes via a ReadableStream. Falling back to in-memory FileReader!`),c.stopImmediatePropagation(),this.chunkedIterable=new aj(this.file,{...a,defaultChunkSize:a.chunkSize}),this.chunkedIterator=this.chunkedIterable[Symbol.asyncIterator](),this.getEndpoint().then(()=>{this.sendChunks()}).catch(a=>{let b=null!=a&&a.message?`: ${a.message}`:"";this.dispatch("error",{message:`Failed to get endpoint${b}`})}),this.off("error",b))};this.on("error",b)}this.chunkedIterable=new ai(this.file.stream(),{...a,defaultChunkSize:a.chunkSize}),this.chunkedIterator=this.chunkedIterable[Symbol.asyncIterator](),this.totalChunks=Math.ceil(this.file.size/this.chunkByteSize),this.validateOptions(),this.getEndpoint().then(()=>this.sendChunks()).catch(a=>{let b=null!=a&&a.message?`: ${a.message}`:"";this.dispatch("error",{message:`Failed to get endpoint${b}`})})}get maxChunkSize(){var a,b;return null!=(b=null==(a=this.chunkedIterable)?void 0:a.maxChunkSize)?b:ae}get minChunkSize(){var a,b;return null!=(b=null==(a=this.chunkedIterable)?void 0:a.minChunkSize)?b:af}get chunkSize(){var a,b;return null!=(b=null==(a=this.chunkedIterable)?void 0:a.chunkSize)?b:30720}set chunkSize(a){this.chunkedIterable.chunkSize=a}get chunkByteSize(){return this.chunkedIterable.chunkByteSize}get totalChunkSize(){return Math.ceil(this.file.size/this.chunkByteSize)}on(a,b){this.eventTarget.addEventListener(a,b)}once(a,b){this.eventTarget.addEventListener(a,b,{once:!0})}off(a,b){this.eventTarget.removeEventListener(a,b)}get offline(){return this._offline}get paused(){return this._paused}abort(){var a;this.pause(),null==(a=this.currentXhr)||a.abort()}pause(){this._paused=!0}resume(){this._paused&&(this._paused=!1,this.sendChunks())}get successfulPercentage(){return this.nextChunkRangeStart/this.file.size}dispatch(a,b){let c=new CustomEvent(a,{detail:b});this.eventTarget.dispatchEvent(c)}validateOptions(){if(!this.endpoint||"function"!=typeof this.endpoint&&"string"!=typeof this.endpoint)throw TypeError("endpoint must be defined as a string or a function that returns a promise");if(!(this.file instanceof File))throw TypeError("file must be a File object");if(this.headers&&"function"!=typeof this.headers&&"object"!=typeof this.headers)throw TypeError("headers must be null, an object, or a function that returns an object or a promise");if(!ag(this.chunkSize,{maxChunkSize:this.maxChunkSize,minChunkSize:this.minChunkSize}))throw ah(this.chunkSize,{maxChunkSize:this.maxChunkSize,minChunkSize:this.minChunkSize});if(this.maxChunkSize&&("number"!=typeof this.maxChunkSize||this.maxChunkSize<256||this.maxChunkSize%256!=0||this.maxChunkSize<this.chunkSize||this.maxChunkSize<this.minChunkSize))throw TypeError(`maxChunkSize must be a positive number in multiples of 256, and larger than or equal to both ${this.minChunkSize} and ${this.chunkSize}`);if(this.minChunkSize&&("number"!=typeof this.minChunkSize||this.minChunkSize<256||this.minChunkSize%256!=0||this.minChunkSize>this.chunkSize||this.minChunkSize>this.maxChunkSize))throw TypeError(`minChunkSize must be a positive number in multiples of 256, and smaller than ${this.chunkSize} and ${this.maxChunkSize}`);if(this.maxFileBytes>0&&this.maxFileBytes<this.file.size)throw Error(`file size exceeds maximum (${this.file.size} > ${this.maxFileBytes})`);if(this.attempts&&("number"!=typeof this.attempts||this.attempts<=0))throw TypeError("retries must be a positive number");if(this.delayBeforeAttempt&&("number"!=typeof this.delayBeforeAttempt||this.delayBeforeAttempt<0))throw TypeError("delayBeforeAttempt must be a positive number")}getEndpoint(){return"string"==typeof this.endpoint?(this.endpointValue=this.endpoint,Promise.resolve(this.endpoint)):this.endpoint(this.file).then(a=>{if(this.endpointValue=a,"string"!=typeof a)throw TypeError("endpoint must return a string");return this.endpointValue})}xhrPromise(a){let b=a=>{a.upload.onprogress=a=>{var b;let c=this.totalChunks-this.chunkCount,d=(this.file.size-this.nextChunkRangeStart)/this.file.size/c,e=a.loaded/(null!=(b=a.total)?b:this.chunkByteSize)*d;this.dispatch("progress",Math.min((this.successfulPercentage+e)*100,100))}};return new Promise((c,d)=>{this.currentXhr=(0,ad.default)({...a,beforeSend:b},(a,b)=>(this.currentXhr=void 0,a?d(a):c(b)))})}async sendChunk(a){let b=this.nextChunkRangeStart,c=b+a.size-1,d={...await ("function"==typeof this.headers?this.headers():this.headers),"Content-Type":this.file.type,"Content-Range":`bytes ${b}-${c}/${this.file.size}`};return this.dispatch("attempt",{chunkNumber:this.chunkCount,totalChunks:this.totalChunks,chunkSize:this.chunkSize}),this.xhrPromise({headers:d,url:this.endpointValue,method:this.method,body:a})}async sendChunkWithRetries(a){let b,c=async(a,b)=>{var c;let d=(new Date().getTime()-this.lastChunkStart.getTime())/1e3;if(this.dispatch("chunkSuccess",{chunk:this.chunkCount,chunkSize:this.chunkSize,attempts:this.attemptCount,timeInterval:d,response:a}),this.attemptCount=0,this.chunkCount=(null!=(c=this.chunkCount)?c:0)+1,this.nextChunkRangeStart=this.nextChunkRangeStart+this.chunkByteSize,this.dynamicChunkSize){let a=this.chunkSize;d<10?a=Math.min(2*this.chunkSize,this.maxChunkSize):d>30&&(a=Math.max(this.chunkSize/2,this.minChunkSize)),this.chunkSize=256*Math.ceil(a/256);let b=(this.file.size-this.nextChunkRangeStart)/this.chunkByteSize;this.totalChunks=Math.ceil(this.chunkCount+b)}return!0},d=async(a,b)=>(this.dispatch("progress",Math.min(100*this.successfulPercentage,100)),this.dispatch("error",{message:`Server responded with ${a.statusCode}. Stopping upload.`,chunk:this.chunkCount,attempts:this.attemptCount,response:a}),!1),e=async(b,c)=>(this.dispatch("attemptFailure",{message:`An error occured uploading chunk ${this.chunkCount}. ${this.attempts-this.attemptCount} retries left.`,chunkNumber:this.chunkCount,attemptsLeft:this.attempts-this.attemptCount,response:b}),new Promise(b=>{setTimeout(async()=>{if(this._paused||this.offline){this.pendingChunk=a,b(!1);return}b(await this.sendChunkWithRetries(a))},1e3*this.delayBeforeAttempt)})),f;try{this.attemptCount=this.attemptCount+1,this.lastChunkStart=new Date,f=await this.sendChunk(a)}catch(a){"number"==typeof(null==a?void 0:a.statusCode)&&(f=a)}let g={retryCodes:this.retryCodes,attemptCount:this.attemptCount,attempts:this.attempts,currentChunkEndByte:this.nextChunkRangeStart+a.size-1};return((a,b)=>{var c;if(!a||!am.includes(a.statusCode)||!(null!=(c=a.headers)&&c.range))return!1;let d=a.headers.range.match(/bytes=(\d+)-(\d+)/);return!!d&&parseInt(d[2],10)<b.currentChunkEndByte})(f,g)?e(f,a):an(f,g)?c(f,a):(b=f,g.attemptCount>=g.attempts||!(an(b)||((a,{retryCodes:b=al})=>!a||b.includes(a.statusCode))(b,g)))?d(f,a):e(f,a)}async sendChunks(){if(this.pendingChunk&&!(this._paused||this.offline)){let a=this.pendingChunk;this.pendingChunk=void 0;let b=await this.sendChunkWithRetries(a);this.success&&b&&this.dispatch("success")}for(;!(this.success||this._paused||this.offline);){let{value:a,done:b}=await this.chunkedIterator.next(),c=!a&&b;if(a&&(c=await this.sendChunkWithRetries(a)),this.chunkedIterable.error){c=!1,this.dispatch("error",{message:`Unable to read file of size ${this.file.size} bytes. Try loading from another browser.`});return}if(this.success=!!b,this.success&&c&&this.dispatch("success"),!c)return}}},ap=Object.defineProperty,aq=a=>{throw TypeError(a)},ar=(a,b,c)=>b.has(a)||aq("Cannot "+c),as=(a,b,c)=>(ar(a,b,"read from private field"),c?c.call(a):b.get(a)),at=(a,b,c)=>b.has(a)?aq("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),au=(a,b,c,d)=>(ar(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),av={};((a,b)=>{for(var c in b)ap(a,c,{get:b[c],enumerable:!0})})(av,{ProgressTypes:()=>aw});var aw={BAR:"bar",RADIAL:"radial",PERCENTAGE:"percentage"},ax=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends ax{});var ay,az=class extends ax{},aA=class{constructor(a,b={}){at(this,ay),au(this,ay,null==b?void 0:b.detail)}get detail(){return as(this,ay)}initCustomEvent(){}};ay=new WeakMap;var aB={document:{createElement:function(a,b){return new az}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(az)},CustomEvent:aA,EventTarget:ax,HTMLElement:az,HTMLVideoElement:class extends ax{}},aC=aB,aD=aB.document,aE=(a,b)=>a?a.closest(b)||aE(a.getRootNode().host,b):null,aF=a=>{let b=a.getAttribute("mux-uploader");return b?document.getElementById(b):aE(a,"mux-uploader")},aG=aD.createElement("template");aG.innerHTML=`
<style>
  :host {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #ccc;
    padding: 2.5rem 2rem;
    border-radius: .25rem;
  }

  slot[name='heading'] > * {
    margin-bottom: 0.75rem;
    font-size: 1.75rem;
    text-align: center;
  }

  slot[name='separator'] > * {
    margin-bottom: 0.75rem;
  }

  #overlay {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  :host([active][overlay]) > #overlay {
    background: var(--overlay-background-color, rgba(226, 253, 255, 0.95));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  :host([file-ready])::part(heading),
  :host([file-ready])::part(separator) {
    display: none;
  }
</style>

<slot name="heading" part="heading">
  <span>Drop a video file here to upload</span>
</slot>
<slot name="separator" part="separator">
  <span>or</span>
</slot>
<slot></slot>

<div id="overlay">
  <h1 id="overlay-label"></h1>
</div>
`;var aH,aI,aJ,aK={MUX_UPLOADER:"mux-uploader",OVERLAY_TEXT:"overlay-text"},aL=class extends aC.HTMLElement{constructor(){super(),at(this,aH),at(this,aI),at(this,aJ);let a=this.attachShadow({mode:"open"});a.appendChild(aG.content.cloneNode(!0)),au(this,aH,a.getElementById("overlay-label"))}connectedCallback(){if(au(this,aI,aF(this)),au(this,aJ,new AbortController),as(this,aI)){let a={signal:as(this,aJ).signal};as(this,aI).addEventListener("file-ready",()=>this.toggleAttribute("file-ready",!0),a),as(this,aI).addEventListener("uploadstart",()=>this.toggleAttribute("upload-in-progress",!0),a),as(this,aI).addEventListener("success",()=>{this.toggleAttribute("upload-in-progress",!1),this.toggleAttribute("upload-complete",!0)},a),as(this,aI).addEventListener("reset",()=>{this.toggleAttribute("file-ready",!1),this.toggleAttribute("upload-in-progress",!1),this.toggleAttribute("upload-complete",!1)},a),this.setupDragEvents(a),this.toggleAttribute("upload-in-progress",as(this,aI).hasAttribute("upload-in-progress")),this.toggleAttribute("upload-complete",as(this,aI).hasAttribute("upload-complete")),this.toggleAttribute("file-ready",as(this,aI).hasAttribute("file-ready"))}}disconnectedCallback(){var a;null==(a=as(this,aJ))||a.abort()}attributeChangedCallback(a,b,c){a===aK.OVERLAY_TEXT&&b!==c?as(this,aH).innerHTML=null!=c?c:"":"active"===a&&this.hasAttribute("overlay")&&null!=c&&(this._currentDragTarget=this)}static get observedAttributes(){return[aK.OVERLAY_TEXT,aK.MUX_UPLOADER,"active"]}setupDragEvents(a){this.addEventListener("dragenter",a=>{this._currentDragTarget=a.target,a.preventDefault(),a.stopPropagation(),this.toggleAttribute("active",!0)},a),this.addEventListener("dragleave",a=>{this._currentDragTarget===a.target&&(this._currentDragTarget=void 0,this.toggleAttribute("active",!1))},a),this.addEventListener("dragover",a=>{a.preventDefault(),a.stopPropagation()},a),this.addEventListener("drop",a=>{var b;a.preventDefault(),a.stopPropagation();let{dataTransfer:c}=a,{files:d}=c,e=d[0];(null!=(b=as(this,aI))?b:this).dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:e})),this.removeAttribute("active")},a)}};aH=new WeakMap,aI=new WeakMap,aJ=new WeakMap,aC.customElements.get("mux-uploader-drop")||(aC.customElements.define("mux-uploader-drop",aL),aC.MuxUploaderDropElement=aL);var aM=aD.createElement("template");aM.innerHTML=`
<style>
  :host {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .bar-type {
    background: var(--progress-bar-background-color, #e6e6e6);
    border-radius: var(--progress-bar-border-radius, 100px);
    height: var(--progress-bar-height, 4px);
    width: 100%;
  }

  .radial-type,
  .bar-type,
  #percentage-type,
  :host([type="bar"][upload-error]) #percentage-type {
    display: none;
  }

  :host([type="radial"][upload-in-progress]) .radial-type,
  :host([type="bar"][upload-in-progress]) .bar-type {
    display: block;
  }

  :host([type="percentage"][upload-in-progress]) #percentage-type {
    display: var(--progress-percentage-display, block);
  }

  :host([type="bar"][upload-error]) .progress-bar {
    background: #e22c3e;
  }

  .progress-bar {
    box-shadow: var(--progress-bar-box-shadow, 0 10px 40px -10px #fff);
    border-radius: var(--progress-bar-border-radius, 100px);
    background: var(--progress-bar-fill-color, #000000);
    height: var(--progress-bar-height, 4px);
    width: 0%;
    transition: width 0.25s;
  }

  circle {
    stroke: var(--progress-radial-fill-color, black);
    stroke-width: 6;  /* Thickness of the circle */
    fill: transparent; /* Make inside of the circle see-through */

    /* Animation */
    transition: 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
  }

  #percentage-type {
    font-size: inherit;
    margin: 0 0 1em;
  }
</style>

<slot></slot>

<p id="percentage-type"></p>
<div class="bar-type">
  <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar" id="progress-bar" tabindex="0"></div>
</div>
<div class="radial-type">
  <svg
    width="120"
    height="120">
    <!-- To prevent overflow of the SVG wrapper, radius must be  (svgWidth / 2) - (circleStrokeWidth * 2)
      or use overflow: visible on the svg.-->
    <circle
      r="52"
      cx="60"
      cy="60"
    />
  <svg>
</div>
`;var aN,aO,aP=class extends aC.HTMLElement{constructor(){var a,b,c,d;super(),at(this,aN),at(this,aO),this.onUploadStart=()=>{var a;null==(a=this.progressBar)||a.focus(),this.toggleAttribute("upload-in-progress",!0)},this.onProgress=a=>{var b;let c=a.detail;switch(null==(b=this.progressBar)||b.setAttribute("aria-valuenow",`${Math.floor(c)}`),this.getAttribute("type")){case aw.BAR:this.progressBar&&(this.progressBar.style.width=`${c}%`);break;case aw.RADIAL:if(this.svgCircle){let a=this.getCircumference()-c/100*this.getCircumference();this.svgCircle.style.strokeDashoffset=a.toString()}break;case aw.PERCENTAGE:this.uploadPercentage&&(this.uploadPercentage.innerHTML=`${Math.floor(c)}%`)}},this.onSuccess=()=>{this.toggleAttribute("upload-in-progress",!1),this.toggleAttribute("upload-complete",!0)},this.onReset=()=>{this.toggleAttribute("upload-in-progress",!1),this.uploadPercentage&&(this.uploadPercentage.innerHTML=""),this.svgCircle&&(this.svgCircle.style.strokeDashoffset=`${this.getCircumference()}`)},this.attachShadow({mode:"open"}).appendChild(aM.content.cloneNode(!0)),this.svgCircle=null==(a=this.shadowRoot)?void 0:a.querySelector("circle"),this.progressBar=null==(b=this.shadowRoot)?void 0:b.getElementById("progress-bar"),this.uploadPercentage=null==(c=this.shadowRoot)?void 0:c.getElementById("percentage-type"),null==(d=this.progressBar)||d.setAttribute("aria-description","Media upload progress bar")}connectedCallback(){if(this.setDefaultType(),au(this,aN,aF(this)),au(this,aO,new AbortController),as(this,aN)){let a={signal:as(this,aO).signal};as(this,aN).addEventListener("uploadstart",this.onUploadStart,a),as(this,aN).addEventListener("reset",this.onReset),as(this,aN).addEventListener("progress",this.onProgress),as(this,aN).addEventListener("success",this.onSuccess),this.toggleAttribute("upload-in-progress",as(this,aN).hasAttribute("upload-in-progress")),this.toggleAttribute("upload-complete",as(this,aN).hasAttribute("upload-complete"))}}disconnectedCallback(){var a;null==(a=as(this,aO))||a.abort()}getRadius(){var a;return Number(null==(a=this.svgCircle)?void 0:a.getAttribute("r"))}getCircumference(){return 2*this.getRadius()*Math.PI}setDefaultType(){let a=this.getAttribute("type");a||this.setAttribute("type",aw.BAR),a===aw.RADIAL&&this.svgCircle&&(this.svgCircle.style.strokeDasharray=`${this.getCircumference()} ${this.getCircumference()}`,this.svgCircle.style.strokeDashoffset=`${this.getCircumference()}`)}};aN=new WeakMap,aO=new WeakMap,aC.customElements.get("mux-uploader-progress")||aC.customElements.define("mux-uploader-progress",aP);var aQ=aD.createElement("template");aQ.innerHTML=`
<style>

:host([upload-error]) {
  color: #e22c3e;
}
</style>

<span id="status-message" role="status" aria-live="polite"></span>
`;var aR,aS,aT=class extends aC.HTMLElement{constructor(){var a;super(),at(this,aR),at(this,aS),this.clearStatusMessage=()=>{this.toggleAttribute("upload-error",!1),this.statusMessage&&(this.statusMessage.innerHTML="")},this.onUploadError=a=>{this.toggleAttribute("upload-error",!0),this.statusMessage&&(this.statusMessage.innerHTML=a.detail.message)},this.onSuccess=()=>{this.toggleAttribute("upload-error",!1);let a="Upload complete!";this.statusMessage&&(this.statusMessage.innerHTML=a),console.info(a)},this.onOffline=()=>{this.toggleAttribute("upload-error",!1),this.statusMessage&&(this.statusMessage.innerHTML="Currently offline. Upload will resume automatically when online.")},this.attachShadow({mode:"open"}).appendChild(aQ.content.cloneNode(!0)),this.statusMessage=null==(a=this.shadowRoot)?void 0:a.getElementById("status-message")}connectedCallback(){if(au(this,aR,aF(this)),au(this,aS,new AbortController),as(this,aR)){let a={signal:as(this,aS).signal};as(this,aR).addEventListener("reset",this.clearStatusMessage,a),as(this,aR).addEventListener("uploaderror",this.onUploadError,a),as(this,aR).addEventListener("success",this.onSuccess,a),as(this,aR).addEventListener("uploadstart",this.clearStatusMessage,a),as(this,aR).addEventListener("offline",this.onOffline,a),as(this,aR).addEventListener("online",this.clearStatusMessage,a),this.toggleAttribute("upload-in-progress",as(this,aR).hasAttribute("upload-in-progress")),this.toggleAttribute("upload-complete",as(this,aR).hasAttribute("upload-complete")),this.toggleAttribute("upload-error",as(this,aR).hasAttribute("upload-error"))}}disconnectedCallback(){var a;null==(a=as(this,aS))||a.abort()}};aR=new WeakMap,aS=new WeakMap,aC.customElements.get("mux-uploader-status")||aC.customElements.define("mux-uploader-status",aT);var aU=aD.createElement("template");aU.innerHTML=`
<style>
  #retry-button {
    color: #e22c3e;
    text-decoration-line: underline;
    cursor: pointer;
    position: relative;
    display: none;
  }

  :host([upload-error]) #retry-button {
    display: inline-block;
  }
</style>

<span id="retry-button" role="button" tabindex="0">Try again</span>
`;var aV,aW,aX=class extends aC.HTMLElement{constructor(){var a;super(),at(this,aV),at(this,aW),this.handleKeyup=a=>{let{key:b}=a;["Enter"," "].includes(b)&&this.triggerReset()},this.triggerReset=()=>{var a;null==(a=as(this,aV))||a.dispatchEvent(new CustomEvent("reset"))},this.attachShadow({mode:"open"}).appendChild(aU.content.cloneNode(!0)),this.retryButton=null==(a=this.shadowRoot)?void 0:a.getElementById("retry-button")}connectedCallback(){var a,b;if(au(this,aV,aF(this)),au(this,aW,new AbortController),as(this,aV)){let c={signal:as(this,aW).signal};as(this,aV).addEventListener("uploaderror",()=>this.toggleAttribute("upload-error",!0)),as(this,aV).addEventListener("reset",()=>this.toggleAttribute("upload-error",!1)),null==(a=this.retryButton)||a.addEventListener("click",this.triggerReset,c),null==(b=this.retryButton)||b.addEventListener("keyup",this.handleKeyup,c),this.toggleAttribute("upload-error",as(this,aV).hasAttribute("upload-error"))}}disconnectedCallback(){var a;null==(a=as(this,aW))||a.abort()}};aV=new WeakMap,aW=new WeakMap,aC.customElements.get("mux-uploader-retry")||aC.customElements.define("mux-uploader-retry",aX);var aY=aD.createElement("template");aY.innerHTML=`
<style>
#pause-button {
  cursor: pointer;
  line-height: 16px;
  background: #fff;
  border: 1px solid #000;
  color: #000000;
  padding: 16px 24px;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: none;
}

#pause-button:hover:not(:disabled) {
  color: #fff;
  background: #404040;
}

#pause-button:active {
  color: #fff;
  background: #000;
}

#pause-button:disabled {
  cursor: not-allowed;
}

:host([upload-in-progress]:not([upload-error], [upload-complete])) #pause-button {
  display: initial;
}
</style>

<button id="pause-button">Pause</span>
`;var aZ,a$,a_=class extends aC.HTMLElement{constructor(){super(),at(this,aZ),at(this,a$),this.triggerPause=()=>{if(!as(this,aZ))return void console.warn("pausing before a mux-uploader element is associated is unsupported!");this.pauseButton.disabled||(as(this,aZ).paused=!as(this,aZ).paused)},this.attachShadow({mode:"open"}).appendChild(aY.content.cloneNode(!0))}connectedCallback(){if(au(this,aZ,aF(this)),au(this,a$,new AbortController),as(this,aZ)){let a={signal:as(this,a$).signal};as(this,aZ).addEventListener("uploadstart",()=>this.toggleAttribute("upload-in-progress",!0),a),as(this,aZ).addEventListener("uploaderror",()=>{this.toggleAttribute("upload-error",!0),this.toggleAttribute("upload-complete",!1),this.toggleAttribute("upload-in-progress",!1)}),as(this,aZ).addEventListener("success",()=>{this.toggleAttribute("upload-complete",!0),this.toggleAttribute("upload-error",!1),this.toggleAttribute("upload-in-progress",!1)}),as(this,aZ).addEventListener("reset",()=>{this.toggleAttribute("upload-error",!1),this.toggleAttribute("upload-in-progress",!1),this.toggleAttribute("upload-complete",!1)}),as(this,aZ).addEventListener("pausedchange",()=>{var a;if(this.pauseButton.disabled=!1,!as(this,aZ))return;let b=null!=(a=as(this,aZ).paused)&&a;this.pauseButton.innerHTML=b?"Pausing...":"Pause",b&&(this.pauseButton.disabled=!0,as(this,aZ).addEventListener("chunksuccess",()=>{var a;this.pauseButton.innerHTML=null!=(a=as(this,aZ))&&a.paused?"Resume":"Pause",this.pauseButton.disabled=!1},{once:!0}))}),this.pauseButton.addEventListener("click",this.triggerPause,a),this.toggleAttribute("upload-in-progress",as(this,aZ).hasAttribute("upload-in-progress")),this.toggleAttribute("upload-complete",as(this,aZ).hasAttribute("upload-complete")),this.toggleAttribute("upload-error",as(this,aZ).hasAttribute("upload-error"))}}disconnectedCallback(){var a;null==(a=as(this,a$))||a.abort()}get pauseButton(){var a;return null==(a=this.shadowRoot)?void 0:a.getElementById("pause-button")}};aZ=new WeakMap,a$=new WeakMap,aC.customElements.get("mux-uploader-pause")||aC.customElements.define("mux-uploader-pause",a_);var a0=`
  <style>
  #file-select {
    cursor: pointer;
    line-height: 16px;
    background: #fff;
    border: 1px solid #000;
    color: #000000;
    padding: 16px 24px;
    border-radius: 4px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    font-family: inherit;
    font-size: inherit;
    position: relative;
  }

  #file-select:hover {
    color: #fff;
    background: #404040;
  }

  #file-select:active {
    color: #fff;
    background: #000;
  }

  </style>

  <button id="file-select" type="button" part="file-select-button">Upload a video</button>
`,a1=aD.createElement("template");a1.innerHTML=`
  <style>
    :host { display: inline-block; }

    :host([file-ready]) > slot  {
      display: none;
    }
  </style>

  <slot>
    ${a0}
  </slot>
`;var a2,a3,a4,a5=class extends aC.HTMLElement{constructor(){var a,b,c;super(),at(this,a2),at(this,a3),at(this,a4),this.attachShadow({mode:"open"}).appendChild(a1.content.cloneNode(!0)),this.handleFilePickerElClick=this.handleFilePickerElClick.bind(this),this.filePickerEl=null==(a=this.shadowRoot)?void 0:a.querySelector("button"),null==(c=null==(b=this.shadowRoot)?void 0:b.querySelector("slot"))||c.addEventListener("slotchange",a=>{let b=a.currentTarget;this.filePickerEl=b.assignedElements({flatten:!0}).filter(a=>!["STYLE"].includes(a.nodeName))[0]})}connectedCallback(){if(au(this,a3,aF(this)),au(this,a4,new AbortController),as(this,a3)){let a={signal:as(this,a4).signal};as(this,a3).addEventListener("file-ready",()=>{this.toggleAttribute("file-ready",!0)},a),as(this,a3).addEventListener("uploadstart",()=>this.toggleAttribute("upload-in-progress",!0),a),as(this,a3).addEventListener("success",()=>{this.toggleAttribute("upload-in-progress",!1),this.toggleAttribute("upload-complete",!0)},a),as(this,a3).addEventListener("reset",()=>{this.toggleAttribute("file-ready",!1)},a),this.toggleAttribute("upload-in-progress",as(this,a3).hasAttribute("upload-in-progress")),this.toggleAttribute("upload-complete",as(this,a3).hasAttribute("upload-complete")),this.toggleAttribute("file-ready",as(this,a3).hasAttribute("file-ready"))}}disconnectedCallback(){var a;null==(a=as(this,a4))||a.abort()}get filePickerEl(){return as(this,a2)}set filePickerEl(a){a!==as(this,a2)&&(as(this,a2)&&as(this,a2).removeEventListener("click",this.handleFilePickerElClick),au(this,a2,a),as(this,a2)&&as(this,a2).addEventListener("click",this.handleFilePickerElClick))}handleFilePickerElClick(){var a,b;let c=this.getAttribute("mux-uploader"),d=c?aD.getElementById(c):this.getRootNode().host;null==(b=null==(a=null==d?void 0:d.shadowRoot)?void 0:a.querySelector("#hidden-file-input"))||b.click()}};a2=new WeakMap,a3=new WeakMap,a4=new WeakMap,aC.customElements.get("mux-uploader-file-select")||aC.customElements.define("mux-uploader-file-select",a5);var a6=aD.createElement("template");a6.innerHTML=`
<style>
  :host {
    display: flex;
    flex-direction: column;
  }

  mux-uploader-drop {
    flex-grow: 1;
  }

  input[type="file"] {
    display: none;
  }
</style>

<input id="hidden-file-input" type="file" accept="video/*, audio/*" />
<mux-uploader-sr-text></mux-uploader-sr-text>
`;var a7=class extends aC.HTMLElement{static get observedAttributes(){return["pausable","type","no-drop","no-progress","no-status","no-retry","max-file-size","use-large-file-workaround"]}constructor(){var a;super(),this.attachShadow({mode:"open"}).appendChild(a6.content.cloneNode(!0)),this.updateLayout(),null==(a=this.hiddenFileInput)||a.addEventListener("change",()=>{var a,b;let c=null==(b=null==(a=this.hiddenFileInput)?void 0:a.files)?void 0:b[0];this.toggleAttribute("file-ready",!!c),c&&this.dispatchEvent(new CustomEvent("file-ready",{composed:!0,bubbles:!0,detail:c}))})}connectedCallback(){this.addEventListener("file-ready",this.handleUpload),this.addEventListener("reset",this.resetState)}disconnectedCallback(){this.removeEventListener("file-ready",this.handleUpload,!1),this.removeEventListener("reset",this.resetState)}attributeChangedCallback(){this.updateLayout()}get hiddenFileInput(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("#hidden-file-input")}get endpoint(){var a;return null!=(a=this.getAttribute("endpoint"))?a:this._endpoint}set endpoint(a){a!==this.endpoint&&("string"==typeof a?this.setAttribute("endpoint",a):null==a&&this.removeAttribute("endpoint"),this._endpoint=a)}get type(){var a;return null!=(a=this.getAttribute("type"))?a:void 0}set type(a){a!=this.type&&(a?this.setAttribute("type",a):this.removeAttribute("type"))}get noDrop(){return this.hasAttribute("no-drop")}set noDrop(a){this.toggleAttribute("no-drop",!!a)}get noProgress(){return this.hasAttribute("no-progress")}set noProgress(a){this.toggleAttribute("no-progress",!!a)}get noStatus(){return this.hasAttribute("no-status")}set noStatus(a){this.toggleAttribute("no-status",!!a)}get noRetry(){return this.hasAttribute("no-retry")}set noRetry(a){this.toggleAttribute("no-retry",!!a)}get pausable(){return this.hasAttribute("pausable")}set pausable(a){this.toggleAttribute("pausable",!!a)}get dynamicChunkSize(){return this.hasAttribute("dynamic-chunk-size")}set dynamicChunkSize(a){a!==this.hasAttribute("dynamic-chunk-size")&&(a?this.setAttribute("dynamic-chunk-size",""):this.removeAttribute("dynamic-chunk-size"))}get useLargeFileWorkaround(){return this.hasAttribute("use-large-file-workaround")}set useLargeFileWorkaround(a){a!=this.useLargeFileWorkaround&&this.toggleAttribute("use-large-file-workaround",!!a)}get maxFileSize(){let a=this.getAttribute("max-file-size");return null!==a?parseInt(a):void 0}set maxFileSize(a){a?this.setAttribute("max-file-size",a.toString()):this.removeAttribute("max-file-size")}get chunkSize(){let a=this.getAttribute("chunk-size");return null!==a?parseInt(a):void 0}set chunkSize(a){a?this.setAttribute("chunk-size",a.toString()):this.removeAttribute("chunk-size")}get upload(){return this._upload}get paused(){var a,b;return null!=(b=null==(a=this.upload)?void 0:a.paused)&&b}set paused(a){if(!this.upload)return void console.warn("Pausing before an upload has begun is unsupported");let b=!!a;b!==this.paused&&(b?this.upload.pause():this.upload.resume(),this.toggleAttribute("paused",b),this.dispatchEvent(new CustomEvent("pausedchange",{detail:b})))}updateLayout(){var a,b;let c=null==(a=this.shadowRoot)?void 0:a.querySelector("mux-uploader-drop, div");c&&c.remove();let d=function(a){var b;let{noDrop:c,noProgress:d,noStatus:e,noRetry:f,pausable:g,type:h}=a,i=c?"div":'mux-uploader-drop overlay part="drop"',j=(b=`
      <mux-uploader-progress part="progress progress-percentage" type="percentage"></mux-uploader-progress>
      <mux-uploader-progress part="progress progress-bar" ${((a,b)=>{if(null==b||!1===b)return"";let c=!0===b?"":`${b}`;return`${a}="${c}"`})("type",h)}></mux-uploader-progress>
    `,d?"":b);return aD.createRange().createContextualFragment(`
    <${i}>
      ${e?"":'<mux-uploader-status part="status"></mux-uploader-status>'}
      ${f?"":'<mux-uploader-retry part="retry"></mux-uploader-retry>'}
      ${!g?"":'<mux-uploader-pause part="pause"></mux-uploader-pause>'}

      <mux-uploader-file-select part="file-select">
        <slot name="file-select">
          ${a0}
        </slot>
      </mux-uploader-file-select>

      ${j}
    </${i}>
  `)}(this);null==(b=this.shadowRoot)||b.appendChild(d)}setError(a){this.setAttribute("upload-error",""),this.dispatchEvent(new CustomEvent("uploaderror",{detail:{message:a}}))}resetState(){this.removeAttribute("upload-error"),this.removeAttribute("upload-in-progress"),this.removeAttribute("upload-complete"),this.hiddenFileInput.value=""}handleUpload(a){let b=this.endpoint,c=this.dynamicChunkSize;if(!b)return void this.setError("No url or endpoint specified -- cannot handleUpload");this.removeAttribute("upload-error");try{let d=ao.createUpload({endpoint:b,dynamicChunkSize:c,file:a.detail,maxFileSize:this.maxFileSize,chunkSize:this.chunkSize,useLargeFileWorkaround:this.useLargeFileWorkaround});this._upload=d,this.dispatchEvent(new CustomEvent("uploadstart",{detail:{file:d.file,chunkSize:d.chunkSize}})),this.setAttribute("upload-in-progress",""),d.offline&&this.dispatchEvent(new CustomEvent("offline")),d.on("attempt",a=>{this.dispatchEvent(new CustomEvent("chunkattempt",a))}),d.on("chunkSuccess",a=>{this.dispatchEvent(new CustomEvent("chunksuccess",a))}),d.on("error",a=>{this.setAttribute("upload-error",""),console.error("error handler",a.detail.message),this.dispatchEvent(new CustomEvent("uploaderror",a))}),d.on("progress",a=>{this.dispatchEvent(new CustomEvent("progress",a))}),d.on("success",a=>{this.removeAttribute("upload-in-progress"),this.setAttribute("upload-complete",""),this.dispatchEvent(new CustomEvent("success",a))}),d.on("offline",a=>{this.dispatchEvent(new CustomEvent("offline",a))}),d.on("online",a=>{this.dispatchEvent(new CustomEvent("online",a))})}catch(a){a instanceof Error&&this.setError(a.message)}}};aC.customElements.get("mux-uploader")||(aC.customElements.define("mux-uploader",a7),aC.MuxUploaderElement=a7);var a8=aD.createElement("template");a8.innerHTML=`
<style>

.sr-only {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
}
</style>

<div class="sr-only" id="sr-only" aria-live="polite"></div>
`;var a9,ba=class extends aC.HTMLElement{constructor(){var a;super(),at(this,a9),this.attachShadow({mode:"open"}).appendChild(a8.content.cloneNode(!0)),this.srOnlyText=null==(a=this.shadowRoot)?void 0:a.getElementById("sr-only")}connectedCallback(){au(this,a9,aF(this)),as(this,a9)&&as(this,a9).addEventListener("success",this.updateText.bind(this))}disconnectedCallback(){as(this,a9)&&as(this,a9).removeEventListener("success",this.updateText.bind(this))}updateText(){this.srOnlyText&&(this.srOnlyText.textContent="Upload complete!")}};a9=new WeakMap,aC.customElements.get("mux-uploader-sr-text")||aC.customElements.define("mux-uploader-sr-text",ba);var bb={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay"},bc=(a={})=>Object.entries(a).reduce((a,[b,c])=>{let d=((a,b)=>{if(!("boolean"==typeof b&&!b))return((a,b)=>null!=b&&a in b)(a,bb)?bb[a]:/[A-Z]/.test(a)?a.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`):a})(b,c);if(!d)return a;let e=((a,b)=>"boolean"==typeof a?"":a)(c,0);return a[d]=e,a},{}),bd=(...a)=>{let c=(0,b.useRef)(null);return(0,b.useEffect)(()=>{a.forEach(a=>{a&&("function"==typeof a?a(c.current):a.current=c.current)})},[a]),c},be=b.default.forwardRef(({children:a,...c},d)=>b.default.createElement("mux-uploader-drop",bc({...c,ref:d}),a));b.default.forwardRef((a,c)=>{let d=bd((0,b.useRef)(null),c);return b.default.createElement(be,{ref:d,...a})});var bf=b.default.forwardRef(({children:a,...c},d)=>b.default.createElement("mux-uploader-file-select",bc({...c,ref:d}),a));b.default.forwardRef((a,c)=>{let d=bd((0,b.useRef)(null),c);return b.default.createElement(bf,{ref:d,...a})});var bg=b.default.forwardRef(({children:a,...c},d)=>b.default.createElement("mux-uploader-progress",bc({...c,ref:d}),a));b.default.forwardRef((a,c)=>{let d=bd((0,b.useRef)(null),c);return b.default.createElement(bg,{ref:d,...a})});var bh=b.default.forwardRef(({children:a,...c},d)=>b.default.createElement("mux-uploader-retry",bc({...c,ref:d}),a));b.default.forwardRef((a,c)=>{let d=bd((0,b.useRef)(null),c);return b.default.createElement(bh,{ref:d,...a})});var bi=b.default.forwardRef(({children:a,...c},d)=>b.default.createElement("mux-uploader-pause",bc({...c,ref:d}),a));b.default.forwardRef((a,c)=>{let d=bd((0,b.useRef)(null),c);return b.default.createElement(bi,{ref:d,...a})});var bj=b.default.forwardRef(({children:a,...c},d)=>b.default.createElement("mux-uploader-status",bc({...c,ref:d}),a));b.default.forwardRef((a,c)=>{let d=bd((0,b.useRef)(null),c);return b.default.createElement(bj,{ref:d,...a})});var bk=Object.prototype.hasOwnProperty,bl=(a,b,c)=>!((a,b)=>{if(Object.is(a,b))return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;if(Array.isArray(a))return!!Array.isArray(b)&&a.length===b.length&&a.some((a,c)=>b[c]===a);let c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(let d=0;d<c.length;d++)if(!bk.call(b,c[d])||!Object.is(a[c[d]],b[c[d]]))return!1;return!0})(b,a[c]),bm=(a,b,c)=>{a[c]=b};av.ProgressTypes;var bn=b.default.forwardRef(({children:a,...c},d)=>b.default.createElement("mux-uploader",bc({...c,ref:d}),a)),bo=(a,c,d)=>(0,b.useEffect)(()=>{let b=null==c?void 0:c.current;if(!(!b||!d))return b.addEventListener(a,d),()=>{b.removeEventListener(a,d)}},[null==c?void 0:c.current,d]),bp=b.default.forwardRef((a,c)=>{let d=(0,b.useRef)(null),e=bd(d,c),[f]=((a,c)=>{let{onUploadStart:d,onChunkAttempt:e,onChunkSuccess:f,onUploadError:g,onProgress:h,onSuccess:i,endpoint:j,...k}=c;return((a,c,d,e=bm,f=bl)=>(0,b.useEffect)(()=>{let b=null==d?void 0:d.current;b&&f(b,c,a)&&e(b,c,a)},[null==d?void 0:d.current,c]))("endpoint",j,a),bo("uploadstart",a,d),bo("chunkattempt",a,e),bo("chunksuccess",a,f),bo("uploaderror",a,g),bo("progress",a,h),bo("success",a,i),[k]})(d,a);return b.default.createElement(bn,{ref:e,...f})})}];

//# sourceMappingURL=58247_%40mux_mux-uploader-react_dist_index_mjs_99d71bb3._.js.map