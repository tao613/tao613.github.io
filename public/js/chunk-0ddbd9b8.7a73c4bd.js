(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ddbd9b8"],{"0b42":function(t,e,i){var n=i("da84"),o=i("e8b5"),r=i("68ee"),a=i("861d"),s=i("b622"),c=s("species"),l=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,r(e)&&(e===l||o(e.prototype))?e=void 0:a(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?l:e}},"159b":function(t,e,i){var n=i("da84"),o=i("fdbc"),r=i("785a"),a=i("17c2"),s=i("9112"),c=function(t){if(t&&t.forEach!==a)try{s(t,"forEach",a)}catch(e){t.forEach=a}};for(var l in o)o[l]&&c(n[l]&&n[l].prototype);c(r)},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,o=i("a640"),r=o("forEach");t.exports=r?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4821:function(t,e,i){"use strict";i("f9ea")},"65f0":function(t,e,i){var n=i("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"785a":function(t,e,i){var n=i("cc12"),o=n("span").classList,r=o&&o.constructor&&o.constructor.prototype;t.exports=r===Object.prototype?void 0:r},a245:function(t,e,i){"use strict";i("ecf7")},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,i){var n=i("0366"),o=i("e330"),r=i("44ad"),a=i("7b0b"),s=i("07fa"),c=i("65f0"),l=o([].push),h=function(t){var e=1==t,i=2==t,o=3==t,h=4==t,f=6==t,u=7==t,d=5==t||f;return function(m,p,b,g){for(var _,v,M=a(m),A=r(M),w=n(p,b),P=s(A),x=0,y=g||c,k=e?y(m,P):i||u?y(m,0):void 0;P>x;x++)if((d||x in A)&&(_=A[x],v=w(_,x,M),t))if(e)k[x]=v;else if(v)switch(t){case 3:return!0;case 5:return _;case 6:return x;case 2:l(k,_)}else switch(t){case 4:return!1;case 7:l(k,_)}return f?-1:o||h?h:k}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},cc4d:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagePAMembers-index"},[i("p",{staticClass:"pagePAMembers-title"},[t._v(t._s(t.info_content.title))]),i("div",{staticClass:"pagePAMembers-info-box"},[i("PAM-PAMembers-info-box",{attrs:{prop_info_list:t.info_content.info_list}})],1)])},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"PAMembers-info-box"},t._l(t.info_list,(function(e,n){return i("div",{key:n,staticClass:"info-box-item"},[i("div",{staticClass:"box-item-title",on:{click:function(e){return t.open_close_box(n)}}},[i("span",[t._v(t._s(e.title))]),i("div",{staticClass:"item-arrow-head"},[i("div",{staticClass:"arrow-head-left",style:e.arrow_head_right},[t._v(t._s(e.arrow_head_right))]),i("div",{staticClass:"arrow-head-right",style:e.arrow_head_right})])]),i("div",{staticClass:"box-item-article PAMembers-box-item-article-click"},[i("p",{staticClass:"item-article-title"},[t._v(t._s(e.article.title))]),i("p",{staticClass:"item-article-content"},[t._v(t._s(e.article.content))])])])})),0)},a=[],s=(i("d3b7"),i("159b"),{name:"PAMembersInfoBox",props:{prop_info_list:Array},watch:{info_list:{handler:function(t,e){},deep:!0,immediate:!0}},data:function(){return{info_list:this.prop_info_list,info_list_height:[],clickdom_list:null,test:{transform:"rotate(-30deg)",color:"red"}}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.clickdom_list=document.getElementsByClassName("PAMembers-box-item-article-click");for(var e=0;e<this.clickdom_list.length;e++)this.info_list_height[e]=this.clickdom_list[e].offsetHeight,this.clickdom_list[e].style.height=0,this.info_list.forEach((function(e,i){t.info_list[i].arrow_head_right={},t.info_list[i].arrow_head_left={},t.$set(t.info_list[i],"arrow_head_right",{transform:"rotate(30deg)",color:"red"}),t.$set(t.info_list[i],"arrow_head_left",{transform:"rotate(30deg)",color:"red"})}))},open_close_box:function(t){0===this.clickdom_list[t].offsetHeight?(this.clickdom_list[t].style.height=this.info_list_height[t]+"px",this.info_list[t].arrow_head_right={transform:"rotate(-30deg)"},this.info_list[t].arrow_head_left={transform:"rotate(30deg)"}):(this.clickdom_list[t].style.height=0,this.info_list[t].arrow_head_right={transform:"rotate(150deg)"},this.info_list[t].arrow_head_left.transform="rotate(-150deg)")}}}),c=s,l=(i("a245"),i("2877")),h=Object(l["a"])(c,r,a,!1,null,"06ca7f90",null),f=h.exports,u={name:"pagePAMembers",components:{"PAM-PAMembers-info-box":f},data:function(){return{info_content:{title:"PAMembers",info_list:[{title:"PAM Friends",article:{title:"How to Join",content:"A natural person can fill in a PAM Membership Application Form by \n                showing ID card, to join the PAMembers and participate in the exhibition programmes \n                and workshops held by the museum. Children and teenagers under the age of 18 shall \n                register in the company of at least one of the parents.\n                Member Perks\n                Priority access to the latest information on exhibitions and other activities, potential invitation to the preview of new exhibitions.\u2028\n                Priority access to limited-seats workshops and other public activities.\u2028\n                One PAMember-exclusive interactive guided tour per month for each exhibition. Application/Reservation shall be submitted via PAMembers’personal centre page.\u2028\n                Comment and interact with the official media matrix of the Pingshan Museum of Art (WeChat, B-site, Weibo, Tik Tok and other social media platforms) for a chance to win a limited edition peripheral gift.\u2028\n                5% discount on non-alcoholic beverages at the Museum Cafe throughout the year"}},{title:"Member Perks",article:{title:"",content:"A natural person can fill in a PAM Membership Application Form by \n                showing ID card, to join the PAMembers and participate in the exhibition programmes \n                and workshops held by the museum. Children and teenagers under the age of 18 shall \n                register in the company of at least one of the parents.\n                Member Perks\n                Priority access to the latest information on exhibitions and other activities, potential invitation to the preview of new exhibitions.\u2028\n                Priority access to limited-seats workshops and other public activities.\u2028\n                One PAMember-exclusive interactive guided tour per month for each exhibition. Application/Reservation shall be submitted via PAMembers’personal centre page.\u2028\n                Comment and interact with the official media matrix of the Pingshan Museum of Art (WeChat, B-site, Weibo, Tik Tok and other social media platforms) for a chance to win a limited edition peripheral gift.\u2028\n                5% discount on non-alcoholic beverages at the Museum Cafe throughout the year"}},{title:"PAM Friends",article:{title:"",content:"A natural person can fill in a PAM Membership Application Form by \n                showing ID card, to join the PAMembers and participate in the exhibition programmes \n                and workshops held by the museum. Children and teenagers under the age of 18 shall \n                register in the company of at least one of the parents.\n                Member Perks\n                Priority access to the latest information on exhibitions and other activities, potential invitation to the preview of new exhibitions.\u2028\n                Priority access to limited-seats workshops and other public activities.\u2028\n                One PAMember-exclusive interactive guided tour per month for each exhibition. Application/Reservation shall be submitted via PAMembers’personal centre page.\u2028\n                Comment and interact with the official media matrix of the Pingshan Museum of Art (WeChat, B-site, Weibo, Tik Tok and other social media platforms) for a chance to win a limited edition peripheral gift.\u2028\n                5% discount on non-alcoholic beverages at the Museum Cafe throughout the year"}},{title:"Member Perks",article:{title:"",content:"A natural person can fill in a PAM Membership Application Form by \n                showing ID card, to join the PAMembers and participate in the exhibition programmes \n                and workshops held by the museum. Children and teenagers under the age of 18 shall \n                register in the company of at least one of the parents.\n                Member Perks\n                Priority access to the latest information on exhibitions and other activities, potential invitation to the preview of new exhibitions.\u2028\n                Priority access to limited-seats workshops and other public activities.\u2028\n                One PAMember-exclusive interactive guided tour per month for each exhibition. Application/Reservation shall be submitted via PAMembers’personal centre page.\u2028\n                Comment and interact with the official media matrix of the Pingshan Museum of Art (WeChat, B-site, Weibo, Tik Tok and other social media platforms) for a chance to win a limited edition peripheral gift.\u2028\n                5% discount on non-alcoholic beverages at the Museum Cafe throughout the year"}}]}}}},d=u,m=(i("4821"),Object(l["a"])(d,n,o,!1,null,"5381900b",null));e["default"]=m.exports},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ecf7:function(t,e,i){},f9ea:function(t,e,i){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);