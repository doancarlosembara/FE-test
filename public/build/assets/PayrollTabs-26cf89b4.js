import{a as n,b as o}from"./GoBackNavLink-e82f2129.js";import{a,b as s,d as r,e as t,h as l,t as i,F as c}from"./app-33d33f3a.js";const p={key:0,class:"space-x-8 rtl:space-x-reverse sm:flex"},_={key:1,class:"space-x-8 sm:flex"},h={__name:"PayrollTabs",setup(d){return(e,f)=>(a(),s(c,null,[r(n),e.$page.props.auth.user.roles.includes("admin")?(a(),s("div",p,[r(o,{href:e.route("payrolls.index"),active:e.route().current("payrolls.index")},{default:t(()=>[l(i(e.__("Payrolls")),1)]),_:1},8,["href","active"])])):(a(),s("div",_,[r(o,{href:e.route("payrolls.index"),active:""},{default:t(()=>[l(i(e.__("My Payrolls")),1)]),_:1},8,["href"])]))],64))}};export{h as _};