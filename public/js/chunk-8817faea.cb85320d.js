(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8817faea"],{"00b4":function(t,e,i){"use strict";i("ac1f");var n=i("23e7"),o=i("da84"),a=i("c65b"),r=i("e330"),s=i("1626"),l=i("861d"),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),d=o.Error,u=r(/./.test);n({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=this.exec;if(!s(e))return u(this,t);var i=a(e,this,t);if(null!==i&&!l(i))throw new d("RegExp exec method returned something other than an Object or null");return!!i}})},"3ca3":function(t,e,i){"use strict";var n=i("6547").charAt,o=i("577e"),a=i("69f3"),r=i("7dd0"),s="String Iterator",l=a.set,c=a.getterFor(s);r(String,"String",(function(t){l(this,{type:s,string:o(t),index:0})}),(function(){var t,e=c(this),i=e.string,o=e.index;return o>=i.length?{value:void 0,done:!0}:(t=n(i,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,i){"use strict";var n=i("da84"),o=i("0366"),a=i("c65b"),r=i("7b0b"),s=i("9bdd"),l=i("e95a"),c=i("68ee"),d=i("07fa"),u=i("8418"),f=i("9a1f"),h=i("35a1"),m=n.Array;t.exports=function(t){var e=r(t),i=c(this),n=arguments.length,v=n>1?arguments[1]:void 0,g=void 0!==v;g&&(v=o(v,n>2?arguments[2]:void 0));var _,p,b,x,w,y,H=h(e),V=0;if(!H||this==m&&l(H))for(_=d(e),p=i?new this(_):m(_);_>V;V++)y=g?v(e[V],V):e[V],u(p,V,y);else for(x=f(e,H),w=x.next,p=i?new this:[];!(b=a(w,x)).done;V++)y=g?s(x,v,[b.value,V],!0):b.value,u(p,V,y);return p.length=V,p}},5046:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"big-logo-box"},[i("svg",{staticStyle:{width:"100%"},attrs:{viewBox:"0 0 1389 1367",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{filter:"url(#filter0_b_1416_933)"}},[i("path",{attrs:{d:"M495.818 228.187V0H0V1367H417.904H793.31H1389V228.187H495.818ZM220.993 456.374V342.687H297.491V228.999H198.327V797.437H99.1637V114.5H179.203H198.327H297.491H396.655V228.187V341.875V455.562H297.491H220.993V456.374ZM694.146 910.312H636.773H594.274H395.946V890.011V796.625V682.937V569.25H495.11H571.608V682.937H495.11V796.625H594.274V455.562H495.11V341.875H594.274H689.896H694.146V910.312ZM893.89 683.749H794.726V342.687H893.89V683.749ZM1289.84 347.559V455.562V682.937H1190.67V455.562H1091.51V569.25H992.345V455.562H915.848V341.875H1289.84V347.559Z",fill:t.computed_theme_color.topside_fontColor}})]),i("defs",[i("filter",{attrs:{id:"filter0_b_1416_933",x:"-25",y:"-25",width:"1439",height:"1417",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[i("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),i("feGaussianBlur",{attrs:{in:"BackgroundImage",stdDeviation:"12.5"}}),i("feComposite",{attrs:{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_1416_933"}}),i("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_1416_933",result:"shape"}})],1)])]),i("div",{staticClass:"museum-des-box-position"},[t._m(0),i("div",{staticClass:"museum-des-box"},[t._m(1),i("div",{staticClass:"des-box-item"}),i("div",{staticClass:"des-box-item"},[i("p",{staticClass:"zh-en-mark"},[i("span",{on:{click:t.change_language}},[t._v(t._s(t.$t("content_menu.menu.language")))])])])])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"museum-des-box"},[i("div",{staticClass:"des-box-item"},[i("p",[i("span",[t._v("Pingshan Art Museum")]),i("br"),t._v(" Huide Road, Pingshan District, Shenzhen, China "),i("br"),i("br"),i("span",[t._v("Park Annexe")]),i("br"),t._v(" Pingshan Central Park, Shenzhen, China ")])]),i("div",{staticClass:"des-box-item"},[i("p",[i("span",[t._v("Park Annexe")]),i("br"),t._v(" Pingshan Experimental School Stop"),i("br"),t._v(" 公交车：坪山实验学校站"),i("br"),t._v(" M478/ M393/M440/963/M497/915/M325"),i("br"),i("br"),i("span",[t._v("High-speed Rail")]),i("br"),t._v(" Pingshan Station 高铁：坪山站 ")])]),i("div",{staticClass:"des-box-item"},[i("p",[i("span",[t._v("Hours")]),i("br"),t._v(" Open from Tuesday to Sunday"),i("br"),t._v(" 逢周二至周日开放"),i("br"),t._v(" 9:00 - 17:00")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"des-box-item"},[i("div",{staticClass:"email"},[t._v("press@pingshanartmuseum.org")])])}],a={name:"",data:function(){return{language:"中文"}},methods:{change_language:function(){var t=this.$store.state.local_language;"CN"===t?this.$store.commit("change_language","EN"):this.$store.commit("change_language","CN"),"CN"==this.$i18n.locale?this.$i18n.locale="EN":this.$i18n.locale="CN",localStorage.setItem("languageSet",this.$store.state.local_language)}},computed:{computed_theme_color:function(){return this.$store.state.current_theme_color}}},r=a,s=(i("d134"),i("2877")),l=Object(s["a"])(r,n,o,!1,null,"79b47b7d",null);e["a"]=l.exports},"5adc":function(t,e,i){},"5f7b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"welcome",staticClass:"welcome",attrs:{id:"welcome"}},[i("div",{staticClass:"welcome-imgbox",attrs:{id:"welcome_imgbox"}},[i("div",{staticClass:"imgbox-word",attrs:{id:"move_word_P"}},[i("svg",{attrs:{x:"100",y:"100",width:"274",height:"380",viewBox:"0 0 274 380",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{x:"1",y:"1",width:"272",height:"378",stroke:"#6CDCAE","stroke-width":"2"}}),i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M122.128 47H83V92.4517V317.734H122.128V92.4517H162.046V137.113H132.009V182.565H162.046H201.174V137.113V92.4517V47H162.046H122.128Z",fill:"#6CDCAE"}})])]),i("div",{staticClass:"imgbox-word",attrs:{id:"move_word_M"}},[i("svg",{attrs:{width:"274",height:"234",viewBox:"0 0 274 234",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{x:"1",y:"1",width:"272",height:"232",stroke:"#6CDCAE","stroke-width":"2"}}),i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M79.128 49H40V184.169H79.128V49ZM87.4279 49H117.861H156.989H195.721H234.849V94.0565L234.849 184.169H195.721V94.0565H156.989V139.113H117.861V94.0565H87.4279V49Z",fill:"#6CDCAE"}})])]),i("div",{staticClass:"imgbox-word",attrs:{id:"move_word_A"}},[i("svg",{attrs:{width:"274",height:"317",viewBox:"0 0 274 317",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{x:"1",y:"1",width:"272",height:"315",stroke:"#6CDCAE","stroke-width":"2"}}),i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M117.128 46H156.256H195.384V91.8469V227.016V271.282L156.256 271.282L117.128 271.282H78V227.016V182.355V136.508H117.128H147.166V182.355H117.128V227.016H156.256V91.8469H117.128V46Z",fill:"#6CDCAE"}})])]),i("canvas",{attrs:{id:"filtercanvas"}})]),i("div",[t._l(t.exhibitionContentData,(function(t,e){return i("contentBox",{key:e,attrs:{props_content_data:t}})})),i("footer-page")],2)])},o=[];i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("fb6a"),i("b0c0"),i("a630"),i("ac1f"),i("00b4");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t,e){if(t){if("string"===typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}function s(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=r(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(l)throw a}}}}i("cb29");var l=i("5046"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-box"},[i("div",{staticClass:"content-box-right column"},[i("div",{staticClass:"right-contnet",on:{click:function(e){return t.to_exhibitons_article_page()}}},[i("p",[t._v(t._s(t.content_data.zh.title))]),i("p",[t._v(t._s(t.content_data.en.title))])])]),i("div",{staticClass:"content-box-left column"},[i("span",[t._v(t._s(t.content_data.article_id)+"F")])])])},d=[],u={name:"contentBox",props:{props_content_data:Object},computed:{content_data:function(){return this.props_content_data}},data:function(){return{}},methods:{to_exhibitons_article_page:function(){this.$router.push({name:"pageExhibitionsNews",query:{exhibitions_article_id:this.content_data.article_id}})}}},f=u,h=(i("78e3"),i("2877")),m=Object(h["a"])(f,c,d,!1,null,"1ec2e3de",null),v=m.exports,g=i("2cbf"),_={name:"Home",data:function(){return{AnimationFrameid:null,canvas:null,exhibitionContentData:g["a"],item:{title:"九层塔：空间与视觉的魔术",subtitle:"Nine-Tiered Pagoda: Spatial and Visual Magic, Beyond Social Text: Duo Solo Exhibition of Li Mingchang and Zhang Jinhui",floorIndex:1},content_data:[{title:"九层塔：空间与视觉的魔术",subtitle:"Nine-Tiered Pagoda: Spatial and Visual Magic, Beyond Social Text: Duo Solo Exhibition of Li Mingchang and Zhang Jinhui",floorIndex:1},{title:"九层塔：空间与视觉的魔术⑦“面具与浮影”谢南星个展",subtitle:"Forma Fantasia—Solo Exhibition of Liu Wei, Forma Fantasia—Solo Exhibition of Liu Wei.",floorIndex:2},{title:"九层塔：空间与视觉的魔术⑧“情景”姜杰、彭薇、尹秀珍",subtitle:"Similar Results, Different Approaches—Chen Wenji×Ding Yi×Liang Quan×Tan Ping.",floorIndex:3},{title:"九层塔：空间与视觉的魔术⑧“情景”姜杰、彭薇、尹秀珍",subtitle:"Similar Results, Different Approaches—Chen Wenji×Ding Yi×Liang Quan×Tan Ping.",floorIndex:4},{title:"九层塔：空间与视觉的魔术⑧“情景”姜杰、彭薇、尹秀珍",subtitle:"Portraiting Pingshan—Celebrating the 40th Anniversary of the Establishment of Shenzhen Special Economic Zone",floorIndex:5}],move_img_opt:[{x:0,y:0,w_size:274,h_size:384,dx:1,dy:2},{x:500,y:380,w_size:274,h_size:238,dx:2,dy:1},{x:300,y:600,w_size:274,h_size:321,dx:3,dy:1}]}},components:{footerPage:l["a"],contentBox:v},mounted:function(){this.init()},beforeRouteLeave:function(t,e,i){cancelAnimationFrame(this.AnimationFrameid),i()},methods:{componentsDestory:function(){},init:function(){requestAnimationFrame||webkitRequestAnimationFrame||mozRequestAnimationFrame||msRequestAnimationFrame||oRequestAnimationFrame;var t=document.getElementById("filtercanvas"),e=document.getElementById("welcome_imgbox"),i=t.getContext("2d");this.ctx=i,t.width=e.offsetWidth,t.height=e.offsetHeight,this.move_img_opt[0].x=0,this.move_img_opt[0].y=0,this.move_img_opt[1].x=0,this.move_img_opt[1].y=e.offsetHeight-this.move_img_opt[1].h_size,this.move_img_opt[2].x=e.offsetWidth-this.move_img_opt[1].w_size,this.move_img_opt[2].y=0,i.fillStyle="white",i.fillRect(0,0,t.width,t.height),i.fill(),this.canvas=t;var n=document.getElementsByClassName("imgbox-word");for(var o in this.move_img_opt)this.move_img_opt[o].element=n[o];this.move_word()},move_word:function(){this.AnimationFrameid=requestAnimationFrame(this.move_word);var t,e=this.canvas,i=this.ctx,n=s(this.move_img_opt);try{for(n.s();!(t=n.n()).done;){var o=t.value;i.globalCompositeOperation="destination-out",i.fillStyle="white",i.fillRect(o.x,o.y,o.w_size,o.h_size),i.fill(),o.element.style.top=o.y+"px",o.element.style.left=o.x+"px",o.x+=o.dx,o.y+=o.dy,(o.x>e.width-o.w_size||o.x<0)&&(o.dx*=-1),(o.y>e.height-o.h_size||o.y<0)&&(o.dy*=-1)}}catch(a){n.e(a)}finally{n.f()}}},beforeDestroy:function(){}},p=_,b=(i("9a1c"),Object(h["a"])(p,n,o,!1,null,"345303ba",null));e["default"]=b.exports},7285:function(t,e,i){},"78e3":function(t,e,i){"use strict";i("fbe5")},"81d5":function(t,e,i){"use strict";var n=i("7b0b"),o=i("23cb"),a=i("07fa");t.exports=function(t){var e=n(this),i=a(e),r=arguments.length,s=o(r>1?arguments[1]:void 0,i),l=r>2?arguments[2]:void 0,c=void 0===l?i:o(l,i);while(c>s)e[s++]=t;return e}},"9a1c":function(t,e,i){"use strict";i("7285")},"9bdd":function(t,e,i){var n=i("825a"),o=i("2a62");t.exports=function(t,e,i,a){try{return a?e(n(i)[0],i[1]):e(i)}catch(r){o(t,"throw",r)}}},a630:function(t,e,i){var n=i("23e7"),o=i("4df4"),a=i("1c7e"),r=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:r},{from:o})},cb29:function(t,e,i){var n=i("23e7"),o=i("81d5"),a=i("44d2");n({target:"Array",proto:!0},{fill:o}),a("fill")},d134:function(t,e,i){"use strict";i("5adc")},d28b:function(t,e,i){var n=i("746f");n("iterator")},ddb0:function(t,e,i){var n=i("da84"),o=i("fdbc"),a=i("785a"),r=i("e260"),s=i("9112"),l=i("b622"),c=l("iterator"),d=l("toStringTag"),u=r.values,f=function(t,e){if(t){if(t[c]!==u)try{s(t,c,u)}catch(n){t[c]=u}if(t[d]||s(t,d,e),o[e])for(var i in r)if(t[i]!==r[i])try{s(t,i,r[i])}catch(n){t[i]=r[i]}}};for(var h in o)f(n[h]&&n[h].prototype,h);f(a,"DOMTokenList")},e01a:function(t,e,i){"use strict";var n=i("23e7"),o=i("83ab"),a=i("da84"),r=i("e330"),s=i("1a2d"),l=i("1626"),c=i("3a9b"),d=i("577e"),u=i("9bf2").f,f=i("e893"),h=a.Symbol,m=h&&h.prototype;if(o&&l(h)&&(!("description"in m)||void 0!==h().description)){var v={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=c(m,this)?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};f(g,h),g.prototype=m,m.constructor=g;var _="Symbol(test)"==String(h("test")),p=r(m.toString),b=r(m.valueOf),x=/^Symbol\((.*)\)[^)]+$/,w=r("".replace),y=r("".slice);u(m,"description",{configurable:!0,get:function(){var t=b(this),e=p(t);if(s(v,t))return"";var i=_?y(e,7,-1):w(e,x,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:g})}},fb6a:function(t,e,i){"use strict";var n=i("23e7"),o=i("da84"),a=i("e8b5"),r=i("68ee"),s=i("861d"),l=i("23cb"),c=i("07fa"),d=i("fc6a"),u=i("8418"),f=i("b622"),h=i("1dde"),m=i("f36a"),v=h("slice"),g=f("species"),_=o.Array,p=Math.max;n({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var i,n,o,f=d(this),h=c(f),v=l(t,h),b=l(void 0===e?h:e,h);if(a(f)&&(i=f.constructor,r(i)&&(i===_||a(i.prototype))?i=void 0:s(i)&&(i=i[g],null===i&&(i=void 0)),i===_||void 0===i))return m(f,v,b);for(n=new(void 0===i?_:i)(p(b-v,0)),o=0;v<b;v++,o++)v in f&&u(n,o,f[v]);return n.length=o,n}})},fbe5:function(t,e,i){}}]);