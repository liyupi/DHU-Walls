global.webpackJsonp([3],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_c('page-head', {\n    attrs: {\n      \"title\": _vm.title,\n      \"mpcomid\": '0'\n    }\n  }), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-body\"\n  }, [_c('view', {\n    staticClass: \"page-section\"\n  }, [_c('view', {\n    staticClass: \"page-section-spacing\"\n  }, [_c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"eventid\": '0'\n    },\n    on: {\n      \"tap\": _vm.startRecognize\n    }\n  }, [_vm._v(\"开始语音识别\")]), _vm._v(\" \"), _c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"eventid\": '1'\n    },\n    on: {\n      \"tap\": _vm.startRecognizeEnglish\n    }\n  }, [_vm._v(\"开始语音识别（英语）\")])], 1)]), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-section\"\n  }, [_c('view', {\n    staticClass: \"page-section-spacing\"\n  }, [_c('textarea', {\n    attrs: {\n      \"value\": _vm.value\n    }\n  })])])])], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-70375773\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-70375773\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!E:/codes/hbuilder_projects/templates/platforms/app-plus/speech/speech.vue\n// module id = 150\n// module chunks = 3\n\n");

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _speech = __webpack_require__(92);var _speech2 = _interopRequireDefault(_speech);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_speech2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"语音识别\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/codes/hbuilder_projects/templates/platforms/app-plus/speech/speech.js\n// module id = 269\n// module chunks = 3\n\n//# sourceURL=uni-app:///platforms/app-plus/speech/speech.js?a6c2");

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: 'speech',\n\t\t\tvalue: '' };\n\n\t},\n\tonUnload: function onUnload() {\n\t\tthis.value = \"\";\n\t},\n\tmethods: {\n\t\tstartRecognize: function startRecognize() {\n\t\t\tvar options = {};\n\t\t\tvar that = this;\n\t\t\toptions.engine = 'iFly';\n\t\t\tthat.value = \"\";\n\t\t\tplus.speech.startRecognize(options, function (s) {\n\t\t\t\tconsole.log(s);\n\t\t\t\tthat.value += s;\n\t\t\t}, function (e) {\n\t\t\t\tconsole.log(\"语音识别失败：\" + e.message);\n\t\t\t});\n\t\t},\n\t\tstartRecognizeEnglish: function startRecognizeEnglish() {\n\t\t\tvar options = {};\n\t\t\tvar that = this;\n\t\t\toptions.engine = 'iFly';\n\t\t\toptions.lang = 'en-us';\n\t\t\tthat.value = \"\";\n\t\t\tplus.speech.startRecognize(options, function (s) {\n\t\t\t\tconsole.log(s);\n\t\t\t\tthat.value += s;\n\t\t\t}, function (e) {\n\t\t\t\tconsole.log(\"语音识别失败：\" + e.message);\n\t\t\t});\n\t\t} },\n\n\tcomponents: {\n\t\tpageHead: _pageHead2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/codes/hbuilder_projects/templates/platforms/app-plus/speech/speech.vue\n// module id = 358\n// module chunks = 3\n\n//# sourceURL=uni-app:///platforms/app-plus/speech/speech.vue?358c");

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-70375773\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"E://codes//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/codes/hbuilder_projects/templates/platforms/app-plus/speech/speech.vue\n// module id = 413\n// module chunks = 3\n\n");

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_speech_vue__ = __webpack_require__(358);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_speech_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_speech_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_70375773_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_speech_vue__ = __webpack_require__(150);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(413)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_speech_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_70375773_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_speech_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\hbuilder_projects\\\\templates\\\\platforms\\\\app-plus\\\\speech\\\\speech.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] speech.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-70375773\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-70375773\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/codes/hbuilder_projects/templates/platforms/app-plus/speech/speech.vue\n// module id = 92\n// module chunks = 3\n\n");

/***/ })

},[269]);