import{o as $,r as k,O as M,w as B,a as i,b as w,d as a,u as D,Z as j,e,f as o,t as s,h as l,g as h,s as I,m as O,z as T,F as y,l as V}from"./app-e33e595b.js";import{_ as E}from"./GoBackNavLink-ac5a9f6b.js";import{_ as S}from"./FlexButton-b0beb1d9.js";import{a as F}from"./index-7c45f06a.js";import{_ as L}from"./OrgTabs-41f27424.js";import{_ as z}from"./SearchBar-3bd1d68b.js";import{d as C}from"./index-c472e11b.js";import{_ as g}from"./Card-eb92c73d.js";import{_ as c,T as H}from"./TableRow-7f80700c.js";import{_ as P,a as m}from"./TableHead-844344c9.js";import{_ as v}from"./TableBodyHeader-cf55bc0c.js";import{D as R,_ as f,a as p,b as u}from"./DD-dec984b9.js";import{M as U}from"./ModifyIcon-d2baaf5a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"/public/build/assets/logoCVMebel.jpg";import"./Paginator-51e8d070.js";const Z={class:"py-8"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},A={class:"flex justify-between items-center mb-4"},G={class:"card-header"},J={class:"flex gap-4"},K={class:"mb-2 ml-1 font-semibold"},Q={class:"flex justify-between items-center pb-4"},W={class:"mb-2 ml-1 font-semibold"},X=["placeholder"],pe={__name:"DepartmentView",props:{department:Object,manager:Object,employees:Object},setup(d){const n=d;$(()=>{F()});const _=k(""),N=C(()=>{M.visit(route("departments.show",{term:_.value,department:n.department.id}),{preserveState:!0,preserveScroll:!0})},500);return B(_,N),(t,b)=>(i(),w(y,null,[a(D(j),{title:t.__("Department Data")},null,8,["title"]),a(E,null,{tabs:e(()=>[a(L)]),default:e(()=>[o("div",Z,[o("div",q,[a(g,{class:"!mt-0"},{default:e(()=>[o("div",null,[o("div",A,[o("h1",G,s(t.__("Department Details")),1),o("div",J,[a(S,{text:t.__("Modify Department Data"),href:t.route("departments.edit",{id:n.department.id})},{default:e(()=>[a(U)]),_:1},8,["text","href"])])]),o("h2",K,s(t.__("Basic Info")),1),a(R,{class:"!pb-0"},{default:e(()=>[a(f,{colored:""},{default:e(()=>[a(p,null,{default:e(()=>[l(s(t.__("Name")),1)]),_:1}),a(u,null,{default:e(()=>[l(s(n.department.name),1)]),_:1})]),_:1}),a(f,{colored:""},{default:e(()=>[a(p,null,{default:e(()=>[l(s(t.__("ID")),1)]),_:1}),a(u,null,{default:e(()=>[l(s(n.department.id),1)]),_:1})]),_:1}),a(f,null,{default:e(()=>[a(p,null,{default:e(()=>[l(s(t.__("Manager")),1)]),_:1}),n.manager?(i(),h(D(I),{key:0,href:t.route("employees.show",{id:n.manager.id})},{default:e(()=>[a(u,null,{default:e(()=>[l(s(n.manager.name),1)]),_:1})]),_:1},8,["href"])):(i(),h(u,{key:1},{default:e(()=>[l(s(t.__("No Manager")),1)]),_:1}))]),_:1}),a(f,null,{default:e(()=>[a(p,null,{default:e(()=>[l(s(t.__("Number of Employees")),1)]),_:1}),a(u,null,{default:e(()=>[l(s(n.department.employees_count),1)]),_:1})]),_:1})]),_:1})])]),_:1}),a(g,null,{default:e(()=>[o("div",Q,[o("h2",W,s(t.__("Department Employees")),1),a(z,null,{default:e(()=>[O(o("input",{type:"text",id:"table-search-users","onUpdate:modelValue":b[0]||(b[0]=r=>_.value=r),class:"input-class",placeholder:t.__("Search for a user")},null,8,X),[[T,_.value]])]),_:1})]),a(P,{links:d.employees.links,showingNumber:d.employees.data.length,totalNumber:d.employees.total},{Head:e(()=>[a(m,null,{default:e(()=>[l(s(t.__("ID")),1)]),_:1}),a(m,null,{default:e(()=>[l(s(t.__("Name")),1)]),_:1}),a(m,null,{default:e(()=>[l(s(t.__("Email")),1)]),_:1}),a(m,null,{default:e(()=>[l(s(t.__("Phone")),1)]),_:1}),a(m,null,{default:e(()=>[l(s(t.__("National ID")),1)]),_:1})]),Body:e(()=>[(i(!0),w(y,null,V(d.employees.data,r=>(i(),h(H,{key:r.id},{default:e(()=>[a(v,{href:t.route("employees.show",{id:r.id})},{default:e(()=>[l(s(r.id),1)]),_:2},1032,["href"]),a(v,{href:t.route("employees.show",{id:r.id})},{default:e(()=>[l(s(r.name),1)]),_:2},1032,["href"]),a(c,{href:t.route("employees.show",{id:r.id})},{default:e(()=>[l(s(r.email),1)]),_:2},1032,["href"]),a(c,{href:t.route("employees.show",{id:r.id})},{default:e(()=>[l(s(r.phone),1)]),_:2},1032,["href"]),a(c,{href:t.route("employees.show",{id:r.id})},{default:e(()=>[l(s(r.national_id),1)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})])])]),_:1})],64))}};export{pe as default};