import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor ({popupSelector}) {
        super({popupSelector});
    }

    open(evt) {
        super.open();
        const focusImg = this._popupSelector.querySelector('.focus__img');
        const focusSubtitle = this._popupSelector.querySelector('.focus__info');

        focusImg.src = evt.target.src;
        focusSubtitle.textContent  = evt.target.parentNode.querySelector('.card__place').textContent;
        super._setEventListeners();
    }

}