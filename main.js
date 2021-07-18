(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardTemplate=n}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.cloneNode(!0)}},{key:"makeCard",value:function(){return this.newCard=this._getTemplate(),this.newCard.querySelector(".card__img").src=this._link,this.newCard.querySelector(".card__place").textContent=this._name,this.newCard}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"generateCards",value:function(){var e=this;this._items.forEach((function(t){e.addItem(t)})),this._setEventListeners()}},{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}},{key:"_cardDeleteHandler",value:function(e){e.addEventListener("click",(function(e){e.target.classList.contains("card__bin-icon")&&e.target.parentNode.remove()}))}},{key:"_cardLikeHandler",value:function(e){var t=this;e.addEventListener("click",(function(e){e.target.classList.contains("card__like-icon")&&t._cardLikeToggler(e)}))}},{key:"_cardLikeToggler",value:function(e){e.target.classList.contains("is-liked")?(e.target.src="./images/like-icon.svg",e.target.classList.remove("is-liked")):(e.target.src="./images/like-is-liked.svg",e.target.classList.add("is-liked"))}},{key:"_setEventListeners",value:function(){this._cardDeleteHandler(this._container),this._cardLikeHandler(this._container)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.remove("popup_closed")}},{key:"close",value:function(){this._popupSelector.classList.add("popup_closed")}},{key:"_formToggleClass",value:function(){this._popupSelector.classList.toggle("popup_closed")}},{key:"_handleEscClose",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Escape"===t.key&&e._popupSelector.classList.add("popup_closed")}))}},{key:"_overlayFormHandler",value:function(){var e=this;this._popupSelector.addEventListener("click",(function(t){t.target.classList.contains("overlay")&&e._popupSelector.classList.add("popup_closed")}))}},{key:"_setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".close-button").addEventListener("click",(function(){e.close()})),this._handleEscClose(),this._overlayFormHandler()}}])&&o(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function c(e){var t,n=e.popupSelector,r=e.callback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,{popupSelector:n}))._callback=r,t._inputs=t._popupSelector.querySelectorAll(".popup__field"),t}return t=c,(n=[{key:"_getInputValues",value:function(){return{name:this._inputs[0].value,link:this._inputs[1].value}}},{key:"_setEventListeners",value:function(){var e=this;u(p(c.prototype),"_setEventListeners",this).call(this),this._popupSelector.querySelector(".info-edit__submit").addEventListener("click",(function(t){e._callback(e._getInputValues()),e.close(),t.stopImmediatePropagation()}))}},{key:"_handleSubmitListener",value:function(){this._callback(this._getInputValues()),this.close()}},{key:"_clearInputValues",value:function(){this._inputs.forEach((function(e){return e.value=""}))}},{key:"close",value:function(){u(p(c.prototype),"close",this).call(this),this._clearInputValues()}},{key:"open",value:function(){this._clearInputValues(),u(p(c.prototype),"open",this).call(this),this._setEventListeners()}},{key:"setInputValues",value:function(e){this._inputs[0].value=e.userName,this._inputs[1].value=e.userJob}}])&&a(t.prototype,n),c}(i);function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=n.formElement,o=n.inputElement,i=n.errorElement,c=n.errorEnabled,a=n.submitButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._formElement=this._popupSelector.querySelector(r),this._inputElement=o,this._errorElement=i,this._errorEnabled=c,this._inputs=Array.from(this._formElement.querySelectorAll(this._inputElement)),this._submitButton=this._formElement.querySelector(a)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}},{key:"_setInputListeners",value:function(){var e=this;this._submitButtonToggler(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._submitButtonToggler(e._formElement)}))}))}},{key:"_submitButtonToggler",value:function(){this._hasInvalidInput(this._formElement)?this._submitButton.classList.remove("info-edit__submit_enabled"):this._submitButton.classList.add("info-edit__submit_enabled")}},{key:"_openInputError",value:function(e){var t=document.querySelector(".".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._errorEnabled)}},{key:"_hideInputError",value:function(e){var t=document.querySelector(".".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorEnabled)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._openInputError(e)}}])&&d(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(t),this._jobSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._nameSelector.textContent,userJob:this._jobSelector.textContent}}},{key:"setUserInfo",value:function(e){this._nameSelector.textContent=e.name,this._jobSelector.textContent=e.link}}])&&_(t.prototype,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function c(e){var t=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,{popupSelector:t})}return t=c,(n=[{key:"open",value:function(e){b(S(c.prototype),"open",this).call(this);var t=this._popupSelector.querySelector(".focus__img"),n=this._popupSelector.querySelector(".focus__info");t.src=e.target.src,n.textContent=e.target.parentNode.querySelector(".card__place").textContent,b(S(c.prototype),"_setEventListeners",this).call(this)}}])&&m(t.prototype,n),c}(i),w=document.querySelector(".popup-user"),L=document.querySelector(".popup-card"),O=document.querySelector(".info__edit-button"),j=document.querySelector(".add-button"),C=document.querySelector(".card-grid"),I={formElement:".info-edit",inputElement:".popup__field",errorElement:".popup__field-error",errorEnabled:"popup__field-error_show-error",submitButton:".info-edit__submit"},q=new E({popupSelector:".focus"}),P=new y(w,I),T=new y(L,I),x=new h(".info__name",".info__job"),R=new r({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return new t(e,"#cardTemplate").makeCard()}},".card-grid");R.generateCards();var V=new f({popupSelector:".popup-card",callback:function(e){R.addItem(e)}}),B=new f({popupSelector:".popup-user",callback:function(e){x.setUserInfo(e)}});O.addEventListener("click",(function(){B.setInputValues(x.getUserInfo()),P.enableValidation(),B.open()})),j.addEventListener("click",(function(){T.enableValidation(),V.open()})),C.addEventListener("click",(function(e){e.target.classList.contains("card__img")&&q.open(e)}))})();