"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{25:function(r,e,t){t.d(e,{AR:function(){return s},Ai:function(){return o},Dd:function(){return f},it:function(){return d},qV:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="4b2aa0e9105e7c70a2de3973dd6dcaa4",s=function(){var r=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e,"&include_adult=false&page=1"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&page=1"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},247:function(r,e,t){t.r(e);var n=t(861),a=t(439),c=t(757),u=t.n(c),i=t(791),s=t(689),o=t(25),p=t(184);e.default=function(){var r=(0,s.UO)().movieId,e=(0,i.useState)(null),t=(0,a.Z)(e,2),c=t[0],f=t[1];if((0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Dd)(r);case 3:t=e.sent,f(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),c)return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Cast"}),(0,p.jsx)("ul",{children:c.map((function(r){return(0,p.jsx)("li",{children:r.profile_path?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r.profile_path),alt:r.name}),(0,p.jsxs)("p",{children:["Name: ",r.name]}),(0,p.jsxs)("p",{children:["Character: ",r.character]}),(0,p.jsxs)("p",{children:["ID: ",r.id]})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{children:["Name: ",r.name]}),(0,p.jsxs)("p",{children:["Character: ",r.character]}),(0,p.jsxs)("p",{children:["ID: ",r.id]}),(0,p.jsx)("p",{children:"No photo available"})]})},r.id)}))})]})}}}]);
//# sourceMappingURL=247.a8e03417.chunk.js.map