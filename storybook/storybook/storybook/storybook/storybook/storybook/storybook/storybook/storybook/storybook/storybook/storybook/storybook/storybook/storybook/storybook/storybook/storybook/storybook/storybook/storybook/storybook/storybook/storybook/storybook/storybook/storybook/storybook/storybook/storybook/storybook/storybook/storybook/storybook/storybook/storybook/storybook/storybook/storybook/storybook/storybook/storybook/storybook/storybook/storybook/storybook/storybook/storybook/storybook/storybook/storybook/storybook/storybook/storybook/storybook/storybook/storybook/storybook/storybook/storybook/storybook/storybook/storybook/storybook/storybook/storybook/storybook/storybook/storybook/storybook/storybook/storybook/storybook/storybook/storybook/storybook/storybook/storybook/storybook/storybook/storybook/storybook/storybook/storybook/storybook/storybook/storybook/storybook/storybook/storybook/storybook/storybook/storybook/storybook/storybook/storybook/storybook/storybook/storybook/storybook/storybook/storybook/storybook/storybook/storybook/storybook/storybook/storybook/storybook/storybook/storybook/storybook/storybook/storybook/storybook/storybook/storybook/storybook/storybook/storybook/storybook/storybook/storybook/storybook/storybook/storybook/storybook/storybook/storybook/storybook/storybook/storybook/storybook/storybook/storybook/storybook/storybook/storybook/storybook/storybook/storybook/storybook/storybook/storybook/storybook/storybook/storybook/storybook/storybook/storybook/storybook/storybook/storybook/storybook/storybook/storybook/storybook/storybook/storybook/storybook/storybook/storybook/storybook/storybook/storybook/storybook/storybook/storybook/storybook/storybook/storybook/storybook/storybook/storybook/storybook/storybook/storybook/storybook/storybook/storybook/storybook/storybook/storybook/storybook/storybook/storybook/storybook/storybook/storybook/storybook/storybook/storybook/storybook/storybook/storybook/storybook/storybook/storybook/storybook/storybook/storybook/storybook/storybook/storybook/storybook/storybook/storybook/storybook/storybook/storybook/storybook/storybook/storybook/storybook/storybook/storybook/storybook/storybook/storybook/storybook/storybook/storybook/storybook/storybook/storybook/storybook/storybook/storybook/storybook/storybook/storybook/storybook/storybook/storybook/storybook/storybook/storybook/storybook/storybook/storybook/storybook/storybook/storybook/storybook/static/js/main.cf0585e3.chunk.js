(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(n,e,t){},119:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"home",function(){return v}),t.d(r,"play",function(){return h}),t.d(r,"plus",function(){return g}),t.d(r,"profile",function(){return E}),t.d(r,"words",function(){return O});var a=t(0),o=t.n(a),c=t(24),i=t.n(c),l=t(126),u=t(2),s=t(9),d=t(3),f="#9438EA",m="#FFFFFF",b="rgba(0, 0, 0, 0.3)",p="2px 2px 7px rgba(0, 0, 0, 0.1)",v=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"}))},h=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 61 61"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.4792 30.5L16.5208 48.2917V12.7083L44.4792 30.5ZM34.9988 30.5L21.6042 21.96V39.04L34.9988 30.5Z"}))},g=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"}))},E=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"}))},O=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM17.5 12.67L15.88 17H19.12L17.5 12.67Z"}))};function j(){var n=Object(u.a)(["\n    display: ",";\n    vertical-align: middle;\n    svg {\n        display: block;\n        margin: auto;\n        fill: currentColor;\n    }\n"]);return j=function(){return n},n}var w,x={normal:24,large:62},y=function(n){var e=n.name,t=n.size,a=void 0===t?"normal":t,c=n.block,i=void 0!==c&&c;return o.a.createElement(k,{block:i},r[e](x[a]))},k=d.b.div(j(),function(n){return n.block?"block":"inline-block"});function C(){var n=Object(u.a)(["\n    transition: all 0 ease;\n    opacity: 0.3;\n    transform: scale(1);\n    background: rgba(255, 255, 255, 0);\n"]);return C=function(){return n},n}function S(){var n=Object(u.a)(["\n    transition: all ",";\n    opacity: 0;\n    transform: scale(2);\n    background: ",";\n"]);return S=function(){return n},n}function R(){var n=Object(u.a)(["\n    color: ",";\n    display: block;\n    background: none;\n    border: none;\n    padding: 10px 25px;\n    position: relative;\n    line-height: 1.5em;\n    &::after {\n        content: '';\n        display: block;\n        border-radius: 100%;\n        height: 60px;\n        width: 60px;\n        position: absolute;\n        margin: auto;\n        top: -50px;\n        bottom: -50px;\n        left: -50px;\n        right: -50px;\n        ",";\n    }\n    &:active::after {\n        transition: opacity 0.6s ease-out, background 0.6s ease-out, transform 1s ease-out;\n        opacity: 0.1;\n        transform: scale(1.2);\n        background: ",";\n    }\n"]);return R=function(){return n},n}function H(){var n=Object(u.a)(["\n    background: ",";\n    display: flex;\n    width: 100%;\n    min-height: ","px;\n    justify-content: space-evenly;\n    box-shadow: ",";\n    overflow: hidden;\n"]);return H=function(){return n},n}!function(n){n.Home="home",n.Words="words",n.Settings="settings",n.Game="game"}(w||(w={}));var L=function(n){return a.createElement(W,null,a.createElement(D,{isActive:n.active===w.Home,onClick:function(){return n.onChange(w.Home)}},a.createElement(y,{name:"home",block:!0}),"Home"),a.createElement(D,{isActive:n.active===w.Words,onClick:function(){return n.onChange(w.Words)}},a.createElement(y,{name:"words",block:!0}),"Words"),a.createElement(D,{isActive:n.active===w.Settings,onClick:function(){return n.onChange(w.Settings)}},a.createElement(y,{name:"profile",block:!0}),"Settings"))},W=d.b.nav(H(),m,60,"0 0 10px rgba(0, 0, 0, 0.1)"),D=d.b.button(R(),function(n){return n.isActive?f:"rgba(0, 0, 0, 0.6)"},function(n){return n.isActive?V:z},f),V=Object(d.a)(S(),"0.2s ease",f),z=Object(d.a)(C()),A=t(5),M=t(28),T=t(54),F=t.n(T),I="' ,",B=["qwertyuiop","asdfghjkl","zxcvbnm",I].map(function(n){return n.split("")}),N=function(n,e,t){var r=t?F()(n+e)():0;return{key:n,visible:e.includes(n)||t>r&&!I.includes(n)}};function P(){var n=Object(u.a)(["\n    &:active {\n        outline: none;\n        background-color: ",";\n        color: ",";\n    }\n"]);return P=function(){return n},n}function Z(){var n=Object(u.a)(["\n    width: ",";\n    height: 7vh;\n    padding: 0;\n    margin: 0 4px;\n    border: 2px solid ",";\n    opacity: ",";\n    border-radius: 4px;\n    color: ",";\n    font-weight: bold;\n    font-size: 24px;\n    text-align: center;\n    background: none;\n    transition: all ",";\n\n    ","\n"]);return Z=function(){return n},n}var U=function(n){return o.a.createElement(_,{visible:n.visible,onClick:n.onClick,isSpace:" "===n.symbol},n.symbol,o.a.createElement(M.b,{keyEventName:M.a,keyValue:n.symbol,onKeyHandle:n.onClick}))},_=d.b.button(Z(),function(n){return n.isSpace?"47vw":"8vw"},f,function(n){return n.visible?1:.1},f,"0.2s ease",function(n){return n.visible&&G}),G=Object(d.a)(P(),f,m);function K(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 5px 0;\n"]);return K=function(){return n},n}function J(){var n=Object(u.a)(["\n    padding: 0 0 50px;\n    background: ",";\n    box-shadow: ",";\n"]);return J=function(){return n},n}var Y=function(n){return o.a.createElement(X,null,function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n.toLowerCase();return B.map(function(n){return n.map(function(n){return N(n,t,e)})})}(n.word,n.fakeKeys).map(function(e,t){return o.a.createElement(q,{key:t},e.map(function(e){return o.a.createElement(U,{key:e.key,symbol:e.key,visible:e.visible,onClick:function(){e.visible&&n.onPress(e.key)}})}))}))},X=d.b.div(J(),m,"0 0 10px rgba(0, 0, 0, 0.1)"),q=d.b.div(K()),$=t(33),Q=t.n($),nn=t(19);function en(){var n=Object(u.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 -0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return en=function(){return n},n}var tn=function(){var n=Object(nn.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-0.3em) scaleX(3)"}});return o.a.createElement(rn,{style:n})},rn=Object(d.b)(nn.a.span)(en(),f);function an(){var n=Object(u.a)(["\n    display: inline-block;\n    text-align: center;\n    position: relative;\n    margin: 0 0.025em;\n    height: 100%;\n    min-width: 25px;\n    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n    transform: ",";\n    color: ",";\n\n    &::after {\n        content: '*';\n        position: absolute;\n        text-align: center;\n        top: 0.5em;\n        left: 0;\n        right: 0;\n        line-height: 0.5em;\n        height: 20px;\n        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n        color: ",";\n        transform: ",";\n        opacity: ",";\n    }\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n    display: inline-block;\n    line-height: 1em;\n    height: 90px;\n    margin: 0 1px;\n    vertical-align: middle;\n    position: relative;\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n    white-space: nowrap;\n    position: relative;\n    width: 100%;\n"]);return cn=function(){return n},n}function ln(){var n=Object(u.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n    padding: 0px 25px;\n    overflow: hidden;\n    height: 2em;\n    width: 100%;\n    line-height: 2em;\n"]);return ln=function(){return n},n}var un,sn=function(n){var e=n.word,t=n.progress,r=e.substr(0,t);return o.a.createElement(dn,null,o.a.createElement(Q.a,{widthOnly:!0,maxFontSize:74},o.a.createElement(fn,null,e.split("").map(function(n,e){return o.a.createElement(mn,{key:n+e},e===t&&o.a.createElement(tn,{key:r}),o.a.createElement(bn,{letterState:t<=e},n))}))))},dn=d.b.div(ln()),fn=d.b.div(cn()),mn=d.b.span(on()),bn=d.b.span(an(),function(n){return n.letterState?"scale(0.5)":"scale(1)"},function(n){return n.letterState?"rgba(255,255,255,0)":"#000000"},b,function(n){return n.letterState?"scale(2)":"scale(0)"},function(n){return n.letterState?1:0}),pn=t(55),vn={loading:!0,route:w.Home,lastRoutes:[],words:[]},hn=t(26),gn=t(16),En=t(56),On=t.n(En),jn=Object(pn.a)((un=function(n,e){switch(e.type){case"APP/SET_LOADING":return Object(gn.a)({},n,{loading:e.payload});case"ROUTER/SET_ROUTE":return Object(gn.a)({},n,{route:e.payload.route,lastRoutes:[n.route].concat(Object(hn.a)(n.lastRoutes))});case"ROUTER/BACK":return Object(gn.a)({},n,{route:n.lastRoutes[0],lastRoutes:n.lastRoutes.slice(1)});case"WORDS/SET":return Object(gn.a)({},n,{words:e.payload});case"WORDS/ADD_WORD":return Object(gn.a)({},n,{words:[].concat(Object(hn.a)(n.words),[Object(gn.a)({id:On()()},e.payload)])});case"WORDS/REMOVE_WORD":return Object(gn.a)({},n,{words:n.words.filter(function(n){return n.id!==e.payload.id})});default:throw new Error("[reducer] Unknown action type!")}},function(n,e){return console.log("\u2192",e.type,e.payload),un(n,e)}),vn),wn=jn.GlobalStateProvider,xn=jn.dispatch,yn=jn.useGlobalState,kn=function(){var n=yn("route");return{route:Object(A.a)(n,1)[0],setRoute:function(n){xn({type:"ROUTER/SET_ROUTE",payload:{route:n}})},goBack:function(){xn({type:"ROUTER/BACK"})}}},Cn=function(){var n=yn("words"),e=Object(A.a)(n,1)[0];return{words:e,addWord:function(n,e,t){xn({type:"WORDS/ADD_WORD",payload:{name:n,translation:e,example:t}})},removeWord:function(n){xn({type:"WORDS/REMOVE_WORD",payload:{id:n}})},randomWord:function(){return e[Math.floor(Math.random()*e.length)]}}};function Sn(){var n=Object(u.a)(["\n    padding: 30px 50px;\n    border: none;\n    color: ",";\n    background: ",";\n    border-radius: 4px;\n    box-shadow: ",";\n    font-weight: bold;\n    font-size: 24px;\n"]);return Sn=function(){return n},n}function Rn(){var n=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return Rn=function(){return n},n}function Hn(){var n=Object(u.a)(["\n    width: 100%;\n    position: relative;\n"]);return Hn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n    width: 100%;\n    flex: 1 0 auto;\n"]);return Ln=function(){return n},n}function Wn(){var n=Object(u.a)(["\n    /* display: grid; */\n    /* grid-template-rows: 1fr 2fr auto; */\n    height: 100%;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n    overflow: hidden;\n"]);return Wn=function(){return n},n}var Dn=d.b.div(Wn()),Vn=d.b.div(Ln()),zn=d.b.div(Hn()),An=d.b.div(Rn()),Mn=d.b.button(Sn(),m,"#AED900",p);function Tn(){var n=Object(u.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return Tn=function(){return n},n}function Fn(){var n=Object(u.a)(["\n    display: inline-block;\n"]);return Fn=function(){return n},n}function In(){var n=Object(u.a)(["\n    display: inline-block;\n"]);return In=function(){return n},n}function Bn(){var n=Object(u.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n"]);return Bn=function(){return n},n}var Nn=function(){var n=Object(nn.b)({opacity:1,transform:"translate(0)",delay:200,from:{opacity:0,transform:"translate(-0.2em)"}}),e=Object(nn.b)({opacity:1,transform:"translate(0)",delay:300,from:{opacity:0,transform:"translate(-0.2em)"}}),t=Object(nn.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-1.2em) scaleX(5)"}});return o.a.createElement(Pn,null,o.a.createElement(Zn,{style:n},"Re"),o.a.createElement(_n,{style:t}),o.a.createElement(Un,{style:e},"word"))},Pn=d.b.h1(Bn()),Zn=Object(d.b)(nn.a.span)(In()),Un=Object(d.b)(nn.a.span)(Fn()),_n=Object(d.b)(nn.a.span)(Tn(),f);function Gn(){var n=Object(u.a)(["\n    background: ",";\n    border: none;\n    box-shadow: ",";\n    width: ",";\n    height: ",";\n    max-width: 260px;\n    max-height: 260px;\n    border-radius: 100%;\n    color: ",";\n    font-size: 36px;\n"]);return Gn=function(){return n},n}var Kn=function(n){var e=kn().setRoute;return n.loading?o.a.createElement(Jn,null,"Loading"):n.words.length?o.a.createElement(Jn,{onClick:function(){return e(w.Game)}},o.a.createElement(y,{name:"play",size:"large",block:!0}),"Play"):o.a.createElement(Jn,{onClick:function(){return e(w.Words)}},o.a.createElement(y,{name:"plus",size:"large",block:!0}),"Word")},Jn=d.b.button(Gn(),m,p,"45vmin","45vmin",f);function Yn(){var n=Object(u.a)(["\n    padding: 25px;\n    text-align: center;\n"]);return Yn=function(){return n},n}function Xn(){var n=Object(u.a)(["\n    display: grid;\n    height: 100%;\n    grid-auto-rows: 1fr 3fr 1fr;\n    align-items: center;\n    justify-items: center;\n"]);return Xn=function(){return n},n}var qn=d.b.div(Xn()),$n=d.b.div(Yn());function Qn(){var n=Object(u.a)(["\n    display: flex;\n    min-height: 260px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return Qn=function(){return n},n}var ne=function(n){return o.a.createElement(ee,null,o.a.createElement(y,{name:n.iconName,size:"large"}),o.a.createElement("h1",null,n.title),n.children)},ee=d.b.header(Qn());function te(){var n=Object(u.a)(["\n    padding: 12px 0 9px;\n    border: none;\n    font-size: 15px;\n    display: block;\n    width: 100%;\n    margin: 15px 0;\n    border-bottom: 2px solid ",";\n"]);return te=function(){return n},n}function re(){var n=Object(u.a)(["\n    position: absolute;\n    top: 9px;\n    left: 0px;\n    font-size: 15px;\n    transition: transform 0.15s ease-out;\n    color: ",";\n    cursor: text;\n    transform-origin: 0 0; // top left for scale\n    transform: ",";\n"]);return re=function(){return n},n}function ae(){var n=Object(u.a)(["\n    position: relative;\n    display: block;\n    &:after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 2px;\n        opacity: 1;\n        transition: transform 0.25s ease-out;\n        transform: scaleX(",");\n        background: ",";\n    }\n"]);return ae=function(){return n},n}var oe=function(n){var e=n.value,t=n.type,r=void 0===t?"text":t,c=n.placeholder,i=n.onChange,l=n.autoFocus,u=n.name,s=Object(a.useState)(!1),d=Object(A.a)(s,2),f=d[0],m=d[1];return o.a.createElement(ce,{active:f},o.a.createElement(ie,{move:""!==e},c),o.a.createElement(le,{type:r,value:e,onChange:function(n){return i(n.target.value)},onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},autoFocus:l,name:u}))},ce=d.b.label(ae(),function(n){return n.active?1:0},f),ie=d.b.span(re(),b,function(n){return n.move?"translateY(-17px) scale(0.8)":"translate(0px)"}),le=d.b.input(te(),b),ue=t(57),se=t.n(ue).a.initializeApp({apiKey:"AIzaSyATMnw8FbczS1-0yJwrHl98EunKDAjE1DM",authDomain:"reword-1.firebaseapp.com",databaseURL:"https://reword-1.firebaseio.com",projectId:"reword-1",storageBucket:"reword-1.appspot.com",messagingSenderId:"220877466530",appId:"1:220877466530:web:7c95c058eaa3a7ed"});function de(){var n=Object(u.a)(["\n    position: fixed;\n    bottom: ","px;\n    right: 15px;\n    padding: 12px;\n    border: 2px solid ",";\n    color: ",";\n    box-shadow: ",";\n    border-radius: 50%;\n    background: ",";\n    transition: 0.2s;\n    &:active {\n        border-color: ",";\n    }\n"]);return de=function(){return n},n}var fe=function(n){return o.a.createElement(me,{onClick:n.onClick},o.a.createElement(y,{name:n.iconName,size:"normal"}))},me=d.b.button(de(),75,m,f,p,m,f),be=t(14);function pe(){var n=Object(u.a)(["\n    ",";\n    ",";\n    ",";\n    ",";\n"]);return pe=function(){return n},n}function ve(){var n=Object(u.a)(["\n    animation: "," ","ms "," forwards;\n"]);return ve=function(){return n},n}function he(){var n=Object(u.a)(["\n    animation: "," ","ms "," forwards;\n"]);return he=function(){return n},n}function ge(){var n=Object(u.a)(["\n    ",";\n    ",";\n    ",";\n    ",";\n"]);return ge=function(){return n},n}function Ee(){var n=Object(u.a)(["\n    animation: "," ","ms "," forwards;\n"]);return Ee=function(){return n},n}function Oe(){var n=Object(u.a)(["\n    animation: "," ","ms "," forwards;\n"]);return Oe=function(){return n},n}function je(){var n=Object(u.a)(["\n    from { opacity: 1; }\n    to { opacity: 0; }\n"]);return je=function(){return n},n}function we(){var n=Object(u.a)(["\n    from { opacity: 0; }\n    to { opacity: 1; }\n"]);return we=function(){return n},n}function xe(){var n=Object(u.a)(["\n    from {\n        transform: translateY(0px);\n        opacity: 1;\n    }\n    to {\n        transform: translateY(80px);\n        opacity: 0;\n    }\n"]);return xe=function(){return n},n}function ye(){var n=Object(u.a)(["\n    from {\n        transform: translateY(80px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0px);\n        opacity: 1;\n    }\n"]);return ye=function(){return n},n}var ke="cubic-bezier(0.29, 0.87, 0.54, 0.99)",Ce=Object(d.c)(ye()),Se=Object(d.c)(xe()),Re=Object(d.c)(we()),He=Object(d.c)(je()),Le=Object(d.a)(Oe(),Ce,400,ke),We=Object(d.a)(Ee(),Se,400,ke),De=Object(d.a)(he(),Re,400,ke),Ve=Object(d.a)(ve(),He,400,ke);function ze(){var n=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.1);\n    z-index: 100;\n    ",";\n"]);return ze=function(){return n},n}function Ae(){var n=Object(u.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 15px;\n    margin: 0 auto auto;\n    width: calc(100vw - 20px);\n    max-height: calc(100vh - 20px);\n    overflow-y: auto;\n    background: ",";\n    border-radius: 4px;\n    z-index: 1000;\n    padding: 15px;\n    box-shadow: ",";\n    ",";\n"]);return Ae=function(){return n},n}var Me=function(n){return i.a.createPortal(o.a.createElement(be.d,{in:n.show,timeout:1e3},function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe,{status:e},n.children,n.footer&&n.footer()),o.a.createElement(Ie,{status:e,onClick:n.close}))}),Te)},Te=document.getElementById("modals"),Fe=d.b.div(Ae(),m,p,function(n){return e=n.status,Object(d.a)(ge(),e===be.a&&Le,e===be.c&&We,e===be.c&&"pointer-events: none;",e===be.b&&"display: none;");var e}),Ie=d.b.div(ze(),function(n){return e=n.status,Object(d.a)(pe(),e===be.a&&De,e===be.c&&Ve,e===be.c&&"pointer-events: none;",e===be.b&&"display: none;");var e});function Be(){var n=Object(u.a)([""]);return Be=function(){return n},n}var Ne=function(n){return o.a.createElement(Pe,{type:"search",value:n.value,onChange:function(e){return n.onChange(e.target.value)},placeholder:"Search\u2026"})},Pe=d.b.input(Be()),Ze=t(29),Ue=t.n(Ze),_e=t(34),Ge="abcdefghijklmnopqrstuvwxyz".split(""),Ke={},Je=function(){var n=Object(_e.a)(Ue.a.mark(function n(e){var t,r;return Ue.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(Ge.includes(e)){n.next=2;break}return n.abrupt("return",null);case 2:if(!Ke[e]){n.next=4;break}return n.abrupt("return",Ke[e]);case 4:return n.next=6,fetch("/dictionary/en-pl/".concat(e,".json"));case 6:return t=n.sent,n.next=9,t.json();case 9:return r=n.sent,Ke[e]=r,n.abrupt("return",r);case 12:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),Ye=function(n){var e=Object(a.useState)(""),t=Object(A.a)(e,2),r=t[0],o=t[1],c=Object(a.useState)([]),i=Object(A.a)(c,2),l=i[0],u=i[1];return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(a.useEffect)(function(){var r=setTimeout(n.bind(null,t),e);return function(){clearTimeout(r)}},[t,n,e])}(function(){return o(n.toLowerCase())},400,[n]),Object(a.useMemo)(function(){var n=(r[0]||"").toLowerCase();(function(){var e=Object(_e.a)(Ue.a.mark(function e(){var t,a;return Ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Je(n);case 2:if(t=e.sent){e.next=6;break}return u([]),e.abrupt("return");case 6:a=t.filter(function(n){return n.word.toLowerCase().startsWith(r)}).slice(0,5),u(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[r]),{results:l}},Xe=function(n){return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("b",null,n.word.name)),o.a.createElement("td",null,o.a.createElement("i",null,n.word.translation)),o.a.createElement("td",null,n.word.example&&o.a.createElement("small",null,n.word.example)),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return n.removeWord(n.word.id)}},"x")))};function qe(){var n=Object(u.a)(["\n    display: block;\n    width: 100%;\n    padding: 1em 0;\n    border: none;\n    border-bottom: 1px solid ",";\n    text-align: left;\n    font-size: 14px;\n"]);return qe=function(){return n},n}var $e,Qe=d.b.button(qe(),"rgba(0, 0, 0, 0.1)");function nt(){var n=Object(u.a)(["\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n"]);return nt=function(){return n},n}function et(){var n=Object(u.a)(["\n    height: calc(100% - ","px);\n    position: relative;\n    width: 100%;\n    overflow-y: auto;\n"]);return et=function(){return n},n}var tt=($e={},Object(s.a)($e,w.Home,function(){var n=yn("loading"),e=Object(A.a)(n,1)[0],t=Cn().words;return o.a.createElement(qn,null,o.a.createElement(Nn,null),o.a.createElement(qn,null,o.a.createElement(Kn,{words:t,loading:e})),o.a.createElement($n,null,!e&&o.a.createElement(o.a.Fragment,null,"You added ",o.a.createElement("b",null,t.length)," words")))}),Object(s.a)($e,w.Words,function(){var n=Cn(),e=n.words,t=n.addWord,r=n.removeWord,c=Object(a.useState)(""),i=Object(A.a)(c,2),l=i[0],u=i[1],s=Object(a.useState)(!1),d=Object(A.a)(s,2),f=d[0],m=d[1],b=Object(a.useState)(""),p=Object(A.a)(b,2),v=p[0],h=p[1],g=Object(a.useState)(""),E=Object(A.a)(g,2),O=E[0],j=E[1],w=Object(a.useState)(""),x=Object(A.a)(w,2),y=x[0],k=x[1],C=Ye(v).results,S=function(){t(v.trim(),O.trim(),y.trim()),h(""),j(""),k("")},R=function(n){return n.map(function(n){return n.texts[0]}).join(", ")};return o.a.createElement("div",null,o.a.createElement(ne,{title:"Words",iconName:"words"},o.a.createElement(Ne,{value:l,onChange:u})),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Word"),o.a.createElement("td",null,"Translation"),o.a.createElement("td",null,"Example"))),o.a.createElement("tbody",null,e.filter(function(n){return n.name.includes(l)}).map(function(n){return o.a.createElement(Xe,{key:n.id,word:n,removeWord:r})}))),o.a.createElement(fe,{onClick:function(){return m(!f)},iconName:"plus"}),o.a.createElement(Me,{show:f,footer:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return m(!1)}},"Close"),o.a.createElement("button",{onClick:S},"Save"))},close:function(){return m(!1)}},o.a.createElement("div",null,o.a.createElement(oe,{value:v,placeholder:"Word",onChange:h})),!O&&o.a.createElement("div",null,C.map(function(n){return o.a.createElement(Qe,{key:n.id,onClick:function(){h(n.word),j(R(n.trans))}},o.a.createElement("b",null,n.word)," - ",R(n.trans))})),o.a.createElement("div",null,o.a.createElement(oe,{value:O,onChange:j,placeholder:"Translation"})),o.a.createElement("div",null,o.a.createElement(oe,{value:y,onChange:k,placeholder:"Example"}))))}),Object(s.a)($e,w.Settings,function(){var n=Object(a.useState)(""),e=Object(A.a)(n,2),t=e[0],r=e[1],c=Object(a.useState)(""),i=Object(A.a)(c,2),l=i[0],u=i[1];kn().setRoute;return o.a.createElement("div",null,o.a.createElement(ne,{title:"Settings",iconName:"profile"}),o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),se.auth().createUserWithEmailAndPassword(t,l).catch(function(n){return console.log(n)})}},o.a.createElement(oe,{name:"email",value:t,onChange:r,placeholder:"email"}),o.a.createElement(oe,{name:"password",value:l,onChange:u,placeholder:"password"}),o.a.createElement("button",null,"Sign up")))}),Object(s.a)($e,w.Game,function(){var n=kn().goBack,e=Cn().randomWord,t=Object(a.useState)(0),r=Object(A.a)(t,2),c=r[0],i=r[1],l=Object(a.useState)(e()),u=Object(A.a)(l,2),s=u[0],d=u[1],f=s.name.substr(c),m=c===s.name.length,b=function(){d(e()),i(0)};return o.a.createElement(Dn,null,o.a.createElement(Vn,null,o.a.createElement(Q.a,{maxFontSize:24},o.a.createElement("div",null,o.a.createElement("h1",null,s.translation),o.a.createElement("h5",null,m?s.example:"\xa0")))),o.a.createElement(Vn,null,o.a.createElement(sn,{word:s.name,progress:c,key:s.name}),o.a.createElement("button",{onClick:n},"Cancel")),o.a.createElement(zn,null,o.a.createElement(Y,{word:f,onPress:function(n){n===s.name[c].toLocaleLowerCase()&&i(c+1)}}),m&&o.a.createElement(An,null,o.a.createElement("h2",null,"Done!"),o.a.createElement(Mn,{onClick:b},"Next word",o.a.createElement(y,{name:"play"})),o.a.createElement(M.b,{keyEventName:M.a,keyValue:"Enter",onKeyHandle:b}))))}),$e),rt=d.b.main(et(),60),at=d.b.div(nt());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(117);var ot=t(12),ct=t(22),it=t(17),lt=t(15),ut=t(18),st=t(27),dt=function(n){function e(){var n,t;Object(ot.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(it.a)(this,(n=Object(lt.a)(e)).call.apply(n,[this].concat(a)))).state={error:null,eventId:null},t.handleReportDialog=function(){l.b({eventId:t.state.eventId})},t}return Object(ut.a)(e,n),Object(ct.a)(e,[{key:"componentDidCatch",value:function(n,e){var t=this;this.setState({error:n}),st.b(function(r){r.setExtras(e),t.setState({eventId:st.a(n)})})}},{key:"render",value:function(){return this.state.error?o.a.createElement("div",null,o.a.createElement("h1",null,"Error occurred ;("),o.a.createElement("a",{onClick:this.handleReportDialog},"Report feedback"),o.a.createElement("pre",null,JSON.stringify(this.state.error,null,2))):this.props.children}}]),e}(a.Component);l.a({dsn:"https://adf49e52f07d479098537009eb0044b0@sentry.io/1446350"}),Object(c.render)(o.a.createElement(dt,null,o.a.createElement(wn,null,o.a.createElement(function(){!function(){var n=yn("words"),e=Object(A.a)(n,1)[0];Object(a.useEffect)(function(){e.length&&localStorage.setItem("words",JSON.stringify(e))},[e]),Object(a.useEffect)(function(){var n=localStorage.getItem("words");if(n){var e=JSON.parse(n);setTimeout(function(){xn({type:"WORDS/SET",payload:e}),xn({type:"APP/SET_LOADING",payload:!1})},500)}else xn({type:"APP/SET_LOADING",payload:!1})},[])}();var n=kn(),e=n.route,t=n.setRoute,r=tt[e];return o.a.createElement(o.a.Fragment,null,o.a.createElement(rt,null,o.a.createElement(r,null)),o.a.createElement(at,null,o.a.createElement(L,{active:e,onChange:t})))},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},62:function(n,e,t){n.exports=t(119)}},[[62,1,2]]]);
//# sourceMappingURL=main.cf0585e3.chunk.js.map