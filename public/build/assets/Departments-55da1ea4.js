import{r as i,D as p,w as _,a as d,b as c,d as t,u,Z as f,e as a,f as s,t as h,m as v,z as D,F as b}from"./app-33d33f3a.js";import{_ as w}from"./GoBackNavLink-e82f2129.js";import{_ as x}from"./DataTable-4a41f1e8.js";import{_ as $}from"./SearchBar-cb11df04.js";import{_ as y}from"./FlexButton-8486cc06.js";import{_ as g}from"./OrgTabs-2897285c.js";import{d as S}from"./index-6a2a6a8b.js";import{_ as k}from"./Card-b3e23809.js";import{P as A}from"./PlusIcon-5bf44168.js";import"./_plugin-vue_export-helper-c27b6911.js";import"/public/build/assets/logoCVMebel.jpg";import"./Paginator-ebfe7b38.js";import"./index-7c2e6872.js";const B={class:"py-8"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},V={class:"card-header !mb-4"},j={class:"flex justify-between items-center mb-4 gap-4"},C=["placeholder"],H={__name:"Departments",props:{departments:Object},setup(m){const r=i(""),n=S(()=>{p.visit(route("departments.index",{term:r.value}),{preserveState:!0,preserveScroll:!0})},500);return _(r,n),(e,o)=>(d(),c(b,null,[t(u(f),{title:e.__("Departments")},null,8,["title"]),t(w,null,{tabs:a(()=>[t(g)]),default:a(()=>[s("div",B,[s("div",N,[t(k,{class:"!mt-0"},{default:a(()=>[s("h1",V,h(e.__("Current Departments")),1),s("div",j,[t(y,{href:e.route("departments.create"),text:e.__("Add A Department")},{default:a(()=>[t(A)]),_:1},8,["href","text"]),t($,null,{default:a(()=>[v(s("input",{type:"text",id:"table-search-users","onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),class:"input-class",placeholder:e.__("Search for a department")},null,8,C),[[D,r.value]])]),_:1})]),t(x,{controller:"departments",head:[e.__("ID"),e.__("Name"),e.__("Employees")],data:m.departments,hasActions:!0,hasLink:!0},null,8,["head","data"])]),_:1})])])]),_:1})],64))}};export{H as default};