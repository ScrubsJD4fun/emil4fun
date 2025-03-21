(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[13],{480:function(e,s,t){"use strict";var a=t(483),r=t.n(a),i=t(16),c=t(484).a(),n=t(28),l=t(272);const o=r.a.create({baseURL:i.a,timeout:6e4}),m="/auth/login";o.interceptors.request.use((e=>{const s=localStorage.getItem(n.b);return s&&(e.headers.authorization=s),s||e.headers["public-request"]||(c.push(m),window.location.reload()),e}),(e=>{l.a.error({message:"Error"}),Promise.reject(e)})),o.interceptors.response.use((e=>e.data),(e=>{let s={message:""};return 400!==e.response.status&&403!==e.response.status||(s.message="Authentication Fail",s.description="Please login again",localStorage.removeItem(n.b),c.push(m),window.location.reload()),404===e.response.status&&(s.message="Not Found"),500===e.response.status&&(s.message="Internal Server Error"),508===e.response.status&&(s.message="Time Out"),l.a.error(s),Promise.reject(e)}));var d=o;const u={login:function(e){return d({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return d({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};s.a=u},493:function(e,s,t){"use strict";var a=t(0),r=t(40),i=t(470),c=t(560),n=t(555),l=t(557),o=t(451),m=t(122),d=t(58),u=t(45),h=t(485),j=t(480),g=t(5);const b={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},e=>{let{getFieldValue:s}=e;return{validator:(e,t)=>t&&s("password")!==t?Promise.reject("Passwords do not match!"):Promise.resolve()}}]},p={showAuthMessage:d.c,hideAuthMessage:d.b,showLoading:d.d,authenticated:d.a};s.a=Object(r.b)((e=>{let{auth:s}=e;const{loading:t,message:a,showMessage:r,token:i,redirect:c}=s;return{loading:t,message:a,showMessage:r,token:i,redirect:c}}),p)((e=>{const{showLoading:s,token:t,loading:r,redirect:p,message:x,showMessage:O,hideAuthMessage:f,authenticated:w,allowRedirect:v}=e,[y]=n.a.useForm();let N=Object(u.g)();return Object(a.useEffect)((()=>{null!==t&&v&&N.push(p),O&&setTimeout((()=>{f()}),3e3)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(g.jsx)(l.a,{type:"error",showIcon:!0,message:x})}),Object(g.jsxs)(n.a,{form:y,layout:"vertical",name:"register-form",onFinish:()=>{y.validateFields().then((e=>{s();j.a.signUp(e).then((e=>{w("fakeToken")})).then((e=>{Object(d.c)(e)}))})).catch((e=>{console.log("Validate Failed:",e)}))},children:[Object(g.jsx)(n.a.Item,{name:"email",label:"Email",rules:b.email,hasFeedback:!0,children:Object(g.jsx)(o.a,{prefix:Object(g.jsx)(i.a,{className:"text-primary"})})}),Object(g.jsx)(n.a.Item,{name:"password",label:"Password",rules:b.password,hasFeedback:!0,children:Object(g.jsx)(o.a.Password,{prefix:Object(g.jsx)(c.a,{className:"text-primary"})})}),Object(g.jsx)(n.a.Item,{name:"confirm",label:"ConfirmPassword",rules:b.confirm,hasFeedback:!0,children:Object(g.jsx)(o.a.Password,{prefix:Object(g.jsx)(c.a,{className:"text-primary"})})}),Object(g.jsx)(n.a.Item,{children:Object(g.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:r,children:"Sign Up"})})]})]})}))},548:function(e,s,t){"use strict";t.r(s);t(0);var a=t(493),r=t(507),i=t(508),c=t(40),n=t(5);const l={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};s.default=e=>{const s=Object(c.d)((e=>e.theme.currentTheme));return Object(n.jsx)("div",{className:"h-100 "+("light"===s?"bg-white":""),children:Object(n.jsxs)(r.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(n.jsx)(i.a,{xs:20,sm:20,md:24,lg:16,children:Object(n.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(n.jsx)(r.a,{justify:"center",children:Object(n.jsxs)(i.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(n.jsx)("h1",{children:"Sign Up"}),Object(n.jsxs)("p",{children:["Already have an account? ",Object(n.jsx)("a",{href:"/auth/login-2",children:"Sign In"})]}),Object(n.jsx)("div",{className:"mt-4",children:Object(n.jsx)(a.a,{...e})})]})})})}),Object(n.jsx)(i.a,{xs:0,sm:0,md:0,lg:8,children:Object(n.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(n.jsx)("div",{className:"text-right",children:Object(n.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(n.jsx)(r.a,{justify:"center",children:Object(n.jsxs)(i.a,{xs:0,sm:0,md:0,lg:20,children:[Object(n.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-19.png",alt:""}),Object(n.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(n.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(n.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Term & Conditions"}),Object(n.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(n.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=13.9f11c396.chunk.js.map