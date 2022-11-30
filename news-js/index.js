(()=>{"use strict";var n={669:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=r},501:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n",""]);const i=r},767:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],c=e.base?a[0]+e.base:a[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var f=s(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:_(d,e),references:1}),o.push(l)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var s=r(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,l=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function d(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,m=0;function _(n,e){var t,o,r;if(e.singleton){var i=m++;t=p||(p=c(e)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=c(e),o=d.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=s(t[o]);i[r].references--}for(var c=a(n,e),u=0;u<t.length;u++){var l=s(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n,e=function(){return e=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},e.apply(this,arguments)},o=function(){function n(n,e){this.baseLink=n,this.options=e}return n.prototype.getResp=function(n,e){var t=n.endpoint,o=n.options,r=void 0===o?{}:o;void 0===e&&(e=function(){console.error("No callback for GET response")}),this.load("GET",t,e,r)},n.prototype.errorHandler=function(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log("Sorry, but there is ".concat(n.status," error: ").concat(n.statusText)),Error(n.statusText);return n},n.prototype.makeUrl=function(n,t){var o=e(e({},this.options),n),r="".concat(this.baseLink).concat(t,"?");return Object.keys(o).forEach((function(n){r+="".concat(n,"=").concat(o[n],"&")})),r.slice(0,-1)},n.prototype.load=function(n,e,t,o){void 0===o&&(o={}),fetch(this.makeUrl(o,e),{method:n}).then(this.errorHandler).then((function(n){return n.json()})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))},n}(),r=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});const i=function(n){function e(){return n.call(this,"https://newsapi.org/v2/",{apiKey:"3429168172e54064b53d38cfce9b9c22"})||this}return r(e,n),e}(o);var s=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();const a=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return s(e,n),e.prototype.getSources=function(e){n.prototype.getResp.call(this,{endpoint:"sources"},e)},e.prototype.getNews=function(e,t){for(var o=e.target,r=e.currentTarget;o!==r;){if(o.classList.contains("source__item")){var i=o.getAttribute("data-source-id");return void(i&&r.getAttribute("data-source")!==i&&(r.setAttribute("data-source",i),n.prototype.getResp.call(this,{endpoint:"everything",options:{sources:i}},t)))}o=o.parentNode}},e}(i);var c=t(379),u=t.n(c),l=t(669);u()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var f=function(){function n(){}return n.prototype.draw=function(n){var e=n.length>=10?n.filter((function(n,e){return e<10})):n,t=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp"),r=document.querySelector(".news");e.forEach((function(n,e){var r=null==o?void 0:o.content.cloneNode(!0),i=r.querySelector(".news__item"),s=r.querySelector(".news__meta-photo"),a=r.querySelector(".news__meta-author"),c=r.querySelector(".news__meta-date"),u=r.querySelector(".news__description-title"),l=r.querySelector(".news__description-source"),f=r.querySelector(".news__description-content"),d=r.querySelector(".news__read-more a");e%2&&i&&i.classList.add("alt"),s&&(s.style.backgroundImage="url(".concat(n.urlToImage||"img/news_placeholder.jpg",")")),a&&(a.textContent=n.author||n.source.name),c&&(c.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-")),u&&(u.textContent=n.title),l&&(l.textContent=n.source.name),f&&(f.textContent=n.description),null==d||d.setAttribute("href",n.url),t.append(r)})),r&&(r.innerHTML=""),null==r||r.appendChild(t)},n}();const d=f;var p=t(501);u()(p.Z,{insert:"head",singleton:!1}),p.Z.locals;const m=function(){function n(){}return n.prototype.draw=function(n){var e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp"),o=document.querySelector(".sources");n.forEach((function(n){if(t){var o=t.content.cloneNode(!0),r=o.querySelector(".source__item-name"),i=o.querySelector(".source__item");r&&(r.textContent=n.name),i&&i.setAttribute("data-source-id",n.id),e.append(o)}})),null==o||o.append(e)},n}();var _=function(){function n(){this.news=new d,this.sources=new m}return n.prototype.drawNews=function(n){var e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)},n.prototype.drawSources=function(n){var e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)},n}();const h=function(){function n(){this.controller=new a,this.view=new _}return n.prototype.start=function(){var n,e=this;null===(n=document.querySelector(".sources"))||void 0===n||n.addEventListener("click",(function(n){return e.controller.getNews(n,(function(n){n&&e.view.drawNews(n)}))})),this.controller.getSources((function(n){n&&e.view.drawSources(n)}))},n}();var w=t(767);u()(w.Z,{insert:"head",singleton:!1}),w.Z.locals,(new h).start()})()})();