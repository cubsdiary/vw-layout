webpackJsonp([25],{UMnb:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"storeList",data:function(){return{storeListBScroll:null,seleIndex:0,storeArray:[0,1,2,3,4,5,6,7,8]}},methods:{_goBack:function(){this.$router.go(-1)},seleStore:function(t){this.seleIndex=t}},components:{Scroll:e("qwAB").a}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"store",attrs:{flexContainer:""}},[e("div",{staticClass:"tabbar"},[e("span",{staticClass:"goback",on:{click:t._goBack}}),t._v(" "),e("h2",{staticClass:"title"},[t._v("选择门店")]),t._v(" "),e("div",{staticClass:"address"},[t._v("\n      常州\n    ")])]),t._v(" "),e("Scroll",{ref:"storelist",staticClass:"store-list"},[e("ul",t._l(t.storeArray,function(s,a){return e("li",{key:a,class:{active:t.seleIndex===a},on:{click:function(s){t.seleStore(a)}}},[e("div",{staticClass:"top"},[e("img",{attrs:{src:"",alt:""}}),t._v(" "),e("div",{staticClass:"top-right"},[e("div",{staticClass:"store-name"},[e("p",[t._v("奇特异快速保养-华润店")]),t._v(" "),e("h2",[t._v("4.6km")])]),t._v(" "),e("div",{staticClass:"store-address"},[e("p",[t._v("常州市天宁区XXX路202-2号")]),t._v(" "),e("h2",{class:{active:t.seleIndex===a,nosele:t.seleIndex!==a}},[t._v(t._s(t.seleIndex===a?"当前门店":"选择"))])])])]),t._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"get-loc"},[e("span",[t._v("查看定位")])]),t._v(" "),e("div",{staticClass:"call-dz"},[t._v("联系店长")])])])}))])],1)},staticRenderFns:[]};var i=e("Z0/y")(a,l,!1,function(t){e("itlH")},"data-v-29c5ff29",null);s.default=i.exports},itlH:function(t,s){}});
//# sourceMappingURL=25.701b724f061519ee8b36.js.map