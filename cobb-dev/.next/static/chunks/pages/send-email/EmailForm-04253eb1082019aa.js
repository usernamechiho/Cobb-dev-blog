(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{73378:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/send-email/EmailForm",function(){return c(86550)}])},86550:function(a,b,c){"use strict";c.r(b);var d=c(85893),e=c(24339),f=c(55678),g=c(28460);c(40993);var h=c(75084),i=c(75247),j=c(67294),k=c(24280),l=c(53963),m=c.n(l),n=(0,g.ZP)(k.Z)({"& label.Mui-focused":{color:"#313135"},"& .MuiInput-underline:after":{borderBottomColor:"#313135"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#313135"},"&:hover fieldset":{borderColor:"#313135",boxShadow:"none"},"&.Mui-focused fieldset":{borderColor:"#313135"}}}),o=function(){var a=(0,j.useState)(""),b=a[0],c=a[1],g=(0,j.useState)(""),k=g[0],l=g[1],o=(0,j.useState)(""),p=o[0],q=o[1],r=(0,j.useState)(""),s=r[0],t=r[1],u=function(a){return c(a.currentTarget.value)},v=function(a){return l(a.currentTarget.value)},w=function(a){return q(a.currentTarget.value)},x=function(a){return t(a.currentTarget.value)},y=function(a){if(a.preventDefault(),!b.length||!k.length||!p.length||!s.length){f.Am.error("입력을 확인해주세요.",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});return}i.ZP.send("service_4mquxy2","template_c98c29r",{name:b,title:k,from_email:p,message:s},"16eWOhhsJIXcTkcm4").then(function(){c(""),l(""),q(""),t(""),f.Am.success("전송을 완료했습니다.",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(function(a){})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:m().emailFormContainer,children:[(0,d.jsx)("p",{children:"FORM"}),(0,d.jsxs)("form",{onSubmit:y,children:[(0,d.jsx)(n,{label:"Name",variant:"standard",value:b,onChange:u}),(0,d.jsx)(n,{label:"Your Email",variant:"standard",value:p,style:{marginTop:"20px"},onChange:w}),(0,d.jsx)(n,{label:"Title",variant:"standard",style:{marginTop:"20px"},value:k,onChange:v}),(0,d.jsx)(n,{multiline:!0,rows:10,label:"Message",variant:"standard",style:{marginTop:"50px"},value:s,onChange:x}),(0,d.jsxs)(h.Z,{type:"submit",variant:"contained",children:[(0,d.jsx)(e.Z,{})," 메세지 전송"]})]})]}),(0,d.jsx)(f.Ix,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0})]})};b.default=o},53963:function(a){a.exports={emailFormContainer:"emailForm_emailFormContainer__BrjeD"}}},function(a){a.O(0,[493,774,888,179],function(){var b;return a(a.s=73378)}),_N_E=a.O()}])