import{T as n,a as l,g as d,e as t,d as a,u as o,Z as c,f as r,h as p,n as f,j as u}from"./app-9aa95d1b.js";import{_}from"./GuestLayout-22e24fb3.js";import{_ as w}from"./InputError-7d3ff137.js";import{_ as b}from"./InputLabel-4b1271bf.js";import{P as h}from"./PrimaryButton-8702d33d.js";import{_ as g}from"./TextInput-cf0be82d.js";import"/public/build/assets/logoCVMebel-nobg.png";import"./_plugin-vue_export-helper-c27b6911.js";const x=r("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],P={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(V){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,e)=>(l(),d(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),x,r("form",{onSubmit:u(i,["prevent"])},[r("div",null,[a(b,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":e[0]||(e[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),r("div",P,[a(h,{class:f(["ltr:ml-4 rtl:mr-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{q as default};
