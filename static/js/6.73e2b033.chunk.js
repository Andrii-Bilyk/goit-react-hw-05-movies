"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[6],{25:function(t,n,e){e.d(n,{AR:function(){return s},Ai:function(){return o},Dd:function(){return p},it:function(){return d},qV:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="4b2aa0e9105e7c70a2de3973dd6dcaa4",s=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&include_adult=false&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},6:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(87),u=e(25),i=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];return(0,a.useEffect)((function(){(0,u.AR)().then((function(t){s(t.results)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Trending Movies"}),(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=6.73e2b033.chunk.js.map