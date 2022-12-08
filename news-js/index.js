(()=>{"use strict";var n={389:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".pagination {\n  display: flex;\n  margin-top: 30px;\n  gap: 15px;\n  justify-content: center;\n}\n\n.pagination__btn {\n  background-color: transparent;\n  color: #fff;\n  font-size: 18px;\n  padding: 0;\n  border: 2px solid #30c5ff;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 15px;\n  transition: all .3s ease-in-out;\n}\n.pagination__btn:hover {\n  background-color: #30c5ff;\n  color: #111;\n  font-weight: 700;\n}\n.pagination__btn:first-child {\n  order: 1;\n}\n.pagination__btn:nth-child(2) {\n  order: 3;\n}\n.pagination__btn:nth-child(3) {\n  order: 4;\n}\n.pagination__btn:nth-child(4) {\n  order: 5;\n}\n.pagination__btn:nth-child(5) {\n  order: 7;\n}\n.pagination__btn--current {\n  pointer-events: none;\n  background-color: #30c5ff;\n  color: #111;\n  font-weight: 700;\n}\n.dots {\n  font-size: 24px;\n  display: none;\n  text-align: center;\n  cursor: default;\n  transform: translateY(10px);\n  color: #fff;\n  letter-spacing: 2px;\n}\n.dots:nth-child(6) {\n  order: 2;\n}\n.dots:nth-child(7) {\n  order: 6;\n}\n.dots--active {\n  display: inline-block;\n}\n@media (max-width: 360px) {\n  .pagination {\n    gap: 8px;\n  }\n  .pagination__btn {\n    width: 45px;\n    height: 45px;\n  }\n}\n",""]);const i=r},669:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n@media (max-width: 1600px) {\n  .news {\n    padding-left: 280px;\n  }\n}\n@media (max-width: 1024px) {\n  .news {\n    padding: 0 15px;\n  }\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=r},501:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(645),r=t.n(o),i=t(667),a=t.n(i),s=t(79),c=r()((function(n){return n[1]})),l=a()(s);c.push([n.id,".sources {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  padding: 15px;\n  background-color: #17181c;\n  z-index: 200;\n  padding-top: 70px;\n}\n.sources__container {\n  width: 250px;\n  height: 86vh;\n  overflow: auto;\n  font: 300 1em 'Fira Sans', sans-serif;\n  display: flex;\n  flex-direction: column;\n  padding-right: 5px;\n  padding-top: 4px;\n}\n.sources__container::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 8px;\n}\n.sources__container::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  background: linear-gradient(#70d6ff, #30c5ff);\n}\n.sources__search {\n  background: #17181c;\n  border: 2px solid #fff;\n  font: inherit;\n  padding: 10px 15px;\n  color: white;\n  width: 250px;\n  display: block;\n  position: absolute;\n  top: 20px;\n  background-image: url("+l+");\n  background-repeat: no-repeat;\n  background-position: center right 5px;\n  background-size: 30px;\n  outline: none;\n  transition: all .3s ease-in-out;\n}\n.sources__search:focus {\n  border-color: #30c5ff;\n}\n.cross {\n  display: none;\n}\n.source__item {\n  background: none;\n  border: 2px solid #30c5ff;\n  font: inherit;\n  line-height: 1;\n  padding: 1em 2em;\n  color: #70d6ff;\n  transition: 0.25s;\n  cursor: pointer;\n  text-align: center;\n}\n.source__item:not(:last-child) {\n  margin-bottom: 10px;\n}\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n.source__item--active {\n  border-color: #3fcc59;\n  color: #69db7e;\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n  pointer-events: none;\n}\n.source__item--default {\n  border: none;\n}\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n@media (max-width: 1024px) {\n  .sources {\n    transform: translateX(-100vw);\n    transition: all .3s ease-in-out;\n  }\n  .sources--active {\n    transform: translateX(0);\n  }\n  .cross {\n    width: 45px;\n    height: 30px;\n    position: absolute;\n    right: -60px;\n    top: 45px;\n    display: block;\n    opacity: 0;\n    transition: all .3s ease-in-out;\n  }\n  .sources--active .cross {\n    opacity: 1;\n  }\n  .cross__line {\n    position: absolute;\n    height: 3px;\n    width: 100%;\n    background-color: #fff;\n  }\n  .cross__line:first-child {\n    transform: rotate(45deg);\n    top: 50%;\n  }\n  .cross__line:last-child {\n    transform: rotate(-45deg);\n    top: 50%;\n  }\n}\n@media (max-width: 400px) {\n  .cross {\n    width: 35px;\n    height: 25px;\n  }\n}\n",""]);const u=c},767:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(645),r=t.n(o),i=t(667),a=t.n(i),s=t(405),c=t(981),l=r()((function(n){return n[1]})),u=a()(s),d=a()(c);l.push([n.id,"*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\nbody {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n    margin: 0;\n    min-width: 320px;\n}\n.site-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  justify-content: space-between;\n}\n.main {\n  flex-grow: 1;\n}\n.container {\n  max-width: 1200px;\n  padding: 0 10px;\n  margin: 0 auto;\n}\n.header {\n  padding: 10px 30px;\n}\n.header__title {\n  text-align: center;\n  font-size: 40px;\n  font-weight: 800;\n}\n.burger {\n  display: none;\n}\n.footer {\n  padding: 20px 0;\n}\n.footer__container {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  gap: 30px;\n}\n.footer__container p {\n  margin: 0;\n}\n.footer .copyright {\n  font-size: 14px;\n  color: #333;\n  text-align: center;\n}\n.footer .copyright a {\n    color: #444;\n}\n.footer .copyright a:hover {\n    color: #555;\n}\n.footer .copyright:before {\n    content: '©';\n}\n.footer__info {\n  display: flex;\n  gap: 20px;\n  align-items: end;\n}\n.footer__info span {\n  font-size: 24px;\n}\n.footer__link {\n  font-size: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 50px;\n  transition: all .3s ease-in-out;\n}\n.footer__link:hover {\n  filter: brightness(0.6);\n}\n.footer__link:first-child {\n  width: 50px;\n  background-image: url("+u+");\n}\n.footer__link:nth-child(2) {\n  width: 134px;\n  background-image: url("+d+");\n}\n@media (max-width: 1600px) {\n  .header {\n    padding-left: 280px;\n  }\n}\n@media (max-width: 1024px) {\n  .header {\n    padding: 5px 15px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 730px;\n    margin: 0 auto;\n  }\n  .burger {\n    display: block;\n    width: 45px;\n    height: 30px;\n    position: relative;\n    cursor: pointer;\n    transition: all .3s ease-in-out;\n    z-index: 300;\n  }\n  .burger__line {\n    height: 3px;\n    position: absolute;\n    width: 100%;\n    background-color: #fff;\n  }\n  .burger__line:first-child {\n    top: 0;\n  }\n  .burger__line:nth-child(2) {\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .burger__line:last-child {\n    bottom: 0;\n  }\n  .burger--active {\n    opacity: 0;\n  }\n}\n@media (max-width: 730px) {\n  .header {\n    width: 100%;\n  }\n}\n@media (max-width: 400px) {\n  .burger {\n    width: 35px;\n    height: 25px;\n  }\n  .header__title {\n    font-size: 32px;\n  }\n}\n",""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var s=n[r],c=e.base?s[0]+e.base:s[0],l=t[c]||0,u="".concat(c," ").concat(l);t[c]=l+1;var d=a(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:m(p,e),references:1}),o.push(u)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,h=0;function m(n,e){var t,o,r;if(e.singleton){var i=h++;t=f||(f=c(e)),o=d.bind(null,t,i,!1),r=d.bind(null,t,i,!0)}else t=c(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var c=s(n,e),l=0;l<t.length;l++){var u=a(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=c}}}},405:(n,e,t)=>{n.exports=t.p+"f86940b93f664f640926.svg"},981:(n,e,t)=>{n.exports=t.p+"5478318bc087813cf161.svg"},79:(n,e,t)=>{n.exports=t.p+"92bf86b5ff2971d25ae5.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n,e=function(){return e=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},e.apply(this,arguments)},o=function(){function n(n,e){this.baseLink=n,this.options=e}return n.prototype.getResp=function(n,e){var t=n.endpoint,o=n.options,r=void 0===o?{}:o;void 0===e&&(e=function(){console.error("No callback for GET response")}),this.load("GET",t,e,r)},n.prototype.errorHandler=function(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log("Sorry, but there is ".concat(n.status," error: ").concat(n.statusText)),Error(n.statusText);return n},n.prototype.makeUrl=function(n,t){var o=e(e({},this.options),n),r="".concat(this.baseLink).concat(t,"?");return Object.keys(o).forEach((function(n){r+="".concat(n,"=").concat(o[n],"&")})),r.slice(0,-1)},n.prototype.load=function(n,e,t,o){void 0===o&&(o={}),fetch(this.makeUrl(o,e),{method:n}).then(this.errorHandler).then((function(n){return n.json()})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))},n}(),r=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});const i=function(n){function e(){return n.call(this,"https://newsapi-redirect-production.up.railway.app/",{apiKey:"3429168172e54064b53d38cfce9b9c22"})||this}return r(e,n),e}(o);var a=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();const s=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return a(e,n),e.prototype.getSources=function(e){n.prototype.getResp.call(this,{endpoint:"sources"},e)},e.prototype.getNews=function(e,t){for(var o=e.target,r=e.currentTarget;o!==r;){if(o.classList.contains("source__item")){var i=o.getAttribute("data-source-id");return void(i&&r.getAttribute("data-source")!==i&&(r.setAttribute("data-source",i),n.prototype.getResp.call(this,{endpoint:"everything",options:{sources:i}},t)))}o=o.parentNode}},e.prototype.getInitialNews=function(n){fetch("https://newsapi-redirect-production.up.railway.app/everything?apiKey=3429168172e54064b53d38cfce9b9c22&sources=abc-news").then((function(n){return n.json()})).then((function(e){return n(e)}))},e}(i);var c=t(379),l=t.n(c),u=t(389);l()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;var d=function(){function n(n,e){this.itemsCount=n,this.limit=e}return n.prototype.getPageCount=function(){return Math.ceil(this.itemsCount/this.limit)},n.prototype.getPagesArray=function(){var n=this.getPageCount();return Array(n).fill(0).map((function(n,e){return e+1}))},n.prototype.setPages=function(n){return[n-1,n,n+1]},n.prototype.pages=function(n){var e,t,o,r=this.getPageCount(),i=2,a=3,s=4;return n<=2&&(i=(e=this.setPages(3))[0],a=e[1],s=e[2]),n>2&&(i=(t=this.setPages(n))[0],a=t[1],s=t[2]),n>=r-1&&(i=(o=this.setPages(r-2))[0],a=o[1],s=o[2]),[1,i,a,s,r]},n.prototype.pagesElement=function(n,e){var t,o,r=document.createElement("div");r.addEventListener("click",e);var i=this.pages(n),a=this.getPageCount();r.classList.add("pagination");var s=i.map((function(e){var t,o=document.createElement("button");return(t=o.classList).add.apply(t,n===e?["pagination__btn","pagination__btn--current"]:["pagination__btn"]),o.textContent=String(e),o}));r.append.apply(r,s);var c=document.createElement("span");(t=c.classList).add.apply(t,n>3?["dots","dots--active"]:["dots"]),c.textContent="...";var l=document.createElement("span");return(o=l.classList).add.apply(o,n<a-2?["dots","dots--active"]:["dots"]),l.textContent="...",r.append(c,l),r},n}();const p=d;var f=t(669);l()(f.Z,{insert:"head",singleton:!1}),f.Z.locals;var h=function(){function n(n,e,t,o){void 0===n&&(n=[]),void 0===e&&(e=1),void 0===t&&(t=10),void 0===o&&(o=document.querySelector(".news")),this.newsData=n,this.page=e,this.limit=t,this.newsContainer=o}return n.prototype.draw=function(n){var e,t,o,r,i=this;if(this.newsData=n,this.newsData.length){var a=new p(this.newsData.length,this.limit),s=function(n){var e,t=n.target;if(t.classList.contains("pagination__btn")){var o=Number(t.textContent);i.page=o,null===(e=t.parentElement)||void 0===e||e.replaceWith(a.pagesElement(o,s)),i.render()}},c=a.pagesElement(1,s);this.render(),(null===(e=this.newsContainer)||void 0===e?void 0:e.querySelector(".pagination"))&&(null===(o=null===(t=this.newsContainer)||void 0===t?void 0:t.querySelector(".pagination"))||void 0===o||o.remove()),null===(r=this.newsContainer)||void 0===r||r.append(c)}},n.prototype.render=function(){var n;console.log(this);var e=this.limit*(this.page-1),t=this.newsData.length>=this.limit?this.newsData.filter((function(n,t){return t>=0+e&&t<10+e})):this.newsData,o=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");t.forEach((function(n,e){var t=null==r?void 0:r.content.cloneNode(!0),i=t.querySelector(".news__item"),a=t.querySelector(".news__meta-photo"),s=t.querySelector(".news__meta-author"),c=t.querySelector(".news__meta-date"),l=t.querySelector(".news__description-title"),u=t.querySelector(".news__description-source"),d=t.querySelector(".news__description-content"),p=t.querySelector(".news__read-more a");e%2&&i&&i.classList.add("alt"),a&&(a.style.backgroundImage="url(".concat(n.urlToImage||"img/news_placeholder.jpg",")")),s&&(s.textContent=n.author||n.source.name),c&&(c.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-")),l&&(l.textContent=n.title),u&&(u.textContent=n.source.name),d&&(d.textContent=n.description),null==p||p.setAttribute("href",n.url),o.append(t)}));var i=null===(n=this.newsContainer)||void 0===n?void 0:n.querySelector(".news__content");i.innerHTML="",i.append(o)},n}();const m=h;var g=t(501);l()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;const _=function(){function n(){}return n.prototype.draw=function(n){var e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp"),o=document.querySelector(".sources__container");if(null==o||o.querySelectorAll(".source__item").forEach((function(n){return n.remove()})),!n.length){var r=document.createElement("p");return r.classList.add("source__item","source__item--default"),r.textContent="No items found",void(null==o||o.append(r))}n.forEach((function(n){if(t){var o=t.content.cloneNode(!0),r=o.querySelector(".source__item-name"),i=o.querySelector(".source__item");r&&(r.textContent=n.name),i&&i.setAttribute("data-source-id",n.id),e.append(o)}})),null==o||o.append(e)},n}();var w=function(){function n(){this.news=new m,this.sources=new _,this.sourcesData=[]}return n.prototype.drawNews=function(n){var e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)},n.prototype.drawSources=function(n){var e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sourcesData=e,this.sources.draw(e)},n.prototype.filterSources=function(n){if(this.sourcesData.length){var e=this.sourcesData.filter((function(e){return e.name.toLowerCase().includes(n)}));this.sources.draw(e)}},n}(),v=function(){function n(){this.controller=new s,this.view=new w}return n.prototype.start=function(){var n,e=this,t=document.getElementById("search"),o=document.querySelector(".burger"),r=document.querySelector(".sources");r.addEventListener("click",(function(n){var t,o=n.target;o.classList.contains("source__item")&&(null===(t=document.querySelector(".source__item--active"))||void 0===t||t.classList.remove("source__item--active"),o.classList.add("source__item--active"),e.controller.getNews(n,(function(n){return n&&e.view.drawNews(n)})))})),t.addEventListener("input",(function(){clearTimeout(n),n=setTimeout((function(){e.view.filterSources(t.value.trim().toLowerCase())}),500)})),o.addEventListener("click",(function(n){n.stopPropagation(),r.classList.add("sources--active"),o.classList.add("burger--active")})),document.body.addEventListener("click",(function(){o.classList.remove("burger--active"),r.classList.remove("sources--active")})),this.controller.getSources((function(n){return n&&e.view.drawSources(n)})),this.controller.getInitialNews((function(n){var t;n&&(e.view.drawNews(n),null===(t=document.querySelector(".source__item"))||void 0===t||t.classList.add("source__item--active"))}))},n}();const b=v;var x=t(767);l()(x.Z,{insert:"head",singleton:!1}),x.Z.locals,(new b).start()})()})();
