webpackJsonp([21],{BrJ3:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t("4YfN"),i=t.n(e),r=t("9rMa"),d={name:"addcarModels",data:function(){return{sid:0,ev:0,year:0,models:[],flag:!1}},methods:i()({goAge:function(a){this.$router.push("/addcar-idcard"),this.setAddCar({salesVersion:a.salesVersion})},_goBack:function(){this.$router.go(-1)},getModelsDetail:function(){var a=this;this.api_post("/api/carzone/findModelsDetailBySidAndVolumeAndYear",function(s){0===s.errorCode&&("0000"===s.data.data.result?a.models=s.data.data.detail:a.flag=!0)},{sid:this.sid,exhaustVolume:this.ev,year:this.year})}},Object(r.c)({setAddCar:"SET_ADDCAR"})),created:function(){this.sid=this.$route.query.sid,this.ev=this.$route.query.ev,this.year=this.$route.query.year,this.getModelsDetail()},computed:i()({},Object(r.b)(["addCar"]))},n={render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"addcar-models",attrs:{flexContainer:""}},[t("div",{staticClass:"action-bar"},[t("div",{staticClass:"go-back",on:{click:a._goBack}}),a._v(" "),t("div",{staticClass:"tabbar"},[a._v("\n      选择车型\n    ")])]),a._v(" "),t("div",{staticClass:"car-name"},[t("img",{attrs:{src:a.carLogoUrl+a.addCar.imageSrc,alt:""}}),a._v(" "),t("h2",[a._v(a._s(a.addCar.series.sbName+" - "+a.addCar.series.vehicleSystem[1]))])]),a._v(" "),t("div",{staticClass:"sele-next"},[t("span",[a._v(a._s(a.addCar.exhaustVolume))]),t("span",{staticClass:"between"},[a._v("-")]),t("span",[a._v(a._s(a.addCar.year))]),t("span",{staticClass:"between"},[a._v("-")]),a._v("选择车型\n  ")]),a._v(" "),t("div",{ref:"modelsCar",staticClass:"models",attrs:{data:a.models}},[t("div",{staticClass:"con"},[a._l(a.models,function(s,e){return t("div",{key:e,staticClass:"text",on:{click:function(t){a.goAge(s)}}},[a._v("\n        "+a._s(s.salesVersion)+"\n      ")])}),a._v(" "),a.flag?t("div",{staticClass:"tips"},[a._v("\n        抱歉，没有查询到相关数据！！！\n      ")]):a._e()],2)])])},staticRenderFns:[]};var o=t("Z0/y")(d,n,!1,function(a){t("hQJV")},"data-v-f5f7704a",null);s.default=o.exports},hQJV:function(a,s){}});
//# sourceMappingURL=21.054e7450ff072648b4f0.js.map