global.webpackJsonp([6],{159:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"index"},[n("scroll-view",{staticClass:"swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabs,function(e,r){return n("block",{key:e.id},[n("view",{class:["swiper-tab-list",t.currentTab==r?"on":""],attrs:{id:e.id,"data-current":r,eventid:"0-"+r},on:{tap:t.swichNav}},[t._v(t._s(e.name))])])})),t._v(" "),n("swiper",{staticClass:"swiper-box",attrs:{current:t.currentTab,duration:"300",eventid:"2"},on:{change:t.bindChange}},t._l(t.newsitems,function(e,r){return n("block",{key:r},[n("swiper-item",{attrs:{mpcomid:"0-"+r}},[n("scroll-view",{staticClass:"index-bd",attrs:{"scroll-y":"",eventid:"1-"+r},on:{scrolltolower:function(e){t.loadMore(r)}}},t._l(e,function(e,r){return n("block",{key:r},[n("view",{staticClass:"tab-list"},[t._v(t._s(e.name)+"-"+t._s(e.label))])])}))],1)],1)}))],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s},251:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(1)),s=i(n(84));function i(t){return t&&t.__esModule?t:{default:t}}n(0).default;new r.default(s.default).$mount(),e.default={config:{navigationBarTitleText:"顶部选项卡"}}},335:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=n(5),i=(r=s)&&r.__esModule?r:{default:r};function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(s,i){try{var a=e[s](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}("next")})}}var u=n(0).default;e.default={data:function(){return{title:"tabbar",scrollLeft:0,isClickChange:!1,currentTab:0,tabs:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],newsitems:[]}},onLoad:function(){this.newsitems=this.randomfn()},onUnload:function(){this.scrollLeft=0,this.isClickChange=!1,this.currentTab=0},methods:{bindChange:function(){var t=a(i.default.mark(function t(e){var n,r,s,a,o,c,l,d,f;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.current,!this.isClickChange){t.next=5;break}return this.currentTab=n,this.isClickChange=!1,t.abrupt("return");case 5:return t.next=7,this.getWidth("tab-bar");case 7:r=t.sent,s=r.scrollLeft,a=0,o=0;case 11:if(!(o<n)){t.next=19;break}return t.next=14,this.getWidth(this.tabs[o].id);case 14:c=t.sent,a+=c.width;case 16:o++,t.next=11;break;case 19:return l=u.getSystemInfoSync().windowWidth,t.next=22,this.getWidth(this.tabs[n].id);case 22:d=t.sent,f=d.width,a+f-s>l&&(this.scrollLeft=a+f-l),a<s&&(this.scrollLeft=a),this.isClickChange=!1,this.currentTab=n;case 28:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getWidth:function(t){return new Promise(function(e,n){u.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(n){"tab-bar"===t&&console.log("id=",t,"数据:",n),e(n)}).exec()})},swichNav:function(){var t=a(i.default.mark(function t(e){var n,r;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentTab!==e.target.dataset.current){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getWidth("tab-bar");case 6:n=t.sent,r=n.scrollLeft,this.scrollLeft=r,this.isClickChange=!0,this.currentTab=e.target.dataset.current;case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),loadMore:function(t){for(var e=this.newsitems[t][this.newsitems[t].length-1].label,n=this.newsitems[t][this.newsitems[t].length-1].name,r=1;r<=10;r++)this.newsitems[t].push({name:n,label:r+e})},randomfn:function(){for(var t=[],e=0,n=this.tabs.length;e<n;e++){for(var r=[],s=1;s<=20;s++)r.push({name:this.tabs[e].name,label:s});t.push(r)}return t}}}},408:function(t,e){},84:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(335),s=n.n(r),i=n(159),a=!1;var u=function(t){a||n(408)},o=n(2)(s.a,i.a,u,null,null);o.options.__file="..\\..\\..\\hbuilder_projects\\DHU-Walls\\pages\\template\\tabbar\\tabbar.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] tabbar.vue: functional components are not supported with templates, they should use render functions."),e.default=o.exports}},[251]);
//# sourceMappingURL=../../../../../.sourcemap/pages/template/tabbar/tabbar.js.map