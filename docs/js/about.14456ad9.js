"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[443],{5125:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var s=function(){var t=this,n=t._self._c;return n("div",{staticClass:"about"},[n("div",[n("b-tabs",{attrs:{card:""},scopedSlots:t._u([{key:"tabs-end",fn:function(){return[n("b-nav-item",{attrs:{role:"presentation",href:"#"},on:{click:function(n){return n.preventDefault(),t.newTab.apply(null,arguments)}}},[n("b",[t._v("+")])])]},proxy:!0},{key:"empty",fn:function(){return[n("div",{staticClass:"text-center text-muted"},[t._v(" There are no open tabs"),n("br"),t._v(" Open a new tab using the "),n("b",[t._v("+")]),t._v(" button above. ")])]},proxy:!0}])},t._l(t.tabs,(function(e){return n("b-tab",{key:"dyn-tab-"+e,scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Tab "+t._s(e)+" "),n("b-button",{staticClass:"float-right btn-sem-borda",on:{click:function(n){return t.closeTab(e)}}},[n("font-awesome-icon",{staticClass:"pl-1",attrs:{icon:["fas","xmark"]}})],1)]},proxy:!0}],null,!0)},[t._v(" Tab contents "+t._s(e)+" "),n("b-button",{staticClass:"float-right",attrs:{size:"sm",variant:"danger"},on:{click:function(n){return t.closeTab(e)}}},[t._v(" Close tab ")])],1)})),1)],1),t.readme?n("div",{staticClass:"p-3",domProps:{innerHTML:t._s(t.readme)}}):t._e()])},a=[],r=e(9809),o=e(8464),i={mixins:[r.H],components:{Perfil:o.Z},data(){return{tabs:[],tabCounter:0}},methods:{closeTab(t){for(let n=0;n<this.tabs.length;n++)this.tabs[n]===t&&this.tabs.splice(n,1)},newTab(){this.tabs.push(this.tabCounter++)}}},l=i,u=e(1001),b=(0,u.Z)(l,s,a,!1,null,null,null),c=b.exports}}]);