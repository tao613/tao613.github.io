(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76e71a20"],{"0593":function(t,e,n){t.exports=n.p+"public/img/list_img3.6e3c6f6c.png"},"0a69":function(t,e,n){t.exports=n.p+"public/img/contentshow.42dc5a51.png"},"0a82":function(t,e,n){t.exports=n.p+"public/img/list_img4.a4564012.png"},"0b42":function(t,e,n){var o=n("da84"),i=n("e8b5"),r=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),l=o.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,r(e)&&(e===l||i(e.prototype))?e=void 0:s(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?l:e}},"0bb3":function(t,e,n){"use strict";n("7b0e")},1046:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-Publications-index"},[n("div",{staticClass:"Publications-index-left column"},[n("page-left-sidebar",{attrs:{prop_font_color:t.page_left_sidebar.font_color,prop_content:t.page_left_sidebar.content}})],1),n("div",{staticClass:"Publications-index-rightmain column"},[n("div",{staticClass:"pagePublicationsOne-box"},[n("p",{class:["EN"===t.language?"en-title":"cn-title"]},[t._v(t._s(t.publications_title))]),n("search-query-two",{attrs:{prop_color:t.$global_colors.PAM_black,prop_item_data:t.search_value_item}}),n("div",{attrs:{id:"Publications_box"}},t._l(t.table_item_data,(function(e,o){return n("div",{key:o,staticClass:"Publications-item"},[n("div",{staticClass:"Publications-item-content"},[t._m(0,!0),n("div",{staticClass:"item-content-title"},[t._v(" "+t._s(e.content_title)+" ")])])])})),0)],1)]),n("footer-page")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Publications-item-content-cover"},[n("img",{attrs:{src:"",alt:"Publications"}})])}],r=(n("d3b7"),n("159b"),n("b680"),n("5046")),s=n("4091"),a=n("f4f9"),c={name:"",components:{"footer-page":r["a"],"search-query-two":s["a"],"page-left-sidebar":a["a"]},computed:{publications_title:function(){return this.$t("content_menu.menu.publications")},language:function(){return this.$store.state.local_language}},data:function(){return{page_left_sidebar:{font_color:this.$global_colors.PAM_black,content:{other:[{name:"Archives",children:[{name:"Collections",route:"pageCollectionsIndex"},{name:"Library",route:"pageLibraryIndex"},{name:"Collaborators",route:"pageCollaboratorsIndex"}],is_currentPage:!0,open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:" Research",children:[],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:"Publications",children:[]}]}},search_value_item:[{value:"All year",name:"year",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Materials",name:"",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Publications Types",name:"",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Locations",name:"",selected_click:!1,select_content:[{text:"2020",value:"2020"},{text:"2021",value:"2021"},{text:"2022",value:"2022"}]}],table_item_data:[{index:1,content_title:"Beyond ",cover_url:"list_img1.png"},{index:2,content_title:"Beyond ",cover_url:"list_img1.png"},{index:3,content_title:"Beyond ",cover_url:"list_img2.png"},{index:4,content_title:"Lorem Ipsum",cover_url:"list_img3.png"},{index:5,content_title:"Beyond ",cover_url:"list_img4.png"},{index:6,content_title:"Beyond ",cover_url:"list_img5.png"}]}},mounted:function(){this.add_imgs()},methods:{add_imgs:function(){var t=this,e=document.getElementsByClassName("Publications-item-content-cover");this.table_item_data.forEach((function(o,i){var r=n("5786")("./"+o.cover_url);e[i].children[0].src=r,e[i].children[0].addEventListener("click",(function(){t.$router.push({path:"/pc/pagePublicationsContentShow",query:{bookid:0}})}))}))},waterFall:function(){var t=31,e=0,n=document.getElementById("Publications_box"),o=n.children,i=n.offsetWidth,r=o[0].offsetWidth||446,s=parseInt(i/(r+e)),a=0;a=o.length%s!==0?parseInt(o.length/s)+1:o.length/s,n.style.height=(553+t)*a+"px";for(var c=[],l=0;l<o.length;l++)if(o[l].style.width=(i/s).toFixed(1)+"px",l<s)o[l].style.top=0,o[l].style.left=(r+e)*l+"px",c.push(o[l].offsetHeight);else{for(var u=c[0],d=0,_=0;_<c.length;_++)u>c[_]&&(u=c[_],d=_);o[l].style.top=c[d]+t+"px",o[l].style.left=o[d].offsetLeft+"px",c[d]=c[d]+o[l].offsetHeight+t}}}},l=c,u=(n("0bb3"),n("2877")),d=Object(u["a"])(l,o,i,!1,null,"19ed9d0f",null);e["default"]=d.exports},"159b":function(t,e,n){var o=n("da84"),i=n("fdbc"),r=n("785a"),s=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var l in i)i[l]&&c(o[l]&&o[l].prototype);c(r)},"17c2":function(t,e,n){"use strict";var o=n("b727").forEach,i=n("a640"),r=i("forEach");t.exports=r?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"281c":function(t,e,n){t.exports=n.p+"public/img/list_img5.5af179d3.png"},4091:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-box-out",attrs:{id:"search-top-input-box"}},[n("div",{staticClass:"select-box-content",staticStyle:{"text-align":"right"}},[n("div",{staticClass:"select-item-box"},[n("div",{staticClass:"select-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search_all_input,expression:"search_all_input"}],style:{color:t.color,border:"2px solid"+t.color},attrs:{all:"text",name:"",placeholder:"Search"},domProps:{value:t.search_all_input},on:{input:function(e){e.target.composing||(t.search_all_input=e.target.value)}}})])])]),n("div",{class:["select-box-content",t.top_fixed?"top-fixed":""]},t._l(t.search_value_item,(function(e,o){return n("div",{staticClass:"select-item-box",attrs:{keys:o}},[n("div",{staticClass:"select-item"},[n("div",{staticClass:"select-item-icon",on:{click:function(n){return t.get_selected_click_open(e,o)}}},[n("div",{staticClass:"item-arrow-head"},[n("div",{staticClass:"arrow-head-left",style:{"background-color":t.color}}),n("div",{staticClass:"arrow-head-right",style:{"background-color":t.color}})])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],style:{color:t.color,border:"2px solid"+t.color},attrs:{all:"text",name:""},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}),n("ul",{style:{height:e.selected_click?47*e.select_content.length+"px":0}},t._l(e.select_content,(function(e,i){return n("li",{style:{color:t.color,"border-bottom":"2px solid"+t.color},on:{click:function(n){return t.get_selected_click_getvalue(e,o,t.select_index)}}},[t._v(t._s(e.text))])})),0)])])})),0)])},i=[],r={name:"searchQuery",props:{prop_color:String,prop_item_data:Array},mounted:function(){window.addEventListener("scroll",this.div_top_fixed)},data:function(){return{top_fixed:!1,search_all_input:"",color:this.prop_color,select_base_style:{color:this.prop_color,border:"1px solid"+this.prop_color},search_value_item:this.prop_item_data}},beforeDestroy:function(){window.removeEventListener("scroll",this.div_top_fixed)},methods:{div_top_fixed:function(){var t=document.getElementById("search-top-input-box").getBoundingClientRect().top||document.getElementById("search-top-input-box").getBoundingClientRect().top;this.top_fixed=t<0},get_selected_click_open:function(t,e){this.search_value_item[e].selected_click=!this.search_value_item[e].selected_click},get_selected_click_getvalue:function(t,e,n){this.search_value_item[e].value=t.text,this.search_value_item[e].selected_click=!this.search_value_item[e].selected_click}}},s=r,a=(n("6a8f"),n("2877")),c=Object(a["a"])(s,o,i,!1,null,"b8453088",null);e["a"]=c.exports},5046:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"big-logo-box"},[n("svg",{staticStyle:{width:"100%"},attrs:{viewBox:"0 0 1389 1367",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{filter:"url(#filter0_b_1416_933)"}},[n("path",{attrs:{d:"M495.818 228.187V0H0V1367H417.904H793.31H1389V228.187H495.818ZM220.993 456.374V342.687H297.491V228.999H198.327V797.437H99.1637V114.5H179.203H198.327H297.491H396.655V228.187V341.875V455.562H297.491H220.993V456.374ZM694.146 910.312H636.773H594.274H395.946V890.011V796.625V682.937V569.25H495.11H571.608V682.937H495.11V796.625H594.274V455.562H495.11V341.875H594.274H689.896H694.146V910.312ZM893.89 683.749H794.726V342.687H893.89V683.749ZM1289.84 347.559V455.562V682.937H1190.67V455.562H1091.51V569.25H992.345V455.562H915.848V341.875H1289.84V347.559Z",fill:t.computed_theme_color.topside_fontColor}})]),n("defs",[n("filter",{attrs:{id:"filter0_b_1416_933",x:"-25",y:"-25",width:"1439",height:"1417",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[n("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),n("feGaussianBlur",{attrs:{in:"BackgroundImage",stdDeviation:"12.5"}}),n("feComposite",{attrs:{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_1416_933"}}),n("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_1416_933",result:"shape"}})],1)])]),n("div",{staticClass:"museum-des-box-position"},[t._m(0),n("div",{staticClass:"museum-des-box"},[t._m(1),n("div",{staticClass:"des-box-item"}),n("div",{staticClass:"des-box-item"},[n("p",{staticClass:"zh-en-mark"},[n("span",{on:{click:t.change_language}},[t._v(t._s(t.$t("content_menu.menu.language")))])])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"museum-des-box"},[n("div",{staticClass:"des-box-item"},[n("p",[n("span",[t._v("Pingshan Art Museum")]),n("br"),t._v(" Huide Road, Pingshan District, Shenzhen, China "),n("br"),n("br"),n("span",[t._v("Park Annexe")]),n("br"),t._v(" Pingshan Central Park, Shenzhen, China ")])]),n("div",{staticClass:"des-box-item"},[n("p",[n("span",[t._v("Park Annexe")]),n("br"),t._v(" Pingshan Experimental School Stop"),n("br"),t._v(" 公交车：坪山实验学校站"),n("br"),t._v(" M478/ M393/M440/963/M497/915/M325"),n("br"),n("br"),n("span",[t._v("High-speed Rail")]),n("br"),t._v(" Pingshan Station 高铁：坪山站 ")])]),n("div",{staticClass:"des-box-item"},[n("p",[n("span",[t._v("Hours")]),n("br"),t._v(" Open from Tuesday to Sunday"),n("br"),t._v(" 逢周二至周日开放"),n("br"),t._v(" 9:00 - 17:00")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-box-item"},[n("div",{staticClass:"email"},[t._v("press@pingshanartmuseum.org")])])}],r={name:"",data:function(){return{language:"中文"}},methods:{change_language:function(){var t=this.$store.state.local_language;"CN"===t?this.$store.commit("change_language","EN"):this.$store.commit("change_language","CN"),"CN"==this.$i18n.locale?this.$i18n.locale="EN":this.$i18n.locale="CN",localStorage.setItem("languageSet",this.$store.state.local_language)}},computed:{computed_theme_color:function(){return this.$store.state.current_theme_color}}},s=r,a=(n("d134"),n("2877")),c=Object(a["a"])(s,o,i,!1,null,"79b47b7d",null);e["a"]=c.exports},5786:function(t,e,n){var o={"./contentshow.png":"0a69","./list_img1.png":"ade2","./list_img2.png":"dd43","./list_img3.png":"0593","./list_img4.png":"0a82","./list_img5.png":"281c"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id="5786"},5790:function(t,e,n){},"5adc":function(t,e,n){},"65f0":function(t,e,n){var o=n("0b42");t.exports=function(t,e){return new(o(t))(0===e?0:e)}},"6a8f":function(t,e,n){"use strict";n("5790")},"785a":function(t,e,n){var o=n("cc12"),i=o("span").classList,r=i&&i.constructor&&i.constructor.prototype;t.exports=r===Object.prototype?void 0:r},"7b0e":function(t,e,n){},a640:function(t,e,n){"use strict";var o=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&o((function(){n.call(null,e||function(){throw 1},1)}))}},ade2:function(t,e,n){t.exports=n.p+"public/img/list_img1.28975a22.png"},b727:function(t,e,n){var o=n("0366"),i=n("e330"),r=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),l=i([].push),u=function(t){var e=1==t,n=2==t,i=3==t,u=4==t,d=6==t,_=7==t,p=5==t||d;return function(h,m,f,g){for(var b,v,x=s(h),C=r(x),y=o(m,f),k=a(C),w=0,H=g||c,L=e?H(h,k):n||_?H(h,0):void 0;k>w;w++)if((p||w in C)&&(b=C[w],v=y(b,w,x),t))if(e)L[w]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return w;case 2:l(L,b)}else switch(t){case 4:return!1;case 7:l(L,b)}return d?-1:i||u?u:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},d134:function(t,e,n){"use strict";n("5adc")},dbf2:function(t,e,n){"use strict";n("dc17")},dc17:function(t,e,n){},dd43:function(t,e,n){t.exports=n.p+"public/img/list_img2.1d4fb970.png"},e8b5:function(t,e,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},f4f9:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-left-sidebar"},t._l(t.content.other,(function(e,o){return n("div",{staticClass:"page-other-item"},[n("div",{staticClass:"other-item-name"},[n("div",{class:[e.is_currentPage?"current-page-border-radius":"","item-name-box"],style:{border:"2px solid "+t.font_color},on:{mouseenter:function(e){return t.enter(e,o)},mouseleave:function(e){return t.leave(e,o)}}},[n("span",{on:{click:function(n){return t.to_page(e.route)}}},[t._v(t._s(e.name.split(",").join(" —> ")))])]),n("div",{ref:"itemNameMenu"+o,refInFor:!0,staticClass:"item-name-menu",style:e.open_box_border,on:{mouseenter:function(e){return t.enter(e,o)},mouseleave:function(e){return t.leave(e,o)}}},[e.children?n("div",{staticClass:"menu-box"},t._l(e.children,(function(e,o){return n("div",{attrs:{keys:o}},[n("p",{on:{click:function(n){return t.to_page(e.route)}}},[t._v(t._s(e.name))]),t._l(e.children,(function(o,i){return e.children?n("p",{staticClass:"thirditem-name",attrs:{keys:i},on:{click:function(e){return t.to_page(o.route)}}},[t._v(t._s(o.name)+" ")]):t._e()}))],2)})),0):t._e()])])])})),0)},i=[],r=(n("d3b7"),n("159b"),{components:{},props:{prop_font_color:String,prop_content:Object},data:function(){return{font_color:this.prop_font_color,content:this.prop_content,testcontent:{current_page:{name:"Collection and Research",children:[]},other:[{name:"Collection and Research",children:[],is_currentPage:!0},{name:"Archives",children:[{name:"Collections",route:"pageCollections"},{name:"Library",route:"pageLibrary"},{name:"Collaborators",route:"pageCollaborators"}],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:" Research",children:[{name:"Collections",route:""},{name:"Library",route:""},{name:"Collaborators",route:""}],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:"Publications",children:[],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}}]}}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},beforeDestroy:function(){},created:function(){},methods:{init:function(){var t=this;this.content.other.forEach((function(e,n){e.width=t.$refs["itemNameMenu".concat(n)][0].offsetWidth,e.dom_element=t.$refs["itemNameMenu".concat(n)][0],e.dom_element.style.width=0}));document.getElementsByClassName("item-name-menu")},enter:function(t,e){void 0!==this.content.other[e].children&&0!==this.content.other[e].children.length&&(this.content.other[e].open_box_border={borderTop:"2px solid "+this.font_color,borderBottom:"2px solid "+this.font_color,borderRight:"2px solid "+this.font_color},void 0!==this.content.other[e].is_currentPage&&(this.content.other[e].is_currentPage=!1),this.content.other[e].dom_element.style.width=this.content.other[e].width+"px",this.content.other[e].dom_element.style.marginRight=8-this.content.other[e].width+"px")},leave:function(t,e){0!==this.content.other[e].children&&this.content.other[e].children&&(void 0!==this.content.other[e].is_currentPage&&(this.content.other[e].is_currentPage=!0),this.content.other[e].dom_element.style.width=0,this.content.other[e].dom_element.style.marginRight="0px",this.content.other[e].open_box_border={borderTop:"",borderBottom:"",borderRight:""})},to_page:function(t){t&&this.$router.push({path:"/pc/"+t})}}}),s=r,a=(n("dbf2"),n("2877")),c=Object(a["a"])(s,o,i,!1,null,"4e6af569",null);e["a"]=c.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);