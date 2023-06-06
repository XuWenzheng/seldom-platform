import{P as B}from"./project.4663e3ef.js";import{d as U,r as $,af as T,o as i,bp as E,bt as t,bx as e,c as b,bA as g,br as k,b2 as a,a7 as V,a as O,F as P,c0 as S,bV as j,bW as M,by as D,bR as W}from"./index.b7222058.js";import{u as z,_ as G,b as H,d as J}from"./HttpCommon.3165052d.js";import{_ as K}from"./Input.e02c91bc.js";import{_ as Q}from"./Select.3b49b3e4.js";import{N as R}from"./Space.d7fc70c6.js";import{C as X}from"./CloudOutline.b1d6b679.js";import{_ as Y,a as Z}from"./BreadcrumbItem.d88a2c55.js";import{l as ee}from"./Tag.0f7865c5.js";import{_ as te,a as ue}from"./DescriptionsItem.b94e9705.js";import"./light.75d41d3d.js";const ne={class:"env-form"},oe={class:"dialog-footer"},se=a("\u53D6\u6D88"),le=a("\u4FDD\u5B58"),ae=U({__name:"EnvForm",props:{envId:Number},emits:["cancel"],setup(N,{emit:F}){const f=N,A=[{label:"http",value:"http"},{label:"web",value:"web"}],o=[{label:"chrome",value:"chrome"},{label:"edge",value:"edge"},{label:"firefox",value:"firefox"}],w=$(null),n=$({id:0,name:"",test_type:"http",base_url:null,browser:null,env:null}),y={name:{required:!0,trigger:["input"],message:"\u8BF7\u8F93\u5165\u73AF\u5883\u540D\u79F0"},test_type:{required:!0,trigger:["input","blur"],message:"\u8BF7\u9009\u62E9\u6D4B\u8BD5\u7C7B\u578B"},browser:{required:!0,trigger:["input","blur"],message:"\u8BF7\u9009\u62E9\u6D4F\u89C8\u5668\u540D\u79F0"}},m=z(),x=async()=>{const d=f.envId+"";B.getEnv(d).then(u=>{u.success===!0?n.value=u.result:m.error(u.error.message)})};T(()=>{f.envId===0||x()});const c=()=>{var d;(d=w.value)==null||d.validate(u=>{if(u)return!1;if(f.envId===0)B.createEnv(n.value).then(_=>{_.success===!0?(m.success("\u521B\u5EFA\u6210\u529F\uFF01"),p()):m.error("\u521B\u5EFA\u5931\u8D25\uFF01")});else{const _=f.envId+"";B.updateEnv(_,n.value).then(r=>{r.success===!0?(m.success("\u66F4\u65B0\u6210\u529F\uFF01"),p()):m.error("\u66F4\u65B0\u5931\u8D25\uFF01")})}})},p=()=>{F("cancel",{})};return(d,u)=>{const _=K,r=G,C=Q,v=V,I=R,h=H;return i(),E("div",ne,[t(h,{ref_key:"formRef",ref:w,model:n.value,rules:y,"label-placement":"left","label-width":"auto"},{default:e(()=>[t(r,{label:"\u540D\u79F0",path:"name"},{default:e(()=>[t(_,{value:n.value.name,"onUpdate:value":u[0]||(u[0]=l=>n.value.name=l),placeholder:"\u73AF\u5883\u540D\u79F0",clearable:""},null,8,["value"])]),_:1}),t(r,{label:"\u7C7B\u578B",path:"test_type"},{default:e(()=>[t(C,{value:n.value.test_type,"onUpdate:value":u[1]||(u[1]=l=>n.value.test_type=l),placeholder:"\u6D4B\u8BD5\u7C7B\u578B",options:A},null,8,["value"])]),_:1}),t(r,{label:"env",path:"env"},{default:e(()=>[t(_,{value:n.value.env,"onUpdate:value":u[2]||(u[2]=l=>n.value.env=l),placeholder:"\u73AF\u5883\u53D8\u91CF\u540D",clearable:""},null,8,["value"])]),_:1}),n.value.test_type==="http"?(i(),b(r,{key:0,label:"base_url",path:"base-url"},{default:e(()=>[t(_,{value:n.value.base_url,"onUpdate:value":u[3]||(u[3]=l=>n.value.base_url=l),placeholder:"\u57FA\u7840URL",clearable:""},null,8,["value"])]),_:1})):g("",!0),n.value.test_type==="web"?(i(),b(r,{key:1,label:"browser",path:"browser"},{default:e(()=>[t(C,{value:n.value.browser,"onUpdate:value":u[4]||(u[4]=l=>n.value.browser=l),placeholder:"\u6D4F\u89C8\u5668\u540D\u79F0",options:o},null,8,["value"])]),_:1})):g("",!0),k("div",oe,[t(I,null,{default:e(()=>[t(v,{onClick:u[5]||(u[5]=l=>p())},{default:e(()=>[se]),_:1}),t(v,{type:"primary",onClick:u[6]||(u[6]=l=>c())},{default:e(()=>[le]),_:1})]),_:1})])]),_:1},8,["model"])])}}}),re={class:"body"},_e={class:"pageheader"},ce=k("span",null,"\u73AF\u5883\u7BA1\u7406",-1),ie=a("\u9996\u9875"),de=a("\u914D\u7F6E\u7BA1\u7406"),pe=a("\u73AF\u5883\u7BA1\u7406"),me={class:"filter-line"},ve=a(" \u521B\u5EFA "),fe=a(" \u7F16\u8F91 "),be=a(" \u5220\u9664 "),xe=U({__name:"Env",setup(N){const F=z(),f=J(),A=$(),o=O({loading:!1,showDailog:!1,modalType:0,envData:[],envId:0}),w=()=>{o.modalType=1,o.envId=0,o.showDailog=!0},n=c=>{o.modalType=0,o.envId=c,o.showDailog=!0},y=async()=>{const c=await B.getEnvs();c.success===!0?o.envData=c.result:F.error(c.error.message)},m=c=>{f.warning({title:"\u8B66\u544A",content:"\u4F60\u786E\u5B9A\u5220\u9664\u73AF\u5883\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{B.deleteEnv(c.toString()).then(p=>{p.success===!0?(F.success("\u5220\u9664\u6210\u529F\uFF01"),y()):F.error("\u5220\u9664\u5931\u8D25")})},onNegativeClick:()=>{console.log("\u53D6\u6D88\u5220\u9664")}})},x=()=>{o.showDailog=!1,y()};return T(()=>{y()}),(c,p)=>{const d=Y,u=Z,_=R,r=V,C=ee,v=te,I=ue,h=j,l=M;return i(),E("div",re,[k("div",_e,[t(_,{justify:"space-between",class:"breadcrumb-navigation"},{default:e(()=>[ce,t(u,{separator:">"},{default:e(()=>[t(d,null,{default:e(()=>[ie]),_:1}),t(d,null,{default:e(()=>[de]),_:1}),t(d,null,{default:e(()=>[pe]),_:1})]),_:1})]),_:1})]),t(h,{class:"main-card"},{default:e(()=>[k("div",me,[t(r,{type:"primary",onClick:w},{default:e(()=>[ve]),_:1})]),t(_,null,{default:e(()=>[(i(!0),E(P,null,S(o.envData,(s,q)=>(i(),E("div",{key:q},[t(h,{title:s.name,class:"card-style","content-style":"padding: 24px; height:50%;",hoverable:""},{header:e(()=>[a(D(s.name),1)]),"header-extra":e(()=>[t(r,{circle:"",size:"small"},{icon:e(()=>[t(W(X))]),_:1})]),action:e(()=>[t(_,null,{default:e(()=>[t(r,{type:"info",size:"small",secondary:"",onClick:L=>n(s.id)},{default:e(()=>[fe]),_:2},1032,["onClick"]),t(r,{type:"error",size:"small",secondary:"",onClick:L=>m(s.id)},{default:e(()=>[be]),_:2},1032,["onClick"])]),_:2},1024)]),default:e(()=>[t(I,{id:"thing-desc","label-placement":"left",column:1},{default:e(()=>[s.test_type?(i(),b(v,{key:0,label:"\u7C7B\u578B"},{default:e(()=>[t(C,{type:"success",size:"small"},{default:e(()=>[a(D(s.test_type),1)]),_:2},1024)]),_:2},1024)):g("",!0),s.base_url?(i(),b(v,{key:1,label:"base_url"},{default:e(()=>[a(D(s.base_url),1)]),_:2},1024)):g("",!0),s.browser?(i(),b(v,{key:2,label:"browser"},{default:e(()=>[a(D(s.browser),1)]),_:2},1024)):g("",!0),s.env?(i(),b(v,{key:3,label:"env"},{default:e(()=>[a(D(s.env),1)]),_:2},1024)):g("",!0)]),_:2},1024)]),_:2},1032,["title"])]))),128))]),_:1})]),_:1}),t(l,{show:o.showDailog,"onUpdate:show":p[0]||(p[0]=s=>o.showDailog=s)},{default:e(()=>[t(h,{style:{width:"600px"},title:o.modalType?"\u65B0\u5EFA\u73AF\u5883":"\u7F16\u8F91\u73AF\u5883",bordered:!1,role:"dialog","aria-modal":"true"},{default:e(()=>[t(ae,{ref_key:"form",ref:A,envId:o.envId,onCancel:x},null,8,["envId"])]),_:1},8,["title"])]),_:1},8,["show"])])}}});export{xe as default};