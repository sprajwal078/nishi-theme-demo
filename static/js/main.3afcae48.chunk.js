(this["webpackJsonpnishi-theme"]=this["webpackJsonpnishi-theme"]||[]).push([[0],{34:function(e,a,t){e.exports=t(67)},40:function(e,a,t){},46:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),c=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=t(20),i=t(12),s=t.n(i),o=t(15),d=t(8),u=(t(40),t(1)),v=t(6),b=t(32),p=t.n(b),f=function(e){var a=e.logo,t=void 0===a?"":a,r=e.albums,c=void 0===r?[]:r,m=e.user,i=e.urlPrefix,s=void 0===i?"":i,o=Object(n.useState)(!1),u=Object(d.a)(o,2),b=u[0],f=u[1];function E(){f(!b)}return l.a.useEffect((function(){var e=document.getElementsByTagName("html")[0];return b?e.classList.add("overflow-hidden"):e.classList.contains("overflow-hidden")&&e.classList.remove("overflow-hidden"),function(){e.classList.contains("overflow-hidden")&&e.classList.remove("overflow-hidden")}}),[b]),l.a.createElement("nav",{className:"flex items-center pt-4 md:pt-8 px-5 md:px-16 sticky top-0 bg-white z-20"},!!t&&l.a.createElement("div",{className:"pb-3"},l.a.createElement("img",{src:t,alt:"logo",className:"w-10 h-10 md:w-16 md:h-16 rounded-full"})),l.a.createElement("div",{className:"ml-auto block md:hidden relative z-20"},l.a.createElement("button",{className:p()("hamburger hamburger--3dxy focus:outline-none",{"is-active":b}),type:"button",onClick:E},l.a.createElement("span",{className:"hamburger-box"},l.a.createElement("span",{className:"hamburger-inner"})))),b&&l.a.createElement("div",{className:"block md:hidden fixed top-0 left-0 w-full h-full pt-16 flex items-stretch z-10"},l.a.createElement("div",{className:"pt-2 bg-white flex-grow text-center flex flex-col text-3xl font-light justify-center"},l.a.createElement("div",{className:"mb-3"},l.a.createElement(v.b,{to:"".concat(s,"/gallery"),activeClassName:"border-b border-gray-600",className:"pb-1 ",onClick:E},"Gallery")),c.map((function(e){return l.a.createElement(l.a.Fragment,{key:e._id},!e.default&&l.a.createElement("div",{className:"mb-3"},l.a.createElement(v.b,{to:"".concat(s,"/album/").concat(e._id),activeClassName:"border-b border-gray-600",className:"pb-1 ",onClick:E},e.name)))})),l.a.createElement("div",{className:"mb-3"},l.a.createElement(v.b,{to:"".concat(s,"/about"),activeClassName:"border-b border-gray-600",className:"pb-1 ",onClick:E},"About Me")),l.a.createElement("div",{className:"mb-3"},l.a.createElement(v.b,{to:"".concat(s,"/contact"),activeClassName:"border-b border-gray-600",className:"pb-1 ",onClick:E},"Contact")),l.a.createElement("a",{href:"https://www.instagram.com/".concat(null===m||void 0===m?void 0:m.instaUsername,"/"),target:"__blank"},l.a.createElement("i",{className:"fab fa-instagram"})))),l.a.createElement("div",{className:"ml-auto font-light hidden md:block"},l.a.createElement(v.b,{to:"".concat(s,"/gallery"),activeClassName:"border-b border-gray-600",className:"pb-1 ml-16"},"Gallery"),c.map((function(e){return l.a.createElement(l.a.Fragment,{key:e._id},!e.default&&l.a.createElement(v.b,{to:"".concat(s,"/album/").concat(e._id),activeClassName:"border-b border-gray-600",className:"pb-1 ml-16"},e.name))})),l.a.createElement(v.b,{to:"".concat(s,"/about"),activeClassName:"border-b border-gray-600",className:"pb-1 ml-16"},"About Me"),l.a.createElement(v.b,{to:"".concat(s,"/contact"),activeClassName:"border-b border-gray-600",className:"pb-1 ml-16"},"Contact"),l.a.createElement("a",{href:"https://www.instagram.com/".concat(null===m||void 0===m?void 0:m.instaUsername,"/"),className:"ml-16 text-lg",target:"__blank"},l.a.createElement("i",{className:"fab fa-instagram"}))))},E=l.a.createContext({user:void 0,review:{items:[],count:0,score:0}}),g=function(){var e=l.a.useContext(E).user;return l.a.createElement("header",{className:"my-10 text-center font-heading md:pb-20 pt-8"},l.a.createElement("p",{className:"text-2xl mb-5"},"Hi, welcome to"),l.a.createElement("h1",{className:"text-4xl"},null===e||void 0===e?void 0:e.businessName))},x=(t(46),function(e){var a=e.images,t=void 0===a?[]:a;return l.a.createElement("div",{className:"langtang-Collage"},null===t||void 0===t?void 0:t.map((function(e,a){return l.a.createElement("img",{src:e,alt:"hair and makeup artist melbourne",key:a})})))}),h=function(){var e,a=l.a.useContext(E).user,t=null===a||void 0===a||null===(e=a.images)||void 0===e?void 0:e.map((function(e){return e.src}));return l.a.createElement("div",{className:"px-5 md:px-20 mb-10"},l.a.createElement(g,null),l.a.createElement(x,{images:t}))},N=function(e){var a=e.user;return l.a.createElement("footer",{className:"flex flex-col md:flex-row px-5 md:px-20 py-4 md:py-10 items-center mt:4 md:mt-10"},l.a.createElement("img",{src:"https://images.squarespace-cdn.com/content/5ee6e9f9eb40a04ae734a8b3/1592192570669-NQ047AXYVX5FGFK4W40W/Screen_Shot_2020-06-02_at_4.00.02_pm.png?content-type=image%2Fpng",alt:"powered by nishi.app"}),l.a.createElement("div",{className:"pt-6 md:pt-0 md:ml-auto uppercase font-light text-sm text-center"},l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),target:"__blank",className:"border-b external border-gray-600"},"Email"),l.a.createElement("span",{className:"inline-block mx-6"},"|"),l.a.createElement("a",{href:"//instagram.com/".concat(null===a||void 0===a?void 0:a.instaUsername),target:"__blank",className:"border-b external border-gray-600"},"Instagram")),l.a.createElement("p",{className:"mt-3 md:mt-0"},l.a.createElement("a",{href:"https://nishi.app",className:"border-b external border-gray-600 normal-case",target:"__blank"},"Made with Nishi.app"))))},y=t(18),w=t.n(y),k=function(){var e=l.a.useContext(E).user;return l.a.createElement("div",{className:"min-h-screen bg-gray -mt-20 md:-mt-40 md:-mb-10 pt-40 flex items-stretch mb-10"},l.a.createElement("div",{className:"flex flex-col justify-center px-6 md:px-20 text-2xl md:text-5xl font-heading"},l.a.createElement("p",{className:"border-b mb-8"},l.a.createElement("a",{href:"mailto:".concat(null===e||void 0===e?void 0:e.email),target:"__blank",className:"inline-block relative"},null===e||void 0===e?void 0:e.email,l.a.createElement("span",{className:"absolute bg-black pt-px w-full left-0 bottom-0 transform -translate-y-1"}))),l.a.createElement("p",{className:"border-b mb-8"},null===e||void 0===e?void 0:e.mobile),l.a.createElement("p",{className:"border-b mb-8"},"Based in ",null===e||void 0===e?void 0:e.location.city,", ",null===e||void 0===e?void 0:e.location.state," ",null===e||void 0===e?void 0:e.location.country)))},j=(t(64),function(e){var a=e.visible;return void 0!==a&&a?l.a.createElement("div",{className:"fixed top-0 left-0 right-0 bottom-0 langtang-Spinner z-30 flex justify-center items-center"},l.a.createElement("div",null,l.a.createElement("div",{className:"lds-spinner"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))):null}),_=t(19),C=(t(65),function(e){var a,t=e.review;return l.a.createElement("div",{className:"langtang-testimonial-card text-center mb-10 md:mb-0"},!!(null===t||void 0===t||null===(a=t.images)||void 0===a?void 0:a.length)&&l.a.createElement("figure",{className:"pt-full relative block mb-4"},l.a.createElement("img",{src:null===t||void 0===t?void 0:t.images[0],className:" absolute top-0 left-0 w-full h-full object-center object-cover",alt:"testimonial"})),l.a.createElement("p",{className:"my-4"},null===t||void 0===t?void 0:t.comments),l.a.createElement("p",{className:"mb-4"},"- ",null===t||void 0===t?void 0:t.customerName),l.a.createElement("p",{className:"text-sm"},"Verified review by Nishi.app on ",null===t||void 0===t?void 0:t.date))}),O=function(){var e,a=l.a.useContext(E).review,t=l.a.useState([]),n=Object(d.a)(t,2),r=n[0],c=n[1],m=l.a.useState(0),i=Object(d.a)(m,2),s=i[0],o=i[1];function u(){a.items.length&&(c([].concat(Object(_.a)(r),Object(_.a)(a.items.slice(s,s+3)))),o(s+3))}return l.a.useEffect((function(){u()}),[a]),l.a.createElement("div",{className:"bg-gray -mx-5 md:-mx-20 mt-4 md:mt-10"},l.a.createElement("div",{className:"px-5 md:px-20 py-10"},l.a.createElement("header",{className:"text-center mb-5"},l.a.createElement("h2",{className:"font-heading text-4xl"},"Testimonials"),l.a.createElement("p",{className:"font-light mt-5 mb-10"},"Reviews are independently collected by Nishi.app")),l.a.createElement("div",{className:"md:flex mb-10 justify-center flex-wrap"},null===r||void 0===r?void 0:r.map((function(e){return l.a.createElement("div",{className:"flex-none md:w-4/12 p-3",key:e._id},l.a.createElement(C,{review:e}))}))),r.length<(null===(e=a.items)||void 0===e?void 0:e.length)&&l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"inline-block border-black border-2 px-8 py-4 hover:bg-black hover:text-white focus:outline-none",onClick:u},"See More"))))},S=function(e){var a=e.kit,t=void 0===a?[]:a;return l.a.createElement("div",{className:"py-10"},l.a.createElement("header",{className:"text-center mb-5 md:mb-10"},l.a.createElement("h2",{className:"font-heading text-5xl"},"Kit")),l.a.createElement("div",{className:"px-5 md:px-20  md:grid grid-cols-4 gap-4 text-center font-heading text-2xl"},t.map((function(e,a){return l.a.createElement("div",{key:a,className:"mb-8 md:mb-3 "},e)}))))},M=function(){var e,a=Object(u.h)().albumId,t=Object(u.g)(),n=l.a.useContext(E).user,r=l.a.useState({}),c=Object(d.a)(r,2),m=c[0],i=c[1];return l.a.useEffect((function(){var e,l,r;console.log("here"),(null===n||void 0===n||null===(e=n.albums)||void 0===e?void 0:e.length)&&(null===n||void 0===n||null===(l=n.albums)||void 0===l?void 0:l.some((function(e){return e._id===a})))||t.push("/gallery");var c=null===n||void 0===n||null===(r=n.albums)||void 0===r?void 0:r.find((function(e){return e._id===a}));i(c)}),[a]),l.a.createElement("div",{className:"px-5 md:px-20 pt-5"},l.a.createElement("header",{className:"px-5 md:px-40 text-center md:text-left py-5 md:py-20 flex items-center"},l.a.createElement("h1",{className:"font-heading text-4xl md:text-5xl"},m.name),l.a.createElement("div",{className:"ml-auto text-lg"},"\u2b07")),l.a.createElement(x,{images:null===m||void 0===m||null===(e=m.images)||void 0===e?void 0:e.map((function(e){return e.src}))}),l.a.createElement(O,null),l.a.createElement(S,{kit:(null===n||void 0===n?void 0:n.kit.map((function(e){return e.name})))||[]}))},F=function(){var e=l.a.useContext(E).user;return l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-10 md:px-20 md:py-20"},l.a.createElement("header",{className:"md:mb-10"},l.a.createElement("h1",{className:"font-heading text-5xl md:mb-10"},null===e||void 0===e?void 0:e.businessName),l.a.createElement("h2",{className:"font-heading text-3xl"},null===e||void 0===e?void 0:e.slogan)),l.a.createElement("aside",{className:"md:mb-10"},null===e||void 0===e?void 0:e.bio),l.a.createElement("div",null),l.a.createElement("aside",null,l.a.createElement("header",{className:"mb-5"},l.a.createElement("h2",{className:"font-heading text-3xl"},"My Kit")),l.a.createElement("div",null,null===e||void 0===e?void 0:e.kit.map((function(e){return e.name})).join(", "))))},I=function(e){var a,t,r=e.website,c=e.urlPrefix,i=void 0===c?"":c,v=Object(n.useState)({user:void 0,review:{count:0,items:[],score:0}}),b=Object(d.a)(v,2),p=b[0],g=b[1],x=Object(n.useState)(!1),y=Object(d.a)(x,2),_=y[0],C=y[1];function O(){return(O=Object(o.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),a={website:r},e.next=5,w.a.get("https://api-staging.flayr.me/v1/website",{params:a});case 5:t=e.sent,C(!1),g(Object.assign({},p,{user:t.data})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),C(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function S(){return(S=Object(o.a)(s.a.mark((function e(a){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return C(!0),e.next=4,w.a.get("https://api-staging.flayr.me/v1/website/reviews/"+a);case 4:t=e.sent,C(!1),n={count:t.data.count,items:t.data.reviews,score:t.data.avgReviewScore},g(Object(m.a)(Object(m.a)({},p),{},{review:n}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[r]),Object(n.useEffect)((function(){var e;!function(e){S.apply(this,arguments)}(null===(e=p.user)||void 0===e?void 0:e._id)}),[p.user]),l.a.createElement(E.Provider,{value:p},l.a.createElement("div",{className:"text-black langtang"},l.a.createElement(f,{logo:null===(a=p.user)||void 0===a?void 0:a.profileImg,albums:null===(t=p.user)||void 0===t?void 0:t.albums,user:p.user,urlPrefix:i}),l.a.createElement(u.d,null,l.a.createElement(u.a,{exact:!0,path:"".concat(i,"/"),to:"".concat(i,"/gallery")}),l.a.createElement(u.b,{exact:!0,path:"".concat(i,"/gallery"),component:h}),l.a.createElement(u.b,{exact:!0,path:"".concat(i,"/album/:albumId"),component:M}),l.a.createElement(u.b,{exact:!0,path:"".concat(i,"/about"),component:F}),l.a.createElement(u.b,{exact:!0,path:"".concat(i,"/contact"),component:k})),l.a.createElement(N,{user:p.user})),l.a.createElement(j,{visible:_}))};t(66);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v.a,null,l.a.createElement(I,{website:"https://pj-bakes.nishi.app",urlPrefix:"/nishi-theme-demo"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.3afcae48.chunk.js.map