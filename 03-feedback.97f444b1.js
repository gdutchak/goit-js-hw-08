var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(x,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=i}function x(){var e=m();if(j(e))return h(e);u=setTimeout(x,function(e){var n=t-(e-f);return p?d(n,i-(e-c)):n}(e))}function h(e){return u=void 0,g&&o?y(e):(o=r=void 0,a)}function w(){var e=m(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(p)return u=setTimeout(x,t),y(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:h(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const g={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),submit:document.querySelector("button")};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(g.input.value=e.email,g.textarea.value=e.message)}();const y={};g.form.addEventListener("input",t((e=>{y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),g.form.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),g.form.reset(),console.log(y)}));
//# sourceMappingURL=03-feedback.97f444b1.js.map
