    import Popup from './Popup.js';


export default class PopupWithForm extends Popup {
    constructor({popupSelector, callback}) {
        super({popupSelector});
        this._callback = callback;
    }
    
    _getInputValues() {
         const _inputArr = this._popupSelector.querySelectorAll('.popup__field');
         console.log(_inputArr[0].value);
        this._firstField = _inputArr[0].value;
        this._secondField = _inputArr[1].value;
        return {
            name: this._firstField,
            link: this._secondField
        };
    }

    _setEventListeners() {   
        super._setEventListeners();
        this._popupSelector.querySelector('.info-edit__submit').addEventListener('click', () => {this._callback()})
    }

    _clearInputValues() {
        this._popupSelector.querySelectorAll('.popup__field').forEach(input => input.value = '');
    }

    close() {
        super.close();
        this._clearInputValues();
    }

    open(){
        super.open();
        this._setEventListeners();
    }
}