function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,u,l,f=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,f=t,a=e.apply(r,n)}function S(e){return f=e,u=setTimeout(j,t),c?b(e):a}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=r}function j(){var e=v();if(w(e))return E(e);u=setTimeout(j,function(e){var n=t-(e-l);return s?m(n,r-(e-f)):n}(e))}function E(e){return u=void 0,g&&i?b(e):(i=o=void 0,a)}function h(){var e=v(),n=w(e);if(i=arguments,o=this,l=e,n){if(void 0===u)return S(l);if(s)return u=setTimeout(j,t),b(l)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=l=o=u=void 0},h.flush=function(){return void 0===u?a:E(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),S=b.querySelector('input[name="email"]'),w=b.querySelector('textarea[name="message"]');S.addEventListener("input",(()=>{localStorage.setItem("email",S.value)})),w.addEventListener("input",(()=>{localStorage.setItem("message",w.value)})),window.addEventListener("load",(()=>{const e=localStorage.getItem("email"),t=localStorage.getItem("message");e&&(S.value=e),t&&(w.value=t)})),b.addEventListener("submit",(()=>{localStorage.removeItem("email"),localStorage.removeItem("message")})),b.addEventListener("input",(()=>{const e={email:S.value,message:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}));b.addEventListener("input",e(t)((()=>{const e={email:S.value,message:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));
//# sourceMappingURL=03-feedback.fe654bf8.js.map
