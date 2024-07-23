"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{9118:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=r(6761)},5349:function(e,t,r){r.d(t,{Z:function(){return k}});var a=r(3950),n=r(2988),o=r(2265),i=r(4839),c=r(6259),l=r(4166),s=r(8024),u=r(9018),d=r(7437),p=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=r(4535),m=r(7542);function v(e){return(0,m.ZP)("MuiAvatar",e)}(0,f.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=r(6830);let b=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Z=(0,l.U)("MuiAvatar"),h=e=>{let{classes:t,variant:r,colorDefault:a}=e;return(0,c.Z)({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},v,t)},y=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,n.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,n.Z)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}}),x=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),C=(0,s.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var k=o.forwardRef(function(e,t){let r=Z({props:e,name:"MuiAvatar"}),{alt:c,children:l,className:s,component:u="div",slots:p={},slotProps:f={},imgProps:m,sizes:v,src:k,srcSet:w,variant:M="circular"}=r,I=(0,a.Z)(r,b),P=null,R=function(e){let{crossOrigin:t,referrerPolicy:r,src:a,srcSet:n}=e,[i,c]=o.useState(!1);return o.useEffect(()=>{if(!a&&!n)return;c(!1);let e=!0,o=new Image;return o.onload=()=>{e&&c("loaded")},o.onerror=()=>{e&&c("error")},o.crossOrigin=t,o.referrerPolicy=r,o.src=a,n&&(o.srcset=n),()=>{e=!1}},[t,r,a,n]),i}((0,n.Z)({},m,{src:k,srcSet:w})),F=k||w,O=F&&"error"!==R,S=(0,n.Z)({},r,{colorDefault:!O,component:u,variant:M}),j=h(S),[A,N]=(0,g.Z)("img",{className:j.img,elementType:x,externalForwardedProps:{slots:p,slotProps:{img:(0,n.Z)({},m,f.img)}},additionalProps:{alt:c,src:k,srcSet:w,sizes:v},ownerState:S});return P=O?(0,d.jsx)(A,(0,n.Z)({},N)):l||0===l?l:F&&c?c[0]:(0,d.jsx)(C,{ownerState:S,className:j.fallback}),(0,d.jsx)(y,(0,n.Z)({as:u,ownerState:S,className:(0,i.Z)(j.root,s),ref:t},I,{children:P}))})},5870:function(e,t,r){r.d(t,{Z:function(){return P}});var a=r(3950),n=r(2988),o=r(2265),i=r(4839),c=r(6259),l=r(317),s=r(8024),u=r(1738),d=r(9281),p=r(1175),f=r(9022),m=r(8632),v=r(909),g=r(4535);let b=(0,g.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Z=(0,g.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),h=(0,g.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var y=r(7542);function x(e){return(0,y.ZP)("MuiMenuItem",e)}let C=(0,g.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var k=r(7437);let w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],M=e=>{let{disabled:t,dense:r,divider:a,disableGutters:o,selected:i,classes:l}=e,s=(0,c.Z)({root:["root",r&&"dense",t&&"disabled",!o&&"gutters",a&&"divider",i&&"selected"]},x,l);return(0,n.Z)({},l,s)},I=(0,s.ZP)(f.Z,{shouldForwardProp:e=>(0,u.Z)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(C.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(C.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(C.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(C.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(C.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(b.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(b.inset)]:{marginLeft:52},["& .".concat(h.root)]:{marginTop:0,marginBottom:0},["& .".concat(h.inset)]:{paddingLeft:36},["& .".concat(Z.root)]:{minWidth:36}},!r.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},r.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(Z.root," svg")]:{fontSize:"1.25rem"}}))});var P=o.forwardRef(function(e,t){let r;let c=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:s="li",dense:u=!1,divider:f=!1,disableGutters:g=!1,focusVisibleClassName:b,role:Z="menuitem",tabIndex:h,className:y}=c,x=(0,a.Z)(c,w),C=o.useContext(p.Z),P=o.useMemo(()=>({dense:u||C.dense||!1,disableGutters:g}),[C.dense,u,g]),R=o.useRef(null);(0,m.Z)(()=>{l&&R.current&&R.current.focus()},[l]);let F=(0,n.Z)({},c,{dense:P.dense,divider:f,disableGutters:g}),O=M(c),S=(0,v.Z)(R,t);return c.disabled||(r=void 0!==h?h:-1),(0,k.jsx)(p.Z.Provider,{value:P,children:(0,k.jsx)(I,(0,n.Z)({ref:S,role:Z,tabIndex:r,component:s,focusVisibleClassName:(0,i.Z)(O.focusVisible,b),className:(0,i.Z)(O.root,y)},x,{ownerState:F,classes:O}))})})},6761:function(e,t,r){r.r(t),r.d(t,{capitalize:function(){return n.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return s.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return x},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return g},useControlled:function(){return b.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return y.Z}});var a=r(3279),n=r(2272),o=r(8086),i=r(9018),c=r(576),l=function(e,t){return()=>null},s=r(9633),u=r(9645),d=r(8095);r(2988);var p=function(e,t){return()=>null},f=r(9969).Z,m=r(8632),v=r(8256),g=function(e,t,r,a,n){return null},b=r(7088),Z=r(6182),h=r(909),y=r(9261);let x={configure:e=>{a.Z.configure(e)}}}}]);