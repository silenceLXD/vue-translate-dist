webpackJsonp([0],{0:function(t,e){},"95Gl":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"translateOutput"}},[a("h2",[t._v(t._s(t.translatedText))])])},r=[],s={render:n,staticRenderFns:r};e.a=s},A3sz:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"translateForm"}},[a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("form",{staticClass:"well form-inline",on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTeanslate,expression:"textToTeanslate"}],staticClass:"form-control",attrs:{type:"text",name:"",value:"",placeholder:"输入需要翻译的内容"},domProps:{value:t.textToTeanslate},on:{input:function(e){e.target.composing||(t.textToTeanslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),a("option",{attrs:{value:"ja"}},[t._v("Janpense")])]),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",name:"",value:"翻译"}})])])])},r=[],s={render:n,staticRenderFns:r};e.a=s},DICR:function(t,e,a){"use strict";var n=a("fxkp"),r=a("Nan6");e.a={name:"app",data:function(){return{translatedText:""}},components:{TranslateForm:n.a,TranslateOutput:r.a},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170721T082515Z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang="+e+"&text="+t).then(function(t){console.log(t.body.text[0]),a.translatedText=t.body.text[0]})}}}},"F/rQ":function(t,e){},KjtP:function(t,e,a){"use strict";e.a={name:"translateOutput",props:["translatedText"]}},M93x:function(t,e,a){"use strict";function n(t){a("RDNJ")}var r=a("DICR"),s=a("Xhq2"),o=a("46Yf"),u=n,i=o(r.a,s.a,!1,u,null,null);e.a=i.exports},MiPx:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],s={render:n,staticRenderFns:r};e.a=s},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("MVSX"),r=a("M93x"),s=a("YaEn"),o=a("y0Fx");n.a.use(o.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},Nan6:function(t,e,a){"use strict";function n(t){a("F/rQ")}var r=a("KjtP"),s=a("95Gl"),o=a("46Yf"),u=n,i=o(r.a,s.a,!1,u,null,null);e.a=i.exports},RDNJ:function(t,e){},Xhq2:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("在线翻译")]),t._v(" "),a("h5",{staticClass:"text-muted"},[t._v("简单／易用／便捷")]),t._v(" "),a("translateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("translateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},r=[],s={render:n,staticRenderFns:r};e.a=s},YaEn:function(t,e,a){"use strict";var n=a("MVSX"),r=a("zO6J"),s=a("gORT");n.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Hello",component:s.a}]})},fxkp:function(t,e,a){"use strict";function n(t){a("qvIV")}var r=a("t6eA"),s=a("A3sz"),o=a("46Yf"),u=n,i=o(r.a,s.a,!1,u,null,null);e.a=i.exports},gORT:function(t,e,a){"use strict";function n(t){a("qoXn")}var r=a("n3US"),s=a("MiPx"),o=a("46Yf"),u=n,i=o(r.a,s.a,!1,u,"data-v-4126e048",null);e.a=i.exports},n3US:function(t,e,a){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},qoXn:function(t,e){},qvIV:function(t,e){},t6eA:function(t,e,a){"use strict";e.a={name:"translateForm",data:function(){return{textToTeanslate:"",language:""}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTeanslate,this.language),t.preventDefault()}},created:function(){this.language="en"}}}},["NHnr"]);
//# sourceMappingURL=app.176bba234dec6ca94ee8.js.map