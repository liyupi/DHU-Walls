global.webpackJsonp([38],{135:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),a("view",{staticClass:"page-body"},[a("view",{staticClass:"page-section page-section-gap"},[a("view",{staticClass:"page-section-title"},[e._v("表单组件在label内")]),e._v(" "),a("checkbox-group",{staticClass:"group",attrs:{eventid:"0",mpcomid:"1"},on:{change:e.checkboxChange}},e._l(e.checkboxItems,function(t,s){return a("view",{key:t.name,staticClass:"label-1"},[a("label",[a("checkbox",{attrs:{value:t.name,checked:t.checked}}),e._v(" "),a("text",{staticClass:"label-1-text"},[e._v(e._s(t.value))])],1)],1)}))],1),e._v(" "),a("view",{staticClass:"page-section page-section-gap"},[a("view",{staticClass:"page-section-title"},[e._v("label用for标识表单组件")]),e._v(" "),a("radio-group",{staticClass:"group",attrs:{eventid:"1",mpcomid:"2"},on:{change:e.radioChange}},e._l(e.radioItems,function(t,s){return a("view",{key:s,staticClass:"label-2"},[a("radio",{attrs:{id:t.name,value:t.name,checked:t.checked}}),e._v(" "),a("label",{staticClass:"label-2-text",attrs:{for:t.name}},[a("text",[e._v(e._s(t.name))])])],1)}))],1),e._v(" "),a("view",{staticClass:"page-section page-section-gap"},[a("view",{staticClass:"page-section-title"},[e._v("label内有多个时选中第一个")]),e._v(" "),a("label",{staticClass:"label-3"},[a("checkbox",{staticClass:"checkbox-3"},[e._v("选项一")]),e._v(" "),a("checkbox",{staticClass:"checkbox-3"},[e._v("选项二")]),e._v(" "),a("view",{staticClass:"label-3-text"},[e._v("点击该label下的文字默认选中第一个checkbox")])],1)],1)])],1)};s._withStripped=!0;var c={render:s,staticRenderFns:[]};t.a=c},217:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=l(a(1)),c=l(a(50));function l(e){return e&&e.__esModule?e:{default:e}}a(0).default;new s.default(c.default).$mount(),t.default={config:{navigationBarTitleText:"label"}}},301:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,c=a(3),l=(s=c)&&s.__esModule?s:{default:s};a(0).default;t.default={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(e){for(var t=e.target.value,a={},s=0;s<this.checkboxItems.length;s++)-1!==t.indexOf(this.checkboxItems[s].name)?a["checkboxItems["+s+"].checked"]=!0:a["checkboxItems["+s+"].checked"]=!1},radioChange:function(e){for(var t=e.target.value,a={},s=0;s<this.radioItems.length;s++)-1!==t.indexOf(this.radioItems[s].name)?a["radioItems["+s+"].checked"]=!0:a["radioItems["+s+"].checked"]=!1},tapEvent:function(e){console.log("按钮被点击")}},components:{pageHead:l.default}}},384:function(e,t){},50:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(301),c=a.n(s),l=a(135),n=!1;var o=function(e){n||a(384)},i=a(2)(c.a,l.a,o,null,null);i.options.__file="..\\..\\..\\hbuilder_projects\\DHU-Walls\\pages\\component\\label\\label.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] label.vue: functional components are not supported with templates, they should use render functions."),t.default=i.exports}},[217]);
//# sourceMappingURL=../../../../../.sourcemap/pages/component/label/label.js.map