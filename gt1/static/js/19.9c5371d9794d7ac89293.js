webpackJsonp([19],{AGY4:function(t,s){},UMnb:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("PhKd"),a={name:"storeList",data:function(){return{storeListBScroll:null,seleIndex:0,storeArray:[0,1,2,3,4,5,6,7,8]}},methods:{_goBack:function(){this.$router.go(-1)},seleStore:function(t){this.seleIndex=t}},mounted:function(){this.$nextTick(function(){this.storeListBScroll=new i.a(this.$refs.storelist,{click:!0})})}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"store",attrs:{flexContainer:""}},[e("div",{staticClass:"tabbar"},[e("span",{staticClass:"goback",on:{click:t._goBack}}),t._v(" "),e("h2",{staticClass:"title"},[t._v("选择门店")]),t._v(" "),e("div",{staticClass:"address"},[t._v("\n      常州\n    ")])]),t._v(" "),e("div",{ref:"storelist",staticClass:"store-list"},[e("ul",t._l(t.storeArray,function(s,i){return e("li",{key:i,class:{active:t.seleIndex===i},on:{click:function(s){t.seleStore(i)}}},[e("div",{staticClass:"top"},[e("img",{attrs:{src:"",alt:""}}),t._v(" "),e("div",{staticClass:"top-right"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"store-address"},[e("p",[t._v("常州市天宁区XXX路202-2号")]),t._v(" "),e("h2",{class:{active:t.seleIndex===i,nosele:t.seleIndex!==i}},[t._v(t._s(t.seleIndex===i?"当前门店":"选择"))])])])]),t._v(" "),t._m(1,!0)])}))])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"store-name"},[s("p",[this._v("奇特异快速保养-华润店")]),this._v(" "),s("h2",[this._v("4.6km")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom"},[s("div",{staticClass:"get-loc"},[s("span",[this._v("查看定位")])]),this._v(" "),s("div",{staticClass:"call-dz"},[this._v("联系店长")])])}]};var l=e("Z0/y")(a,n,!1,function(t){e("AGY4")},"data-v-65ffe88a",null);s.default=l.exports}});
//# sourceMappingURL=19.9c5371d9794d7ac89293.js.map