global.webpackJsonp([61],{108:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section"},[n("view",{staticClass:"page-section-spacing"},[n("button",{attrs:{type:"primary",eventid:"0"},on:{tap:e.watchAcce}},[e._v("监听设备的加速度变化")]),e._v(" "),n("button",{attrs:{type:"primary",eventid:"1"},on:{tap:e.stopAcce}},[e._v("停止监听设备的加速度变化")])],1)]),e._v(" "),n("view",{staticClass:"page-section"},[n("view",{staticClass:"page-section-spacing"},[n("textarea",{attrs:{value:e.value}})])])])],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};t.a=o},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(1)),o=c(n(27));function c(e){return e&&e.__esModule?e:{default:e}}n(0).default;new a.default(o.default).$mount(),t.default={config:{navigationBarTitleText:"监听加速度计数据"}}},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(278),o=n.n(a),c=n(108),r=!1;var s=function(e){r||n(356)},i=n(2)(o.a,c.a,s,null,null);i.options.__file="..\\..\\..\\hbuilder_projects\\DHU-Walls\\pages\\API\\on-accelerometer-change\\on-accelerometer-change.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] on-accelerometer-change.vue: functional components are not supported with templates, they should use render functions."),t.default=i.exports},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(3),c=(a=o)&&a.__esModule?a:{default:a};var r=n(0).default;t.default={data:function(){return{title:"onAccelerometerChange",value:""}},onUnload:function(){r.stopAccelerometer()},methods:{watchAcce:function(){var e=this;r.onAccelerometerChange(function(t){e.value="监听设备的加速度变化:\nX轴："+t.x.toFixed(2)+"\nY轴："+t.y.toFixed(2)+"\nZ轴："+t.z.toFixed(2)})},stopAcce:function(){r.stopAccelerometer()}},components:{pageHead:c.default}}},356:function(e,t){}},[194]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/on-accelerometer-change/on-accelerometer-change.js.map