(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,n,t){e.exports=t(79)},78:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"home",function(){return m}),t.d(r,"play",function(){return f}),t.d(r,"plus",function(){return b}),t.d(r,"profile",function(){return p}),t.d(r,"words",function(){return v});var a=t(0),o=t.n(a),i=t(9),l=t(1),c=t(4),u=t(2),s="#9438EA",d="#FFFFFF",m=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"}))},f=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 61 61"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.4792 30.5L16.5208 48.2917V12.7083L44.4792 30.5ZM34.9988 30.5L21.6042 21.96V39.04L34.9988 30.5Z"}))},b=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"}))},p=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"}))},v=function(e){return o.a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM17.5 12.67L15.88 17H19.12L17.5 12.67Z"}))};function g(){var e=Object(l.a)(["\n    display: ",";\n    vertical-align: middle;\n    svg {\n        display: block;\n        margin: auto;\n        fill: currentColor;\n    }\n"]);return g=function(){return e},e}var h,E={normal:24,large:62},O=function(e){var n=e.name,t=e.size,a=void 0===t?"normal":t,i=e.block,l=void 0!==i&&i;return o.a.createElement(y,{block:l},r[n](E[a]))},y=u.b.div(g(),function(e){return e.block?"block":"inline-block"});function w(){var e=Object(l.a)(["\n    transition: all 0 ease;\n    opacity: 0.3;\n    transform: scale(1);\n    background: rgba(255, 255, 255, 0);\n"]);return w=function(){return e},e}function x(){var e=Object(l.a)(["\n    transition: all ",";\n    opacity: 0;\n    transform: scale(2);\n    background: ",";\n"]);return x=function(){return e},e}function j(){var e=Object(l.a)(["\n    color: ",";\n    display: block;\n    background: none;\n    border: none;\n    padding: 10px 25px;\n    position: relative;\n    line-height: 1.5em;\n    &::after {\n        content: '';\n        display: block;\n        border-radius: 100%;\n        height: 60px;\n        width: 60px;\n        position: absolute;\n        margin: auto;\n        top: -50px;\n        bottom: -50px;\n        left: -50px;\n        right: -50px;\n        ",";\n    }\n    &:active::after {\n        transition: opacity 0.6s ease-out, background 0.6s ease-out, transform 1s ease-out;\n        opacity: 0.1;\n        transform: scale(1.2);\n        background: ",";\n    }\n"]);return j=function(){return e},e}function k(){var e=Object(l.a)(["\n    background: ",";\n    display: flex;\n    width: 100%;\n    min-height: ","px;\n    justify-content: space-evenly;\n    box-shadow: ",";\n    overflow: hidden;\n"]);return k=function(){return e},e}!function(e){e.Home="home",e.Words="words",e.Settings="settings",e.Game="game"}(h||(h={}));var C=function(e){return a.createElement(S,null,a.createElement(R,{isActive:e.active===h.Home,onClick:function(){return e.onChange(h.Home)}},a.createElement(O,{name:"home",block:!0}),"Home"),a.createElement(R,{isActive:e.active===h.Words,onClick:function(){return e.onChange(h.Words)}},a.createElement(O,{name:"words",block:!0}),"Words"),a.createElement(R,{isActive:e.active===h.Settings,onClick:function(){return e.onChange(h.Settings)}},a.createElement(O,{name:"profile",block:!0}),"Settings"))},S=u.b.nav(k(),d,60,"0 0 10px rgba(0, 0, 0, 0.1)"),R=u.b.button(j(),function(e){return e.isActive?s:"rgba(0, 0, 0, 0.6)"},function(e){return e.isActive?H:L},s),H=Object(u.a)(x(),"0.2s ease",s),L=Object(u.a)(w()),W=t(3),V=t(29),D=t.n(V),A="' ,",M=["qwertyuiop","asdfghjkl","zxcvbnm",A].map(function(e){return e.split("")}),T=function(e,n,t){var r=t?D()(e+n)():0;return{key:e,visible:n.includes(e)||t>r&&!A.includes(e)}};function z(){var e=Object(l.a)(["\n    &:active {\n        outline: none;\n        background-color: ",";\n        color: ",";\n    }\n"]);return z=function(){return e},e}function Z(){var e=Object(l.a)(["\n    width: ",";\n    height: 7vh;\n    padding: 0;\n    margin: 0 4px;\n    border: 2px solid ",";\n    opacity: ",";\n    border-radius: 4px;\n    color: ",";\n    font-weight: bold;\n    font-size: 24px;\n    text-align: center;\n    background: none;\n    transition: all ",";\n\n    ","\n"]);return Z=function(){return e},e}var B=function(e){return o.a.createElement(F,{visible:e.visible,onClick:e.onClick,isSpace:" "===e.symbol},e.symbol)},F=u.b.button(Z(),function(e){return e.isSpace?"47vw":"8vw"},s,function(e){return e.visible?1:.1},s,"0.2s ease",function(e){return e.visible&&P}),P=Object(u.a)(z(),s,d);function _(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 5px 0;\n"]);return _=function(){return e},e}function G(){var e=Object(l.a)(["\n    padding: 0 0 50px;\n    background: ",";\n    box-shadow: ",";\n"]);return G=function(){return e},e}var U=function(e){return o.a.createElement(I,null,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=e.toLowerCase();return M.map(function(e){return e.map(function(e){return T(e,t,n)})})}(e.word,e.fakeKeys).map(function(n,t){return o.a.createElement(N,{key:t},n.map(function(n){return o.a.createElement(B,{key:n.key,symbol:n.key,visible:n.visible,onClick:function(){n.visible&&e.onPress(n.key)}})}))}))},I=u.b.div(G(),d,"0 0 10px rgba(0, 0, 0, 0.1)"),N=u.b.div(_()),J=t(10),X=t.n(J),K=t(6);function q(){var e=Object(l.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 -0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return q=function(){return e},e}var Y=function(){var e=Object(K.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-0.3em) scaleX(3)"}});return o.a.createElement($,{style:e})},$=Object(u.b)(K.a.span)(q(),s);function Q(){var e=Object(l.a)(["\n    display: inline-block;\n    text-align: center;\n    position: relative;\n    margin: 0 0.025em;\n    height: 100%;\n    min-width: 25px;\n    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n    transform: ",";\n    color: ",";\n\n    &::after {\n        content: '*';\n        position: absolute;\n        text-align: center;\n        top: 0.5em;\n        left: 0;\n        right: 0;\n        line-height: 0.5em;\n        height: 20px;\n        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n        color: ",";\n        transform: ",";\n        opacity: ",";\n    }\n"]);return Q=function(){return e},e}function ee(){var e=Object(l.a)(["\n    display: inline-block;\n    line-height: 1em;\n    height: 90px;\n    margin: 0 1px;\n    vertical-align: middle;\n    position: relative;\n"]);return ee=function(){return e},e}function ne(){var e=Object(l.a)(["\n    white-space: nowrap;\n    position: relative;\n    width: 100%;\n"]);return ne=function(){return e},e}function te(){var e=Object(l.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n    padding: 0px 25px;\n    overflow: hidden;\n    height: 2em;\n    width: 100%;\n    line-height: 2em;\n"]);return te=function(){return e},e}var re,ae=function(e){var n=e.word,t=e.progress,r=n.substr(0,t);return o.a.createElement(oe,null,o.a.createElement(X.a,{widthOnly:!0,maxFontSize:74},o.a.createElement(ie,null,n.split("").map(function(e,n){return o.a.createElement(le,{key:e+n},n===t&&o.a.createElement(Y,{key:r}),o.a.createElement(ce,{letterState:t<=n},e))}))))},oe=u.b.div(te()),ie=u.b.div(ne()),le=u.b.span(ee()),ce=u.b.span(Q(),function(e){return e.letterState?"scale(0.5)":"scale(1)"},function(e){return e.letterState?"rgba(255,255,255,0)":"#000000"},"rgba(0, 0, 0, 0.3)",function(e){return e.letterState?"scale(2)":"scale(0)"},function(e){return e.letterState?1:0}),ue=t(30),se={loading:!0,route:h.Home,lastRoutes:[],words:[]},de=t(7),me=t(5),fe=t(31),be=t.n(fe),pe=Object(ue.a)((re=function(e,n){switch(n.type){case"APP/SET_LOADING":return Object(me.a)({},e,{loading:n.payload});case"ROUTER/SET_ROUTE":return Object(me.a)({},e,{route:n.payload.route,lastRoutes:[e.route].concat(Object(de.a)(e.lastRoutes))});case"ROUTER/BACK":return Object(me.a)({},e,{route:e.lastRoutes[0],lastRoutes:e.lastRoutes.slice(1)});case"WORDS/SET":return Object(me.a)({},e,{words:n.payload});case"WORDS/ADD_WORD":return Object(me.a)({},e,{words:[].concat(Object(de.a)(e.words),[Object(me.a)({id:be()()},n.payload)])});case"WORDS/REMOVE_WORD":return Object(me.a)({},e,{words:e.words.filter(function(e){return e.id!==n.payload.id})});default:throw new Error("[reducer] Unknown action type!")}},function(e,n){return console.log("\u2192",n.type,n.payload),re(e,n)}),se),ve=pe.GlobalStateProvider,ge=pe.dispatch,he=pe.useGlobalState,Ee=function(){var e=he("route");return{route:Object(W.a)(e,1)[0],setRoute:function(e){ge({type:"ROUTER/SET_ROUTE",payload:{route:e}})},goBack:function(){ge({type:"ROUTER/BACK"})}}},Oe=function(){var e=he("words"),n=Object(W.a)(e,1)[0];return{words:n,addWord:function(e,n,t){ge({type:"WORDS/ADD_WORD",payload:{name:e,translation:n,example:t}})},removeWord:function(e){ge({type:"WORDS/REMOVE_WORD",payload:{id:e}})},randomWord:function(){return n[Math.floor(Math.random()*n.length)]}}};function ye(){var e=Object(l.a)(["\n    padding: 30px 50px;\n    border: none;\n    color: ",";\n    background: ",";\n    border-radius: 4px;\n    box-shadow: ",";\n    font-weight: bold;\n    font-size: 24px;\n"]);return ye=function(){return e},e}function we(){var e=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return we=function(){return e},e}function xe(){var e=Object(l.a)(["\n    width: 100%;\n    position: relative;\n"]);return xe=function(){return e},e}function je(){var e=Object(l.a)(["\n    width: 100%;\n    flex: 1 0 auto;\n"]);return je=function(){return e},e}function ke(){var e=Object(l.a)(["\n    /* display: grid; */\n    /* grid-template-rows: 1fr 2fr auto; */\n    height: 100%;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n    overflow: hidden;\n"]);return ke=function(){return e},e}var Ce=u.b.div(ke()),Se=u.b.div(je()),Re=u.b.div(xe()),He=u.b.div(we()),Le=u.b.button(ye(),d,"#AED900","2px 2px 7px rgba(0, 0, 0, 0.1)");function We(){var e=Object(l.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return We=function(){return e},e}function Ve(){var e=Object(l.a)(["\n    display: inline-block;\n"]);return Ve=function(){return e},e}function De(){var e=Object(l.a)(["\n    display: inline-block;\n"]);return De=function(){return e},e}function Ae(){var e=Object(l.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n"]);return Ae=function(){return e},e}var Me=function(){var e=Object(K.b)({opacity:1,transform:"translate(0)",delay:200,from:{opacity:0,transform:"translate(-0.2em)"}}),n=Object(K.b)({opacity:1,transform:"translate(0)",delay:300,from:{opacity:0,transform:"translate(-0.2em)"}}),t=Object(K.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-1.2em) scaleX(5)"}});return o.a.createElement(Te,null,o.a.createElement(ze,{style:e},"Re"),o.a.createElement(Be,{style:t}),o.a.createElement(Ze,{style:n},"word"))},Te=u.b.h1(Ae()),ze=Object(u.b)(K.a.span)(De()),Ze=Object(u.b)(K.a.span)(Ve()),Be=Object(u.b)(K.a.span)(We(),s);function Fe(){var e=Object(l.a)(["\n    background: ",";\n    border: none;\n    box-shadow: ",";\n    width: ",";\n    height: ",";\n    max-width: 260px;\n    max-height: 260px;\n    border-radius: 100%;\n    color: ",";\n    font-size: 36px;\n"]);return Fe=function(){return e},e}var Pe=function(e){var n=Ee().setRoute;return e.loading?o.a.createElement(_e,null,"Loading"):e.words.length?o.a.createElement(_e,{onClick:function(){return n(h.Game)}},o.a.createElement(O,{name:"play",size:"large",block:!0}),"Play"):o.a.createElement(_e,{onClick:function(){return n(h.Words)}},o.a.createElement(O,{name:"plus",size:"large",block:!0}),"Word")},_e=u.b.button(Fe(),d,"2px 2px 7px rgba(0, 0, 0, 0.1)","45vmin","45vmin",s);function Ge(){var e=Object(l.a)(["\n    padding: 25px;\n    text-align: center;\n"]);return Ge=function(){return e},e}function Ue(){var e=Object(l.a)(["\n    display: grid;\n    height: 100%;\n    grid-auto-rows: 1fr 3fr 1fr;\n    align-items: center;\n    justify-items: center;\n"]);return Ue=function(){return e},e}var Ie=u.b.div(Ue()),Ne=u.b.div(Ge());function Je(){var e=Object(l.a)([""]);return Je=function(){return e},e}var Xe=u.b.h1(Je());function Ke(){var e=Object(l.a)([""]);return Ke=function(){return e},e}function qe(){var e=Object(l.a)([""]);return qe=function(){return e},e}var Ye,$e=u.b.h1(qe()),Qe=u.b.button(Ke());function en(){var e=Object(l.a)(["\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n"]);return en=function(){return e},e}function nn(){var e=Object(l.a)(["\n    height: calc(100% - ","px);\n    position: relative;\n    width: 100%;\n    overflow-y: auto;\n"]);return nn=function(){return e},e}var tn=(Ye={},Object(c.a)(Ye,h.Home,function(){var e=he("loading"),n=Object(W.a)(e,1)[0],t=Oe().words;return o.a.createElement(Ie,null,o.a.createElement(Me,null),o.a.createElement(Ie,null,o.a.createElement(Pe,{words:t,loading:n})),o.a.createElement(Ne,null,!n&&o.a.createElement(o.a.Fragment,null,"You added ",o.a.createElement("b",null,t.length)," words")))}),Object(c.a)(Ye,h.Words,function(){var e=Oe(),n=e.words,t=e.addWord,r=e.removeWord,i=Object(a.useState)(""),l=Object(W.a)(i,2),c=l[0],u=l[1],s=Object(a.useState)(""),d=Object(W.a)(s,2),m=d[0],f=d[1],b=Object(a.useState)(""),p=Object(W.a)(b,2),v=p[0],g=p[1],h=Object(a.useState)(""),E=Object(W.a)(h,2),O=E[0],y=E[1];return o.a.createElement("div",null,o.a.createElement($e,null,"Words"),o.a.createElement("input",{type:"search",value:c,onChange:function(e){return u(e.target.value)},placeholder:"Search\u2026"}),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Word"),o.a.createElement("td",null,"Translation"),o.a.createElement("td",null,"Example"))),o.a.createElement("tbody",null,n.filter(function(e){return e.name.includes(c)}).map(function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,o.a.createElement("b",null,e.name)),o.a.createElement("td",null,o.a.createElement("i",null,e.translation)),o.a.createElement("td",null,e.example&&o.a.createElement("small",null,e.example)),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return r(e.id)}},"x")))}))),o.a.createElement("div",null,"Word:",o.a.createElement("input",{type:"text",value:m,onChange:function(e){return f(e.target.value)}})),o.a.createElement("div",null,"Translation:",o.a.createElement("input",{type:"text",value:v,onChange:function(e){return g(e.target.value)}})),o.a.createElement("div",null,"Example:",o.a.createElement("input",{type:"text",value:O,onChange:function(e){return y(e.target.value)}})),o.a.createElement(Qe,{onClick:function(){t(m.trim(),v.trim(),O.trim()),f(""),g(""),y("")}},"Add new word"))}),Object(c.a)(Ye,h.Settings,function(){var e=Ee().setRoute;return a.createElement("div",null,a.createElement(Xe,null,"Settings"),a.createElement("button",{onClick:function(){return e(h.Home)}},"Save settings"))}),Object(c.a)(Ye,h.Game,function(){var e=Ee().goBack,n=Oe().randomWord,t=Object(a.useState)(0),r=Object(W.a)(t,2),i=r[0],l=r[1],c=Object(a.useState)(n()),u=Object(W.a)(c,2),s=u[0],d=u[1],m=s.name.substr(i),f=i===s.name.length;return o.a.createElement(Ce,null,o.a.createElement(Se,null,o.a.createElement(X.a,{maxFontSize:24},o.a.createElement("div",null,o.a.createElement("h1",null,s.translation),o.a.createElement("h5",null,f?s.example:"\xa0")))),o.a.createElement(Se,null,o.a.createElement(ae,{word:s.name,progress:i,key:s.name}),o.a.createElement("button",{onClick:e},"Cancel")),o.a.createElement(Re,null,o.a.createElement(U,{word:m,onPress:function(e){e===s.name[i].toLocaleLowerCase()&&l(i+1)}}),f&&o.a.createElement(He,null,o.a.createElement("h2",null,"Done!"),o.a.createElement(Le,{onClick:function(){d(n()),l(0)}},"Next word",o.a.createElement(O,{name:"play"})))))}),Ye),rn=u.b.main(nn(),60),an=u.b.div(en());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(78);Object(i.render)(o.a.createElement(ve,null,o.a.createElement(function(){!function(){var e=he("words"),n=Object(W.a)(e,1)[0];Object(a.useEffect)(function(){n.length&&localStorage.setItem("words",JSON.stringify(n))},[n]),Object(a.useEffect)(function(){var e=localStorage.getItem("words");if(e){var n=JSON.parse(e);setTimeout(function(){ge({type:"WORDS/SET",payload:n}),ge({type:"APP/SET_LOADING",payload:!1})},500)}else ge({type:"APP/SET_LOADING",payload:!1})},[])}();var e=Ee(),n=e.route,t=e.setRoute,r=tn[n];return o.a.createElement(o.a.Fragment,null,o.a.createElement(rn,null,o.a.createElement(r,null)),o.a.createElement(an,null,o.a.createElement(C,{active:n,onChange:t})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.3545b15f.chunk.js.map