global.webpackJsonp([34],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_c('page-head', {\n    attrs: {\n      \"title\": _vm.title,\n      \"mpcomid\": '0'\n    }\n  }), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-body\"\n  }, [_c('view', {\n    staticClass: \"page-section\"\n  }, [_vm._m(0), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-section-spacing\"\n  }, [_c('scroll-view', {\n    staticClass: \"scroll-Y\",\n    attrs: {\n      \"scroll-y\": \"true\",\n      \"scroll-into-view\": _vm.toView,\n      \"scroll-top\": _vm.scrollTop,\n      \"eventid\": '0'\n    },\n    on: {\n      \"scrolltoupper\": _vm.upper,\n      \"scrolltolower\": _vm.lower,\n      \"scroll\": _vm.scroll\n    }\n  }, [_c('view', {\n    staticClass: \"scroll-view-item color1\",\n    attrs: {\n      \"id\": \"demo1\"\n    }\n  }, [_vm._v(\"A\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"scroll-view-item color2\",\n    attrs: {\n      \"id\": \"demo2\"\n    }\n  }, [_vm._v(\"B\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"scroll-view-item color3\",\n    attrs: {\n      \"id\": \"demo3\"\n    }\n  }, [_vm._v(\"C\")])])], 1)]), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-section\"\n  }, [_vm._m(1), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-section-spacing\"\n  }, [_c('scroll-view', {\n    staticClass: \"scroll-view_H\",\n    attrs: {\n      \"scroll-x\": \"true\",\n      \"eventid\": '1'\n    },\n    on: {\n      \"scroll\": _vm.scroll\n    }\n  }, [_c('view', {\n    staticClass: \"scroll-view-item_H color1\",\n    attrs: {\n      \"id\": \"demo1\"\n    }\n  }, [_vm._v(\"A\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"scroll-view-item_H color2\",\n    attrs: {\n      \"id\": \"demo2\"\n    }\n  }, [_vm._v(\"B\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"scroll-view-item_H color3\",\n    attrs: {\n      \"id\": \"demo3\"\n    }\n  }, [_vm._v(\"C\")])])], 1)])])], 1)\n}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"page-section-title\"\n  }, [_c('text', [_vm._v(\"Vertical Scroll\\\\n纵向滚动\")])])\n},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"page-section-title\"\n  }, [_c('text', [_vm._v(\"Horizontal Scroll\\\\n横向滚动\")])])\n}]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-1d0ac1d0\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-1d0ac1d0\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!E:/codes/hbuilder_projects/templates/pages/component/scroll-view/scroll-view.vue\n// module id = 109\n// module chunks = 34\n\n");

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _scrollView = __webpack_require__(59);var _scrollView2 = _interopRequireDefault(_scrollView);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_scrollView2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"scroll-view\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/codes/hbuilder_projects/templates/pages/component/scroll-view/scroll-view.js\n// module id = 236\n// module chunks = 34\n\n//# sourceURL=uni-app:///pages/component/scroll-view/scroll-view.js?7f29");

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: 'scroll-view',\n\t\t\ttoView: 'green',\n\t\t\torder: ['demo1', 'demo2', 'demo3'] };\n\n\t},\n\tmethods: {\n\t\tupper: function upper(e) {\n\t\t\tconsole.log(e);\n\t\t},\n\t\tlower: function lower(e) {\n\t\t\tconsole.log(e);\n\t\t},\n\t\tscroll: function scroll(e) {\n\t\t\tconsole.log(e);\n\t\t} },\n\n\tcomponents: {\n\t\tpageHead: _pageHead2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/codes/hbuilder_projects/templates/pages/component/scroll-view/scroll-view.vue\n// module id = 325\n// module chunks = 34\n\n//# sourceURL=uni-app:///pages/component/scroll-view/scroll-view.vue?8e1a");

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-1d0ac1d0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"E://codes//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/codes/hbuilder_projects/templates/pages/component/scroll-view/scroll-view.vue\n// module id = 372\n// module chunks = 34\n\n");

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_scroll_view_vue__ = __webpack_require__(325);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_scroll_view_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_scroll_view_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1d0ac1d0_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_scroll_view_vue__ = __webpack_require__(109);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(372)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_scroll_view_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1d0ac1d0_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_scroll_view_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\hbuilder_projects\\\\templates\\\\pages\\\\component\\\\scroll-view\\\\scroll-view.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] scroll-view.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-1d0ac1d0\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-1d0ac1d0\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/codes/hbuilder_projects/templates/pages/component/scroll-view/scroll-view.vue\n// module id = 59\n// module chunks = 34\n\n");

/***/ })

},[236]);