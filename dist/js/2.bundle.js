(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{384:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(89),c=n(7),u=function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:"product-form-inputsadmin"},a.a.createElement("div",{className:"d-flex"},a.a.createElement("div",{className:"product-form-fieldproductname"},a.a.createElement("h2",null,"Product Name"),a.a.createElement("h5",null,e.name.map((function(e){return a.a.createElement("div",null,a.a.createElement("p",null,e),a.a.createElement("br",null))})))),a.a.createElement("div",{className:"product-form-fieldproductname"},a.a.createElement("h2",{style:{color:"black",marginTop:"0px"}},"Price"),a.a.createElement("h5",null,e.price.map((function(e){return a.a.createElement("div",null,a.a.createElement("p",null,e),a.a.createElement("br",null))})))))))};function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=o(Object(r.useState)([]),2),t=e[0],n=e[1],i=o(Object(r.useState)([]),2),m=i[0],f=i[1],s=Object(c.d)((function(e){return e.profile}));return Object(r.useEffect)((function(){var e,t,r;e=[],t=[],r=[],l.a.firestore().collection("orders").where("email","==",s.email).get().then((function(a){a.forEach((function(t){e.push({email:t.data().email,name:t.data().ProductName,price:t.data().price})})),console.log(e),e.forEach((function(e){t.push(e.name)})),e.forEach((function(e){r.push(e.price)})),n(t),f(r)})).catch((function(e){console.log("Error getting document:",e)}))}),[]),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("h3",{className:"text-subtle text-italic"},"Name: ",s.fullname),a.a.createElement("h3",{className:"text-subtle text-italic"},"Email: ",s.email)),a.a.createElement(u,{name:t,price:m}))}}}]);