(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{231:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(48),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("/items/category/2?fields=*,articles.*");case 3:return n=e.sent,e.abrupt("return",{page:n.data,articles:n.data.articles});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.page.title,titleTemplate:"%s | FishInfo"}}}),l=r(17),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("HeroBanner",{attrs:{page:t.page}}),t._v(" "),r("section",{staticClass:"content"},[r("div",{staticClass:"container"},[r("div",{domProps:{innerHTML:t._s(t.page.content)}}),t._v(" "),r("div",{staticClass:"articles-cards-grid"},t._l(t.articles,(function(article,e){return r("NuxtLink",{key:article.id,staticClass:"article-card",attrs:{to:"/fishes/"+article.id}},[r("img",{staticClass:"card-thumb w-full",attrs:{src:t.$axios.defaults.baseURL+"/assets/"+article.hero_image+"?key=system-medium-cover",alt:article.title}}),t._v(" "),r("span",{staticClass:"card-title"},[t._v(t._s(article.title))])])})),1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroBanner:r(112).default})}}]);