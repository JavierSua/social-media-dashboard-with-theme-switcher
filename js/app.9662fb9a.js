(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],f=0,v=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&v.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(v.length)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/social-media-dashboard-with-theme-switcher/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"10f7":function(t,e,n){t.exports=n.p+"img/icon-youtube.8499da12.svg"},"3b08":function(t,e,n){t.exports=n.p+"img/icon-instagram.991487fe.svg"},"4c2a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{darkTheme:t.checked},attrs:{id:"app"}},[n("header",[t._m(0),n("div",{staticClass:"drk-toggle"},[n("h3",[t._v("Dark Mode")]),n("label",{staticClass:"switch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var n=t.checked,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=null,c=t._i(n,a);r.checked?c<0&&(t.checked=n.concat([a])):c>-1&&(t.checked=n.slice(0,c).concat(n.slice(c+1)))}else t.checked=o}}}),n("span",{staticClass:"slider"})])])]),n("div",{staticClass:"main-cards"},[n("SocialCard",{staticClass:"facebook",attrs:{color:"up-green"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconFacebook,alt:""}})]},proxy:!0},{key:"user_name",fn:function(){return[t._v(" @nathanf ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 1987 ")]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" followers ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.upIcon,alt:"",srcset:""}}),t._v(" 12 today ")]},proxy:!0}])}),n("SocialCard",{staticClass:"twitter",attrs:{color:"up-green"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconTwitter,alt:""}})]},proxy:!0},{key:"user_name",fn:function(){return[t._v(" @nathanf ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 1044 ")]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" followers ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.upIcon,alt:"",srcset:""}}),t._v(" 99 today ")]},proxy:!0}])}),n("SocialCard",{staticClass:"instagram",attrs:{color:"up-green"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconInstagram,alt:""}})]},proxy:!0},{key:"user_name",fn:function(){return[t._v(" @realnathanf ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 11K ")]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" followers ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.upIcon,alt:"",srcset:""}}),t._v(" 1099 today ")]},proxy:!0}])}),n("SocialCard",{staticClass:"youtube",attrs:{color:"down-red"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconYoutube,alt:""}})]},proxy:!0},{key:"user_name",fn:function(){return[t._v(" Nathan F. ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 8239 ")]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" subscribers ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.downIcon,alt:"",srcset:""}}),t._v(" 144 today ")]},proxy:!0}])})],1),n("div",{staticClass:"overview"},[t._m(1),n("div",{staticClass:"ovrviw-cards"},[n("div",{staticClass:"card-row"},[n("SocialOverview",{attrs:{color:"up-green"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconFacebook,alt:""}})]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" Page views ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 87 ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.upIcon,alt:"",srcset:""}}),t._v(" 3% ")]},proxy:!0}])}),n("SocialOverview",{attrs:{color:"down-red"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconFacebook,alt:""}})]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" Likes ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 52 ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.downIcon,alt:"",srcset:""}}),t._v(" 2% ")]},proxy:!0}])}),n("SocialOverview",{attrs:{color:"up-green"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconInstagram,alt:""}})]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" Likes ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 5462 ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.upIcon,alt:"",srcset:""}}),t._v(" 2257% ")]},proxy:!0}])}),n("SocialOverview",{attrs:{color:"up-green"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconInstagram,alt:""}})]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" Profile Views ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 52k ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.upIcon,alt:"",srcset:""}}),t._v(" 1375% ")]},proxy:!0}])})],1),n("div",{staticClass:"card-row"},[n("SocialOverview",{attrs:{color:"up-green"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconTwitter,alt:""}})]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" Retwieets ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 177 ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.upIcon,alt:"",srcset:""}}),t._v(" 303% ")]},proxy:!0}])}),n("SocialOverview",{attrs:{color:"up-green"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconTwitter,alt:""}})]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" Likes ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 507 ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.upIcon,alt:"",srcset:""}}),t._v(" 553% ")]},proxy:!0}])}),n("SocialOverview",{attrs:{color:"down-red"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconYoutube,alt:""}})]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" Likes ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 107 ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.downIcon,alt:"",srcset:""}}),t._v(" 19% ")]},proxy:!0}])},[t._v("> ")]),n("SocialOverview",{attrs:{color:"down-red"},scopedSlots:t._u([{key:"social_icon",fn:function(){return[n("img",{staticClass:"social-icon",attrs:{src:t.iconYoutube,alt:""}})]},proxy:!0},{key:"meta_type",fn:function(){return[t._v(" Total Views ")]},proxy:!0},{key:"meta_value",fn:function(){return[t._v(" 1407 ")]},proxy:!0},{key:"value_change",fn:function(){return[n("img",{attrs:{src:t.downIcon,alt:"",srcset:""}}),t._v(" 12% ")]},proxy:!0}])},[t._v("> ")])],1)])]),t._m(2)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Social Media Dashboard")]),n("h2",[t._v("Total Followers: 23,004")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Overview - Today")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"attribution"},[t._v(" Challenge by "),n("a",{attrs:{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"}},[t._v("Frontend Mentor")]),t._v(". Coded by "),n("a",{attrs:{href:"https://www.frontendmentor.io/profile/JavierSua",target:"_blank"}},[t._v("Javier Suarez")]),t._v(". ")])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"container"},[n("div",{staticClass:"img-container"},[t._t("social_icon")],2),n("div",{staticClass:"user-name"},[t._t("user_name")],2)]),n("div",{staticClass:"meta-value"},[t._t("meta_value")],2),n("div",{staticClass:"meta-type"},[t._t("meta_type")],2),n("div",{staticClass:"meta-change",class:t.color},[t._t("value_change")],2)])])},i=[],s={props:{color:String}},u=s,l=(n("fad0"),n("2877")),f=Object(l["a"])(u,c,i,!1,null,null,null),v=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-overview"},[n("div",{staticClass:"container"},[n("div",{staticClass:"ovrvw-meta"},[t._t("meta_type")],2),n("div",{staticClass:"ovrvw-value"},[t._t("meta_value")],2)]),n("div",{staticClass:"container"},[n("div",{staticClass:"ovrvw-social-icon"},[t._t("social_icon")],2),n("div",{staticClass:"ovrvw-change",class:t.color},[t._t("value_change")],2)])])},_=[],y={props:{color:String}},d=y,m=(n("66f9"),Object(l["a"])(d,p,_,!1,null,null,null)),g=m.exports,k={name:"App",metaInfo:{title:"Frontend Mentor | Javier Suarez",link:{rel:"favicon-32x32",href:"favicon-32x32.png"}},components:{SocialCard:v,SocialOverview:g},data:function(){return{iconFacebook:n("9c81"),iconTwitter:n("be9b"),iconInstagram:n("3b08"),iconYoutube:n("10f7"),upIcon:n("dbd7"),downIcon:n("96c0"),checked:!1}}},h=k,x=(n("034f"),Object(l["a"])(h,o,a,!1,null,null,null)),w=x.exports,b=n("58ca");r["a"].use(b["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")},"66f9":function(t,e,n){"use strict";n("95e0")},"85ec":function(t,e,n){},"95e0":function(t,e,n){},"96c0":function(t,e,n){t.exports=n.p+"img/icon-down.69a5c77f.svg"},"9c81":function(t,e,n){t.exports=n.p+"img/icon-facebook.a7383764.svg"},be9b:function(t,e,n){t.exports=n.p+"img/icon-twitter.810ccee8.svg"},dbd7:function(t,e,n){t.exports=n.p+"img/icon-up.95f916a5.svg"},fad0:function(t,e,n){"use strict";n("4c2a")}});
//# sourceMappingURL=app.9662fb9a.js.map