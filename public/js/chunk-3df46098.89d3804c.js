(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3df46098"],{"0b42":function(t,e,i){var n=i("da84"),o=i("e8b5"),a=i("68ee"),r=i("861d"),s=i("b622"),c=s("species"),l=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,a(e)&&(e===l||o(e.prototype))?e=void 0:r(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?l:e}},"159b":function(t,e,i){var n=i("da84"),o=i("fdbc"),a=i("785a"),r=i("17c2"),s=i("9112"),c=function(t){if(t&&t.forEach!==r)try{s(t,"forEach",r)}catch(e){t.forEach=r}};for(var l in o)o[l]&&c(n[l]&&n[l].prototype);c(a)},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,o=i("a640"),a=o("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"28c4":function(t,e,i){},"376e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagePAMembers-index"},[i("p",{staticClass:"pagePAMembers-title",class:["EN"===t.language?"en-title":"cn-title"]},[t._v(t._s(t.PAMembers_title))]),i("div",{staticClass:"pagePAMembers-info-box"},[i("PAM-PAMembers-info-box",{attrs:{prop_info_list:t.info_content.info_list}})],1),i("PAM-footer-page")],1)},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"PAMembers-info-box"},[t._l(t.info_list,(function(e,n){return i("div",{key:n,staticClass:"info-box-item"},[i("div",{staticClass:"box-item-title",on:{click:function(e){return t.open_close_box(n)}}},[i("span",[t._v(t._s(e.title))]),t.info_list_item_arrow.length?i("div",{staticClass:"item-arrow-head"},[i("div",{staticClass:"arrow-head-left",style:t.info_list_item_arrow[n].arrow_head_left}),i("div",{staticClass:"arrow-head-right",style:t.info_list_item_arrow[n].arrow_head_right})]):t._e()]),i("div",{staticClass:"box-item-article PAMembers-box-item-article-click"},[i("p",{staticClass:"item-article-title"},[t._v(t._s(e.article.title))]),i("p",{staticClass:"item-article-content"},[t._v(t._s(e.article.content))])])])})),i("div",{staticClass:"info-box-item"},[i("div",{staticClass:"box-item-title",on:{click:t.joinWeClick}},[i("span",[t._v("Join")])])])],2)},r=[],s=(i("d3b7"),i("159b"),i("df7c"),{name:"PAMembersInfoBox",props:{prop_info_list:Array},watch:{info_list:{handler:function(t,e){},immediate:!0}},data:function(){return{info_list:this.prop_info_list,info_list_height:[],clickdom_list:null,info_list_item_arrow:[],test:{arrow_head_right:{transform:"rotate(-30deg)","transform-origin":"bottom left"},arrow_head_left:{transform:"rotate(30deg)","transform-origin":"bottom right"}}}},mounted:function(){this.init()},methods:{joinWeClick:function(){this.$router.push({name:"pageJoinWe"})},init:function(){var t=this;this.clickdom_list=document.getElementsByClassName("PAMembers-box-item-article-click"),this.info_list.forEach((function(e,i){t.info_list_height[i]=t.clickdom_list[i].offsetHeight,t.clickdom_list[i].style.height=0,t.info_list_item_arrow.push({arrow_head_right:{transform:"rotate(-30deg)","transform-origin":"bottom left"},arrow_head_left:{transform:"rotate(30deg)","transform-origin":"bottom right"}})}))},open_close_box:function(t){0===this.clickdom_list[t].offsetHeight?(this.clickdom_list[t].style.height=this.info_list_height[t]+"px",this.$set(this.info_list_item_arrow,t,{arrow_head_right:{transform:"rotate(30deg)","transform-origin":"top left"},arrow_head_left:{transform:"rotate(-30deg)","transform-origin":"top right"}})):(this.clickdom_list[t].style.height=0,this.$set(this.info_list_item_arrow,t,{arrow_head_right:{transform:"rotate(-30deg)","transform-origin":"bottom left"},arrow_head_left:{transform:"rotate(30deg)","transform-origin":"bottom right"}}))}}}),c=s,l=(i("4991"),i("2877")),h=Object(l["a"])(c,a,r,!1,null,"6787532c",null),u=h.exports,m=i("5046"),f={name:"pagePAMembers",components:{"PAM-PAMembers-info-box":u,"PAM-footer-page":m["a"]},computed:{language:function(){return this.$store.state.local_language},PAMembers_title:function(){return this.$t("content_menu.menu.PAMembers")}},data:function(){return{info_content:{title:"PAMembers",info_list:[{title:"PAM Friends",article:{title:"How to Join",content:"A natural person can fill in a PAM Membership Application Form by \n                  showing ID card, to join the PAMembers and participate in the exhibition programmes \n                  and workshops held by the museum. Children and teenagers under the age of 18 shall \n                  register in the company of at least one of the parents.\n                  Member Perks\n                  Priority access to the latest information on exhibitions and other activities, potential invitation to the preview of new exhibitions.\u2028\n                  Priority access to limited-seats workshops and other public activities.\u2028\n                  One PAMember-exclusive interactive guided tour per month for each exhibition. Application/Reservation shall be submitted via PAMembers’personal centre page.\u2028\n                  Comment and interact with the official media matrix of the Pingshan Museum of Art (WeChat, B-site, Weibo, Tik Tok and other social media platforms) for a chance to win a limited edition peripheral gift.\u2028\n                  5% discount on non-alcoholic beverages at the Museum Cafe throughout the year"}},{title:"PAM Groups",article:{title:"",content:"A natural person can fill in a PAM Membership Application Form by \n                  showing ID card, to join the PAMembers and participate in the exhibition programmes \n                  and workshops held by the museum. Children and teenagers under the age of 18 shall \n                  register in the company of at least one of the parents.\n                  Member Perks\n                  Priority access to the latest information on exhibitions and other activities, potential invitation to the preview of new exhibitions.\u2028\n                  Priority access to limited-seats workshops and other public activities.\u2028\n                  One PAMember-exclusive interactive guided tour per month for each exhibition. Application/Reservation shall be submitted via PAMembers’personal centre page.\u2028\n                  Comment and interact with the official media matrix of the Pingshan Museum of Art (WeChat, B-site, Weibo, Tik Tok and other social media platforms) for a chance to win a limited edition peripheral gift.\u2028\n                  5% discount on non-alcoholic beverages at the Museum Cafe throughout the year"}},{title:"PAM Talents",article:{title:"",content:"A natural person can fill in a PAM Membership Application Form by \n                  showing ID card, to join the PAMembers and participate in the exhibition programmes \n                  and workshops held by the museum. Children and teenagers under the age of 18 shall \n                  register in the company of at least one of the parents.\n                  Member Perks\n                  Priority access to the latest information on exhibitions and other activities, potential invitation to the preview of new exhibitions.\u2028\n                  Priority access to limited-seats workshops and other public activities.\u2028\n                  One PAMember-exclusive interactive guided tour per month for each exhibition. Application/Reservation shall be submitted via PAMembers’personal centre page.\u2028\n                  Comment and interact with the official media matrix of the Pingshan Museum of Art (WeChat, B-site, Weibo, Tik Tok and other social media platforms) for a chance to win a limited edition peripheral gift.\u2028\n                  5% discount on non-alcoholic beverages at the Museum Cafe throughout the year"}},{title:"PAM Circle",article:{title:"",content:"A natural person can fill in a PAM Membership Application Form by \n                  showing ID card, to join the PAMembers and participate in the exhibition programmes \n                  and workshops held by the museum. Children and teenagers under the age of 18 shall \n                  register in the company of at least one of the parents.\n                  Member Perks\n                  Priority access to the latest information on exhibitions and other activities, potential invitation to the preview of new exhibitions.\u2028\n                  Priority access to limited-seats workshops and other public activities.\u2028\n                  One PAMember-exclusive interactive guided tour per month for each exhibition. Application/Reservation shall be submitted via PAMembers’personal centre page.\u2028\n                  Comment and interact with the official media matrix of the Pingshan Museum of Art (WeChat, B-site, Weibo, Tik Tok and other social media platforms) for a chance to win a limited edition peripheral gift.\u2028\n                  5% discount on non-alcoholic beverages at the Museum Cafe throughout the year"}}]}}}},d=f,p=(i("85b5"),Object(l["a"])(d,n,o,!1,null,"42e5d9a8",null));e["default"]=p.exports},4991:function(t,e,i){"use strict";i("f844")},5046:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"big-logo-box"},[i("svg",{staticStyle:{width:"100%"},attrs:{viewBox:"0 0 1389 1367",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{filter:"url(#filter0_b_1416_933)"}},[i("path",{attrs:{d:"M495.818 228.187V0H0V1367H417.904H793.31H1389V228.187H495.818ZM220.993 456.374V342.687H297.491V228.999H198.327V797.437H99.1637V114.5H179.203H198.327H297.491H396.655V228.187V341.875V455.562H297.491H220.993V456.374ZM694.146 910.312H636.773H594.274H395.946V890.011V796.625V682.937V569.25H495.11H571.608V682.937H495.11V796.625H594.274V455.562H495.11V341.875H594.274H689.896H694.146V910.312ZM893.89 683.749H794.726V342.687H893.89V683.749ZM1289.84 347.559V455.562V682.937H1190.67V455.562H1091.51V569.25H992.345V455.562H915.848V341.875H1289.84V347.559Z",fill:t.computed_theme_color.topside_fontColor}})]),i("defs",[i("filter",{attrs:{id:"filter0_b_1416_933",x:"-25",y:"-25",width:"1439",height:"1417",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[i("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),i("feGaussianBlur",{attrs:{in:"BackgroundImage",stdDeviation:"12.5"}}),i("feComposite",{attrs:{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_1416_933"}}),i("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_1416_933",result:"shape"}})],1)])]),i("div",{staticClass:"museum-des-box-position"},[t._m(0),i("div",{staticClass:"museum-des-box"},[t._m(1),i("div",{staticClass:"des-box-item"}),i("div",{staticClass:"des-box-item"},[i("p",{staticClass:"zh-en-mark"},[i("span",{on:{click:t.change_language}},[t._v(t._s(t.$t("content_menu.menu.language")))])])])])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"museum-des-box"},[i("div",{staticClass:"des-box-item"},[i("p",[i("span",[t._v("Pingshan Art Museum")]),i("br"),t._v(" Huide Road, Pingshan District, Shenzhen, China "),i("br"),i("br"),i("span",[t._v("Park Annexe")]),i("br"),t._v(" Pingshan Central Park, Shenzhen, China ")])]),i("div",{staticClass:"des-box-item"},[i("p",[i("span",[t._v("Park Annexe")]),i("br"),t._v(" Pingshan Experimental School Stop"),i("br"),t._v(" 公交车：坪山实验学校站"),i("br"),t._v(" M478/ M393/M440/963/M497/915/M325"),i("br"),i("br"),i("span",[t._v("High-speed Rail")]),i("br"),t._v(" Pingshan Station 高铁：坪山站 ")])]),i("div",{staticClass:"des-box-item"},[i("p",[i("span",[t._v("Hours")]),i("br"),t._v(" Open from Tuesday to Sunday"),i("br"),t._v(" 逢周二至周日开放"),i("br"),t._v(" 9:00 - 17:00")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"des-box-item"},[i("div",{staticClass:"email"},[t._v("press@pingshanartmuseum.org")])])}],a={name:"",data:function(){return{language:"中文"}},methods:{change_language:function(){var t=this.$store.state.local_language;"CN"===t?this.$store.commit("change_language","EN"):this.$store.commit("change_language","CN"),"CN"==this.$i18n.locale?this.$i18n.locale="EN":this.$i18n.locale="CN",localStorage.setItem("languageSet",this.$store.state.local_language)}},computed:{computed_theme_color:function(){return this.$store.state.current_theme_color}}},r=a,s=(i("d134"),i("2877")),c=Object(s["a"])(r,n,o,!1,null,"79b47b7d",null);e["a"]=c.exports},"5adc":function(t,e,i){},"65f0":function(t,e,i){var n=i("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"785a":function(t,e,i){var n=i("cc12"),o=n("span").classList,a=o&&o.constructor&&o.constructor.prototype;t.exports=a===Object.prototype?void 0:a},"85b5":function(t,e,i){"use strict";i("28c4")},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,i){var n=i("0366"),o=i("e330"),a=i("44ad"),r=i("7b0b"),s=i("07fa"),c=i("65f0"),l=o([].push),h=function(t){var e=1==t,i=2==t,o=3==t,h=4==t,u=6==t,m=7==t,f=5==t||u;return function(d,p,b,g){for(var _,v,M=r(d),x=a(M),w=n(p,b),P=s(x),A=0,C=g||c,y=e?C(d,P):i||m?C(d,0):void 0;P>A;A++)if((f||A in x)&&(_=x[A],v=w(_,A,M),t))if(e)y[A]=v;else if(v)switch(t){case 3:return!0;case 5:return _;case 6:return A;case 2:l(y,_)}else switch(t){case 4:return!1;case 7:l(y,_)}return u?-1:o||h?h:y}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},d134:function(t,e,i){"use strict";i("5adc")},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f844:function(t,e,i){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);