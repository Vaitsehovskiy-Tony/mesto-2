import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, callback}) {
        super({popupSelector});
        this._callback = callback;
        this._inputs = this._popupSelector.querySelectorAll('.popup__field');
    }
    
    _getInputValues() {
        return {
            name: this._inputs[0].value,
            link: this._inputs[1].value
        };
    }

    _setEventListeners() {   
        super._setEventListeners();
        this._popupSelector.querySelector('.info-edit__submit').addEventListener('click', (evt) => {
            this._callback(this._getInputValues());
            this.close();
            evt.stopImmediatePropagation();
        });
    }

    _handleSubmitListener() {
        this._callback(this._getInputValues());
        this.close();
    }

    _clearInputValues() {
        this._inputs.forEach(input => input.value = '');
    }

    close() {
        super.close();
        this._clearInputValues();
    }

    open(){
        this._clearInputValues();
        super.open();
        this._setEventListeners();
    }

    setInputValues(userData) {
        this._inputs[0].value = userData.userName;
        this._inputs[1].value = userData.userJob;
    }
}