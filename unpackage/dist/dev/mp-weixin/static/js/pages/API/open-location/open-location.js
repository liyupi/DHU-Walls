global.webpackJsonp([59],{101:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),i("view",{staticClass:"page-body"},[i("view",{staticClass:"page-section"},[i("form",{attrs:{eventid:"0"},on:{submit:t.openLocation}},[i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[i("view",{staticClass:"uni-label"},[t._v("经度")])]),t._v(" "),i("view",{staticClass:"uni-list-cell-db"},[i("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"116.39742",name:"longitude"}})])]),t._v(" "),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[i("view",{staticClass:"uni-label"},[t._v("纬度")])]),t._v(" "),i("view",{staticClass:"uni-list-cell-db"},[i("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"39.909",name:"latitude"}})])]),t._v(" "),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[i("view",{staticClass:"uni-label"},[t._v("位置名称")])]),t._v(" "),i("view",{staticClass:"uni-list-cell-db"},[i("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"天安门",name:"name"}})])]),t._v(" "),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[i("view",{staticClass:"uni-label"},[t._v("详细位置")])]),t._v(" "),i("view",{staticClass:"uni-list-cell-db"},[i("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"北京市东城区东长安街",name:"address"}})])])]),t._v(" "),i("view",{staticClass:"btn-area"},[i("button",{attrs:{type:"primary",formType:"submit"}},[t._v("查看位置")])],1)])],1)])],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},196:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l(i(1)),a=l(i(29));function l(t){return t&&t.__esModule?t:{default:t}}i(0).default;new s.default(a.default).$mount(),e.default={config:{navigationBarTitleText:"查看位置"}}},280:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=i(3),l=(s=a)&&s.__esModule?s:{default:s};var n=i(0).default;e.default={data:function(){return{title:"openLocation"}},methods:{openLocation:function(t){console.log(t);var e=t.target.value;n.openLocation({longitude:Number(e.longitude),latitude:Number(e.latitude),name:e.name,address:e.address})}},components:{pageHead:l.default}}},29:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(280),a=i.n(s),l=i(101),n=!1;var u=function(t){n||i(349)},o=i(2)(a.a,l.a,u,null,null);o.options.__file="..\\..\\..\\hbuilder_projects\\DHU-Walls\\pages\\API\\open-location\\open-location.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] open-location.vue: functional components are not supported with templates, they should use render functions."),e.default=o.exports},349:function(t,e){}},[196]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/open-location/open-location.js.map