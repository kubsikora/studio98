import{a as z,b as I}from"./use-dark.67d28e04.js";import{x as v,c as b,h as w,g as B,d as F,O as $,X as y,j as t,Q as a,F as k,S as C,U as q,V as r,r as j,W as f,a2 as p,R as h}from"./index.5720e4a4.js";import{a as x,Q as i,e as g}from"./QBtn.6b10c00c.js";import{Q as E}from"./QDialog.6cf6faf4.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import"./focusout.7584c55c.js";var n=v({name:"QCard",props:{...z,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:o}){const{proxy:{$q:d}}=B(),l=I(e,d),u=b(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>w(e.tag,{class:u.value},x(o.default))}}),s=v({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:o}){const d=b(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>w(e.tag,{class:d.value},x(o.default))}});const M=F({setup(){return{}}}),Q=e=>(C("data-v-757e1b60"),e=e(),q(),e),P=Q(()=>r("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSeV4kZsapvcyjLV51he7Fezl6X332D2EneCew0WM5ErbKM7Rw/viewform?embedded=true",width:"100%",height:"610",frameborder:"0",marginheight:"0",marginwidth:"0"},"\u0141aduj\u0119\u2026",-1)),L=Q(()=>r("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSeV4kZsapvcyjLV51he7Fezl6X332D2EneCew0WM5ErbKM7Rw/viewform?embedded=true",width:"100%",height:"510",frameborder:"0",marginheight:"0",marginwidth:"0"},"\u0141aduj\u0119\u2026",-1));function N(e,o,d,l,u,D){return $(),y(k,null,[t(n,{class:"card pc"},{default:a(()=>[P]),_:1}),t(n,{class:"card mobile"},{default:a(()=>[L]),_:1})],64)}var R=S(M,[["render",N],["__scopeId","data-v-757e1b60"]]);const W={components:{FormPopup:R},setup(){const e=j(!1);return{dialog:e,changeDialogmobile:()=>{e.value=!0}}}},c=e=>(C("data-v-6b0e5ddf"),e=e(),q(),e),X={class:"text-h4 center q-pa-xl text-white nazwa"},A={class:"q-gutter-md row justify-center pc"},K={style:{width:"27%"}},U=c(()=>r("a",{href:"tel:+48507732936"},"tel.: 507 732 936",-1)),Z=c(()=>r("a",{href:"mailto:r.sikora@studio98.com.pl "},"r.sikora@studio98.com.pl ",-1)),O={style:{width:"90%","margin-left":"5%"},class:"mobile"},T=c(()=>r("a",{href:"tel:+48507732936"},"tel.: 507 732 936",-1)),G=c(()=>r("a",{href:"mailto:r.sikora@studio98.com.pl "},"r.sikora@studio98.com.pl ",-1)),H=c(()=>r("div",{class:"down"},null,-1));function J(e,o,d,l,u,D){const _=f("center"),V=f("form-popup");return $(),y(k,null,[t(_,null,{default:a(()=>[r("p",X,p(e.$t("Menu.phone")),1)]),_:1}),r("div",A,[t(n,{class:"text"}),r("div",K,[t(n,{class:"contact"},{default:a(()=>[t(s,null,{default:a(()=>[t(i,{name:"phone",size:"50px",color:"primary"}),U]),_:1}),t(s,null,{default:a(()=>[t(i,{name:"email",size:"50px",color:"primary"}),Z]),_:1})]),_:1}),t(n,{class:"form"},{default:a(()=>[t(s,null,{default:a(()=>[h(p(e.$t("contact.form")),1)]),_:1}),t(s,null,{default:a(()=>[t(_,null,{default:a(()=>[t(g,{label:e.$t("contact.form_button"),class:"btn",onClick:o[0]||(o[0]=m=>l.changeDialogmobile())},null,8,["label"])]),_:1})]),_:1})]),_:1})])]),r("div",O,[t(n,{class:"contact"},{default:a(()=>[t(s,null,{default:a(()=>[t(i,{name:"phone",size:"50px",color:"primary"}),T]),_:1}),t(s,null,{default:a(()=>[t(i,{name:"email",size:"50px",color:"primary"}),G]),_:1})]),_:1}),t(n,{class:"form"},{default:a(()=>[t(s,null,{default:a(()=>[h(p(e.$t("contact.form")),1)]),_:1}),t(s,null,{default:a(()=>[t(_,null,{default:a(()=>[t(g,{label:e.$t("contact.form_button"),class:"btn",onClick:o[1]||(o[1]=m=>l.changeDialogmobile())},null,8,["label"])]),_:1})]),_:1})]),_:1})]),H,t(E,{modelValue:l.dialog,"onUpdate:modelValue":o[2]||(o[2]=m=>l.dialog=m)},{default:a(()=>[t(V)]),_:1},8,["modelValue"])],64)}var se=S(W,[["render",J],["__scopeId","data-v-6b0e5ddf"]]);export{se as default};