(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{516:function(e,t,a){e.exports={wrapper:"auth-wall_wrapper__2MmQe"}},517:function(e,t,a){e.exports={button:"clear-all-button_button__mDEHm"}},518:function(e,t,a){e.exports={button:"context-select_button__1y8va",prefix:"context-select_prefix__3xDFu",value:"context-select_value__oltZj"}},519:function(e,t,a){e.exports={bordered:"workflow-select-option_bordered__JBAIX",option:"workflow-select-option_option__1cqTS",title:"workflow-select-option_title__3zrtv",subtitle:"workflow-select-option_subtitle__3yrup"}},520:function(e,t,a){e.exports={message:"workflow-select_message__1jq5N"}},521:function(e,t,a){e.exports={container:"layout_container__Cp-96",top:"layout_top__2gcI9",content:"layout_content__10QOH",bottom:"layout_bottom__2toTd"}},522:function(e,t,a){"use strict";a.r(t);var l=a(6),n=a(0),o=a.n(n),r=a(511),c=a(4),s=a(516),i=a.n(s);const p=Object(n.createContext)({});var u=a(7);const m={me:{resource:"me",params:{fields:["id","authorities","programs","dataSets","userGroups","organisationUnits","dataViewOrganisationUnits"]}}},d={dataApprovalWorkflows:{resource:"users",id:({id:e})=>`${e}/dataApprovalWorkflows`}},E=({children:e})=>{const{data:t,loading:a,error:n,refetch:r,called:c}=Object(u.d)(d,{lazy:!0}),{data:s,loading:i,error:E}=Object(u.d)(m,{onComplete:({me:{id:e}})=>r({id:e})}),b=!c||a||i,f=!b&&(n||E);if(b)return o.a.createElement(l.l,null,o.a.createElement(l.d,null,o.a.createElement(l.e,null)));if(f)throw f;return o.a.createElement(p.Provider,{value:{...s.me,...t.dataApprovalWorkflows}},e)},b=()=>Object(n.useContext)(p),f=({children:e})=>(()=>{const{authorities:e}=b();return e.some((e=>"ALL"===e||"M_dhis-web-approval"===e))})()?e:o.a.createElement("div",{className:i.a.wrapper},o.a.createElement(l.s,{error:!0,title:c.a.t("Not authorized")},c.a.t("You don't have access to the Data Approval App. Contact a system administrator to request access."))),w=()=>o.a.createElement("pre",null,"BottomBar placeholder"),_=()=>o.a.createElement("pre",null,"DataWorkspace placeholder"),v=()=>{},h=Object(n.createContext)({workflow:{},setWorkflow:v,period:{},setPeriod:v,orgUnit:{},setOrgUnit:v}),O=({children:e})=>{const[t,a]=Object(r.c)({wf:r.b,pe:r.b,ou:r.b}),{dataApprovalWorkflows:l}=b(),[c,s]=Object(n.useState)(""),[i,p]=Object(n.useState)((()=>l.find((({id:e})=>e===t.wf))||{})),[u,m]=Object(n.useState)((()=>{return t.pe?{code:e=t.pe,name:e}:{};var e})),[d,E]=Object(n.useState)(t.ou?{id:t.ou}:{});Object(n.useEffect)((()=>{a({wf:i.id,pe:u.code,ou:d.id})}),[i,u,d]);const f={workflow:i,period:u,orgUnit:d,openedSelect:c,setOpenedSelect:s,clearAll:()=>{s(""),p({}),m({}),E({})},selectWorkflow:e=>{s(""),p(e),m({}),E({})},selectPeriod:e=>{s(""),m(e),E({})},selectOrgUnit:e=>{s(""),E(e)}};return o.a.createElement(h.Provider,{value:f},e)},k=()=>Object(n.useContext)(h);var g=a(517),C=a.n(g);const N=()=>{const{clearAll:e}=k();return o.a.createElement(l.c,{className:C.a.button,secondary:!0,onClick:e},c.a.t("Clear selections"))};var y=a(518),j=a.n(y);const x=({children:e,label:t,value:a,onClose:r,onOpen:c,disabled:s,open:i})=>{const p=Object(n.useRef)(),u=i?l.j:l.i;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{ref:p,className:j.a.button,onClick:c,disabled:s},o.a.createElement("span",{className:j.a.prefix},t),o.a.createElement("span",{className:j.a.value},a),o.a.createElement(u,{color:s?l.u.grey600:void 0})),i&&o.a.createElement(l.t,{reference:p,arrow:!1,placement:"bottom-start",onClickOutside:r},e))},S="ORG_UNIT",A=()=>{const{orgUnit:e,workflow:t,period:a,openedSelect:l,setOpenedSelect:n}=k(),r=l===S,s=e.name||c.a.t("Choose an organisation unit");return o.a.createElement(x,{label:c.a.t("Organisation Unit"),value:s,open:r,disabled:!(t.id&&a.code),onOpen:()=>n(S),onClose:()=>n("")},o.a.createElement("pre",null,"Org Unit picker placeholder"))},W="PERIOD",U=()=>{const{period:e,workflow:t,selectPeriod:a,openedSelect:l,setOpenedSelect:n}=k(),r=l===W,s=e.name||c.a.t("Choose a period");return o.a.createElement(x,{label:c.a.t("Period"),value:s,open:r,disabled:!t.id,onOpen:()=>n(W),onClose:()=>n("")},o.a.createElement("pre",null,"Period picker placeholder ",o.a.createElement("br",null),o.a.createElement("button",{onClick:()=>a({code:"20210404",name:"04-04-2020"})},"Set period to sth")))};var P=a(519),T=a.n(P);const D=({name:e,periodType:t,active:a,onClick:n})=>{const r=o.a.createElement("div",{className:T.a.option},o.a.createElement("span",{className:T.a.title},e),o.a.createElement("span",{className:T.a.subtitle},t||"UNAVAILABLE"));return o.a.createElement(l.n,{className:T.a.bordered,active:a,onClick:n,label:r})};var I=a(520),L=a.n(I);const B="WORKFLOW",R=()=>{const{dataApprovalWorkflows:e}=b(),{workflow:t,selectWorkflow:a,openedSelect:n,setOpenedSelect:r}=k(),s=n===B,i=t.name||c.a.t("Choose a workflow");return o.a.createElement(x,{label:c.a.t("Workflow"),value:i,open:s,onOpen:()=>r(B),onClose:()=>r("")},0===e.length?o.a.createElement("div",{className:L.a.message},c.a.t("No workflows found. None may exist or you may not have access to any.")):o.a.createElement(l.m,null,e.map((e=>o.a.createElement(D,{key:e.id,name:e.name,periodType:e.periodType,active:e.id===t.id,onClick:()=>a(e)})))))},q=()=>o.a.createElement(O,null,o.a.createElement(R,null),o.a.createElement(U,null),o.a.createElement(A,null),o.a.createElement(N,null));var z=a(521),F=a.n(z);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const G=({children:e,className:t})=>o.a.createElement("div",{className:t},e),H=e=>o.a.createElement(G,J({},e,{className:F.a.container})),M=e=>o.a.createElement(G,J({},e,{className:F.a.top})),Q=e=>o.a.createElement(G,J({},e,{className:F.a.content})),V=e=>o.a.createElement(G,J({},e,{className:F.a.bottom}));t.default=()=>o.a.createElement(r.a,null,o.a.createElement(l.g,{spacers:!0,colors:!0,theme:!0}),o.a.createElement(E,null,o.a.createElement(f,null,o.a.createElement(H,null,o.a.createElement(M,null,o.a.createElement(q,null)),o.a.createElement(Q,null,o.a.createElement(_,null)),o.a.createElement(V,null,o.a.createElement(w,null))))))}}]);
//# sourceMappingURL=app.5e04cf8a.chunk.js.map