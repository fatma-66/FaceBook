(()=>{var e={};e.id=525,e.ids=[525],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},76:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>p}),r(1947),r(2029),r(5866);var a=r(3191),s=r(8716),o=r(7922),n=r.n(o),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let p=["",{children:["uploadphoto",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1947)),"D:\\redux project\\final\\src\\app\\uploadphoto\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7874))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"D:\\redux project\\final\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7874))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\redux project\\final\\src\\app\\uploadphoto\\page.tsx"],d="/uploadphoto/page",c={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/uploadphoto/page",pathname:"/uploadphoto",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},2584:(e,t,r)=>{Promise.resolve().then(r.bind(r,4157))},4157:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(326),s=r(7577),o=r(5842),n=r(5047),i=r(6324),l=r(6226);function p(){let[e,t]=(0,s.useState)(null),[r,p]=(0,s.useState)(null),{allPosts:u,isLoading:d,isError:c}=(0,o.v9)(e=>e.posts),{userData:x}=(0,o.v9)(e=>e.users),m=(0,n.useRouter)(),f=(0,o.I0)(),[g,h]=(0,s.useState)(null);async function v(e){e.preventDefault();let t=new FormData,r=e.currentTarget?.photo.files[0];t.append("photo",r),"fulfilled"===(await f((0,i.zv)(t))).meta.requestStatus&&(await f((0,i.OA)()),m.push("/"))}return a.jsx(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:v,style:{width:"80%",margin:"10px auto"},children:[g&&a.jsx(l.default,{src:g,alt:"Image Preview",style:{maxWidth:"100%",marginTop:"10px",border:"1px solid rgba(0,0,0,0.5)"}}),a.jsx("input",{type:"file",className:"btn",name:"photo",onChange:function(e){let t=e.target.files?.[0];if(t){let e=new FileReader;e.onloadend=()=>{h(e.result)},e.readAsDataURL(t)}else h(null)}}),a.jsx("button",{type:"submit",className:"btn",style:{cursor:"pointer"},children:"Upload image"})]})})}},1947:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var a=r(8570);let s=(0,a.createProxy)(String.raw`D:\redux project\final\src\app\uploadphoto\page.tsx`),{__esModule:o,$$typeof:n}=s;s.default;let i=(0,a.createProxy)(String.raw`D:\redux project\final\src\app\uploadphoto\page.tsx#default`)},7874:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)("/FaceApp",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,64,621,226,589],()=>r(76));module.exports=a})();