(self.webpackChunkLanka_Games=self.webpackChunkLanka_Games||[]).push([[8592],{8225:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var i=n(3150),r=n(2954),o=n(9461);const s=(e,t)=>{let n,s;const c=(e,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(e,i);o&&t(o)?o!==n&&(a(),l(o,r)):a()},l=(e,t)=>{n=e,s||(s=n);const r=n;(0,i.c)(()=>r.classList.add("ion-activated")),t()},a=(e=!1)=>{if(!n)return;const t=n;(0,i.c)(()=>t.classList.remove("ion-activated")),e&&s!==n&&n.click(),n=void 0};return(0,o.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>c(e.currentX,e.currentY,r.a),onMove:e=>c(e.currentX,e.currentY,r.b),onEnd:()=>{a(!0),(0,r.h)(),s=void 0}})}},7330:(e,t,n)=>{"use strict";n.d(t,{a:()=>r,d:()=>o});var i=n(2377);const r=async(e,t,n,r,o)=>{if(e)return e.attachViewToDom(t,n,o,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return r&&r.forEach(e=>s.classList.add(e)),o&&Object.assign(s,o),t.appendChild(s),await new Promise(e=>(0,i.c)(s,e)),s},o=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},2954:(e,t,n)=>{"use strict";n.d(t,{a:()=>o,b:()=>s,c:()=>r,d:()=>l,h:()=>c});const i={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},l=e=>{i.impact(e)}},6575:(e,t,n)=>{"use strict";n.d(t,{s:()=>i});const i=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!s()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,l.forEach(e=>{const n=t.querySelectorAll(e);for(let i=n.length-1;i>=0;i--){const e=n[i];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const s=o(e);for(let t=0;t<s.length;t++)r(s[t])}});const i=o(t);for(let e=0;e<i.length;e++)r(i[e]);const c=document.createElement("div");c.appendChild(t);const a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},r=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),i=t.name;if(!c.includes(i.toLowerCase())){e.removeAttribute(i);continue}const r=t.value;null!=r&&r.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const t=o(e);for(let n=0;n<t.length;n++)r(t[n])},o=e=>null!=e.children?e.children:e.childNodes,s=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},c=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]},408:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const i=e*t/n-e+"ms",r=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const i=t/n,r=e*i-e+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},1269:(e,t,n)=>{"use strict";n.d(t,{c:()=>r,g:()=>o,h:()=>i,o:()=>c});const i=(e,t)=>null!==t.closest(e),r=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,o=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,c=async(e,t,n,i)=>{if(null!=e&&"#"!==e[0]&&!s.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n,i)}return!1}},522:(e,t,n)=>{"use strict";n.d(t,{Q:()=>c});var i=n(4762),r=n(8720),o=n(7823);const s=["slides"];let c=(()=>{class e{constructor(e){this.modalController=e}ngOnInit(){}ionViewDidEnter(){this.slider.lockSwipes(!0)}ionViewWillLeave(){this.closeImage()}closeImage(){return(0,i.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(o.IN))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-view-image"]],viewQuery:function(e,t){if(1&e&&r.Gf(s,5),2&e){let e;r.iGM(e=r.CRH())&&(t.slider=e.first)}},inputs:{url:"url"},decls:8,vars:1,consts:[[2,"--background","black"],[1,"close-wrapper"],["name","close","size","large",3,"click"],[2,"height","-webkit-fill-available"],["slides",""],[3,"src"]],template:function(e,t){1&e&&(r._UZ(0,"ion-header"),r.TgZ(1,"ion-content",0),r.TgZ(2,"div",1),r.TgZ(3,"ion-icon",2),r.NdJ("click",function(){return t.closeImage()}),r.qZA(),r.qZA(),r.TgZ(4,"ion-slides",3,4),r.TgZ(6,"ion-slide"),r._UZ(7,"img",5),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(7),r.Q6J("src",t.url,r.LSH))},directives:[o.Gu,o.W2,o.gu,o.Hr,o.A$],styles:[".close-wrapper[_ngcontent-%COMP%]{color:#fff;position:absolute;text-align:end;width:100%;padding:10px;z-index:2002}"]}),e})()},5798:(e,t,n)=>{"use strict";n.d(t,{q:()=>s});var i=n(4762),r=n(8720),o=n(7823);let s=(()=>{class e{constructor(e){this.modalController=e}ngOnInit(){}ionViewWillLeave(){this.closeImage()}closeImage(){return(0,i.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(o.IN))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-view-video"]],inputs:{url:"url",thumbnail:"thumbnail"},decls:6,vars:2,consts:[[1,"close-wrapper"],["name","close","size","large",3,"click"],["playinline","","preload","auto","controls","","controlsList","nodownload",1,"video-container",3,"poster"],["type","video/mp4",3,"src"]],template:function(e,t){1&e&&(r._UZ(0,"ion-header"),r.TgZ(1,"ion-content"),r.TgZ(2,"div",0),r.TgZ(3,"ion-icon",1),r.NdJ("click",function(){return t.closeImage()}),r.qZA(),r.qZA(),r.TgZ(4,"video",2),r._UZ(5,"source",3),r.qZA(),r.qZA()),2&e&&(r.xp6(4),r.s9C("poster",t.thumbnail,r.LSH),r.xp6(1),r.Q6J("src",t.url,r.LSH))},directives:[o.Gu,o.W2,o.gu],styles:[".close-wrapper[_ngcontent-%COMP%]{color:#fff;position:absolute;text-align:end;width:100%;padding:10px;z-index:2002}.video-container[_ngcontent-%COMP%]{height:-webkit-fill-available;width:100%;background:#000}"]}),e})()},4762:(e,t,n)=>{"use strict";function i(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{l(i.next(e))}catch(t){o(t)}}function c(e){try{l(i.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,c)}l((i=i.apply(e,t||[])).next())})}n.d(t,{mG:()=>i})}}]);