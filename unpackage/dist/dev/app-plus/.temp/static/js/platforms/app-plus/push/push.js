global.webpackJsonp([5],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_c('page-head', {\n    attrs: {\n      \"title\": _vm.title,\n      \"mpcomid\": '0'\n    }\n  }), _vm._v(\" \"), (_vm.provider[0]) ? _c('view', {\n    staticClass: \"page-body\"\n  }, [_c('view', {\n    staticClass: \"btn-area\"\n  }, [_c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"eventid\": '0'\n    },\n    on: {\n      \"tap\": _vm.openPush\n    }\n  }, [_vm._v(\"开启push\")]), _vm._v(\" \"), _c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"eventid\": '1'\n    },\n    on: {\n      \"tap\": _vm.closePush\n    }\n  }, [_vm._v(\"关闭push\")]), _vm._v(\" \"), _c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"eventid\": '2'\n    },\n    on: {\n      \"tap\": _vm.listenTranMsg\n    }\n  }, [_vm._v(\"监听透传数据\")]), _vm._v(\" \"), _c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"eventid\": '3'\n    },\n    on: {\n      \"tap\": _vm.removeTranMsg\n    }\n  }, [_vm._v(\"移除监听透传数据\")])], 1), _vm._v(\" \"), _c('view', {\n    staticClass: \"btn-area\"\n  }, [_c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"eventid\": '4'\n    },\n    on: {\n      \"tap\": _vm.requireTranMsg\n    }\n  }, [_vm._v(\"发送\\\"透传数据\\\"消息\")])], 1), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-section-title\"\n  }, [_vm._v(\"透传内容：\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-section\"\n  }, [_c('view', {\n    staticClass: \"textare-view\"\n  }, [_c('textarea', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: (_vm.tranMsg),\n      expression: \"tranMsg\"\n    }],\n    staticClass: \"textarea\",\n    attrs: {\n      \"eventid\": '5'\n    },\n    domProps: {\n      \"value\": (_vm.tranMsg)\n    },\n    on: {\n      \"input\": function($event) {\n        if ($event.target.composing) { return; }\n        _vm.tranMsg = $event.target.value\n      }\n    }\n  })])])]) : _vm._e()], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-6dae1fb3\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-6dae1fb3\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!E:/codes/hbuilder_projects/templates/platforms/app-plus/push/push.vue\n// module id = 149\n// module chunks = 5\n\n");

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _push = __webpack_require__(90);var _push2 = _interopRequireDefault(_push);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_push2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"推送\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/codes/hbuilder_projects/templates/platforms/app-plus/push/push.js\n// module id = 267\n// module chunks = 5\n\n//# sourceURL=uni-app:///platforms/app-plus/push/push.js?eb47");

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: 'push',\n\t\t\tprovider: [],\n\t\t\tpushServer: 'http://demo.dcloud.net.cn/push/?',\n\t\t\ttranMsg: '' };\n\n\t},\n\tonLoad: function onLoad() {var _this = this;\n\t\tuni.getProvider({\n\t\t\tservice: \"push\",\n\t\t\tsuccess: function success(e) {\n\t\t\t\tconsole.log(\"success\", e);\n\t\t\t\t_this.provider = e.provider;\n\t\t\t},\n\t\t\tfail: function fail(e) {\n\t\t\t\tconsole.log(\"获取推送通道失败\", e);\n\t\t\t} });\n\n\t},\n\tonUnload: function onUnload() {\n\t\tthis.tranMsg = '';\n\t},\n\tmethods: {\n\t\topenPush: function openPush() {\n\t\t\tuni.subscribePush({\n\t\t\t\tprovider: this.provider[0],\n\t\t\t\tsuccess: function success(e) {\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ttitle: \"已开启push接收\" });\n\n\t\t\t\t} });\n\n\t\t},\n\t\tclosePush: function closePush() {\n\t\t\tuni.unsubscribePush({\n\t\t\t\tprovider: this.provider[0],\n\t\t\t\tsuccess: function success(e) {\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ttitle: \"已关闭push接收\" });\n\n\t\t\t\t} });\n\n\t\t},\n\t\tlistenTranMsg: function listenTranMsg() {var _this2 = this;\n\t\t\tuni.onPush({\n\t\t\t\tprovider: this.provider[0],\n\t\t\t\tsuccess: function success(e) {\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ttitle: \"开始监听透传数据\" });\n\n\t\t\t\t},\n\t\t\t\tcallback: function callback(e) {\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ttitle: \"接收到透传数据\" });\n\n\t\t\t\t\t_this2.tranMsg = e.data;\n\t\t\t\t} });\n\n\t\t},\n\t\tremoveTranMsg: function removeTranMsg() {\n\t\t\tuni.offPush({\n\t\t\t\tprovider: this.provider[0],\n\t\t\t\tsuccess: function success(e) {\n\t\t\t\t\tconsole.log(\"移除监听透传数据\");\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ttitle: \"移除监听透传数据\" });\n\n\t\t\t\t} });\n\n\t\t},\n\t\trequireTranMsg: function requireTranMsg() {//请求‘透传数据’推送消息\n\t\t\tvar inf = plus.push.getClientInfo();\n\t\t\tvar url = this.pushServer + 'type=tran&appid=' + encodeURIComponent(plus.runtime.appid);\n\t\t\tinf.id && (url += '&id=' + inf.id);\n\t\t\turl += '&cid=' + encodeURIComponent(inf.clientid);\n\t\t\tif (plus.os.name == 'iOS') {\n\t\t\t\turl += '&token=' + encodeURIComponent(inf.token);\n\t\t\t}\n\t\t\turl += '&title=' + encodeURIComponent('Hello uniapp');\n\t\t\turl += '&content=' + encodeURIComponent('带透传数据推送通知！');\n\t\t\turl += '&payload=' + encodeURIComponent('\\'{\"title\":\"Hello uniapp Test\",\"content\":\"test content\",\"payload\":\"1234567890\"}\\'');\n\t\t\turl += '&version=' + encodeURIComponent(plus.runtime.version);\n\t\t\tplus.runtime.openURL(url);\n\t\t} },\n\n\tcomponents: {\n\t\tpageHead: _pageHead2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"E://codes//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/codes/hbuilder_projects/templates/platforms/app-plus/push/push.vue\n// module id = 356\n// module chunks = 5\n\n//# sourceURL=uni-app:///platforms/app-plus/push/push.vue?72b9");

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-6dae1fb3\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"E://codes//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/codes/hbuilder_projects/templates/platforms/app-plus/push/push.vue\n// module id = 412\n// module chunks = 5\n\n");

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_push_vue__ = __webpack_require__(356);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_push_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_push_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6dae1fb3_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_push_vue__ = __webpack_require__(149);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(412)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_codes_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_push_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6dae1fb3_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_push_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\hbuilder_projects\\\\templates\\\\platforms\\\\app-plus\\\\push\\\\push.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] push.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-6dae1fb3\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-6dae1fb3\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/codes/hbuilder_projects/templates/platforms/app-plus/push/push.vue\n// module id = 90\n// module chunks = 5\n\n");

/***/ })

},[267]);