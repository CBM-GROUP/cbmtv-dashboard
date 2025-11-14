module.exports=[56690,a=>{"use strict";a.s(["CustomVideoElement",()=>h,"Events",()=>b]);let b=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],c=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function d(a){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${g(a)}></audio>
    </slot>
    <slot></slot>
  `}function e(a){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${g(a)}></video>
    </slot>
    <slot></slot>
  `}function f(a,{tag:f,is:g}){let h=globalThis.document?.createElement?.(f,{is:g}),i=h?function(a){let b=[];for(let c=Object.getPrototypeOf(a);c&&c!==HTMLElement.prototype;c=Object.getPrototypeOf(c)){let a=Object.getOwnPropertyNames(c);b.push(...a)}return b}(h):[];return class j extends a{static getTemplateHTML=f.endsWith("audio")?d:e;static shadowRootOptions={mode:"open"};static Events=b;static #a=!1;static get observedAttributes(){return j.#b(),[...h?.constructor?.observedAttributes??[],...c]}static #b(){if(this.#a)return;this.#a=!0;let a=new Set(this.observedAttributes);for(let b of(a.delete("muted"),i))if(!(b in this.prototype))if("function"==typeof h[b])this.prototype[b]=function(...a){return this.#c(),(()=>{if(this.call)return this.call(b,...a);let c=this.nativeEl?.[b];return c?.apply(this.nativeEl,a)})()};else{let c={get(){this.#c();let c=b.toLowerCase();if(a.has(c)){let a=this.getAttribute(c);return null!==a&&(""===a||a)}return this.get?.(b)??this.nativeEl?.[b]}};b!==b.toUpperCase()&&(c.set=function(c){this.#c();let d=b.toLowerCase();return a.has(d)?void(!0===c||!1===c||null==c?this.toggleAttribute(d,!!c):this.setAttribute(d,c)):this.set?void this.set(b,c):void(this.nativeEl&&(this.nativeEl[b]=c))}),Object.defineProperty(this.prototype,b,c)}}#d=!1;#e=null;#f=new Map;#g;get;set;call;get nativeEl(){return this.#c(),this.#e??this.querySelector(":scope > [slot=media]")??this.querySelector(f)??this.shadowRoot?.querySelector(f)??null}set nativeEl(a){this.#e=a}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(a){this.toggleAttribute("muted",a)}get src(){return this.getAttribute("src")}set src(a){this.setAttribute("src",`${a}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(a){this.setAttribute("preload",`${a}`)}#c(){this.#d||(this.#d=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let a=function(a){let b={};for(let c of a)b[c.name]=c.value;return b}(this.attributes);g&&(a.is=g),f&&(a.part=f),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}for(let a of(this.nativeEl.muted=this.hasAttribute("muted"),i))this.#h(a);for(let a of(this.#g=new MutationObserver(this.#i.bind(this)),this.shadowRoot.addEventListener("slotchange",()=>this.#j()),this.#j(),this.constructor.Events))this.shadowRoot.addEventListener(a,this,!0)}handleEvent(a){a.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(a.type,{detail:a.detail}))}#j(){let a=new Map(this.#f),b=this.shadowRoot?.querySelector("slot:not([name])");(b?.assignedElements({flatten:!0}).filter(a=>["track","source"].includes(a.localName))).forEach(b=>{a.delete(b);let c=this.#f.get(b);c||(c=b.cloneNode(),this.#f.set(b,c),this.#g?.observe(b,{attributes:!0})),this.nativeEl?.append(c),this.#k(c)}),a.forEach((a,b)=>{a.remove(),this.#f.delete(b)})}#i(a){for(let b of a)if("attributes"===b.type){let{target:a,attributeName:c}=b,d=this.#f.get(a);d&&c&&(d.setAttribute(c,a.getAttribute(c)??""),this.#k(d))}}#k(a){a&&"track"===a.localName&&a.default&&("chapters"===a.kind||"metadata"===a.kind)&&"disabled"===a.track.mode&&(a.track.mode="hidden")}#h(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}}attributeChangedCallback(a,b,c){this.#c(),this.#l(a,b,c)}#l(a,b,c){!["id","class"].includes(a)&&(!j.observedAttributes.includes(a)&&this.constructor.observedAttributes.includes(a)||(null===c?this.nativeEl?.removeAttribute(a):this.nativeEl?.getAttribute(a)!==c&&this.nativeEl?.setAttribute(a,c)))}connectedCallback(){this.#c()}}}function g(a){let b="";for(let d in a){if(!c.includes(d))continue;let e=a[d];""===e?b+=` ${d}`:b+=` ${d}="${e}"`}return b}let h=f(globalThis.HTMLElement??class{},{tag:"video"});f(globalThis.HTMLElement??class{},{tag:"audio"})}];

//# sourceMappingURL=626af_custom-media-element_dist_custom-media-element_6d7ed882.js.map