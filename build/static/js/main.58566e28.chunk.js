(this["webpackJsonpreact-crash-course"]=this["webpackJsonpreact-crash-course"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),l=n(2),d=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsxs)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:[" ",n]})};u.defaultProps={color:"lightblue"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("h1",{children:[" ",t]}),Object(d.jsx)(j,{onClick:n,text:c?"Close":"Add",color:c?"red":"green"})]})};b.defaultProps={title:"Task Tracker"};var h=b,O=n(8),m=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task  ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[" ",t.text," ",Object(d.jsx)(O.a,{onClick:function(){return n(t.id)},style:{color:"red",cursor:"pointer"}})," "]}),Object(d.jsxs)("p",{children:[" ",t.day," "]})]})},x=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(m,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],m=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,date:u,reminder:O}),o(""),j(""),m(!1)):alert("please add a task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:" Tasks "}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:" Date and Time "}),Object(d.jsx)("input",{type:"text",placeholder:"Add Date and Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:" Reminder "}),Object(d.jsx)("input",{type:"checkbox",value:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var p=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",reminder:!0},{id:3,text:"It is nice Jacob",Day:"Day of your anniversary",reminder:!0}]),o=Object(l.a)(a,2),u=o[0],j=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(d.jsx)(f,{onAdd:function(e){var t=Math.floor(1e3*Math.random())+1,n=Object(i.a)({id:t},e);j([].concat(Object(s.a)(u),[n]))}}),u.length>0?Object(d.jsx)(x,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):" No list to show"]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.58566e28.chunk.js.map