webpackJsonp([14],{Esh1:function(t,i){},FaBX:function(t,i){},gF1Q:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n("+aT9"),a=n.n(s),o={props:{washinfo:{type:Object,required:!0}},methods:{closewindow:function(){this.$emit("closewindow",!1)},_openLocation:function(){this.Wx.openLocation({latitude:this.washinfo.lat,longitude:this.washinfo.lng,name:this.washinfo.title,address:this.washinfo.address,scale:25,infoUrl:""})}},mounted:function(){}},e={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"show"}},[n("div",{staticClass:"wash-info"},[n("div",{staticClass:"header"},[n("h2",[t._v("洗车服务详情")]),t._v(" "),n("div",{staticClass:"close",on:{click:t.closewindow}})]),t._v(" "),n("div",{staticClass:"content"},[n("ul",t._l(t.washinfo.washinfo,function(i,s){return n("li",{key:s},[n("div",{staticClass:"left"},[n("div",{staticClass:"img",class:"bg"+i.type}),t._v(" "),n("div",{staticClass:"info"},[n("h2",[t._v(t._s(i.name))]),t._v(" "),n("p",[t._v(t._s(i.info))])])]),t._v(" "),n("div",{staticClass:"right"},[t._v("\n            ￥"+t._s(i.price.toFixed(2))+"\n          ")])])}))]),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"bg",on:{click:t._openLocation}},[t._v("\n        去这里\n      ")])])])])},staticRenderFns:[]};var r={data:function(){return{map:null,geolocation:null,customMarker:null,my_position:{},showMap:!1,markerDom:[],preMarkerId:-1,infoWindow:null,washinfoShow:!1,washForShow:null,markers:[{lng:119.981649,lat:31.826587,new:!0,state:1,title:"新北中心公园",icon:"./static/active_by_store@2x.png",way:3.6,mostfar:!0,address:"常州市新北区汉江路299号",washinfo:[{type:1,name:"普洗",info:"整车泡沫冲洗擦干、轮胎、轮毂冲洗清洁、车内吸尘、内饰脚垫等简单除尘",price:30},{type:2,name:"精洗",info:"整车泡沫冲洗擦干、轮胎轮毂冲洗清洁、边缝清洗、发动机舱清洁、车内精致清洁",price:60}]},{lng:120.004995,lat:31.791868,new:!1,state:1,title:"紫荆公园",icon:"./static/active_by_store@2x.png",way:4.2,mostfar:!1,address:"常州市天宁区竹林北路紫荆公园",washinfo:[{type:1,name:"普洗",info:"整车泡沫冲洗擦干、轮胎、轮毂冲洗清洁、车内吸尘、内饰脚垫等简单除尘",price:30},{type:2,name:"精洗",info:"整车泡沫冲洗擦干、轮胎轮毂冲洗清洁、边缝清洗、发动机舱清洁、车内精致清洁",price:60},{type:3,name:"超精洗",info:"边缝清洗、发动机舱清洁、车内精致清洁，整车泡沫冲洗擦干、轮胎轮毂冲洗清洁",price:90}]},{lng:120.000531,lat:31.823816,new:!1,state:2,title:"中华恐龙园",icon:"./static/active_by_store@2x.png",way:8.3,mostfar:!1,address:"常州市新北区河海东路60号",washinfo:[{type:1,name:"普洗",info:"整车泡沫冲洗擦干、轮胎、轮毂冲洗清洁、车内吸尘、内饰脚垫等简单除尘",price:30}]}]}},watch:{preMarkerId:function(t,i){this.washForShow=this.markers[t]}},methods:{_goBack:function(){this.$router.go(-1)},_setMap:function(){var t=this;this.map=new a.a.Map(this.$refs.container,{resizeEnable:!0,jogEnable:!1,zoom:13,zooms:[12,19]}),a.a.event.addListener(t.map,"click",function(i){t._closeAll()})},_onComplete:function(t){this.my_position=t.position,this.showMap||(this.showMap=!0,this.customMarker=new a.a.Marker({map:this.map,position:[this.my_position.lng,this.my_position.lat],offset:new a.a.Pixel(-11,-34),icon:new a.a.Icon({image:"./static/own_marker@2x.png",size:new a.a.Size(22,34)})}))},_onError:function(t){console.log(t)},_onClick:function(t){this.washinfoShow=!0;this._reductionMarker();var i=t.target.getExtData();this.markerDom[i].setMap(null),this.markerDom[i]=new a.a.Marker({map:this.map,offset:new a.a.Pixel(-22,-22),position:[this.markers[i].lng,this.markers[i].lat],icon:new a.a.Icon({image:this.markers[i].icon,size:new a.a.Size(44,44)}),extData:i,clickable:!0}),this.preMarkerId=i,this._setInfoWindow(this.markers[i])},_reductionMarker:function(){var t=this.preMarkerId;-1!==t&&(this.markerDom[t].setMap(null),this._setMarker(this.markers[t],t))},_getLocation:function(){var t=this;this.map.plugin("AMap.Geolocation",function(){t.geolocation=new a.a.Geolocation({enableHighAccuracy:!0,timeout:1e3,maximumAge:0,convert:!0,showButton:!1,showMarker:!1,showCircle:!1,panToLocation:!0,zoomToAccuracy:!1}),t.map.addControl(t.geolocation),t.geolocation.getCurrentPosition(),a.a.event.addListener(t.geolocation,"complete",t._onComplete),a.a.event.addListener(t.geolocation,"error",t._onError)})},_getMarker:function(){var t=this;this.markers.forEach(function(i,n){t._setMarker(i,n)})},_setMarker:function(t,i){this.markerDom[i]=new a.a.Marker({map:this.map,offset:new a.a.Pixel(-17,-17),position:[t.lng,t.lat],content:'<div class="marker-com bg1">\n                    <div class="new '+(t.new?"":"show")+'" >NEW</div>\n                    <div class="marker-txt">\n                      <span>'+t.title+'</span>\n                      <div class="state bg'+t.state+'">'+(1===t.state?"空闲":"繁忙")+"</div>\n                    </div>\n                  </div>",extData:i,clickable:!0}),this.markerDom[i].on("click",this._onClick)},_setInfoWindow:function(t){this.infoWindow=new a.a.InfoWindow({isCustom:!0,offset:new a.a.Pixel(0,-24),content:'<div class="window-info">\n                    <div class="left">\n                      <h2>奇特异保养店'+t.title+"</h2>\n                      <p>"+t.address+'</p>\n                    </div>\n                    <div class="right"><h2>'+t.way+'km</h2><span class="'+(t.mostfar?"show":"")+'">距您最近</span></div>\n                    <div class="state bg'+t.state+'">'+(1===t.state?"空闲":"繁忙")+"</div>\n                  </div>"}),this.infoWindow.open(this.map,[t.lng,t.lat]),this.map.panTo([t.lng,t.lat]),this.map.panBy(0,-100)},_closeInfoWindow:function(){this.infoWindow.close()},_closeAll:function(){this.washinfoShow=!1,this.infoWindow.close(),this._reductionMarker()}},mounted:function(){this._setMap(),this._getLocation(),this._getMarker()},components:{washInfo:n("Z0/y")(o,e,!1,function(t){n("Esh1")},"data-v-1d4c2c64",null).exports}},c={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"detection-record",attrs:{flexContainer:""}},[n("div",{staticClass:"action-bar"},[n("div",{staticClass:"go-back",on:{click:t._goBack}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"search"})]),t._v(" "),n("div",{ref:"container",staticClass:"container",class:t.showMap?"show":""},[n("div",{staticClass:"map-btn"},[n("div",{staticClass:"map-location",on:{click:t._getLocation}}),t._v(" "),n("div",{staticClass:"bor"}),t._v(" "),n("div",{staticClass:"map-kf"})])]),t._v(" "),t.washinfoShow?n("washInfo",{attrs:{washinfo:t.washForShow},on:{closewindow:t._closeAll}}):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"font"},[i("h2",[this._v("东风本田-思域")]),this._v(" "),i("p",[i("span",[this._v("苏DB5A68")]),i("span",[this._v("丨")]),i("span",[this._v("2300km")])])])}]};var l=n("Z0/y")(r,c,!1,function(t){n("FaBX"),n("p35V")},"data-v-074ad020",null);i.default=l.exports},p35V:function(t,i){}});
//# sourceMappingURL=14.f08cc82c8751ed2bfc32.js.map