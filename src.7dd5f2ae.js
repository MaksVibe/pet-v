parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/hero-mob-img-x2.jpg":[["hero-mob-img-x2.c5a97307.jpg","ZRLL"],"ZRLL"],"./../images/chevrondown1.svg":[["chevrondown1.3c7de4b8.svg","DNf8"],"DNf8"]}],"FbTA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={searchBtn:document.getElementById("searchBtn"),searchBar:document.getElementById("searchbar"),navMenu:document.getElementById("mob-menu"),burgerMenu:document.querySelector(".icon-menu-burger"),navMenuLink:document.querySelectorAll(".footer__nav-list--link"),navSublist:document.querySelector(".footer__nav-list--subList")};exports.default=e;
},{}],"ujUv":[function(require,module,exports) {
"use strict";var e=t(require("./refs"));function t(e){return e&&e.__esModule?e:{default:e}}function r(){e.default.searchBar.classList.toggle("visually-hidden")}e.default.searchBtn.addEventListener("click",r);
},{"./refs":"FbTA"}],"XFiP":[function(require,module,exports) {
"use strict";var e=i(require("./refs"));function i(e){return e&&e.__esModule?e:{default:e}}let l=!1;const a='<div class="backdrop"></div>\n<div class="mobile-menu">\n  <span class="mobile-menu__logo">Aurora</span>\n  <ul class="mobile-menu__list">\n    <li class="mobile-menu__item"><a href="/">what\'s new</a></li>\n    <li class="mobile-menu__item"><a href="/">women</a></li>\n    <li class="mobile-menu__item"><a href="/">accessories</a></li>\n    <li class="mobile-menu__item"><a href="/">kids</a></li>\n    <li class="mobile-menu__item"><a href="/">beauty</a></li>\n    <li class="mobile-menu__item"><a href="/">outlet</a></li>\n    <li class="mobile-menu__item"><a href="/">stories</a></li>\n  </ul>\n  <p class="mobile-menu__log"><a href="">Sign in</a> | <a href="">Register</a></p>\n</div>',n=e=>{if(e.preventDefault(),l)return!1;s()},s=()=>{l=!0,e.default.navMenu.innerHTML=a};e.default.burgerMenu.addEventListener("click",n);
},{"./refs":"FbTA"}],"d4xn":[function(require,module,exports) {
"use strict";var e=n(require("./refs"));function n(e){return e&&e.__esModule?e:{default:e}}function t(e){e.target.nextElementSibling.classList.toggle("show"),e.target.parentNode.classList.toggle("open")}console.log("refs.navMenuLink",e.default.navMenuLink),e.default.navMenuLink.forEach(e=>e.addEventListener("click",t));
},{"./refs":"FbTA"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./scripts/refs"),require("./scripts/mob-searchbar"),require("./scripts/mob-menu"),require("./scripts/mob-submenu");
},{"./sass/main.scss":"clu1","./scripts/refs":"FbTA","./scripts/mob-searchbar":"ujUv","./scripts/mob-menu":"XFiP","./scripts/mob-submenu":"d4xn"}]},{},["Focm"], null)
//# sourceMappingURL=/pet-v/src.7dd5f2ae.js.map