(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{18:function(e,a,t){},19:function(e){e.exports=JSON.parse('[{"id":1,"name":"Tawanda","surname":"Muzanenhamo","occupation":"ELectrical and Computer Engineer","university":"University of Cape Town","email":"tmuzanenhamo14@gmail.com","location":"Cape Town","bio":"Facing the crossroads of different career paths, in several different fields I was passionate about, was the most impossible task I\'ve had to do. I was that guy, in school, who got so into it during History class debates, that I would yell \\"Objection!!\\" before going full Harvey Specter on people, and yet would, for instance, do completely different experiments from everyone else during Science class because I found investigating the workings of the world something incredibly fascinating. Engineering became a perfect fit for me when I realised that I could bring everything that I am to my work in this field: my love for Art, Mathematics, Physics, Anatomy, Programming and so forth. This choice was further fostered by my experiences doing outreaches to different communities during my gap year, which gave me a better perspective on how I can marry innovation and the betterment of life for mankind. I believe going down this path will allow me to make a significant impact on the world and live for something more than just myself."}]')},23:function(e,a,t){e.exports=t.p+"static/media/image22.e2117f2e.jpg"},40:function(e,a,t){e.exports=t.p+"static/media/image3.5dc5dfbe.jpg"},44:function(e,a,t){e.exports=t(86)},81:function(e,a,t){e.exports=t.p+"static/media/Me.6d4a4c1a.jpg"},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(37),c=t.n(l),s=t(7),o=t(12),i=(t(18),t(13)),m=t(14),u=t(16),d=t(15),p=t(17),h=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("nav",{class:"navbar navbar-expand-lg fixed-top navbar-light"},r.a.createElement(s.b,{class:"navbar-brand",to:"/"},"Tawanda"),r.a.createElement("button",{class:"navbar-toggler ",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav ml-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement(s.b,{class:"nav-link",to:"/"}," Home ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{class:"nav-link",to:"/About"},"About")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{class:"nav-link",to:"/Blog"},"Blog")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{class:"nav-link",to:"/Projects"},"Projects")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{class:"nav-link",to:"/Contact"},"Contact"))))))}}]),a}(n.Component),g=t(40),E=t.n(g),b=t(19),v=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"card"},r.a.createElement("img",{src:E.a,alt:"Logo"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"centered"},b.map((function(e){return r.a.createElement("h1",null," Hi I'm ",e.name," Muzanenhamo")})),r.a.createElement("p",null,"I'm an Electrical and Computer Engineering student from the renowned University of Cape Town "))))}}]),a}(n.Component),f=t(23),y=t.n(f),w=function(){return r.a.createElement("div",{class:"wine-row"},r.a.createElement("img",{src:y.a,alt:""}),r.a.createElement("div",{class:"wine-text-container"},b.map((function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},e.name," ",e.surname),r.a.createElement("br",null),r.a.createElement("p",{className:"p"},e.bio," "))}))))},j=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 "),"NOT FOUND"),r.a.createElement("p",null,"Sorry I'm getting it fixed"))},x=t(26),O=t.n(x),N=t(21),C=t(41),k=t.n(C)()("0ba8907ca06e87ef632cffe6981ba5e9ce29ada1"),S=t(20),I=t.n(S),M=(t(81),function(e){var a=e.author.profile_image;return r.a.createElement("div",{className:"post-snippet"},r.a.createElement("h3",null,r.a.createElement(s.b,{to:{pathname:"/blog/".concat(e.slug),state:e}},e.title," ")),r.a.createElement("img",{src:a,alt:""}),r.a.createElement("p",null,e.summary),r.a.createElement("div",null,r.a.createElement("div",null,"By ",r.a.createElement("strong",null,e.author.first_name," ",e.author.last_name)),r.a.createElement("span",{className:"publication-date"},"Published on"," ",I()(e.published).format("YYYY-MM-DD"))))}),_=function(){var e=Object(n.useState)(!1),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(N.a)(c,2),o=s[0],i=s[1],m=Object(n.useState)(null),u=Object(N.a)(m,2),d=u[0],p=u[1];Object(n.useEffect)((function(){!function(){var e;O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return l(!0),i(!1),a.prev=2,a.next=5,O.a.awrap(k.post.list({page:1,page_size:10}));case 5:e=a.sent,p(e.data),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),i("There was an error: ".concat(a.t0.message));case 12:l(!1);case 13:case"end":return a.stop()}}),null,null,[[2,9]])}()}),[]);return r.a.createElement("div",null,r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"centered"}),r.a.createElement("h1",{className:"blog-h"},"Welcome to my Blog"),t?r.a.createElement("p",null,"Fetching posts..."):o?r.a.createElement("p",null,o):d?r.a.createElement("div",null,d.data.map((function(e,a){return r.a.createElement(M,Object.assign({},e,{key:a}))}))):null)))},B=t(42),T=t(43),A=t(88),Y=t(89),P=t(90),D=t(91),F=t(92),H=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",subject:"",email:"",message:""},t.onChange=function(e){return t.setState(Object(B.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault();var a=t.state,n=(a.name,{from_name:a.email,to_name:"tawasdev@gmail.com",subject:a.subject,message_html:a.message});T.send("gmail","template_pryDoQAO",n,"user_Oj5ZGLSxIsYM8WagnxPBt"),t.resetForm()},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.subject,n=e.email,l=e.message;return r.a.createElement("div",{class:"wine-row"},r.a.createElement("div",{class:"wine-text-container"},r.a.createElement("h1",{className:"p-heading1"},"Get in Touch"),r.a.createElement(A.a,{onSubmit:this.onSubmit},r.a.createElement(Y.a,{controlId:"formBasicEmail"},r.a.createElement(P.a,{className:"text-muted"},"Email address"),r.a.createElement(D.a,{type:"email",name:"email",value:n,className:"text-primary",onChange:this.onChange,placeholder:"Enter email"})),r.a.createElement(Y.a,{controlId:"formBasicName"},r.a.createElement(P.a,{className:"text-muted"},"Name"),r.a.createElement(D.a,{type:"text",name:"name",value:a,className:"text-primary",onChange:this.onChange,placeholder:"Name"})),r.a.createElement(Y.a,{controlId:"formBasicSubject"},r.a.createElement(P.a,{className:"text-muted"},"Subject"),r.a.createElement(D.a,{type:"text",name:"subject",className:"text-primary",value:t,onChange:this.onChange,placeholder:"Subject"})),r.a.createElement(Y.a,{controlId:"formBasicMessage"},r.a.createElement(P.a,{className:"text-muted"},"Message"),r.a.createElement(D.a,{type:"textarea",name:"message",className:"text-primary",value:l,onChange:this.onChange})),r.a.createElement(F.a,{variant:"primary",type:"submit"},"Submit"))))}}]),a}(n.Component),z=function(e){var a=e.location.state;return r.a.createElement("div",{className:"post"},r.a.createElement("h1",null,a.title),r.a.createElement("hr",null),r.a.createElement("div",{className:"author"},r.a.createElement("img",{src:a.author.profile_image,alt:"Author"}),r.a.createElement("div",null,"Published by"," ",r.a.createElement("strong",null,a.author.first_name," ",a.author.last_name)," "," on "," ",I()(a.published).format("MMMM Do, YYYY"))),r.a.createElement("hr",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.body}}),r.a.createElement("hr",null),r.a.createElement(s.b,{to:"/blog"},"\u2190 Back to the posts list"))};var L=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:v}),r.a.createElement(o.a,{exact:!0,path:"/About",component:w}),r.a.createElement(o.a,{exact:!0,path:"/Blog",component:_}),r.a.createElement(o.a,{exact:!0,path:"/Contact",component:H}),r.a.createElement(o.a,{path:"/blog/:slug",render:z}),r.a.createElement(o.a,{component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(84),t(85);c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.ef1e76f4.chunk.js.map