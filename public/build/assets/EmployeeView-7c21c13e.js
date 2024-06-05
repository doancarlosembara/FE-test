import{_ as O}from"./GoBackNavLink-20bd217c.js";import{K as F,a as p,b as x,f as d,y as L,n as V,o as j,c as Y,d as l,u as t,_ as a,Z as z,e,t as n,g as N,h as o,F as P,l as A}from"./app-7bd8af52.js";import{_ as R}from"./EmployeeTabs-32f26382.js";import{_ as E}from"./FlexButton-1f698e1e.js";import{a as q}from"./index-7c45f06a.js";import{_ as H}from"./Card-2f38128d.js";import{M as w}from"./ModifyIcon-55b29e9f.js";import{D as C,_ as r,a as f,b as m}from"./DD-c3ee6b0e.js";import{_ as B}from"./GenericModal-3ad3deb6.js";import{_ as v,a as h}from"./TableHead-d8d7aea6.js";import{_ as y,T as $}from"./TableRow-2eaaf0b2.js";import{_ as G}from"./ToolTip-3e736c8b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-82f17d0d.js";function K(){function s(i){const _={year:"numeric",month:"long",day:"numeric"},D=1800+(parseInt(i.charAt(0))-1)*100+parseInt(i.substr(1,2)),u=parseInt(i.substr(3,2)),c=parseInt(i.substr(5,2)),g=i.substr(7,2),I={"01":"القاهرة","02":"الإسكندرية","03":"بورسعيد","04":"السويس",11:"دمياط",12:"الدقهلية",13:"الشرقية",14:"القليوبية",15:"كفر الشيخ",16:"الغربية",17:"المنوفية",18:"البحيرة",19:"الإسماعيلية",21:"الجيزة",22:"بني سويف",23:"الفيوم",24:"المنيا",25:"أسيوط",26:"سوهاج",27:"قنا",28:"أسوان",29:"الأقصر",31:"البحر الأحمر",32:"الوادي الجديد",33:"مطروح",34:"شمال سيناء",35:"جنوب سيناء",88:"خارج الجمهورية"}[g],T=parseInt(i.charAt(12))%2!==0,k=new Date(D,u-1,c);return{year:D,month:u,day:c,date:k.toLocaleDateString("en-uk",_),date_localized:k.toLocaleDateString(F().props.locale,_),state:I,isMale:T}}return{extractPersonalDetails:s}}const U={class:"overflow-hidden sm:rounded-lg"},W={class:V("grid grid-cols-2")},Z={__name:"HistoryDescriptionList",props:{},setup(s){return(i,_)=>(p(),x("div",U,[d("dl",null,[d("div",W,[L(i.$slots,"default")])])]))}};function J(s){const i=new Date(s),_=new Date;let S=_.getFullYear()-i.getFullYear();return(_.getMonth()<i.getMonth()||_.getMonth()===i.getMonth()&&_.getDate()<i.getDate())&&S--,Math.abs(S)}const Q={class:"py-8"},X={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},ee={class:"flex justify-between items-center mb-4"},le={class:"card-header"},te={class:"flex inline-flex gap-4"},ae={class:"card-subheader"},ne=["href"],oe=["href"],se=["href"],ue={class:"mb-2 ml-1 font-semibold"},de={class:"mb-2 ml-1 font-semibold"},ie={class:"px-4 py-3.5"},re={class:"text-sm font-medium"},fe={class:"test"},me={class:"px-4 py-3.5"},ce={class:"text-sm font-medium"},_e={class:"px-4 py-3.5"},he={class:"text-sm font-medium"},ke={__name:"EmployeeView",props:{employee:Object},setup(s){const i=s;let{extractPersonalDetails:_}=K();j(()=>{q()});const S=Y(()=>{const b=i.employee.manages.map(({department_id:g,branch_id:M})=>({department_id:g,branch_id:M})).filter(({department_id:g,branch_id:M})=>g!==null||M!==null),D=b.map(({branch_id:g})=>g).filter(Boolean).join(", "),u=b.map(({department_id:g})=>g).filter(Boolean).join(", ");let c="";return D!==""&&(c+=a("Branches")+`: #${D}`),u!==""&&(c!==""&&(c+=" - "),c+=a("Departments")+`: #${u}`),c});return(b,D)=>(p(),x(P,null,[l(t(z),{title:t(a)("Employee View")},null,8,["title"]),l(O,null,{tabs:e(()=>[l(R)]),default:e(()=>[d("div",Q,[d("div",X,[l(H,{class:"!mt-0"},{default:e(()=>[d("div",ee,[d("h1",le,n(t(a)("Employee View :ifAdmin",{ifAdmin:i.employee.manages.length>0?"("+t(a)("Manager")+")":""})),1),d("div",te,[b.$page.props.auth.user.roles.includes("admin")?(p(),N(E,{key:0,text:t(a)("Modify Employee Data"),href:b.route("employees.edit",{id:s.employee.id})},{default:e(()=>[l(w)]),_:1},8,["text","href"])):(p(),N(E,{key:1,text:t(a)("Modify Data"),href:b.route("profile.edit",{id:s.employee.id})},{default:e(()=>[l(w)]),_:1},8,["text","href"]))])]),d("h2",ae,n(t(a)("Basic Info")),1),l(C,null,{default:e(()=>[l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Name")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.name),1)]),_:1})]),_:1}),l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("ID")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.id),1)]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Phone")),1)]),_:1}),l(m,null,{default:e(()=>[d("a",{href:"tel:"+s.employee.phone},n(s.employee.phone),9,ne)]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("National ID")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.national_id),1)]),_:1})]),_:1}),l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Email")),1)]),_:1}),l(m,null,{default:e(()=>[d("a",{href:"mailto:"+s.employee.email},n(s.employee.email),9,oe)]),_:1})]),_:1}),l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Gender")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(t(_)(s.employee.national_id).isMale?t(a)("Male"):t(a)("Female")),1)]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Bank Account Details")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.bank_acc_no??t(a)("N/A")),1)]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Birthday")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(t(_)(s.employee.national_id).date_localized+" - "+t(J)(t(_)(s.employee.national_id).date)+" "+t(a)("Years")),1)]),_:1})]),_:1}),l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Hire Date")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.hired_on),1)]),_:1})]),_:1}),l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Remote Worker?")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(i.employee.is_remote?t(a)("Yes"):t(a)("No")),1)]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Address")),1)]),_:1}),l(m,null,{default:e(()=>[d("a",{href:"https://www.google.com/maps/search/?api=1&query="+i.employee.address,target:"”_blank”"},n(s.employee.address),9,se)]),_:1})]),_:1})]),_:1})]),_:1}),l(H,null,{default:e(()=>[d("h2",ue,n(t(a)("Technical Info")),1),l(C,null,{default:e(()=>[l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Branch")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.branch_name??t(a)("N/A")),1)]),_:1})]),_:1}),l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Department")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.department_name??t(a)("N/A")),1)]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Salary")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.salaries[s.employee.salaries.length-1].salary.toLocaleString()+" "+s.employee.salaries[s.employee.salaries.length-1].currency),1)]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Position")),1)]),_:1}),l(m,null,{default:e(()=>{var u;return[o(n(s.employee.employee_positions.length===0?t(a)("N/A"):((u=s.employee.employee_positions[s.employee.employee_positions.length-1].position)==null?void 0:u.name)??t(a)("N/A")),1)]}),_:1})]),_:1}),l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Shift")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.employee_shifts.length===0?t(a)("N/A"):s.employee.employee_shifts.filter(u=>u.end_date===null).map(u=>{var c;return(c=u.shift)==null?void 0:c.name})[0]??t(a)("N/A")),1)]),_:1})]),_:1}),l(r,{colored:""},{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Access Permissions")),1)]),_:1}),l(m,null,{default:e(()=>[o(n(s.employee.roles.length===0?t(a)("Not Assigned"):s.employee.roles[s.employee.roles.length-1].name.replace(/_/g," ").replace(/\b\w/g,u=>u.toUpperCase())),1)]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(f,null,{default:e(()=>[o(n(t(a)("Manages"))+" ",1),l(G,{direction:"top"},{default:e(()=>[o(n(t(a)("IDs of the branches and/or departments that this employee manages, if any.")),1)]),_:1})]),_:1}),l(m,null,{default:e(()=>[o(n(i.employee.manages.length>0?S.value:t(a)("Nothing")),1)]),_:1})]),_:1})]),_:1})]),_:1}),l(H,null,{default:e(()=>[d("h2",de,n(t(a)("History")),1),l(Z,null,{default:e(()=>[d("div",ie,[d("dt",re,n(t(a)("Previous Salaries")),1),l(B,{modalId:"Salaries Modal",title:t(a)("Click Here To See Salary History"),modalHeader:t(a)("Previous Salaries"),hasCancel:!1},{default:e(()=>[l(v,{totalNumber:1,enablePaginator:!1},{Head:e(()=>[l(h,null,{default:e(()=>[o(n(t(a)("Currency")),1)]),_:1}),l(h,null,{default:e(()=>[o(n(t(a)("Salary")),1)]),_:1}),l(h,null,{default:e(()=>[o(n(t(a)("Starting From")),1)]),_:1}),l(h,null,{default:e(()=>[o(n(t(a)("Ending At")),1)]),_:1})]),Body:e(()=>[(p(!0),x(P,null,A(s.employee.salaries,u=>(p(),N($,{key:u.id},{default:e(()=>[l(y,null,{default:e(()=>[o(n(u.currency),1)]),_:2},1024),l(y,null,{default:e(()=>[o(n(u.salary),1)]),_:2},1024),l(y,null,{default:e(()=>[o(n(u.start_date),1)]),_:2},1024),l(y,null,{default:e(()=>[o(n(u.end_date??t(a)("Current")),1)]),_:2},1024)]),_:2},1024))),128))]),default:e(()=>[d("p",fe,n(s.employee.salaries),1)]),_:1})]),_:1},8,["title","modalHeader"])]),d("div",me,[d("dt",ce,n(t(a)("Previous Positions")),1),l(B,{modalId:"Positions Modal",title:t(a)("Click Here To See Positions History"),modalHeader:t(a)("Previous Positions"),hasCancel:!1},{default:e(()=>[l(v,{totalNumber:1,enablePaginator:!1},{Head:e(()=>[l(h,null,{default:e(()=>[o(n(t(a)("Position")),1)]),_:1}),l(h,null,{default:e(()=>[o(n(t(a)("Starting From")),1)]),_:1}),l(h,null,{default:e(()=>[o(n(t(a)("Ending At")),1)]),_:1})]),Body:e(()=>[(p(!0),x(P,null,A(s.employee.employee_positions,u=>(p(),N($,{key:u.id},{default:e(()=>[l(y,null,{default:e(()=>{var c;return[o(n(((c=u.position)==null?void 0:c.name)??t(a)("DELETED POSITION")),1)]}),_:2},1024),l(y,null,{default:e(()=>[o(n(u.start_date),1)]),_:2},1024),l(y,null,{default:e(()=>[o(n(u.end_date??t(a)("Current")),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["title","modalHeader"])]),d("div",_e,[d("dt",he,n(t(a)("Previous Shifts")),1),l(B,{modalId:"Shifts Modal",title:t(a)("Click Here To See Shifts History"),modalHeader:t(a)("Previous Shifts"),hasCancel:!1},{default:e(()=>[l(v,{totalNumber:1,enablePaginator:!1},{Head:e(()=>[l(h,null,{default:e(()=>[o(n(t(a)("Shift")),1)]),_:1}),l(h,null,{default:e(()=>[o(n(t(a)("Starting From")),1)]),_:1}),l(h,null,{default:e(()=>[o(n(t(a)("Ending At")),1)]),_:1})]),Body:e(()=>[(p(!0),x(P,null,A(s.employee.employee_shifts,u=>(p(),N($,{key:u.id},{default:e(()=>[l(y,null,{default:e(()=>{var c;return[o(n(((c=u.shift)==null?void 0:c.name)??t(a)("DELETED SHIFT")),1)]}),_:2},1024),l(y,null,{default:e(()=>[o(n(u.start_date),1)]),_:2},1024),l(y,null,{default:e(()=>[o(n(u.end_date??t(a)("Current")),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["title","modalHeader"])])]),_:1})]),_:1})])])]),_:1})],64))}};export{ke as default};
