(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,t,n){e.exports={itemWrap:"GrowlMessage_itemWrap__2U8ZN",itemInner:"GrowlMessage_itemInner__3LSWF",closeButton:"GrowlMessage_closeButton__1cmZZ",closeIcon:"GrowlMessage_closeIcon__1ebZV",link:"GrowlMessage_link__1tXeM",image:"GrowlMessage_image__2q7Gs",message:"GrowlMessage_message__1H02T",title:"GrowlMessage_title__1dJlC",details:"GrowlMessage_details__2FHDs",error:"GrowlMessage_error__8Guw0",info:"GrowlMessage_info__1DVBR",success:"GrowlMessage_success__3Yn9v",warn:"GrowlMessage_warn__2pLtF"}},,function(e,t,n){e.exports={checkbox:"NotifyMe_checkbox__u4E9I",formContainer:"NotifyMe_formContainer__36_rS",form:"NotifyMe_form__2fQ10",label:"NotifyMe_label__1JkDs",input:"NotifyMe_input__3115t",buttonLabel:"NotifyMe_buttonLabel__2twqR",button:"NotifyMe_button__2eWC6",spinner:"NotifyMe_spinner__3HwTW",logoSpin:"NotifyMe_logoSpin__3b758"}},,function(e,t,n){e.exports={wrap:"Countdown_wrap__39Btv",items:"Countdown_items__Oy0MM",time:"Countdown_time__2fTtT",timeOver:"Countdown_timeOver__2Y1Qn"}},function(e,t,n){e.exports={header:"Header_header__1t0M8",svg:"Header_svg__1bupo",themeBtn:"Header_themeBtn__23M9P",isHovered:"Header_isHovered__3EKBp",logoSpin:"Header_logoSpin__2QviI"}},function(e,t,n){e.exports={wrap:"Title_wrap__3lmvx",title:"Title_title__1jPs1",subtitleWrap:"Title_subtitleWrap__28dJx",subtitle:"Title_subtitle__2Oxhx"}},,function(e,t,n){e.exports={wrap:"SocialMedia_wrap__9noe9",btn:"SocialMedia_btn__1nl56"}},function(e,t,n){e.exports={component:"Growl_component__2rGyz",growl:"Growl_growl__2hRFr",topright:"Growl_topright__1sRJ7",topleft:"Growl_topleft__1HkpI",bottomleft:"Growl_bottomleft__2ljFo",bottomright:"Growl_bottomright__1VvqB"}},,function(e){e.exports=JSON.parse('{"icons":{"award":"fas fa-award","codepen":"fab fa-codepen","cross":"fas fa-times","error":"fas fa-exclamation-triangle","github":"fab fa-github","info":"fas fa-info-circle","instagram":"fab fa-instagram","linkedin":"fab fa-linkedin-in","send":"far fa-paper-plane","sends":"fas fa-paper-plane","spinner":"fas fa-circle-notch","success":"fas fa-check","warning":"fas fa-exclamation-triangle"}}')},function(e){e.exports=JSON.parse('{"STRING_LENGTH_MAX":22,"notificationSchema":[{"key":"success","lifeTime":5000,"fixed":false,"types":[{"key":"SEND_EMAIL_SUCCESS","lifeTime":5000,"fixed":false}]},{"key":"info","fixed":false,"types":[{"key":"SEND_EMAIL_INFO","fixed":false}]},{"key":"error","lifeTime":0,"fixed":false,"types":[{"key":"SEND_EMAIL_ERROR","lifeTime":5000,"fixed":false}]}]}')},,function(e,t,n){e.exports={main:"App_main__uN9ca"}},function(e,t,n){e.exports={app:"Layout_app__3iHya"}},function(e,t,n){e.exports={footer:"Footer_footer__1uSMu",link:"Footer_link__3b3o8"}},,function(e){e.exports=JSON.parse('{"networks":[{"name":"github","url":"https://github.com/arrastia"},{"name":"codepen","url":"https://codepen.io/arrastia"},{"name":"linkedin","url":"http://linkedin.com/in/pablo-arrastia-52802b175"},{"name":"instagram","url":"https://www.instagram.com/pablo.arrastia"}]}')},function(e){e.exports=JSON.parse('{"eh":{"codepen":"Codepen","days":"Egun","email":"e-mail","footer":"Eraikitzen","github":"GitHub","hours":"Ordu","instagram":"Instagram","linkedin":"Linkedin","minutes":"Minutu","notifyMe":"Notify me","react":"React","seconds":"Segundu","send":"Bidali","sendEmailError":"Error","sendEmailInfo":"Info","sendEmailSuccess":"Succes","subtitle":"Webgune berrian lan egiten","subtitleHidden":"Laister arte!","thanks":"Mila esker","timeOver":"Itxaron ezazu, oraindik bukatzen gabiltza","title":"Pablo Arrastia"}}')},function(e){e.exports=JSON.parse('{"en":{"codepen":"Codepen","days":"Days","email":"e-mail","footer":"Building with","github":"GitHub","hours":"Hours","instagram":"Instagram","linkedin":"Linkedin","minutes":"Minutes","notifyMe":"Notify me","react":"React","seconds":"Seconds","send":"Send","sendEmailError":"Sorry, something went wrong. Please, try again.","sendEmailInfo":"Stealing personal data...","sendEmailSuccess":"We\'ll write you soon!","subtitle":"Working on the new website","subtitleHidden":"See you soon!","thanks":"Thank you","timeOver":"Steel working on the new website","title":"Pablo Arrastia"}}')},function(e){e.exports=JSON.parse('{"es":{"codepen":"Codepen","days":"D\xedas","email":"e-mail","footer":"Construyendo con","github":"GitHub","hours":"Horas","instagram":"Instagram","linkedin":"Linkedin","minutes":"Minutos","notifyMe":"Notif\xedcame","react":"React","seconds":"Segundos","send":"Enviar","sendEmailError":"\xa1Ups! Algo sali\xf3 mal. Por favor, prueba de nuevo.","sendEmailInfo":"Accediendo a su base de datos...","sendEmailSuccess":"\xa1Te escribiremos pronto!","subtitle":"Trabajando en la nueva p\xe1gina web","subtitleHidden":"\xa1Nos vemos pronto!","thanks":"\xa1Gracias!","timeOver":"Todav\xeda seguimos trabajando en el proyecto","title":"Pablo Arrastia"}}')},,function(e,t,n){e.exports=n(35)},,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=(n(31),n(32),n(17)),s=n.n(c),l=n(1),u=n(7),f=n.n(u),m=Object(a.createContext)({language:{}}),d=Object(a.createContext)({}),p=function(){var e=new Date("2020/6/27")-new Date,t={};return e>0&&(t={days:("0"+Math.floor(e/864e5)).slice(-2),hours:("0"+Math.floor(e/36e5%24)).slice(-2),minutes:("0"+Math.floor(e/1e3/60%60)).slice(-2),seconds:("0"+Math.floor(e/1e3%60)).slice(-2)}),t},b=function(){var e=Object(a.useContext)(m),t=Object(a.useContext)(d),n=Object(a.useState)(p()),o=Object(l.a)(n,2),i=o[0],c=o[1];Object(a.useEffect)((function(){setTimeout((function(){c(p())}),1e3)}));var s=[];return Object.keys(i).forEach((function(n){i[n]&&s.push(r.a.createElement("li",{className:f.a.items,key:n},r.a.createElement("span",{id:n,className:f.a.time},i[n]),e[t.selected][n]))})),r.a.createElement(a.Fragment,null,s.length?r.a.createElement("ul",{className:f.a.wrap},s):r.a.createElement("span",{className:f.a.timeOver},e[t.selected].timeOver))},_=n(18),h=n.n(_),v=n(19),E=n.n(v),g=function(){Object(a.useContext)(m),Object(a.useContext)(d);return r.a.createElement("footer",{className:E.a.footer})},y=n(8),O=n.n(y),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(a.useState)(0),r=Object(l.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){var n,a,r,o=function(){i(Date.now()-r),c()},c=function(){n=requestAnimationFrame(o)},s=setTimeout((function(){a=setTimeout((function(){cancelAnimationFrame(n),i(Date.now()-r)}),e),r=Date.now(),c()}),t);return function(){clearTimeout(a),clearTimeout(s),cancelAnimationFrame(n)}}),[e,t]),o},j={cubic:function(e){return e*(4*e*e-9*e+6)},elastic:function(e){return e*(33*e*e*e*e-106*e*e*e+126*e*e-67*e+15)},inCubic:function(e){return e*e*e},inExpo:function(e){return Math.pow(2,10*(e-1))},inOutCirc:function(e){return(e/=.5)<1?-(Math.sqrt(1-e*e)-1)/2:(e-=2,(Math.sqrt(1-e*e)+1)/2)},inOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},inOutExpo:function(e){return(e/=.5)<1?Math.pow(2,10*(e-1))/2:(e--,(2-Math.pow(2,-10*e))/2)},inCirc:function(e){return 1-Math.sqrt(1-e*e)},inOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},inOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},inOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},inOutSine:function(e){return-(Math.cos(Math.PI*e)-1)/2},inQuad:function(e){return e*e},inQuart:function(e){return e*e*e*e},inQuint:function(e){return e*e*e*e*e},inSine:function(e){return 1-Math.cos(e*(Math.PI/2))},linear:function(e){return e},outCirc:function(e){return Math.sqrt(1-(e-=1)*e)},outCubic:function(e){return--e*e*e+1},outExpo:function(e){return 1-Math.pow(2,-10*e)},outQuad:function(e){return e*(2-e)},outQuart:function(e){return 1- --e*e*e*e},outQuint:function(e){return 1+--e*e*e*e*e},outSine:function(e){return Math.sin(e*(Math.PI/2))},quadratic:function(e){return e*(-e*e*e+4*e*e-6*e+4)}},S=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(l.a)(n,2),o=r[0],i=r[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},k=function(){var e=S("dark-mode"),t=Object(l.a)(e,2),n=t[0],r=t[1],o=function(e,t,n){var r=e.map((function(e){return window.matchMedia(e)})),o=Object(a.useCallback)((function(){var e=r.findIndex((function(e){return e.matches}));return"undefined"!==typeof t[e]?t[e]:n}),[n,r,t]),i=Object(a.useState)(o),c=Object(l.a)(i,2),s=c[0],u=c[1];return Object(a.useEffect)((function(){var e=function(){return u(o)};return r.forEach((function(t){return t.addListener(e)})),function(){return r.forEach((function(t){return t.removeListener(e)}))}}),[o,r]),s}(["(prefers-color-scheme: dark)"],[!0],!1),i="undefined"!==typeof n?n:o;return Object(a.useEffect)((function(){var e=window.document.body;i?e.classList.add("dark-mode"):e.classList.remove("dark-mode")}),[i]),[i,r]},M=function(){var e=Object(a.useState)("#61DAFB"),t=Object(l.a)(e,2),n=t[0],o=t[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"linear",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=w(t,n),r=Math.min(1,a/t);return j[e](r)}("elastic",1e3,0),c=k(),s=Object(l.a)(c,2),u=s[0],f=s[1],m=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useRef)(null),i=function(){return r(!1)},c=function(){return r(!0)};return Object(a.useEffect)((function(){var e=o.current;if(e)return e.addEventListener("mouseover",c),e.addEventListener("mouseout",i),function(){e.removeEventListener("mouseover",c),e.removeEventListener("mouseout",i)}}),[]),[o,n]}(),d=Object(l.a)(m,2),p=d[0],b=d[1];!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){o("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),2e3),getComputedStyle(document.documentElement).getPropertyValue("--random-color"),document.documentElement.style.setProperty("--random-color",n);return r.a.createElement("header",{className:O.a.header},r.a.createElement("div",{className:b?O.a.isHovered:void 0,style:{marginTop:100*i-100}},r.a.createElement("svg",{className:O.a.svg,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",style:{borderColor:n,transition:"all 2s ease"}},r.a.createElement("g",{style:{fill:n,transition:"fill 2s ease"}},r.a.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),r.a.createElement("circle",{cx:"420.9",cy:"296.5",r:"45.7"}),r.a.createElement("path",{d:"M520.5 78.1z"})))),r.a.createElement("button",{className:O.a.themeBtn,onClick:function(){return f(!u)},ref:p,style:{marginTop:100*i-100}}))},N=function(e){var t=e.children;return r.a.createElement("div",{className:h.a.app},r.a.createElement(M,null),t,r.a.createElement(g,null))},x=n(2),C=n(20),I=n.n(C),T=n(5),L=n.n(T),R=n(14),A=Object(a.createContext)({}),G=function(){var e,t,n=Object(x.a)({},R),o=Object(a.useContext)(m),i=Object(a.useContext)(A),c=Object(a.useContext)(d),s=Object(a.useState)(),u=Object(l.a)(s,2),f=u[0],p=u[1],b=Object(a.useState)(!1),_=Object(l.a)(b,2),h=_[0],v=_[1],E=Object(a.useRef)(null),g=Object(a.useRef)(null),y=Object(a.useRef)(null),O=S("is-notified",!1),w=Object(l.a)(O,2),j=w[0],k=w[1];e=g,t=function(){return M()},Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t]);var M=function(){return E.current.checked=!1},N=function(e){if(y.current.checkValidity()){v(!0),i.add({type:"SEND_EMAIL_INFO"}),e.preventDefault();var t={from_name:"arrastia1996@gmail.com",to_name:"Arrastia",subject:"".concat(f,"'s notification"),message_html:f};I.a.send("gmail","template_yg7YSVyl",t,"user_XU4Y38mEGpTRJE2F2U9V1").then((function(e){e.status>=200&&e.status<=299&&(k(!0),i.add({type:"SEND_EMAIL_SUCCESS"}))}),(function(e){console.log("error",e),i.add({type:"SEND_EMAIL_ERROR"})})).finally((function(){M(),v(!1)}))}};return r.a.createElement(a.Fragment,null,r.a.createElement("input",{id:"checkbox",className:L.a.checkbox,ref:E,type:"checkbox"}),r.a.createElement("div",{className:L.a.formContainer},r.a.createElement("form",{action:"",className:L.a.form,onKeyDown:function(e){return"Enter"===e.key&&N(e)},ref:g},r.a.createElement("input",{className:L.a.input,pattern:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$",placeholder:o[c.selected].email,ref:y,onChange:function(e){return p(e.target.value)},required:!0,style:{visibility:j&&"hidden"}}),r.a.createElement("label",{className:L.a.buttonLabel,htmlFor:"checkbox",onClick:function(e){return!h&&N(e)},style:{visibility:j&&"hidden"}},r.a.createElement("button",{className:L.a.button,type:"button"},h?r.a.createElement("i",{className:"".concat(n.icons.spinner," ").concat(L.a.spinner)}):o[c.selected].send)),r.a.createElement("label",{className:L.a.label,"data-title":j?o[c.selected].thanks:o[c.selected].notifyMe,htmlFor:"checkbox",onClick:function(){return y.current.focus()},style:{pointerEvents:j?"none":"all"}}))))},D=n(11),H=n.n(D),z=n(21),B=function(){var e=Object(x.a)({},R);return r.a.createElement("div",{className:H.a.wrap},z.networks.map((function(t,n){return r.a.createElement("a",{className:"".concat(H.a.btn," ").concat(H.a[t.name]),href:t.url,key:n,rel:"noopener noreferrer",target:"_blank",title:t.name},r.a.createElement("i",{className:e.icons[t.name]}))})))},F=n(9),P=n.n(F),W=function(){var e=Object(a.useContext)(m),t=Object(a.useContext)(d);return r.a.createElement("div",{className:P.a.wrap},r.a.createElement("h1",{className:P.a.title},e[t.selected].title),r.a.createElement("div",{className:P.a.subtitleWrap,"data-hover":e[t.selected].subtitleHidden},r.a.createElement("h2",{className:P.a.subtitle},e[t.selected].subtitle)))},J=n(4),Q=n(12),U=n.n(Q),V=n(3),q=n.n(V),Z=function(e,t){if(e)return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},Y=Object(a.forwardRef)((function(e,t){var n,o=e.message,i=e.onClickEvent,c=e.onCloseEvent,s=Object(x.a)({},R);Object(a.useEffect)((function(){return o.sticky||(n=setTimeout((function(){l()}),o.life||700)),function(){n&&clearTimeout(n)}}),[]);var l=function(){n&&clearTimeout(n),c&&c(o)};return r.a.createElement("div",{"aria-live":"polite",className:"".concat(q.a.itemWrap," p-highlight ").concat(q.a[o.severity]),onClick:function(){var e;!i||Z(e.target,q.a.closeButton)||Z(e.target,q.a.closeIcon)||i(o)},ref:t},r.a.createElement("div",{"aria-atomic":"true","aria-live":"assertive",className:q.a.itemInner,role:"alert"},function(){if(o.closable)return r.a.createElement("button",{type:"button",className:"".concat(q.a.closeButton," ").concat(q.a.link),onClick:function(){return l()}},r.a.createElement("span",{className:"".concat(q.a.closeIcon," ").concat(s.icons.cross)}))}(),r.a.createElement("span",{className:"".concat(q.a.image," ").concat(s.icons[o.severity])}),r.a.createElement("div",{className:q.a.message},r.a.createElement("span",{className:q.a.title},o.severity.toUpperCase()),o.detail&&r.a.createElement("div",{className:q.a.details},o.detail))))})),X=function(){var e;return++e},$=Object(a.forwardRef)((function(e,t){var n=e.baseZIndex,o=e.className,i=e.id,c=e.onClick,s=e.onRemove,u=e.position,f=e.style,m=Object(a.useState)([]),d=Object(l.a)(m,2),p=d[0],b=d[1],_=0,h=function(e){var t=p.filter((function(t){return t.id!==e.id}));b(t),s&&s(e)};return null!==t.current&&(t.current.onShow=function(e){if(e){var a;if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r].id=_++,a=[].concat(Object(J.a)(p),Object(J.a)(e));else e.id=_++,a=p?[].concat(Object(J.a)(p),[e]):[e];b(a),t.current.style.zIndex=String(n+X())}},t.current.onClear=function(){return b([])}),r.a.createElement("div",{className:"".concat(o||void 0," ").concat(U.a.growl," ").concat(U.a.component," ").concat(u?U.a[u.toLowerCase()]:void 0),id:i,ref:t,style:f},p.map((function(e,t){return r.a.createElement(Y,{key:t,message:e,onClickEvent:c,onCloseEvent:h})})))})),K=function(e){return e.split("_").map((function(e,t){return 0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join("")},ee=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},te=function(){var e=Object(a.useContext)(m),t=Object(a.useContext)(A),n=Object(a.useContext)(d),o=Object(a.useRef)(null);return Object(a.useEffect)((function(){t.toShow.map((function(t){var a=r.a.createElement("div",null,t.message);return o.current.onShow({severity:t.type,summary:e[n.selected]["notification".concat(ee(t.type),"Title")],detail:a,life:t.lifeTime,sticky:t.fixed})})),t.toShow.length>0&&t.clearToShow()}),[e,t,t.toShow,n.selected]),r.a.createElement($,{ref:o,position:"topRight"})},ne=n(22),ae=n(23),re=n(24),oe=Object(x.a)({},ne,{},ae,{},re),ie=function(e){var t=e.children;return r.a.createElement(m.Provider,{value:Object(x.a)({},oe)},t)},ce=n(15),se=function(e,t){var n=t.type,a=t.payload;switch(n){case"ADD":case"READ":return Object(x.a)({},e,{toShow:[].concat(Object(J.a)(e.toShow),[a]),all:[].concat(Object(J.a)(e.all),[a])});case"REMOVE":return{toShow:[].concat(Object(J.a)(e.toShow),[a]),all:[].concat(Object(J.a)(e.all),[a])};case"CLEAR_TO_SHOW":return Object(x.a)({},e,{toShow:[]});case"DESTROY":return Object(x.a)({},e,{toShow:[],all:[]});default:return e}},le=n(25),ue=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.downloadLink,a=t.fixed,r=t.id,o=t.key,i=t.lifeTime,c=t.message,s=t.read,l=t.redirectionUrl,u=t.type;Object(le.a)(this,e),this.downloadLink=n,this.fixed=a,this.id=r,this.key=o,this.lifeTime=i,this.message=c,this.read=s,this.redirectionUrl=l,this.type=u},fe=function(e){var t=e.type,n=e.content,a=void 0===n?{}:n,r=e.message,o=e.config,i={};return o.forEach((function(e){var n=e.types.find((function(e){return e.key===t}));if(n){var o=e.key,c=e.fixed,s=e.lifeTime,l=n.fixed,u=n.lifeTime;i.message=r,i.type=o,i.fixed=l?c:l,i.lifeTime=u||s,i.key=t,i.message=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;return Object.keys(t).forEach((function(e){n=t[e]?n.replace("{:".concat(e,"}"),t[e]):n.replace("{:".concat(e,"}"),"")})),n}(i.message,a)}})),new ue(i)},me=function(e){var t=e.children,n=Object(a.useContext)(m),o=Object(a.useContext)(d),i=Object(a.useReducer)(se,{toShow:[],all:[]}),c=Object(l.a)(i,2),s=c[0],u=c[1];return r.a.createElement(A.Provider,{value:Object(x.a)({},s,{add:function(e){var t=e.type,a=e.content,r=fe({type:t,content:a,message:n[o.selected][K(t)],config:ce.notificationSchema});u({type:"ADD",payload:r})},read:function(e){u({type:"READ",payload:{notificationId:e}})},removeById:function(e){u({type:"REMOVE",payload:{notificationId:e}})},clearToShow:function(){u({type:"CLEAR_TO_SHOW",payload:{}})},deleteAll:function(){u({type:"DESTROY"})}})},t)},de=function(e,t){var n=t.type,a=t.payload;switch(n){case"BASQUE":case"ENGLISH":case"SPANISH":return a;default:return e}},pe=function(e){var t=e.children,n=Object(a.useReducer)(de,"en"),o=Object(l.a)(n,2),i=o[0],c=o[1];return r.a.createElement(d.Provider,{value:{selected:i,onChangeLang:function(e){var t=e.type,n=e.newLang;c({type:t,payload:n})}}},t)},be=function(){var e;return e=r.a.createElement("main",{className:s.a.main},r.a.createElement(W,null),r.a.createElement(b,null),r.a.createElement(G,null),r.a.createElement(B,null)),r.a.createElement(ie,null,r.a.createElement(pe,null,r.a.createElement(me,null,r.a.createElement(te,null),r.a.createElement(N,null,e))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[26,1,2]]]);
//# sourceMappingURL=main.54947a78.chunk.js.map