(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{137:function(e,t,n){e.exports=n(221)},182:function(e,t){},219:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);n(138);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),i=n(65),l=n(12),u=function(){return r.a.createElement("div",{id:"Header"})},s=function(){return r.a.createElement("div",{id:"Footer"})},m=n(17),d=n(18),p=n(231),f=n(223),b=n(136),E=n(45),g=[{name:"Home",id:"banner"},{name:"About Me",id:"about"},{name:"What I can do",id:"skill"},{name:"My Works",id:"work"},{name:"Contact Me",id:"contact"}];function h(){var e=Object(m.a)(["\n    position: stick;\n    &:hover,&.active {\n    text-decoration: underline;\n    }\n"]);return h=function(){return e},e}var v=Object(d.a)(E.Link)(h()),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement(f.a,null,r.a.createElement(p.a.Brand,{href:"/"},"Luke Gong"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},g.map((function(e,t){return r.a.createElement(v,{key:t,to:e.id,spy:!0,smooth:!0,duration:500,offset:-400,className:"nav-link",href:"#"},e.name)})))))))},j=n(5),x=n.n(j),k=n(9),O=n(8),y=n(229),S=n(224);function N(){var e=Object(m.a)(["\n    & .gallery_image{\n        display: block;\n        width: 100%;\n        height: auto;\n        -webkit-filter: grayscale(50%);\n        filter: grayscale(50%);\n    }\n"]);return N=function(){return e},e}function C(){var e=Object(m.a)(["\n    position: relative;\n    margin: 0 auto;\n    margin-top: 10px;\n    width: 250px;\n    height: 200px;\n    overflow: hidden;\n    \n    & .gallery_image{\n        display: block;\n        width: 100%;\n        height: auto;\n        -webkit-filter: grayscale(50%);\n        filter: grayscale(50%);\n    }\n"]);return C=function(){return e},e}function F(){var e=Object(m.a)(["\n    border: 1px solid;\n"]);return F=function(){return e},e}function L(){var e=Object(m.a)(["\n    filter: grayscale(50%);\n"]);return L=function(){return e},e}function P(){var e=Object(m.a)(["\n\n    &.resume a:hover{\n        color: #4285f4;\n    }\n    &.github a:hover{\n        color: #6e5494;\n    }\n    &.linkedin a:hover{\n        color: #4285f4;\n    }\n"]);return P=function(){return e},e}function A(){var e=Object(m.a)(["\n    display: inline-block;\n    font-size: 50px;\n    font-weight: 100;\n    padding: 10px 0;\n    margin-bottom: 44px;\n    text-align: center;\n    border-bottom: solid 1px #ccc;\n    border-top: solid 1px #ccc;\n    text-transform: uppercase;\n    line-height: 1.2;\n"]);return A=function(){return e},e}function M(){var e=Object(m.a)(["\n    background: #222222;\n    color: #fff;\n    background-image: -webkit-linear-gradient(top, #555555 0%, #333333 100%);\n    background-image: linear-gradient(to bottom, #555555 0%, #333333 100%);\n    background-repeat: repeat-x;\n"]);return M=function(){return e},e}function I(){var e=Object(m.a)(['\n    position: relative;\n    padding-top: 60px;\n    padding-bottom: 60px;\n    text-align: center;\n    &.text-gradient{\n        background: #222222;\n        color: #fff;\n        background-image: -webkit-linear-gradient(top, #555555 0%, #333333 100%);\n        background-image: linear-gradient(to bottom, #555555 0%, #333333 100%);\n        background-repeat: repeat-x;\n    }\n    &.skillList{\n        & .icon{\n            color: #aaa;\n            font-size: 60px;\n            text-align: center;\n            text-shadow: 5px 5px 0 #333;\n        }\n        & p{\n            font-size: 15px;\n            text-align: left;\n            &.lead{\n                font-size: 1.25rem;\n                font-weight: 300;\n                text-align: center;\n            }\n        }\n        & h3{\n            margin-top: 22px;\n            margin-bottom: 22px;\n            font-family: "Roboto Slab", serif;\n            font-weight: 500;\n            line-height: 1.1;\n            color: inherit;\n        }\n    }\n']);return I=function(){return e},e}function _(){var e=Object(m.a)(['\n    text-align: center;\n    & .tab-content{\n        font-size: 15px;\n        text-align: left;\n    }\n    & h3, .h4{\n        font-family: "Roboto Slab", serif;\n        font-weight: 500;\n        line-height: 1.1;\n        color: inherit;\n        margin-top: 22px;\n        margin-bottom: 22px;\n        font-size: 1.75rem;\n    }\n']);return _=function(){return e},e}var R=Object(d.a)(y.a)(_()),z=d.a.section(I()),T=(Object(d.a)(z)(M()),d.a.h2(A())),q=d.a.span(P()),U=d.a.img(L()),W=Object(d.a)(S.a)(F()),D=d.a.div(C()),V=d.a.div(N()),B=n(225),G=n(130),H=function(e){var t=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement(G.a,{sm:"12",className:"text-left"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("p",null,"Interested me? Click ",r.a.createElement(E.Link,{to:"contact",smooth:!0,href:"#"},"Here")," to know more about me!"))))},K=function(e){var t=e.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement(U,{src:"".concat(t||"./assets/images/personal.jpg"),width:"30%",className:"image img-fluid img-circl mx-auto d-block",alt:"This is me"})))},J=n(47),Y=n(31),Z=n(71),$=n(32);function Q(){var e=Object(m.a)(["\n    &.profile{\n            padding-top: 10px;\n        & a{\n            color: #666;\n        }\n    }\n    \n"]);return Q=function(){return e},e}var X=Object(d.a)(G.a)(Q());Y.b.add(Z.a,$.b);var ee=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(O.a)(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/socials");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),u(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l?r.a.createElement(r.a.Fragment,null,n.map((function(e,t){return r.a.createElement(B.a,{key:t},r.a.createElement(X,{className:"profile mx-auto d-block"},r.a.createElement(q,{className:e.id},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(J.a,{icon:[e.iconType,e.icon],size:e.size})," ",e.name))))}))):r.a.createElement(r.a.Fragment,null,"loading...")},te=function(e){var t=e.title,n=e.description,a=e.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(z,{id:"about"},r.a.createElement(T,null,t),r.a.createElement(H,{description:n}),r.a.createElement(K,{image:a}),r.a.createElement(ee,null))))},ne=n(49),ae=n(72),re=n(56),ce=n(55),oe=n(6),ie=n(88),le=n(42);window.THREE=oe,window.OrbitControls=ie.a,window.TWEEN=le.a;var ue=function(e){Object(re.a)(n,e);var t=Object(ce.a)(n);function n(){return Object(ne.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){var e,t,n,a,r,c,o,i=window.innerWidth,l=window.innerHeight,u=new oe.Clock,s=10,m=3500,d=500,p=function(){i=window.innerWidth,l=window.innerHeight,e.aspect=i/l,e.updateProjectionMatrix(),a.setSize(i,l)},f=function(){var e=new oe.PlaneBufferGeometry(100,100),t=new oe.MeshPhongMaterial({color:11184810}),a=new oe.Mesh(e,t);a.position.set(0,-300,0),a.rotation.x=-Math.PI/2,a.scale.set(100,100,100),a.castShadow=!1,a.receiveShadow=!0,n.add(a),(new oe.FontLoader).load("../../assets/lib/fonts/optimer_regular.typeface.json",(function(e){var t=new oe.TextGeometry("Luke Gong",{font:e,size:50,height:10,curveSegments:12,bevelThickness:2,bevelSize:1,bevelEnabled:!0});t.computeBoundingBox(),c=-.5*(t.boundingBox.max.x-t.boundingBox.min.x);var a=new oe.MeshPhongMaterial({color:12632256,specular:16777215}),r=new oe.Mesh(t,a);r.position.x=c,r.position.y=250,r.castShadow=!0,r.receiveShadow=!0,n.add(r),g(r)})),E("all")},b=function(){var r=u.getDelta();le.a.update(),t.update(r),a.clear(),a.render(n,e)},E=function(e,t,a,r,c,o,i,l){(new oe.ObjectLoader).load("../../assets/models/banner_parts/"+e+".json",(function(e){e.scale.set(40,40,40),e.position.set(0,-300,0),e.rotation.y=-Math.PI/2,e.traverse((function(e){e instanceof oe.Mesh&&(e.castShadow=!0,e.receiveShadow=!0)})),n.add(e)}))},g=function(e){var t=function(){e.position.x=n.x+c,e.position.y=n.y+250},n={x:-s,y:-70};le.a.removeAll();var a=new le.a.Tween(n).to({x:+s,y:70},m).delay(d).easing(le.a.Easing.Elastic.Out).onUpdate(t),r=new le.a.Tween(n).to({x:-s,y:-70},m).delay(d).easing(le.a.Easing.Elastic.Out).onUpdate(t);a.chain(r),r.chain(a),a.start()};o=this.mount,(e=new oe.PerspectiveCamera(23,i/l,10,4e3)).position.set(0,50,2500),(n=new oe.Scene).fog=new oe.Fog(4013373,1e3,4e3),(r=new oe.SpotLight(16777215)).position.set(0,1500,1e3),r.target.position.set(0,0,0),r.castShadow=!0,r.shadow=new oe.LightShadow(new oe.PerspectiveCamera(50,1,1200,2500)),r.shadow.bias=1e-4,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=1024,n.add(r),f(),(a=new oe.WebGLRenderer({antialias:!0})).setClearColor(n.fog.color),a.setPixelRatio(window.devicePixelRatio),a.setSize(i,l),a.autoClear=!1,o.appendChild(a.domElement),a.shadowMap.enabled=!0,a.shadowMap.type=oe.PCFShadowMap,(t=new ie.a(e,a.domElement)).enableZoom=!1,t.minPolarAngle=0,t.maxPolarAngle=Math.PI/2,window.addEventListener("resize",p,!1),function e(){requestAnimationFrame(e),b()}()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"banner",ref:function(t){return e.mount=t}})}}]),n}(r.a.Component),se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null,r.a.createElement("p",{className:"lead"},"Would you like to know more or just discuss something?"),r.a.createElement(E.Link,{to:"contact",smooth:!0,href:"#",className:"btn btn-light btn-lg"},"Contact me")))};Y.b.add(Z.a,$.a,$.d);var me=function(e){var t=e.title,n=Object(a.useState)({}),c=Object(O.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(O.a)(l,2),s=u[0],m=u[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/skills");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n),m(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{id:"skill",className:"text-gradient skillList"},r.a.createElement(f.a,null,r.a.createElement(T,null,t),r.a.createElement(B.a,null,o.map((function(e,t){return r.a.createElement(G.a,{md:"4",key:t},r.a.createElement(J.a,{className:"icon",icon:[e.iconType,e.icon],size:e.size}),r.a.createElement("h3",{className:"heading"},e.name),r.a.createElement("p",null,e.content))}))),r.a.createElement("hr",null),r.a.createElement(se,null)))):r.a.createElement(r.a.Fragment,null,"Loading...")},de=n(89),pe=n.n(de),fe=n(226),be=n(227),Ee=n(228),ge=function(){var e={name:"",image:"",description:"",contribution:"",percentage:"",link:""},t=Object(a.useState)({}),n=Object(O.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)({}),l=Object(O.a)(i,2),u=l[0],s=l[1],m=Object(a.useState)({}),d=Object(O.a)(m,2),p=d[0],f=d[1],b=Object(a.useState)(!1),E=Object(O.a)(b,2),g=E[0],h=E[1],v=Object(a.useState)(e),w=Object(O.a)(v,2),j=w[0],S=w[1],N=Object(a.useState)(!1),C=Object(O.a)(N,2),F=C[0],L=C[1];Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n,a,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/projects");case 2:return t=e.sent,e.next=5,fetch("api/projectlist");case 5:return n=e.sent,e.next=8,t.json();case 8:return a=e.sent,e.next=11,n.json();case 11:r=e.sent,c=r.sort((function(e,t){return e.type>t.type?1:-1})),o(a),s(c),f(a),L(!0);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(e){var t=e.target.getAttribute("data-index");S((function(){return c.find((function(e){return e._id===t}))})),h(!0)},A=function(e){var t=e.target.value,n=u.map((function(e){return e.isChecked=e.type===t,e}));s(n),f((function(){return c.filter((function(e){return e.type.indexOf(t)>=0}))}))};return F?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement(G.a,{md:"12",className:"button-group filters-button-group"},u.map((function(e,t){return r.a.createElement(W,{key:t,value:e.type,className:"btn-light ".concat(e.isChecked?"active":""),onClick:A},e.name)})))),r.a.createElement("div",{className:"mt-5"}),r.a.createElement(B.a,null,p.map((function(e,t){return r.a.createElement(G.a,{key:t,lg:"3",md:"4",sm:"6",xs:"12"},r.a.createElement(D,null,r.a.createElement("img",{onClick:P,style:{cursor:"pointer"},"data-index":e._id,src:e.image,className:"img-responsive gallery_image",alt:""})),r.a.createElement("hr",null),r.a.createElement("h6",{className:"galley_title"},e.name))}))),r.a.createElement(R,{show:g,onHide:function(){S((function(){return e})),h(!1)},size:"lg",centered:!0,scrollable:!0},r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,null,j.name)),r.a.createElement(y.a.Body,null,r.a.createElement(B.a,{className:"justify-content-md-center"},r.a.createElement(V,null,r.a.createElement("img",{src:j.image,className:"gallery_image",alt:""}))),r.a.createElement(B.a,null,r.a.createElement(G.a,{md:"12"},r.a.createElement("h3",null,j.name),r.a.createElement(fe.a,{className:"tab-content",defaultActiveKey:"description",transition:!1,id:"noanim-tab-example"},r.a.createElement(be.a,{eventKey:"description",title:"Description"},pe()(j.description)),r.a.createElement(be.a,{eventKey:"contribution",title:"Contribution"},pe()(j.contribution))),r.a.createElement(Ee.a,{now:j.percentage,label:"".concat(j.percentage,"%")}),r.a.createElement("br",null),r.a.createElement("div",{className:"bg-inverse text-white"},r.a.createElement("a",{href:j.link,type:"button",rel:"noopener noreferrer",target:"_blank"},"See Project"))))))):r.a.createElement(r.a.Fragment,null,"Loading...")},he=function(e){var t=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{id:"work",className:"myworks"},r.a.createElement(f.a,null,r.a.createElement(T,null,t),r.a.createElement(ge,null))))},ve=n(11),we=n(90),je=n(230),xe=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({contactName:"",contactEmail:"",contactMessage:""}),i=Object(O.a)(o,2),l=i[0],u=i[1],s=function(e){var t=e.target.name,n=e.target.value;u(Object(we.a)(Object(we.a)({},l),{},Object(ve.a)({},t,n)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,{noValidate:!0,validated:n,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),!0===e.currentTarget.checkValidity()&&console.log(l),c(!0)}},r.a.createElement(je.a.Row,null,r.a.createElement(je.a.Group,{as:G.a,controlId:"contact-name"},r.a.createElement(je.a.Label,null,"Name"),r.a.createElement(je.a.Control,{type:"text",name:"contactName",placeholder:"Enter your name",onChange:s,required:!0}),r.a.createElement(je.a.Control.Feedback,{type:"invalid"},"Please provide a valid name.")),r.a.createElement(je.a.Group,{as:G.a,controlId:"contact-email"},r.a.createElement(je.a.Label,null,"Email"),r.a.createElement(je.a.Control,{type:"email",name:"contactEmail",placeholder:"Enter your email",onChange:s,required:!0}),r.a.createElement(je.a.Control.Feedback,{type:"invalid"},"Please provide a valid email."))),r.a.createElement(je.a.Row,null,r.a.createElement(je.a.Group,{as:G.a,controlId:"contact-message"},r.a.createElement(je.a.Label,null,"Message"),r.a.createElement(je.a.Control,{as:"textarea",rows:"5",name:"contactMessage",placeholder:"Enter your message",onChange:s,required:!0}),r.a.createElement(je.a.Control.Feedback,{type:"invalid"},"Please provide some messages."))),r.a.createElement(S.a,{variant:"dark",type:"submit"},"Submit")))};Y.b.add($.f,$.e,$.c);var ke=function(e){var t=e.personalInfo;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(G.a,{key:e.type},r.a.createElement("label",{className:"label"},r.a.createElement(J.a,{icon:e.icon}),"\xa0",function(e){switch(e.type){case"email":return r.a.createElement("a",{href:"mailto:"+e.content},e.content);case"phone":return r.a.createElement("a",{href:"tel:"+e.content},e.content);default:return e.content}}(e)))})))},Oe={about:te,banner:ue,skill:me,work:he,contact:function(e){var t=e.title,n=Object(a.useState)({}),c=Object(O.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(O.a)(l,2),s=u[0],m=u[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/personalinfo");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n),m(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{id:"contact"},r.a.createElement(f.a,null,r.a.createElement(T,null,t),r.a.createElement(B.a,null,r.a.createElement(G.a,{md:"8"},r.a.createElement(xe,null)),r.a.createElement(G.a,{md:"4"},r.a.createElement(ke,{personalInfo:o})))))):r.a.createElement(r.a.Fragment,null,"Loading...")}},ye=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(O.a)(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/sections");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),u(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l?r.a.createElement(r.a.Fragment,null,n.map((function(e,t){var n=r.a.createElement(Oe[e.id],{title:e.name,description:e.description?e.description:"",image:e.image?e.image:""});return r.a.createElement(r.a.Fragment,{key:t},n)}))):r.a.createElement(r.a.Fragment,null,"Loading")},Se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(u,{className:"App-header"}),r.a.createElement(ye,null),r.a.createElement(s,{className:"App-Footer"}))},Ne=n(10),Ce=n(29),Fe=n.n(Ce),Le=function(){var e=Object(k.a)(x.a.mark((function e(t,n,a){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe.a.post("/api/sections/".concat(a,"/update"),{description:t,name:n});case 2:return r=e.sent,e.abrupt("return",r.data.success);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(k.a)(x.a.mark((function e(t,n,a,r){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe.a.post("/api/skills/".concat(a,"/update"),{content:t,name:n,id:a});case 2:return c=e.sent,e.abrupt("return",c.data.success);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(k.a)(x.a.mark((function e(t,n,a){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe.a.post("/api/skills/add",{content:t,name:n,id:a});case 2:return r=e.sent,e.abrupt("return",r.data.success);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Me=function(){var e=Object(k.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe.a.post("/api/skills/".concat(t,"/delete"));case 2:return n=e.sent,e.abrupt("return",n.data.success);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(k.a)(x.a.mark((function e(t){var n,a,r,c,o,i,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.name,r=t.link,c=t.description,o=t.contribution,i=t.percentage,e.next=3,Fe.a.post("/api/projects/".concat(n,"/update"),{name:a,link:r,description:c,contribution:o,percentage:i});case 3:if((l=e.sent).data.name!==a||l.data.link!==r||l.data.description!==c||l.data.contribution!==o||l.data.percentage!==i){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(k.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.content,e.next=3,Fe.a.post("/api/personalinfo/".concat(n,"/update"),{content:a});case 3:if(e.sent.data.content!==a){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=n(131),ze=n(132),Te=function(e){var t=e.isSubmitting,n=e.isChanged,a=e.isUpdated,c=e.isNewForm;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"primary",type:"submit",disabled:t||!n},c?"Add":"Update"," "),a?r.a.createElement("label",{className:"text-success"},c?"Added":"Updated"):"")},qe=function(e){var t=e.title;return r.a.createElement(S.a,{variant:"info"},"Add ",t)},Ue=function(e){var t=e.title;return r.a.createElement(S.a,{variant:"danger"},t," ")},We=n(135),De=function(e){var t=e.content,n=e.handleChange;return r.a.createElement(We.a,{apiKey:"o2no6hvd8hqeneb0ialjgelbhliwogjg9uru6d4644z505c5",initialValue:t,init:{height:300,menubar:!1},onEditorChange:n})},Ve=function(e){var t=e.aboutSection,n=Object(a.useState)(!1),c=Object(O.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(O.a)(l,2),s=u[0],m=u[1],d={id:t._id,name:t.name,description:t.description},p=function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Le(t.description,t.name,t.id);case 3:e.sent?(m(!0),i(!1)):console.log("Somthing went wrong"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Ne.d,{initialValues:d,onSubmit:p,validate:function(e){var t={};return e.description||(t.description="Daescription is Required"),e.name||(t.name="Name is Required"),t}},(function(e){var t=e.isSubmitting;return r.a.createElement(Ne.c,{onChange:function(){return i(!0)}},r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Name"),r.a.createElement(Ne.b,{id:"name",className:"form-control",name:"name",placeholder:"name"}),r.a.createElement(Ne.a,{name:"name",component:"div"}))),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Description"),r.a.createElement(Ne.b,{id:"description",name:"description",className:"form-control",placeholder:"Description"},(function(e){var t=e.field.value,n=e.form.setFieldValue;return r.a.createElement(De,{content:t,handleChange:function(e){n("description",e),o||i(!0)}})})),r.a.createElement(Ne.a,{name:"description",component:"div"}))),r.a.createElement(Te,{isSubmitting:t,isChanged:o,isUpdated:s}))}))},Be=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(O.a)(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/sections/about");case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent).length>=0&&(c(n[0]),u(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Edit About Section "),r.a.createElement(Ve,{aboutSection:n})):r.a.createElement(r.a.Fragment,null,"Loading...")},Ge=function(e){var t=e.skill,n=e.isNewForm,c=Object(a.useState)(!1),o=Object(O.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(!1),s=Object(O.a)(u,2),m=s[0],d=s[1],p=Object(a.useState)(!1),f=Object(O.a)(p,2),b=f[0],E=f[1],g=function(){var e=Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Me(t._id);case 3:e.sent?E(!0):console.log("Somthing went wrong"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return b?"":r.a.createElement(Ne.d,{initialValues:{_id:t._id,id:t.id,name:t.name,content:t.content},onSubmit:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=13;break}return e.prev=1,e.next=4,Pe(t.content,t.name,t.id,t._id);case 4:e.sent?(d(!0),l(!1)):console.log("Somthing went wrong"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:e.next=23;break;case 13:return e.prev=13,e.next=16,Ae(t.content,t.name,t.id);case 16:e.sent?(d(!0),l(!1)):console.log("Somthing went wrong"),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),console.log(e.t1);case 23:case"end":return e.stop()}}),e,null,[[1,8],[13,20]])})));return function(t){return e.apply(this,arguments)}}(),validate:function(e){var t={};return e.content||(t.content="Content is Required"),e.name||(t.name="Name is Required"),e.id||(t.id="ID is required"),t}},(function(e){var a=e.isSubmitting;return r.a.createElement(Ne.c,{onChange:function(){return l(!0)}},n?r.a.createElement("div",null,r.a.createElement("h4",{className:"h4 mb-3 font-weight-normal"},"Add New Skill "),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"ID"),r.a.createElement(Ne.b,{id:"id",className:"form-control",name:"id",placeholder:"ID"}),r.a.createElement(Ne.a,{name:"id",component:"div"})))):r.a.createElement("h4",{className:"h4 mb-3 font-weight-normal"},"Edit Skill - ",t.id," "),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Name"),r.a.createElement(Ne.b,{id:"name",className:"form-control",name:"name",placeholder:"name"}),r.a.createElement(Ne.a,{name:"name",component:"div"}))),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Content"),r.a.createElement(Ne.b,{component:"textarea",rows:3,id:"content",name:"content",className:"form-control",placeholder:"Content"}),r.a.createElement(Ne.a,{name:"content",component:"div"}))),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(Te,{isSubmitting:a,isChanged:i,isUpdated:m,isNewForm:n}),n?r.a.createElement("hr",null):r.a.createElement(S.a,{variant:"danger",onClick:g}," Delete "))))}))},He=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(O.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(!1),m=Object(O.a)(s,2),d=m[0],p=m[1];Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/skills");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),u(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return l?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Edit Skills"),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{onClick:function(){p(!0)}},r.a.createElement(qe,{title:"Skill"})),r.a.createElement("div",{onClick:function(){p(!1)}},r.a.createElement(Ue,{title:"Cancel"}))),r.a.createElement("hr",null),d?r.a.createElement(Ge,{skill:{_id:"",id:"",name:"",content:""},isNewForm:d}):"",n.map((function(e,t){return r.a.createElement(Ge,{skill:e,key:t})}))):r.a.createElement(r.a.Fragment,null,"Loading...")},Ke=function(e){var t=e.project,n=Object(a.useState)(!1),c=Object(O.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(O.a)(l,2),s=u[0],m=u[1];return r.a.createElement(Ne.d,{initialValues:{id:t._id,name:t.name,link:t.link,description:t.description,contribution:t.contribution,percentage:t.percentage},onSubmit:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie(t);case 3:e.sent?(m(!0),i(!1)):console.log("Somthing went wrong"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),validate:function(e){var t={};return e.description||(t.description="Content is Required"),e.name||(t.name="Name is Required"),t}},(function(e){var n=e.isSubmitting;return r.a.createElement(Ne.c,{onChange:function(){return i(!0)}},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Edit Project - ",t.id," "),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Name"),r.a.createElement(Ne.b,{id:"name",className:"form-control",name:"name",placeholder:"name"}),r.a.createElement(Ne.a,{name:"name",component:"div"})),r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Link"),r.a.createElement(Ne.b,{id:"link",className:"form-control",name:"link",placeholder:"Link Url"}),r.a.createElement(Ne.a,{name:"link",component:"div"})),r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Percentage"),r.a.createElement(Ne.b,{as:"select",className:"form-control",name:"percentage"},r.a.createElement("option",{value:"50"},"50%"),r.a.createElement("option",{value:"80"},"80%"),r.a.createElement("option",{value:"100"},"100%")),r.a.createElement(Ne.a,{name:"percentage",component:"div"}))),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Description"),r.a.createElement(Ne.b,{id:"description",name:"description",className:"form-control",placeholder:"Description"},(function(e){var t=e.field.value,n=e.form.setFieldValue;return r.a.createElement(De,{content:t,handleChange:function(e){n("description",e),o||i(!0)}})})),r.a.createElement(Ne.a,{name:"description",component:"div"}))),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Contribution"),r.a.createElement(Ne.b,{id:"contribution",name:"contribution",className:"form-control",placeholder:"Contribution"},(function(e){var t=e.field.value,n=e.form.setFieldValue;return r.a.createElement(De,{content:t,handleChange:function(e){n("contribution",e),o||i(!0)}})})),r.a.createElement(Ne.a,{name:"contribution",component:"div"}))),r.a.createElement(Te,{isSubmitting:n,isChanged:o,isUpdated:s}))}))},Je=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(O.a)(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/projects");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),u(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l?r.a.createElement(r.a.Fragment,null,n.map((function(e,t){return r.a.createElement(Ke,{project:e,key:t})}))):r.a.createElement(r.a.Fragment,null,"Loading...")},Ye=function(e){var t=e.contactInfo,n=Object(a.useState)(!1),c=Object(O.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(O.a)(l,2),s=u[0],m=u[1];return r.a.createElement(Ne.d,{initialValues:{id:t._id,content:t.content},onSubmit:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_e(t);case 3:e.sent?(m(!0),i(!1)):console.log("Somthing went wrong"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),validate:function(e){var t={};return e.content||(t.content="Content is Required"),t}},(function(e){var n=e.isSubmitting;return r.a.createElement(Ne.c,{onChange:function(){return i(!0)}},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Edit Contact - ",t.type," "),r.a.createElement(B.a,null,r.a.createElement(Re.a,{as:G.a},r.a.createElement(ze.a,null,"Content"),r.a.createElement(Ne.b,{id:"content",name:"content",className:"form-control",placeholder:"Content"}),r.a.createElement(Ne.a,{name:"content",component:"div"}))),r.a.createElement(Te,{isSubmitting:n,isChanged:o,isUpdated:s}))}))},Ze=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(O.a)(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/personalinfo");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),u(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l?r.a.createElement(r.a.Fragment,null,n.map((function(e,t){return r.a.createElement(Ye,{contactInfo:e,key:t})}))):r.a.createElement(r.a.Fragment,null,"Loading...")},$e=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(fe.a,{defaultActiveKey:"about",id:"admin-update-panel"},r.a.createElement(be.a,{eventKey:"about",title:"About"},r.a.createElement(Be,null)),r.a.createElement(be.a,{eventKey:"skill",title:"Skills"},r.a.createElement(He,null)),r.a.createElement(be.a,{eventKey:"project",title:"Projects"},r.a.createElement(Je,null)),r.a.createElement(be.a,{eventKey:"contact",title:"Contact Info"},r.a.createElement(Ze,null)))))},Qe=function(){var e=Object(k.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe.a.post("api/auth/signin",{username:t,password:n});case 2:return(a=e.sent).data.accessToken&&localStorage.setItem("user",JSON.stringify(a.data)),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Xe=function(){return JSON.parse(localStorage.getItem("user"))},et=function(){var e=Object(l.g)(),t=Object(a.useState)({username:"",email:"",isAdmin:!1}),n=Object(O.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xe();case 2:(t=e.sent)&&t.roles.includes("ROLE_ADMIN")&&o({username:t.username,email:t.email,isAdmin:!0});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(){var t=Object(k.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.removeItem("user"),!0;case 2:t.sent&&e.push("/login");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.isAdmin?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(S.a,{className:"float-right",variant:"secondary",onClick:i},"Logout"),r.a.createElement($e,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(S.a,{className:"float-right",variant:"secondary",onClick:i},"Logout"),r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,"You are not admin.")),r.a.createElement("a",{href:"/"},"Go back to homepage")))};function tt(){var e=Object(m.a)(["\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n"]);return tt=function(){return e},e}var nt=Object(d.a)(Ne.c)(tt()),at=function(){var e=Object(l.g)(),t=Object(a.useState)(!1),n=Object(O.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xe();case 2:(t=e.sent)&&t.success&&o(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(){var t=Object(k.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Qe(n.username,n.password);case 3:(a=t.sent).success?e.push("/admin"):alert(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return c?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:"/admin"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne.d,{initialValues:{username:"",password:""},onSubmit:i,validate:function(e){var t={};return e.username||(t.username="Username is Required"),e.password||(t.password="Password is Required"),t}},(function(e){var t=e.isSubmitting;return r.a.createElement(nt,null,r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement(Ne.b,{id:"username",className:"form-control",name:"username",placeholder:"Username"}),r.a.createElement(Ne.a,{name:"username",component:"div"}),r.a.createElement(Ne.b,{type:"password",id:"password",name:"password",className:"form-control",placeholder:"Password"}),r.a.createElement(Ne.a,{name:"password",component:"div"}),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",disabled:t},"Sign in"))})))},rt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(at,null))};n(219);var ct=function(){return r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"page-body"},r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",component:Se,exact:!0}),r.a.createElement(l.b,{path:"/admin",component:et,exact:!0}),r.a.createElement(l.b,{path:"/login",component:rt,exact:!0})))))},ot=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function it(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(220);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ct,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ot?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):it(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):it(t,e)}))}}()}},[[137,1,2]]]);
//# sourceMappingURL=main.8700fb07.chunk.js.map