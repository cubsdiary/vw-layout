webpackJsonp([5],{BWE6:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("PhKd"),a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"store-info"},[e("div",{staticClass:"top"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"right",on:{click:t.goStoreList}},[e("span",[t._v("选择门店")])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"left"},[s("img",{attrs:{src:"",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"center"},[s("h2",[this._v("常州奇特异养车-华润店")]),this._v(" "),s("p",[this._v("常州市天宁区XXX路202-2号")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom"},[s("span",[this._v("联系店长")]),this._v(" "),s("span",[this._v("18772815385")])])}]};var n={name:"repairPreOrder",data:function(){return{repairPreOrderBScroll:null,imgs:[0,1,2,3]}},computed:{fillImgs:function(){return this.imgs.length>4?this.imgs.slice(0,4):this.imgs}},mounted:function(){this.$nextTick(function(){this.repairPreOrderBScroll=new i.a(this.$refs.repairPre,{click:!0})})},components:{storeInfo:e("Z0/y")({name:"store-info",methods:{goStoreList:function(){this.$router.push("/store-list")}}},a,!1,function(t){e("yumo")},"data-v-43bf480c",null).exports,seleDetectionMenu:e("l99u").a}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"repair-pre",attrs:{flexContainer:""}},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{ref:"repairPre",staticClass:"container"},[e("div",{staticClass:"wrapper"},[e("storeInfo"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"fault-info"},[e("div",{staticClass:"title"},[t._v("\n          故障概要\n        ")]),t._v(" "),e("div",{staticClass:"fault-text"},[t._v("\n          车子每次启动都发出卡拉卡拉的声音，发动机动力也变差了车子每次启动都发出卡拉卡拉的声音，发动机动力也变差了\n        ")]),t._v(" "),e("div",{staticClass:"fault-img"},[e("ul",{class:t.imgs.length>4?"more":""},t._l(t.fillImgs,function(t,s){return e("li",{key:s},[e("img",{attrs:{src:"",alt:""}})])})),t._v(" "),e("div",{staticClass:"go-img-info"})])]),t._v(" "),e("div",{staticClass:"checkout-menu"},[e("div",{staticClass:"title"},[t._v("\n          检测单故障 "),e("span",[t._v(t._s("(1/3)"))])]),t._v(" "),e("seleDetectionMenu",{attrs:{check:!1}})],1)],1)]),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"action-bar"},[s("div",{staticClass:"go-back"}),this._v(" "),s("div",{staticClass:"font"},[this._v("\n      订单详情\n    ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"service-flow"},[e("span",{staticClass:"bg bg1"},[t._v("选择服务")]),t._v(" "),e("span",[t._v("-")]),t._v(" "),e("span",{staticClass:"bg bg2"},[t._v("选择门店")]),t._v(" "),e("span",[t._v("-")]),t._v(" "),e("span",{staticClass:"bg bg3"},[t._v("确认订单")]),t._v(" "),e("span",[t._v("-")]),t._v(" "),e("span",{staticClass:"bg bg4"},[t._v("到店服务")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bespoke-date"},[s("span",[this._v("预约时间")]),this._v(" "),s("span",[this._v("2017年3月26日")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"car-info"},[i("div",[i("span",[t._v("服务车辆")]),i("div",{staticClass:"right"},[i("img",{attrs:{src:e("yz7R"),alt:""}}),t._v("东风本田思域2016款1.5T自动尊耀版")])]),t._v(" "),i("div",[i("span",[t._v("车牌号")]),i("span",{staticClass:"right"},[t._v("苏DB5A68")])]),t._v(" "),i("div",[i("span",[t._v("联系人")]),i("span",{staticClass:"right"},[t._v("15251916566")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"place-order"},[s("div",{staticClass:"server"},[this._v("客服")]),this._v(" "),s("div",{staticClass:"tips"},[this._v("预约不会产生任何费用 具体情况请到店后有技师介绍")]),this._v(" "),s("div",{staticClass:"btn"},[this._v("确认下单")])])}]};var r=e("Z0/y")(n,c,!1,function(t){e("faYj")},"data-v-44a8e537",null);s.default=r.exports},W9q0:function(t,s){},faYj:function(t,s){},l99u:function(t,s,e){"use strict";var i={name:"detectionMenu",props:{check:{type:Boolean}},data:function(){return{menus:[{check:!1,id:0,name:"景观灯",state:0,info:"别来烦我了真的很烦"},{check:!0,id:1,name:"发动机丢了",state:2,info:"别来烦我了真的很烦"},{check:!1,id:2,name:"方向盘松了",state:2,info:"别来烦我了真的很烦"},{check:!1,id:3,name:"车门剐蹭",state:1,info:"别来烦我了真的很烦"},{check:!0,id:4,name:"尾灯不亮了",state:2,info:"别来烦我了真的很烦"},{check:!1,id:5,name:"刹车片消失了",state:2,info:"别来烦我了真的很烦"},{check:!0,id:6,name:"要命了",state:1,info:"别来烦我了真的很烦"}]}},methods:{showState:function(t){return 0===t?"safe":1===t?"warn":"error"},checkMenu:function(t){this.menus[t].check=!this.menus[t].check}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detection-menu"},[e("ul",t._l(t.menus,function(s,i){return e("li",{key:i},[t.check?e("div",{staticClass:"select-btn"},[e("div",{staticClass:"sele-btn",class:s.check?"check":"nocheck",on:{click:function(s){t.checkMenu(i)}}})]):t._e(),t._v(" "),e("div",{staticClass:"select-info",class:t.showState(s.id)},[t._v("\n        "+t._s(s.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"select-box"}),t._v(" "),e("div",{staticClass:"go-info"},[t._v("\n        "+t._s(s.info)+"\n      ")])])}))])},staticRenderFns:[]};var n=e("Z0/y")(i,a,!1,function(t){e("W9q0")},"data-v-6148e67e",null);s.a=n.exports},yumo:function(t,s){}});
//# sourceMappingURL=5.6de240ca0dbcce1a48f2.js.map