(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93611ae2"],{"0f83":function(t,e,i){},1857:function(t,e,i){"use strict";i("3982")},3982:function(t,e,i){},"3cd8":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home",attrs:{id:"pc_home"}},[e("div",{staticClass:"left-main"},[t.$store.state.topsidebar_state.is_show?e("PAM_topbar"):t._e(),e("transition",{attrs:{name:"transitionRouter",node:"out-in"}},[e("router-view")],1)],1),e("div",{class:{"right-sidebar":t.right_sidebar_class,"right-sidebar—small-screen":!t.right_sidebar_class}},[e("PAM_sidebar")],1)])},o=[],n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"PAM_sidebar"}},[e("div",{staticClass:"sidebar-rollcontent",attrs:{id:"sidebar_content_box"}},[e("div",{staticClass:"PAM-clickmenu-box"},[e("div",{staticClass:"PAM-clickmenu",attrs:{id:"PAM-clickmenu"},on:{click:t.menu_click}},[e("div",{staticClass:"clickmenu-line"}),e("div",{staticClass:"clickmenu-line"}),e("div",{staticClass:"clickmenu-line"})])]),e("PAM_sidebar_content",{staticClass:"PAM-sidebar-content"}),e("div",{staticClass:"sidebar-rollcontent-box",attrs:{id:"sidebar_content"}},[e("span",{on:{click:t.top_text_click}},[t._v("周二至周日 9:00—17:00 • Pingshan Art Museum, Huide Road, Pingshan District, Shenzhen, China • 周一闭馆（国家法定假日除外）")])])],1)])},a=[],l=(i("5edb"),function(){var t=this,e=t._self._c;return e("div",{class:t.PAMMenuConent,attrs:{id:"PAM_menu_content"}},[e("div",{staticClass:"router_menu"},[e("p",{on:{click:t.change_language}},[t._v(" "+t._s(t.$t("content_menu.menu.language")))]),e("p",[e("router-link",{attrs:{to:"welcome"}},[t._v(t._s(t.$t("content_menu.menu.home")))])],1),e("p",[e("router-link",{attrs:{to:"pageVisit"}},[t._v(t._s(t.$t("content_menu.menu.visit")))])],1),e("p",[e("router-link",{attrs:{to:"pageExhibitionsOne"}},[t._v(t._s(t.$t("content_menu.menu.exhibitions"))+" ")])],1),e("p",[e("router-link",{attrs:{to:"pagePublicProgramOne"}},[t._v(t._s(t.$t("content_menu.menu.public_program")))])],1),e("p",[e("router-link",{attrs:{to:"pageCollectionRresearch"}},[t._v(t._s(t.$t("content_menu.menu.collection_and_research")))])],1),e("p",[e("router-link",{attrs:{to:"pageDigitalPAM"}},[t._v(t._s(t.$t("content_menu.menu.digital_PAM")))])],1),e("p",[e("router-link",{attrs:{to:"News"}},[t._v(t._s(t.$t("content_menu.menu.News")))])],1),e("p",[e("router-link",{attrs:{to:"pagePAMembers"}},[t._v(t._s(t.$t("content_menu.menu.PAMembers")))])],1),e("p",[e("router-link",{attrs:{to:"pageAbout"}},[t._v(t._s(t.$t("content_menu.menu.about")))])],1)]),e("div",{staticClass:"exhibitons-box"},[t._l(t.exhibitionsData.itemData,(function(i){return e("div",{staticClass:"exhibitons-box-item"},[e("p",{staticClass:"box-item-type"},[t._v(t._s(i.type))]),e("p",{staticClass:"box-item-title"},[t._v(t._s(i.title))]),e("p",{staticClass:"box-item-position"},[t._v(t._s(i.position))])])})),e("div",{staticClass:"exhibitons-box-more"},[t._v(" View all exhibitions ")])],2),e("div",{staticClass:"exhibitons-time-box"},[t._m(0),e("div",{staticClass:"time-box-item"},[e("p",[t._v(t._s(t.exhibitionsData.timeData))])])])])}),r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"time-box-icon"},[e("img",{attrs:{src:i("5a70"),alt:""}})])}],c={name:"PAM_sidebar_content",data(){return{PAMMenuConent:"PAM-menu-content-backdrop-filter",exhibitionsData:{itemData:[{type:"EXHIBITON",title:"Nine-Tiered Pagoda: Spatial and Visual Magic",position:"Pingshan Art Museum, Huide Road"},{type:"EXHIBITON",title:"Beyond Social Text: Duo Solo Exhibition of Li Mingchang and Zhang Jinhui.",position:"Pingshan Art Museum (Park Annexe)"}],timeData:"Tuesday—Sunday 9:00—17:00\n                            Admission stops at 16:30\n                            The museum is closed on Mondays"}}},mounted(){this.init()},computed:{current_client(){return this.$store.state.current_client}},methods:{init(){document.head.style.filter="blur(5px)";let t="blur(5px)"==window.getComputedStyle(document.head).filter;document.head.style["backdrop-filter"]="blur(5px)";let e="blur(5px)"==window.getComputedStyle(document.head)["backdrop-filter"];e?t||(this.PAMMenuConent="PAM-menu-content-background"):this.PAMMenuConent="PAM-menu-content-filter"},change_language(){let t=this.$store.state.local_language;"CN"===t?this.$store.commit("change_language","EN"):this.$store.commit("change_language","CN"),"CN"==this.$i18n.locale?this.$i18n.locale="EN":this.$i18n.locale="CN",localStorage.setItem("languageSet",this.$store.state.local_language)}}},u=c,d=(i("7203"),i("e607")),m=Object(d["a"])(u,l,r,!1,null,"0dafb7ca",null),p=m.exports,_={name:"PAM_sidebar",components:{PAM_sidebar_content:p},data(){return{rolltext_positionset:0,rolltext_timeset:null}},created(){},mounted(){this.text_roll()},methods:{isDiv(t){document.getElementById("welcome_imgbox")&&(document.getElementById("welcome_imgbox").style.filter="blur("+t+"px)")},top_text_click(){this.$router.push({path:"/pc/pageVisit"})},menu_click(){let t=document.getElementById("PAM_menu_content"),e=document.getElementById("PAM-clickmenu");0===t.offsetWidth?(t.style.width="1389px",e.style.transform="rotate(90deg)",this.isDiv(5)):(t.style.width=0,e.style.transform="rotate(0deg)",this.isDiv(0))},text_roll(){let t=this,e=document.getElementById("sidebar_content"),i=document.createElement("span"),s=document.createTextNode(e.innerText);i.appendChild(s),e.appendChild(i),i.style.paddingTop="100px",this.looptext_setinterval(e,i,50),e.onmouseover=function(){clearInterval(t.rolltext_timeset)},e.onmouseout=function(){t.looptext_setinterval(e,i,50)}},looptext_setinterval(t,e,i){let s=this;this.rolltext_timeset=setInterval((function(){t.scrollTop>=e.offsetHeight?(s.rolltext_positionset=0,t.scrollTop=s.rolltext_positionset):(s.rolltext_positionset++,t.scrollTop=s.rolltext_positionset)}),i)}}},h=_,g=(i("1857"),Object(d["a"])(h,n,a,!1,null,"75731850",null)),b=g.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-box"},[e("div",{staticClass:"search-input-box"},[e("input",{style:{width:t.inputWidth+"px",opacity:0===t.inputWidth?0:1},attrs:{type:"text"},on:{blur:function(e){t.inputWidth=0}}}),e("span",{on:{mouseenter:function(e){t.inputWidth=300}}},[e("svg",{staticClass:"icon",attrs:{t:"1678723066843",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2792",width:"30",height:"30"}},[e("path",{attrs:{d:"M701.269691 673.472602c1.041726 2.379187 2.517333 4.613064 4.468778 6.565533l17.990746 17.990746c7.635911 7.635911 19.49603 8.368598 28.010961 2.310625L952.466804 901.066133c5.677303 5.677303 5.677303 14.882965 0 20.560268l-30.841426 30.841426c-5.677303 5.677303-14.882965 5.677303-20.561291 0L700.339506 751.741199c6.057973-8.515954 5.325285-20.376073-2.310625-28.011984l-17.990746-17.990746c-1.952468-1.952468-4.186346-3.428076-6.565533-4.469801-142.699026 128.258129-362.464265 123.756605-499.741815-13.520945-141.941779-141.941779-141.941779-372.07618 0-514.016937 141.941779-141.942803 372.075157-141.942803 514.01796 0C825.026296 311.00936 829.526797 530.773576 701.269691 673.472602zM225.13248 225.13248c-113.553219 113.553219-113.553219 297.66033 0 411.213549 113.554242 113.554242 297.661354 113.554242 411.214573 0 113.553219-113.553219 113.553219-297.66033 0-411.213549C522.79281 111.578238 338.685699 111.578238 225.13248 225.13248z",fill:"#707070","p-id":"2793"}})])])]),t.$store.state.topsidebar_state.isShow_back?e("div",{staticClass:"back",attrs:{id:"top_back"}},[e("span",{on:{click:t.back}},[t._v("Back")])]):t._e(),e("div",{staticClass:"top-rollbox",attrs:{id:"top_rollbox"}},[e("span",{attrs:{id:"top_rollbox_content"},on:{click:function(e){return t.top_text_click()}}},[t._v("10.11.21 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])])},v=[],A={name:"PAM_topbar",data(){return{rolltext_positionset:0,rolltext_timeset:null,inputWidth:0}},mounted(){this.text_roll()},computed:{},watch:{},methods:{back(){this.$router.go(-1)},top_text_click(){this.$router.push({path:"/pc/pageVisit"})},text_roll(){let t=this,e=document.getElementById("top_rollbox"),i=document.createElement("span"),s=document.createTextNode(e.innerText);i.appendChild(s),e.appendChild(i),i.style.paddingTop="100px",this.looptext_setinterval(e,i,50),e.onmouseover=function(){clearInterval(t.rolltext_timeset)},e.onmouseout=function(){t.looptext_setinterval(e,i,50)}},looptext_setinterval(t,e,i){let s=this;this.rolltext_timeset=setInterval((function(){t.scrollLeft>=e.offsetWidth?(s.rolltext_positionset=0,t.scrollLeft=s.rolltext_positionset):(s.rolltext_positionset++,t.scrollLeft=s.rolltext_positionset)}),i)}}},f=A,C=(i("9d3b"),Object(d["a"])(f,x,v,!1,null,"5fcc9f00",null)),k=C.exports,y={name:"Home",components:{PAM_sidebar:b,PAM_sidebar_content:p,PAM_topbar:k},mounted(){window.addEventListener("resize",this.resize_handle),this.init()},data(){return{right_sidebar_class:!0,Home_id_dom_width:null}},methods:{init(){this.Home_id_dom_width=document.getElementById("pc_home").offsetWidth,this.Home_id_dom_width<1440?this.right_sidebar_class=!1:this.right_sidebar_class=!0},resize_handle(){let t=document.getElementById("pc_home").offsetWidth;this.right_sidebar_class=1440==t},router_change(t){let e=document.getElementById("PAM_menu_content"),i=document.getElementById("PAM-clickmenu");e.style.width=0,i.style.transform="rotate(0deg)"}},watch:{$route:{handler(t){this.router_change(t)}}}},P=y,M=(i("575f"),Object(d["a"])(P,s,o,!1,null,"5f8b9cc8",null));e["default"]=M.exports},4695:function(t,e,i){},"575f":function(t,e,i){"use strict";i("4695")},"5a70":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABgCAYAAAD/yovmAAAAAXNSR0IArs4c6QAAAyFJREFUeJzt3bFOFFEUh/FzZtd+K0hsGKJou74B1hYCGluhI3EIvoH4BhiIoYMeYXkDXmE7il0illqthhgT4h4r2uUOzp9h4PvVk5mz5Etucnfn4sXwMOyuifi4Pfdqo+4x7rOs7gFwNxEWJAgLEoQFCcKCBGFBgrAgQViQICxItEtcOzLzvmySJDFf7/ORqkRY3t9+vPhcN8pkqye9vP3Avtb1fJTDUggJwoIEYUGCsCBBWJAgLEgQFiQICxKEBYkyX+kkK4ZfFiy8mzTA+a/NzWcro0oHyPzl2mlvptJ7ohRJWDHOFjyztynXXkxP7ZpZtWGFdcMiKWxosBRCgrAgQViQICxIEBYkCAsShAUJwoIEYUFCsvN+yd3OLjKf+ALGzsMX3yp/sOh8rNSzxFI+96X233hvZuvudrb1aGn2vwYUK4a949Q3paRhmZntzC6eqZ9xG6V+7mJwMDJ39Tg3jqUQEoQFCcKCBGFBgrAgQViQICxIEBYk5BukxWC/kjOtPMZ5WNpGons2k/rc9vl5v/KXOa7pqpnLzJr6+ccRo89P3lR+7pk0rAjLzVvHldyrxOZ0WCybt5ZTrr2Ynsqt6pc5riHlb5U66+pJLzePpL97K/M9M1tJmzIdSyEkCAsShAUJwoIEYUGCsCBBWJAgLEgQFiTkX+lUJqzvEZ8quVXmXTNbr+JeN8l//9lcO+1dufMeYZ2bmGeS5oTlPtqaW9qr4lbFYH/evNW4sMx8ISLpRaHasRRCgrAgQViQICxIEBYkCAsShAUJwoIEYUGiOTvvJRSDgw1z/1DX8yMsfzc8TPvH6G4dq3EzPSKWi+Fh0osnVmLQOxnWbeBmedKFzfiGpjSWQkgQFiQICxKEBQnCggRhQYKwIEFYkEjfII3opJ915TO17vyNo+/tLOn38e3vP36qx7mP0sNy65qlnnVV73by9tPXR2Z2VOsQ9xxLISQICxKEBQnCggRhQYKwIEFYkCAsSBAWJBr0m/forp32dmudoCFHCN0GDQrLOhGR+DYJ6sZSCAnCggRhQYKwIEFYkCAsSBAWJAgLEoQFiX+clq8PB8qdjgAAAABJRU5ErkJggg=="},7203:function(t,e,i){"use strict";i("f39b")},"9d3b":function(t,e,i){"use strict";i("0f83")},f39b:function(t,e,i){}}]);