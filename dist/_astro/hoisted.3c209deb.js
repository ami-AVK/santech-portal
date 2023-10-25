import"./hoisted.e8947ff2.js";import"./hoisted.bd7fdfe4.js";document.addEventListener("astro:page-load",()=>{const e={root:null,rootMargin:"0px",threshold:.2};new IntersectionObserver(function(r,t){r.forEach(function(n){if(n.isIntersecting){n.target.classList.add("opacity-100"),n.target.classList.remove("opacity-0");const a=n.target.querySelector("#ew3a956DATx1");a&&a.classList.add("svg-active")}else{n.target.classList.add("opacity-0"),n.target.classList.remove("opacity-100");const a=n.target.querySelector("#ew3a956DATx1");a&&a.classList.remove("svg-active")}})},e),document.querySelectorAll(".observe")});function Kt(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function zr(e,r,t){return r&&Kt(e.prototype,r),t&&Kt(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var qt="(prefers-reduced-motion: reduce)",De=1,Ur=2,Ce=3,Me=4,qe=5,it=6,st=7,Wr={CREATED:De,MOUNTED:Ur,IDLE:Ce,MOVING:Me,SCROLLING:qe,DRAGGING:it,DESTROYED:st};function de(e){e.length=0}function _e(e,r,t){return Array.prototype.slice.call(e,r,t)}function U(e){return e.bind.apply(e,[null].concat(_e(arguments,1)))}var sr=setTimeout,Rt=function(){};function $t(e){return requestAnimationFrame(e)}function lt(e,r){return typeof r===e}function ze(e){return!Pt(e)&&lt("object",e)}var Ct=Array.isArray,cr=U(lt,"function"),he=U(lt,"string"),$e=U(lt,"undefined");function Pt(e){return e===null}function fr(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function je(e){return Ct(e)?e:[e]}function re(e,r){je(e).forEach(r)}function Mt(e,r){return e.indexOf(r)>-1}function at(e,r){return e.push.apply(e,je(r)),e}function fe(e,r,t){e&&re(r,function(n){n&&e.classList[t?"add":"remove"](n)})}function oe(e,r){fe(e,he(r)?r.split(" "):r,!0)}function Ze(e,r){re(r,e.appendChild.bind(e))}function Vt(e,r){re(e,function(t){var n=(r||t).parentNode;n&&n.insertBefore(t,r)})}function Ue(e,r){return fr(e)&&(e.msMatchesSelector||e.matches).call(e,r)}function vr(e,r){var t=e?_e(e.children):[];return r?t.filter(function(n){return Ue(n,r)}):t}function Je(e,r){return r?vr(e,r)[0]:e.firstElementChild}var We=Object.keys;function Le(e,r,t){return e&&(t?We(e).reverse():We(e)).forEach(function(n){n!=="__proto__"&&r(e[n],n)}),e}function Be(e){return _e(arguments,1).forEach(function(r){Le(r,function(t,n){e[n]=r[n]})}),e}function Ee(e){return _e(arguments,1).forEach(function(r){Le(r,function(t,n){Ct(t)?e[n]=t.slice():ze(t)?e[n]=Ee({},ze(e[n])?e[n]:{},t):e[n]=t})}),e}function jt(e,r){re(r||We(e),function(t){delete e[t]})}function ue(e,r){re(e,function(t){re(r,function(n){t&&t.removeAttribute(n)})})}function x(e,r,t){ze(r)?Le(r,function(n,a){x(e,a,n)}):re(e,function(n){Pt(t)||t===""?ue(n,r):n.setAttribute(r,String(t))})}function pe(e,r,t){var n=document.createElement(e);return r&&(he(r)?oe(n,r):x(n,r)),t&&Ze(t,n),n}function ne(e,r,t){if($e(t))return getComputedStyle(e)[r];Pt(t)||(e.style[r]=""+t)}function He(e,r){ne(e,"display",r)}function lr(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ie(e,r){return e.getAttribute(r)}function Zt(e,r){return e&&e.classList.contains(r)}function ee(e){return e.getBoundingClientRect()}function Ie(e){re(e,function(r){r&&r.parentNode&&r.parentNode.removeChild(r)})}function dr(e){return Je(new DOMParser().parseFromString(e,"text/html").body)}function ce(e,r){e.preventDefault(),r&&(e.stopPropagation(),e.stopImmediatePropagation())}function gr(e,r){return e&&e.querySelector(r)}function xt(e,r){return r?_e(e.querySelectorAll(r)):[]}function ve(e,r){fe(e,r,!1)}function bt(e){return e.timeStamp}function Te(e){return he(e)?e:e?e+"px":""}var Qe="splide",Ft="data-"+Qe;function ke(e,r){if(!e)throw new Error("["+Qe+"] "+(r||""))}var me=Math.min,ct=Math.max,ft=Math.floor,Ye=Math.ceil,J=Math.abs;function Er(e,r,t){return J(e-r)<t}function ot(e,r,t,n){var a=me(r,t),l=ct(r,t);return n?a<e&&e<l:a<=e&&e<=l}function be(e,r,t){var n=me(r,t),a=ct(r,t);return me(ct(n,e),a)}function Ot(e){return+(e>0)-+(e<0)}function Dt(e,r){return re(r,function(t){e=e.replace("%s",""+t)}),e}function kt(e){return e<10?"0"+e:""+e}var Jt={};function Br(e){return""+e+kt(Jt[e]=(Jt[e]||0)+1)}function hr(){var e=[];function r(i,s,c,v){a(i,s,function(o,m,d){var g="addEventListener"in o,u=g?o.removeEventListener.bind(o,m,c,v):o.removeListener.bind(o,c);g?o.addEventListener(m,c,v):o.addListener(c),e.push([o,m,d,c,u])})}function t(i,s,c){a(i,s,function(v,o,m){e=e.filter(function(d){return d[0]===v&&d[1]===o&&d[2]===m&&(!c||d[3]===c)?(d[4](),!1):!0})})}function n(i,s,c){var v,o=!0;return typeof CustomEvent=="function"?v=new CustomEvent(s,{bubbles:o,detail:c}):(v=document.createEvent("CustomEvent"),v.initCustomEvent(s,o,!1,c)),i.dispatchEvent(v),v}function a(i,s,c){re(i,function(v){v&&re(s,function(o){o.split(" ").forEach(function(m){var d=m.split(".");c(v,d[0],d[1])})})})}function l(){e.forEach(function(i){i[4]()}),de(e)}return{bind:r,unbind:t,dispatch:n,destroy:l}}var Re="mounted",Qt="ready",Ae="move",et="moved",mr="click",Hr="active",Yr="inactive",Xr="visible",Kr="hidden",K="refresh",Q="updated",Xe="resize",Gt="resized",qr="drag",$r="dragging",jr="dragged",zt="scroll",Ve="scrolled",Zr="overflow",Ar="destroy",Jr="arrows:mounted",Qr="arrows:updated",en="pagination:mounted",tn="pagination:updated",_r="navigation:mounted",yr="autoplay:play",rn="autoplay:playing",Sr="autoplay:pause",Tr="lazyload:loaded",Lr="sk",Ir="sh",vt="ei";function H(e){var r=e?e.event.bus:document.createDocumentFragment(),t=hr();function n(l,i){t.bind(r,je(l).join(" "),function(s){i.apply(i,Ct(s.detail)?s.detail:[])})}function a(l){t.dispatch(r,l,_e(arguments,1))}return e&&e.event.on(Ar,t.destroy),Be(t,{bus:r,on:n,off:U(t.unbind,r),emit:a})}function dt(e,r,t,n){var a=Date.now,l,i=0,s,c=!0,v=0;function o(){if(!c){if(i=e?me((a()-l)/e,1):1,t&&t(i),i>=1&&(r(),l=a(),n&&++v>=n))return d();s=$t(o)}}function m(A){A||u(),l=a()-(A?i*e:0),c=!1,s=$t(o)}function d(){c=!0}function g(){l=a(),i=0,t&&t(i)}function u(){s&&cancelAnimationFrame(s),i=0,s=0,c=!0}function f(A){e=A}function _(){return c}return{start:m,rewind:g,pause:d,cancel:u,set:f,isPaused:_}}function nn(e){var r=e;function t(a){r=a}function n(a){return Mt(je(a),r)}return{set:t,is:n}}function an(e,r){var t=dt(r||0,e,null,1);return function(){t.isPaused()&&t.start()}}function on(e,r,t){var n=e.state,a=t.breakpoints||{},l=t.reducedMotion||{},i=hr(),s=[];function c(){var u=t.mediaQuery==="min";We(a).sort(function(f,_){return u?+f-+_:+_-+f}).forEach(function(f){o(a[f],"("+(u?"min":"max")+"-width:"+f+"px)")}),o(l,qt),m()}function v(u){u&&i.destroy()}function o(u,f){var _=matchMedia(f);i.bind(_,"change",m),s.push([u,_])}function m(){var u=n.is(st),f=t.direction,_=s.reduce(function(A,h){return Ee(A,h[1].matches?h[0]:{})},{});jt(t),g(_),t.destroy?e.destroy(t.destroy==="completely"):u?(v(!0),e.mount()):f!==t.direction&&e.refresh()}function d(u){matchMedia(qt).matches&&(u?Ee(t,l):jt(t,We(l)))}function g(u,f,_){Ee(t,u),f&&Ee(Object.getPrototypeOf(t),u),(_||!n.is(De))&&e.emit(Q,t)}return{setup:c,destroy:v,reduce:d,set:g}}var gt="Arrow",Et=gt+"Left",ht=gt+"Right",Nr=gt+"Up",Rr=gt+"Down",er="rtl",mt="ttb",Tt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Nr,ht],ArrowRight:[Rr,Et]};function un(e,r,t){function n(l,i,s){s=s||t.direction;var c=s===er&&!i?1:s===mt?0:-1;return Tt[l]&&Tt[l][c]||l.replace(/width|left|right/i,function(v,o){var m=Tt[v.toLowerCase()][c]||v;return o>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function a(l){return l*(t.direction===er?1:-1)}return{resolve:n,orient:a}}var le="role",we="tabindex",sn="disabled",ae="aria-",tt=ae+"controls",br=ae+"current",tr=ae+"selected",te=ae+"label",Ut=ae+"labelledby",Or=ae+"hidden",Wt=ae+"orientation",Ke=ae+"roledescription",rr=ae+"live",nr=ae+"busy",ir=ae+"atomic",Bt=[le,we,sn,tt,br,te,Ut,Or,Wt,Ke],se=Qe+"__",ye="is-",Lt=Qe,ar=se+"track",cn=se+"list",At=se+"slide",Dr=At+"--clone",fn=At+"__container",Ht=se+"arrows",_t=se+"arrow",pr=_t+"--prev",wr=_t+"--next",yt=se+"pagination",Cr=yt+"__page",vn=se+"progress",ln=vn+"__bar",dn=se+"toggle",gn=se+"spinner",En=se+"sr",hn=ye+"initialized",Ne=ye+"active",Pr=ye+"prev",Mr=ye+"next",pt=ye+"visible",wt=ye+"loading",Vr=ye+"focus-in",xr=ye+"overflow",mn=[Ne,pt,Pr,Mr,wt,Vr,xr],An={slide:At,clone:Dr,arrows:Ht,arrow:_t,prev:pr,next:wr,pagination:yt,page:Cr,spinner:gn};function _n(e,r){if(cr(e.closest))return e.closest(r);for(var t=e;t&&t.nodeType===1&&!Ue(t,r);)t=t.parentElement;return t}var yn=5,or=200,Fr="touchstart mousedown",It="touchmove mousemove",Nt="touchend touchcancel mouseup click";function Sn(e,r,t){var n=H(e),a=n.on,l=n.bind,i=e.root,s=t.i18n,c={},v=[],o=[],m=[],d,g,u;function f(){E(),C(),h()}function _(){a(K,A),a(K,f),a(Q,h),l(document,Fr+" keydown",function(S){u=S.type==="keydown"},{capture:!0}),l(i,"focusin",function(){fe(i,Vr,!!u)})}function A(S){var O=Bt.concat("style");de(v),ve(i,o),ve(d,m),ue([d,g],O),ue(i,S?O:["style",Ke])}function h(){ve(i,o),ve(d,m),o=M(Lt),m=M(ar),oe(i,o),oe(d,m),x(i,te,t.label),x(i,Ut,t.labelledby)}function E(){d=b("."+ar),g=Je(d,"."+cn),ke(d&&g,"A track/list element is missing."),at(v,vr(g,"."+At+":not(."+Dr+")")),Le({arrows:Ht,pagination:yt,prev:pr,next:wr,bar:ln,toggle:dn},function(S,O){c[O]=b("."+S)}),Be(c,{root:i,track:d,list:g,slides:v})}function C(){var S=i.id||Br(Qe),O=t.role;i.id=S,d.id=d.id||S+"-track",g.id=g.id||S+"-list",!ie(i,le)&&i.tagName!=="SECTION"&&O&&x(i,le,O),x(i,Ke,s.carousel),x(g,le,"presentation")}function b(S){var O=gr(i,S);return O&&_n(O,"."+Lt)===i?O:void 0}function M(S){return[S+"--"+t.type,S+"--"+t.direction,t.drag&&S+"--draggable",t.isNavigation&&S+"--nav",S===Lt&&Ne]}return Be(c,{setup:f,mount:_,destroy:A})}var Pe="slide",xe="loop",rt="fade";function Tn(e,r,t,n){var a=H(e),l=a.on,i=a.emit,s=a.bind,c=e.Components,v=e.root,o=e.options,m=o.isNavigation,d=o.updateOnMove,g=o.i18n,u=o.pagination,f=o.slideFocus,_=c.Direction.resolve,A=ie(n,"style"),h=ie(n,te),E=t>-1,C=Je(n,"."+fn),b;function M(){E||(n.id=v.id+"-slide"+kt(r+1),x(n,le,u?"tabpanel":"group"),x(n,Ke,g.slide),x(n,te,h||Dt(g.slideLabel,[r+1,e.length]))),S()}function S(){s(n,"click",U(i,mr,P)),s(n,"keydown",U(i,Lr,P)),l([et,Ir,Ve],L),l(_r,k),d&&l(Ae,w)}function O(){b=!0,a.destroy(),ve(n,mn),ue(n,Bt),x(n,"style",A),x(n,te,h||"")}function k(){var p=e.splides.map(function(T){var D=T.splide.Components.Slides.getAt(r);return D?D.slide.id:""}).join(" ");x(n,te,Dt(g.slideX,(E?t:r)+1)),x(n,tt,p),x(n,le,f?"button":""),f&&ue(n,Ke)}function w(){b||L()}function L(){if(!b){var p=e.index;I(),N(),fe(n,Pr,r===p-1),fe(n,Mr,r===p+1)}}function I(){var p=F();p!==Zt(n,Ne)&&(fe(n,Ne,p),x(n,br,m&&p||""),i(p?Hr:Yr,P))}function N(){var p=Y(),T=!p&&(!F()||E);if(e.state.is([Me,qe])||x(n,Or,T||""),x(xt(n,o.focusableNodes||""),we,T?-1:""),f&&x(n,we,T?-1:0),p!==Zt(n,pt)&&(fe(n,pt,p),i(p?Xr:Kr,P)),!p&&document.activeElement===n){var D=c.Slides.getAt(e.index);D&&lr(D.slide)}}function V(p,T,D){ne(D&&C||n,p,T)}function F(){var p=e.index;return p===r||o.cloneStatus&&p===t}function Y(){if(e.is(rt))return F();var p=ee(c.Elements.track),T=ee(n),D=_("left",!0),G=_("right",!0);return ft(p[D])<=Ye(T[D])&&ft(T[G])<=Ye(p[G])}function B(p,T){var D=J(p-r);return!E&&(o.rewind||e.is(xe))&&(D=me(D,e.length-D)),D<=T}var P={index:r,slideIndex:t,slide:n,container:C,isClone:E,mount:M,destroy:O,update:L,style:V,isWithin:B};return P}function Ln(e,r,t){var n=H(e),a=n.on,l=n.emit,i=n.bind,s=r.Elements,c=s.slides,v=s.list,o=[];function m(){d(),a(K,g),a(K,d)}function d(){c.forEach(function(L,I){f(L,I,-1)})}function g(){b(function(L){L.destroy()}),de(o)}function u(){b(function(L){L.update()})}function f(L,I,N){var V=Tn(e,I,N,L);V.mount(),o.push(V),o.sort(function(F,Y){return F.index-Y.index})}function _(L){return L?M(function(I){return!I.isClone}):o}function A(L){var I=r.Controller,N=I.toIndex(L),V=I.hasFocus()?1:t.perPage;return M(function(F){return ot(F.index,N,N+V-1)})}function h(L){return M(L)[0]}function E(L,I){re(L,function(N){if(he(N)&&(N=dr(N)),fr(N)){var V=c[I];V?Vt(N,V):Ze(v,N),oe(N,t.classes.slide),O(N,U(l,Xe))}}),l(K)}function C(L){Ie(M(L).map(function(I){return I.slide})),l(K)}function b(L,I){_(I).forEach(L)}function M(L){return o.filter(cr(L)?L:function(I){return he(L)?Ue(I.slide,L):Mt(je(L),I.index)})}function S(L,I,N){b(function(V){V.style(L,I,N)})}function O(L,I){var N=xt(L,"img"),V=N.length;V?N.forEach(function(F){i(F,"load error",function(){--V||I()})}):I()}function k(L){return L?c.length:o.length}function w(){return o.length>t.perPage}return{mount:m,destroy:g,update:u,register:f,get:_,getIn:A,getAt:h,add:E,remove:C,forEach:b,filter:M,style:S,getLength:k,isEnough:w}}function In(e,r,t){var n=H(e),a=n.on,l=n.bind,i=n.emit,s=r.Slides,c=r.Direction.resolve,v=r.Elements,o=v.root,m=v.track,d=v.list,g=s.getAt,u=s.style,f,_,A;function h(){E(),l(window,"resize load",an(U(i,Xe))),a([Q,K],E),a(Xe,C)}function E(){f=t.direction===mt,ne(o,"maxWidth",Te(t.width)),ne(m,c("paddingLeft"),b(!1)),ne(m,c("paddingRight"),b(!0)),C(!0)}function C(P){var p=ee(o);(P||_.width!==p.width||_.height!==p.height)&&(ne(m,"height",M()),u(c("marginRight"),Te(t.gap)),u("width",O()),u("height",k(),!0),_=p,i(Gt),A!==(A=B())&&(fe(o,xr,A),i(Zr,A)))}function b(P){var p=t.padding,T=c(P?"right":"left");return p&&Te(p[T]||(ze(p)?0:p))||"0px"}function M(){var P="";return f&&(P=S(),ke(P,"height or heightRatio is missing."),P="calc("+P+" - "+b(!1)+" - "+b(!0)+")"),P}function S(){return Te(t.height||ee(d).width*t.heightRatio)}function O(){return t.autoWidth?null:Te(t.fixedWidth)||(f?"":w())}function k(){return Te(t.fixedHeight)||(f?t.autoHeight?null:w():S())}function w(){var P=Te(t.gap);return"calc((100%"+(P&&" + "+P)+")/"+(t.perPage||1)+(P&&" - "+P)+")"}function L(){return ee(d)[c("width")]}function I(P,p){var T=g(P||0);return T?ee(T.slide)[c("width")]+(p?0:F()):0}function N(P,p){var T=g(P);if(T){var D=ee(T.slide)[c("right")],G=ee(d)[c("left")];return J(D-G)+(p?0:F())}return 0}function V(P){return N(e.length-1)-N(0)+I(0,P)}function F(){var P=g(0);return P&&parseFloat(ne(P.slide,c("marginRight")))||0}function Y(P){return parseFloat(ne(m,c("padding"+(P?"Right":"Left"))))||0}function B(){return e.is(rt)||V(!0)>L()}return{mount:h,resize:C,listSize:L,slideSize:I,sliderSize:V,totalSize:N,getPadding:Y,isOverflow:B}}var Nn=2;function Rn(e,r,t){var n=H(e),a=n.on,l=r.Elements,i=r.Slides,s=r.Direction.resolve,c=[],v;function o(){a(K,m),a([Q,Xe],g),(v=_())&&(u(v),r.Layout.resize(!0))}function m(){d(),o()}function d(){Ie(c),de(c),n.destroy()}function g(){var A=_();v!==A&&(v<A||!A)&&n.emit(K)}function u(A){var h=i.get().slice(),E=h.length;if(E){for(;h.length<A;)at(h,h);at(h.slice(-A),h.slice(0,A)).forEach(function(C,b){var M=b<A,S=f(C.slide,b);M?Vt(S,h[0].slide):Ze(l.list,S),at(c,S),i.register(S,b-A+(M?0:E),C.index)})}}function f(A,h){var E=A.cloneNode(!0);return oe(E,t.classes.clone),E.id=e.root.id+"-clone"+kt(h+1),E}function _(){var A=t.clones;if(!e.is(xe))A=0;else if($e(A)){var h=t[s("fixedWidth")]&&r.Layout.slideSize(0),E=h&&Ye(ee(l.track)[s("width")]/h);A=E||t[s("autoWidth")]&&e.length||t.perPage*Nn}return A}return{mount:o,destroy:d}}function bn(e,r,t){var n=H(e),a=n.on,l=n.emit,i=e.state.set,s=r.Layout,c=s.slideSize,v=s.getPadding,o=s.totalSize,m=s.listSize,d=s.sliderSize,g=r.Direction,u=g.resolve,f=g.orient,_=r.Elements,A=_.list,h=_.track,E;function C(){E=r.Transition,a([Re,Gt,Q,K],b)}function b(){r.Controller.isBusy()||(r.Scroll.cancel(),S(e.index),r.Slides.update())}function M(T,D,G,$){T!==D&&P(T>G)&&(L(),O(w(V(),T>G),!0)),i(Me),l(Ae,D,G,T),E.start(D,function(){i(Ce),l(et,D,G,T),$&&$()})}function S(T){O(N(T,!0))}function O(T,D){if(!e.is(rt)){var G=D?T:k(T);ne(A,"transform","translate"+u("X")+"("+G+"px)"),T!==G&&l(Ir)}}function k(T){if(e.is(xe)){var D=I(T),G=D>r.Controller.getEnd(),$=D<0;($||G)&&(T=w(T,G))}return T}function w(T,D){var G=T-B(D),$=d();return T-=f($*(Ye(J(G)/$)||1))*(D?1:-1),T}function L(){O(V(),!0),E.cancel()}function I(T){for(var D=r.Slides.get(),G=0,$=1/0,q=0;q<D.length;q++){var ge=D[q].index,y=J(N(ge,!0)-T);if(y<=$)$=y,G=ge;else break}return G}function N(T,D){var G=f(o(T-1)-Y(T));return D?F(G):G}function V(){var T=u("left");return ee(A)[T]-ee(h)[T]+f(v(!1))}function F(T){return t.trimSpace&&e.is(Pe)&&(T=be(T,0,f(d(!0)-m()))),T}function Y(T){var D=t.focus;return D==="center"?(m()-c(T,!0))/2:+D*c(T)||0}function B(T){return N(T?r.Controller.getEnd():0,!!t.trimSpace)}function P(T){var D=f(w(V(),T));return T?D>=0:D<=A[u("scrollWidth")]-ee(h)[u("width")]}function p(T,D){D=$e(D)?V():D;var G=T!==!0&&f(D)<f(B(!1)),$=T!==!1&&f(D)>f(B(!0));return G||$}return{mount:C,move:M,jump:S,translate:O,shift:w,cancel:L,toIndex:I,toPosition:N,getPosition:V,getLimit:B,exceededLimit:p,reposition:b}}function On(e,r,t){var n=H(e),a=n.on,l=n.emit,i=r.Move,s=i.getPosition,c=i.getLimit,v=i.toPosition,o=r.Slides,m=o.isEnough,d=o.getLength,g=t.omitEnd,u=e.is(xe),f=e.is(Pe),_=U(V,!1),A=U(V,!0),h=t.start||0,E,C=h,b,M,S;function O(){k(),a([Q,K,vt],k),a(Gt,w)}function k(){b=d(!0),M=t.perMove,S=t.perPage,E=P();var y=be(h,0,g?E:b-1);y!==h&&(h=y,i.reposition())}function w(){E!==P()&&l(vt)}function L(y,z,Z){if(!ge()){var X=N(y),j=B(X);j>-1&&(z||j!==h)&&(G(j),i.move(X,j,C,Z))}}function I(y,z,Z,X){r.Scroll.scroll(y,z,Z,function(){var j=B(i.toIndex(s()));G(g?me(j,E):j),X&&X()})}function N(y){var z=h;if(he(y)){var Z=y.match(/([+\-<>])(\d+)?/)||[],X=Z[1],j=Z[2];X==="+"||X==="-"?z=F(h+ +(""+X+(+j||1)),h):X===">"?z=j?p(+j):_(!0):X==="<"&&(z=A(!0))}else z=u?y:be(y,0,E);return z}function V(y,z){var Z=M||(q()?1:S),X=F(h+Z*(y?-1:1),h,!(M||q()));return X===-1&&f&&!Er(s(),c(!y),1)?y?0:E:z?X:B(X)}function F(y,z,Z){if(m()||q()){var X=Y(y);X!==y&&(z=y,y=X,Z=!1),y<0||y>E?!M&&(ot(0,y,z,!0)||ot(E,z,y,!0))?y=p(T(y)):u?y=Z?y<0?-(b%S||S):b:y:t.rewind?y=y<0?E:0:y=-1:Z&&y!==z&&(y=p(T(z)+(y<z?-1:1)))}else y=-1;return y}function Y(y){if(f&&t.trimSpace==="move"&&y!==h)for(var z=s();z===v(y,!0)&&ot(y,0,e.length-1,!t.rewind);)y<h?--y:++y;return y}function B(y){return u?(y+b)%b||0:y}function P(){for(var y=b-(q()||u&&M?1:S);g&&y-- >0;)if(v(b-1,!0)!==v(y,!0)){y++;break}return be(y,0,b-1)}function p(y){return be(q()?y:S*y,0,E)}function T(y){return q()?me(y,E):ft((y>=E?b-1:y)/S)}function D(y){var z=i.toIndex(y);return f?be(z,0,E):z}function G(y){y!==h&&(C=h,h=y)}function $(y){return y?C:h}function q(){return!$e(t.focus)||t.isNavigation}function ge(){return e.state.is([Me,qe])&&!!t.waitForTransition}return{mount:O,go:L,scroll:I,getNext:_,getPrev:A,getAdjacent:V,getEnd:P,setIndex:G,getIndex:$,toIndex:p,toPage:T,toDest:D,hasFocus:q,isBusy:ge}}var Dn="http://www.w3.org/2000/svg",pn="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",nt=40;function wn(e,r,t){var n=H(e),a=n.on,l=n.bind,i=n.emit,s=t.classes,c=t.i18n,v=r.Elements,o=r.Controller,m=v.arrows,d=v.track,g=m,u=v.prev,f=v.next,_,A,h={};function E(){b(),a(Q,C)}function C(){M(),E()}function b(){var I=t.arrows;I&&!(u&&f)&&k(),u&&f&&(Be(h,{prev:u,next:f}),He(g,I?"":"none"),oe(g,A=Ht+"--"+t.direction),I&&(S(),L(),x([u,f],tt,d.id),i(Jr,u,f)))}function M(){n.destroy(),ve(g,A),_?(Ie(m?[u,f]:g),u=f=null):ue([u,f],Bt)}function S(){a([Re,et,K,Ve,vt],L),l(f,"click",U(O,">")),l(u,"click",U(O,"<"))}function O(I){o.go(I,!0)}function k(){g=m||pe("div",s.arrows),u=w(!0),f=w(!1),_=!0,Ze(g,[u,f]),!m&&Vt(g,d)}function w(I){var N='<button class="'+s.arrow+" "+(I?s.prev:s.next)+'" type="button"><svg xmlns="'+Dn+'" viewBox="0 0 '+nt+" "+nt+'" width="'+nt+'" height="'+nt+'" focusable="false"><path d="'+(t.arrowPath||pn)+'" />';return dr(N)}function L(){if(u&&f){var I=e.index,N=o.getPrev(),V=o.getNext(),F=N>-1&&I<N?c.last:c.prev,Y=V>-1&&I>V?c.first:c.next;u.disabled=N<0,f.disabled=V<0,x(u,te,F),x(f,te,Y),i(Qr,u,f,N,V)}}return{arrows:h,mount:E,destroy:M,update:L}}var Cn=Ft+"-interval";function Pn(e,r,t){var n=H(e),a=n.on,l=n.bind,i=n.emit,s=dt(t.interval,e.go.bind(e,">"),S),c=s.isPaused,v=r.Elements,o=r.Elements,m=o.root,d=o.toggle,g=t.autoplay,u,f,_=g==="pause";function A(){g&&(h(),d&&x(d,tt,v.track.id),_||E(),M())}function h(){t.pauseOnHover&&l(m,"mouseenter mouseleave",function(k){u=k.type==="mouseenter",b()}),t.pauseOnFocus&&l(m,"focusin focusout",function(k){f=k.type==="focusin",b()}),d&&l(d,"click",function(){_?E():C(!0)}),a([Ae,zt,K],s.rewind),a(Ae,O)}function E(){c()&&r.Slides.isEnough()&&(s.start(!t.resetProgress),f=u=_=!1,M(),i(yr))}function C(k){k===void 0&&(k=!0),_=!!k,M(),c()||(s.pause(),i(Sr))}function b(){_||(u||f?C(!1):E())}function M(){d&&(fe(d,Ne,!_),x(d,te,t.i18n[_?"play":"pause"]))}function S(k){var w=v.bar;w&&ne(w,"width",k*100+"%"),i(rn,k)}function O(k){var w=r.Slides.getAt(k);s.set(w&&+ie(w.slide,Cn)||t.interval)}return{mount:A,destroy:s.cancel,play:E,pause:C,isPaused:c}}function Mn(e,r,t){var n=H(e),a=n.on;function l(){t.cover&&(a(Tr,U(s,!0)),a([Re,Q,K],U(i,!0)))}function i(c){r.Slides.forEach(function(v){var o=Je(v.container||v.slide,"img");o&&o.src&&s(c,o,v)})}function s(c,v,o){o.style("background",c?'center/cover no-repeat url("'+v.src+'")':"",!0),He(v,c?"none":"")}return{mount:l,destroy:U(i,!1)}}var Vn=10,xn=600,Fn=.6,kn=1.5,Gn=800;function zn(e,r,t){var n=H(e),a=n.on,l=n.emit,i=e.state.set,s=r.Move,c=s.getPosition,v=s.getLimit,o=s.exceededLimit,m=s.translate,d=e.is(Pe),g,u,f=1;function _(){a(Ae,C),a([Q,K],b)}function A(S,O,k,w,L){var I=c();if(C(),k&&(!d||!o())){var N=r.Layout.sliderSize(),V=Ot(S)*N*ft(J(S)/N)||0;S=s.toPosition(r.Controller.toDest(S%N))+V}var F=Er(I,S,1);f=1,O=F?0:O||ct(J(S-I)/kn,Gn),u=w,g=dt(O,h,U(E,I,S,L),1),i(qe),l(zt),g.start()}function h(){i(Ce),u&&u(),l(Ve)}function E(S,O,k,w){var L=c(),I=S+(O-S)*M(w),N=(I-L)*f;m(L+N),d&&!k&&o()&&(f*=Fn,J(N)<Vn&&A(v(o(!0)),xn,!1,u,!0))}function C(){g&&g.cancel()}function b(){g&&!g.isPaused()&&(C(),h())}function M(S){var O=t.easingFunc;return O?O(S):1-Math.pow(1-S,4)}return{mount:_,destroy:C,scroll:A,cancel:b}}var Oe={passive:!1,capture:!0};function Un(e,r,t){var n=H(e),a=n.on,l=n.emit,i=n.bind,s=n.unbind,c=e.state,v=r.Move,o=r.Scroll,m=r.Controller,d=r.Elements.track,g=r.Media.reduce,u=r.Direction,f=u.resolve,_=u.orient,A=v.getPosition,h=v.exceededLimit,E,C,b,M,S,O=!1,k,w,L;function I(){i(d,It,Rt,Oe),i(d,Nt,Rt,Oe),i(d,Fr,V,Oe),i(d,"click",B,{capture:!0}),i(d,"dragstart",ce),a([Re,Q],N)}function N(){var R=t.drag;Xt(!R),M=R==="free"}function V(R){if(k=!1,!w){var W=j(R);X(R.target)&&(W||!R.button)&&(m.isBusy()?ce(R,!0):(L=W?d:window,S=c.is([Me,qe]),b=null,i(L,It,F,Oe),i(L,Nt,Y,Oe),v.cancel(),o.cancel(),P(R)))}}function F(R){if(c.is(it)||(c.set(it),l(qr)),R.cancelable)if(S){v.translate(E+Z(q(R)));var W=ge(R)>or,Se=O!==(O=h());(W||Se)&&P(R),k=!0,l($r),ce(R)}else D(R)&&(S=T(R),ce(R))}function Y(R){c.is(it)&&(c.set(Ce),l(jr)),S&&(p(R),ce(R)),s(L,It,F),s(L,Nt,Y),S=!1}function B(R){!w&&k&&ce(R,!0)}function P(R){b=C,C=R,E=A()}function p(R){var W=G(R),Se=$(W),Fe=t.rewind&&t.rewindByDrag;g(!1),M?m.scroll(Se,0,t.snap):e.is(rt)?m.go(_(Ot(W))<0?Fe?"<":"-":Fe?">":"+"):e.is(Pe)&&O&&Fe?m.go(h(!0)?">":"<"):m.go(m.toDest(Se),!0),g(!0)}function T(R){var W=t.dragMinThreshold,Se=ze(W),Fe=Se&&W.mouse||0,Gr=(Se?W.touch:+W)||10;return J(q(R))>(j(R)?Gr:Fe)}function D(R){return J(q(R))>J(q(R,!0))}function G(R){if(e.is(xe)||!O){var W=ge(R);if(W&&W<or)return q(R)/W}return 0}function $(R){return A()+Ot(R)*me(J(R)*(t.flickPower||600),M?1/0:r.Layout.listSize()*(t.flickMaxPages||1))}function q(R,W){return z(R,W)-z(y(R),W)}function ge(R){return bt(R)-bt(y(R))}function y(R){return C===R&&b||C}function z(R,W){return(j(R)?R.changedTouches[0]:R)["page"+f(W?"Y":"X")]}function Z(R){return R/(O&&e.is(Pe)?yn:1)}function X(R){var W=t.noDrag;return!Ue(R,"."+Cr+", ."+_t)&&(!W||!Ue(R,W))}function j(R){return typeof TouchEvent<"u"&&R instanceof TouchEvent}function kr(){return S}function Xt(R){w=R}return{mount:I,disable:Xt,isDragging:kr}}var Wn={Spacebar:" ",Right:ht,Left:Et,Up:Nr,Down:Rr};function Yt(e){return e=he(e)?e:e.key,Wn[e]||e}var ur="keydown";function Bn(e,r,t){var n=H(e),a=n.on,l=n.bind,i=n.unbind,s=e.root,c=r.Direction.resolve,v,o;function m(){d(),a(Q,g),a(Q,d),a(Ae,f)}function d(){var A=t.keyboard;A&&(v=A==="global"?window:s,l(v,ur,_))}function g(){i(v,ur)}function u(A){o=A}function f(){var A=o;o=!0,sr(function(){o=A})}function _(A){if(!o){var h=Yt(A);h===c(Et)?e.go("<"):h===c(ht)&&e.go(">")}}return{mount:m,destroy:g,disable:u}}var Ge=Ft+"-lazy",ut=Ge+"-srcset",Hn="["+Ge+"], ["+ut+"]";function Yn(e,r,t){var n=H(e),a=n.on,l=n.off,i=n.bind,s=n.emit,c=t.lazyLoad==="sequential",v=[et,Ve],o=[];function m(){t.lazyLoad&&(d(),a(K,d))}function d(){de(o),g(),c?A():(l(v),a(v,u),u())}function g(){r.Slides.forEach(function(h){xt(h.slide,Hn).forEach(function(E){var C=ie(E,Ge),b=ie(E,ut);if(C!==E.src||b!==E.srcset){var M=t.classes.spinner,S=E.parentElement,O=Je(S,"."+M)||pe("span",M,S);o.push([E,h,O]),E.src||He(E,"none")}})})}function u(){o=o.filter(function(h){var E=t.perPage*((t.preloadPages||1)+1)-1;return h[1].isWithin(e.index,E)?f(h):!0}),o.length||l(v)}function f(h){var E=h[0];oe(h[1].slide,wt),i(E,"load error",U(_,h)),x(E,"src",ie(E,Ge)),x(E,"srcset",ie(E,ut)),ue(E,Ge),ue(E,ut)}function _(h,E){var C=h[0],b=h[1];ve(b.slide,wt),E.type!=="error"&&(Ie(h[2]),He(C,""),s(Tr,C,b),s(Xe)),c&&A()}function A(){o.length&&f(o.shift())}return{mount:m,destroy:U(de,o),check:u}}function Xn(e,r,t){var n=H(e),a=n.on,l=n.emit,i=n.bind,s=r.Slides,c=r.Elements,v=r.Controller,o=v.hasFocus,m=v.getIndex,d=v.go,g=r.Direction.resolve,u=c.pagination,f=[],_,A;function h(){E(),a([Q,K,vt],h);var w=t.pagination;u&&He(u,w?"":"none"),w&&(a([Ae,zt,Ve],k),C(),k(),l(en,{list:_,items:f},O(e.index)))}function E(){_&&(Ie(u?_e(_.children):_),ve(_,A),de(f),_=null),n.destroy()}function C(){var w=e.length,L=t.classes,I=t.i18n,N=t.perPage,V=o()?v.getEnd()+1:Ye(w/N);_=u||pe("ul",L.pagination,c.track.parentElement),oe(_,A=yt+"--"+S()),x(_,le,"tablist"),x(_,te,I.select),x(_,Wt,S()===mt?"vertical":"");for(var F=0;F<V;F++){var Y=pe("li",null,_),B=pe("button",{class:L.page,type:"button"},Y),P=s.getIn(F).map(function(T){return T.slide.id}),p=!o()&&N>1?I.pageX:I.slideX;i(B,"click",U(b,F)),t.paginationKeyboard&&i(B,"keydown",U(M,F)),x(Y,le,"presentation"),x(B,le,"tab"),x(B,tt,P.join(" ")),x(B,te,Dt(p,F+1)),x(B,we,-1),f.push({li:Y,button:B,page:F})}}function b(w){d(">"+w,!0)}function M(w,L){var I=f.length,N=Yt(L),V=S(),F=-1;N===g(ht,!1,V)?F=++w%I:N===g(Et,!1,V)?F=(--w+I)%I:N==="Home"?F=0:N==="End"&&(F=I-1);var Y=f[F];Y&&(lr(Y.button),d(">"+F),ce(L,!0))}function S(){return t.paginationDirection||t.direction}function O(w){return f[v.toPage(w)]}function k(){var w=O(m(!0)),L=O(m());if(w){var I=w.button;ve(I,Ne),ue(I,tr),x(I,we,-1)}if(L){var N=L.button;oe(N,Ne),x(N,tr,!0),x(N,we,"")}l(tn,{list:_,items:f},w,L)}return{items:f,mount:h,destroy:E,getAt:O,update:k}}var Kn=[" ","Enter"];function qn(e,r,t){var n=t.isNavigation,a=t.slideFocus,l=[];function i(){e.splides.forEach(function(u){u.isParent||(v(e,u.splide),v(u.splide,e))}),n&&o()}function s(){l.forEach(function(u){u.destroy()}),de(l)}function c(){s(),i()}function v(u,f){var _=H(u);_.on(Ae,function(A,h,E){f.go(f.is(xe)?E:A)}),l.push(_)}function o(){var u=H(e),f=u.on;f(mr,d),f(Lr,g),f([Re,Q],m),l.push(u),u.emit(_r,e.splides)}function m(){x(r.Elements.list,Wt,t.direction===mt?"vertical":"")}function d(u){e.go(u.index)}function g(u,f){Mt(Kn,Yt(f))&&(d(u),ce(f))}return{setup:U(r.Media.set,{slideFocus:$e(a)?n:a},!0),mount:i,destroy:s,remount:c}}function $n(e,r,t){var n=H(e),a=n.bind,l=0;function i(){t.wheel&&a(r.Elements.track,"wheel",s,Oe)}function s(v){if(v.cancelable){var o=v.deltaY,m=o<0,d=bt(v),g=t.wheelMinThreshold||0,u=t.wheelSleep||0;J(o)>g&&d-l>u&&(e.go(m?"<":">"),l=d),c(m)&&ce(v)}}function c(v){return!t.releaseWheel||e.state.is(Me)||r.Controller.getAdjacent(v)!==-1}return{mount:i}}var jn=90;function Zn(e,r,t){var n=H(e),a=n.on,l=r.Elements.track,i=t.live&&!t.isNavigation,s=pe("span",En),c=dt(jn,U(o,!1));function v(){i&&(d(!r.Autoplay.isPaused()),x(l,ir,!0),s.textContent="…",a(yr,U(d,!0)),a(Sr,U(d,!1)),a([et,Ve],U(o,!0)))}function o(g){x(l,nr,g),g?(Ze(l,s),c.start()):(Ie(s),c.cancel())}function m(){ue(l,[rr,ir,nr]),Ie(s)}function d(g){i&&x(l,rr,g?"off":"polite")}return{mount:v,disable:d,destroy:m}}var Jn=Object.freeze({__proto__:null,Media:on,Direction:un,Elements:Sn,Slides:Ln,Layout:In,Clones:Rn,Move:bn,Controller:On,Arrows:wn,Autoplay:Pn,Cover:Mn,Scroll:zn,Drag:Un,Keyboard:Bn,LazyLoad:Yn,Pagination:Xn,Sync:qn,Wheel:$n,Live:Zn}),Qn={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ei={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:An,i18n:Qn,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ti(e,r,t){var n=r.Slides;function a(){H(e).on([Re,K],l)}function l(){n.forEach(function(s){s.style("transform","translateX(-"+100*s.index+"%)")})}function i(s,c){n.style("transition","opacity "+t.speed+"ms "+t.easing),sr(c)}return{mount:a,start:i,cancel:Rt}}function ri(e,r,t){var n=r.Move,a=r.Controller,l=r.Scroll,i=r.Elements.list,s=U(ne,i,"transition"),c;function v(){H(e).bind(i,"transitionend",function(g){g.target===i&&c&&(m(),c())})}function o(g,u){var f=n.toPosition(g,!0),_=n.getPosition(),A=d(g);J(f-_)>=1&&A>=1?t.useScroll?l.scroll(f,A,!1,u):(s("transform "+A+"ms "+t.easing),n.translate(f,!0),c=u):(n.jump(g),u())}function m(){s(""),l.cancel()}function d(g){var u=t.rewindSpeed;if(e.is(Pe)&&u){var f=a.getIndex(!0),_=a.getEnd();if(f===0&&g>=_||f>=_&&g===0)return u}return t.speed}return{mount:v,start:o,cancel:m}}var ni=function(){function e(t,n){this.event=H(),this.Components={},this.state=nn(De),this.splides=[],this._o={},this._E={};var a=he(t)?gr(document,t):t;ke(a,a+" is invalid."),this.root=a,n=Ee({label:ie(a,te)||"",labelledby:ie(a,Ut)||""},ei,e.defaults,n||{});try{Ee(n,JSON.parse(ie(a,Ft)))}catch{ke(!1,"Invalid JSON")}this._o=Object.create(Ee({},n))}var r=e.prototype;return r.mount=function(n,a){var l=this,i=this.state,s=this.Components;ke(i.is([De,st]),"Already mounted!"),i.set(De),this._C=s,this._T=a||this._T||(this.is(rt)?ti:ri),this._E=n||this._E;var c=Be({},Jn,this._E,{Transition:this._T});return Le(c,function(v,o){var m=v(l,s,l._o);s[o]=m,m.setup&&m.setup()}),Le(s,function(v){v.mount&&v.mount()}),this.emit(Re),oe(this.root,hn),i.set(Ce),this.emit(Qt),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(Ce)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,a){return this.event.on(n,a),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var a;return(a=this.event).emit.apply(a,[n].concat(_e(arguments,1))),this},r.add=function(n,a){return this._C.Slides.add(n,a),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(K),this},r.destroy=function(n){n===void 0&&(n=!0);var a=this.event,l=this.state;return l.is(De)?H(this).on(Qt,this.destroy.bind(this,n)):(Le(this._C,function(i){i.destroy&&i.destroy(n)},!0),a.emit(Ar),a.destroy(),n&&de(this.splides),l.set(st)),this},zr(e,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),St=ni;St.defaults={};St.STATES=Wr;document.addEventListener("astro:page-load",()=>{var e=new St("#news",{type:"slide",perPage:1.5,gap:"2rem",paginationKeyboard:!0,keyboard:"focused",focus:"center",start:1,easing:"ease",waitForTransition:!0,updateOnMove:!0,trimSpace:!1,padding:"2rem"});e.mount()});document.addEventListener("astro:page-load",()=>{document.querySelectorAll("[data-id]").forEach(r=>{var t=new St(`#photoSlider_${r.dataset.id}`,{type:"slide",perPage:2,gap:"2rem",paginationKeyboard:!0,keyboard:"focused",focus:"center",start:0,easing:"ease",waitForTransition:!0,updateOnMove:!0,autoWidth:!0});t.mount()})});
