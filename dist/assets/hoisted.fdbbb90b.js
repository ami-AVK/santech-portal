import"./Search.astro_astro_type_script_index_0_lang.9713796e.js";import{c as Un}from"./fancybox.c34d69ff.js";Un.bind("[data-fancybox],.fancybox",{Thumbs:{type:"classic"}});function Kt(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wn(e,n,t){return n&&Kt(e.prototype,n),t&&Kt(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var qt="(prefers-reduced-motion: reduce)",De=1,Bn=2,Pe=3,Me=4,qe=5,it=6,st=7,Hn={CREATED:De,MOUNTED:Bn,IDLE:Pe,MOVING:Me,SCROLLING:qe,DRAGGING:it,DESTROYED:st};function de(e){e.length=0}function _e(e,n,t){return Array.prototype.slice.call(e,n,t)}function U(e){return e.bind.apply(e,[null].concat(_e(arguments,1)))}var cn=setTimeout,Rt=function(){};function $t(e){return requestAnimationFrame(e)}function lt(e,n){return typeof n===e}function ze(e){return!pt(e)&&lt("object",e)}var Pt=Array.isArray,fn=U(lt,"function"),he=U(lt,"string"),$e=U(lt,"undefined");function pt(e){return e===null}function vn(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function je(e){return Pt(e)?e:[e]}function ne(e,n){je(e).forEach(n)}function Mt(e,n){return e.indexOf(n)>-1}function at(e,n){return e.push.apply(e,je(n)),e}function fe(e,n,t){e&&ne(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function oe(e,n){fe(e,he(n)?n.split(" "):n,!0)}function Ze(e,n){ne(n,e.appendChild.bind(e))}function Vt(e,n){ne(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function Ue(e,n){return vn(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function ln(e,n){var t=e?_e(e.children):[];return n?t.filter(function(r){return Ue(r,n)}):t}function Je(e,n){return n?ln(e,n)[0]:e.firstElementChild}var We=Object.keys;function Le(e,n,t){return e&&(t?We(e).reverse():We(e)).forEach(function(r){r!=="__proto__"&&n(e[r],r)}),e}function Be(e){return _e(arguments,1).forEach(function(n){Le(n,function(t,r){e[r]=n[r]})}),e}function Ee(e){return _e(arguments,1).forEach(function(n){Le(n,function(t,r){Pt(t)?e[r]=t.slice():ze(t)?e[r]=Ee({},ze(e[r])?e[r]:{},t):e[r]=t})}),e}function jt(e,n){ne(n||We(e),function(t){delete e[t]})}function ue(e,n){ne(e,function(t){ne(n,function(r){t&&t.removeAttribute(r)})})}function x(e,n,t){ze(n)?Le(n,function(r,a){x(e,a,r)}):ne(e,function(r){pt(t)||t===""?ue(r,n):r.setAttribute(n,String(t))})}function Ce(e,n,t){var r=document.createElement(e);return n&&(he(n)?oe(r,n):x(r,n)),t&&Ze(t,r),r}function re(e,n,t){if($e(t))return getComputedStyle(e)[n];pt(t)||(e.style[n]=""+t)}function He(e,n){re(e,"display",n)}function dn(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ie(e,n){return e.getAttribute(n)}function Zt(e,n){return e&&e.classList.contains(n)}function ee(e){return e.getBoundingClientRect()}function Ie(e){ne(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function gn(e){return Je(new DOMParser().parseFromString(e,"text/html").body)}function ce(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function En(e,n){return e&&e.querySelector(n)}function xt(e,n){return n?_e(e.querySelectorAll(n)):[]}function ve(e,n){fe(e,n,!1)}function bt(e){return e.timeStamp}function Se(e){return he(e)?e:e?e+"px":""}var Qe="splide",Ft="data-"+Qe;function ke(e,n){if(!e)throw new Error("["+Qe+"] "+(n||""))}var me=Math.min,ct=Math.max,ft=Math.floor,Ye=Math.ceil,J=Math.abs;function hn(e,n,t){return J(e-n)<t}function ot(e,n,t,r){var a=me(n,t),l=ct(n,t);return r?a<e&&e<l:a<=e&&e<=l}function be(e,n,t){var r=me(n,t),a=ct(n,t);return me(ct(r,e),a)}function Ot(e){return+(e>0)-+(e<0)}function Dt(e,n){return ne(n,function(t){e=e.replace("%s",""+t)}),e}function kt(e){return e<10?"0"+e:""+e}var Jt={};function Yn(e){return""+e+kt(Jt[e]=(Jt[e]||0)+1)}function mn(){var e=[];function n(i,s,c,v){a(i,s,function(o,m,d){var g="addEventListener"in o,u=g?o.removeEventListener.bind(o,m,c,v):o.removeListener.bind(o,c);g?o.addEventListener(m,c,v):o.addListener(c),e.push([o,m,d,c,u])})}function t(i,s,c){a(i,s,function(v,o,m){e=e.filter(function(d){return d[0]===v&&d[1]===o&&d[2]===m&&(!c||d[3]===c)?(d[4](),!1):!0})})}function r(i,s,c){var v,o=!0;return typeof CustomEvent=="function"?v=new CustomEvent(s,{bubbles:o,detail:c}):(v=document.createEvent("CustomEvent"),v.initCustomEvent(s,o,!1,c)),i.dispatchEvent(v),v}function a(i,s,c){ne(i,function(v){v&&ne(s,function(o){o.split(" ").forEach(function(m){var d=m.split(".");c(v,d[0],d[1])})})})}function l(){e.forEach(function(i){i[4]()}),de(e)}return{bind:n,unbind:t,dispatch:r,destroy:l}}var Re="mounted",Qt="ready",Ae="move",et="moved",An="click",Xn="active",Kn="inactive",qn="visible",$n="hidden",K="refresh",Q="updated",Xe="resize",Gt="resized",jn="drag",Zn="dragging",Jn="dragged",zt="scroll",Ve="scrolled",Qn="overflow",_n="destroy",er="arrows:mounted",tr="arrows:updated",nr="pagination:mounted",rr="pagination:updated",yn="navigation:mounted",Tn="autoplay:play",ir="autoplay:playing",Sn="autoplay:pause",Ln="lazyload:loaded",In="sk",Nn="sh",vt="ei";function H(e){var n=e?e.event.bus:document.createDocumentFragment(),t=mn();function r(l,i){t.bind(n,je(l).join(" "),function(s){i.apply(i,Pt(s.detail)?s.detail:[])})}function a(l){t.dispatch(n,l,_e(arguments,1))}return e&&e.event.on(_n,t.destroy),Be(t,{bus:n,on:r,off:U(t.unbind,n),emit:a})}function dt(e,n,t,r){var a=Date.now,l,i=0,s,c=!0,v=0;function o(){if(!c){if(i=e?me((a()-l)/e,1):1,t&&t(i),i>=1&&(n(),l=a(),r&&++v>=r))return d();s=$t(o)}}function m(A){A||u(),l=a()-(A?i*e:0),c=!1,s=$t(o)}function d(){c=!0}function g(){l=a(),i=0,t&&t(i)}function u(){s&&cancelAnimationFrame(s),i=0,s=0,c=!0}function f(A){e=A}function _(){return c}return{start:m,rewind:g,pause:d,cancel:u,set:f,isPaused:_}}function ar(e){var n=e;function t(a){n=a}function r(a){return Mt(je(a),n)}return{set:t,is:r}}function or(e,n){var t=dt(n||0,e,null,1);return function(){t.isPaused()&&t.start()}}function ur(e,n,t){var r=e.state,a=t.breakpoints||{},l=t.reducedMotion||{},i=mn(),s=[];function c(){var u=t.mediaQuery==="min";We(a).sort(function(f,_){return u?+f-+_:+_-+f}).forEach(function(f){o(a[f],"("+(u?"min":"max")+"-width:"+f+"px)")}),o(l,qt),m()}function v(u){u&&i.destroy()}function o(u,f){var _=matchMedia(f);i.bind(_,"change",m),s.push([u,_])}function m(){var u=r.is(st),f=t.direction,_=s.reduce(function(A,h){return Ee(A,h[1].matches?h[0]:{})},{});jt(t),g(_),t.destroy?e.destroy(t.destroy==="completely"):u?(v(!0),e.mount()):f!==t.direction&&e.refresh()}function d(u){matchMedia(qt).matches&&(u?Ee(t,l):jt(t,We(l)))}function g(u,f,_){Ee(t,u),f&&Ee(Object.getPrototypeOf(t),u),(_||!r.is(De))&&e.emit(Q,t)}return{setup:c,destroy:v,reduce:d,set:g}}var gt="Arrow",Et=gt+"Left",ht=gt+"Right",Rn=gt+"Up",bn=gt+"Down",en="rtl",mt="ttb",St={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Rn,ht],ArrowRight:[bn,Et]};function sr(e,n,t){function r(l,i,s){s=s||t.direction;var c=s===en&&!i?1:s===mt?0:-1;return St[l]&&St[l][c]||l.replace(/width|left|right/i,function(v,o){var m=St[v.toLowerCase()][c]||v;return o>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function a(l){return l*(t.direction===en?1:-1)}return{resolve:r,orient:a}}var le="role",we="tabindex",cr="disabled",ae="aria-",tt=ae+"controls",On=ae+"current",tn=ae+"selected",te=ae+"label",Ut=ae+"labelledby",Dn=ae+"hidden",Wt=ae+"orientation",Ke=ae+"roledescription",nn=ae+"live",rn=ae+"busy",an=ae+"atomic",Bt=[le,we,cr,tt,On,te,Ut,Dn,Wt,Ke],se=Qe+"__",ye="is-",Lt=Qe,on=se+"track",fr=se+"list",At=se+"slide",Cn=At+"--clone",vr=At+"__container",Ht=se+"arrows",_t=se+"arrow",wn=_t+"--prev",Pn=_t+"--next",yt=se+"pagination",pn=yt+"__page",lr=se+"progress",dr=lr+"__bar",gr=se+"toggle",Er=se+"spinner",hr=se+"sr",mr=ye+"initialized",Ne=ye+"active",Mn=ye+"prev",Vn=ye+"next",Ct=ye+"visible",wt=ye+"loading",xn=ye+"focus-in",Fn=ye+"overflow",Ar=[Ne,Ct,Mn,Vn,wt,xn,Fn],_r={slide:At,clone:Cn,arrows:Ht,arrow:_t,prev:wn,next:Pn,pagination:yt,page:pn,spinner:Er};function yr(e,n){if(fn(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!Ue(t,n);)t=t.parentElement;return t}var Tr=5,un=200,kn="touchstart mousedown",It="touchmove mousemove",Nt="touchend touchcancel mouseup click";function Sr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=e.root,s=t.i18n,c={},v=[],o=[],m=[],d,g,u;function f(){E(),P(),h()}function _(){a(K,A),a(K,f),a(Q,h),l(document,kn+" keydown",function(T){u=T.type==="keydown"},{capture:!0}),l(i,"focusin",function(){fe(i,xn,!!u)})}function A(T){var O=Bt.concat("style");de(v),ve(i,o),ve(d,m),ue([d,g],O),ue(i,T?O:["style",Ke])}function h(){ve(i,o),ve(d,m),o=M(Lt),m=M(on),oe(i,o),oe(d,m),x(i,te,t.label),x(i,Ut,t.labelledby)}function E(){d=b("."+on),g=Je(d,"."+fr),ke(d&&g,"A track/list element is missing."),at(v,ln(g,"."+At+":not(."+Cn+")")),Le({arrows:Ht,pagination:yt,prev:wn,next:Pn,bar:dr,toggle:gr},function(T,O){c[O]=b("."+T)}),Be(c,{root:i,track:d,list:g,slides:v})}function P(){var T=i.id||Yn(Qe),O=t.role;i.id=T,d.id=d.id||T+"-track",g.id=g.id||T+"-list",!ie(i,le)&&i.tagName!=="SECTION"&&O&&x(i,le,O),x(i,Ke,s.carousel),x(g,le,"presentation")}function b(T){var O=En(i,T);return O&&yr(O,"."+Lt)===i?O:void 0}function M(T){return[T+"--"+t.type,T+"--"+t.direction,t.drag&&T+"--draggable",t.isNavigation&&T+"--nav",T===Lt&&Ne]}return Be(c,{setup:f,mount:_,destroy:A})}var pe="slide",xe="loop",nt="fade";function Lr(e,n,t,r){var a=H(e),l=a.on,i=a.emit,s=a.bind,c=e.Components,v=e.root,o=e.options,m=o.isNavigation,d=o.updateOnMove,g=o.i18n,u=o.pagination,f=o.slideFocus,_=c.Direction.resolve,A=ie(r,"style"),h=ie(r,te),E=t>-1,P=Je(r,"."+vr),b;function M(){E||(r.id=v.id+"-slide"+kt(n+1),x(r,le,u?"tabpanel":"group"),x(r,Ke,g.slide),x(r,te,h||Dt(g.slideLabel,[n+1,e.length]))),T()}function T(){s(r,"click",U(i,An,p)),s(r,"keydown",U(i,In,p)),l([et,Nn,Ve],L),l(yn,k),d&&l(Ae,w)}function O(){b=!0,a.destroy(),ve(r,Ar),ue(r,Bt),x(r,"style",A),x(r,te,h||"")}function k(){var C=e.splides.map(function(S){var D=S.splide.Components.Slides.getAt(n);return D?D.slide.id:""}).join(" ");x(r,te,Dt(g.slideX,(E?t:n)+1)),x(r,tt,C),x(r,le,f?"button":""),f&&ue(r,Ke)}function w(){b||L()}function L(){if(!b){var C=e.index;I(),N(),fe(r,Mn,n===C-1),fe(r,Vn,n===C+1)}}function I(){var C=F();C!==Zt(r,Ne)&&(fe(r,Ne,C),x(r,On,m&&C||""),i(C?Xn:Kn,p))}function N(){var C=Y(),S=!C&&(!F()||E);if(e.state.is([Me,qe])||x(r,Dn,S||""),x(xt(r,o.focusableNodes||""),we,S?-1:""),f&&x(r,we,S?-1:0),C!==Zt(r,Ct)&&(fe(r,Ct,C),i(C?qn:$n,p)),!C&&document.activeElement===r){var D=c.Slides.getAt(e.index);D&&dn(D.slide)}}function V(C,S,D){re(D&&P||r,C,S)}function F(){var C=e.index;return C===n||o.cloneStatus&&C===t}function Y(){if(e.is(nt))return F();var C=ee(c.Elements.track),S=ee(r),D=_("left",!0),G=_("right",!0);return ft(C[D])<=Ye(S[D])&&ft(S[G])<=Ye(C[G])}function B(C,S){var D=J(C-n);return!E&&(o.rewind||e.is(xe))&&(D=me(D,e.length-D)),D<=S}var p={index:n,slideIndex:t,slide:r,container:P,isClone:E,mount:M,destroy:O,update:L,style:V,isWithin:B};return p}function Ir(e,n,t){var r=H(e),a=r.on,l=r.emit,i=r.bind,s=n.Elements,c=s.slides,v=s.list,o=[];function m(){d(),a(K,g),a(K,d)}function d(){c.forEach(function(L,I){f(L,I,-1)})}function g(){b(function(L){L.destroy()}),de(o)}function u(){b(function(L){L.update()})}function f(L,I,N){var V=Lr(e,I,N,L);V.mount(),o.push(V),o.sort(function(F,Y){return F.index-Y.index})}function _(L){return L?M(function(I){return!I.isClone}):o}function A(L){var I=n.Controller,N=I.toIndex(L),V=I.hasFocus()?1:t.perPage;return M(function(F){return ot(F.index,N,N+V-1)})}function h(L){return M(L)[0]}function E(L,I){ne(L,function(N){if(he(N)&&(N=gn(N)),vn(N)){var V=c[I];V?Vt(N,V):Ze(v,N),oe(N,t.classes.slide),O(N,U(l,Xe))}}),l(K)}function P(L){Ie(M(L).map(function(I){return I.slide})),l(K)}function b(L,I){_(I).forEach(L)}function M(L){return o.filter(fn(L)?L:function(I){return he(L)?Ue(I.slide,L):Mt(je(L),I.index)})}function T(L,I,N){b(function(V){V.style(L,I,N)})}function O(L,I){var N=xt(L,"img"),V=N.length;V?N.forEach(function(F){i(F,"load error",function(){--V||I()})}):I()}function k(L){return L?c.length:o.length}function w(){return o.length>t.perPage}return{mount:m,destroy:g,update:u,register:f,get:_,getIn:A,getAt:h,add:E,remove:P,forEach:b,filter:M,style:T,getLength:k,isEnough:w}}function Nr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=r.emit,s=n.Slides,c=n.Direction.resolve,v=n.Elements,o=v.root,m=v.track,d=v.list,g=s.getAt,u=s.style,f,_,A;function h(){E(),l(window,"resize load",or(U(i,Xe))),a([Q,K],E),a(Xe,P)}function E(){f=t.direction===mt,re(o,"maxWidth",Se(t.width)),re(m,c("paddingLeft"),b(!1)),re(m,c("paddingRight"),b(!0)),P(!0)}function P(p){var C=ee(o);(p||_.width!==C.width||_.height!==C.height)&&(re(m,"height",M()),u(c("marginRight"),Se(t.gap)),u("width",O()),u("height",k(),!0),_=C,i(Gt),A!==(A=B())&&(fe(o,Fn,A),i(Qn,A)))}function b(p){var C=t.padding,S=c(p?"right":"left");return C&&Se(C[S]||(ze(C)?0:C))||"0px"}function M(){var p="";return f&&(p=T(),ke(p,"height or heightRatio is missing."),p="calc("+p+" - "+b(!1)+" - "+b(!0)+")"),p}function T(){return Se(t.height||ee(d).width*t.heightRatio)}function O(){return t.autoWidth?null:Se(t.fixedWidth)||(f?"":w())}function k(){return Se(t.fixedHeight)||(f?t.autoHeight?null:w():T())}function w(){var p=Se(t.gap);return"calc((100%"+(p&&" + "+p)+")/"+(t.perPage||1)+(p&&" - "+p)+")"}function L(){return ee(d)[c("width")]}function I(p,C){var S=g(p||0);return S?ee(S.slide)[c("width")]+(C?0:F()):0}function N(p,C){var S=g(p);if(S){var D=ee(S.slide)[c("right")],G=ee(d)[c("left")];return J(D-G)+(C?0:F())}return 0}function V(p){return N(e.length-1)-N(0)+I(0,p)}function F(){var p=g(0);return p&&parseFloat(re(p.slide,c("marginRight")))||0}function Y(p){return parseFloat(re(m,c("padding"+(p?"Right":"Left"))))||0}function B(){return e.is(nt)||V(!0)>L()}return{mount:h,resize:P,listSize:L,slideSize:I,sliderSize:V,totalSize:N,getPadding:Y,isOverflow:B}}var Rr=2;function br(e,n,t){var r=H(e),a=r.on,l=n.Elements,i=n.Slides,s=n.Direction.resolve,c=[],v;function o(){a(K,m),a([Q,Xe],g),(v=_())&&(u(v),n.Layout.resize(!0))}function m(){d(),o()}function d(){Ie(c),de(c),r.destroy()}function g(){var A=_();v!==A&&(v<A||!A)&&r.emit(K)}function u(A){var h=i.get().slice(),E=h.length;if(E){for(;h.length<A;)at(h,h);at(h.slice(-A),h.slice(0,A)).forEach(function(P,b){var M=b<A,T=f(P.slide,b);M?Vt(T,h[0].slide):Ze(l.list,T),at(c,T),i.register(T,b-A+(M?0:E),P.index)})}}function f(A,h){var E=A.cloneNode(!0);return oe(E,t.classes.clone),E.id=e.root.id+"-clone"+kt(h+1),E}function _(){var A=t.clones;if(!e.is(xe))A=0;else if($e(A)){var h=t[s("fixedWidth")]&&n.Layout.slideSize(0),E=h&&Ye(ee(l.track)[s("width")]/h);A=E||t[s("autoWidth")]&&e.length||t.perPage*Rr}return A}return{mount:o,destroy:d}}function Or(e,n,t){var r=H(e),a=r.on,l=r.emit,i=e.state.set,s=n.Layout,c=s.slideSize,v=s.getPadding,o=s.totalSize,m=s.listSize,d=s.sliderSize,g=n.Direction,u=g.resolve,f=g.orient,_=n.Elements,A=_.list,h=_.track,E;function P(){E=n.Transition,a([Re,Gt,Q,K],b)}function b(){n.Controller.isBusy()||(n.Scroll.cancel(),T(e.index),n.Slides.update())}function M(S,D,G,$){S!==D&&p(S>G)&&(L(),O(w(V(),S>G),!0)),i(Me),l(Ae,D,G,S),E.start(D,function(){i(Pe),l(et,D,G,S),$&&$()})}function T(S){O(N(S,!0))}function O(S,D){if(!e.is(nt)){var G=D?S:k(S);re(A,"transform","translate"+u("X")+"("+G+"px)"),S!==G&&l(Nn)}}function k(S){if(e.is(xe)){var D=I(S),G=D>n.Controller.getEnd(),$=D<0;($||G)&&(S=w(S,G))}return S}function w(S,D){var G=S-B(D),$=d();return S-=f($*(Ye(J(G)/$)||1))*(D?1:-1),S}function L(){O(V(),!0),E.cancel()}function I(S){for(var D=n.Slides.get(),G=0,$=1/0,q=0;q<D.length;q++){var ge=D[q].index,y=J(N(ge,!0)-S);if(y<=$)$=y,G=ge;else break}return G}function N(S,D){var G=f(o(S-1)-Y(S));return D?F(G):G}function V(){var S=u("left");return ee(A)[S]-ee(h)[S]+f(v(!1))}function F(S){return t.trimSpace&&e.is(pe)&&(S=be(S,0,f(d(!0)-m()))),S}function Y(S){var D=t.focus;return D==="center"?(m()-c(S,!0))/2:+D*c(S)||0}function B(S){return N(S?n.Controller.getEnd():0,!!t.trimSpace)}function p(S){var D=f(w(V(),S));return S?D>=0:D<=A[u("scrollWidth")]-ee(h)[u("width")]}function C(S,D){D=$e(D)?V():D;var G=S!==!0&&f(D)<f(B(!1)),$=S!==!1&&f(D)>f(B(!0));return G||$}return{mount:P,move:M,jump:T,translate:O,shift:w,cancel:L,toIndex:I,toPosition:N,getPosition:V,getLimit:B,exceededLimit:C,reposition:b}}function Dr(e,n,t){var r=H(e),a=r.on,l=r.emit,i=n.Move,s=i.getPosition,c=i.getLimit,v=i.toPosition,o=n.Slides,m=o.isEnough,d=o.getLength,g=t.omitEnd,u=e.is(xe),f=e.is(pe),_=U(V,!1),A=U(V,!0),h=t.start||0,E,P=h,b,M,T;function O(){k(),a([Q,K,vt],k),a(Gt,w)}function k(){b=d(!0),M=t.perMove,T=t.perPage,E=p();var y=be(h,0,g?E:b-1);y!==h&&(h=y,i.reposition())}function w(){E!==p()&&l(vt)}function L(y,z,Z){if(!ge()){var X=N(y),j=B(X);j>-1&&(z||j!==h)&&(G(j),i.move(X,j,P,Z))}}function I(y,z,Z,X){n.Scroll.scroll(y,z,Z,function(){var j=B(i.toIndex(s()));G(g?me(j,E):j),X&&X()})}function N(y){var z=h;if(he(y)){var Z=y.match(/([+\-<>])(\d+)?/)||[],X=Z[1],j=Z[2];X==="+"||X==="-"?z=F(h+ +(""+X+(+j||1)),h):X===">"?z=j?C(+j):_(!0):X==="<"&&(z=A(!0))}else z=u?y:be(y,0,E);return z}function V(y,z){var Z=M||(q()?1:T),X=F(h+Z*(y?-1:1),h,!(M||q()));return X===-1&&f&&!hn(s(),c(!y),1)?y?0:E:z?X:B(X)}function F(y,z,Z){if(m()||q()){var X=Y(y);X!==y&&(z=y,y=X,Z=!1),y<0||y>E?!M&&(ot(0,y,z,!0)||ot(E,z,y,!0))?y=C(S(y)):u?y=Z?y<0?-(b%T||T):b:y:t.rewind?y=y<0?E:0:y=-1:Z&&y!==z&&(y=C(S(z)+(y<z?-1:1)))}else y=-1;return y}function Y(y){if(f&&t.trimSpace==="move"&&y!==h)for(var z=s();z===v(y,!0)&&ot(y,0,e.length-1,!t.rewind);)y<h?--y:++y;return y}function B(y){return u?(y+b)%b||0:y}function p(){for(var y=b-(q()||u&&M?1:T);g&&y-- >0;)if(v(b-1,!0)!==v(y,!0)){y++;break}return be(y,0,b-1)}function C(y){return be(q()?y:T*y,0,E)}function S(y){return q()?me(y,E):ft((y>=E?b-1:y)/T)}function D(y){var z=i.toIndex(y);return f?be(z,0,E):z}function G(y){y!==h&&(P=h,h=y)}function $(y){return y?P:h}function q(){return!$e(t.focus)||t.isNavigation}function ge(){return e.state.is([Me,qe])&&!!t.waitForTransition}return{mount:O,go:L,scroll:I,getNext:_,getPrev:A,getAdjacent:V,getEnd:p,setIndex:G,getIndex:$,toIndex:C,toPage:S,toDest:D,hasFocus:q,isBusy:ge}}var Cr="http://www.w3.org/2000/svg",wr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",rt=40;function Pr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=r.emit,s=t.classes,c=t.i18n,v=n.Elements,o=n.Controller,m=v.arrows,d=v.track,g=m,u=v.prev,f=v.next,_,A,h={};function E(){b(),a(Q,P)}function P(){M(),E()}function b(){var I=t.arrows;I&&!(u&&f)&&k(),u&&f&&(Be(h,{prev:u,next:f}),He(g,I?"":"none"),oe(g,A=Ht+"--"+t.direction),I&&(T(),L(),x([u,f],tt,d.id),i(er,u,f)))}function M(){r.destroy(),ve(g,A),_?(Ie(m?[u,f]:g),u=f=null):ue([u,f],Bt)}function T(){a([Re,et,K,Ve,vt],L),l(f,"click",U(O,">")),l(u,"click",U(O,"<"))}function O(I){o.go(I,!0)}function k(){g=m||Ce("div",s.arrows),u=w(!0),f=w(!1),_=!0,Ze(g,[u,f]),!m&&Vt(g,d)}function w(I){var N='<button class="'+s.arrow+" "+(I?s.prev:s.next)+'" type="button"><svg xmlns="'+Cr+'" viewBox="0 0 '+rt+" "+rt+'" width="'+rt+'" height="'+rt+'" focusable="false"><path d="'+(t.arrowPath||wr)+'" />';return gn(N)}function L(){if(u&&f){var I=e.index,N=o.getPrev(),V=o.getNext(),F=N>-1&&I<N?c.last:c.prev,Y=V>-1&&I>V?c.first:c.next;u.disabled=N<0,f.disabled=V<0,x(u,te,F),x(f,te,Y),i(tr,u,f,N,V)}}return{arrows:h,mount:E,destroy:M,update:L}}var pr=Ft+"-interval";function Mr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=r.emit,s=dt(t.interval,e.go.bind(e,">"),T),c=s.isPaused,v=n.Elements,o=n.Elements,m=o.root,d=o.toggle,g=t.autoplay,u,f,_=g==="pause";function A(){g&&(h(),d&&x(d,tt,v.track.id),_||E(),M())}function h(){t.pauseOnHover&&l(m,"mouseenter mouseleave",function(k){u=k.type==="mouseenter",b()}),t.pauseOnFocus&&l(m,"focusin focusout",function(k){f=k.type==="focusin",b()}),d&&l(d,"click",function(){_?E():P(!0)}),a([Ae,zt,K],s.rewind),a(Ae,O)}function E(){c()&&n.Slides.isEnough()&&(s.start(!t.resetProgress),f=u=_=!1,M(),i(Tn))}function P(k){k===void 0&&(k=!0),_=!!k,M(),c()||(s.pause(),i(Sn))}function b(){_||(u||f?P(!1):E())}function M(){d&&(fe(d,Ne,!_),x(d,te,t.i18n[_?"play":"pause"]))}function T(k){var w=v.bar;w&&re(w,"width",k*100+"%"),i(ir,k)}function O(k){var w=n.Slides.getAt(k);s.set(w&&+ie(w.slide,pr)||t.interval)}return{mount:A,destroy:s.cancel,play:E,pause:P,isPaused:c}}function Vr(e,n,t){var r=H(e),a=r.on;function l(){t.cover&&(a(Ln,U(s,!0)),a([Re,Q,K],U(i,!0)))}function i(c){n.Slides.forEach(function(v){var o=Je(v.container||v.slide,"img");o&&o.src&&s(c,o,v)})}function s(c,v,o){o.style("background",c?'center/cover no-repeat url("'+v.src+'")':"",!0),He(v,c?"none":"")}return{mount:l,destroy:U(i,!1)}}var xr=10,Fr=600,kr=.6,Gr=1.5,zr=800;function Ur(e,n,t){var r=H(e),a=r.on,l=r.emit,i=e.state.set,s=n.Move,c=s.getPosition,v=s.getLimit,o=s.exceededLimit,m=s.translate,d=e.is(pe),g,u,f=1;function _(){a(Ae,P),a([Q,K],b)}function A(T,O,k,w,L){var I=c();if(P(),k&&(!d||!o())){var N=n.Layout.sliderSize(),V=Ot(T)*N*ft(J(T)/N)||0;T=s.toPosition(n.Controller.toDest(T%N))+V}var F=hn(I,T,1);f=1,O=F?0:O||ct(J(T-I)/Gr,zr),u=w,g=dt(O,h,U(E,I,T,L),1),i(qe),l(zt),g.start()}function h(){i(Pe),u&&u(),l(Ve)}function E(T,O,k,w){var L=c(),I=T+(O-T)*M(w),N=(I-L)*f;m(L+N),d&&!k&&o()&&(f*=kr,J(N)<xr&&A(v(o(!0)),Fr,!1,u,!0))}function P(){g&&g.cancel()}function b(){g&&!g.isPaused()&&(P(),h())}function M(T){var O=t.easingFunc;return O?O(T):1-Math.pow(1-T,4)}return{mount:_,destroy:P,scroll:A,cancel:b}}var Oe={passive:!1,capture:!0};function Wr(e,n,t){var r=H(e),a=r.on,l=r.emit,i=r.bind,s=r.unbind,c=e.state,v=n.Move,o=n.Scroll,m=n.Controller,d=n.Elements.track,g=n.Media.reduce,u=n.Direction,f=u.resolve,_=u.orient,A=v.getPosition,h=v.exceededLimit,E,P,b,M,T,O=!1,k,w,L;function I(){i(d,It,Rt,Oe),i(d,Nt,Rt,Oe),i(d,kn,V,Oe),i(d,"click",B,{capture:!0}),i(d,"dragstart",ce),a([Re,Q],N)}function N(){var R=t.drag;Xt(!R),M=R==="free"}function V(R){if(k=!1,!w){var W=j(R);X(R.target)&&(W||!R.button)&&(m.isBusy()?ce(R,!0):(L=W?d:window,T=c.is([Me,qe]),b=null,i(L,It,F,Oe),i(L,Nt,Y,Oe),v.cancel(),o.cancel(),p(R)))}}function F(R){if(c.is(it)||(c.set(it),l(jn)),R.cancelable)if(T){v.translate(E+Z(q(R)));var W=ge(R)>un,Te=O!==(O=h());(W||Te)&&p(R),k=!0,l(Zn),ce(R)}else D(R)&&(T=S(R),ce(R))}function Y(R){c.is(it)&&(c.set(Pe),l(Jn)),T&&(C(R),ce(R)),s(L,It,F),s(L,Nt,Y),T=!1}function B(R){!w&&k&&ce(R,!0)}function p(R){b=P,P=R,E=A()}function C(R){var W=G(R),Te=$(W),Fe=t.rewind&&t.rewindByDrag;g(!1),M?m.scroll(Te,0,t.snap):e.is(nt)?m.go(_(Ot(W))<0?Fe?"<":"-":Fe?">":"+"):e.is(pe)&&O&&Fe?m.go(h(!0)?">":"<"):m.go(m.toDest(Te),!0),g(!0)}function S(R){var W=t.dragMinThreshold,Te=ze(W),Fe=Te&&W.mouse||0,zn=(Te?W.touch:+W)||10;return J(q(R))>(j(R)?zn:Fe)}function D(R){return J(q(R))>J(q(R,!0))}function G(R){if(e.is(xe)||!O){var W=ge(R);if(W&&W<un)return q(R)/W}return 0}function $(R){return A()+Ot(R)*me(J(R)*(t.flickPower||600),M?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function q(R,W){return z(R,W)-z(y(R),W)}function ge(R){return bt(R)-bt(y(R))}function y(R){return P===R&&b||P}function z(R,W){return(j(R)?R.changedTouches[0]:R)["page"+f(W?"Y":"X")]}function Z(R){return R/(O&&e.is(pe)?Tr:1)}function X(R){var W=t.noDrag;return!Ue(R,"."+pn+", ."+_t)&&(!W||!Ue(R,W))}function j(R){return typeof TouchEvent<"u"&&R instanceof TouchEvent}function Gn(){return T}function Xt(R){w=R}return{mount:I,disable:Xt,isDragging:Gn}}var Br={Spacebar:" ",Right:ht,Left:Et,Up:Rn,Down:bn};function Yt(e){return e=he(e)?e:e.key,Br[e]||e}var sn="keydown";function Hr(e,n,t){var r=H(e),a=r.on,l=r.bind,i=r.unbind,s=e.root,c=n.Direction.resolve,v,o;function m(){d(),a(Q,g),a(Q,d),a(Ae,f)}function d(){var A=t.keyboard;A&&(v=A==="global"?window:s,l(v,sn,_))}function g(){i(v,sn)}function u(A){o=A}function f(){var A=o;o=!0,cn(function(){o=A})}function _(A){if(!o){var h=Yt(A);h===c(Et)?e.go("<"):h===c(ht)&&e.go(">")}}return{mount:m,destroy:g,disable:u}}var Ge=Ft+"-lazy",ut=Ge+"-srcset",Yr="["+Ge+"], ["+ut+"]";function Xr(e,n,t){var r=H(e),a=r.on,l=r.off,i=r.bind,s=r.emit,c=t.lazyLoad==="sequential",v=[et,Ve],o=[];function m(){t.lazyLoad&&(d(),a(K,d))}function d(){de(o),g(),c?A():(l(v),a(v,u),u())}function g(){n.Slides.forEach(function(h){xt(h.slide,Yr).forEach(function(E){var P=ie(E,Ge),b=ie(E,ut);if(P!==E.src||b!==E.srcset){var M=t.classes.spinner,T=E.parentElement,O=Je(T,"."+M)||Ce("span",M,T);o.push([E,h,O]),E.src||He(E,"none")}})})}function u(){o=o.filter(function(h){var E=t.perPage*((t.preloadPages||1)+1)-1;return h[1].isWithin(e.index,E)?f(h):!0}),o.length||l(v)}function f(h){var E=h[0];oe(h[1].slide,wt),i(E,"load error",U(_,h)),x(E,"src",ie(E,Ge)),x(E,"srcset",ie(E,ut)),ue(E,Ge),ue(E,ut)}function _(h,E){var P=h[0],b=h[1];ve(b.slide,wt),E.type!=="error"&&(Ie(h[2]),He(P,""),s(Ln,P,b),s(Xe)),c&&A()}function A(){o.length&&f(o.shift())}return{mount:m,destroy:U(de,o),check:u}}function Kr(e,n,t){var r=H(e),a=r.on,l=r.emit,i=r.bind,s=n.Slides,c=n.Elements,v=n.Controller,o=v.hasFocus,m=v.getIndex,d=v.go,g=n.Direction.resolve,u=c.pagination,f=[],_,A;function h(){E(),a([Q,K,vt],h);var w=t.pagination;u&&He(u,w?"":"none"),w&&(a([Ae,zt,Ve],k),P(),k(),l(nr,{list:_,items:f},O(e.index)))}function E(){_&&(Ie(u?_e(_.children):_),ve(_,A),de(f),_=null),r.destroy()}function P(){var w=e.length,L=t.classes,I=t.i18n,N=t.perPage,V=o()?v.getEnd()+1:Ye(w/N);_=u||Ce("ul",L.pagination,c.track.parentElement),oe(_,A=yt+"--"+T()),x(_,le,"tablist"),x(_,te,I.select),x(_,Wt,T()===mt?"vertical":"");for(var F=0;F<V;F++){var Y=Ce("li",null,_),B=Ce("button",{class:L.page,type:"button"},Y),p=s.getIn(F).map(function(S){return S.slide.id}),C=!o()&&N>1?I.pageX:I.slideX;i(B,"click",U(b,F)),t.paginationKeyboard&&i(B,"keydown",U(M,F)),x(Y,le,"presentation"),x(B,le,"tab"),x(B,tt,p.join(" ")),x(B,te,Dt(C,F+1)),x(B,we,-1),f.push({li:Y,button:B,page:F})}}function b(w){d(">"+w,!0)}function M(w,L){var I=f.length,N=Yt(L),V=T(),F=-1;N===g(ht,!1,V)?F=++w%I:N===g(Et,!1,V)?F=(--w+I)%I:N==="Home"?F=0:N==="End"&&(F=I-1);var Y=f[F];Y&&(dn(Y.button),d(">"+F),ce(L,!0))}function T(){return t.paginationDirection||t.direction}function O(w){return f[v.toPage(w)]}function k(){var w=O(m(!0)),L=O(m());if(w){var I=w.button;ve(I,Ne),ue(I,tn),x(I,we,-1)}if(L){var N=L.button;oe(N,Ne),x(N,tn,!0),x(N,we,"")}l(rr,{list:_,items:f},w,L)}return{items:f,mount:h,destroy:E,getAt:O,update:k}}var qr=[" ","Enter"];function $r(e,n,t){var r=t.isNavigation,a=t.slideFocus,l=[];function i(){e.splides.forEach(function(u){u.isParent||(v(e,u.splide),v(u.splide,e))}),r&&o()}function s(){l.forEach(function(u){u.destroy()}),de(l)}function c(){s(),i()}function v(u,f){var _=H(u);_.on(Ae,function(A,h,E){f.go(f.is(xe)?E:A)}),l.push(_)}function o(){var u=H(e),f=u.on;f(An,d),f(In,g),f([Re,Q],m),l.push(u),u.emit(yn,e.splides)}function m(){x(n.Elements.list,Wt,t.direction===mt?"vertical":"")}function d(u){e.go(u.index)}function g(u,f){Mt(qr,Yt(f))&&(d(u),ce(f))}return{setup:U(n.Media.set,{slideFocus:$e(a)?r:a},!0),mount:i,destroy:s,remount:c}}function jr(e,n,t){var r=H(e),a=r.bind,l=0;function i(){t.wheel&&a(n.Elements.track,"wheel",s,Oe)}function s(v){if(v.cancelable){var o=v.deltaY,m=o<0,d=bt(v),g=t.wheelMinThreshold||0,u=t.wheelSleep||0;J(o)>g&&d-l>u&&(e.go(m?"<":">"),l=d),c(m)&&ce(v)}}function c(v){return!t.releaseWheel||e.state.is(Me)||n.Controller.getAdjacent(v)!==-1}return{mount:i}}var Zr=90;function Jr(e,n,t){var r=H(e),a=r.on,l=n.Elements.track,i=t.live&&!t.isNavigation,s=Ce("span",hr),c=dt(Zr,U(o,!1));function v(){i&&(d(!n.Autoplay.isPaused()),x(l,an,!0),s.textContent="…",a(Tn,U(d,!0)),a(Sn,U(d,!1)),a([et,Ve],U(o,!0)))}function o(g){x(l,rn,g),g?(Ze(l,s),c.start()):(Ie(s),c.cancel())}function m(){ue(l,[nn,an,rn]),Ie(s)}function d(g){i&&x(l,nn,g?"off":"polite")}return{mount:v,disable:d,destroy:m}}var Qr=Object.freeze({__proto__:null,Media:ur,Direction:sr,Elements:Sr,Slides:Ir,Layout:Nr,Clones:br,Move:Or,Controller:Dr,Arrows:Pr,Autoplay:Mr,Cover:Vr,Scroll:Ur,Drag:Wr,Keyboard:Hr,LazyLoad:Xr,Pagination:Kr,Sync:$r,Wheel:jr,Live:Jr}),ei={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ti={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:_r,i18n:ei,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ni(e,n,t){var r=n.Slides;function a(){H(e).on([Re,K],l)}function l(){r.forEach(function(s){s.style("transform","translateX(-"+100*s.index+"%)")})}function i(s,c){r.style("transition","opacity "+t.speed+"ms "+t.easing),cn(c)}return{mount:a,start:i,cancel:Rt}}function ri(e,n,t){var r=n.Move,a=n.Controller,l=n.Scroll,i=n.Elements.list,s=U(re,i,"transition"),c;function v(){H(e).bind(i,"transitionend",function(g){g.target===i&&c&&(m(),c())})}function o(g,u){var f=r.toPosition(g,!0),_=r.getPosition(),A=d(g);J(f-_)>=1&&A>=1?t.useScroll?l.scroll(f,A,!1,u):(s("transform "+A+"ms "+t.easing),r.translate(f,!0),c=u):(r.jump(g),u())}function m(){s(""),l.cancel()}function d(g){var u=t.rewindSpeed;if(e.is(pe)&&u){var f=a.getIndex(!0),_=a.getEnd();if(f===0&&g>=_||f>=_&&g===0)return u}return t.speed}return{mount:v,start:o,cancel:m}}var ii=function(){function e(t,r){this.event=H(),this.Components={},this.state=ar(De),this.splides=[],this._o={},this._E={};var a=he(t)?En(document,t):t;ke(a,a+" is invalid."),this.root=a,r=Ee({label:ie(a,te)||"",labelledby:ie(a,Ut)||""},ti,e.defaults,r||{});try{Ee(r,JSON.parse(ie(a,Ft)))}catch{ke(!1,"Invalid JSON")}this._o=Object.create(Ee({},r))}var n=e.prototype;return n.mount=function(r,a){var l=this,i=this.state,s=this.Components;ke(i.is([De,st]),"Already mounted!"),i.set(De),this._C=s,this._T=a||this._T||(this.is(nt)?ni:ri),this._E=r||this._E;var c=Be({},Qr,this._E,{Transition:this._T});return Le(c,function(v,o){var m=v(l,s,l._o);s[o]=m,m.setup&&m.setup()}),Le(s,function(v){v.mount&&v.mount()}),this.emit(Re),oe(this.root,mr),i.set(Pe),this.emit(Qt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Pe)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,a){return this.event.on(r,a),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var a;return(a=this.event).emit.apply(a,[r].concat(_e(arguments,1))),this},n.add=function(r,a){return this._C.Slides.add(r,a),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(K),this},n.destroy=function(r){r===void 0&&(r=!0);var a=this.event,l=this.state;return l.is(De)?H(this).on(Qt,this.destroy.bind(this,r)):(Le(this._C,function(i){i.destroy&&i.destroy(r)},!0),a.emit(_n),a.destroy(),r&&de(this.splides),l.set(st)),this},Wn(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Tt=ii;Tt.defaults={};Tt.STATES=Hn;document.addEventListener("DOMContentLoaded",()=>{try{var e=new Tt("#news",{type:"slide",perPage:1,gap:"2rem",paginationKeyboard:!0,pagination:!1,keyboard:"focused",focus:"center",start:1,easing:"ease",waitForTransition:!0,updateOnMove:!0,trimSpace:!1,padding:"0",mediaQuery:"min",breakpoints:{320:{start:0,perPage:1.2},768:{perPage:3,start:2}}});e.mount()}catch{}});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-story-slider]").forEach((n,t)=>{try{var r=new Tt(n,{type:"slide",perPage:2,gap:"2rem",paginationKeyboard:!0,keyboard:"focused",focus:"center",start:0,easing:"ease",waitForTransition:!0,updateOnMove:!0,autoWidth:!0});r.mount()}catch(a){console.log(t),console.log(a)}})});