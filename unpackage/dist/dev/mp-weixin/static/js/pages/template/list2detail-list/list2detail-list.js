global.webpackJsonp([9],{122:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page"},[i("view",{staticClass:"banner",attrs:{eventid:"0"},on:{click:function(e){t.goDetail(t.banner)}}},[i("image",{staticClass:"banner-img",attrs:{src:t.banner.cover}}),t._v(" "),i("view",{staticClass:"banner-title"},[t._v(t._s(t.banner.title))])]),t._v(" "),i("view",{staticClass:"uni-list"},t._l(t.listData,function(e,s){return i("view",{key:s,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"1-"+s},on:{click:function(i){t.goDetail(e)}}},[i("view",{staticClass:"uni-media-list"},[i("image",{staticClass:"uni-media-list-logo",attrs:{src:e.cover}}),t._v(" "),i("view",{staticClass:"uni-media-list-body"},[i("view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(e.title))]),t._v(" "),i("view",{staticClass:"uni-media-list-text-bottom"},[i("text",[t._v(t._s(e.author_name))]),t._v(" "),i("text",[t._v(t._s(e.published_at))])])])])])}))])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},246:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(i(1)),a=n(i(79));function n(t){return t&&t.__esModule?t:{default:t}}i(0).default;new s.default(a.default).$mount(),e.default={config:{navigationBarTitleText:"列表到详情示例",enablePullDownRefresh:!0}}},330:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0).default,a=i(4).dateUtils;e.default={data:{banner:{},listData:[],last_id:"",reload:!1},onLoad:function(){this.getBanner(),this.getList()},onPullDownRefresh:function(){this.reload=!0,this.last_id="",this.getBanner(),this.getList()},onUnload:function(){this.banner={},this.listData=[],this.last_id=""},onReachBottom:function(){this.getList()},methods:{getBanner:function(){var t=this;s.request({url:"https://spider.dcloud.net.cn/api/banner/36kr",data:{column:"id,post_id,title,author_name,cover,published_at"},success:function(e){s.stopPullDownRefresh(),200==e.statusCode&&(t.banner=e.data)},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},getList:function(){var t=this,e={column:"id,post_id,title,author_name,cover,published_at"};console.log(this.last_id),this.last_id&&(e.minId=this.last_id,e.time=(new Date).getTime()+"",e.pageSize=10),s.request({url:"https://spider.dcloud.net.cn/api/news",data:e,success:function(e){if(200==e.statusCode){var i=t.setTime(e.data);t.listData=t.reload?i:t.listData.concat(i),t.last_id=i[i.length-1].id,t.reload=!1}},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},goDetail:function(t){console.log(t),/前|刚刚/.test(t.published_at)||(t.published_at=a.format(t.published_at));var e={author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:t.published_at,title:t.title};s.navigateTo({url:"../list2detail-detail/list2detail-detail?detailDate="+JSON.stringify(e)})},setTime:function(t){var e=[];return t.forEach(function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:a.format(t.published_at),title:t.title})}),e}}}},371:function(t,e){},79:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(330),a=i.n(s),n=i(122),l=!1;var o=function(t){l||i(371)},r=i(2)(a.a,n.a,o,null,null);r.options.__file="..\\..\\..\\hbuilder_projects\\DHU-Walls\\pages\\template\\list2detail-list\\list2detail-list.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] list2detail-list.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports}},[246]);
//# sourceMappingURL=../../../../../.sourcemap/pages/template/list2detail-list/list2detail-list.js.map