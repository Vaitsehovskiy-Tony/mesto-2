import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, callback}) {
        super({popupSelector});
        this._callback = callback;
        this._inputs = this._popupSelector.querySelectorAll('.popup__field');
    }
    
    _getInputValues() {
        this._newInputs = [];
        this._inputs.forEach(i => this._newInputs.push(i.value));
        return this._newInputs;
    }

    _setEventListeners() {   
        super._setEventListeners();
        this._popupSelector.querySelector('.info-edit__submit').addEventListener('click', (evt) => {
            this._popupSelector.querySelector('.info-edit__submit').textContent = 'Сохраняю...';
            setTimeout(() =>{
                this._callback(this._getInputValues());
                this.close();
            }, 200);
            evt.stopImmediatePropagation();
        });
    }

    _clearInputValues() {
        this._inputs.forEach(input => input.value = '');
    }

    close() {
        super.close();
        this._clearInputValues();
    }

    open(){
        this._popupSelector.querySelector('.info-edit__submit').textContent = 'Сохранить';
        super.open();
        this._setEventListeners();
    }

    setInputValues(userData) {
        this._inputs[0].value = userData.userName;
        this._inputs[1].value = userData.userJob;
    }
    
    openBeforeRemove(evt){
        this._event = evt;
        super.open();
        super._setEventListeners();
        this._popupSelector.querySelector('.info-edit__submit').addEventListener('click', (evt) => {
            evt.preventDefault();
            this._callback(this._event.target.parentNode.querySelector('.card__bin-icon').id);
            this._event.target.parentNode.remove();
            this.close();
        });
    }

}