(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dccdf108"],{"0f5d":function(e,t,o){},"1b40":function(e,t,o){},4091:function(e,t,o){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-box-out",attrs:{id:"search-top-input-box"}},[t("div",{staticClass:"select-box-content",staticStyle:{"text-align":"right"}},[t("div",{staticClass:"select-item-box"},[t("div",{staticClass:"select-item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search_all_input,expression:"search_all_input"}],style:{color:e.color,border:"2px solid"+e.color},attrs:{all:"text",name:"",placeholder:"Search"},domProps:{value:e.search_all_input},on:{input:function(t){t.target.composing||(e.search_all_input=t.target.value)}}})])])]),t("div",{class:["select-box-content",e.top_fixed?"top-fixed":""]},e._l(e.search_value_item,(function(o,n){return t("div",{staticClass:"select-item-box",attrs:{keys:n}},[t("div",{staticClass:"select-item"},[t("div",{staticClass:"select-item-icon",on:{click:function(t){return e.get_selected_click_open(o,n)}}},[t("div",{staticClass:"item-arrow-head"},[t("div",{staticClass:"arrow-head-left",style:{"background-color":e.color}}),t("div",{staticClass:"arrow-head-right",style:{"background-color":e.color}})])]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.value,expression:"item.value"}],style:{color:e.color,border:"2px solid"+e.color},attrs:{all:"text",name:""},domProps:{value:o.value},on:{input:function(t){t.target.composing||e.$set(o,"value",t.target.value)}}}),t("ul",{style:{height:o.selected_click?47*o.select_content.length+"px":0}},e._l(o.select_content,(function(o,r){return t("li",{style:{color:e.color,"border-bottom":"2px solid"+e.color},on:{click:function(t){return e.get_selected_click_getvalue(o,n,e.select_index)}}},[e._v(e._s(o.text))])})),0)])])})),0)])},r=[],i={name:"searchQuery",props:{prop_color:String,prop_item_data:Array},mounted(){window.addEventListener("scroll",this.div_top_fixed)},data(){return{top_fixed:!1,search_all_input:"",color:this.prop_color,select_base_style:{color:this.prop_color,border:"1px solid"+this.prop_color},search_value_item:this.prop_item_data}},beforeDestroy(){window.removeEventListener("scroll",this.div_top_fixed)},methods:{div_top_fixed(){let e=document.getElementById("search-top-input-box").getBoundingClientRect().top||document.getElementById("search-top-input-box").getBoundingClientRect().top;this.top_fixed=e<0},get_selected_click_open(e,t){this.search_value_item[t].selected_click=!this.search_value_item[t].selected_click},get_selected_click_getvalue(e,t,o){this.search_value_item[t].value=e.text,this.search_value_item[t].selected_click=!this.search_value_item[t].selected_click}}},s=i,a=(o("9bf7"),o("e607")),l=Object(a["a"])(s,n,r,!1,null,"2ed545db",null);t["a"]=l.exports},"41be":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-collection-index"},[t("div",{staticClass:"collection-index-left column"},[t("page-left-sidebar",{attrs:{prop_font_color:e.page_left_sidebar.font_color,prop_content:e.page_left_sidebar.content}})],1),t("div",{staticClass:"collection-index-rightmain column"},[t("div",{staticClass:"pageCollectionsOne-box"},[t("p",[e._v("Collections")]),t("search-query-two",{attrs:{prop_color:e.$global_colors.PAM_black,prop_item_data:e.search_value_item}}),t("div",{attrs:{id:"collections_box"}},e._l(e.table_item_data,(function(o,n){return t("div",{key:n,staticClass:"Collections-item"},[t("div",{staticClass:"Collections-item-content"},[e._m(0,!0),t("div",{staticClass:"item-content-title"},[t("span",{staticClass:"title-left"},[e._v(e._s(o.content_title))]),t("span",{staticClass:"title-right"},[e._v(e._s(o.content_title))])])])])})),0)],1)])]),t("PAM-footer-page")],1)},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"collections-item-content-cover"},[t("img",{attrs:{src:"",alt:"Collections"}})])}],i=(o("5edb"),o("5046")),s=o("4091"),a=o("f4f9"),l={name:"",components:{"PAM-footer-page":i["a"],"search-query-two":s["a"],"page-left-sidebar":a["a"]},data(){return{page_left_sidebar:{font_color:this.$global_colors.PAM_black,content:{other:[{name:"Archives,Collaborators",children:[{name:"Collections",route:"pageCollectionsIndex"},{name:"Library",route:"pageLibraryIndex"},{name:"Collaborators",route:"pageCollaboratorsIndex",children:[{name:"Artists",route:"pageArtists"},{name:"Scholars",route:"pageLibraryIndex"},{name:"Institutions",route:"pageCollaboratorsIndex"}]}],is_currentPage:!0,open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:" Research",children:[],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:"Publications",children:[]}]}},table_item_data:[{index:1,content_title:"Beyond ",content_items_nums:"12 ",cover_url:"item_1.png"},{index:2,content_title:"Beyond ",content_items_nums:"12 ",cover_url:"item_5.png"},{index:3,content_title:"Beyond ",content_items_nums:"12 ",cover_url:"item_2.png"},{index:4,content_title:"Lorem Ipsum",cover_url:"item_3.png"},{index:5,content_title:"Beyond ",content_items_nums:"12 ",cover_url:"item_4.png"},{index:6,content_title:"Beyond ",cover_url:"item_6.png"}],search_value_item:[{value:"All year",name:"year",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Materials",name:"",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Collection Types",name:"",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{value:"All Locations",name:"",selected_click:!1,select_content:[{text:"2020",value:"2020"},{text:"2021",value:"2021"},{text:"2022",value:"2022"}]}]}},mounted(){this.add_imgs()},methods:{add_imgs(){let e=this,t=document.getElementsByClassName("collections-item-content-cover");this.table_item_data.forEach((o,n)=>{let r="/imgs/page_collections/"+o.cover_url;t[n].children[0].src=r,t[n].children[0].addEventListener("click",(function(){e.$router.push({path:"/pc/pageCollectionsContentShow",query:{collectionid:0}})}))})}}},c=l,d=(o("c642"),o("e607")),_=Object(d["a"])(c,n,r,!1,null,"28f405e8",null);t["default"]=_.exports},4341:function(e,t,o){},5046:function(e,t,o){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"big-logo-box"},[t("svg",{attrs:{width:"1389",height:"1367",viewBox:"0 0 1389 1367",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{filter:"url(#filter0_b_1416_933)"}},[t("path",{attrs:{d:"M495.818 228.187V0H0V1367H417.904H793.31H1389V228.187H495.818ZM220.993 456.374V342.687H297.491V228.999H198.327V797.437H99.1637V114.5H179.203H198.327H297.491H396.655V228.187V341.875V455.562H297.491H220.993V456.374ZM694.146 910.312H636.773H594.274H395.946V890.011V796.625V682.937V569.25H495.11H571.608V682.937H495.11V796.625H594.274V455.562H495.11V341.875H594.274H689.896H694.146V910.312ZM893.89 683.749H794.726V342.687H893.89V683.749ZM1289.84 347.559V455.562V682.937H1190.67V455.562H1091.51V569.25H992.345V455.562H915.848V341.875H1289.84V347.559Z",fill:e.computed_theme_color.topside_fontColor}})]),t("defs",[t("filter",{attrs:{id:"filter0_b_1416_933",x:"-25",y:"-25",width:"1439",height:"1417",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[t("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t("feGaussianBlur",{attrs:{in:"BackgroundImage",stdDeviation:"12.5"}}),t("feComposite",{attrs:{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_1416_933"}}),t("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_1416_933",result:"shape"}})],1)])]),t("div",{staticClass:"museum-des-box-position"},[e._m(0),t("div",{staticClass:"museum-des-box"},[e._m(1),t("div",{staticClass:"des-box-item"}),t("div",{staticClass:"des-box-item"},[t("p",{staticClass:"zh-en-mark"},[t("span",{on:{click:e.change_language}},[e._v(e._s(e.$t("content_menu.menu.language")))])])])])])])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"museum-des-box"},[t("div",{staticClass:"des-box-item"},[t("p",[t("span",[e._v("Pingshan Art Museum")]),t("br"),e._v(" Huide Road, Pingshan District, Shenzhen, China "),t("br"),t("br"),t("span",[e._v("Park Annexe")]),t("br"),e._v(" Pingshan Central Park, Shenzhen, China")])]),t("div",{staticClass:"des-box-item"},[t("p",[t("span",[e._v("Park Annexe")]),t("br"),e._v(" Pingshan Experimental School Stop"),t("br"),e._v(" 公交车：坪山实验学校站"),t("br"),e._v(" M478/ M393/M440/963/M497/915/M325"),t("br"),t("br"),t("span",[e._v("High-speed Rail")]),t("br"),e._v(" Pingshan Station 高铁：坪山站")])]),t("div",{staticClass:"des-box-item"},[t("p",[t("span",[e._v("Hours")]),t("br"),e._v(" Open from Tuesday to Sunday"),t("br"),e._v(" 逢周二至周日开放"),t("br"),e._v(" 9:00 - 17:00")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"des-box-item"},[t("div",{staticClass:"email"},[e._v("press@pingshanartmuseum.org")])])}],i={name:"",data(){return{language:"中文"}},methods:{change_language(){let e=this.$store.state.local_language;"CN"===e?this.$store.commit("change_language","EN"):this.$store.commit("change_language","CN"),"CN"==this.$i18n.locale?this.$i18n.locale="EN":this.$i18n.locale="CN",localStorage.setItem("languageSet",this.$store.state.local_language)}},computed:{computed_theme_color(){return this.$store.state.current_theme_color}}},s=i,a=(o("74be"),o("e607")),l=Object(a["a"])(s,n,r,!1,null,"433875c3",null);t["a"]=l.exports},"74be":function(e,t,o){"use strict";o("d59b")},7711:function(e,t,o){"use strict";o("4341")},"9bf7":function(e,t,o){"use strict";o("1b40")},c642:function(e,t,o){"use strict";o("0f5d")},d59b:function(e,t,o){},f4f9:function(e,t,o){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-left-sidebar"},e._l(e.content.other,(function(o,n){return t("div",{staticClass:"page-other-item"},[t("div",{staticClass:"other-item-name"},[t("div",{class:[o.is_currentPage?"current-page-border-radius":"","item-name-box"],style:{border:"2px solid "+e.font_color},on:{mouseenter:function(t){return e.enter(t,n)},mouseleave:function(t){return e.leave(t,n)}}},[t("span",{on:{click:function(t){return e.to_page(o.route)}}},[e._v(e._s(o.name.split(",").join(" —> ")))])]),t("div",{staticClass:"item-name-menu",style:o.open_box_border,on:{mouseenter:function(t){return e.enter(t,n)},mouseleave:function(t){return e.leave(t,n)}}},[o.children?t("div",{staticClass:"menu-box"},e._l(o.children,(function(o,n){return t("div",{attrs:{keys:n}},[t("p",{on:{click:function(t){return e.to_page(o.route)}}},[e._v(e._s(o.name))]),e._l(o.children,(function(n,r){return t("p",{directives:[{name:"show",rawName:"v-show",value:void 0!==o.children,expression:"sec_item.children !== undefined"}],staticClass:"thirditem-name",attrs:{keys:r}},[e._v(e._s(n.name)+" ")])}))],2)})),0):e._e()])])])})),0)},r=[],i=(o("5edb"),{components:{},props:{prop_font_color:String,prop_content:Object},data(){return{font_color:this.prop_font_color,content:JSON.parse(JSON.stringify(this.prop_content)),testcontent:{current_page:{name:"Collection and Research",children:[]},other:[{name:"Collection and Research",children:[],is_currentPage:!0},{name:"Archives",children:[{name:"Collections",route:"pageCollections"},{name:"Library",route:"pageLibrary"},{name:"Collaborators",route:"pageCollaborators"}],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:" Research",children:[{name:"11111111111111111111111Collections",route:""},{name:"Library",route:""},{name:"Collaborators",route:""}],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}},{name:"Publications",children:[],open_box_border:{borderTop:"",borderBottom:"",borderRight:""}}]}}},mounted(){setTimeout(this.init,0)},created(){},methods:{init(){const e=document.getElementsByClassName("item-name-menu");for(let t=0;t<e.length;t++)this.content.other[t].width=e[t].offsetWidth,this.content.other[t].dom_element=e[t],e[t].style.width=0},enter(e,t){void 0!==this.content.other[t].children&&0!==this.content.other[t].children.length&&(this.content.other[t].open_box_border={borderTop:"2px solid "+this.font_color,borderBottom:"2px solid "+this.font_color,borderRight:"2px solid "+this.font_color},void 0!==this.content.other[t].is_currentPage&&(this.content.other[t].is_currentPage=!1),this.content.other[t].dom_element.style.width=this.content.other[t].width+"px",this.content.other[t].dom_element.style.marginRight=8-this.content.other[t].width+"px")},leave(e,t){0!==this.content.other[t].children&&this.content.other[t].children&&(void 0!==this.content.other[t].is_currentPage&&(this.content.other[t].is_currentPage=!0),this.content.other[t].dom_element.style.width=0,this.content.other[t].dom_element.style.marginRight="0px",this.content.other[t].open_box_border={borderTop:"",borderBottom:"",borderRight:""})},to_page(e){e&&this.$router.push({path:"/pc/"+e})}}}),s=i,a=(o("7711"),o("e607")),l=Object(a["a"])(s,n,r,!1,null,"32d2777e",null);t["a"]=l.exports}}]);