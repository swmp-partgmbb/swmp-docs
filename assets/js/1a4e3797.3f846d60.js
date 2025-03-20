"use strict";(self.webpackChunkrag_chat_bot_docs=self.webpackChunkrag_chat_bot_docs||[]).push([[2138],{5846:(e,t,r)=>{r.d(t,{W:()=>u});var s=r(6540),a=r(4586);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},1283:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var s=r(6540),a=r(4586),n=r(5444),c=r(5260),l=r(8774),o=r(1312),u=r(5846),i=r(4164),h=r(6347),d=r(2303),m=r(4081);const g=function(){const e=(0,d.A)(),t=(0,h.W6)(),r=(0,h.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(m.Hg)&&m.Hg.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var p=r(9153),f=r(9913),x=r(6841),y=r(3810),j=r(7674),S=r(2849),A=r(4471);const C="searchContextInput_mXoe",w="searchQueryInput_CFBF",v="searchResultItem_U687",_="searchResultItemPath_uIbk",b="searchResultItemSummary_oZHr",P="searchQueryColumn_q7nx",F="searchContextColumn_oWAF";var R=r(3385),T=r(4848);function $(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.A)(),{selectMessage:r}=(0,u.W)(),{searchValue:n,searchContext:l,searchVersion:h,updateSearchPath:d,updateSearchContext:f}=g(),[x,y]=(0,s.useState)(n),[j,A]=(0,s.useState)(),v=`${e}${h}`,_=(0,s.useMemo)((()=>x?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:x}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[x]);(0,s.useEffect)((()=>{d(x),x?(async()=>{const e=await(0,p.w)(v,l,x,100);A(e)})():A(void 0)}),[x,v,l]);const b=(0,s.useCallback)((e=>{y(e.target.value)}),[]);(0,s.useEffect)((()=>{n&&n!==x&&y(n)}),[n]);const[$,k]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{!async function(){(!Array.isArray(m.Hg)||l||m.dz)&&await(0,p.k)(v,l),k(!0)}()}),[l,v]),(0,T.jsxs)(s.Fragment,{children:[(0,T.jsxs)(c.A,{children:[(0,T.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,T.jsx)("title",{children:_})]}),(0,T.jsxs)("div",{className:"container margin-vert--lg",children:[(0,T.jsx)("h1",{children:_}),(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("div",{className:(0,i.A)("col",{[P]:Array.isArray(m.Hg),"col--9":Array.isArray(m.Hg),"col--12":!Array.isArray(m.Hg)}),children:(0,T.jsx)("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:b,value:x,autoComplete:"off",autoFocus:!0})}),Array.isArray(m.Hg)?(0,T.jsx)("div",{className:(0,i.A)("col","col--3","padding-left--none",F),children:(0,T.jsxs)("select",{name:"search-context",className:C,id:"context-selector",value:l,onChange:e=>f(e.target.value),children:[m.dz&&(0,T.jsx)("option",{value:"",children:(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),m.Hg.map((e=>{const{label:r,path:s}=(0,R.p)(e,t);return(0,T.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!$&&x&&(0,T.jsx)("div",{children:(0,T.jsx)(S.A,{})}),j&&(j.length>0?(0,T.jsx)("p",{children:r(j.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:j.length}))}):(0,T.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,T.jsx)("section",{children:j&&j.map((e=>(0,T.jsx)(H,{searchResult:e},e.document.i)))})]})]})}function H(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=r===f.i.Title,o=r===f.i.Keywords,u=r===f.i.Description,i=u||o,h=c||i,d=r===f.i.Content,g=(c?t.b:s.b).slice(),p=d||i?t.s:t.t;h||g.push(s.t);let S="";if(m.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);S=`?${e.toString()}`}return(0,T.jsxs)("article",{className:v,children:[(0,T.jsx)("h2",{children:(0,T.jsx)(l.A,{to:t.u+S+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,x.Z)(p,a):(0,y.C)(p,(0,j.g)(n,"t"),a,100)}})}),g.length>0&&(0,T.jsx)("p",{className:_,children:(0,A.$)(g)}),(d||u)&&(0,T.jsx)("p",{className:b,dangerouslySetInnerHTML:{__html:(0,y.C)(t.t,(0,j.g)(n,"t"),a,100)}})]})}const k=function(){return(0,T.jsx)(n.A,{children:(0,T.jsx)($,{})})}}}]);