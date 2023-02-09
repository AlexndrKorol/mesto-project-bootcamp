(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t,n){t?(e.disabled=!1,e.classList.remove(n.inactiveButtonClass)):(e.disabled=!0,e.classList.add(n.inactiveButtonClass))}e.d({},{W:()=>J,Y:()=>N});var r=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__name"),u=document.querySelector(".profile__profession"),i=document.querySelector(".profile__avatar"),l=document.querySelector(".popup_profile"),s=document.querySelector(".popup_place"),d=document.querySelector(".popup_photo"),p=document.querySelector(".popup_avatar"),f=document.querySelector(".popup__image"),m=document.querySelector(".popup__caption"),v=document.forms["profile-form"],_=v.querySelector(".popup__name"),y=v.querySelector(".popup__description"),h=document.forms["place-form"],b=h.querySelector(".popup__name"),S=h.querySelector(".popup__description"),E=document.forms["avatar-form"],k=E.querySelector(".popup__description"),q=document.querySelector(".popup_place .popup__submit-button"),L=document.querySelector(".popup_profile .popup__submit-button"),g=document.querySelector(".popup_avatar .popup__submit-button");function C(e){var t=function(){e.classList.remove("popup_opened"),window.removeEventListener("keydown",n),e.removeEventListener("click",o)},n=function(e){!0==("Escape"===e.key)&&t()},o=function(e){var n=e.target.classList.contains("popup"),o=e.target.classList.contains("popup__close-button");(n||o)&&t()};e.closePopup=t,e.addEventListener("click",o),window.addEventListener("keydown",n),e.classList.add("popup_opened")}function A(e){e.closePopup()}r.addEventListener("click",(function(){_.value=_.value||a.textContent,y.value=y.value||u.textContent,C(l)})),c.addEventListener("click",(function(){C(s)})),i.addEventListener("click",(function(){C(p)}));var w=document.querySelector(".elements");function x(e,t){t.textContent=e?"Сохранить...":t===q?"Создать":"Сохранить"}var j=function(e,t){return fetch(e,t).then(O)};function O(e){return e.ok?e.json():Promise.reject("Возникла ошибка: ".concat(e.status))}var T=function(e){e.reset()},P={url:"https://nomoreparties.co/v1/wbf-cohort-5",headers:{authorization:"73a42daa-c9aa-4a24-beec-5a53978226fa","Content-Type":"application/json"}},D=document.querySelector("#element-template").content.querySelector(".elements__item");function I(e){var t=D.cloneNode(!0),n=t.querySelector(".elements__image"),o=t.querySelector(".elements__item-title"),r=t.querySelector(".elements__like-button"),c=t.querySelector(".elements__delete-button"),a=t.querySelector(".elements__like-count");return r.addEventListener("click",(function(){var t;r.classList.contains("elements__like-button_active")?(t=e._id,j("".concat(P.url,"/cards/likes/").concat(t),{method:"DELETE",headers:P.headers})).then((function(e){a.textContent=e.likes.length,r.classList.remove("elements__like-button_active")})).catch((function(e){return console.log("Ошибка связана с лайком",e)})):function(e){return j("".concat(P.url,"/cards/likes/").concat(e),{method:"PUT",headers:P.headers})}(e._id).then((function(e){a.textContent=e.likes.length,r.classList.add("elements__like-button_active")})).catch((function(e){return console.log("Ошибка связана с лайком",e)}))})),n.addEventListener("click",(function(){f.src=e.link,f.alt=e.link,f.title=e.link,m.textContent=e.name,C(d)})),c.addEventListener("click",(function(){var n;(n=e._id,j("".concat(P.url,"/cards/").concat(n),{method:"DELETE",headers:P.headers})).then(t.remove()).catch((function(e){return console.log(e)}))})),o.textContent=e.name,n.src=e.link,n.alt=e.name,a.textContent=e.likes.length,e.owner._id!==N&&c.classList.add("elements__delete-button_hidden"),e.likes.forEach((function(e){e._id===N&&r.classList.add("elements__like-button_active")})),t}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var N="";Promise.all([j("".concat(P.url,"/users/me"),{method:"GET",headers:P.headers}),j("".concat(P.url,"/cards"),{method:"GET",headers:P.headers})]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];i.src=r.avatar,a.textContent=r.name,u.textContent=r.about,N=r._id,c.forEach((function(e){var t=I(e);w.append(t)}))})).catch((function(e){console.log(e)})),h.addEventListener("submit",(function(e){var t,n;e.preventDefault(),(t=b.value,n=S.value,j("".concat(P.url,"/cards"),{method:"POST",headers:P.headers,body:JSON.stringify({name:"".concat(t),link:"".concat(n)})})).then((function(e){x(!0,q),o(q,!1,J),w.prepend(I(e)),A(s),T(h)})).catch((function(){console.error("Ошибка создания карточки")})).finally((function(){x(!1,q),o(q,!1,J)}))})),v.addEventListener("submit",(function(e){var t,n;e.preventDefault(),(t=_.value,n=y.value,j("".concat(P.url,"/users/me"),{method:"PATCH",headers:P.headers,body:JSON.stringify({name:"".concat(t),about:"".concat(n)})})).then((function(e){x(!0,L),o(L,!1,J),a.textContent=e.name,u.textContent=e.about,A(l),T(v)})).catch((function(e){return console.error("Ошибка создания карточки: ".concat(e))})).finally((function(){x(!1,L),o(L,!1,J)}))})),E.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=k.value,j("".concat(P.url,"/users/me/avatar"),{method:"PATCH",headers:P.headers,body:JSON.stringify({avatar:"".concat(t)})})).then((function(e){x(!0,g),o(g,!1,J),i.src=e.avatar,i.alt=e.name,A(p),T(E)})).catch((function(e){return console.error("Ошибка создания аватара: ".concat(e))})).finally((function(){x(!1,g),o(g,!1,J)}))}));var J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error"};!function(e){t(document.querySelectorAll(e.formSelector)).forEach((function(n){!function(e,n){var r=e.querySelectorAll(n.inputSelector),c=e.querySelector(n.submitButtonSelector);o(c,e.checkValidity(),n),e.addEventListener("submit",(function(e){e.preventDefault()})),t(r).forEach((function(t){t.addEventListener("input",(function(){o(c,e.checkValidity(),n),function(e,t,n){var o=e.validity.valid,r=t.querySelector("#".concat(e.name,"-error"));r&&(o?function(e,t,n){e.classList.remove(n.inputErrorClass),t.textContent=""}(e,r,n):function(e,t,n){e.classList.add(n.inputErrorClass),t.textContent=e.validationMessage}(e,r,n))}(t,e,n)}))}))}(n,e)}))}(J)})();