"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[534],{4672:function(n,e,r){r.d(e,{O:function(){return h}});var t,o,a,i=r(6871),c=r(168),s=r(6444),u=r(501),l=(0,s.ZP)(u.rU)(t||(t=(0,c.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n  margin: 10px 5px;\n\n  :hover, :focus {\n    color: orange;\n  }\n"]))),p=s.ZP.ul(o||(o=(0,c.Z)(["\n  margin-left: 40px;\n  list-style: disc;\n"]))),f=s.ZP.li(a||(a=(0,c.Z)(["\n  :hover, :focus {\n    color: orange;\n  }\n"]))),x=r(184),h=function(n){var e=n.movies,r=n.path,t=(0,i.TH)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p,{children:e&&e.map((function(n){return(0,x.jsx)(f,{children:(0,x.jsx)(l,{to:"".concat(r).concat(n.id),state:{from:t},children:n.title})},n.id)}))})})}},5534:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t,o,a,i=r(885),c=r(3032),s=r(2791),u=r(501),l=r(4672),p=r(5705),f=r(168),x=r(6444),h=x.ZP.button(t||(t=(0,f.Z)(["\n    cursor: pointer;\n    margin-left: 20px;\n    padding: 5px 10px;\n    font-size: 20px;\n    border-radius: 10px;\n\n    :hover, :focus {\n        background-color: orange;\n    }\n"]))),d=(0,x.ZP)(p.gN)(o||(o=(0,f.Z)(["\n    font-size: 18px;\n    margin-left: 10px;\n    border-radius: 10px;\n    padding: 3px 10px;\n"]))),m=(0,x.ZP)(p.l0)(a||(a=(0,f.Z)(["\n    margin-bottom: 20px;\n"]))),g=r(184),Z=function(n){var e=n.submit;return(0,g.jsx)(p.J9,{initialValues:{searchValue:""},onSubmit:e,children:(0,g.jsxs)(m,{children:[(0,g.jsx)(d,{name:"searchValue",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,g.jsx)(h,{type:"submit",children:"Search"})]})})},v=function(){var n=(0,s.useState)(null),e=(0,i.Z)(n,2),r=e[0],t=e[1],o=(0,u.lr)(),a=(0,i.Z)(o,2),p=a[0],f=a[1];(0,s.useEffect)((function(){var n=p.get("query");n&&(0,c.X)(c.Q.search,n).then((function(n){t(n.results)}))}),[p,f]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{submit:function(n,e){var r=n.searchValue,t=e.resetForm;f({query:r}),t()}}),r&&(0,g.jsx)(l.O,{movies:r,path:""})]})}}}]);
//# sourceMappingURL=534.8fa7343e.chunk.js.map