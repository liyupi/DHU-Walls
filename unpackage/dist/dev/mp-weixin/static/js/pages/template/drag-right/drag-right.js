global.webpackJsonp([15],{156:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("view",{staticClass:"page-bottom",attrs:{eventid:"0"},on:{touchmove:t.tap_drag,touchend:t.tap_end,touchstart:t.tap_start}},[a("view",{staticClass:"page-content"},[a("view",{staticClass:"wc"},[a("navigator",{attrs:{url:"#","hover-class":"navigator-hover"}},[t._v("第一个菜单")])],1),t._v(" "),a("view",{staticClass:"wc"},[a("navigator",{attrs:{url:"#","hover-class":"navigator-hover"}},[t._v("第二个菜单（缩放）")])],1),t._v(" "),a("view",{staticClass:"wc"},[a("navigator",{attrs:{url:"#","hover-class":"navigator-hover"}},[t._v("第三个菜单（拖动）")])],1),t._v(" "),a("view",{staticClass:"wc"},[a("navigator",{attrs:{url:"#","hover-class":"navigator-hover"}},[t._v("第四个菜单")])],1)])]),t._v(" "),a("view",{class:["page-top",t.openDrag?"c-state1":"",t.openClick?"c-state1":""],attrs:{eventid:"2"},on:{touchmove:t.tap_drag,touchend:t.tap_end,touchstart:t.tap_start}},[a("image",{attrs:{src:"../../../static/menu.png",eventid:"1"},on:{tap:t.tap_ch}})])])};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s},240:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(a(1)),s=n(a(73));function n(t){return t&&t.__esModule?t:{default:t}}a(0).default;new r.default(s.default).$mount(),e.default={config:{navigationBarTitleText:"右滑菜单"}}},324:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a(0).default;e.default={data:function(){return{openDrag:!1,openClick:!1,markX:0,newmarkX:0,markY:0,newmarkY:0,istoright:!1}},onReady:function(){this.openDrag=!1,this.openClick=!1},methods:{tap_ch:function(t){this.openClick||this.openDrag?(this.openClick=!1,this.openDrag=!1):this.openClick=!0},tap_start:function(t){this.markX=this.newmarkX=t.touches[0].pageX,this.markY=this.newmarkY=t.touches[0].pageY},tap_drag:function(t){this.newmarkX=t.touches[0].pageX,this.newmarkY=t.touches[0].pageY,this.markX>this.newmarkX?this.istoright=!1:this.istoright=!0,this.markX=this.newmarkX},tap_end:function(){if(this.newmarkY-this.markY>25||this.markY-this.newmarkY>25)return!1;this.markX=0,this.newmarkX=0,this.markY=0,this.newmarkY=0,this.istoright?this.openDrag=!0:this.openDrag=!1}}}},405:function(t,e){},73:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(324),s=a.n(r),n=a(156),i=!1;var o=function(t){i||a(405)},c=a(2)(s.a,n.a,o,null,null);c.options.__file="..\\..\\..\\hbuilder_projects\\DHU-Walls\\pages\\template\\drag-right\\drag-right.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] drag-right.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports}},[240]);
//# sourceMappingURL=../../../../../.sourcemap/pages/template/drag-right/drag-right.js.map