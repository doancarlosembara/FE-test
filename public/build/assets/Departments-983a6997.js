import{r as i,O as p,w as _,a as d,b as c,d as t,u,Z as f,e as a,f as s,t as h,m as v,z as b,F as D}from"./app-0c8769f5.js";import{_ as w}from"./GoBackNavLink-0d6dd275.js";import{_ as x}from"./DataTable-4361a352.js";import{_ as $}from"./SearchBar-d3a7f614.js";import{_ as y}from"./FlexButton-adf814e1.js";import{_ as g}from"./OrgTabs-58d689ee.js";import{d as S}from"./index-149905be.js";import{_ as k}from"./Card-97020e0e.js";import{P as A}from"./PlusIcon-e8711816.js";import"./_plugin-vue_export-helper-c27b6911.js";import"/public/build/assets/logoCVMebel.jpg";import"./Paginator-c9aadfb0.js";import"./index-7c45f06a.js";const B={class:"py-8"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},O={class:"card-header !mb-4"},V={class:"flex justify-between items-center mb-4 gap-4"},j=["placeholder"],H={__name:"Departments",props:{departments:Object},setup(m){const r=i(""),n=S(()=>{p.visit(route("departments.index",{term:r.value}),{preserveState:!0,preserveScroll:!0})},500);return _(r,n),(e,o)=>(d(),c(D,null,[t(u(f),{title:e.__("Departments")},null,8,["title"]),t(w,null,{tabs:a(()=>[t(g)]),default:a(()=>[s("div",B,[s("div",N,[t(k,{class:"!mt-0"},{default:a(()=>[s("h1",O,h(e.__("Current Departments")),1),s("div",V,[t(y,{href:e.route("departments.create"),text:e.__("Add A Department")},{default:a(()=>[t(A)]),_:1},8,["href","text"]),t($,null,{default:a(()=>[v(s("input",{type:"text",id:"table-search-users","onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),class:"input-class",placeholder:e.__("Search for a department")},null,8,j),[[b,r.value]])]),_:1})]),t(x,{controller:"departments",head:[e.__("ID"),e.__("Name"),e.__("Employees")],data:m.departments,hasActions:!0,hasLink:!0},null,8,["head","data"])]),_:1})])])]),_:1})],64))}};export{H as default};
