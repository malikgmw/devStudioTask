(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/vue-avatar/dist/vue-avatar.min.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-avatar/dist/vue-avatar.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=9)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(6),o=e(7);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Avatar=void 0;var r=e(10),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.Avatar=o.default,n.default=o.default},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(12),o=e.n(r),i=e(41),u=e(11),s=u(o.a,i.a,!1,null,null,null);n.default=s.exports},function(t,n){t.exports=function(t,n,e,r,o,i){var u,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(u=t,s=t.default);var c="function"==typeof s?s.options:s;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,p=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(t,n){return f.call(n),p(t,n)}):c.beforeCreate=p?[].concat(p,f):[f]}return{esModule:u,exports:s,options:c}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(13),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=function(t){for(var n=t.split(/[ -]/),e="",r=0;r<n.length;r++)e+=n[r].charAt(0);return e.length>3&&-1!==e.search(/[A-Z]/)&&(e=e.replace(/[a-z]+/g,"")),e=e.substr(0,3).toUpperCase()};n.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80},parser:{type:Function,default:i,validator:function(t){return"string"==typeof t("John",i)}}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],imgError:!1}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return!this.imgError&&Boolean(this.src)},style:function(){var t={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center",userSelect:"none"},n={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},e={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},r=this.isImage?n:e;return(0,o.default)(t,r),t},userInitial:function(){if(!this.isImage){return this.initials||this.parser(this.username,i)}return""}},methods:{initial:i,onImgError:function(t){this.imgError=!0},randomBackgroundColor:function(t,n){return n[t%n.length]},lightenColor:function(t,n){var e=!1;"#"===t[0]&&(t=t.slice(1),e=!0);var r=parseInt(t,16),o=(r>>16)+n;o>255?o=255:o<0&&(o=0);var i=(r>>8&255)+n;i>255?i=255:i<0&&(i=0);var u=(255&r)+n;return u>255?u=255:u<0&&(u=0),(e?"#":"")+(u|i<<8|o<<16).toString(16)}}}},function(t,n,e){t.exports={default:e(14),__esModule:!0}},function(t,n,e){e(15),t.exports=e(4).Object.assign},function(t,n,e){var r=e(16);r(r.S+r.F,"Object",{assign:e(26)})},function(t,n,e){var r=e(0),o=e(4),i=e(17),u=e(19),s=function(t,n,e){var a,c,f,l=t&s.F,p=t&s.G,d=t&s.S,h=t&s.P,v=t&s.B,y=t&s.W,g=p?o:o[n]||(o[n]={}),m=g.prototype,x=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(a in e)(c=!l&&x&&void 0!==x[a])&&a in g||(f=c?x[a]:e[a],g[a]=p&&"function"!=typeof x[a]?e[a]:v&&c?i(f,r):y&&x[a]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((g.virtual||(g.virtual={}))[a]=f,t&s.R&&m&&!m[a]&&u(m,a,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(20),o=e(25);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(21),o=e(22),i=e(24),u=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(2)&&!e(3)(function(){return 7!=Object.defineProperty(e(23)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(1),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var r=e(27),o=e(38),i=e(39),u=e(40),s=e(6),a=Object.assign;t.exports=!a||e(3)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r})?function(t,n){for(var e=u(t),a=arguments.length,c=1,f=o.f,l=i.f;a>c;)for(var p,d=s(arguments[c++]),h=f?r(d).concat(f(d)):r(d),v=h.length,y=0;v>y;)l.call(d,p=h[y++])&&(e[p]=d[p]);return e}:a},function(t,n,e){var r=e(28),o=e(37);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(29),o=e(5),i=e(31)(!1),u=e(34)("IE_PROTO");t.exports=function(t,n){var e,s=o(t),a=0,c=[];for(e in s)e!=u&&r(s,e)&&c.push(e);for(;n.length>a;)r(s,e=n[a++])&&(~i(c,e)||c.push(e));return c}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(5),o=e(32),i=e(33);t.exports=function(t){return function(n,e,u){var s,a=r(n),c=o(a.length),f=i(u,c);if(t&&e!=e){for(;c>f;)if((s=a[f++])!=s)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(8),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(35)("keys"),o=e(36);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(7);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vue-avatar--wrapper",style:[t.style,t.customStyle],attrs:{"aria-hidden":"true"}},[this.isImage?e("img",{staticStyle:{display:"none"},attrs:{src:this.src},on:{error:t.onImgError}}):t._e(),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[t._v(t._s(t.userInitial))])])},o=[],i={render:r,staticRenderFns:o};n.a=i}])});

/***/ })

}]);