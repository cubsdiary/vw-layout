webpackJsonp([6],{"0kQQ":function(t,a){},"2xQg":function(t,a){},Kh0G:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("qwAB"),n={name:"addcarBrandMask",data:function(){return{addcarBrand_1:null,logosName:{name:"奥迪",logo:"",logoType:[{title:"Audi Sport",text:["奥迪RS 3","奥迪RS 4","奥迪RS 5","奥迪RS 6","奥迪RS 7","奥迪RS 8","奥迪RS 9","奥迪RS TT"]},{title:"一汽-大众奥迪",text:["奥迪A6L","奥迪A4","奥迪Q5","奥迪A3","奥迪Q3","奥迪A4L","奥迪A6","奥迪A6新能源"]},{title:"奥迪（进口）",text:["奥迪SQ5","奥迪A5","奥迪Q5（进口）","奥迪A1","奥迪A8","奥迪TT","奥迪Q7","奥迪TTS"]}]}}},methods:{goDisplacement:function(){this.$router.push("/addcar-displacement")}},components:{Scroll:e.a}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"addcar-brand-mask"},[s("Scroll",{ref:"addcarBrandMask",staticClass:"con"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"title"},[s("img",{attrs:{src:"",alt:""}}),t._v(" "),s("h2",[t._v(t._s(t.logosName.name))])]),t._v(" "),t._l(t.logosName.logoType,function(a,e){return s("ul",{key:e,staticClass:"logo-type"},[s("li",{staticClass:"logo-title"},[t._v(t._s(a.title))]),t._v(" "),t._l(a.text,function(a,e){return s("li",{key:e,staticClass:"logo-text",on:{click:t.goDisplacement}},[t._v("\n          "+t._s(a)+"\n        ")])})],2)})],2)])],1)},staticRenderFns:[]};var c={name:"addcarBrand",data:function(){return{logoList:null,showMask:!1,logo:[{type:"热",num:[0,1,2,3,4,5,6,7,8,9]},{type:"A",num:[0,1,2,3,4,5,6,7,8,9]},{type:"B",num:[0,1,2,3,4,5,6,7,8,9]},{type:"C",num:[0,1,2,3,4,5,6,7,8,9]},{type:"D",num:[0,1,2,3,4,5,6,7,8,9]},{type:"E",num:[0,1,2,3,4,5,6,7,8,9]},{type:"F",num:[0,1,2,3,4,5,6,7,8,9]},{type:"G",num:[0,1,2,3,4,5,6,7,8,9]},{type:"H",num:[0,1,2,3,4,5,6,7,8,9]},{type:"I",num:[0,1,2,3,4,5,6,7,8,9]},{type:"J",num:[0,1,2,3,4,5,6,7,8,9]},{type:"K",num:[0,1,2,3,4,5,6,7,8,9]},{type:"L",num:[0,1,2,3,4,5,6,7,8,9]},{type:"M",num:[0,1,2,3,4,5,6,7,8,9]},{type:"N",num:[0,1,2,3,4,5,6,7,8,9]},{type:"O",num:[0,1,2,3,4,5,6,7,8,9]},{type:"P",num:[0,1,2,3,4,5,6,7,8,9]},{type:"Q",num:[0,1,2,3,4,5,6,7,8,9]},{type:"R",num:[0,1,2,3,4,5,6,7,8,9]},{type:"S",num:[0,1,2,3,4,5,6,7,8,9]},{type:"T",num:[0,1,2,3,4,5,6,7,8,9]},{type:"U",num:[0,1,2,3,4,5,6,7,8,9]},{type:"V",num:[0,1,2,3,4,5,6,7,8,9]},{type:"W",num:[0,1,2,3,4,5,6,7,8,9]},{type:"X",num:[0,1,2,3,4,5,6,7,8,9]},{type:"Y",num:[0,1,2,3,4,5,6,7,8,9]},{type:"Z",num:[0,1,2,3,4,5,6,7,8,9]}]}},methods:{selectMenu:function(t,a){var s=this.$refs.logolist.getElementsByClassName("type-index")[t];this.logoList.scrollToElement(s,300)},showBrandMask:function(){this.showMask=!0,console.log("666")}},components:{brandMask:s("Z0/y")(n,i,!1,function(t){s("ViaU")},"data-v-3a9b89aa",null).exports,Scroll:e.a}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"addcar-brand",attrs:{flexContainer:""}},[t._m(0),t._v(" "),s("div",{staticClass:"logo"},[t.showMask?s("brandMask"):t._e(),t._v(" "),s("div",{staticClass:"retrieval",on:{touchmove:function(t){t.preventDefault(),t.stopPropagation()}}},[s("ul",t._l(t.logo,function(a,e){return s("li",{key:a.type,on:{click:function(a){t.selectMenu(e,a)}}},[t._v(t._s(a.type))])}))]),t._v(" "),s("Scroll",{ref:"logolist",staticClass:"wrapper"},[s("div",{staticClass:"list-con"},[s("div",{staticClass:"hot-logo type-index"},[s("h2",[t._v("热门品牌")]),t._v(" "),s("ul",{staticClass:"hot-list"},t._l(t.logo[1].num,function(a){return s("li",{key:a,staticClass:"car-logo",on:{click:t.showBrandMask}},[s("img",{attrs:{src:"",alt:""}}),t._v(" "),s("h3",[t._v("奥迪奥斯")])])}))]),t._v(" "),t._l(t.logo,function(a){return s("ul",{key:a.type,staticClass:"logo-class type-index"},[s("li",{staticClass:"title"},[t._v(t._s(a.type))]),t._v(" "),t._l(a.num,function(a){return s("li",{key:a,staticClass:"info",on:{click:t.showBrandMask}},[s("img",{attrs:{src:"",alt:""}}),t._v(" "),s("h2",[t._v("奥迪")])])})],2)})],2)])],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"search-car"},[a("div",{staticClass:"btn"},[a("span",[this._v("搜索")])])])}]};var o={name:"addcarTabbar",data:function(){return{tabActive:!0}},methods:{_goTab:function(t){(1!==t&&!0===this.tabActive||2!==t&&!1===this.tabActive)&&(this.tabActive=!this.tabActive)},_goBack:function(){this.$router.go(-1)}},mounted:function(){},components:{addCarBrand:s("Z0/y")(c,l,!1,function(t){s("coVu")},"data-v-38eb9a88",null).exports,vehicleCertification:s("OfJM").a}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"addcar-tabbar",attrs:{flexContainer:""}},[s("div",{staticClass:"action-bar"},[s("div",{staticClass:"go-back",on:{click:t._goBack}}),t._v(" "),s("div",{staticClass:"tabbar"},[s("div",{staticClass:"con"},[s("div",{staticClass:"left",class:{active:t.tabActive},on:{click:function(a){t._goTab(1)}}},[t._v("\n          自助加车\n        ")]),t._v(" "),s("div",{staticClass:"right",class:{active:!t.tabActive},on:{click:function(a){t._goTab(2)}}},[t._v("\n          发动机号绑车\n        ")])])])]),t._v(" "),s("div",{staticClass:"container"},[t.tabActive?s("addCarBrand"):s("vehicleCertification")],1)])},staticRenderFns:[]};var u=s("Z0/y")(o,r,!1,function(t){s("0kQQ")},"data-v-fa2aed48",null);a.default=u.exports},OfJM:function(t,a,s){"use strict";var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"vehicle-certification",attrs:{flexContainer:""}},[a("div",{staticClass:"example"},[a("div",{staticClass:"img"}),this._v(" "),a("p",[this._v("行驶证信息仅用于认证，我们将为您严格保密")])]),this._v(" "),a("div",{staticClass:"car-info"},[a("div",{staticClass:"info-2"},[a("span",[this._v("VIN号")]),this._v(" "),a("div",{staticClass:"input"},[a("input",{attrs:{type:"text",name:"",value:"",placeholder:"用于获取车辆信息",maxlength:"8"}})])])]),this._v(" "),a("div",{staticClass:"submit-btn"},[a("div",{staticClass:"btn"},[a("span",[this._v("开始认证")])])])])}]};var n=s("Z0/y")({name:"vehicleCertification"},e,!1,function(t){s("2xQg")},"data-v-62dbe828",null);a.a=n.exports},ViaU:function(t,a){},coVu:function(t,a){}});
//# sourceMappingURL=6.33efb65c755d4e46e956.js.map