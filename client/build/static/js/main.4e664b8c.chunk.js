(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),r=n(12),a=n.n(r),i=(n(22),n(13)),s=n(14),u=n(17),h=n(16),l=(n(23),n(15)),d=n.n(l),p=n(1),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={response:{}},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;d.a.get("/api/v1/say-something").then((function(e){var n=e.data;t.setState({response:n})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Hello from the frontend!"}),Object(p.jsx)("h1",{children:this.state.response.body})]})}}]),n}(c.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),r(t),a(t)}))};a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),j()}},[[43,1,2]]]);
//# sourceMappingURL=main.4e664b8c.chunk.js.map