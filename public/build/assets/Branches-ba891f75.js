import{r as m,D as _,w as c,a as d,b as u,d as a,u as p,Z as h,e as s,f as t,t as f,m as b,z as v,F as B}from"./app-33d33f3a.js";import{_ as w}from"./GoBackNavLink-e82f2129.js";import{_ as $}from"./DataTable-4a41f1e8.js";import{_ as y}from"./SearchBar-cb11df04.js";import{_ as D}from"./FlexButton-8486cc06.js";import{_ as g}from"./OrgTabs-2897285c.js";import{d as S}from"./index-6a2a6a8b.js";import{_ as k}from"./Card-b3e23809.js";import{P as x}from"./PlusIcon-5bf44168.js";import"./_plugin-vue_export-helper-c27b6911.js";import"/public/build/assets/logoCVMebel.jpg";import"./Paginator-ebfe7b38.js";import"./index-7c2e6872.js";const A={class:"py-8"},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},N={class:"card-header !mb-4"},P={class:"flex justify-between items-center mb-4 gap-4"},V=["placeholder"],H={__name:"Branches",props:{branches:Object},setup(n){const r=m(""),l=S(()=>{_.visit(route("branches.index",{term:r.value}),{preserveState:!0,preserveScroll:!0})},500);return c(r,l),(e,o)=>(d(),u(B,null,[a(p(h),{title:e.__("Branches")},null,8,["title"]),a(w,null,{tabs:s(()=>[a(g)]),default:s(()=>[t("div",A,[t("div",E,[a(k,{class:"!mt-0"},{default:s(()=>[t("h1",N,f(e.__("Current Branches")),1),t("div",P,[a(D,{href:e.route("branches.create"),text:e.__("Add Branch")},{default:s(()=>[a(x)]),_:1},8,["href","text"]),a(y,null,{default:s(()=>[b(t("input",{type:"text",id:"table-search-users","onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),class:"input-class",placeholder:e.__("Search for a branch")},null,8,V),[[v,r.value]])]),_:1})]),a($,{controller:"branches",head:[e.__("ID"),e.__("Name"),e.__("Phone"),e.__("Email"),e.__("Address"),e.__("Employees")],data:n.branches,hasActions:!0,hasLink:!0},null,8,["head","data"])]),_:1})])])]),_:1})],64))}};export{H as default};
