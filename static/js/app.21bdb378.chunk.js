(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{504:function(e,t,r){"use strict";const a=r(506),n=r(507),o=r(508),s=r(509),l=Symbol("encodeFragmentIdentifier");function i(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}function u(e,t){return t.decode?n(e):e}function p(e){return Array.isArray(e)?e.sort():"object"===typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,a)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=r):a[e]=r};case"bracket":return(e,r,a)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],r):a[e]=[r]:a[e]=r};case"comma":case"separator":return(t,r,a)=>{const n="string"===typeof r&&r.includes(e.arrayFormatSeparator),o="string"===typeof r&&!n&&u(r,e).includes(e.arrayFormatSeparator);r=o?u(r,e):r;const s=n||o?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);a[t]=s};case"bracket-separator":return(t,r,a)=>{const n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n)return void(a[t]=r?u(r,e):r);const o=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==a[t]?a[t]=[].concat(a[t],o):a[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!==typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;for(const n of e.split("&")){if(""===n)continue;let[e,s]=o(t.decode?n.replace(/\+/g," "):n,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?s:u(s,t),r(u(e,t),s,a)}for(const n of Object.keys(a)){const e=a[n];if("object"===typeof e&&null!==e)for(const r of Object.keys(e))e[r]=y(e[r],t);else a[n]=y(e,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce(((e,t)=>{const r=a[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>{return t.skipNull&&(null===(a=e[r])||void 0===a)||t.skipEmptyString&&""===e[r];var a},a=function(e){switch(e.arrayFormat){case"index":return t=>(r,a)=>{const n=r.length;return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,[c(t,e),"[",n,"]"].join("")]:[...r,[c(t,e),"[",c(n,e),"]=",c(a,e)].join("")]};case"bracket":return t=>(r,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(a,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(a,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:(n=null===n?"":n,0===a.length?[[c(r,e),t,c(n,e)].join("")]:[[a,c(n,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,c(t,e)]:[...r,[c(t,e),"=",c(a,e)].join("")]}}(t),n={};for(const s of Object.keys(e))r(s)||(n[s]=e[s]);const o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const n=e[r];return void 0===n?"":null===n?c(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?c(r,t)+"[]":n.reduce(a(r),[]).join("&"):c(r,t)+"="+c(n,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,a]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(f(e),t)},t&&t.parseFragmentIdentifier&&a?{fragmentIdentifier:u(a,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);const a=d(e.url).split("?")[0]||"",n=t.extract(e.url),o=t.parse(n,{sort:!1}),s=Object.assign(o,e.query);let i=t.stringify(s,r);i&&(i=`?${i}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[l]?c(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${a}${i}${u}`},t.pick=(e,r,a)=>{a=Object.assign({parseFragmentIdentifier:!0,[l]:!1},a);const{url:n,query:o,fragmentIdentifier:i}=t.parseUrl(e,a);return t.stringifyUrl({url:n,query:s(o,r),fragmentIdentifier:i},a)},t.exclude=(e,r,a)=>{const n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,a)}},505:function(e,t,r){e.exports={wrapper:"auth-wall_wrapper__2MmQe"}},506:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},507:function(e,t,r){"use strict";var a="%[a-f0-9]{2}",n=new RegExp(a,"gi"),o=new RegExp("("+a+")+","gi");function s(e,t){try{return decodeURIComponent(e.join(""))}catch(n){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),a=e.slice(t);return Array.prototype.concat.call([],s(r),s(a))}function l(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=s(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=o.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var n=l(a[0]);n!==a[0]&&(r[a[0]]=n)}a=o.exec(e)}r["%C2"]="\ufffd";for(var s=Object.keys(r),i=0;i<s.length;i++){var c=s[i];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},508:function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},509:function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},a=Object.keys(e),n=Array.isArray(t),o=0;o<a.length;o++){var s=a[o],l=e[s];(n?-1!==t.indexOf(s):t(s,l,e))&&(r[s]=l)}return r}},510:function(e,t,r){e.exports={button:"context-select_button__1y8va",prefix:"context-select_prefix__3xDFu",value:"context-select_value__oltZj",tooltipwrap:"context-select_tooltipwrap__3Fqbe"}},511:function(e,t,r){e.exports={menu:"period-menu_menu__2CHPS"}},512:function(e,t,r){e.exports={container:"year-navigator_container__3XXd2",year:"year-navigator_year__14nbM"}},513:function(e,t,r){e.exports={button:"clear-all-button_button__mDEHm"}},514:function(e,t,r){e.exports={scrollbox:"org-unit-select_scrollbox__23k48"}},515:function(e,t,r){e.exports={bordered:"workflow-select-option_bordered__JBAIX",option:"workflow-select-option_option__1cqTS",title:"workflow-select-option_title__3zrtv",subtitle:"workflow-select-option_subtitle__3yrup"}},516:function(e,t,r){e.exports={message:"workflow-select_message__1jq5N"}},517:function(e,t,r){e.exports={container:"layout_container__Cp-96",top:"layout_top__2gcI9",content:"layout_content__10QOH",bottom:"layout_bottom__2toTd"}},518:function(e,t,r){"use strict";r.r(t);var a=r(6),n=r(0),o=r.n(n),s=r(5),l=r(505),i=r.n(l);const c=Object(n.createContext)({});var u=r(7);const p={me:{resource:"me",params:{fields:["id","authorities","organisationUnits"]}},dataApprovalWorkflows:{resource:"dataApprovalWorkflows",params:{paging:!1,fields:["id","displayName","dataApprovalLevels","periodType","dataSets[id,displayName]"]}}},d=({children:e})=>{const{data:t,loading:r,error:n}=Object(u.d)(p);if(r)return o.a.createElement(a.n,null,o.a.createElement(a.d,null,o.a.createElement(a.e,null)));if(n)throw n;const s={...t.me,...t.dataApprovalWorkflows};return o.a.createElement(c.Provider,{value:s},e)},f=()=>Object(n.useContext)(c),y=({children:e})=>(()=>{const{authorities:e}=f();return e.some((e=>"ALL"===e||"M_dhis-web-approval"===e))})()?e:o.a.createElement("div",{className:i.a.wrapper},o.a.createElement(a.u,{error:!0,title:s.a.t("Not authorized")},s.a.t("You don't have access to the Data Approval App. Contact a system administrator to request access."))),m=()=>o.a.createElement("pre",null,"BottomBar placeholder");var g=r(504);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var D,v=D||(D={});v.Pop="POP",v.Push="PUSH",v.Replace="REPLACE";var w=function(e){return e};function b(e){e.preventDefault(),e.returnValue=""}function $(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function E(){return Math.random().toString(36).substr(2,8)}function k(e){var t=e.pathname,r=e.search;return(void 0===t?"/":t)+(void 0===r?"":r)+(void 0===(e=e.hash)?"":e)}function N(e){var t={};if(e){var r=e.indexOf("#");0<=r&&(t.hash=e.substr(r),e=e.substr(0,r)),0<=(r=e.indexOf("?"))&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}const F=function(e){function t(){var e=N(l.location.hash.substr(1)),t=e.pathname,r=e.search;e=e.hash;var a=i.state||{};return[a.idx,w({pathname:void 0===t?"/":t,search:void 0===r?"":r,hash:void 0===e?"":e,state:a.usr||null,key:a.key||"default"})]}function r(){if(c)y.call(c),c=null;else{var e=D.Pop,r=t(),a=r[0];if(r=r[1],y.length){if(null!=a){var n=p-a;n&&(c={action:e,location:r,retry:function(){s(-1*n)}},s(n))}}else o(e)}}function a(e){var t=document.querySelector("base"),r="";return t&&t.getAttribute("href")&&(r=-1===(r=(t=l.location.href).indexOf("#"))?t:t.slice(0,r)),r+"#"+("string"===typeof e?e:k(e))}function n(e,t){return void 0===t&&(t=null),w(h({},d,{},"string"===typeof e?N(e):e,{state:t,key:E()}))}function o(e){u=e,e=t(),p=e[0],d=e[1],f.call({action:u,location:d})}function s(e){i.go(e)}void 0===e&&(e={});var l=void 0===(e=e.window)?document.defaultView:e,i=l.history,c=null;l.addEventListener("popstate",r),l.addEventListener("hashchange",(function(){k(t()[1])!==k(d)&&r()}));var u=D.Pop,p=(e=t())[0],d=e[1],f=$(),y=$();return null==p&&(p=0,i.replaceState(h({},i.state,{idx:p}),"")),{get action(){return u},get location(){return d},createHref:a,push:function e(t,r){var s=D.Push,c=n(t,r);if(!y.length||(y.call({action:s,location:c,retry:function(){e(t,r)}}),0)){var u=[{usr:c.state,key:c.key,idx:p+1},a(c)];c=u[0],u=u[1];try{i.pushState(c,"",u)}catch(d){l.location.assign(u)}o(s)}},replace:function e(t,r){var s=D.Replace,l=n(t,r);y.length&&(y.call({action:s,location:l,retry:function(){e(t,r)}}),1)||(l=[{usr:l.state,key:l.key,idx:p},a(l)],i.replaceState(l[0],"",l[1]),o(s))},go:s,back:function(){s(-1)},forward:function(){s(1)},listen:function(e){return f.push(e)},block:function(e){var t=y.push(e);return 1===y.length&&l.addEventListener("beforeunload",b),function(){t(),y.length||l.removeEventListener("beforeunload",b)}}}}(),S=()=>{const e=Object(g.parse)(F.location.search);return{wf:e.wf,pe:e.pe,ou:e.ou,ouDisplayName:e.ouDisplayName}},x=e=>`/#/?${Object(g.stringify)(e)}`,O=()=>{const e=(()=>{const[e,t]=Object(n.useState)(S);return Object(n.useEffect)((()=>F.listen((()=>{t(S())}))),[]),e})();return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Data workspace placeholder"),o.a.createElement("pre",null,JSON.stringify(e,null,4)))},_=()=>{throw new Error("Selection Context has not been initialized")},P=Object(n.createContext)({workflow:{},setWorkflow:_,period:{},setPeriod:_,orgUnit:{},setOrgUnit:_});var Y=r(510),j=r.n(Y);const C=({children:e,prefix:t,value:r,onClose:s,onOpen:l,disabled:i,open:c,requiredValuesMessage:u})=>{const p=Object(n.useRef)(),d=c?a.l:a.k,f=o.a.createElement("button",{ref:p,className:j.a.button,onClick:l,disabled:i},o.a.createElement("span",{className:j.a.prefix},t),!i&&o.a.createElement("span",{className:j.a.value},r),o.a.createElement(d,{color:i?a.y.grey600:void 0}));return o.a.createElement(o.a.Fragment,null,i?o.a.createElement(a.x,{content:u,placement:"bottom"},(({ref:e,onMouseOver:t,onMouseOut:r})=>o.a.createElement("div",{ref:e,onMouseOver:t,onMouseOut:r,className:j.a.tooltipwrap},f))):f,c&&o.a.createElement(a.w,{reference:p,arrow:!1,placement:"bottom-end",onClickOutside:s},e))},A=e=>[s.a.t("January"),s.a.t("February"),s.a.t("March"),s.a.t("April"),s.a.t("May"),s.a.t("June"),s.a.t("July"),s.a.t("August"),s.a.t("September"),s.a.t("October"),s.a.t("November"),s.a.t("December")][e],W=(e,t,r)=>a=>{let n=[];const o=parseInt(a.offset,10),l=a.filterFuturePeriods,i=a.reversePeriods,c=new Date(Date.now()).getFullYear()+o,u=((e,t)=>{const r=new Date(e,0,4),a=r.getDay(),n=r,o=a-t;return o>0?n.setDate(r.getDate()-o):o<0&&(n.setDate(r.getDate()-o),n.setDate(n.getDate()-7)),n})(c,t.startDay);let p=1;for(;u.getFullYear()<=c;){const r={};r.startDate=e(u),r.iso=`${c}${t.shortName}W${p}`,r.id=r.iso,u.setDate(u.getDate()+6),r.endDate=e(u);const a=p;if(r.displayName=`${s.a.t("Week {{weekNumber}}",{weekNumber:a})} - ${r.startDate} - ${r.endDate}`,u.getFullYear()>c&&u.getDate()>=4)break;n.push(r),u.setDate(u.getDate()+1),p+=1}return n=l?r(n):n,n=i?n.reverse():n,n},I=(e,t)=>r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,l=r.reversePeriods,i=new Date(Date.now()).getFullYear()+n,c=new Date(`01 Jan ${i}`),u=c.getDay();let p=1;for(u<=4?c.setDate(c.getDate()-(u-1)):c.setDate(c.getDate()+(8-u));c.getFullYear()<=i;){const t={};t.iso=`${i}BiW${p}`,t.id=t.iso,t.startDate=e(c),c.setDate(c.getDate()+13),t.endDate=e(c);const r=p;if(t.displayName=`${s.a.t("Bi-Week {{biWeekNumber}}",{biWeekNumber:r})} - ${t.startDate} - ${t.endDate}`,c.getFullYear()>i&&c.getDate()>=4)break;a.push(t),c.setDate(c.getDate()+1),p+=1}return a=o?t(a):a,a=l?a.reverse():a,a},U=(e,t)=>{const r=e=>{const t=e.getFullYear();let r=String(e.getMonth()+1);return r=r.length<2?`0${r}`:r,t+r};return a=>{let n=[];const o=parseInt(a.offset,10),s=a.filterFuturePeriods,l=a.reversePeriods,i=new Date(Date.now()).getFullYear()+o,c=new Date(`31 Dec ${i}`);for(;c.getFullYear()===i;){const t={};t.endDate=e(c),c.setDate(1),t.startDate=e(c);const a=A(c.getMonth());t.displayName=`${a} ${i}`,t.iso=r(c),t.id=t.iso,n.push(t),c.setDate(0)}return n=s?t(n):n,n=l?n:n.reverse(),n}},M=(e,t)=>r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,s=r.reversePeriods,l=new Date(Date.now()).getFullYear()+n,i=new Date(`31 Dec ${l}`);let c=6;for(;i.getFullYear()===l;){const t={};t.endDate=e(i),i.setDate(0),i.setDate(1),t.startDate=e(i);const r=A(i.getMonth()),n=A(i.getMonth()+1),o=i.getFullYear();t.displayName=`${r} - ${n} ${o}`,t.iso=`${l}0${c}B`,t.id=t.iso,a.push(t),i.setDate(0),c--}return a=o?t(a):a,a=s?a:a.reverse(),a},T=(e,t)=>r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,s=r.reversePeriods,l=new Date(Date.now()).getFullYear()+n,i=new Date(`31 Dec ${l}`);let c=4;for(;i.getFullYear()===l;){const t={};t.endDate=e(i),i.setDate(0),i.setDate(0),i.setDate(1),t.startDate=e(i);const r=A(i.getMonth()),n=A(i.getMonth()+2),o=i.getFullYear();t.displayName=`${r} - ${n} ${o}`,t.iso=`${l}Q${c}`,t.id=t.iso,a.push(t),i.setDate(0),c-=1}return a=o?t(a):a,a=s?a:a.reverse(),a},R=e=>t=>{let r=[];const a=parseInt(t.offset,10),n=t.filterFuturePeriods,o=t.reversePeriods,s=new Date(Date.now()).getFullYear()+a;let l={};return l.startDate=`${s}-01-01`,l.endDate=`${s}-06-30`,l.displayName=`${A(0)} - ${A(5)} ${s}`,l.iso=`${s}S1`,l.id=l.iso,r.push(l),l={},l.startDate=`${s}-07-01`,l.endDate=`${s}-12-31`,l.displayName=`${A(6)} - ${A(11)} ${s}`,l.iso=`${s}S2`,l.id=l.iso,r.push(l),r=n?e(r):r,r=o?r.reverse():r,r},L=e=>t=>{let r=[];const a=parseInt(t.offset,10),n=t.filterFuturePeriods,o=t.reversePeriods,s=new Date(Date.now()).getFullYear()+a;let l={};return l.startDate=`${s}-04-01`,l.endDate=`${s}-09-30`,l.displayName=`${A(3)} - ${A(8)} ${s}`,l.iso=`${s}AprilS1`,l.id=l.iso,r.push(l),l={},l.startDate=`${s}-10-01`,l.endDate=`${s+1}-03-31`,l.displayName=`${A(9)} ${s} - ${A(2)} ${s+1}`,l.iso=`${s}AprilS2`,l.id=l.iso,r.push(l),r=n?e(r):r,r=o?r.reverse():r,r},B=(e,t)=>r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,s=r.reversePeriods,l=new Date(Date.now()).getFullYear()+n,i=new Date(`31 Dec ${l}`);for(;l-i.getFullYear()<10;){const t={};t.endDate=e(i),i.setMonth(0,1),t.startDate=e(i);const r=i.getFullYear().toString();t.displayName=r,t.iso=i.getFullYear().toString(),t.id=t.iso.toString(),a.push(t),i.setDate(0)}return a=o?t(a):a,a=s?a:a.reverse(),a},J=(e,t)=>r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,s=r.reversePeriods,l=new Date(Date.now()).getFullYear()+n,i=new Date(`30 Sep ${l+1}`);for(let t=0;t<10;t++){const t={};t.endDate=e(i),i.setYear(i.getFullYear()-1),i.setDate(i.getDate()+1),t.startDate=e(i);const r=i.getFullYear(),n=i.getFullYear()+1;t.displayName=`${A(9)} ${r} - ${A(8)} ${n}`,t.id=`${i.getFullYear()}Oct`,a.push(t),i.setDate(i.getDate()-1)}return a=o?t(a):a,a=s?a:a.reverse(),a},q=(e,t)=>r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,s=r.reversePeriods,l=new Date(Date.now()).getFullYear()+n,i=new Date(`31 Oct ${l+1}`);for(let t=0;t<10;t++){const t={};t.endDate=e(i),i.setYear(i.getFullYear()-1),i.setDate(i.getDate()+1),t.startDate=e(i);const r=i.getFullYear(),n=i.getFullYear()+1;t.displayName=`${A(10)} ${r} - ${A(9)} ${n}`,t.id=`${i.getFullYear()}Nov`,a.push(t),i.setDate(i.getDate()-1)}return a=o?t(a):a,a=s?a:a.reverse(),a},Q=(e,t)=>r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,s=r.reversePeriods,l=new Date(Date.now()).getFullYear()+n,i=new Date(`30 Jun ${l+1}`);for(let t=0;t<10;t++){const t={};t.endDate=e(i),i.setYear(i.getFullYear()-1),i.setDate(i.getDate()+1),t.startDate=e(i);const r=i.getFullYear(),n=i.getFullYear()+1;t.displayName=`${A(6)} ${r} - ${A(5)} ${n}`,t.id=`${i.getFullYear()}July`,a.push(t),i.setDate(i.getDate()-1)}return a=o?t(a):a,a=s?a:a.reverse(),a},V=(e,t)=>r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,s=r.reversePeriods,l=new Date(Date.now()).getFullYear()+n,i=new Date(`31 Mar ${l+1}`);for(let t=0;t<10;t++){const t={};t.endDate=e(i),i.setYear(i.getFullYear()-1),i.setDate(i.getDate()+1),t.startDate=e(i);const r=i.getFullYear(),n=i.getFullYear()+1;t.displayName=`${A(3)} ${r} - ${A(2)} ${n}`,t.id=`${i.getFullYear()}April`,a.push(t),i.setDate(i.getDate()-1)}return a=o?t(a):a,a=s?a:a.reverse(),a},H=e=>{const t=e.getFullYear();let r=String(e.getMonth()+1),a=String(e.getDate());return r=r.length<2?`0${r}`:r,a=a.length<2?`0${a}`:a,`${t}-${r}-${a}`},z=e=>{const t=[],r=new Date(Date.now());for(let a=0;a<e.length;a++)new Date(e[a].startDate)<=r&&t.push(e[a]);return t},X=()=>{return[{type:"Daily",regex:/^([0-9]{4})([0-9]{2})([0-9]{2})$/,getPeriods:(e=H,t=z,r=>{let a=[];const n=parseInt(r.offset,10),o=r.filterFuturePeriods,s=r.reversePeriods,l=new Date(Date.now()).getFullYear()+n,i=new Date(`01 Jan ${l}`);for(;i.getFullYear()===l;){const t={};t.startDate=e(i),t.endDate=t.startDate,t.displayName=t.startDate,t.iso=t.startDate.replace(/-/g,""),t.id=t.iso,a.push(t),i.setDate(i.getDate()+1)}return a=o?t(a):a,a=s?a.reverse():a,a}),displayName:s.a.t("Daily")},{type:"Weekly",regex:/^([0-9]{4})()W([0-9]{1,2})$/,getPeriods:W(H,{shortName:"",startDay:1},z),displayName:s.a.t("Weekly")},{type:"WeeklyWednesday",regex:/^([0-9]{4})(Wed)W([0-9]{1,2})$/,getPeriods:W(H,{shortName:"Wed",startDay:3},z),displayName:s.a.t("Weekly (Start Wednesday)")},{type:"WeeklyThursday",regex:/^([0-9]{4})(Thu)W([0-9]{1,2})$/,getPeriods:W(H,{shortName:"Thu",startDay:4},z),displayName:s.a.t("Weekly (Start Thursday)")},{type:"WeeklySaturday",regex:/^([0-9]{4})(Sat)W([0-9]{1,2})$/,getPeriods:W(H,{shortName:"Sat",startDay:6},z),displayName:s.a.t("Weekly (Start Saturday)")},{type:"WeeklySunday",regex:/^([0-9]{4})(Sun)W([0-9]{1,2})$/,getPeriods:W(H,{shortName:"Sun",startDay:7},z),displayName:s.a.t("Weekly (Start Sunday)")},{type:"BiWeekly",regex:/^([0-9]{4})BiW([0-9]{1,2})$/,getPeriods:I(H,z),displayName:s.a.t("Bi-weekly")},{type:"Monthly",regex:/^([0-9]{4})([0-9]{2})$/,getPeriods:U(H,z),displayName:s.a.t("Monthly")},{type:"BiMonthly",regex:/^([0-9]{4})([0-9]{2})B$/,getPeriods:M(H,z),displayName:s.a.t("Bi-monthly")},{type:"Quarterly",regex:/^([0-9]{4})Q([1234])$/,getPeriods:T(H,z),displayName:s.a.t("Quarterly")},{type:"SixMonthly",regex:/^([0-9]{4})S([12])$/,getPeriods:R(z),displayName:s.a.t("Six-monthly")},{type:"SixMonthlyApril",regex:/^([0-9]{4})AprilS([12])$/,getPeriods:L(z),displayName:s.a.t("Six-monthly April")},{type:"Yearly",regex:/^([0-9]{4})$/,getPeriods:B(H,z),displayName:s.a.t("Yearly")},{type:"FinancialNov",regex:/^([0-9]{4})Nov$/,getPeriods:q(H,z),displayName:s.a.t("Financial year (Start November)")},{type:"FinancialOct",regex:/^([0-9]{4})Oct$/,getPeriods:J(H,z),displayName:s.a.t("Financial year (Start October)")},{type:"FinancialJuly",regex:/^([0-9]{4})July$/,getPeriods:Q(H,z),displayName:s.a.t("Financial year (Start July)")},{type:"FinancialApril",regex:/^([0-9]{4})April$/,getPeriods:V(H,z),displayName:s.a.t("Financial year (Start April)")}];var e,t},G=e=>e-new Date(Date.now()).getFullYear(),K=(e,t)=>{const r=(e=>X().find((t=>t.type===e)))(e),a=G(t);return r&&Number.isInteger(a)?r.getPeriods({offset:a}):void 0};var Z=r(511),ee=r.n(Z);const te=({periodType:e,year:t})=>{const{workflow:r,period:n,orgUnit:s,selectPeriod:l}=we(),i=K(e,t);return o.a.createElement(a.o,{dense:!0,className:ee.a.menu},i.map((e=>o.a.createElement(a.p,{active:e.id===n.id,key:e.id,href:x({wf:r.id,ou:s.path,pe:e.id}),label:e.displayName,onClick:()=>l(e)}))))};var re=r(512),ae=r.n(re);const ne=(new Date).getFullYear(),oe=({year:e,onYearChange:t})=>o.a.createElement("div",{className:ae.a.container},o.a.createElement(a.c,{disabled:1970===e,onClick:()=>t(e-1),icon:o.a.createElement(a.i,null)}),o.a.createElement("span",{className:ae.a.year},e),o.a.createElement(a.c,{disabled:e===ne,onClick:()=>t(e+1),icon:o.a.createElement(a.j,null)})),se="PERIOD",le=()=>{const{period:e,workflow:t,selectPeriod:r,openedSelect:a,setOpenedSelect:l}=we(),[i,c]=Object(n.useState)(e.year||ne),u=a===se,p=e.displayName||s.a.t("Choose a period");return Object(n.useEffect)((()=>{e.year&&c(e.year)}),[e]),o.a.createElement(C,{prefix:s.a.t("Period"),value:p,open:u,disabled:!t.id,onOpen:()=>l(se),onClose:()=>l(""),requiredValuesMessage:s.a.t("Choose a workflow first")},o.a.createElement(oe,{year:i,onYearChange:e=>{r({}),c(e)}}),o.a.createElement(te,{periodType:t.periodType,year:i}))},ie=e=>{const{wf:t,pe:r,ou:a,ouDisplayName:n}=S(),o=ce(e,t);return{workflow:o,period:ue(r,o),orgUnit:pe(a,n)}},ce=(e,t)=>t?e.find((e=>e.id===t))||{}:1===e.length?e[0]:{},ue=(e,t={})=>e&&t.id&&((e,t)=>{const r=t?X().filter((({type:e})=>t.some((t=>t===e)))):X();let a,n,o=0;for(;o<r.length&&!n;)a=r[o],n=e.match(a.regex),o++;if(!n)return;const s=parseInt(n[1]),l=G(s);return{...a.getPeriods({offset:l}).find((t=>t.id===e)),year:s,periodType:a}})(e,[t.periodType])||{},pe=(e,t)=>e&&t?{path:e,displayName:t}:{},de="SET_OPENED_SELECT",fe="CLEAR_ALL",ye="SELECT_WORKFLOW",me="SELECT_PERIOD",ge="SELECT_ORG_UNIT",he="SET_STATE_FROM_QUERY_PARAMS",De=(e,{type:t,payload:r})=>{switch(t){case de:return{...e,openedSelect:r.openedSelect};case fe:case ye:return{openedSelect:"",workflow:r.workflow,period:{},orgUnit:{}};case me:return{...e,openedSelect:r.period.id?"":e.openedSelect,period:r.period,orgUnit:{}};case ge:return{...e,openedSelect:"",orgUnit:r.orgUnit};case he:return{openedSelect:"",...ie(r.dataApprovalWorkflows)};default:return e}},ve=({children:e})=>{const{dataApprovalWorkflows:t}=f(),[{openedSelect:r,workflow:a,period:s,orgUnit:l},i]=Object(n.useReducer)(De,{openedSelect:"",...ie(t)}),c={workflow:a,period:s,orgUnit:l,openedSelect:r,clearAll:()=>i({type:fe,payload:{workflow:ce(t)}}),setOpenedSelect:e=>i({type:de,payload:{openedSelect:e}}),selectWorkflow:e=>i({type:ye,payload:{workflow:e}}),selectPeriod:e=>i({type:me,payload:{period:e}}),selectOrgUnit:e=>i({type:ge,payload:{orgUnit:e}})};return Object(n.useEffect)((()=>{(e=>{const t=Object(g.stringify)({wf:e.workflow.id,pe:e.period.id,ou:e.orgUnit.path,ouDisplayName:e.orgUnit.displayName}),r=t?`?${t}`:"";r!==F.location.search&&F.push({pathname:"/",search:r})})({workflow:a,period:s,orgUnit:l})}),[a,s,l]),Object(n.useEffect)((()=>{const e=()=>{i({type:he,payload:{dataApprovalWorkflows:t}})};return window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}}),[]),o.a.createElement(P.Provider,{value:c},e)},we=()=>Object(n.useContext)(P);var be=r(513),$e=r.n(be);const Ee=()=>{const{clearAll:e,period:t,orgUnit:r}=we();return t.id||r.path?o.a.createElement(a.c,{className:$e.a.button,secondary:!0,onClick:e},s.a.t("Clear selections")):null};var ke=r(514),Ne=r.n(ke);const Fe="ORG_UNIT",Se=()=>{const{organisationUnits:e}=f(),{orgUnit:t,selectOrgUnit:r,workflow:n,period:l,openedSelect:i,setOpenedSelect:c}=we(),u=i===Fe,p=t.displayName||s.a.t("Choose an organisation unit"),d=n.id?s.a.t("Choose a period first"):s.a.t("Choose a workflow and period first"),y=e.map((({id:e})=>e)),m=t.path?[t.path]:void 0;return o.a.createElement(C,{prefix:s.a.t("Organisation Unit"),value:p,open:u,disabled:!(n.id&&l.id),onOpen:()=>c(Fe),onClose:()=>c(""),requiredValuesMessage:d},o.a.createElement("div",{className:Ne.a.scrollbox},o.a.createElement(a.v,{roots:y,onChange:({displayName:e,id:t,path:a})=>{r({displayName:e,id:t,path:a})},initiallyExpanded:m,selected:m,singleSelection:!0})))};var xe=r(515),Oe=r.n(xe);const _e=({id:e,name:t,periodType:r,active:n,onClick:s})=>{const l=o.a.createElement("div",{className:Oe.a.option},o.a.createElement("span",{className:Oe.a.title},t),o.a.createElement("span",{className:Oe.a.subtitle},r||"UNAVAILABLE"));return o.a.createElement(a.p,{href:x({wf:e}),className:Oe.a.bordered,active:n,onClick:s,label:l})};var Pe=r(516),Ye=r.n(Pe);const je="WORKFLOW",Ce=()=>{const{dataApprovalWorkflows:e}=f(),{workflow:t,selectWorkflow:r,openedSelect:n,setOpenedSelect:l}=we(),i=n===je,c=t.displayName||s.a.t("Choose a workflow");return o.a.createElement(C,{prefix:s.a.t("Workflow"),value:c,open:i,onOpen:()=>l(je),onClose:()=>l("")},0===e.length?o.a.createElement("div",{className:Ye.a.message},s.a.t("No workflows found. None may exist, or you may not have access to any.")):o.a.createElement(a.o,null,e.map((e=>o.a.createElement(_e,{key:e.id,id:e.id,name:e.displayName,periodType:e.periodType,active:e.id===t.id,onClick:()=>r(e)})))))},Ae=()=>o.a.createElement(ve,null,o.a.createElement(Ce,null),o.a.createElement(le,null),o.a.createElement(Se,null),o.a.createElement(Ee,null));var We=r(517),Ie=r.n(We);function Ue(){return(Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const Me=({children:e,className:t})=>o.a.createElement("div",{className:t},e),Te=e=>o.a.createElement(Me,Ue({},e,{className:Ie.a.container})),Re=e=>o.a.createElement(Me,Ue({},e,{className:Ie.a.top})),Le=e=>o.a.createElement(Me,Ue({},e,{className:Ie.a.content})),Be=e=>o.a.createElement(Me,Ue({},e,{className:Ie.a.bottom}));t.default=()=>o.a.createElement(o.a.Fragment,null,o.a.createElement(a.g,{spacers:!0,colors:!0,theme:!0}),o.a.createElement(d,null,o.a.createElement(y,null,o.a.createElement(Te,null,o.a.createElement(Re,null,o.a.createElement(Ae,null)),o.a.createElement(Le,null,o.a.createElement(O,null)),o.a.createElement(Be,null,o.a.createElement(m,null))))))}}]);
//# sourceMappingURL=app.21bdb378.chunk.js.map