(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f92ec22"],{"0b42":function(e,t,o){var n=o("da84"),r=o("e8b5"),i=o("68ee"),s=o("861d"),a=o("b622"),c=a("species"),l=n.Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===l||r(t.prototype))?t=void 0:s(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?l:t}},"159b":function(e,t,o){var n=o("da84"),r=o("fdbc"),i=o("785a"),s=o("17c2"),a=o("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var l in r)r[l]&&c(n[l]&&n[l].prototype);c(i)},"17c2":function(e,t,o){"use strict";var n=o("b727").forEach,r=o("a640"),i=r("forEach");e.exports=i?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},4091:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"select-box-out",attrs:{id:"search-top-input-box"}},[o("div",{staticClass:"select-box-content",staticStyle:{"text-align":"right"}},[o("div",{staticClass:"select-item-box"},[o("div",{staticClass:"select-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.search_all_input,expression:"search_all_input"}],style:{color:e.color,border:"2px solid"+e.color},attrs:{all:"text",name:"",placeholder:"Search"},domProps:{value:e.search_all_input},on:{input:function(t){t.target.composing||(e.search_all_input=t.target.value)}}})])])]),o("div",{class:["select-box-content",e.top_fixed?"top-fixed":""]},e._l(e.search_value_item,(function(t,n){return o("div",{staticClass:"select-item-box",attrs:{keys:n}},[o("div",{staticClass:"select-item"},[o("div",{staticClass:"select-item-icon",on:{click:function(o){return e.get_selected_click_open(t,n)}}},[o("div",{staticClass:"item-arrow-head"},[o("div",{staticClass:"arrow-head-left",style:{"background-color":e.color}}),o("div",{staticClass:"arrow-head-right",style:{"background-color":e.color}})])]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],style:{color:e.color,border:"2px solid"+e.color},attrs:{all:"text",name:""},domProps:{value:t.value},on:{input:function(o){o.target.composing||e.$set(t,"value",o.target.value)}}}),o("ul",{style:{height:t.selected_click?47*t.select_content.length+"px":0}},e._l(t.select_content,(function(t,r){return o("li",{style:{color:e.color,"border-bottom":"2px solid"+e.color},on:{click:function(o){return e.get_selected_click_getvalue(t,n,e.select_index)}}},[e._v(e._s(t.text))])})),0)])])})),0)])},r=[],i={name:"searchQuery",props:{prop_color:String,prop_item_data:Array},mounted:function(){window.addEventListener("scroll",this.div_top_fixed)},data:function(){return{top_fixed:!1,search_all_input:"",color:this.prop_color,select_base_style:{color:this.prop_color,border:"1px solid"+this.prop_color},search_value_item:this.prop_item_data}},beforeDestroy:function(){window.removeEventListener("scroll",this.div_top_fixed)},methods:{div_top_fixed:function(){var e=document.getElementById("search-top-input-box").getBoundingClientRect().top||document.getElementById("search-top-input-box").getBoundingClientRect().top;this.top_fixed=e<0},get_selected_click_open:function(e,t){this.search_value_item[t].selected_click=!this.search_value_item[t].selected_click},get_selected_click_getvalue:function(e,t,o){this.search_value_item[t].value=e.text,this.search_value_item[t].selected_click=!this.search_value_item[t].selected_click}}},s=i,a=(o("6a8f"),o("2877")),c=Object(a["a"])(s,n,r,!1,null,"b8453088",null);t["a"]=c.exports},"41be":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"page-collection-index"},[o("div",{staticClass:"collection-index-left column"},[o("page-left-sidebar",{attrs:{prop_font_color:e.page_left_sidebar.font_color,prop_content:e.page_left_sidebar.content}})],1),o("div",{staticClass:"collection-index-rightmain column"},[o("div",{staticClass:"pageCollectionsOne-box"},[o("p",[e._v("Collections")]),o("search-query-two",{attrs:{prop_color:e.$global_colors.PAM_black,prop_item_data:e.search_value_item}}),o("div",{attrs:{id:"collections_box"}},e._l(e.table_item_data,(function(t,n){return o("div",{key:n,staticClass:"Collections-item"},[o("div",{staticClass:"Collections-item-content"},[e._m(0,!0),o("div",{staticClass:"item-content-title"},[o("span",{staticClass:"title-left"},[e._v(e._s(t.content_title))]),o("span",{staticClass:"title-right"},[e._v(e._s(t.content_title))])])])])})),0)],1)])]),o("PAM-footer-page")],1)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"collections-item-content-cover"},[o("img",{attrs:{src:"",alt:"Collections"}})])}],i=(o("d3b7"),o("159b"),o("5046")),s=o("4091"),a=o("f4f9"),c={name:"",components:{"PAM-footer-page":i["a"],"search-query-two":s["a"],"page-left-sidebar":a["a"]},data:function(){return{page_left_sidebar:{font_color:this.$global_colors.PAM_black,content:{other:[{name:"Archives,Collaborators",children:[{name:"Collections",route:"pageCollectionsIndex"},{name:"Library",route:"pageLibraryIndex"},{name:"Collaborators",route:"pageCollaboratorsIndex",children:[{name:"Artists",route:"pageArtists"},{name:"Scholars",route:"pageLibraryIndex"},{name:"Institutions",route:"pageCollaboratorsIndex"}]}],is_currentPage:!0,open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:" Research",children:[],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:"Publications",children:[]}]}},table_item_data:[{index:1,content_title:"Beyond ",content_items_nums:"12 ",cover_url:"item_1.png"},{index:2,content_title:"Beyond ",content_items_nums:"12 ",cover_url:"item_5.png"},{index:3,content_title:"Beyond ",content_items_nums:"12 ",cover_url:"item_2.png"},{index:4,content_title:"Lorem Ipsum",cover_url:"item_3.png"},{index:5,content_title:"Beyond ",content_items_nums:"12 ",cover_url:"item_4.png"},{index:6,content_title:"Beyond ",cover_url:"item_6.png"}],search_value_item:[{value:"All year",name:"year",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Materials",name:"",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Collection Types",name:"",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Locations",name:"",selected_click:!1,select_content:[{text:"2020",value:"2020"},{text:"2021",value:"2021"},{text:"2022",value:"2022"}]}]}},mounted:function(){this.add_imgs()},methods:{add_imgs:function(){var e=this,t=document.getElementsByClassName("collections-item-content-cover");this.table_item_data.forEach((function(o,n){var r="/imgs/page_collections/".concat(o.cover_url);t[n].children[0].src=r,t[n].children[0].addEventListener("click",(function(){e.$router.push({path:"/pc/pageCollectionsContentShow",query:{collectionid:0}})}))}))}}},l=c,u=(o("a016"),o("2877")),d=Object(u["a"])(l,n,r,!1,null,"28f405e8",null);t["default"]=d.exports},5046:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"big-logo-box"},[o("svg",{staticStyle:{width:"100%"},attrs:{viewBox:"0 0 1389 1367",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("g",{attrs:{filter:"url(#filter0_b_1416_933)"}},[o("path",{attrs:{d:"M495.818 228.187V0H0V1367H417.904H793.31H1389V228.187H495.818ZM220.993 456.374V342.687H297.491V228.999H198.327V797.437H99.1637V114.5H179.203H198.327H297.491H396.655V228.187V341.875V455.562H297.491H220.993V456.374ZM694.146 910.312H636.773H594.274H395.946V890.011V796.625V682.937V569.25H495.11H571.608V682.937H495.11V796.625H594.274V455.562H495.11V341.875H594.274H689.896H694.146V910.312ZM893.89 683.749H794.726V342.687H893.89V683.749ZM1289.84 347.559V455.562V682.937H1190.67V455.562H1091.51V569.25H992.345V455.562H915.848V341.875H1289.84V347.559Z",fill:e.computed_theme_color.topside_fontColor}})]),o("defs",[o("filter",{attrs:{id:"filter0_b_1416_933",x:"-25",y:"-25",width:"1439",height:"1417",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[o("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),o("feGaussianBlur",{attrs:{in:"BackgroundImage",stdDeviation:"12.5"}}),o("feComposite",{attrs:{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_1416_933"}}),o("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_1416_933",result:"shape"}})],1)])]),o("div",{staticClass:"museum-des-box-position"},[e._m(0),o("div",{staticClass:"museum-des-box"},[e._m(1),o("div",{staticClass:"des-box-item"}),o("div",{staticClass:"des-box-item"},[o("p",{staticClass:"zh-en-mark"},[o("span",{on:{click:e.change_language}},[e._v(e._s(e.$t("content_menu.menu.language")))])])])])])])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"museum-des-box"},[o("div",{staticClass:"des-box-item"},[o("p",[o("span",[e._v("Pingshan Art Museum")]),o("br"),e._v(" Huide Road, Pingshan District, Shenzhen, China "),o("br"),o("br"),o("span",[e._v("Park Annexe")]),o("br"),e._v(" Pingshan Central Park, Shenzhen, China ")])]),o("div",{staticClass:"des-box-item"},[o("p",[o("span",[e._v("Park Annexe")]),o("br"),e._v(" Pingshan Experimental School Stop"),o("br"),e._v(" 公交车：坪山实验学校站"),o("br"),e._v(" M478/ M393/M440/963/M497/915/M325"),o("br"),o("br"),o("span",[e._v("High-speed Rail")]),o("br"),e._v(" Pingshan Station 高铁：坪山站 ")])]),o("div",{staticClass:"des-box-item"},[o("p",[o("span",[e._v("Hours")]),o("br"),e._v(" Open from Tuesday to Sunday"),o("br"),e._v(" 逢周二至周日开放"),o("br"),e._v(" 9:00 - 17:00")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"des-box-item"},[o("div",{staticClass:"email"},[e._v("press@pingshanartmuseum.org")])])}],i={name:"",data:function(){return{language:"中文"}},methods:{change_language:function(){var e=this.$store.state.local_language;"CN"===e?this.$store.commit("change_language","EN"):this.$store.commit("change_language","CN"),"CN"==this.$i18n.locale?this.$i18n.locale="EN":this.$i18n.locale="CN",localStorage.setItem("languageSet",this.$store.state.local_language)}},computed:{computed_theme_color:function(){return this.$store.state.current_theme_color}}},s=i,a=(o("c6ff"),o("2877")),c=Object(a["a"])(s,n,r,!1,null,"41c16087",null);t["a"]=c.exports},5790:function(e,t,o){},"65f0":function(e,t,o){var n=o("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"6a8f":function(e,t,o){"use strict";o("5790")},"785a":function(e,t,o){var n=o("cc12"),r=n("span").classList,i=r&&r.constructor&&r.constructor.prototype;e.exports=i===Object.prototype?void 0:i},"8cd2":function(e,t,o){},"93b0":function(e,t,o){},a016:function(e,t,o){"use strict";o("93b0")},a640:function(e,t,o){"use strict";var n=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&n((function(){o.call(null,t||function(){throw 1},1)}))}},b727:function(e,t,o){var n=o("0366"),r=o("e330"),i=o("44ad"),s=o("7b0b"),a=o("07fa"),c=o("65f0"),l=r([].push),u=function(e){var t=1==e,o=2==e,r=3==e,u=4==e,d=6==e,_=7==e,h=5==e||d;return function(m,p,f,v){for(var b,g,x=s(m),C=i(x),y=n(p,f),k=a(C),H=0,L=v||c,w=t?L(m,k):o||_?L(m,0):void 0;k>H;H++)if((h||H in C)&&(b=C[H],g=y(b,H,x),e))if(t)w[H]=g;else if(g)switch(e){case 3:return!0;case 5:return b;case 6:return H;case 2:l(w,b)}else switch(e){case 4:return!1;case 7:l(w,b)}return d?-1:r||u?u:w}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c6ff:function(e,t,o){"use strict";o("8cd2")},dbf2:function(e,t,o){"use strict";o("dc17")},dc17:function(e,t,o){},e8b5:function(e,t,o){var n=o("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},f4f9:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-left-sidebar"},e._l(e.content.other,(function(t,n){return o("div",{staticClass:"page-other-item"},[o("div",{staticClass:"other-item-name"},[o("div",{class:[t.is_currentPage?"current-page-border-radius":"","item-name-box"],style:{border:"2px solid "+e.font_color},on:{mouseenter:function(t){return e.enter(t,n)},mouseleave:function(t){return e.leave(t,n)}}},[o("span",{on:{click:function(o){return e.to_page(t.route)}}},[e._v(e._s(t.name.split(",").join(" —> ")))])]),o("div",{ref:"itemNameMenu"+n,refInFor:!0,staticClass:"item-name-menu",style:t.open_box_border,on:{mouseenter:function(t){return e.enter(t,n)},mouseleave:function(t){return e.leave(t,n)}}},[t.children?o("div",{staticClass:"menu-box"},e._l(t.children,(function(t,n){return o("div",{attrs:{keys:n}},[o("p",{on:{click:function(o){return e.to_page(t.route)}}},[e._v(e._s(t.name))]),e._l(t.children,(function(n,r){return t.children?o("p",{staticClass:"thirditem-name",attrs:{keys:r},on:{click:function(t){return e.to_page(n.route)}}},[e._v(e._s(n.name)+" ")]):e._e()}))],2)})),0):e._e()])])])})),0)},r=[],i=(o("d3b7"),o("159b"),{components:{},props:{prop_font_color:String,prop_content:Object},data:function(){return{font_color:this.prop_font_color,content:this.prop_content,testcontent:{current_page:{name:"Collection and Research",children:[]},other:[{name:"Collection and Research",children:[],is_currentPage:!0},{name:"Archives",children:[{name:"Collections",route:"pageCollections"},{name:"Library",route:"pageLibrary"},{name:"Collaborators",route:"pageCollaborators"}],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:" Research",children:[{name:"Collections",route:""},{name:"Library",route:""},{name:"Collaborators",route:""}],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:"Publications",children:[],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}}]}}},mounted:function(){var e=this;this.$nextTick((function(){e.init()}))},beforeDestroy:function(){},created:function(){},methods:{init:function(){var e=this;this.content.other.forEach((function(t,o){t.width=e.$refs["itemNameMenu".concat(o)][0].offsetWidth,t.dom_element=e.$refs["itemNameMenu".concat(o)][0],t.dom_element.style.width=0}));document.getElementsByClassName("item-name-menu")},enter:function(e,t){void 0!==this.content.other[t].children&&0!==this.content.other[t].children.length&&(this.content.other[t].open_box_border={borderTop:"2px solid "+this.font_color,borderBottom:"2px solid "+this.font_color,borderRight:"2px solid "+this.font_color},void 0!==this.content.other[t].is_currentPage&&(this.content.other[t].is_currentPage=!1),this.content.other[t].dom_element.style.width=this.content.other[t].width+"px",this.content.other[t].dom_element.style.marginRight=8-this.content.other[t].width+"px")},leave:function(e,t){0!==this.content.other[t].children&&this.content.other[t].children&&(void 0!==this.content.other[t].is_currentPage&&(this.content.other[t].is_currentPage=!0),this.content.other[t].dom_element.style.width=0,this.content.other[t].dom_element.style.marginRight="0px",this.content.other[t].open_box_border={borderTop:"",borderBottom:"",borderRight:""})},to_page:function(e){e&&this.$router.push({path:"/pc/"+e})}}}),s=i,a=(o("dbf2"),o("2877")),c=Object(a["a"])(s,n,r,!1,null,"4e6af569",null);t["a"]=c.exports},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);