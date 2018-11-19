(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(12),i=n.n(r),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=n(4),d=n(5),u=n(7),p=n(6),f=n(8),h=n(3),g=n(39),m=n(23),b=n(40),v=n(24),w=n(11),y=n(18),O=n.n(y),k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleKeyUp=function(e){var t=e.target;"Enter"===e.key&&(n.props.onEnter(t.value),t.value="",t.focus())},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("input",{onKeyUp:this.handleKeyUp,placeholder:"Add to-do"})}}]),t}(o.Component),j=h.b.section.withConfig({displayName:"Todo__Wrapper",componentId:"jl6g4n-0"})(["display:flex;align-items:center;padding:0 20px;background:linear-gradient(#ddd,#efefef,#eee);.done{text-decoration:line-through;}"]),T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onToggle,o=e.onDelete,r=e.done;return a.a.createElement(j,null,a.a.createElement("span",{className:r?"done":"",onClick:n},t)," ",a.a.createElement("span",{onClick:o},"\xd7"))}}]),t}(o.Component),x=h.b.section.withConfig({displayName:"Separator__Wrapper",componentId:"emza5h-0"})(["display:flex;align-items:center;background:",";"],function(e){return e.background||"white"}),E=h.b.span.withConfig({displayName:"Separator__Text",componentId:"emza5h-1"})(["white-space:nowrap;"]),D=h.b.div.withConfig({displayName:"Separator__Line",componentId:"emza5h-2"})(["width:100%;margin:0 10px;border-bottom:","px solid deeppink;"],function(e){return e.width||4}),C=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(x,null,a.a.createElement(D,{width:2}),a.a.createElement(E,null,this.props.text),a.a.createElement(D,{width:2}))}}]),t}(o.Component),S=h.b.div.withConfig({displayName:"ProgressBar",componentId:"sc-1wj9g6f-0"})(["background:cornflowerblue;height:","px;&::after{content:'';height:","px;display:block;width:","%;background:deeppink;transition:width 0.3s ease;}"],function(e){return e.height||5},function(e){return e.height||5},function(e){return 100*e.percentage}),N=h.b.section.withConfig({displayName:"Home__Wrapper",componentId:"sc-5c1dcc-0"})(["display:grid;grid-template-rows:4px 40px;grid-auto-rows:32px;"]),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={todos:n.load()},n.addTodo=function(e){n.setState({todos:[{text:e,done:!1,id:O()()}].concat(Object(w.a)(n.state.todos))})},n.toggleTodo=function(e){var t=n.state.todos,o=t.findIndex(function(t){return t.id===e}),a=t[o];n.setState({todos:Object(w.a)(t.slice(0,o)).concat([Object(v.a)({},a,{done:!a.done})],Object(w.a)(t.slice(o+1)))})},n.deleteTodo=function(e){var t=n.state.todos,o=t.findIndex(function(t){return t.id===e});n.setState({todos:Object(w.a)(t.slice(0,o)).concat(Object(w.a)(t.slice(o+1)))})},n.renderSingleTodo=function(e){return a.a.createElement(T,{key:e.id,text:e.text,done:e.done,onToggle:function(){return n.toggleTodo(e.id)},onDelete:function(){return n.deleteTodo(e.id)}})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"renderOpenTodos",value:function(){return this.state.todos.filter(function(e){return!e.done}).map(this.renderSingleTodo)}},{key:"renderDoneTodos",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{text:"DONE"}),this.state.todos.filter(function(e){return e.done}).map(this.renderSingleTodo))}},{key:"determineProgress",value:function(){var e=this.state.todos;return e.filter(function(e){return e.done}).length/e.length}},{key:"render",value:function(){return this.save(),a.a.createElement(N,null,a.a.createElement(S,{percentage:this.determineProgress()}),a.a.createElement(k,{onEnter:this.addTodo}),a.a.createElement(C,{text:"TODO"}),this.renderOpenTodos(),this.props.showDoneTodos&&this.renderDoneTodos())}},{key:"save",value:function(){localStorage.setItem("todo-app--todos",JSON.stringify(this.state.todos))}},{key:"load",value:function(){try{return JSON.parse(localStorage.getItem("todo-app--todos"))||[]}catch(e){return[]}}}]),t}(o.Component),_=h.b.button.withConfig({displayName:"ToggleButton__Wrapper",componentId:"sc-13hn431-0"})(["color:deeppink;background:linear-gradient(#eee,#fff,#fff);&.active{color:white;background:deeppink;}"]),W=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={isDefault:null==n.props.isDefault||n.props.isDefault,lastPropsIsDefault:n.props.isDefault},n.handleToggle=function(){n.setState({isDefault:!n.state.isDefault}),n.props.onClick()},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.defaultText,n=e.alternativeText,o=this.state.isDefault;return a.a.createElement(_,{className:o?"":"active",onClick:this.handleToggle},o?t:n)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.lastPropsIsDefault===e.isDefault?null:{isDefault:e.isDefault,lastPropsIsDefault:e.isDefault}}}]),t}(o.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showDoneTodos,n=e.onToggle;return a.a.createElement("section",null,a.a.createElement("h2",null,"Config"),a.a.createElement(W,{defaultText:"Hide done todos",alternativeText:"Show done todos",isDefault:t,onClick:n}))}}]),t}(o.Component),P=h.b.section.withConfig({displayName:"App__Wrapper",componentId:"sc-3zx0eo-0"})(["display:grid;grid-template-rows:auto 50px;height:100vh;nav{display:flex;}a:any-link{display:flex;align-items:center;justify-content:center;text-decoration:none;color:black;width:100%;background:#efefef;&:first-child{border-right:1px solid white;}&.active{background:deeppink;color:white;}}"]),U=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={showDoneTodos:!0},n.toggleShowDoneTodos=function(){n.setState({showDoneTodos:!n.state.showDoneTodos})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.a,null,a.a.createElement(P,null,a.a.createElement(m.a,{exact:!0,path:"/",render:function(){return a.a.createElement(I,{showDoneTodos:e.state.showDoneTodos})}}),a.a.createElement(m.a,{path:"/config",render:function(){return a.a.createElement(A,{showDoneTodos:e.state.showDoneTodos,onToggle:e.toggleShowDoneTodos})}}),a.a.createElement("nav",null,a.a.createElement(b.a,{exact:!0,activeClassName:"active",to:"/"},"Home"),a.a.createElement(b.a,{activeClassName:"active",to:"/config"},"Config"))))}}]),t}(o.Component),z=n(22);function B(){var e=Object(z.a)(["\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return B=function(){return e},e}var F=Object(h.a)(B());i.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null),a.a.createElement(F,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");c?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[26,2,1]]]);
//# sourceMappingURL=main.583d2972.chunk.js.map