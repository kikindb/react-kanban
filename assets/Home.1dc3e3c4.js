import{r as g,j as m,b as e,a as $,F as b,H,L as N}from"./index.a57b6b54.js";import{T as d,p as E,g as S}from"./tasks.service.d9920463.js";const A={width:0,height:0,halfWidth:0,halfHeight:0};function v(i){const{data:n}=i,s=g.exports.useRef(null),[a,u]=g.exports.useState(A),[h,r]=g.exports.useState(""),c=o=>{o.dataTransfer.setData("text/plain",n.id),o.dataTransfer.effectAllowed="move",setTimeout(()=>{var l;(l=s.current)==null||l.classList.add("hide")},0)},f=o=>{o.preventDefault(),o.stopPropagation();const l=o.nativeEvent.offsetX,D=o.nativeEvent.offsetY,x=18,k=(l-a.halfWidth)/a.halfWidth*x,C=(D-a.halfHeight)/a.halfHeight*x;r(`rotateX(${k}deg) rotateY(${C}deg)`)},t=()=>{r("")},p=o=>{var l;(l=s.current)==null||l.classList.remove("hide")};return g.exports.useEffect(()=>{const{width:o,height:l}=s.current.getBoundingClientRect();u({width:o,height:l,halfWidth:o/2,halfHeight:l/2})},[]),m("div",{id:n.id,className:"card-container",onDragStart:c,onDragEnd:p,draggable:!0,onMouseMove:f,onMouseLeave:t,ref:s,style:{transform:h},children:[e("div",{className:"card-title",children:e("h2",{children:n.title})}),e("div",{className:"card-body",children:e("p",{children:n.body})}),e("div",{className:"card-footer",children:m("p",{children:[n.author," - ",n.createdAt.slice(0,10)]})})]})}function T(i){const{id:n,title:s,color:a,children:u}=i;return m("div",{id:n,style:{backgroundColor:a},className:"column-container",children:[e("div",{className:"column-title",children:s}),e("div",{className:"column-body",children:u})]})}function y(i){const n=$(t=>t.auth.authData),{kanbanTasks:s}=i,[a,u]=g.exports.useState(null),h="droppable",r=t=>{t.preventDefault(),t.dataTransfer&&t.dataTransfer.types[0]==="text/plain"&&a!==+t.currentTarget.id.replace("column-","")&&(console.log(t),u(+t.currentTarget.id.replace("column-","")),console.log("DRAGOVERHANDLER....."))},c=t=>{t.preventDefault();const p=t.dataTransfer.getData("text/plain"),o=s.filter(D=>D.id==p);if(o[0].status===a){u(null);return}console.log("dropHandler:"),console.log(`dropped: task with id: ${p} in ${t.currentTarget.id}`),console.log(t),console.log("..........");const l=n.token;console.log({patchedTask:o}),o[0].status=a!=null?a:0,E(o[0],l),u(null)},f=t=>{t.preventDefault(),console.log("DragLeave")};return m("div",{className:"kanban-container",children:[e(T,{id:"x0",title:"To Do",color:"#FDC974",children:e("div",{id:`column-${d.todo}`,className:`column-item todo-container ${a===d.todo?h:""}`,onDragOver:r,onDrop:c,onDragLeave:f,children:s.map(t=>{if(t.status===d.todo)return e(v,{data:t},t.id)})})}),e(T,{id:"x1",title:"Doing",color:"#f98468",children:e("div",{id:`column-${d.doing}`,className:`column-item todo-container ${a===d.doing?h:""}`,onDragOver:r,onDrop:c,onDragLeave:f,children:s.map(t=>{if(t.status===d.doing)return e(v,{data:t},t.id)})})}),e(T,{id:"x3",title:"Done",color:"#fa3463",children:e("div",{id:`column-${d.done}`,className:`column-item todo-container ${a===d.done?h:""}`,onDragOver:r,onDrop:c,onDragLeave:f,children:s.map(t=>{if(t.status===d.done)return e(v,{data:t},t.id)})})}),a!==null&&e("div",{className:`trash-container ${a===d.deleted?h:""}`,id:`column-${d.deleted}`,onDragOver:r,onDrop:c,onDragLeave:f})]})}function L(){const i=$(r=>r.auth.authData),[n,s]=g.exports.useState([]),[a,u]=g.exports.useState(!0),h=async r=>{const c=await S(i.token,r);console.log("useTasks()"),console.log(c),s(c),u(!1)};return g.exports.useEffect(()=>{const r=new AbortController,c=r.signal;return h(c),()=>{console.log("Cancelling request..."),r.abort()}},[]),[n,a]}function K(){console.log("rendering Home...");const[i,n]=L();return g.exports.useEffect(()=>{},[L]),m(b,{children:[e(H,{children:e("title",{children:"Kanban App - Home"})}),n?m(b,{children:[e(H,{children:e("title",{children:"Kanban App - Loading..."})}),e(N,{})]}):e("div",{children:e(y,{kanbanTasks:i})})]})}export{K as default};