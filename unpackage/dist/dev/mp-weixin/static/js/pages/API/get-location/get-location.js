global.webpackJsonp([71],{153:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",[o("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),o("view",{staticClass:"page-body"},[o("view",{staticClass:"page-section"},[o("view",{staticClass:"page-body-info"},[o("text",{staticClass:"page-body-text-small"},[t._v("当前位置经纬度")]),t._v(" "),!1===t.hasLocation?o("block",[o("text",{staticClass:"page-body-text"},[t._v("未获取")])]):t._e(),t._v(" "),!0===t.hasLocation?o("block",[o("view",{staticClass:"page-body-text-location"},[o("text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),t._v(" "),o("text",[t._v("N: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])])]):t._e()],1),t._v(" "),o("view",{staticClass:"btn-area"},[o("button",{attrs:{type:"primary",eventid:"0"},on:{tap:t.getLocation}},[t._v("获取位置")]),t._v(" "),o("button",{attrs:{eventid:"1"},on:{tap:t.clear}},[t._v("清空")])],1)])])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},17:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(268),n=o.n(a),i=o(153),s=!1;var l=function(t){s||o(402)},c=o(2)(n.a,i.a,l,null,null);c.options.__file="..\\..\\..\\hbuilder_projects\\DHU-Walls\\pages\\API\\get-location\\get-location.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] get-location.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},184:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(o(1)),n=i(o(17));function i(t){return t&&t.__esModule?t:{default:t}}o(0).default;new a.default(n.default).$mount(),e.default={config:{navigationBarTitleText:"获取位置"}}},268:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=o(3),i=(a=n)&&a.__esModule?a:{default:a};var s=o(0).default,l=o(4).formatLocation;e.default={data:function(){return{title:"getLocation",hasLocation:!1,location:{}}},methods:{getLocation:function(){var t=this;s.getLocation({success:function(e){t.hasLocation=!0,t.location=l(e.longitude,e.latitude)}})},clear:function(){this.hasLocation=!1}},components:{pageHead:i.default}}},402:function(t,e){}},[184]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/get-location/get-location.js.map