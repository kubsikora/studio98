import{u as g,a as q}from"./use-dark.ff50d61e.js";import{x as m,c as f,h,g as x,W as y,O as C,X as S,j as t,Q as a,V as o,F as b,a2 as _,R as k,S as w,U as $}from"./index.298257a4.js";import{a as v,Q as p,e as B}from"./QBtn.fe2641b1.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";var l=m({name:"QCard",props:{...g,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:r}){const{proxy:{$q:s}}=x(),d=q(e,s),u=f(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:u.value},v(r.default))}}),n=m({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:r}){const s=f(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(e.tag,{class:s.value},v(r.default))}});const I={components:{},setup(){return{}}},c=e=>(w("data-v-29871444"),e=e(),$(),e),z={class:"text-h4 center q-pa-xl text-white",style:{"margin-top":"70px","margin-bottom":"50px"}},D={class:"q-gutter-md row justify-center"},V={style:{width:"27%"}},N=c(()=>o("a",{href:"tel:+48507732936"},"tel.: 507 732 936",-1)),P=c(()=>o("a",{href:"mailto:r.sikora@studio98.com.pl "},"r.sikora@studio98.com.pl ",-1)),j=c(()=>o("div",{class:"down"},null,-1));function F(e,r,s,d,u,E){const i=y("center");return C(),S(b,null,[t(i,null,{default:a(()=>[o("p",z,_(e.$t("Menu.phone")),1)]),_:1}),o("div",D,[t(l,{class:"text"}),o("div",V,[t(l,{class:"contact"},{default:a(()=>[t(n,null,{default:a(()=>[t(p,{name:"phone",size:"50px",color:"primary"}),N]),_:1}),t(n,null,{default:a(()=>[t(p,{name:"email",size:"50px",color:"primary"}),P]),_:1})]),_:1}),t(l,{class:"form"},{default:a(()=>[t(n,null,{default:a(()=>[k(_(e.$t("contact.form")),1)]),_:1}),t(n,null,{default:a(()=>[t(i,null,{default:a(()=>[t(B,{label:e.$t("contact.form_button"),class:"btn"},null,8,["label"])]),_:1})]),_:1})]),_:1})])]),j],64)}var U=Q(I,[["render",F],["__scopeId","data-v-29871444"]]);export{U as default};