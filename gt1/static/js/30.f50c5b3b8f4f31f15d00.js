webpackJsonp([30],{Q5FE:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("Dd8w"),r=e.n(s),i=e("qwAB"),n=e("NYxO"),c={name:"addcarAge",data:function(){return{sid:0,ev:0,ages:[]}},methods:r()({goModelsDetail:function(a){this.$router.push("/addcar-models?sid="+this.sid+"&ev="+this.ev+"&year="+a.onMarketYear),this.setAddCar({year:a.onMarketYear,month:a.onMarketMonth})},_goBack:function(){this.$router.go(-1)},getRelateYear:function(){var a=this;this.api_post("/api/carzone/getRelateYearBySid",function(t){0===t.errorCode&&(a.ages=t.data.data.detail)},{sid:this.sid})}},Object(n.c)({setAddCar:"SET_ADDCAR"})),created:function(){this.sid=this.$route.query.sid,this.ev=this.$route.query.ev,this.getRelateYear()},computed:r()({},Object(n.b)(["addCar"])),components:{Scroll:i.a}},d={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"addcar-age",attrs:{flexContainer:""}},[e("div",{staticClass:"action-bar"},[e("div",{staticClass:"go-back",on:{click:a._goBack}}),a._v(" "),e("div",{staticClass:"tabbar"},[a._v("\n      选择年份\n    ")])]),a._v(" "),e("div",{staticClass:"car-name"},[e("img",{attrs:{src:a.carLogoUrl+a.addCar.imageSrc,alt:""}}),a._v(" "),e("h2",[a._v(a._s(a.addCar.series.sbName+" - "+a.addCar.series.vehicleSystem[1]))])]),a._v(" "),e("div",{staticClass:"sele-next"},[e("span",[a._v(a._s(a.addCar.exhaustVolume))]),e("span",{staticClass:"between"},[a._v("-")]),a._v("选择年份\n  ")]),a._v(" "),e("Scroll",{ref:"ageCar",staticClass:"age",attrs:{data:a.ages}},[e("div",{staticClass:"con"},a._l(a.ages,function(t,s){return e("div",{key:s,staticClass:"text",on:{click:function(e){a.goModelsDetail(t)}}},[a._v("\n        "+a._s(t.onMarketYear+" - "+t.onMarketMonth)+"\n      ")])}))])],1)},staticRenderFns:[]};var o=e("VU/8")(c,d,!1,function(a){e("j6Vq")},"data-v-4c1f0eea",null);t.default=o.exports},j6Vq:function(a,t){}});
//# sourceMappingURL=30.f50c5b3b8f4f31f15d00.js.map