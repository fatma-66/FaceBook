(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{8168:function(e,a,r){Promise.resolve().then(r.bind(r,3488))},3488:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return w}});var s=r(7437),t=r(2265),n=r(8165),o=r(1326),l=r(2862),i=r(8409),d=r(8743),u=r(4908),m=r(3907),g=r(6548),c=r(6101),p=r(9381),h=r(4245),x=r(1444),f=r(6463),y=r(7138);function w(){let e=h.Ry().shape({name:h.Z_().min(3,"name minlength is 3 letters").max(10,"name Maxlength is 10 letters").required("Username is required"),email:h.Z_().email("email is invalid").required("Email is required"),password:h.Z_().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"you must enter a valid password").required("password is required"),rePassword:h.Z_().oneOf([h.iH("password")],"password and repassword must be the same").required("rePassword is required"),dateOfBirth:h.hT().required("Required"),gender:h.Z_().required("Required")}),a=(0,x.I0)(),r=(0,f.useRouter)(),[w,j]=t.useState("female"),{isLoading:b,isError:Z,loggedmessage:k,registermessok:v,registermessnot:O}=(0,x.v9)(e=>e.users);return O&&n.Z,(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(p.J9,{initialValues:{name:"",email:"",password:"",rePassword:"",dateOfBirth:"",gender:"female"},validationSchema:e,onSubmit:e=>{a((0,c.M_)(e)),"success"==v&&r.push("/login")},children:e=>{let{errors:a,touched:r,handleChange:t,handleBlur:n,values:o,handleSubmit:c}=e;return(0,s.jsxs)(p.l0,{onSubmit:c,style:{width:"50%",margin:"10px auto",display:"flex",flexDirection:"column",padding:"30px",justifyContent:"start"},children:[(0,s.jsx)(p.gN,{as:l.Z,name:"name",label:"UserName",variant:"standard",style:{margin:"20px"},error:r.name&&!!a.name,helperText:(0,s.jsx)(p.Bc,{name:"name"})}),(0,s.jsx)(p.gN,{as:l.Z,name:"email",label:"Email",variant:"standard",style:{margin:"20px"},error:r.email&&!!a.email,helperText:(0,s.jsx)(p.Bc,{name:"email"})}),(0,s.jsx)(p.gN,{as:l.Z,name:"password",type:"password",label:"Password",variant:"standard",style:{margin:"20px"},error:r.password&&!!a.password,helperText:(0,s.jsx)(p.Bc,{name:"password"})}),(0,s.jsx)(p.gN,{as:l.Z,name:"rePassword",type:"password",label:"Re-enter Password",variant:"standard",style:{margin:"20px"},error:r.rePassword&&!!a.rePassword,helperText:(0,s.jsx)(p.Bc,{name:"rePassword"})}),(0,s.jsx)(p.gN,{as:l.Z,name:"dateOfBirth",type:"date",label:"Date of Birth",variant:"standard",style:{margin:"20px"},error:r.dateOfBirth&&!!a.dateOfBirth,helperText:(0,s.jsx)(p.Bc,{name:"dateOfBirth"}),InputLabelProps:{shrink:!0}}),(0,s.jsx)(i.Z,{id:"gender-label",style:{margin:"20px"},children:"Gender"}),(0,s.jsxs)(d.Z,{row:!0,"aria-labelledby":"gender-label",name:"gender",value:o.gender,onChange:t,onBlur:n,style:{marginLeft:"10px",marginBottom:"20px"},children:[(0,s.jsx)(u.Z,{value:"female",control:(0,s.jsx)(m.Z,{}),label:"Female"}),(0,s.jsx)(u.Z,{value:"male",control:(0,s.jsx)(m.Z,{}),label:"Male"}),(0,s.jsx)(u.Z,{value:"other",control:(0,s.jsx)(m.Z,{}),label:"Other"})]}),(0,s.jsx)(g.Z,{type:"submit",variant:"contained",color:"primary",style:{cursor:"pointer",width:"30%",margin:"20px auto"},children:"Register Now"}),(0,s.jsxs)(y.default,{href:"/login",style:{textDecoration:"none",color:"black",margin:"auto"},children:["already have account? ",(0,s.jsx)("span",{style:{color:"black",fontWeight:"bolder"},children:" Login"})]})]})}})})})}},6101:function(e,a,r){"use strict";r.d(a,{M_:function(){return n},OA:function(){return i},cA:function(){return d},n$:function(){return o},zv:function(){return l}});var s=r(9753);let t={token:localStorage.getItem("userToken")},n=(0,s.hg)("users/getUserDetails",async e=>{let a=await fetch("https://linked-posts.routemisr.com/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await a.json()}),o=(0,s.hg)("users/userLogin",async e=>{let a=await fetch("https://linked-posts.routemisr.com/users/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await a.json();return console.log(r),r}),l=(0,s.hg)("users/UploadImage",async e=>{let a=await fetch("https://linked-posts.routemisr.com/users/upload-photo",{method:"PATCH",headers:t,body:e}),r=await a.json();return console.log(r),r}),i=(0,s.hg)("users/getLoggedUserData",async()=>{let e=await fetch("https://linked-posts.routemisr.com/users/profile-data",{headers:t});return await e.json()}),d=(0,s.oM)({name:"users",initialState:{loggedin:!0,message:"",userData:[],loggedmessage:"",registermessok:"",registermessnot:"",loginmessok:"",loginmessnot:""},extraReducers:e=>{e.addCase(n.fulfilled,(e,a)=>{e.registermessok=a.payload.message,e.registermessnot=a.payload.error}),e.addCase(o.fulfilled,(e,a)=>{console.log("Logged"),e.loginmessok=a.payload.message,e.loginmessnot=a.payload.error,a.payload&&a.payload&&a.payload.token&&localStorage.setItem("userToken",a.payload.token)}),e.addCase(o.rejected,(e,a)=>{console.log("Not Logged"),e.loggedmessage=null==a?void 0:a.payload.error}),e.addCase(i.fulfilled,(e,a)=>{e.userData=a.payload.user})},reducers:{}}).reducer}},function(e){e.O(0,[444,753,355,871,91,349,138,768,971,23,744],function(){return e(e.s=8168)}),_N_E=e.O()}]);