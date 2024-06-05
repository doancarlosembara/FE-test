import{T as k,a as h,b as f,d as s,u as e,_ as a,Z as E,e as d,f as o,t as i,j as _,n as c,m as C,v as T,F as g,l as D,h as v,p as x}from"./app-7bd8af52.js";import{_ as N}from"./GoBackNavLink-20bd217c.js";import{_ as $}from"./OrgTabs-cf4b0133.js";import{_ as m}from"./InputLabel-6a8fbbb2.js";import{_ as p}from"./TextInput-baf6134b.js";import{_ as u}from"./InputError-d42bd6cb.js";import{P as B}from"./PrimaryButton-860abf4f.js";import{S as y}from"./sweetalert2.all-11442bb0.js";import{_ as U}from"./Card-2f38128d.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={class:"py-8"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},A={class:"card-header !mb-4"},F=["onSubmit"],M={class:"grid grid-cols-2 gap-4"},P={class:"grid grid-cols-2 gap-4 mt-4"},z={class:"grid grid-cols-2 gap-4 mt-4"},J={value:"0"},O=["value"],W=o("div",null,null,-1),Y={class:"flex items-center justify-end mt-4"},L=["onSubmit"],se={__name:"BranchEdit",props:{branch:Object,employees:Object},setup(b){const n=b,r=k({name:n.branch.name,address:n.branch.address,phone:n.branch.phone,email:n.branch.email,manager_id:n.branch.manager?n.branch.manager.id:"0"}),w=()=>{r.put(route("branches.update",{id:n.branch.id}),{preserveScroll:!0,onError:()=>{x().error(a("Error Editing Branch"))},onSuccess:()=>{x().success(a("Branch Edited Successfully")),r.reset()}})},V=()=>{y.mixin({customClass:{confirmButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",cancelButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:a("This branch has :n employee. Are you sure?",{n:n.branch.employees_count}),text:a("You won't be able to revert this!"),icon:"warning",showCancelButton:!0,confirmButtonText:a("Yes, Delete!"),cancelButtonText:a("No, Cancel!"),reverseButtons:!0}).then(t=>{t.isConfirmed&&r.delete(route("branches.destroy",{id:n.branch.id}),{preserveScroll:!0,onSuccess:()=>{y.fire(a("Branch Removed!"),"","success")}})})};return(S,t)=>(h(),f(g,null,[s(e(E),{title:e(a)("Branch Edit")},null,8,["title"]),s(N,null,{tabs:d(()=>[s($)]),default:d(()=>[o("div",j,[o("div",q,[s(U,{class:"!mt-0"},{default:d(()=>[o("h1",A,i(e(a)("Edit A Branch")),1),o("form",{onSubmit:_(w,["prevent"])},[o("div",M,[o("div",null,[s(m,{for:"branch_name",value:e(a)("Branch Name")},null,8,["value"]),s(p,{id:"branch_name",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(r).errors.name}]),modelValue:e(r).name,"onUpdate:modelValue":t[0]||(t[0]=l=>e(r).name=l),required:"",autocomplete:"off",placeholder:e(a)("Joseph Tito Branch")},null,8,["class","modelValue","placeholder"]),s(u,{class:"mt-2",message:e(r).errors.name},null,8,["message"])]),o("div",null,[s(m,{for:"branch_address",value:e(a)("Branch Address")},null,8,["value"]),s(p,{id:"branch_address",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(r).errors.address}]),modelValue:e(r).address,"onUpdate:modelValue":t[1]||(t[1]=l=>e(r).address=l),required:"",autocomplete:"off",placeholder:e(a)("El-Nozha, Cairo, Egypt")},null,8,["class","modelValue","placeholder"]),s(u,{class:"mt-2",message:e(r).errors.address},null,8,["message"])])]),o("div",P,[o("div",null,[s(m,{for:"branch_phone",value:e(a)("Department Phone")},null,8,["value"]),s(p,{id:"branch_phone",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(r).errors.phone}]),modelValue:e(r).phone,"onUpdate:modelValue":t[2]||(t[2]=l=>e(r).phone=l),required:"",autocomplete:"off",placeholder:"+20123456789"},null,8,["class","modelValue"]),s(u,{class:"mt-2",message:e(r).errors.phone},null,8,["message"])]),o("div",null,[s(m,{for:"branch_email",value:e(a)("Department Email")},null,8,["value"]),s(p,{id:"branch_email",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(r).errors.email}]),modelValue:e(r).email,"onUpdate:modelValue":t[3]||(t[3]=l=>e(r).email=l),required:"",autocomplete:"off",placeholder:"JospephTito@Company.com"},null,8,["class","modelValue"]),s(u,{class:"mt-2",message:e(r).errors.email},null,8,["message"])])]),o("div",z,[o("div",null,[s(m,{for:"manager_id",value:e(a)("Manager")},null,8,["value"]),C(o("select",{id:"manager_id",class:"fancy-selector","onUpdate:modelValue":t[4]||(t[4]=l=>e(r).manager_id=l)},[o("option",J,i(e(a)("Choose an Employee")),1),(h(!0),f(g,null,D(b.employees,l=>(h(),f("option",{key:l.id,value:l.id},i(l.name),9,O))),128))],512),[[T,e(r).manager_id]]),s(u,{class:"mt-2",message:e(r).errors.branch_id},null,8,["message"])]),W]),o("div",Y,[o("form",{onSubmit:_(V,["prevent"]),class:"inline"},[s(B,{class:"bg-red-600 hover:bg-red-700 ml-4"},{default:d(()=>[v(i(e(a)("Delete Branch")),1)]),_:1})],40,L),s(B,{class:c(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(r).processing}]),disabled:e(r).processing},{default:d(()=>[v(i(e(a)("Edit Branch")),1)]),_:1},8,["class","disabled"])])],40,F)]),_:1})])])]),_:1})],64))}};export{se as default};
