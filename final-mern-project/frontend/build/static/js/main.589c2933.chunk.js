(this["webpackJsonpreact-frontend-project"]=this["webpackJsonpreact-frontend-project"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(51);t.a=function(e){return r.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},r.a.createElement("div",{className:"lds-dual-ring"}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),r=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(6),l=n.n(c);n(45);t.a=function(e){return l.a.createPortal(r.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4);n(53);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(11),r=n.n(a),c=n(12),l=n(8),o=n(0),u=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],u=Object(o.useState)(),s=Object(l.a)(u,2),i=s[0],m=s[1],d=Object(o.useRef)([]),E=Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c,l,o,u,s,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,l=i.length>3&&void 0!==i[3]?i[3]:{},a(!0),o=new AbortController,d.current.push(o),e.prev=6,e.next=9,fetch(t,{method:n,body:c,headers:l,signal:o.signal});case 9:return u=e.sent,e.next=12,u.json();case 12:if(s=e.sent,d.current=d.current.filter((function(e){return e!==o})),u.ok){e.next=16;break}throw new Error(s.message);case 16:return a(!1),e.abrupt("return",s);case 20:throw e.prev=20,e.t0=e.catch(6),m(e.t0.message),a(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:i,sendRequest:E,clearError:function(){m(null)}}}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(26),l=n(19);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:r.a.createElement(l.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(48);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=n(55),u=n(15),s=(n(52),function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return l.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(u.a,{onClick:e.onCancel}),r.a.createElement(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(s,e)))}},,,,function(e,t,n){e.exports=n(54)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(6),o=n.n(l),u=(n(35),n(1)),s=n(4),i=n(8),m=(n(36),n(37),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),d=n(14),E=(n(38),function(e){var t=Object(r.useContext)(d.a);return c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.c,{to:"/",exact:!0},"All Users")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/".concat(t.userId,"/places")},"My Places")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/places/new"},"New Place")),!t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/auth"},"Authenticate")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),f=n(55),b=(n(44),function(e){var t=c.a.createElement(f.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return o.a.createPortal(t,document.getElementById("drawer-hook"))}),h=n(15),g=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],l=n[1],o=function(){l(!1)};return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(h.a,{onClick:o}),c.a.createElement(b,{show:a,onClick:o},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(E,null))),c.a.createElement(m,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){l(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(s.b,{to:"/"},"YourPlaces")),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(E,null))))},v=n(11),p=n.n(v),O=n(12),k=(n(47),function(e){return c.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},c.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),N=n(22),j=(n(49),function(e){return c.a.createElement("ul",{className:"user-item"},c.a.createElement("div",null,c.a.createElement(N.a,{className:"user-item__content"},c.a.createElement(s.b,{to:"/".concat(e.id,"/places")},c.a.createElement("div",{className:"user-item__image"},c.a.createElement(k,{image:"".concat("http://localhost:5000","/").concat(e.image),alt:e.name})),c.a.createElement("div",{className:"user-item__info"},c.a.createElement("h2",null,e.name),c.a.createElement("h3",null,e.placeCount," ",1===e.placeCOunt?"Place":"Places"," "))))))}),w=(n(50),function(e){return 0===e.items.length?c.a.createElement("div",{className:"center"},c.a.createElement("h2",null,"No users found.")):c.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return c.a.createElement(j,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})})))}),C=n(20),y=n(13),I=n(21),_=function(){var e=Object(C.a)(),t=e.isLoading,n=e.error,a=e.sendRequest,l=e.clearError,o=Object(r.useState)(),u=Object(i.a)(o,2),s=u[0],m=u[1];return Object(r.useEffect)((function(){(function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("".concat("http://localhost:5000/api","/users"));case 3:t=e.sent,m(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{error:n,onClear:l}),t&&c.a.createElement("div",{className:"center"},c.a.createElement(y.a,null)),!t&&s&&c.a.createElement(w,{items:s}))},x=c.a.lazy((function(){return n.e(3).then(n.bind(null,71))})),S=c.a.lazy((function(){return Promise.all([n.e(7),n.e(6)]).then(n.bind(null,74))})),D=c.a.lazy((function(){return n.e(5).then(n.bind(null,72))})),P=c.a.lazy((function(){return n.e(4).then(n.bind(null,73))})),L=function(){var e,t=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(),o=Object(i.a)(l,2),u=o[0],s=o[1],m=Object(r.useState)(!1),d=Object(i.a)(m,2),E=d[0],f=d[1],b=Object(r.useCallback)((function(e,t,n){c(t),f(e);var a=n||new Date((new Date).getTime()+36e5);s(a),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:a.toISOString()}))}),[]),h=Object(r.useCallback)((function(){c(null),s(null),f(null),localStorage.removeItem("userData")}),[]);return Object(r.useEffect)((function(){if(n&&u){var e=u.getTime()-(new Date).getTime();a=setTimeout(h,e)}else clearTimeout(a)}),[n,h,u]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&b(e.userId,e.token,new Date(e.expiration))}),[b]),{token:n,login:b,logout:h,userId:E}}(),n=t.token,l=t.login,o=t.logout,m=t.userId;return e=n?c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(_,null)),c.a.createElement(u.b,{path:"/:userId/places"},c.a.createElement(S,null)),c.a.createElement(u.b,{path:"/:userId/places"},c.a.createElement(S,null)),c.a.createElement(u.b,{path:"/places/new",exact:!0},c.a.createElement(x,null)),c.a.createElement(u.b,{path:"/places/:placeId"},c.a.createElement(D,null)),c.a.createElement(u.a,{to:"/"})):c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(_,null)),c.a.createElement(u.b,{path:"/:userId/places"},c.a.createElement(S,null)),c.a.createElement(u.b,{path:"/auth"},c.a.createElement(P,null)),c.a.createElement(u.a,{to:"/auth"})),c.a.createElement(d.a.Provider,{value:{isLoggedIn:!!n,token:n,userId:m,login:l,logout:o}},c.a.createElement(s.a,null,c.a.createElement(g,null),c.a.createElement("main",null,c.a.createElement(u.d,null,c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",{className:"center"},c.a.createElement(y.a,null))},e)))))};o.a.render(c.a.createElement(L,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.589c2933.chunk.js.map