(this["webpackJsonppractica-1"]=this["webpackJsonppractica-1"]||[]).push([[0],{43:function(e,t,a){e.exports=a(57)},48:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),m=(a(48),a(31)),u=a(5),i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"CarWash Employee Directory"))},s=function(e){var t=e.searchHandler;return r.a.createElement("form",{className:"search"},r.a.createElement("input",{onChange:function(e){t(e.target.value)},type:"text",placeholder:"Search..."}))},o=a(74),d=a(40),E=a.n(d),f=a(39),p=a.n(f),b=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=Object(n.useState)(t),r=Object(u.a)(a,2),l=r[0],c=r[1],i=Object(n.useMemo)((function(){var t=Object(m.a)(e);return null!==l&&t.sort((function(e,t){return e[l.key]<t[l.key]?"ascending"===l.direction?-1:1:e[l.key]>t[l.key]?"ascending"===l.direction?1:-1:0})),t}),[e,l]),s=function(e){var t="ascending";l&&l.key===e&&"ascending"===l.direction&&(t="descending"),c({key:e,direction:t})};return{users:i,requestSort:s,sortConfig:l}}(e.users),a=t.users,l=t.requestSort,c=t.sortConfig,i=e.editUser,d=e.deleteUser,f=Object(n.useState)(""),b=Object(u.a)(f,2),g=b[0],h=b[1],v=function(e){if(c)return c.key===e?c.direction:void 0},N=a.filter((function(e){return Object.keys(e).some((function(t){return e[t].toString().toLowerCase().includes(g.toString().toLowerCase())}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(s,{searchHandler:function(e){h(e)}}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",null,r.a.createElement("button",{type:"button",onClick:function(){return l("first_name")},className:v("first_name")},"First Name")),r.a.createElement("th",null,r.a.createElement("button",{type:"button",onClick:function(){return l("last_name")},className:v("last_name")},"Last Name")),r.a.createElement("th",null,r.a.createElement("button",{type:"button",onClick:function(){return l("username")},className:v("username")},"Username")),r.a.createElement("th",null,r.a.createElement("button",{type:"button",onClick:function(){return l("email")},className:v("email")},"Email")),r.a.createElement("th",null))),r.a.createElement("tbody",null,N.length>0?N.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("img",{src:e.image,alt:e.first_name+" "+e.last_name})),r.a.createElement("td",null,e.first_name),r.a.createElement("td",null,e.last_name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(o.a,{"aria-label":"edit",onClick:function(){i(e)}},r.a.createElement(p.a,null)),r.a.createElement(o.a,{"aria-label":"delete",onClick:function(){return d(e.id)}},r.a.createElement(E.a,null))))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:5},"No Users"))))))},g=a(17),h=a(19),v=function(e){var t={id:null,first_name:"",last_name:"",username:"",password:"",email:"",image:""},a=Object(n.useState)(t),l=Object(u.a)(a,2),c=l[0],m=l[1],i=function(e){var t=e.target,a=t.name,n=t.value;m(Object(h.a)(Object(h.a)({},c),{},Object(g.a)({},a,n)))};return r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),c.first_name&&c.last_name&&(e.addUser(c),m(t))}},r.a.createElement("h2",null,"Add User"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"first_name",value:c.first_name,onChange:i,pattern:"[a-zA-Z]+",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"last_name",value:c.last_name,onChange:i,pattern:"[a-zA-Z]+",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:i,pattern:"[a-zA-Z0-9-]+",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"text",name:"password",value:c.password,onChange:i,pattern:"[a-zA-Z0-9-]+",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",value:c.email,onChange:i,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",required:!0})),r.a.createElement("button",{className:"modal-button"},"Add"))},N=function(e){var t=Object(n.useState)(e.currentUser),a=Object(u.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)((function(){c(e.currentUser)}),[e]);var m=function(e){var t=e.target,a=t.name,n=t.value;c(Object(h.a)(Object(h.a)({},l),{},Object(g.a)({},a,n)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(l.id,l)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("h2",null,"Edit User"),r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"first_name",value:l.first_name,onChange:m,pattern:"[a-zA-Z]+",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"last_name",value:l.last_name,onChange:m,pattern:"[a-zA-Z]+",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",value:l.username,onChange:m,pattern:"[a-zA-Z0-9-]+",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",value:l.password,onChange:m,pattern:"[a-zA-Z0-9-]+",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",value:l.email,onChange:m,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",required:!0})),r.a.createElement("button",{className:"modal-button"},"Update user"))},j=function(e){for(var t=e.usersPerPage,a=e.totalUsers,n=e.paginate,l=[],c=1;c<=Math.ceil(a/t);c++)l.push(c);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},l.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"!#",className:"page-link"},e))}))))},O=function(e){var t=e.isShowing,a=e.hide,n=e.content;return t?c.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-overlay"}),r.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:a},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n))),document.body):null},_=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return{isShowing:a,toggle:function(){r(!a)}}},y=a(73),C=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),o=s[0],d=s[1],E=Object(n.useState)({id:null,first_name:"",last_name:"",username:"",email:"",image:""}),f=Object(u.a)(E,2),p=f[0],g=f[1],h=Object(n.useState)(1),C=Object(u.a)(h,2),S=C[0],k=C[1],U=Object(n.useState)(10),w=Object(u.a)(U,1)[0],z=_(),q=z.isShowing,x=z.toggle;Object(n.useEffect)((function(){Object(y.a)("http://localhost:3000/users").then((function(e){return e.data.map((function(e){return{id:e._id,first_name:e.first_name,last_name:e.last_name,username:e.username,email:e.email,image:e.image}}))})).then((function(e){l(e)}))}),[]);var A=S*w,Z=A-w,P=a.slice(Z,A);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"button-add",onClick:x},"Add User")),o?r.a.createElement(O,{isShowing:q,hide:x,content:r.a.createElement(N,{setEditing:d,currentUser:p,updateUser:function(e,t){d(!1),l(a.map((function(a){return a.id===e?t:a}))),x()}})}):r.a.createElement(O,{isShowing:q,hide:x,content:r.a.createElement(v,{addUser:function(e){x(),e.id=a.length+1,e.image="https://randomuser.me/api/portraits/thumb/lego/1.jpg",y.a.post("http://localhost:3000/users",{user:e}).then((function(t){console.log("Data:",t),l([e].concat(Object(m.a)(a)))}))}})}),r.a.createElement(b,{users:P,editUser:function(e){d(!0),x(),g({id:e.id,first_name:e.first_name,last_name:e.last_name,username:e.username,email:e.email,image:e.image})},deleteUser:function(e){l(a.filter((function(t){return t.id!==e})))}}),r.a.createElement(j,{usersPerPage:w,totalUsers:a.length,paginate:function(e){return k(e)}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.eae5e017.chunk.js.map