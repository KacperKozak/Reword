(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,n,t){e.exports=t(99)},97:function(e,n,t){},99:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"home",function(){return b}),t.d(r,"play",function(){return p}),t.d(r,"plus",function(){return v}),t.d(r,"profile",function(){return g}),t.d(r,"words",function(){return h});var a=t(0),o=t.n(a),i=t(22),c=t.n(i),l=t(105),u=t(2),s=t(8),d=t(3),m="#9438EA",f="#FFFFFF",b=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"}))},p=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 61 61"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.4792 30.5L16.5208 48.2917V12.7083L44.4792 30.5ZM34.9988 30.5L21.6042 21.96V39.04L34.9988 30.5Z"}))},v=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"}))},g=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"}))},h=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM17.5 12.67L15.88 17H19.12L17.5 12.67Z"}))};function E(){var e=Object(u.a)(["\n    display: ",";\n    vertical-align: middle;\n    svg {\n        display: block;\n        margin: auto;\n        fill: currentColor;\n    }\n"]);return E=function(){return e},e}var O,y={normal:24,large:62},j=function(e){var n=e.name,t=e.size,a=void 0===t?"normal":t,i=e.block,c=void 0!==i&&i;return o.a.createElement(w,{block:c},r[n](y[a]))},w=d.b.div(E(),function(e){return e.block?"block":"inline-block"});function x(){var e=Object(u.a)(["\n    transition: all 0 ease;\n    opacity: 0.3;\n    transform: scale(1);\n    background: rgba(255, 255, 255, 0);\n"]);return x=function(){return e},e}function k(){var e=Object(u.a)(["\n    transition: all ",";\n    opacity: 0;\n    transform: scale(2);\n    background: ",";\n"]);return k=function(){return e},e}function C(){var e=Object(u.a)(["\n    color: ",";\n    display: block;\n    background: none;\n    border: none;\n    padding: 10px 25px;\n    position: relative;\n    line-height: 1.5em;\n    &::after {\n        content: '';\n        display: block;\n        border-radius: 100%;\n        height: 60px;\n        width: 60px;\n        position: absolute;\n        margin: auto;\n        top: -50px;\n        bottom: -50px;\n        left: -50px;\n        right: -50px;\n        ",";\n    }\n    &:active::after {\n        transition: opacity 0.6s ease-out, background 0.6s ease-out, transform 1s ease-out;\n        opacity: 0.1;\n        transform: scale(1.2);\n        background: ",";\n    }\n"]);return C=function(){return e},e}function S(){var e=Object(u.a)(["\n    background: ",";\n    display: flex;\n    width: 100%;\n    min-height: ","px;\n    justify-content: space-evenly;\n    box-shadow: ",";\n    overflow: hidden;\n"]);return S=function(){return e},e}!function(e){e.Home="home",e.Words="words",e.Settings="settings",e.Game="game"}(O||(O={}));var R=function(e){return a.createElement(H,null,a.createElement(W,{isActive:e.active===O.Home,onClick:function(){return e.onChange(O.Home)}},a.createElement(j,{name:"home",block:!0}),"Home"),a.createElement(W,{isActive:e.active===O.Words,onClick:function(){return e.onChange(O.Words)}},a.createElement(j,{name:"words",block:!0}),"Words"),a.createElement(W,{isActive:e.active===O.Settings,onClick:function(){return e.onChange(O.Settings)}},a.createElement(j,{name:"profile",block:!0}),"Settings"))},H=d.b.nav(S(),f,60,"0 0 10px rgba(0, 0, 0, 0.1)"),W=d.b.button(C(),function(e){return e.isActive?m:"rgba(0, 0, 0, 0.6)"},function(e){return e.isActive?L:V},m),L=Object(d.a)(k(),"0.2s ease",m),V=Object(d.a)(x()),D=t(5),z=t(23),A=t(47),M=t.n(A),T="' ,",N=["qwertyuiop","asdfghjkl","zxcvbnm",T].map(function(e){return e.split("")}),Z=function(e,n,t){var r=t?M()(e+n)():0;return{key:e,visible:n.includes(e)||t>r&&!T.includes(e)}};function B(){var e=Object(u.a)(["\n    &:active {\n        outline: none;\n        background-color: ",";\n        color: ",";\n    }\n"]);return B=function(){return e},e}function F(){var e=Object(u.a)(["\n    width: ",";\n    height: 7vh;\n    padding: 0;\n    margin: 0 4px;\n    border: 2px solid ",";\n    opacity: ",";\n    border-radius: 4px;\n    color: ",";\n    font-weight: bold;\n    font-size: 24px;\n    text-align: center;\n    background: none;\n    transition: all ",";\n\n    ","\n"]);return F=function(){return e},e}var I=function(e){return o.a.createElement(P,{visible:e.visible,onClick:e.onClick,isSpace:" "===e.symbol},e.symbol,o.a.createElement(z.b,{keyEventName:z.a,keyValue:e.symbol,onKeyHandle:e.onClick}))},P=d.b.button(F(),function(e){return e.isSpace?"47vw":"8vw"},m,function(e){return e.visible?1:.1},m,"0.2s ease",function(e){return e.visible&&_}),_=Object(d.a)(B(),m,f);function G(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 5px 0;\n"]);return G=function(){return e},e}function U(){var e=Object(u.a)(["\n    padding: 0 0 50px;\n    background: ",";\n    box-shadow: ",";\n"]);return U=function(){return e},e}var J=function(e){return o.a.createElement(K,null,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=e.toLowerCase();return N.map(function(e){return e.map(function(e){return Z(e,t,n)})})}(e.word,e.fakeKeys).map(function(n,t){return o.a.createElement(X,{key:t},n.map(function(n){return o.a.createElement(I,{key:n.key,symbol:n.key,visible:n.visible,onClick:function(){n.visible&&e.onPress(n.key)}})}))}))},K=d.b.div(U(),f,"0 0 10px rgba(0, 0, 0, 0.1)"),X=d.b.div(G()),Y=t(27),q=t.n(Y),$=t(13);function Q(){var e=Object(u.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 -0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return Q=function(){return e},e}var ee=function(){var e=Object($.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-0.3em) scaleX(3)"}});return o.a.createElement(ne,{style:e})},ne=Object(d.b)($.a.span)(Q(),m);function te(){var e=Object(u.a)(["\n    display: inline-block;\n    text-align: center;\n    position: relative;\n    margin: 0 0.025em;\n    height: 100%;\n    min-width: 25px;\n    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n    transform: ",";\n    color: ",";\n\n    &::after {\n        content: '*';\n        position: absolute;\n        text-align: center;\n        top: 0.5em;\n        left: 0;\n        right: 0;\n        line-height: 0.5em;\n        height: 20px;\n        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n        color: ",";\n        transform: ",";\n        opacity: ",";\n    }\n"]);return te=function(){return e},e}function re(){var e=Object(u.a)(["\n    display: inline-block;\n    line-height: 1em;\n    height: 90px;\n    margin: 0 1px;\n    vertical-align: middle;\n    position: relative;\n"]);return re=function(){return e},e}function ae(){var e=Object(u.a)(["\n    white-space: nowrap;\n    position: relative;\n    width: 100%;\n"]);return ae=function(){return e},e}function oe(){var e=Object(u.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n    padding: 0px 25px;\n    overflow: hidden;\n    height: 2em;\n    width: 100%;\n    line-height: 2em;\n"]);return oe=function(){return e},e}var ie,ce=function(e){var n=e.word,t=e.progress,r=n.substr(0,t);return o.a.createElement(le,null,o.a.createElement(q.a,{widthOnly:!0,maxFontSize:74},o.a.createElement(ue,null,n.split("").map(function(e,n){return o.a.createElement(se,{key:e+n},n===t&&o.a.createElement(ee,{key:r}),o.a.createElement(de,{letterState:t<=n},e))}))))},le=d.b.div(oe()),ue=d.b.div(ae()),se=d.b.span(re()),de=d.b.span(te(),function(e){return e.letterState?"scale(0.5)":"scale(1)"},function(e){return e.letterState?"rgba(255,255,255,0)":"#000000"},"rgba(0, 0, 0, 0.3)",function(e){return e.letterState?"scale(2)":"scale(0)"},function(e){return e.letterState?1:0}),me=t(48),fe={loading:!0,route:O.Home,lastRoutes:[],words:[]},be=t(20),pe=t(12),ve=t(49),ge=t.n(ve),he=Object(me.a)((ie=function(e,n){switch(n.type){case"APP/SET_LOADING":return Object(pe.a)({},e,{loading:n.payload});case"ROUTER/SET_ROUTE":return Object(pe.a)({},e,{route:n.payload.route,lastRoutes:[e.route].concat(Object(be.a)(e.lastRoutes))});case"ROUTER/BACK":return Object(pe.a)({},e,{route:e.lastRoutes[0],lastRoutes:e.lastRoutes.slice(1)});case"WORDS/SET":return Object(pe.a)({},e,{words:n.payload});case"WORDS/ADD_WORD":return Object(pe.a)({},e,{words:[].concat(Object(be.a)(e.words),[Object(pe.a)({id:ge()()},n.payload)])});case"WORDS/REMOVE_WORD":return Object(pe.a)({},e,{words:e.words.filter(function(e){return e.id!==n.payload.id})});default:throw new Error("[reducer] Unknown action type!")}},function(e,n){return console.log("\u2192",n.type,n.payload),ie(e,n)}),fe),Ee=he.GlobalStateProvider,Oe=he.dispatch,ye=he.useGlobalState,je=function(){var e=ye("route");return{route:Object(D.a)(e,1)[0],setRoute:function(e){Oe({type:"ROUTER/SET_ROUTE",payload:{route:e}})},goBack:function(){Oe({type:"ROUTER/BACK"})}}},we=function(){var e=ye("words"),n=Object(D.a)(e,1)[0];return{words:n,addWord:function(e,n,t){Oe({type:"WORDS/ADD_WORD",payload:{name:e,translation:n,example:t}})},removeWord:function(e){Oe({type:"WORDS/REMOVE_WORD",payload:{id:e}})},randomWord:function(){return n[Math.floor(Math.random()*n.length)]}}};function xe(){var e=Object(u.a)(["\n    padding: 30px 50px;\n    border: none;\n    color: ",";\n    background: ",";\n    border-radius: 4px;\n    box-shadow: ",";\n    font-weight: bold;\n    font-size: 24px;\n"]);return xe=function(){return e},e}function ke(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(u.a)(["\n    width: 100%;\n    position: relative;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(u.a)(["\n    width: 100%;\n    flex: 1 0 auto;\n"]);return Se=function(){return e},e}function Re(){var e=Object(u.a)(["\n    /* display: grid; */\n    /* grid-template-rows: 1fr 2fr auto; */\n    height: 100%;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n    overflow: hidden;\n"]);return Re=function(){return e},e}var He=d.b.div(Re()),We=d.b.div(Se()),Le=d.b.div(Ce()),Ve=d.b.div(ke()),De=d.b.button(xe(),f,"#AED900","2px 2px 7px rgba(0, 0, 0, 0.1)");function ze(){var e=Object(u.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return ze=function(){return e},e}function Ae(){var e=Object(u.a)(["\n    display: inline-block;\n"]);return Ae=function(){return e},e}function Me(){var e=Object(u.a)(["\n    display: inline-block;\n"]);return Me=function(){return e},e}function Te(){var e=Object(u.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n"]);return Te=function(){return e},e}var Ne=function(){var e=Object($.b)({opacity:1,transform:"translate(0)",delay:200,from:{opacity:0,transform:"translate(-0.2em)"}}),n=Object($.b)({opacity:1,transform:"translate(0)",delay:300,from:{opacity:0,transform:"translate(-0.2em)"}}),t=Object($.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-1.2em) scaleX(5)"}});return o.a.createElement(Ze,null,o.a.createElement(Be,{style:e},"Re"),o.a.createElement(Ie,{style:t}),o.a.createElement(Fe,{style:n},"word"))},Ze=d.b.h1(Te()),Be=Object(d.b)($.a.span)(Me()),Fe=Object(d.b)($.a.span)(Ae()),Ie=Object(d.b)($.a.span)(ze(),m);function Pe(){var e=Object(u.a)(["\n    background: ",";\n    border: none;\n    box-shadow: ",";\n    width: ",";\n    height: ",";\n    max-width: 260px;\n    max-height: 260px;\n    border-radius: 100%;\n    color: ",";\n    font-size: 36px;\n"]);return Pe=function(){return e},e}var _e=function(e){var n=je().setRoute;return e.loading?o.a.createElement(Ge,null,"Loading"):e.words.length?o.a.createElement(Ge,{onClick:function(){return n(O.Game)}},o.a.createElement(j,{name:"play",size:"large",block:!0}),"Play"):o.a.createElement(Ge,{onClick:function(){return n(O.Words)}},o.a.createElement(j,{name:"plus",size:"large",block:!0}),"Word")},Ge=d.b.button(Pe(),f,"2px 2px 7px rgba(0, 0, 0, 0.1)","45vmin","45vmin",m);function Ue(){var e=Object(u.a)(["\n    padding: 25px;\n    text-align: center;\n"]);return Ue=function(){return e},e}function Je(){var e=Object(u.a)(["\n    display: grid;\n    height: 100%;\n    grid-auto-rows: 1fr 3fr 1fr;\n    align-items: center;\n    justify-items: center;\n"]);return Je=function(){return e},e}var Ke=d.b.div(Je()),Xe=d.b.div(Ue()),Ye=function(e){return o.a.createElement("header",null,o.a.createElement(j,{name:e.iconName,size:"large"}),o.a.createElement("h1",null,e.title),e.children)};function qe(){var e=Object(u.a)([""]);return qe=function(){return e},e}var $e=function(e){return o.a.createElement(Qe,{type:"search",value:e.value,onChange:function(n){return e.onChange(n.target.value)},placeholder:"Search\u2026"})},Qe=d.b.input(qe());function en(){var e=Object(u.a)(["\n    position: fixed;\n    bottom: 100px;\n    right: 10px;\n"]);return en=function(){return e},e}var nn=function(e){return o.a.createElement(tn,{onClick:e.onClick},o.a.createElement(j,{name:e.iconName,size:"normal"}))},tn=d.b.button(en()),rn=function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("b",null,e.word.name)),o.a.createElement("td",null,o.a.createElement("i",null,e.word.translation)),o.a.createElement("td",null,e.word.example&&o.a.createElement("small",null,e.word.example)),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return e.removeWord(e.word.id)}},"x")))};function an(){var e=Object(u.a)(["\n    animation: "," 0.4s ease forwards;\n"]);return an=function(){return e},e}function on(){var e=Object(u.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return on=function(){return e},e}function cn(){var e=Object(u.a)(["\n    animation: "," 0.4s ease forwards;\n"]);return cn=function(){return e},e}function ln(){var e=Object(u.a)(["\n  from {\n    transform: translateY(60px) scale(0.8);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n"]);return ln=function(){return e},e}var un=Object(d.c)(ln()),sn=Object(d.a)(cn(),un),dn=Object(d.c)(on()),mn=Object(d.a)(an(),dn);function fn(){var e=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.1);\n    z-index: 100;\n    ",";\n"]);return fn=function(){return e},e}function bn(){var e=Object(u.a)(["\n    position: fixed;\n    left: 10px;\n    right: 10px;\n    bottom: 0;\n    background: red;\n    z-index: 999999;\n    ",";\n"]);return bn=function(){return e},e}var pn,vn=function(e){return c.a.createPortal(o.a.createElement(o.a.Fragment,null,o.a.createElement(hn,null,e.children,e.footer&&e.footer()),o.a.createElement(En,{onClick:e.close})),gn)},gn=document.getElementById("modals"),hn=d.b.div(bn(),sn),En=d.b.div(fn(),mn);function On(){var e=Object(u.a)(["\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n"]);return On=function(){return e},e}function yn(){var e=Object(u.a)(["\n    height: calc(100% - ","px);\n    position: relative;\n    width: 100%;\n    overflow-y: auto;\n"]);return yn=function(){return e},e}var jn=(pn={},Object(s.a)(pn,O.Home,function(){var e=ye("loading"),n=Object(D.a)(e,1)[0],t=we().words;return o.a.createElement(Ke,null,o.a.createElement(Ne,null),o.a.createElement(Ke,null,o.a.createElement(_e,{words:t,loading:n})),o.a.createElement(Xe,null,!n&&o.a.createElement(o.a.Fragment,null,"You added ",o.a.createElement("b",null,t.length)," words")))}),Object(s.a)(pn,O.Words,function(){var e=we(),n=e.words,t=e.addWord,r=e.removeWord,i=Object(a.useState)(""),c=Object(D.a)(i,2),l=c[0],u=c[1],s=Object(a.useState)(!1),d=Object(D.a)(s,2),m=d[0],f=d[1],b=Object(a.useState)(""),p=Object(D.a)(b,2),v=p[0],g=p[1],h=Object(a.useState)(""),E=Object(D.a)(h,2),O=E[0],y=E[1],j=Object(a.useState)(""),w=Object(D.a)(j,2),x=w[0],k=w[1],C=function(){t(v.trim(),O.trim(),x.trim()),g(""),y(""),k("")};return o.a.createElement("div",null,o.a.createElement(Ye,{title:"Words",iconName:"words"},o.a.createElement($e,{value:l,onChange:u})),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Word"),o.a.createElement("td",null,"Translation"),o.a.createElement("td",null,"Example"))),o.a.createElement("tbody",null,n.filter(function(e){return e.name.includes(l)}).map(function(e){return o.a.createElement(rn,{key:e.id,word:e,removeWord:r})}))),o.a.createElement(nn,{onClick:function(){return f(!m)},iconName:"plus"}),m&&o.a.createElement(vn,{footer:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return f(!1)}},"Close"),o.a.createElement("button",{onClick:C},"Zapisz"))},close:function(){return f(!1)}},o.a.createElement("div",null,"Word:",o.a.createElement("input",{type:"text",value:v,onChange:function(e){return g(e.target.value)}})),o.a.createElement("div",null,"Translation:",o.a.createElement("input",{type:"text",value:O,onChange:function(e){return y(e.target.value)}})),o.a.createElement("div",null,"Example:",o.a.createElement("input",{type:"text",value:x,onChange:function(e){return k(e.target.value)}}))))}),Object(s.a)(pn,O.Settings,function(){var e=je().setRoute;return a.createElement("div",null,a.createElement(Ye,{title:"Settings",iconName:"profile"}),a.createElement("button",{onClick:function(){return e(O.Home)}},"Save settings"))}),Object(s.a)(pn,O.Game,function(){var e=je().goBack,n=we().randomWord,t=Object(a.useState)(0),r=Object(D.a)(t,2),i=r[0],c=r[1],l=Object(a.useState)(n()),u=Object(D.a)(l,2),s=u[0],d=u[1],m=s.name.substr(i),f=i===s.name.length,b=function(){d(n()),c(0)};return o.a.createElement(He,null,o.a.createElement(We,null,o.a.createElement(q.a,{maxFontSize:24},o.a.createElement("div",null,o.a.createElement("h1",null,s.translation),o.a.createElement("h5",null,f?s.example:"\xa0")))),o.a.createElement(We,null,o.a.createElement(ce,{word:s.name,progress:i,key:s.name}),o.a.createElement("button",{onClick:e},"Cancel")),o.a.createElement(Le,null,o.a.createElement(J,{word:m,onPress:function(e){e===s.name[i].toLocaleLowerCase()&&c(i+1)}}),f&&o.a.createElement(Ve,null,o.a.createElement("h2",null,"Done!"),o.a.createElement(De,{onClick:b},"Next word",o.a.createElement(j,{name:"play"})),o.a.createElement(z.b,{keyEventName:z.a,keyValue:"Enter",onKeyHandle:b}))))}),pn),wn=d.b.main(yn(),60),xn=d.b.div(On());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(97);var kn=t(10),Cn=t(18),Sn=t(14),Rn=t(11),Hn=t(15),Wn=t(21),Ln=function(e){function n(){var e,t;Object(kn.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(Sn.a)(this,(e=Object(Rn.a)(n)).call.apply(e,[this].concat(a)))).state={error:null,eventId:null},t.handleReportDialog=function(){l.b({eventId:t.state.eventId})},t}return Object(Hn.a)(n,e),Object(Cn.a)(n,[{key:"componentDidCatch",value:function(e,n){var t=this;this.setState({error:e}),Wn.b(function(r){r.setExtras(n),t.setState({eventId:Wn.a(e)})})}},{key:"render",value:function(){return this.state.error?o.a.createElement("div",null,o.a.createElement("h1",null,"Error occurred ;("),o.a.createElement("a",{onClick:this.handleReportDialog},"Report feedback"),o.a.createElement("pre",null,JSON.stringify(this.state.error,null,2))):this.props.children}}]),n}(a.Component);l.a({dsn:"https://adf49e52f07d479098537009eb0044b0@sentry.io/1446350"}),Object(i.render)(o.a.createElement(Ln,null,o.a.createElement(Ee,null,o.a.createElement(function(){!function(){var e=ye("words"),n=Object(D.a)(e,1)[0];Object(a.useEffect)(function(){n.length&&localStorage.setItem("words",JSON.stringify(n))},[n]),Object(a.useEffect)(function(){var e=localStorage.getItem("words");if(e){var n=JSON.parse(e);setTimeout(function(){Oe({type:"WORDS/SET",payload:n}),Oe({type:"APP/SET_LOADING",payload:!1})},500)}else Oe({type:"APP/SET_LOADING",payload:!1})},[])}();var e=je(),n=e.route,t=e.setRoute,r=jn[n];return o.a.createElement(o.a.Fragment,null,o.a.createElement(wn,null,o.a.createElement(r,null)),o.a.createElement(xn,null,o.a.createElement(R,{active:n,onChange:t})))},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.5d24967c.chunk.js.map