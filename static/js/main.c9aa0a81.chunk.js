(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/done.6fc8520a.svg"},,,,function(e,t,n){e.exports=n.p+"static/media/pin.fd6c39aa.svg"},function(e,t,n){e.exports=n.p+"static/media/edit.c22620d9.svg"},function(e,t,n){e.exports=n.p+"static/media/add.b1160944.svg"},function(e,t,n){e.exports=n.p+"static/media/delete.a11d67e2.svg"},function(e,t,n){e.exports=n.p+"static/media/show.df980639.svg"},function(e,t,n){e.exports=n.p+"static/media/hide.20fcb843.svg"},function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),c=n.n(i),s=(n(20),n(2)),r=(n(21),a.createContext()),u=n(9),d=n.n(u),l=n(10),m=n.n(l),b=n(5),f=n.n(b),p=function(e){var t=Object(a.useState)(e.item.title||""),n=Object(s.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)(e.item.title&&!0),u=Object(s.a)(r,2),l=u[0],b=u[1];return Object(a.useEffect)((function(){return e.toggleDone(!0)}),[e.item.isDone]),o.a.createElement("div",{className:"todo-subitem"},o.a.createElement("div",{className:"todo-subitem__check"},e.item.isDone?o.a.createElement("img",{src:f.a,className:"isDone",alt:"done"}):o.a.createElement("span",{className:"checkSpan"}),o.a.createElement("input",{className:"isDoneCheckbox",type:"checkbox",onChange:function(){e.dispatch(e.toggleSubTodoAC(e.id,e.item.subId))}})),l?o.a.createElement("div",{className:"todo-subitem__text"},o.a.createElement("span",{style:e.item.isDone?{textDecoration:"line-through"}:{}},e.item.title||"Press edit")):o.a.createElement("input",{type:"text",value:i,onChange:function(e){return c(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(e.dispatch(e.editSubTodoAC(e.item.subId,e.id,{title:i})),b(!0))},onBlur:function(){b(!0)},autoFocus:!i,placeholder:"Input subtask..."}),o.a.createElement("div",{className:"buttons"},o.a.createElement("img",{src:d.a,alt:"remove",className:"button",onClick:function(){return e.dispatch(e.deleteSubTodoAC(e.id,e.item.subId))}}),o.a.createElement("img",{src:m.a,alt:"edit",className:"button",onClick:function(){b(!1)}})))},E=n(11),D=n.n(E),T=n(12),O=n.n(T),g=n(13),k=n.n(g),v=n(14),h=n.n(v),C=function(e){var t=Object(a.useContext)(r),n=t.dispatch,i=t.addSubTodoAC,c=t.deleteTodoAC,u=t.toggleTodoAC,d=t.editSubTodoAC,l=t.toggleSubTodoAC,m=t.deleteSubTodoAC,b=Object(a.useState)(!0),E=Object(s.a)(b,2),T=E[0],g=E[1],v=function(t){e.subTodo.length===e.subTodo.filter((function(e){return!0===e.isDone})).length?n(u(e.id,t)):n(u(e.id,!t))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.isDone?"todo-item todo-item--done":"todo-item"},o.a.createElement("div",{className:"loader"}),o.a.createElement("div",{className:"todo-item__check"},e.isDone?o.a.createElement("img",{src:f.a,className:"isDone isDone--todo",alt:"done"}):o.a.createElement("span",{className:"checkSpan checkSpan--todo"}),o.a.createElement("input",{type:"checkbox",className:"isDoneCheckbox isDoneCheckbox--todo",checked:e.isDone,onChange:function(){return n(u(e.id,!e.isDone))}})),o.a.createElement("span",null,e.title),o.a.createElement("div",{className:"date"},e.date),o.a.createElement("div",{className:"buttons"},o.a.createElement("img",{src:D.a,className:"button",onClick:function(){return n(i(e.id,{title:"",subId:Date.now()}))},alt:"add"}),o.a.createElement("img",{src:O.a,alt:"delete",className:"button",onClick:function(){return n(c(e.id))}}),o.a.createElement("img",{src:T?h.a:k.a,alt:"hide",className:"button",onClick:function(){return g(!T)}}))),T?e.subTodo.map((function(t){return o.a.createElement(p,Object.assign({key:t.subId},e,{toggleDone:v,dispatch:n,toggleSubTodoAC:l,deleteSubTodoAC:m,editSubTodoAC:d,item:t}))})).reverse():null)},S=n(6),A=n(1),j=function(e,t){switch(t.type){case"FILTER":return Object(A.a)({},e,{filter:t.filter});case"ADD":return Object(A.a)({},e,{tasks:[].concat(Object(S.a)(e.tasks),[{id:Date.now(),date:"".concat((new Date).toLocaleString()),title:t.payload,isDone:!1,subTodo:[],progress:0}])});case"ADD_SUB_TODO":return Object(A.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(A.a)({},e,{subTodo:[].concat(Object(S.a)(e.subTodo),[Object(A.a)({},t.payload,{subId:Date.now(),isDone:!1})])}):e}))});case"TOGGLE_TODO":return Object(A.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(A.a)({},e,{isDone:t.isDone}):e}))});case"TOGGLE_SUB_TODO":return Object(A.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(A.a)({},e,{subTodo:e.subTodo.map((function(e){return e.subId===t.subId?Object(A.a)({},e,{isDone:!e.isDone}):e}))}):e}))});case"EDIT_SUB_TODO":return Object(A.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(A.a)({},e,{subTodo:e.subTodo.map((function(e){return e.subId===t.subId?Object(A.a)({},e,{},t.payload):e}))}):e}))});case"DELETE":return Object(A.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==t.id}))});case"DELETE_SUB_TODO":return Object(A.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(A.a)({},e,{subTodo:e.subTodo.filter((function(e){return e.subId!==t.subId}))}):e}))});default:return e}},y=function(e){return{type:"FILTER",filter:e}},N=function(e,t){return{type:"ADD_SUB_TODO",id:e,payload:t}},I=function(e,t){return{type:"TOGGLE_TODO",id:e,isDone:t}},_=function(e,t){return{type:"TOGGLE_SUB_TODO",subId:t,id:e}},x=function(e,t,n){return{type:"EDIT_SUB_TODO",subId:e,id:t,payload:n}},w=function(e){return{type:"DELETE",id:e}},B=function(e,t){return{type:"DELETE_SUB_TODO",subId:t,id:e}},L=function(){var e=JSON.parse(localStorage.getItem("todos"))||{filter:"All",tasks:[]},t=Object(a.useReducer)(j,e),n=Object(s.a)(t,2),i=n[0],c=n[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),l=d[0],m=d[1];Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(i))}),[i]);return o.a.createElement(r.Provider,{value:{dispatch:c,filterAC:y,addSubTodoAC:N,deleteTodoAC:w,toggleTodoAC:I,editSubTodoAC:x,toggleSubTodoAC:_,deleteSubTodoAC:B}},o.a.createElement("div",{className:"App"},o.a.createElement("h3",null,"Tasker"),o.a.createElement("input",{className:"main-input",type:"text",placeholder:"Input your task...",value:l,onChange:function(e){return m(e.target.value)},autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&(c(function(e){return{type:"ADD",payload:e}}(l)),m(""))}}),o.a.createElement("div",null,o.a.createElement("button",{className:"button button--filter ".concat("All"===i.filter&&"active"),onClick:function(){return c(y("All"))}},"All"),o.a.createElement("button",{className:"button button--filter ".concat("Completed"===i.filter&&"active"),onClick:function(){return c(y("Completed"))}},"Completed"),o.a.createElement("button",{className:"button button--filter ".concat("Active"===i.filter&&"active"),onClick:function(){return c(y("Active"))}},"Active")),"All"===i.filter&&i.tasks.filter((function(){return!0})).map((function(e){return o.a.createElement(C,{key:e.id,subTodo:e.subTodo,isDone:e.isDone,date:e.date,id:e.id,title:e.title})})).reverse()||"Completed"===i.filter&&i.tasks.filter((function(e){return!0===e.isDone})).map((function(e){return o.a.createElement(C,{key:e.id,subTodo:e.subTodo,isDone:e.isDone,date:e.date,id:e.id,title:e.title})})).reverse()||"Active"===i.filter&&i.tasks.filter((function(e){return!1===e.isDone})).map((function(e){return o.a.createElement(C,{key:e.id,subTodo:e.subTodo,isDone:e.isDone,date:e.date,id:e.id,title:e.title})})).reverse()))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.c9aa0a81.chunk.js.map