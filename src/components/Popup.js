export default class Popup {
    constructor({popupSelector}) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    open(){
        this._popupSelector.classList.remove('popup_closed');

    }

    close(){
        this._popupSelector.classList.add('popup_closed');
    }

    _formToggleClass () {
        this._popupSelector.classList.toggle('popup_closed');
    };

    _handleEscClose(){
        document.addEventListener('keydown', (evt) => {
            if(evt.key === 'Escape') { 
                this._popupSelector.classList.add('popup_closed');
            }
          }) 
    }

    _overlayFormHandler() {
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('overlay')) {
                this._popupSelector.classList.add('popup_closed');
            } 
          })
    }
    

    _setEventListeners(){
        this._popupSelector.querySelector('.close-button')
        .addEventListener('click', () => {
            this.close();
        }); 
        this._handleEscClose();
        this._overlayFormHandler();

    }
}