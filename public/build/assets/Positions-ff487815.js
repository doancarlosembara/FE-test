import{r as m,D as _,w as p,a as c,b as u,d as s,u as d,Z as f,e as t,f as o,t as h,m as v,z as b,F as w}from"./app-33d33f3a.js";import{_ as D}from"./GoBackNavLink-e82f2129.js";import{_ as P}from"./DataTable-4a41f1e8.js";import{_ as $}from"./SearchBar-cb11df04.js";import{_ as x}from"./FlexButton-8486cc06.js";import{_ as y}from"./OrgTabs-2897285c.js";import{d as g}from"./index-6a2a6a8b.js";import{_ as S}from"./Card-b3e23809.js";import{P as k}from"./PlusIcon-5bf44168.js";import"./_plugin-vue_export-helper-c27b6911.js";import"/public/build/assets/logoCVMebel.jpg";import"./Paginator-ebfe7b38.js";import"./index-7c2e6872.js";const B={class:"py-8"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},V={class:"card-header !mb-4"},j={class:"flex justify-between items-center mb-4 gap-4"},A=["placeholder"],H={__name:"Positions",props:{positions:Object},setup(r){const a=m(""),n=g(()=>{_.visit(route("positions.index",{term:a.value}),{preserveState:!0,preserveScroll:!0})},500);return p(a,n),(e,i)=>(c(),u(w,null,[s(d(f),{title:e.__("Positions")},null,8,["title"]),s(D,null,{tabs:t(()=>[s(y)]),default:t(()=>[o("div",B,[o("div",N,[s(S,{class:"!mt-0"},{default:t(()=>[o("h1",V,h(e.__("Current Positions")),1),o("div",j,[s(x,{href:e.route("positions.create"),text:e.__("Add Position")},{default:t(()=>[s(k)]),_:1},8,["href","text"]),s($,null,{default:t(()=>[v(o("input",{type:"text",id:"table-search-users","onUpdate:modelValue":i[0]||(i[0]=l=>a.value=l),class:"input-class",placeholder:e.__("Search for a position")},null,8,A),[[b,a.value]])]),_:1})]),s(P,{controller:"positions",head:[e.__("ID"),e.__("Name"),e.__("Description"),e.__("Employees")],data:r.positions,hasActions:!0,hasLink:!0},null,8,["head","data"])]),_:1})])])]),_:1})],64))}};export{H as default};
