import{u as x,r as p,j as e,C as j,c as I,A as w,b as g,a as y,d as v,N as b,H as N}from"./index-BxYHan_h.js";function C(){const u=x(),s=p.useRef(null),i=p.useRef(null),r=p.useRef(null),d=p.useRef(null),m="https://kikin.dev/api/users",h=()=>{var o,l,n;let a=!0;const t={title:"Sign In Form Error",body:"",type:w.warning,show:!1};return(o=s.current)!=null&&o.value||(a=!1,t.body+=`Name is required
`),((l=d.current)==null?void 0:l.value)!==((n=r.current)==null?void 0:n.value)&&(a=!1,t.body+=`Passwords don't match
`),a||(t.show=!0,u(g.setAlert(t))),a},f=async a=>{var t,o,l;if(a.preventDefault(),!!h())try{const n=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:(t=s.current)==null?void 0:t.value,email:(o=i.current)==null?void 0:o.value,password:(l=r.current)==null?void 0:l.value})}),c=await n.json();c.image=null,c.token=n.headers.get("x-auth-token"),u(I.login(c)),console.log(c)}catch(n){console.error(n)}};return e.jsxs(j,{children:[e.jsx("header",{children:e.jsx("h1",{children:"Sign In"})}),e.jsx("div",{className:"form-container",children:e.jsxs("form",{onSubmit:f,autoComplete:"off",children:[e.jsxs("div",{className:"input-container",children:[e.jsx("label",{htmlFor:"nameInput",children:"Name "}),e.jsx("input",{type:"text",id:"nameInput","data-testid":"nameInput",placeholder:"Insert your name",ref:s,required:!0,minLength:2,pattern:"^[a-zA-Z]{2,}",title:"Must contain at least 2 characters (no numbers)"})]}),e.jsxs("div",{className:"input-container",children:[e.jsx("label",{htmlFor:"usernameInput",children:"Email "}),e.jsx("input",{type:"email",id:"usernameInput","data-testid":"usernameInput",placeholder:"Insert your email",ref:i,required:!0})]}),e.jsxs("div",{className:"input-container",children:[e.jsx("label",{htmlFor:"passwordInput",children:"Password "}),e.jsx("input",{type:"password",id:"passwordInput","data-testid":"passwordInput",placeholder:"Insert your password",ref:r,minLength:5,required:!0})]}),e.jsxs("div",{className:"input-container",children:[e.jsx("label",{htmlFor:"passwordConfirmInput",children:"Confirm Password "}),e.jsx("input",{type:"password",id:"passwordConfirmInput","data-testid":"passwordConfirmInput",placeholder:"Confirm your password",ref:d,minLength:5,required:!0})]}),e.jsx("div",{className:"submit-container",children:e.jsx("button",{type:"submit","data-testid":"submitButton",children:"Sign In"})})]})})]})}function R(){var i,r;const u=y(d=>d.auth.authData),s=v();return(r=(i=s.state)==null?void 0:i.from)!=null&&r.pathname,u.token?e.jsx(b,{to:"/",state:{from:s},replace:!0}):e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx("title",{children:"Kanban App - Sign In"})}),e.jsx("div",{children:e.jsx(C,{})})]})}export{R as default};
