(this["webpackJsonpstep-test"]=this["webpackJsonpstep-test"]||[]).push([[0],[,,,function(e,t,n){e.exports={container:"Test_container__PJar5",testWrapper:"Test_testWrapper__Fb9n2",total:"Test_total__3y5xD",resetBtn:"Test_resetBtn__3gqel",right:"Test_right__1bjVm",wrong:"Test_wrong__1BiS8"}},,,,function(e,t,n){e.exports={answerInput:"Question_answerInput__2Vl_e",question:"Question_question__D603n"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(8),i=n.n(c),a=(n(13),n(14),n(5)),u=n(4),o=n(2),j=n(7),b=n.n(j),l=n(0),d=function(e){var t=e.item,n=e.onUserAnswer;return Object(l.jsxs)("div",{className:b.a.question,children:["\u0412\u043e\u043f\u0440\u043e\u0441 ",t.id,": ",t.question,Object(l.jsx)("div",{className:b.a.answerInput,children:Object(l.jsx)("input",{onChange:function(e){n(Object(u.a)({},t.id,Object(o.a)(Object(o.a)({},t),{},{userAnswer:e.target.value})))},type:"text",value:t.userAnswer})})]})},O=(n(16),function(e){var t=e.progress,n=e.step;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"progress-bar",style:{width:"".concat(t,"%")},children:Object(l.jsxs)("span",{className:"label",children:["\u0412\u043e\u043f\u0440\u043e\u0441 ",n+1]})})})}),p=n(3),h=n.n(p),x=[{id:1,question:"\u041a\u0430\u043a\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u0431\u044b\u043b \u0433\u043e\u0440\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u043a\u0440\u0430\u043b \u0422\u0435\u0434 \u041c\u043e\u0441\u0431\u0438 \u0432 \u0441\u0435\u0440\u0438\u0430\u043b\u0435 '\u041a\u0430\u043a \u044f \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043b \u0432\u0430\u0448\u0443 \u043c\u0430\u043c\u0443'?",answer:"\u0421\u0438\u043d\u0438\u0439",userAnswer:""},{id:2,question:"\u041a\u043e\u0440\u043e\u043d\u043d\u0430\u044f \u0444\u0440\u0430\u0437\u0430 \u0428\u0435\u043b\u0434\u043e\u043d\u0430 \u041a\u0443\u043f\u0435\u0440\u0430, \u0438\u0437 \u0441\u0435\u0440\u0438\u0430\u043b\u0430 '\u0422\u0435\u043e\u0440\u0438\u044f \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0432\u0437\u0440\u044b\u0432\u0430', \u0432 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u041a\u0443\u0440\u0430\u0436-\u0411\u0430\u043c\u0431\u0435\u0439?",answer:"\u0411\u0443\u0433\u0430\u0433\u0430\u0448\u0435\u043d\u044c\u043a\u0430",userAnswer:""},{id:3,question:"\u0421\u0442\u043e\u043b\u0438\u0446\u0430 \u0424\u0440\u0430\u043d\u0446\u0438\u0438?",answer:"\u041f\u0430\u0440\u0438\u0436",userAnswer:""}],w=x.reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(u.a)({},t.id,t))}),{}),_=100/x.length,f=function(){var e=r.a.useState(0),t=Object(a.a)(e,2),n=t[0],s=t[1],c=r.a.useState(w),i=Object(a.a)(c,2),u=i[0],j=i[1],b=r.a.useState(!1),p=Object(a.a)(b,2),f=p[0],v=p[1],m=function(e){j(Object(o.a)(Object(o.a)({},u),e))},g=function(e){return u[e.id]},A=Object.keys(u).every((function(e){return!!u[e].userAnswer})),N=Object.keys(u).reduce((function(e,t){return u[t].userAnswer?e+_:e}),0);return Object(l.jsx)("div",{className:h.a.container,children:Object(l.jsx)("div",{className:h.a.testWrapper,children:f?Object(l.jsxs)("div",{className:h.a.total,children:[x.map((function(e,t){var n=g(e),s="\u0412\u0430\u0448 \u043e\u0442\u0432\u0435\u0442: ".concat(n.userAnswer,", "),r=n.answer.toLowerCase()===n.userAnswer.toLowerCase();return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[" ",n.question," "]}),Object(l.jsxs)("div",{className:r?h.a.right:h.a.wrong,children:[s,r?"\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e":"\u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e, \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 ".concat(n.answer)]})]},t)})),Object(l.jsx)("button",{onClick:function(){s(0),j(w),v(!1)},className:h.a.resetBtn,children:"\u041f\u0440\u043e\u0439\u0442\u0438 \u0437\u0430\u043d\u043e\u0432\u043e"}),Object(l.jsx)("div",{children:"\u0422\u0435\u043c \u0431\u043e\u043b\u0435\u0435 \u0432\u0441\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u0442\u044b \u0443\u0436\u0435 \u0437\u043d\u0430\u0435\u0448\u044c \u0410\u043d\u0434\u0440\u0435\u0439\u043a\u0430!"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{progress:N,step:n}),x.map((function(e,t){return Object(l.jsx)("div",{children:t===n&&Object(l.jsx)(d,{onUserAnswer:m,item:g(e)})},t)})),!!n&&Object(l.jsx)("button",{onClick:function(){return s((function(e){return e-1}))},children:"\u041d\u0430\u0437\u0430\u0434"}),n!==x.length-1&&Object(l.jsx)("button",{onClick:function(){return s((function(e){return e+1}))},children:"\u0412\u043f\u0435\u0440\u0435\u0434"}),A&&Object(l.jsx)("button",{onClick:function(){return v(!0)},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b"})]})})})};var v=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(f,{})})};i.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.862101b7.chunk.js.map