(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{34:function(e,r,a){"use strict";a.r(r);var t=a(1),c=a.n(t),s=a(12),n=a.n(s),i=a(5),l=Object(t.createContext)(),o=a(6),h="[auth] Login",j="[auth] Logout",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case h:return Object(o.a)(Object(o.a)({},r.payload),{},{logged:!0});case j:return{logged:!1};default:return e}},u=a(3),b=a(2),m=a(0),p=function(){var e=Object(t.useContext)(l).dispatch,r=Object(b.g)();return Object(m.jsxs)("div",{className:"container mt-5",children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){e({type:h,payload:{name:"Axel"}});var a=localStorage.getItem("lastPath")||"/";r(a,{replace:!0})},children:"Login with Google"})]})},O=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],x=function(e){var r=e.id,a=e.superhero,t=(e.publisher,e.alter_ego),c=e.first_appearance,s=e.characters;return Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("div",{className:"card animate__animated animate__fadeIn",children:Object(m.jsxs)("div",{className:"row no-gutters",children:[Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)("img",{src:"/assets/".concat(r,".jpg"),className:"card-img",alt:a})}),Object(m.jsx)("div",{className:"col-8",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:a}),Object(m.jsx)("p",{className:"card-text",children:t}),t!==s&&Object(m.jsx)("p",{className:"text-muted",children:s}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:c})}),Object(m.jsx)(u.b,{to:"/hero/".concat(r),children:"M\xe1s..."})]})})]})})})},v=function(e){var r=e.publisher,a=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("".concat(e," is not a valid publisher"));return O.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(m.jsx)("div",{className:"row rows-cols-1 row-cols-md-2 row-cols-sm-1 g-3 animate__animated animate__fadeIn",children:a.map((function(e){return Object(m.jsx)(x,Object(o.a)({},e),e.id)}))})},f=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"DCScreen"}),Object(m.jsx)("hr",{}),Object(m.jsx)(v,{publisher:"DC Comics"})]})},g=function(){var e=Object(b.h)().heroeId,r=Object(b.g)(),a=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return O.find((function(r){return r.id===e}))}(e)}),[e]);if(!a)return Object(m.jsx)(b.a,{to:"/"});var c=a.id,s=a.alter_ego,n=a.superhero,i=a.publisher,l=a.first_appearance,o=a.characters,h="/assets/".concat(c,".jpg");return Object(m.jsxs)("div",{className:"row mt-5",children:[Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)("img",{src:h,alt:n,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(m.jsxs)("div",{className:"col-8",children:[Object(m.jsx)("h3",{children:a.superhero}),Object(m.jsxs)("ul",{className:"list-group",children:[Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"ALter ego:"})," ",s]}),Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"Publisher:"})," ",i]}),Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"First_appearance:"})," ",l]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("h5",{children:"Characters"}),Object(m.jsx)("p",{children:o}),Object(m.jsx)("button",{className:"btn btn-outline-info",onClick:function(){r(-1)},children:"Regresar"})]})]})},C=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"MarveScreen"}),Object(m.jsx)("hr",{}),Object(m.jsx)(v,{publisher:"Marvel Comics"})]})},_=a(13),N=a.n(_),y=a(7),M=function(){var e=Object(b.g)(),r=Object(b.f)(),a=N.a.parse(r.search).q,c=void 0===a?"":a,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(t.useState)(e),a=Object(i.a)(r,2),c=a[0],s=a[1];return[c,function(e){var r=e.target;s(Object(o.a)(Object(o.a)({},c),{},Object(y.a)({},r.name,r.value)))},function(){s(e)}]}({searchText:c}),n=Object(i.a)(s,2),l=n[0],h=n[1],j=l.searchText,d=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e.length?[]:(e=e.toLowerCase(),O.filter((function(r){return r.superhero.toLowerCase().includes(e)})))}(c)}),[c]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"B\xfasquedas"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-5",children:[Object(m.jsx)("h4",{children:"Buscar"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{onSubmit:function(r){r.preventDefault(),e("?q=".concat(j))},children:[Object(m.jsx)("input",{type:"text",placeholder:"Buscar un heroe",className:"form-control",name:"searchText",autoComplete:"off",value:j,onChange:h}),Object(m.jsx)("button",{className:"btn btn-outline-primary mt-1",type:"submit",children:"Buscar..."})]})]}),Object(m.jsxs)("div",{className:"col-7",children:[Object(m.jsx)("h4",{children:"Resultados"}),Object(m.jsx)("hr",{}),""===c?Object(m.jsx)("div",{className:"alert alert-info",children:"Buscar un h\xe9roe"}):d.map((function(e){return Object(m.jsx)(x,Object(o.a)({},e),e.id)})),0===d.length&&Object(m.jsxs)("div",{className:"alert alert-danger",children:["No hay resultados: ",c]})]})]})]})},k=function(){var e=Object(t.useContext)(l),r=e.user,a=e.dispatch,c=Object(b.g)();return Object(m.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(m.jsx)(u.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(m.jsx)("div",{className:"navbar-collapse",children:Object(m.jsxs)("div",{className:"navbar-nav",children:[Object(m.jsx)(u.c,{className:"nav-item nav-link",to:"/marvel",children:"Marvel"}),Object(m.jsx)(u.c,{className:"nav-item nav-link",to:"/dc",children:"DC"}),Object(m.jsx)(u.c,{className:"nav-item nav-link",to:"/search",children:"Search"})]})}),Object(m.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end",children:Object(m.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(m.jsx)("span",{className:"nav-item nav-link text-info",children:r.name}),Object(m.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){a({type:j}),c("/login",{replace:!0})},children:"Logout"})]})})]})},S=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"marvel",element:Object(m.jsx)(C,{})}),Object(m.jsx)(b.b,{path:"dc",element:Object(m.jsx)(f,{})}),Object(m.jsx)(b.b,{path:"search",element:Object(m.jsx)(M,{})}),Object(m.jsx)(b.b,{path:"hero/:heroeId",element:Object(m.jsx)(g,{})}),Object(m.jsx)(b.b,{path:"/",element:Object(m.jsx)(C,{})})]})})]})},D=function(e){var r=e.children,a=Object(t.useContext)(l).user,c=Object(b.f)(),s=c.pathname,n=c.search;return localStorage.setItem("lastPath",s+n),a.logged?r:Object(m.jsx)(b.a,{to:"/login"})},w=function(e){var r=e.children;return!1===Object(t.useContext)(l).user.logged?r:Object(m.jsx)(b.a,{to:"/"})},B=function(){return Object(m.jsx)(u.a,{children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/login",element:Object(m.jsx)(w,{children:Object(m.jsx)(p,{})})}),Object(m.jsx)(b.b,{path:"/*",element:Object(m.jsx)(D,{children:Object(m.jsx)(S,{})})})]})})},A=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(t.useReducer)(d,{},A),r=Object(i.a)(e,2),a=r[0],c=r[1];return Object(t.useEffect)((function(){a&&localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(m.jsx)(l.Provider,{value:{user:a,dispatch:c},children:Object(m.jsx)(B,{})})};a(33);n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e6cb1b1e.chunk.js.map