import{e as h}from"./QBtn.a78b4ecb.js";import{Q as n}from"./selection.3f2c7386.js";import{Q,a as d}from"./QCarousel.1925f271.js";import{Q as _,a as T}from"./QCard.403e02c6.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{d as F,O as r,X as c,j as t,Q as s,P as g,V as o,a2 as u,a3 as b,r as y,W as m,F as C,a4 as L}from"./index.57bdc89f.js";import{F as B}from"./FootLayout.5d0d60e2.js";import"./QBar.efeaebb0.js";const V=F({props:{text:{type:String,required:!0},color:{type:String,required:!0},align:{type:Boolean,required:!0},picurl:{type:String,required:!0},y:{type:String,default:"300px"},x:{type:String,default:"60%"}},setup(){return{}}}),I={class:"text-h5 center q-py-xl q-px-md"},P={key:1,class:"abs-r",style:{height:"100%",width:"49%"}},j={class:"text-h5 center q-py-xl q-px-md"};function M(e,l,p,a,v,x){return r(),c("div",{class:"card-section-conteiner q-my-lg",style:b({width:e.x})},[t(T,{class:"my-card text-white card",style:b({background:e.color,height:e.y})},{default:s(()=>[e.align?(r(),g(_,{key:0,class:"abs-r"},{default:s(()=>[o("p",I,u(e.$t(e.text)),1)]),_:1})):(r(),c("div",P,[t(n,{class:"img abs-r",src:e.picurl},null,8,["src"])])),e.align?(r(),g(_,{key:2,class:"abs-l contenerimg"},{default:s(()=>[t(n,{class:"img abs-r",src:e.picurl},null,8,["src"])]),_:1})):(r(),g(_,{key:3,class:"abs-l"},{default:s(()=>[o("p",j,u(e.$t(e.text)),1)]),_:1}))]),_:1},8,["style"])],4)}var $=f(V,[["render",M],["__scopeId","data-v-e47f9e16"]]);const N={components:{},props:{text:{type:String,required:!0}},setup(){const e=y("/img/country.png"),l=y("/img/country2.png");return{pic:e,pic2:l}}},z={class:"container"},D={align:"left",class:"card"},E={align:"left",class:"card",style:{"margin-right":"100px"}},O={class:"innercard"},U={class:"text-h5 center q-pb-xl q-px-xl",style:{"margin-top":"-120px"}};function W(e,l,p,a,v,x){return r(),c("div",z,[o("div",D,[t(n,{class:"img",src:a.pic,style:{"object-fit":"contain",width:"70%",height:"auto","margin-top":"-60px"}},null,8,["src"])]),o("div",E,[o("div",O,[o("p",U,u(e.$t(p.text)),1)])])])}var X=f(N,[["render",W],["__scopeId","data-v-4abe4af4"]]);const A={components:{FootLayout:B,CardTamplate:$,CountryTemplate:X},setup(){const e=y(1);return{slide:e,previousSlide:()=>{e.value==1?e.value=4:e.value=e.value-1},nextSlide:()=>{e.value==4?e.value=1:e.value=e.value+1},CardTamplate:$,cardindex:[{text:"Lower.t1",align:!0,color:"rgb(0, 180, 216)",picurl:"/img/gallery/lower1.png"},{text:"Lower.t2",align:!1,color:"rgb(0, 119, 182)",picurl:"/img/gallery/lower2.png"},{text:"Lower.t3",align:!0,color:"rgb(3, 4, 94)",picurl:"/img/gallery/lower3.png"}]}}},G={class:"text-h4 b center q-pa-xl",style:{"margin-top":"90px"}},H={class:"bg"};function J(e,l,p,a,v,x){const S=m("CountryTemplate"),w=m("CardTamplate"),k=m("FootLayout");return r(),c(C,null,[o("p",G,u(e.$t("welcome")),1),t(h,{round:"",flat:"",class:"carnavigation abs-l",icon:"arrow_back_ios",onClick:a.previousSlide},null,8,["onClick"]),t(h,{round:"",flat:"",class:"carnavigation abs-r",icon:"arrow_forward_ios",onClick:a.nextSlide},null,8,["onClick"]),t(Q,{autoplay:1e4,animated:"",modelValue:a.slide,"onUpdate:modelValue":l[0]||(l[0]=i=>a.slide=i),navigation:"",infinite:"",ref:"carousel",class:"carousel","control-color":"white","transition-prev":"slide-right","transition-next":"slide-left"},{default:s(()=>[t(d,{name:1},{default:s(()=>[t(n,{class:"car-pics",src:"/img/mainfoto.png"})]),_:1}),t(d,{name:2},{default:s(()=>[t(n,{class:"car-pics",src:"/img/pergol1.png"})]),_:1}),t(d,{name:3},{default:s(()=>[t(n,{class:"car-pics",src:"/img/pergol2.png"})]),_:1}),t(d,{name:4},{default:s(()=>[t(n,{class:"car-pics",src:"/img/pergol3.png"})]),_:1})]),_:1},8,["modelValue"]),t(S,{text:"FirstSen",class:"gradientbig"}),o("div",H,[(r(!0),c(C,null,L(a.cardindex,(i,q)=>(r(),c("div",{key:q},[t(w,{text:i.text,align:i.align,color:i.color,picurl:i.picurl},null,8,["text","align","color","picurl"])]))),128)),t(k)])],64)}var se=f(A,[["render",J],["__scopeId","data-v-48c954e1"]]);export{se as default};