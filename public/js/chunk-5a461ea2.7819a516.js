(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a461ea2"],{2363:function(e,t,i){},"43b5":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"pagepublicProgramOne-box"},[e._m(0),t("search-query-one-select",{attrs:{prop_color:e.$global_colors.PAM_publicprogram,prop_item_data:e.search_value_item}}),t("div",{attrs:{id:"publicProgram_box"}},[t("div",{staticClass:"item-backgroundimg-box",attrs:{id:"item-backgroundimg-box"}}),e._l(e.table_item_data,(function(i,l){return t("div",{key:l,staticClass:"publicProgram-item publicProgram-item-copy"},[t("div",{staticClass:"publicProgram-item-content"},[t("div",{staticClass:"item-content-title",on:{click:function(t){return e.to_exhibitons_article_page(i)}}},[e._v(" "+e._s(i.content_title)+" ")]),t("div",{staticClass:"item-content-time"},[e._v(e._s(i.time))]),i.warning_content?t("div",{staticClass:"item-content-warning",class:[i.warning_content.level]},[t("div",{staticClass:"warning-box"}),t("span",{class:[i.warning_content.level]},[e._v(e._s(i.warning_content.content))])]):e._e(),i.year?t("div",{staticClass:"year-box"},[t("span",[e._v(e._s(i.year.time_title))])]):e._e()])])}))],2)],1),t("footer-page")],1)},n=[function(){var e=this,t=e._self._c;return t("p",[e._v("public "),t("br"),e._v(" Program ")])}],o=(i("5edb"),i("5046")),a=i("50cc"),s={components:{"search-query-one-select":a["a"],"footer-page":o["a"]},name:"",data(){return{blogTitle:"sdfsdfsdf",search_value_item:[{name:"Exhibitions",value:"All Exhibitions",selected_click:!1,select_content:[{text:"All Exhibitions",value:"All Exhibitions"},{text:"Upcoming Exhibitions",value:"Upcoming Exhibitions"},{text:"Past Exhibitions",value:"Past Exhibitions"}]},{name:"",value:"All type",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]},{name:"year",value:"All Locations",selected_click:!1,select_content:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}]}],hidden_element_index:[],table_box_dom:null,table_info:{row:null,column:null,height:null,item_height:null,item_width:null},table_item_data:[{index:1,content_title:"Beyond Social Text",time:"2021.03.28 - 2021.06.20",warning_content:{level:"PAM-warning-color-1",content:"On Now"},news_link:{route_name:"pagepublicProgramNews",title:"Beyond Social Text",publicProgram_article_id:"publicProgramContent2021-1"},background_image:{show:!1,url:"publicProgram_img_1.png"},element:null,rows:1},{index:2,content_title:"桃花源·迹 前言",news_link:{route_name:"pagepublicProgramNews",title:"桃花源·迹 前言",publicProgram_article_id:"publicProgramContent2022-1"},time:"2022-01",warning_content:{level:"PAM-warning-color-2",content:"Ends Soon"},element:null,current_row:1,isRouter:"pagepublicProgramNews"},{index:3,content_title:"Perspectival Playground",time:"8/7/2021",element:null,current_row:1,news_link:{route_name:"pagepublicProgramNews",title:"Perspectival Playground",publicProgram_article_id:"publicProgramContent2021-2"}},{index:4,content_title:"Shenzhen Contemporary Artists Series No.1Xue Feng: Far Far",time:"2021.8.8",element:null,current_row:1,news_link:{route_name:"pagepublicProgramNews",title:"Perspectival Playground",publicProgram_article_id:"publicProgramContent2021-3"}},{index:5,content_title:"故乡系列之二｜王子耕《1994年》",time:"2021.10.24",element:null,current_row:1,news_link:{route_name:"pagepublicProgramNews",title:"Perspectival Playground",publicProgram_article_id:"publicProgramContent2021-4"}},{index:6,content_title:"AURA",time:"2021.3.28-6.20",news_link:{route_name:"pagepublicProgramNews",title:"Perspectival Playground",publicProgram_article_id:"publicProgramContent2021-5"},element:null,current_row:1,background_image:{show:!1,url:"publicProgram_img_2.png"}},{index:7,content_title:"Muses, Yu Gong and Compasses ",time:"2021.3.28-6.20",news_link:{route_name:"pagepublicProgramNews",title:"Perspectival Playground",publicProgram_article_id:"publicProgramContent2020-1"},element:null,current_row:1,background_image:{show:!1,url:"publicProgram_img_2.png"}},{index:8,content_title:"Portraiting Pingshan",time:"2020.8.22-10.9",news_link:{route_name:"pagepublicProgramNews",title:"Perspectival Playground",publicProgram_article_id:"publicProgramContent2020-2"},element:null,current_row:1,background_image:{show:!1,url:"publicProgram_img_2.png"}}]}},mounted(){},methods:{to_exhibitons_article_page(e){e.news_link&&this.$router.push({path:"/pc/pagepublicProgramNews",query:{publicProgram_article_id:e.news_link.publicProgram_article_id}})},item_backgroundimg_show(){let e=this.table_item_data;for(let t in e);},extend_more_box(){let e=this,t=this.table_item_data,i=this.table_box_dom;t.forEach((t,l)=>{if(t.extend_content_box){t.shrink_spread_mark=!1,t.element.addEventListener("click",(function(){e.shrink_spread_morebox(t)}));let l=t.element.getElementsByClassName("publicProgram-item-content")[0];l.classList.add("publicProgram-item-content-morebox");for(let e in t.extend_content_box){let l=document.getElementsByClassName("publicProgram-item")[0].cloneNode(!0),n=t.extend_content_box[e];n.element_dom=l,n.element_dom.getElementsByClassName("item-content-title")[0].innerText=n.content_title,n.element_dom.getElementsByClassName("publicProgram-item-content")[0].style.border="2px dotted #043fb5",n.element_dom.classList.add("publicProgram-item-content-children"),n.element_dom.getElementsByClassName("item-content-time")[0].innerText=n.time,n.element_dom.getElementsByClassName("item-content-warning")[0].remove(),n.element_dom.style.top=t.element.offsetTop+"px",n.element_dom.style.left=t.element.offsetLeft+"px",n.element_dom.style.zIndex=-1,n.currentstyle={top:t.element.offsetTop+"px",left:t.element.offsetLeft+"px",zIndex:100},i.appendChild(n.element_dom)}}})},shrink_spread_morebox(e){e.shrink_spread_mark=!e.shrink_spread_mark;let t=e;if(e.shrink_spread_mark){let e=t.index,i=(t.element.offsetLeft,0),l=0,n=null;t.extend_content_box.forEach((t,o)=>{if(i=parseInt((e+o)/3),n=(e+(o+1))%3,i%2===0)switch(n){case 0:l=2;break;case 1:l=0;break;case 2:l=1;break}else switch(n){case 0:l=0;break;case 1:l=2;break;case 2:l=1;break}t.element_dom.style.left=this.table_info.item_width*l+"px",t.element_dom.style.top=this.table_info.item_height*i+"px",t.element_dom.style.zIndex=99,t.currentstyle={top:this.table_info.item_height*i+"px",left:this.table_info.item_width*l+"px",zIndex:100}})}else t.extend_content_box.forEach((t,i)=>{t.element_dom.style.zIndex=-1,t.element_dom.style.top=e.element.offsetTop+"px",t.element_dom.style.left=e.element.offsetLeft+"px"})},waterFall(){var e=0,t=0;let i=document.getElementById("publicProgram_box");this.table_box_dom=document.getElementById("publicProgram_box");let l=document.getElementsByClassName("publicProgram-item");for(let d=0;d<l.length;d++)this.table_item_data[d].element=l[d],this.table_item_data[d].current_row=parseInt(d/3)+1;var n=i.offsetWidth,o=l[0].offsetWidth||446,a=(n/(o+t)).toFixed(1),s=0;s=l.length%a!==0?parseInt(l.length/a)+1:l.length/a;let r=(o-405)/2;i.style.height=(553+e)*s+"px",this.table_info={row:s,column:3,height:(553+e)*s,item_height:553+e,item_width:o};var c=[];for(let d=0;d<l.length;d++)if(l[d].style.width=(n/a).toFixed(1)+"px",l[d].style.borderLeft=r+1+"px solid white",l[d].style.borderRight=r+1+"px solid white",d<a)l[d].style.top=0,l[d].style.left=(o+t)*d+"px",c.push(l[d].offsetHeight);else{for(var _=c[0],m=0,u=0;u<c.length;u++)_>c[u]&&(_=c[u],m=u);l[d].style.top=c[m]+e+"px",l[d].style.left=l[m].offsetLeft+"px",c[m]=c[m]+l[d].offsetHeight+e}this.extend_more_box()}}},r=s,c=(i("b88a"),i("e607")),_=Object(c["a"])(r,l,n,!1,null,"31d1b2f8",null);t["default"]=_.exports},5046:function(e,t,i){"use strict";var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"big-logo-box"},[t("svg",{attrs:{width:"1389",height:"1367",viewBox:"0 0 1389 1367",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{filter:"url(#filter0_b_1416_933)"}},[t("path",{attrs:{d:"M495.818 228.187V0H0V1367H417.904H793.31H1389V228.187H495.818ZM220.993 456.374V342.687H297.491V228.999H198.327V797.437H99.1637V114.5H179.203H198.327H297.491H396.655V228.187V341.875V455.562H297.491H220.993V456.374ZM694.146 910.312H636.773H594.274H395.946V890.011V796.625V682.937V569.25H495.11H571.608V682.937H495.11V796.625H594.274V455.562H495.11V341.875H594.274H689.896H694.146V910.312ZM893.89 683.749H794.726V342.687H893.89V683.749ZM1289.84 347.559V455.562V682.937H1190.67V455.562H1091.51V569.25H992.345V455.562H915.848V341.875H1289.84V347.559Z",fill:e.computed_theme_color.topside_fontColor}})]),t("defs",[t("filter",{attrs:{id:"filter0_b_1416_933",x:"-25",y:"-25",width:"1439",height:"1417",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[t("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t("feGaussianBlur",{attrs:{in:"BackgroundImage",stdDeviation:"12.5"}}),t("feComposite",{attrs:{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_1416_933"}}),t("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_1416_933",result:"shape"}})],1)])]),t("div",{staticClass:"museum-des-box-position"},[e._m(0),t("div",{staticClass:"museum-des-box"},[e._m(1),t("div",{staticClass:"des-box-item"}),t("div",{staticClass:"des-box-item"},[t("p",{staticClass:"zh-en-mark"},[t("span",{on:{click:e.change_language}},[e._v(e._s(e.$t("content_menu.menu.language")))])])])])])])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"museum-des-box"},[t("div",{staticClass:"des-box-item"},[t("p",[t("span",[e._v("Pingshan Art Museum")]),t("br"),e._v(" Huide Road, Pingshan District, Shenzhen, China "),t("br"),t("br"),t("span",[e._v("Park Annexe")]),t("br"),e._v(" Pingshan Central Park, Shenzhen, China")])]),t("div",{staticClass:"des-box-item"},[t("p",[t("span",[e._v("Park Annexe")]),t("br"),e._v(" Pingshan Experimental School Stop"),t("br"),e._v(" 公交车：坪山实验学校站"),t("br"),e._v(" M478/ M393/M440/963/M497/915/M325"),t("br"),t("br"),t("span",[e._v("High-speed Rail")]),t("br"),e._v(" Pingshan Station 高铁：坪山站")])]),t("div",{staticClass:"des-box-item"},[t("p",[t("span",[e._v("Hours")]),t("br"),e._v(" Open from Tuesday to Sunday"),t("br"),e._v(" 逢周二至周日开放"),t("br"),e._v(" 9:00 - 17:00")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"des-box-item"},[t("div",{staticClass:"email"},[e._v("press@pingshanartmuseum.org")])])}],o={name:"",data(){return{language:"中文"}},methods:{change_language(){let e=this.$store.state.local_language;"CN"===e?this.$store.commit("change_language","EN"):this.$store.commit("change_language","CN"),"CN"==this.$i18n.locale?this.$i18n.locale="EN":this.$i18n.locale="CN",localStorage.setItem("languageSet",this.$store.state.local_language)}},computed:{computed_theme_color(){return this.$store.state.current_theme_color}}},a=o,s=(i("74be"),i("e607")),r=Object(s["a"])(a,l,n,!1,null,"433875c3",null);t["a"]=r.exports},"50cc":function(e,t,i){"use strict";var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-box-out",attrs:{id:"search-top-input-box"}},[t("div",{class:["select-box-content",e.top_fixed?"top-fixed":""]},e._l(e.select_item_value,(function(i,l){return t("div",{key:l,staticClass:"select-item-box"},[t("div",{staticClass:"select-item"},[t("div",{staticClass:"select-item-icon",on:{click:function(t){return e.get_selected_click_all(l)}}},[t("div",{staticClass:"item-arrow-head"},[t("div",{staticClass:"arrow-head-left",style:{"background-color":e.color}}),t("div",{staticClass:"arrow-head-right",style:{"background-color":e.color}})])]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.value,expression:"item.value"}],style:{color:e.color,border:"2px solid"+e.color},attrs:{all:"text",name:""},domProps:{value:i.value},on:{input:function(t){t.target.composing||e.$set(i,"value",t.target.value)}}}),t("ul",{style:{height:i.selected_click?47*i.select_content.length+"px":0,opacity:i.selected_click?"1":"0",border:"2px solid"+e.color,"border-top":"0 solid"+e.color}},e._l(i.select_content,(function(i,n){return t("li",{on:{click:function(t){return e.get_selected_click_value(i,l)}}},[e._v(e._s(i.text))])})),0)])])})),0)])},n=[],o={name:"searchQuery",props:{prop_color:String,prop_item_data:Array},mounted(){window.addEventListener("scroll",this.div_top_fixed)},data(){return{test:"sdfsdfs",top_fixed:!1,color:this.prop_color,select_base_style:{color:this.prop_color},selected_click_type:!1,selected_click_year:!1,select_item_value:this.prop_item_data}},beforeDestroy(){window.removeEventListener("scroll",this.div_top_fixed)},methods:{div_top_fixed(){let e=document.getElementById("search-top-input-box").getBoundingClientRect().top||document.getElementById("search-top-input-box").getBoundingClientRect().top;this.top_fixed=e<0},get_selected_click_all(e){this.select_item_value[e].selected_click=!this.select_item_value[e].selected_click},get_selected_click_value(e,t){this.select_item_value[t].value=e.value,this.select_item_value[t].selected_click=!this.select_item_value[t].selected_click,this.$emit("transfor_select_item",this.select_item_value)}}},a=o,s=(i("f502"),i("e607")),r=Object(s["a"])(a,l,n,!1,null,"4d99f6c1",null);t["a"]=r.exports},"74be":function(e,t,i){"use strict";i("d59b")},"9ffe":function(e,t,i){},b88a:function(e,t,i){"use strict";i("9ffe")},d59b:function(e,t,i){},f502:function(e,t,i){"use strict";i("2363")}}]);