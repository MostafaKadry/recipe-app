(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(5),i=c.n(a),s=(c(11),c(4)),o=c.n(s),p=c(6),u=c(2),j=(c(13),c(0)),l=function(e){return Object(j.jsxs)("div",{className:"each-recipe",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsxs)("p",{children:[" Calories = ",e.calories]}),Object(j.jsx)("img",{src:e.image,alt:""}),Object(j.jsx)("ul",{children:e.ingredients.map((function(e){return Object(j.jsx)("li",{children:e.text})}))})]})},b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(u.a)(a,2),s=i[0],b=i[1],d=Object(n.useState)("chicken"),h=Object(u.a)(d,2),f=h[0],O=h[1],m="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(f,"&app_id=").concat("fd66710f","&app_key=").concat("b730ff582098b26929d3ced30bdb1a62\t");Object(n.useEffect)((function(){x()}),[f]);var x=function(){var e=Object(p.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"search-form",children:[Object(j.jsx)("input",{className:"search-bar",type:"text",placeholder:"What is recipe you need to query for ? ...",onChange:function(e){b(e.target.value)}}),Object(j.jsx)("button",{className:"searchBtn",onClick:function(e){e.preventDefault(),""===s?console.log("no"):O(s)},children:"Query"})]}),Object(j.jsx)("div",{className:"recipes-box",children:c.map((function(e){return Object(j.jsx)(l,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},Math.random())}))})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.db1e138b.chunk.js.map