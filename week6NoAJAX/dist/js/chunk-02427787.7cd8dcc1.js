(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02427787"],{"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},5319:function(t,e,n){"use strict";var r=n("d784"),o=n("825a"),c=n("7b0b"),i=n("50c4"),a=n("a691"),u=n("1d80"),l=n("8aa5"),s=n("14c3"),f=Math.max,d=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,k=x?"$":"$0";return[function(n,r){var o=u(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(k)){var c=n(e,t,this,r);if(c.done)return c.value}var u=o(t),v=String(this),h="function"===typeof r;h||(r=String(r));var p=u.global;if(p){var R=u.unicode;u.lastIndex=0}var S=[];while(1){var b=s(u,v);if(null===b)break;if(S.push(b),!p)break;var $=String(b[0]);""===$&&(u.lastIndex=l(v,i(u.lastIndex),R))}for(var m="",y=0,A=0;A<S.length;A++){b=S[A];for(var I=String(b[0]),T=f(d(a(b.index),v.length),0),P=[],w=1;w<b.length;w++)P.push(g(b[w]));var U=b.groups;if(h){var C=[I].concat(P,T,v);void 0!==U&&C.push(U);var D=String(r.apply(void 0,C))}else D=_(I,v,T,P,U,r);T>=y&&(m+=v.slice(y,T)+D,y=T+I.length)}return m+v.slice(y)}];function _(t,n,r,o,i,a){var u=r+t.length,l=o.length,s=p;return void 0!==i&&(i=c(i),s=h),e.call(a,s,(function(e,c){var a;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":a=i[c.slice(1,-1)];break;default:var s=+c;if(0===s)return e;if(s>l){var f=v(s/10);return 0===f?e:f<=l?void 0===o[f-1]?c.charAt(1):o[f-1]+c.charAt(1):e}a=o[s-1]}return void 0===a?"":a}))}}))},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),c=function(t){return function(e,n){var c,i,a=String(o(e)),u=r(n),l=a.length;return u<0||u>=l?t?"":void 0:(c=a.charCodeAt(u),c<55296||c>56319||u+1===l||(i=a.charCodeAt(u+1))<56320||i>57343?t?a.charAt(u):c:t?a.slice(u,u+2):i-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},7277:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 這裡是 Dashboard "),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/admin/"}},[t._v("後台首頁")]),t._v(" | "),n("router-link",{attrs:{to:"/"}},[t._v("回到前台")]),t._v(" | "),n("router-link",{attrs:{to:"/admin/products"}},[t._v("產品列表")]),t._v(" | "),n("router-link",{attrs:{to:"/admin/orders"}},[t._v("購物車列表")]),t._v(" | "),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("登出")])],1),t.checkSuccess?n("router-view",{attrs:{token:t.token}}):t._e()],1)},o=[],c=(n("ac1f"),n("5319"),{name:"Dashboard",data:function(){return{token:"",checkSuccess:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),console.log(this.token),this.token?(console.log("token 存在"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.checkSuccess=!0):(console.log("token 不存在"),this.$router.push("/login"))},signout:function(){document.cookie="hexToken=;expires=;",console.log("token 已清除"),this.$router.push("/login")}}}),i=c,a=n("2877"),u=Object(a["a"])(i,r,o,!1,null,null,null);e["default"]=u.exports},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),o=n("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,a=c,u=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=u||s||l;f&&(a=function(t){var e,n,o,a,f=this,d=l&&f.sticky,v=r.call(f),h=f.source,p=0,g=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,p++),n=new RegExp("^(?:"+h+")",v)),s&&(n=new RegExp("^"+h+"$(?!\\s)",v)),u&&(e=f.lastIndex),o=c.call(d?n:f,g),d?o?(o.input=o.input.slice(p),o[0]=o[0].slice(p),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:u&&o&&(f.lastIndex=f.global?o.index+o[0].length:e),s&&o&&o.length>1&&i.call(o[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o}),t.exports=a},"9f7f":function(t,e,n){"use strict";var r=n("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),c=n("b622"),i=n("9263"),a=n("9112"),u=c("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var h=c(t),p=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=p&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!p||!g||"replace"===t&&(!l||!s||d)||"split"===t&&!v){var x=/./[h],E=n(h,""[t],(function(t,e,n,r,o){return e.exec===i?p&&!o?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),k=E[0],_=E[1];r(String.prototype,t,k),r(RegExp.prototype,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}f&&a(RegExp.prototype[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-02427787.7cd8dcc1.js.map