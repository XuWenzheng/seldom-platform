import{l as B,bQ as z,d as L,L as R,u as v,V as j,p as G,a5 as T,j as b,N as P,bU as E,a6 as y}from"./index.b7222058.js";import{g as H}from"./Tag.0f7865c5.js";const A={fontWeightActive:"400"},M=e=>{const{fontSize:a,textColor3:o,textColor2:r,borderRadius:i,buttonColor2Hover:t,buttonColor2Pressed:l}=e;return Object.assign(Object.assign({},A),{fontSize:a,itemLineHeight:"1.25",itemTextColor:o,itemTextColorHover:r,itemTextColorPressed:r,itemTextColorActive:r,itemBorderRadius:i,itemColorHover:t,itemColorPressed:l,separatorColor:o})},O={name:"Breadcrumb",common:B,self:M},K=O,I={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},N=()=>I,V={name:"Space",self:N},W=V;let h;const U=()=>{if(!z)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},D=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Q=L({name:"Space",props:D,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:o}=R(e),r=v("Space","-space",void 0,W,e,a),i=j("Space",o,a);return{useGap:U(),rtlEnabled:i,mergedClsPrefix:a,margin:G(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[P("gap",t)]:l}}=r.value,{row:m,col:d}=E(l);return{horizontal:y(d),vertical:y(m)}})}},render(){const{vertical:e,align:a,inline:o,justify:r,itemStyle:i,margin:t,wrap:l,mergedClsPrefix:m,rtlEnabled:d,useGap:c,wrapItem:C,internalUseGap:S}=this,u=T(H(this));if(!u.length)return null;const x=`${t.horizontal}px`,g=`${t.horizontal/2}px`,w=`${t.vertical}px`,s=`${t.vertical/2}px`,p=u.length-1,f=r.startsWith("space-");return b("div",{role:"none",class:[`${m}-space`,d&&`${m}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!l||e?"nowrap":"wrap",marginTop:c||e?"":`-${s}`,marginBottom:c||e?"":`-${s}`,alignItems:a,gap:c?`${t.vertical}px ${t.horizontal}px`:""}},!C&&(c||S)?u:u.map(($,n)=>b("div",{role:"none",style:[i,{maxWidth:"100%"},c?"":e?{marginBottom:n!==p?w:""}:d?{marginLeft:f?r==="space-between"&&n===p?"":g:n!==p?x:"",marginRight:f?r==="space-between"&&n===0?"":g:"",paddingTop:s,paddingBottom:s}:{marginRight:f?r==="space-between"&&n===p?"":g:n!==p?x:"",marginLeft:f?r==="space-between"&&n===0?"":g:"",paddingTop:s,paddingBottom:s}]},$)))}});export{Q as N,K as b,I as c,M as s};