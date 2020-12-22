(this.webpackJsonpjwcuisine=this.webpackJsonpjwcuisine||[]).push([[0],{126:function(e,t,a){e.exports=a(158)},158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),o=a.n(i),c=(a(42),a(12)),s=a(193),l=a(11),u=a(97),m=a(182),d=a(54),p=a(183),f=a(184),g=a(185),h=a(186),b=a(187),v=a(102),E=a(111),y=a.n(E),w=a(103),k=a(196),j=a(14),N=a(15);function O(){var e=Object(j.a)(["\n    fragment UserInfo on User {\n        id\n        email\n        type\n        ccLast4\n        postalCode\n    }\n"]);return O=function(){return e},e}var S=Object(N.a)(O());function x(){var e=Object(j.a)(["\nquery MeQuery{\n    me {\n        ...UserInfo\n        }\n}\n","\n"]);return x=function(){return e},e}var C=Object(N.a)(x(),S),I=function(){return r.a.createElement(k.b,{fetchPolicy:"network-only",query:C},(function(e){var t=e.data;return e.loading?r.a.createElement("div",null,"fetching data"):t?t.me?null:r.a.createElement("div",null,r.a.createElement("a",{href:"/login",className:"button7"},"LOG IN"),r.a.createElement("a",{href:"/register",className:"button2"},"REGISTER")):r.a.createElement("div",null,"data is null")}))};function F(){var e=Object(j.a)(["\n    mutation LogoutUserMutation{\n        logout\n    }\n"]);return F=function(){return e},e}var z=Object(N.a)(F()),_=function(){var e=Object(c.g)();return r.a.createElement(k.a,{mutation:z},(function(t){return r.a.createElement("a",{href:"#",className:"button1",onClick:function(a){a.preventDefault(),t(),e.push("/"),e.go(0)}}," LOGOUT ")}))},L=function(){return r.a.createElement("a",{href:"/account",className:"button7"},"ACCOUNT")},D=function(){return r.a.createElement(k.b,{fetchPolicy:"network-only",query:C},(function(e){var t=e.data;return e.loading?r.a.createElement("div",null,"fetching data"):t?t.me?r.a.createElement(n.Fragment,null,r.a.createElement(L,null),r.a.createElement(_,null)):null:r.a.createElement("div",null,"data is null")}))},H=Object(d.a)();H.typography.h2={fontSize:"3.75rem",fontFamily:"Nunito",color:"#fff"};var B=Object(u.a)((function(e){return{backGround:{minHeight:"100vh",backgroundImage:"url(".concat("./assets/bg.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"},root:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",fontFamily:"Nunito, Monospace"},applicationbar:{justifyContent:"center",alignItems:"center",fontFamily:"Nunito, Monospace"},appbar:{background:"none",width:"100vw",justifyContent:"flex-start",top:"0px"},appbarTitle:{flexGrow:"1"},textColorRed:{color:"#cf3121"},textColorWhite:{color:"#fff"},appbarWrapper:{width:"80%",margin:"0 auto"},icon:{color:"#1c1b1b",fontSize:"5vw"},title:{color:"#262626",fontSize:"8vw"},container:{textAlign:"center"},downArrow:{fontSize:"5rem",color:"#1c1b1b"},headerText:{margin:"1rem"},userLogButtons:{display:"flex",justifyContent:"flex-end",alignItems:"center"},gridContainer:{display:"flex",justifyContent:"flex-end"},headerFont:{fontFamily:"nunito",fontSize:"3.75rem"},spacer:{backgroundImage:"url(".concat("./assets/header-background-food.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",height:"100px"}}}));function A(){var e=B(),t=Object(n.useState)(!1),a=Object(l.a)(t,2),i=(a[0],a[1]);return Object(n.useEffect)((function(){i(!0)}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:e.spacer}),r.a.createElement("div",{className:e.applicationbar},r.a.createElement(m.a,{theme:H},r.a.createElement(p.a,{position:"fixed",className:e.appbar,elevation:0},r.a.createElement(f.a,null,r.a.createElement(g.a,{container:!0,spacing:2,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(g.a,{item:!0},r.a.createElement(h.a,{variant:"h3"},r.a.createElement("a",{href:"/",className:e.appbarTitle},"J.W.",r.a.createElement("span",{className:e.textColorRed},"Cuisine"))))),r.a.createElement(g.a,{item:!0,container:!0,justify:"flex-end",alignItems:"center"},r.a.createElement(I,null),r.a.createElement(D,null)))))))}function J(){var e=B(),t=Object(n.useState)(!1),a=Object(l.a)(t,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){o(!0)}),[]),r.a.createElement("div",{className:e.backGround},r.a.createElement("div",{className:e.root,id:"header"},r.a.createElement(b.a,Object.assign({in:i},i?{timeout:1e3}:{},{collapsedHeight:50}),r.a.createElement("div",{className:e.container},r.a.createElement("h1",{className:e.title},"Chef curated recipes",r.a.createElement("br",null),r.a.createElement("span",{className:e.textColorBlack},"delivered"),r.a.createElement("span",{className:e.textColorRed}," to you")),r.a.createElement(w.Link,{to:"recipe-values",smooth:!0},r.a.createElement(v.a,null,r.a.createElement(y.a,{className:e.downArrow})))))))}var $=a(27),P=a(77),T=a(188),G=a(190),R=a(189),M=a(191),U=r.a.createContext(),W=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),i=a[0],o=a[1];return r.a.useEffect((function(){var e=localStorage.getItem("user-cart");e&&o(JSON.parse(e))}),[]),r.a.useEffect((function(){localStorage.setItem("user-cart",JSON.stringify(i))}),[i]),r.a.createElement(U.Provider,{value:[i,o]},e.children)},q=Object(u.a)({root:{minHeight:"40vh",minWidth:"8vw",background:"rgba(0,0,0,0.5)",margin:"2vw"},cardActions:{alignItems:"center",justifyContent:"space-between"},media:{minWidth:"8vw",minHeight:"40vh"},title:{fontFamily:"Nunito",fontWeight:"bold",fontSize:"2vw400",color:"#fff"},desc:{fontFamily:"nunito",fontSize:"1.5vw400",color:"#ddd"},addShoppingCartIcon:{color:"#00ff00",fontSize:"4vh"},removeShoppingCartIcon:{color:"#FF0000",fontSize:"4vh"},CardFlipper:{fontSize:"4vh",color:"#1c1b1b"},iconButton:{background:"rgba(0,0,0,0.5)","&:hover":{background:"rgba(0,0,0,0.5)",backgroundColor:"rgba(0,0,0,0.5)"},backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"50%",disableFocusRipple:"true"}});function Q(e){var t=e.prop,a=e.checked,i=e.subscription,o=Object(n.useContext)(U),c=Object(l.a)(o,2),s=(c[0],c[1],q()),u=Object(n.useState)(!1),m=Object(l.a)(u,2);m[0],m[1];return r.a.createElement(b.a,Object.assign({in:a},a?{timeout:1e3}:{},{collapsedHeight:50}),r.a.createElement("div",null,r.a.createElement(T.a,{className:s.root},r.a.createElement(R.a,{className:s.media,image:t.imageUrl,title:t.title}),r.a.createElement(G.a,null,r.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h1",className:s.title},t.title),r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p",className:s.desc},t.description)),r.a.createElement(M.a,{className:s.cardActions},i,r.a.createElement(h.a,{variant:"h5",color:"textSecondary",component:"h1",className:s.title},t.price)))))}var K=[{title:"Recipes for two",description:"3 Meals that make two servings, delivered to your door weekly!",price:"$23.99",purchaseTitle:"$80 Monthly",purchaseDescription:"purchase of this package includes 3 servings of 'Pan Seared Halibut' per week delivered to your doorstep ready for you to heat up and enjoy!",imageUrl:"/assets/planForTwo.png",id:0,quantity:0,time:1500},{title:"Recipes for four",description:"3 Meals that make four servings, delivered to your door weekly!",price:"$44.99",purchaseTitle:"$80 Monthly",purchaseDescription:"purchase of this package includes 3 servings of 'unknown' per week delivered to your doorstep ready for you to heat up and enjoy!",imageUrl:"/assets/planForFour.png",id:1,quantity:0,time:1500}];var Y=a(112),X=a.n(Y),V=[{title:"Spaghetti & Meatballs",description:" JW Cuisine special family marinara sauce serverd over spaghetti noodles with parmeasean & Roasted Garlic Meatballs",imageUrl:"/assets/planForFour.png"},{title:" Bacon & Mushroom Penne",description:"Pan Seared Chicken Breast",imageUrl:"/assets/Halibut.jpg"},{title:"Salmon with Lemon & Capers",description:" Seared Salmon with a lemon dill cream, served on a bed of rice with wilted spinach and Squash. Topped with Fried Capers",imageUrl:"/assets/planForTwo.png"},{title:"Acorn Squash Soup",description:"Soup with herb infused brown butter and nuts",imageUrl:"/assets/chefHatIcon.png"},{title:"Rustic Pork Chop",description:"Pork Chop with butternut squah puree, collard greens, and fresh blueberry compote",imageUrl:"/assets/otherfood.jpg"},{title:"Thai Lettuce Wraps",description:"",imageUrl:"/assets/bg.jpg"}],Z=Object(u.a)({root:{minHeight:"33vh",width:"100%",margin:"2vw"},media:{display:"flex",alignContent:"flex-start",justifyContent:"flex-start",height:"50vh",backgroundSize:"cover",backgroundRepeat:"no-repeat"}});function ee(e){var t=e.prop,a=Z();return r.a.createElement(T.a,{className:a.root},r.a.createElement(R.a,{className:a.media,image:t.imageUrl,title:t.title}),r.a.createElement(G.a,null,r.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},t.description)))}var te=Object(u.a)((function(e){return{backGround:{background:"rgba(0,0,0,0.5)",minHeight:"40vh",margin:"2vw"}}})),ae=function(){var e=te();return r.a.createElement("div",{className:e.backGround},r.a.createElement(X.a,{animation:"slide"},V.map((function(e){return r.a.createElement(ee,{prop:e})}))))},ne=a(18),re=a.n(ne),ie=a(32),oe=a(56),ce=a.n(oe);function se(){var e=Object(j.a)(["\n    mutation CreateSubscriptionFourMutation($source: String!, $ccLast4: String!,\n     $shippingAddress: ShippingAddressInput!){\n        createSubscriptionFour(source: $source, ccLast4: $ccLast4,\n         shippingAddress: $shippingAddress){\n            ...UserInfo\n        }\n    }\n    ","\n"]);return se=function(){return e},e}var le=Object(N.a)(se(),S),ue=function(){return n.createElement(k.a,{mutation:le},(function(e){return n.createElement(ce.a,{billingAddress:!0,shippingAddress:!0,stripeKey:"pk_test_51HdzEeJIQLh7k5Y6avX8H0E4tzhNP1DBG5YwNQRepgNUsNDEtoK5yIPRQusxEvdLc0qIFD8usXkzawrcn1dtEwGo00GiuM06vc",token:function(){var t=Object(ie.a)(re.a.mark((function t(a,n){var r;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({variables:{source:a.id,ccLast4:a.card.last4,shippingAddress:{city:JSON.stringify(n.shipping_address_city),country:JSON.stringify(n.shipping_address_county),line1:JSON.stringify(n.shipping_address_line1),line2:JSON.stringify(n.shipping_address_line2),postal_code:JSON.stringify(n.shipping_address_zip),state:JSON.stringify(n.shipping_address_state)}}});case 3:r=t.sent,console.log("response: ",r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}()},n.createElement("a",{href:"#",className:"subscribeButton",onClick:function(e){return e.preventDefault()}},"Purchase Plan for Four"))}))},me=function(){return n.createElement(k.b,{fetchPolicy:"network-only",query:C},(function(e){var t=e.data;return e.loading?null:t?t.me?"free-trial"===t.me.type?n.createElement(ue,null):n.createElement("a",{href:"/account",className:"subscribeButton"},"Manage Plan"):n.createElement("a",{href:"/login",className:"subscribeButton"},"Purchase Plan"):n.createElement("div",null,"data is null")}))};function de(){var e=Object(j.a)(["\n    mutation CreateSubscriptionMutation($source: String!, $ccLast4: String!,\n     $shippingAddress: ShippingAddressInput!){\n        createSubscription(source: $source, ccLast4: $ccLast4,\n         shippingAddress: $shippingAddress){\n            ...UserInfo\n        }\n    }\n    ","\n"]);return de=function(){return e},e}var pe=Object(N.a)(de(),S),fe=function(){return n.createElement(k.a,{mutation:pe},(function(e){return n.createElement(ce.a,{billingAddress:!0,shippingAddress:!0,stripeKey:"pk_test_51HdzEeJIQLh7k5Y6avX8H0E4tzhNP1DBG5YwNQRepgNUsNDEtoK5yIPRQusxEvdLc0qIFD8usXkzawrcn1dtEwGo00GiuM06vc",token:function(){var t=Object(ie.a)(re.a.mark((function t(a,n){var r;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({variables:{source:a.id,ccLast4:a.card.last4,shippingAddress:{city:JSON.stringify(n.shipping_address_city),country:JSON.stringify(n.shipping_address_county),line1:JSON.stringify(n.shipping_address_line1),line2:JSON.stringify(n.shipping_address_line2),postal_code:JSON.stringify(n.shipping_address_zip),state:JSON.stringify(n.shipping_address_state)}}});case 3:r=t.sent,console.log("response: ",r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}()},n.createElement("a",{href:"#",className:"subscribeButton",onClick:function(e){return e.preventDefault()}},"Purchase Plan For Two"))}))},ge=function(){return n.createElement(k.b,{fetchPolicy:"network-only",query:C},(function(e){var t=e.data;return e.loading?null:t?t.me?"free-trial"===t.me.type?n.createElement(fe,null):n.createElement("a",{href:"/account",className:"subscribeButton"},"Manage Plan"):n.createElement("a",{href:"/login",className:"subscribeButton"},"Purchase Plan"):n.createElement("div",null,"data is null")}))},he=Object(u.a)((function(e){return{root:Object($.a)({Width:"100vw",backgroundImage:"url(".concat("./assets/subscription-plan-background.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100vh",display:"flex",justify:"center",alignItems:"center"},e.breakpoints.up("md"),{flexDirection:"column, 2"}),gridContainer:{justifyContent:"center",padding:"10px",height:"100%",width:"100%"}}})),be=function(){var e=he(),t=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1];return Object(n.useLayoutEffect)((function(){function t(){var t=window.document.getElementById(e).offsetHeight;window.pageYOffset>.5*t&&i(!0)}return window.addEventListener("scroll",t),t(),function(){return window.removeEventListener("scroll",t)}}),[e]),r}("header");return r.a.createElement("div",{className:e.root,id:"recipe-to-use"},r.a.createElement(g.a,{container:!0,spacing:0,className:e.gridContainer,justify:"center"},r.a.createElement(g.a,{item:!0,xs:12,sm:6,lg:4},r.a.createElement(Q,{prop:K[0],checked:t,subscription:r.a.createElement(ge,null)})),r.a.createElement(g.a,{item:!0,xs:12,sm:6,lg:4},r.a.createElement(Q,{prop:K[1],checked:t,subscription:r.a.createElement(me,null)})),r.a.createElement(g.a,{item:!0,xs:12,sm:12,lg:8,className:e.gridContainer},r.a.createElement(ae,null))))},ve=a(7),Ee=a(192),ye=a(116),we=a(20),ke={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};var je=Object(ve.a)((function(e){return{markedH2Center:{height:4,width:73,display:"block",margin:"".concat(e.spacing(1),"px auto 0")},markedH3Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing(1),"px auto 0")},markedH4Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing(1),"px auto 0")},markedH6Left:{height:2,width:28,display:"block",marginTop:e.spacing(.5)}}}))((function(e){var t=e.children,a=e.classes,n=e.marked,i=void 0!==n&&n,o=e.variant,c=Object(ye.a)(e,["children","classes","marked","variant"]);return r.a.createElement(h.a,Object.assign({variantMapping:ke,variant:o},c),t,i?r.a.createElement("span",{className:a["marked".concat(Object(we.a)(o)+Object(we.a)(i))]}):null)}));var Ne=Object(ve.a)((function(e){return{root:{minHeight:"100vh",display:"cover",overflow:"hidden",backgroundColor:"rgba(16, 34, 101, 1)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},container:{marginTop:e.spacing(15),marginBottom:e.spacing(20),display:"flex",position:"relative"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(0,5)},image:{height:55},title:{marginTop:e.spacing(5),marginBottom:e.spacing(5)},curvyLines:{pointerEvents:"none",position:"absolute",top:-180}}}))((function(e){var t=e.classes;return r.a.createElement("section",{className:t.root,id:"recipe-values"},r.a.createElement(Ee.a,{className:t.container},r.a.createElement("img",{src:"./assets/productCurvyLines.png",className:t.curvyLines,alt:"curvy lines"}),r.a.createElement(g.a,{container:!0,spacing:5},r.a.createElement(g.a,{item:!0,xs:12,md:4},r.a.createElement("div",{className:t.item},r.a.createElement("img",{className:t.image,src:"./assets/walletIcon.png",alt:"wallet"}),r.a.createElement(je,{variant:"h5",style:{color:"#fff"},className:t.title},"The Highest Quality"),r.a.createElement(je,{style:{color:"#fff",fontFamily:"Nunito "},variant:"h6"},"The money you spend goes towards purchasing the highest quality ingredients ","from local and sustainable sources",", so you can feel good not only about what you eat, but what you buy"))),r.a.createElement(g.a,{item:!0,xs:12,md:4},r.a.createElement("div",{className:t.item},r.a.createElement("img",{className:t.image,src:"./assets/chefHatIcon.png",alt:"chefHat"}),r.a.createElement(je,{variant:"h5",style:{color:"#fff"},className:t.title},"Delicious Easy Meals"),r.a.createElement(je,{variant:"h6",style:{color:"#ffff",fontFamily:"Nunito "}},"With a recipe created by Chef Joseph, just follow instructions and enjoy ","for easy meals you thought impossible"))),r.a.createElement(g.a,{item:!0,xs:12,md:4},r.a.createElement("div",{className:t.item},r.a.createElement("img",{className:t.image,src:"./assets/menuIcon.png",alt:"clock"}),r.a.createElement(je,{variant:"h5",style:{color:"#fff"},className:t.title},"Diverse Menu"),r.a.createElement(je,{variant:"h6",style:{color:"#fff",fontFamily:"Nunito "}},"Chef Joseph spent a lot of time thinking of delicious, and diverse dietary options ","that can be substitutied for various ingredients to suit your own personal needs"))))))}));var Oe=Object(ve.a)((function(e){return{root:{minHeight:"100vh",display:"cover",overflow:"hidden",backgroundColor:"rgba(16, 34, 101, 1)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},container:{marginTop:e.spacing(8),marginBottom:e.spacing(10),display:"flex",position:"relative"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(0,5)},image:{height:55},title:{marginTop:e.spacing(5),marginBottom:e.spacing(5)},curvyLines:{pointerEvents:"none",position:"absolute",top:-180}}}))((function(e){var t=e.classes;return r.a.createElement("section",{className:t.root,id:"recipe-values"},r.a.createElement(Ee.a,{className:t.container},r.a.createElement("img",{src:"./assets/productCurvyLines.png",className:t.curvyLines,alt:"curvy lines"}),r.a.createElement(g.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(g.a,{item:!0,xs:12,md:4},r.a.createElement("img",{src:"./assets/chefHatIcon.png"}),r.a.createElement(je,{variant:"h5",style:{color:"#fff"},className:t.title},"About the Chef"),r.a.createElement("hr",null),r.a.createElement(je,{style:{color:"#fff",fontFamily:"Roboto "},variant:"h6"},"Chef Joseph has over 16 years of experience in the hospitality  industry and culinary arts, and now brings his passion and joy of cooking from the corporate world of hospitality into meals that can be enjoyed from the comforts of home.",r.a.createElement("br",null)," From the young age of 14 Chef Joseph gained an interest and passion in cooking, both for himself and for others. This amplified as he went to Culinary School and graduated with honors. He has worked in multiple fine dining concepts as well as catering, hotels, casual dining, and private events.",r.a.createElement("br",null),"Whether it's making a meal for the whole family to enjoy, or planning an epic multiple course meal for a romantic night in, Chef has you covered. At  J.W.Cuisine we are all about creating memories and giving time back to those that need it most; which is everyone! From our kitchen to your table, we hope you enjoy.",r.a.createElement("br",null)," Bon Appetit!")))))})),Se=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(J,null),r.a.createElement(Ne,null),r.a.createElement(be,null),r.a.createElement(Oe,null))},xe=a(76);function Ce(){var e=Object(j.a)(["\nmutation LoginUserMutation($email: String!, $password: String!){\n  login(email: $email, password: $password){\n      ...UserInfo\n  }\n}\n","\n\n"]);return Ce=function(){return e},e}var Ie=Object(N.a)(Ce(),S),Fe=Object(u.a)((function(e){return{backGround:{minHeight:"100vh",backgroundImage:"url(".concat("./assets/bg.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"}}})),ze=function(){var e=Fe(),t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),i=a[0],o=a[1],s=Object(c.g)(),u=function(e){var t=e.target,a=t.name,n=t.value;o((function(e){return Object(xe.a)({},e,Object($.a)({},a,n))}))};return r.a.createElement(k.a,{update:function(e,t){var a=t.data;a&&a.login&&e.writeQuery({query:C,data:{me:a.login}})},mutation:Ie},(function(t){return r.a.createElement("div",{className:e.backGround,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement("input",{value:i.email,type:"text",required:!0,placeholder:"email",onChange:u,name:"email"})),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("input",{value:i.password,type:"password",required:!0,placeholder:"password",onChange:u,onKeyDown:function(){var e=Object(ie.a)(re.a.mark((function e(a){var n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==a.keyCode){e.next=6;break}return e.next=3,t({variables:i});case 3:n=e.sent,console.log(n),s.push("/account");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),name:"password"}),r.a.createElement("a",{href:"#",className:"button7",onClick:function(){var e=Object(ie.a)(re.a.mark((function e(a){var n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t({variables:i});case 3:n=e.sent,console.log(n),s.push("/account");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"LOGIN")))}))};function _e(){var e=Object(j.a)(["\nmutation RegisterUserMutation($email: String!, $password: String!){\n  register(email: $email, password: $password)\n}\n\n"]);return _e=function(){return e},e}var Le=Object(N.a)(_e()),De=Object(u.a)((function(e){return{backGround:{minHeight:"100vh",backgroundImage:"url(".concat("./assets/bg.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"}}})),He=function(){var e=De(),t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),i=a[0],o=a[1],s=Object(c.g)(),u=function(e){var t=e.target,a=t.name,n=t.value;o((function(e){return Object(xe.a)({},e,Object($.a)({},a,n))}))};return r.a.createElement(k.a,{mutation:Le},(function(t){return r.a.createElement("div",{className:e.backGround,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement("input",{value:i.email,type:"text",placeholder:"email",onChange:u,name:"email"})),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("input",{value:i.password,type:"password",required:!0,placeholder:"password",onChange:u,onKeyDown:function(){var e=Object(ie.a)(re.a.mark((function e(a){var n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==a.keyCode){e.next=6;break}return e.next=3,t({variables:i});case 3:n=e.sent,console.log(n),s.push("/account");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),name:"password"}),r.a.createElement("button",{type:"button",onClick:Object(ie.a)(re.a.mark((function e(){var a;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({variables:i});case 2:a=e.sent,console.log(a),s.push("/login");case 5:case"end":return e.stop()}}),e)})))},"register")))}))};function Be(){var e=Object(j.a)(["\n    mutation ChangeCreditCardMutation($source: String!, $ccLast4: String!, $shippingAddress: ShippingAddressInput!){\n        changeCreditCard(source: $source, ccLast4: $ccLast4, shippingAddress: $shippingAddress) {\n            ...UserInfo\n        }\n    }\n    ","\n"]);return Be=function(){return e},e}var Ae=Object(N.a)(Be(),S),Je=function(){return n.createElement(k.a,{mutation:Ae},(function(e){return n.createElement(ce.a,{stripeKey:"pk_test_51HdzEeJIQLh7k5Y6avX8H0E4tzhNP1DBG5YwNQRepgNUsNDEtoK5yIPRQusxEvdLc0qIFD8usXkzawrcn1dtEwGo00GiuM06vc",billingAddress:!0,shippingAddress:!0,token:function(){var t=Object(ie.a)(re.a.mark((function t(a,n){var r;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({variables:{source:a.id,ccLast4:a.card.last4,shippingAddress:{city:JSON.stringify(n.shipping_address_city),country:JSON.stringify(n.shipping_address_county),line1:JSON.stringify(n.shipping_address_line1),line2:JSON.stringify(n.shipping_address_line2),postal_code:JSON.stringify(n.shipping_address_zip),state:JSON.stringify(n.shipping_address_state)}}});case 2:r=t.sent,console.log(r);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},n.createElement("a",{href:"#",className:"creditCardButton"},"Change Billing/Shipping Info "))}))};function $e(){var e=Object(j.a)(["\n    mutation CancelSubscriptionMutation {\n        cancelSubscription {\n            ...UserInfo\n        }\n    }\n    ","\n\n"]);return $e=function(){return e},e}var Pe=Object(N.a)($e(),S),Te=function(){return n.createElement(k.a,{mutation:Pe},(function(e){return n.createElement("a",{href:"#",className:"creditCardButton",onClick:function(t){t.preventDefault(),e()}},"Cancel Subscription")}))},Ge=a(195),Re=a(194);function Me(){var e=Object(j.a)(["\n    mutation AddDishToSubscriptionMutation($foodDishData: FoodDishInput!){\n        addDishToSubscription(foodDishData: $foodDishData) {\n            ...UserInfo\n        }\n    }\n    ","\n"]);return Me=function(){return e},e}var Ue=Object(N.a)(Me(),S);function We(e){return n.createElement(Re.a,Object.assign({elevation:6,variant:"filled"},e))}var qe=function(e){var t=e.dishes,a=Object(l.a)(t,4),r=a[0],i=a[1],o=a[2],c=a[3],s=Object(n.useState)(!1),u=Object(l.a)(s,2),m=u[0],d=u[1],p=function(e,t){"clickaway"!==t&&d(!1)};return n.createElement(k.a,{mutation:Ue},(function(e){return n.createElement(n.Fragment,null,n.createElement("a",{href:"#",className:"subscribeButton",onClick:function(t){t.preventDefault(),e({variables:{foodDishData:{dishOne:r,dishTwo:i,dishThree:o,dishFour:c}}}),d(!0)}},"Submit Dishes"),n.createElement(Ge.a,{open:m,autoHideDuration:6e3,onClose:p},n.createElement(We,{onClose:p,severity:"success"},"Your Dishes have been added!")))}))},Qe=a(113),Ke=a.n(Qe),Ye=a(114),Xe=a.n(Ye),Ve=Object(u.a)({root:{minHeight:"70vh",minWidth:"8vw",background:"rgba(0,0,0,0.5)",margin:"2vw"},cardActions:{display:"flex",margin:"2vh",alignItems:"center",justifyContent:"flex-start"},media:{minWidth:"8vw",minHeight:"40vh"},title:{fontFamily:"Nunito",fontWeight:"bold",fontSize:"2vw400",color:"#fff"},desc:{fontFamily:"nunito",fontSize:"1.5vw400",color:"#ddd"},addShoppingCartIcon:{color:"#00ff00",fontSize:"4vh"},removeShoppingCartIcon:{color:"#FF0000",fontSize:"4vh"},CardFlipper:{fontSize:"4vh",color:"#1c1b1b"},iconButton:{background:"rgba(0,0,0,0.5)","&:hover":{background:"rgba(0,0,0,0.5)",backgroundColor:"rgba(0,0,0,0.5)"},backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"50%",disableFocusRipple:"true"}});function Ze(e){var t=e.prop,a=Object(n.useContext)(U),i=Object(l.a)(a,2),o=i[0],c=i[1],s=Ve(),u=Object(n.useState)(!1),m=Object(l.a)(u,2);m[0],m[1];return r.a.createElement("div",null,r.a.createElement(T.a,{className:s.root},r.a.createElement(R.a,{className:s.media,image:t.imageUrl,title:t.title}),r.a.createElement(G.a,null,r.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h1",className:s.title},t.title),r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p",className:s.desc},t.description)),r.a.createElement(M.a,{className:s.cardActions},r.a.createElement(h.a,{variant:"h5",color:"textSecondary",component:"h1",className:s.title},t.timeToMake,r.a.createElement(v.a,{onClick:function(){if(o.length<4){var e={name:t.title};c((function(t){return[].concat(Object(P.a)(t),[e])}))}}},r.a.createElement(Ke.a,null)),r.a.createElement(v.a,{onClick:function(){var e=t.title,a=o.filter((function(t){return t.name!==e})),n=o.filter((function(t){return t.name===e}));n.pop();var r=a.concat(n);c(r),console.log(o)}},r.a.createElement(Xe.a,null))))))}var et=Object(u.a)((function(e){return{backGround:{minHeight:"100vh",backgroundImage:"url(".concat("./assets/bg.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"},root:{minWidth:275,marginTop:16,backgroundColor:"rgba(0,0,0,0.5)"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontFamily:"Nunito",fontWeight:"bold",fontSize:"2vw400",color:"#fff"},pos:{marginBottom:12,fontFamily:"nunito",fontSize:"1.5vw400",color:"#ddd"}}}));function tt(){var e=et(),t={justifyContent:"flex-start",alignItems:"flex-start",display:"grid"},a=Object(n.useContext)(U),i=Object(l.a)(a,1)[0];return r.a.createElement(k.b,{fetchPolicy:"network-only",query:C},(function(a){var n=a.data;return a.loading?r.a.createElement("div",{className:e.backGround}):n?n.me?"free-trial"===n.me.type?r.a.createElement("div",{className:e.backGround,style:{justifyContent:"flex-start",display:"flex"}},r.a.createElement("h3",{style:{margin:0}},"It looks like your subscription has run out!",r.a.createElement("br",null),"Please resubscribe ",r.a.createElement("br",null),r.a.createElement("a",{href:"/",className:"subscribeButton"},"Go Home"))):r.a.createElement("div",{className:e.backGround},r.a.createElement("h2",{style:{margin:"0",fontFamily:"nunito",color:"rgba(0, 0, 0, 0.87)"}},"All changes made after Sunday at 7:00PM CST will not be in affect until the following week's deliveries")," ",r.a.createElement("hr",null),r.a.createElement("h3",{style:{margin:"0",fontFamily:"nunito"}},"If your subscription is only for two recipes a week, only the top two in the menu will be submitted"),r.a.createElement(g.a,{container:!0,spacing:3,justify:"flex-start",alignItems:"center",direction:"row"},r.a.createElement(g.a,{item:!0,xs:12,md:6,lg:4},r.a.createElement(T.a,{className:e.root},r.a.createElement(G.a,null,r.a.createElement(h.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Profile Information"),r.a.createElement(h.a,{className:e.pos,color:"textSecondary"},"The last 4 digits of the card on file: ",n.me.ccLast4)),r.a.createElement(M.a,null,r.a.createElement(Je,null)))),r.a.createElement(g.a,{item:!0,xs:12,md:6,lg:4},r.a.createElement(T.a,{className:e.root},r.a.createElement(G.a,null,r.a.createElement(h.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Dishes to be delivered this week"),i.map((function(t){var a=t.name;return r.a.createElement(h.a,{className:e.pos}," ",a)})),r.a.createElement(g.a,{container:!0,spacing:1,justify:"flex-end"})),r.a.createElement(M.a,null,r.a.createElement(qe,{dishes:i.map((function(e){return e.name}))}))))),r.a.createElement("div",{style:t}),r.a.createElement(g.a,{container:!0,spacing:0,justify:"center"},V.map((function(e){return r.a.createElement(g.a,{item:!0,xs:12,sm:6,lg:4},r.a.createElement(Ze,{prop:e}))}))),r.a.createElement(Te,null)):r.a.createElement(c.a,{to:"/login"}):r.a.createElement("div",{className:e.backGround},"data is null")}))}var at,nt,rt=a(115),it=a.n(rt),ot=Object(d.a)();ot.typography.h2=(at={fontSize:"1.3rem","@media (min-width:600px)":{fontSize:"1.6rem"}},Object($.a)(at,ot.breakpoints.up("md"),{fontSize:"2rem"}),Object($.a)(at,"fontFamily","Nunito"),Object($.a)(at,"color","#fff"),at),ot.typography.h3=(nt={fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.5rem"}},Object($.a)(nt,ot.breakpoints.up("md"),{fontSize:"2rem"}),Object($.a)(nt,"fontFamily","Nunito"),Object($.a)(nt,"color","#fff"),nt);var ct=Object(u.a)((function(e){return{footer:{bottom:"0px",width:"100%",Height:"15vh",backgroundColor:"#1c1b1b"},gridContainer:{backgroundColor:"#1c1b1b",height:"100%"},faceBook:{color:"#2d4ee0"},footerText:{fontFamily:"Nunito",color:"#fff"},redText:{color:"#ff0000"},tab:{tabSize:8,fontFamily:"nunito"}}}));function st(){var e=ct();return r.a.createElement("div",{className:e.footer,id:"footer"},r.a.createElement(m.a,{theme:ot},r.a.createElement(g.a,{direction:"row",container:!0,spacing:0,justify:"space-evenly",alignItems:"center",className:e.gridContainer},r.a.createElement(g.a,{item:!0},r.a.createElement(v.a,{size:"medium",href:"https://www.facebook.com/JWCuisine-132752860237120"},r.a.createElement(it.a,{fontSize:"large",className:e.faceBook}))),r.a.createElement(g.a,{item:!0},r.a.createElement(h.a,{variant:"h2"},r.a.createElement("span",{className:e.redText},"J.W."),"Cuisine")),r.a.createElement(g.a,{item:!0},r.a.createElement(h.a,{variant:"h3"}," Email: JWCuisine@gmail.com"),r.a.createElement(h.a,{variant:"h3"}," Phone: (210)-717-1805")))))}var lt=function(){return r.a.createElement(W,null,r.a.createElement(s.a,null),r.a.createElement(A,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0,component:Se}),r.a.createElement(c.b,{path:"/login",component:ze}),r.a.createElement(c.b,{path:"/register",component:He}),r.a.createElement(c.b,{path:"/account",component:tt})),r.a.createElement(st,null))},ut=a(49);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mt=a(13),dt=a(33),pt=a(50),ft=a(55),gt=a(63),ht=a(16),bt=new dt.a({link:ht.a.from([Object(gt.a)((function(e){var t=e.graphQLErrors,a=e.networkError;t&&t.map((function(e){var t=e.message,a=e.locations,n=e.path;console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(a,", Path: ").concat(n)),t.includes("Failed to fetch")?console.log("Logout bug: ",t):alert(t)})),a&&(a.message.includes("Failed to fetch")?console.log("Logout Error: ".concat(a)):(console.log("[Network error]: ".concat(a)),alert(a)))})),new ft.a({uri:"http://localhost:4000/graphql",credentials:"include"})]),cache:new pt.a});o.a.render(r.a.createElement(mt.a,{client:bt},r.a.createElement(ut.a,null,r.a.createElement(lt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.c503b8ac.chunk.js.map