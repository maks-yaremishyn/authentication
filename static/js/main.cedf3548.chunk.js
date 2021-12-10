(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(n,t,e){"use strict";e.r(t);var o,r=e(0),a=e.n(r),i=e(17),c=e.n(i),s=e(7),l=e(4),u=e(5),b="#ff5f00",p=Object(u.a)(o||(o=Object(l.a)(["\n    * {\n        box-sizing: border-box;\n    }\n    \n    html {\n        font-family: sans-serif;\n    }\n\n    body {\n        margin: 0;\n    }\n\n    body,\n    input,\n    button,\n    a {\n        line-height: 1.5;\n        color: ",";\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    input,\n    button {\n        background: none;\n        border: none;\n        outline: none;\n    }\n\n    img {\n        width: 100%;\n    }\n\n    .padding {\n        padding: 0 16px;\n    }\n"])),"#333"),d=e(3),h="userData",j=function(){var n=Object(r.useState)(null),t=Object(d.a)(n,2),e=t[0],o=t[1],a=Object(r.useState)(null),i=Object(d.a)(a,2),c=i[0],s=i[1],l=Object(r.useCallback)((function(n,t){o(n),s(t),localStorage.setItem(h,JSON.stringify({userId:t,token:n}))}),[]),u=Object(r.useCallback)((function(){o(null),s(null),localStorage.removeItem(h)}),[]);return Object(r.useEffect)((function(){var n=JSON.parse(localStorage.getItem(h));(null===n||void 0===n?void 0:n.token)&&l(n.token,n.userId)}),[l]),{login:l,logout:u,token:e,userId:c}},x=e(1);function g(){}var f,m,O,v,w,k,y,S,C,N=Object(r.createContext)({token:null,userId:null,login:g,logout:g,isAuthenticated:!1}),I=function(n){var t=n.children,e=j(),o=e.token,r=e.login,a=e.logout,i=e.userId,c=!!o;return Object(x.jsx)(N.Provider,{value:{token:o,login:r,logout:a,userId:i,isAuthenticated:c},children:t})},z=e(2),P=u.b.header(f||(f=Object(l.a)(["\n    position: fixed;\n    top: 0;\n    z-index: 9;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 8px 16px;\n    border-bottom: 3px dotted ",';\n    background-color: #333;\n\n    .go-back {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 40px;\n        height: 40px;\n        background-color: #fff;\n        border-radius: 50%;\n\n        &::after {\n            content: "";\n            width: 10px;\n            height: 10px;\n            border-top: 2px solid #333;\n            border-left: 2px solid #333;\n            transform: translateX(2px) rotate(-45deg);\n        }\n    }\n\n    .logo {\n        font-size: 24px;\n        font-weight: 900;\n        text-transform: uppercase;\n        color: ',";\n    }\n"])),b,b),E=u.b.button(m||(m=Object(l.a)(["\n    position: fixed;\n    top: 16px;\n    right: 16px;\n    z-index: 5;\n    text-transform: uppercase;\n    cursor: pointer;\n\n    &:hover {\n        text-decoration: underline;\n    }\n"]))),H=function(){var n=Object(z.f)(),t=Object(r.useContext)(N).logout;return"/auth"!==n.pathname?Object(x.jsx)(E,{type:"button",onClick:t,children:"Sign out"}):Object(x.jsx)(P,{children:Object(x.jsx)("span",{className:"logo",children:"Sixt"})})},M=e(8),T=e.n(M),J=e(9),X=e(10),q=e(12),A=function(){var n=Object(r.useState)(!1),t=Object(d.a)(n,2),e=t[0],o=t[1],a=Object(r.useState)(null),i=Object(d.a)(a,2),c=i[0],s=i[1],l=Object(r.useCallback)(function(){var n=Object(J.a)(T.a.mark((function n(t){var e,r,a,i,c,l=arguments;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,a=l.length>3&&void 0!==l[3]?l[3]:{},o(!0),n.prev=4,r&&(r=JSON.stringify(r),a["Content-Type"]="application/json"),n.next=8,fetch(t,{method:e,body:r,headers:a});case 8:return i=n.sent,n.next=11,i.json();case 11:if(c=n.sent,i.ok){n.next=14;break}throw new Error(c.message||"Something went wrong");case 14:return n.abrupt("return",c);case 17:throw n.prev=17,n.t0=n.catch(4),s(n.t0.message),n.t0;case 21:return n.prev=21,o(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[4,17,21,24]])})));return function(t){return n.apply(this,arguments)}}(),[]);return{loading:e,request:l,error:c,clearError:function(){return s(null)}}},D=e.p+"static/media/map.e7fad1d7.png",R=u.b.main(O||(O=Object(l.a)(['\n    min-height: 100vh;\n    padding: 1px 16px;\n    background: #333 url("','") no-repeat left bottom;\n    background-size: calc(min(1200px, 90%)); \n    overflow: hidden;\n\n    .box {\n        position: relative;\n        max-width: 500px;\n        margin: 16vh auto 16px;\n        padding: 16px 24px 24px;\n        background-color: #fff;\n\n        @media (max-width: 1000px) {\n            margin-top: 24vh;\n        }\n\n        > label:last-of-type {\n            margin-top: 16px;\n        }\n    }\n\n    .title {\n        position: absolute;\n        padding: 8px 16px;\n        font-size: 16px;\n        font-weight: 700;\n        background-color: #fff;\n        cursor: pointer;\n\n        &--1 {\n            right: 100px;\n            bottom: 100%;\n        }\n\n        &--2 {\n            right: 0;\n            bottom: 100%;\n        }\n\n        &.active::after {\n            content: "";\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: 4px;\n            width: 75%;\n            height: 1px;\n            margin: 0 auto;\n            background-color: #333;\n        }\n    }\n'])),D),W=u.b.form(v||(v=Object(l.a)(["\n    .heading {\n        height: 42px;\n        margin-bottom: 16px;\n        font-size: 14px;\n    }\n\n    .input {\n        display: block;\n        width: 100%;\n        margin-bottom: 16px;\n        padding: 8px 0;\n        border: none;\n        border-bottom: 2px solid ",";\n    }\n\n    .button {\n        width: 100%;\n        margin-top: 24px;\n        padding: 8px 16px;\n        font-size: 16px;\n        text-transform: uppercase;\n        color: #fff;\n        background-color: ",";\n        cursor: pointer;\n\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n"])),b,b),B=function(n){var t=n.authType,e=n.loginFormContent,o=n.changeHandler,r=n.formSubmitHandler,a=n.loading;return Object(x.jsxs)(W,{onSubmit:r,children:[Object(x.jsx)("p",{className:"heading",children:e[t].heading}),Object(x.jsxs)("label",{children:["Email",Object(x.jsx)("input",{type:"email",className:"input",name:"email",onChange:o})]}),Object(x.jsxs)("label",{children:["Password",Object(x.jsx)("input",{type:"password",className:"input",name:"password",onChange:o})]}),Object(x.jsx)("button",{type:"submit",className:"button",disabled:a,children:"Proceed"})]})},F=Object(u.c)(w||(w=Object(l.a)(["\n    from {\n        transform: translateX(200px);\n    } to {\n        transform: translateX(0);\n    }\n"]))),Y=u.b.div(k||(k=Object(l.a)(["\n    position: fixed;\n    top: 60px;\n    right: 16px;\n    width: 200px;\n    padding: 8px 0;\n    font-weight: 700;\n    color: ",";\n    border-bottom: 2px solid ",";\n    animation: "," 0.6s;\n"])),(function(n){return n.error?"#ff0033":b}),(function(n){return n.error?"#ff0033":b}),F),G=function(n){var t=n.message,e=n.error,o=void 0!==e&&e;return Object(x.jsx)(Y,{error:o,children:t})},L={login:{heading:"Please enter credentials to login to your account"},register:{heading:"Please enter your email and password, which you will later use to login to your account"}},U=function(){var n=Object(r.useContext)(N).login,t=A(),e=t.loading,o=t.error,a=t.request,i=t.clearError,c=Object(r.useState)("login"),s=Object(d.a)(c,2),l=s[0],u=s[1],b=Object(r.useState)({email:"",password:""}),p=Object(d.a)(b,2),h=p[0],j=p[1],g=Object(r.useState)(null),f=Object(d.a)(g,2),m=f[0],O=f[1],v=function(){var t=Object(J.a)(T.a.mark((function t(e){var o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),i(),O(null),t.prev=3,t.next=6,a("/api/auth/".concat(l),"POST",Object(q.a)({},h));case 6:o=t.sent,console.log(o),"login"===l?n(o.token,o.userId):(u("login"),O(o.message)),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(3);case 13:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(n){return t.apply(this,arguments)}}();return Object(x.jsx)(R,{children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("button",{type:"button",className:"title title--1 ".concat("login"===l?"active":""),onClick:function(){return u("login")},children:"Sign in"}),Object(x.jsx)("button",{type:"button",className:"title title--2 ".concat("register"===l?"active":""),onClick:function(){return u("register")},children:"Sign up"}),Object(x.jsx)(B,{authType:l,loginFormContent:L,changeHandler:function(n){j(Object(q.a)(Object(q.a)({},h),{},Object(X.a)({},n.target.name,n.target.value)))},formSubmitHandler:v,loading:e}),o&&Object(x.jsx)(G,{message:o,error:!0}),m&&Object(x.jsx)(G,{message:m})]})})},K=u.b.div(y||(y=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    height: 100vh;\n"]))),Q=u.b.section(S||(S=Object(l.a)(['\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-basis: 50%;\n    font-size: 18px;\n    overflow: hidden;\n\n    &:nth-child(1) {\n        background-color: #f7f5e5;\n    }\n\n    &:nth-child(2) {\n        background-color: lightblue;\n    }\n\n    &:nth-child(3) {\n        background-color: lightcoral;\n    }\n\n    &:nth-child(4) {\n        background-color: lightsalmon;\n    }\n\n    &::before {\n        content: "";\n        position: absolute;\n        top: ',";\n        left: ",";\n        width: ",";\n        height: ",";\n        background-color: pink;\n        border-radius: 50%;\n        opacity: 0;\n        transform: scale(0);\n        transition: transform 1s, opacity 1s;\n        pointer-events: none;\n    }\n\n    &.active::before {\n        opacity: 0.6;\n        transform: scale(1);\n    }\n"])),(function(n){return n.top||"0"}),(function(n){return n.left||"0"}),(function(n){return n.overlayWidth||"100%"}),(function(n){return n.overlayHeight||"100%"})),V=Object(u.b)(s.b)(C||(C=Object(l.a)(["\n    position: relative;\n    padding: 20px;\n\n    .top,\n    .right,\n    .bottom,\n    .left {\n        position: absolute;\n        background-color: currentColor;\n    }\n\n    .top,\n    .bottom {\n        width: 80%;\n        height: 2px;\n    }\n\n    .top {\n        top: 0;\n        left: 0;\n    }\n\n    .bottom {\n        bottom: 0;\n        right: 0;\n    }\n\n    .left,\n    .right {\n        width: 2px;\n        height: 70%;\n    }\n\n    .left {\n        top: 0;\n        left: 0;\n    }\n\n    .right {\n        bottom: 0;\n        right: 0;\n    }\n"]))),Z=function(n){var t=n.name,e=n.path;return Object(x.jsxs)(V,{to:e,children:[t,Object(x.jsx)("div",{className:"top"}),Object(x.jsx)("div",{className:"right"}),Object(x.jsx)("div",{className:"bottom"}),Object(x.jsx)("div",{className:"left"})]})},$=function(n){var t=n.name,e=n.path,o=Object(r.useState)("100%"),a=Object(d.a)(o,2),i=a[0],c=a[1],s=Object(r.useState)("100%"),l=Object(d.a)(s,2),u=l[0],b=l[1],p=Object(r.useState)("0"),h=Object(d.a)(p,2),j=h[0],g=h[1],f=Object(r.useState)("0"),m=Object(d.a)(f,2),O=m[0],v=m[1],w=Object(r.useState)(!1),k=Object(d.a)(w,2),y=k[0],S=k[1],C=function(n){var t=n.currentTarget,e=t.offsetWidth,o=t.offsetHeight,r=t.getBoundingClientRect(),a=r.top,i=r.left,s=window.scrollY+a,l=window.scrollX+i,u=Math.round(Math.sqrt(Math.pow(e,2)+Math.pow(o,2))),p=2*u;c("".concat(p,"px")),b("".concat(p,"px"));var d=Math.round(n.pageY-s)-u,h=Math.round(n.pageX-l)-u;g("".concat(d,"px")),v("".concat(h,"px"))},N=function(n){S(!1),C(n)};return Object(x.jsx)(Q,{className:y?"active":"",onPointerDown:function(n){S(!0),C(n)},onPointerUp:N,onPointerLeave:N,top:j,left:O,overlayWidth:i,overlayHeight:u,children:Object(x.jsx)(Z,{name:t,path:e})})},_=[{name:"Rent",path:"/rent"},{name:"Share",path:"/share"},{name:"Ride",path:"/ride"},{name:"Sixt+",path:"/plus"}],nn=function(){return Object(x.jsx)(K,{children:_.map((function(n){var t=n.name,e=n.path;return Object(x.jsx)($,{name:t,path:e},e)}))})},tn=function(){return Object(r.useContext)(N).isAuthenticated?Object(x.jsxs)(z.d,{children:[Object(x.jsx)(z.b,{path:"/",element:Object(x.jsx)(nn,{})}),Object(x.jsx)(z.b,{path:"/rent",element:Object(x.jsx)(nn,{})}),Object(x.jsx)(z.b,{path:"/share",element:Object(x.jsx)(nn,{})}),Object(x.jsx)(z.b,{path:"/ride",element:Object(x.jsx)(nn,{})}),Object(x.jsx)(z.b,{path:"/plus",element:Object(x.jsx)(nn,{})}),Object(x.jsx)(z.b,{path:"*",element:Object(x.jsx)(z.a,{to:"/"})})]}):Object(x.jsxs)(z.d,{children:[Object(x.jsx)(z.b,{path:"/auth",element:Object(x.jsx)(U,{})}),Object(x.jsx)(z.b,{path:"*",element:Object(x.jsx)(z.a,{to:"/auth"})})]})},en=function(){return Object(x.jsxs)(I,{children:[Object(x.jsx)(p,{}),Object(x.jsxs)(s.a,{children:[Object(x.jsx)(H,{}),Object(x.jsx)(tn,{})]})]})};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(en,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cedf3548.chunk.js.map