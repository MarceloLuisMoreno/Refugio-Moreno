(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(27),n=c.n(r),i=c(11),j=c(12),o=c(3),l=c(8),b=c(82),d=c(83),O=c(84),m=c(49),u=(c(80),m.a.initializeApp({apiKey:"AIzaSyCBQ_wQx8ja-WbYHZAAOOXlx-UY9JO7J9c",authDomain:"refugio-ecommerce.firebaseapp.com",projectId:"refugio-ecommerce",storageBucket:"refugio-ecommerce.appspot.com",messagingSenderId:"471407983104",appId:"1:471407983104:web:03590b2b10cc199191b6e5"}));function x(){return m.a.firestore(u)}var h=c(89),p=c(2);var f=function(e){var t=e.item;return Object(p.jsx)("div",{className:"container col",children:Object(p.jsxs)(h.a,{style:{width:"16rem"},className:"mt-5 shadow p-3 mb-5 bg-white rounded",children:[Object(p.jsx)(i.b,{to:"/item/".concat(t.id),children:Object(p.jsx)(h.a.Img,{variant:"top",src:t.image})}),Object(p.jsxs)(h.a.Body,{children:[Object(p.jsxs)(h.a.Title,{className:"text-center fs-6",children:["Id: ",t.id]}),Object(p.jsx)(h.a.Title,{className:"text-center",children:t.name}),Object(p.jsxs)(h.a.Title,{className:"text-center",children:["$ ",t.price]}),Object(p.jsx)(i.b,{to:"/item/".concat(t.id),children:Object(p.jsx)("button",{className:"btn btn-success btn-sm",children:"+ Info"})}),Object(p.jsxs)(h.a.Title,{className:"text-center m-2",children:["Stock ",t.stock]})]})]})})};var g=function(e){var t=e.items;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)(f,{item:e},e.id)}))})};var v=function(){var e=Object(j.f)().categoryId,t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)(!0),i=Object(l.a)(n,2),m=i[0],u=i[1];return Object(a.useEffect)((function(){"todos"===e?x().collection("items").orderBy("category","asc").get().then((function(e){return r(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))})).catch((function(e){return alert("Error: ".concat(e))})).finally((function(){return u(!1)})):x().collection("items").where("category","==",e).get().then((function(e){return r(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))})).catch((function(e){return alert("Error: ".concat(e))})).finally((function(){return u(!1)}))}),[e]),Object(p.jsxs)(b.a,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("h2",{className:"mt-5",children:["Nuestros productos - ",e.toUpperCase()]}),m?Object(p.jsxs)(d.a,{className:"m-5",variant:"success",disabled:!0,children:[Object(p.jsx)(O.a,{as:"span",animation:"border",role:"status","aria-hidden":"true",size:"lg"}),"L O A D I N G ..."]}):Object(p.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-4 mb-5 text-center",children:Object(p.jsx)(g,{items:s})})]})},N=c(87),y=c(88),k=c(37),I=Object(a.createContext)([]),C=function(){return Object(a.useContext)(I)},w=function(e){var t=e.children,c=Object(a.useState)([]),s=Object(l.a)(c,2),r=s[0],n=s[1];return Object(p.jsx)(I.Provider,{value:{cartList:r,addItem:function(e){var t=Object(k.a)(r);void 0!==t.find((function(t){return t.id===e.item.id}))?(t.find((function(t){return t.id===e.item.id})).quantity+=e.quantity,n(t)):n([].concat(Object(k.a)(r),[Object(o.a)(Object(o.a)({},e.item),{},{quantity:e.quantity})]))},itemsCarrito:function(){return r.reduce((function(e,t){return e+t.quantity}),0)},clear:function(){n([])},totalCart:function(){return r.reduce((function(e,t){return e+t.quantity*t.price}),0)},clearItem:function(e){n(r.filter((function(t){return t.id!==e})))}},children:t})};var S=function(e){e.cantidad;var t=C().itemsCarrito;return Object(p.jsx)("div",{className:"bi bi-cart4 fs-4 text-secondary text-decoration-none",children:" "+t()})};var A=function(){return Object(p.jsx)(N.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(i.b,{to:"/",children:Object(p.jsx)("img",{src:"/refugio.png",className:"nav-link d-inline-block align-top mx-5 ps-5",alt:"Refugio Tienda Deco logo"})}),Object(p.jsx)(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(N.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsxs)(y.a,{className:"me-auto",children:[Object(p.jsx)(i.b,{className:"nav-link",to:"/",children:"Home"}),Object(p.jsx)(i.b,{className:"nav-link",to:"/category/todos",children:"Productos"}),Object(p.jsx)(i.b,{className:"nav-link",to:"/category/cuadros",children:"Cuadros"}),Object(p.jsx)(i.b,{className:"nav-link",to:"/category/macetas",children:"Macetas"}),Object(p.jsx)(i.b,{className:"nav-link",to:"/category/plantas",children:"Plantas"}),Object(p.jsx)(i.b,{className:"nav-link",to:"/category/vinilos",children:"Vinilos"})]})}),Object(p.jsx)(i.b,{to:"/cart",className:"nav-link ms-5 ps-5",children:Object(p.jsx)(S,{})})]})})};var P=function(e){var t=e.stock,c=e.initial,s=e.onAdd,r=Object(a.useState)(c),n=Object(l.a)(r,2),i=n[0],j=n[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(d.a,{onClick:function(){return j(i-1)},variant:"light",size:"lg",className:"bi bi-dash-circle-fill",disabled:1===i}),Object(p.jsx)("label",{className:"fs-3 mx-4",children:i}),Object(p.jsx)(d.a,{onClick:function(){return j(i+1)},variant:"light",size:"lg",color:"danger",className:"bi bi-plus-circle-fill",disabled:i===t}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(d.a,{variant:"success",onClick:function(){s(i)},children:"Agregar al Carrito"})})]})},T=c(85),F=c(86);var R=function(e){var t=e.item,c=C().addItem,s=Object(a.useState)(!1),r=Object(l.a)(s,2),n=r[0],j=r[1];return Object(p.jsxs)(b.a,{className:"p-2",children:[Object(p.jsx)("br",{}),Object(p.jsxs)(T.a,{className:"gx-5  shadow p-3 mb-5 bg-white rounded",children:[Object(p.jsx)(F.a,{children:Object(p.jsx)("img",{src:t.image,className:"containerImagenItem",alt:"Producto de Refugio Tienda Deco productos"})}),Object(p.jsx)(F.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{children:t.name}),Object(p.jsx)("h5",{children:t.description}),Object(p.jsxs)("h3",{children:["$ ",t.price]}),n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(d.a,{as:i.b,to:"/cart",variant:"secondary",children:"Terminar Compra"}),Object(p.jsx)("br",{})]}):Object(p.jsx)(P,{stock:t.stock,initial:1,onAdd:function(e){c({item:t,quantity:e}),j(!0)}}),Object(p.jsx)("br",{}),Object(p.jsxs)("button",{type:"button",className:"btn btn-outline-dark btn-sm m-1",disabled:!0,children:[t.stock," cantidades disponibles"]}),Object(p.jsx)("br",{}),Object(p.jsx)(i.b,{to:"/category/todos",children:Object(p.jsx)("button",{className:"btn btn-outline-success btn-sm m-1",children:"Volver"})}),Object(p.jsx)("h6",{children:"Medios de Pago:"}),Object(p.jsx)("img",{src:"/assets/mediosPago/mediosPago.png",alt:"distintos medios de pago",className:"w-75"})]})})]})]})};var q=function(){var e=Object(j.f)().itemId,t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)(!0),i=Object(l.a)(n,2),m=i[0],u=i[1];return Object(a.useEffect)((function(){x().collection("items").doc(e).get().then((function(e){return r(Object(o.a)({id:e.id},e.data()))})).catch((function(e){return alert("Error: ".concat(e))})).finally((function(){return u(!1)}))}),[e]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),m?Object(p.jsxs)(b.a,{children:[Object(p.jsxs)(d.a,{className:"m-5",variant:"success",disabled:!0,children:[Object(p.jsx)(O.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"}),"L O A D I N G ..."]})," "]}):Object(p.jsx)(R,{item:s})]})},D=c(44),E=c.n(D);var z=function(e){var t=e.greeting;return Object(p.jsxs)(b.a,{children:[Object(p.jsx)("h2",{className:"text-center pt-5 mt-5",children:t}),Object(p.jsx)(E.a,{children:Object(p.jsx)("img",{src:"assets/img/productos.png",className:"container pt-5",alt:"Refugio Tienda Deco productos"})}),Object(p.jsx)("h2",{className:"text-center p-3",children:"Objetos de Dise\xf1o para tu casa"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})};var B=function(){var e=C(),t=e.cartList,c=e.itemsCarrito,a=e.totalCart,s=e.clear,r=e.clearItem;return Object(p.jsx)(p.Fragment,{children:0===c()?Object(p.jsxs)(b.a,{children:[Object(p.jsx)("br",{}),Object(p.jsx)(E.a,{top:!0,children:Object(p.jsx)("h1",{className:"mt-5",children:"El carrito est\xe1 vac\xedo..."})}),Object(p.jsx)("br",{}),Object(p.jsx)("video",{loop:!0,autoPlay:!0,children:Object(p.jsx)("source",{src:"/assets/videos/carritoVacio.mp4",type:"video/mp4",alt:"Marketing illustrations by Storyset"})}),Object(p.jsx)("br",{}),Object(p.jsx)(d.a,{as:i.b,to:"/category/todos",variant:"success",className:"mx-2",children:"Hac\xe9 tu COMPRA!!!"})]}):Object(p.jsx)("div",{children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"mt-2 p-4",children:"Carrito de compras"}),Object(p.jsxs)("table",{className:"table table-bordered table-primary text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{className:"fs-5 fw-bold",children:[Object(p.jsx)("th",{children:"Id."}),Object(p.jsx)("th",{children:"Cantidad"}),Object(p.jsx)("th",{children:"Descripci\xf3n"}),Object(p.jsx)("th",{children:"Precio Unit"}),Object(p.jsx)("th",{children:"Subtotal"}),Object(p.jsx)("th",{children:"Eliminar"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.id}),Object(p.jsx)("td",{children:e.quantity}),Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:Intl.NumberFormat("es-AR",{currency:"ARS",style:"currency"}).format(e.price)}),Object(p.jsx)("td",{children:Intl.NumberFormat("es-AR",{currency:"ARS",style:"currency"}).format(e.quantity*e.price)}),Object(p.jsx)("td",{className:"bi bi-trash-fill",onClick:function(){return r(e.id)}})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("h5",{children:"Totales de unidades del carrito: ".concat(c()," -  Importe Total de la Compra ").concat(Intl.NumberFormat("es-AR",{currency:"ARS",style:"currency"}).format(a()))}),Object(p.jsx)("br",{}),Object(p.jsx)("h6",{children:"Medios de Pago:"}),Object(p.jsx)("img",{src:"/assets/mediosPago/mediosPago.png",alt:"distintos medios de pago",className:"w-50 m-3"}),Object(p.jsx)("br",{}),Object(p.jsx)(d.a,{as:i.b,to:"/category/todos",variant:"success",className:"mx-2",children:"Seguir comprando"}),Object(p.jsx)(d.a,{as:i.b,to:"/",variant:"success",className:"mx-2",children:"Finalizar compra"}),Object(p.jsx)(d.a,{onClick:function(){s()},variant:"success",className:"mx-2",children:"Vaciar carrito"}),Object(p.jsx)("br",{})]})})})})};c(78);var M=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"appHeader p-5",children:Object(p.jsx)(w,{children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(A,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",children:Object(p.jsx)(z,{greeting:"Bienvenidos a REFUGIO - Tienda Deco"})}),Object(p.jsx)(j.a,{exact:!0,path:"/category/:categoryId",component:v}),Object(p.jsx)(j.a,{exact:!0,path:"/item/:itemId",component:q}),Object(p.jsx)(j.a,{exact:!0,path:"/cart",component:B})]})]})})})})};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.4f3e99af.chunk.js.map