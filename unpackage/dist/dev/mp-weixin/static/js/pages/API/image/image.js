global.webpackJsonp([67],{103:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",[i("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),i("view",{staticClass:"page-body"},[i("form",[i("view",{staticClass:"page-section"},[i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[i("view",{staticClass:"uni-label"},[e._v("图片来源")])]),e._v(" "),i("view",{staticClass:"uni-list-cell-right"},[i("picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex,mode:"selector",eventid:"0"},on:{change:e.sourceTypeChange}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])])],1)]),e._v(" "),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[i("view",{staticClass:"uni-label"},[e._v("图片质量")])]),e._v(" "),i("view",{staticClass:"uni-list-cell-right"},[i("picker",{attrs:{range:e.sizeType,value:e.sizeTypeIndex,mode:"selector",eventid:"1"},on:{change:e.sizeTypeChange}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.sizeType[e.sizeTypeIndex]))])])],1)]),e._v(" "),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[i("view",{staticClass:"uni-label"},[e._v("数量限制")])]),e._v(" "),i("view",{staticClass:"uni-list-cell-right"},[i("picker",{attrs:{range:e.count,mode:"selector",eventid:"2"},on:{change:e.countChange}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.count[e.countIndex]))])])],1)])]),e._v(" "),i("view",{staticClass:"uni-list list-pd"},[i("view",{staticClass:"uni-list-cell cell-pd"},[i("view",{staticClass:"uni-uploader"},[i("view",{staticClass:"uni-uploader-head"},[i("view",{staticClass:"uni-uploader-title"},[e._v("点击可预览选好的图片")]),e._v(" "),i("view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])]),e._v(" "),i("view",{staticClass:"uni-uploader-body"},[i("view",{staticClass:"uni-uploader__files"},e._l(e.imageList,function(t,s){return i("block",{key:s},[i("view",{staticClass:"uni-uploader__file"},[i("image",{staticClass:"uni-uploader__img",attrs:{src:t,"data-src":t,eventid:"3-"+s},on:{tap:e.previewImage}})])])})),e._v(" "),i("view",{staticClass:"uni-uploader__input-box"},[i("view",{staticClass:"uni-uploader__input",attrs:{eventid:"4"},on:{tap:e.chooseImage}})])])])])])])])],1)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};t.a=n},188:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(i(1)),n=a(i(21));function a(e){return e&&e.__esModule?e:{default:e}}i(0).default;new s.default(n.default).$mount(),t.default={config:{navigationBarTitleText:"图片"}}},21:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(272),n=i.n(s),a=i(103),u=!1;var l=function(e){u||i(351)},c=i(2)(n.a,a.a,l,null,null);c.options.__file="..\\..\\..\\hbuilder_projects\\DHU-Walls\\pages\\API\\image\\image.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] image.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},272:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(i(5)),n=a(i(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=i(0).default,l=[["camera"],["album"],["camera","album"]],c=[["compressed"],["original"],["compressed","original"]];t.default={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},sizeTypeChange:function(e){this.sizeTypeIndex=e.target.value},countChange:function(e){this.countIndex=e.target.value},chooseImage:function(){var e,t=(e=s.default.mark(function e(){var t,i=this;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(9!==this.imageList.length){e.next=7;break}return e.next=3,this.isFullImg();case 3:if(t=e.sent,console.log("是否继续?",t),t){e.next=7;break}return e.abrupt("return");case 7:u.chooseImage({sourceType:l[this.sourceTypeIndex],sizeType:c[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){i.imageList=i.imageList.concat(e.tempFilePaths)}});case 8:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,i){return function s(n,a){try{var u=t[n](a),l=u.value}catch(e){return void i(e)}if(!u.done)return Promise.resolve(l).then(function(e){s("next",e)},function(e){s("throw",e)});e(l)}("next")})});return function(){return t.apply(this,arguments)}}(),isFullImg:function(){var e=this;return new Promise(function(t){u.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(i){i.confirm?(e.imageList=[],t(!0)):t(!1)},fail:function(){t(!1)}})})},previewImage:function(e){var t=e.target.dataset.src;u.previewImage({current:t,urls:this.imageList})}},components:{pageHead:n.default}}},351:function(e,t){}},[188]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/image/image.js.map