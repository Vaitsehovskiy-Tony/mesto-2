export default class FormValidator {
  constructor(popupSelector, formSelectors) {
    this._popupSelector = popupSelector;
    this._formElement = this._popupSelector.querySelector(formSelectors.formElement);
    this._inputElement = formSelectors.inputElement;
    this._errorElement = formSelectors.errorElement;
    this._errorEnabled = formSelectors.errorEnabled;
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputElement));
    this._submitButton = this._formElement.querySelector(formSelectors.submitButton);
  }

  enableValidation(){
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setInputListeners();
  }

  _setInputListeners(){
    this._submitButtonToggler();  
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._submitButtonToggler(this._formElement);
      });
    });
  }

  _submitButtonToggler(){ 
    const submitState = !this._hasInvalidInput(this._formElement);
    if(submitState){
      this._submitButton.classList.add('info-edit__submit_enabled');
    } else {
      this._submitButton.classList.remove('info-edit__submit_enabled');
    }
  }
  
  _openInputError(input){
    const errSpan = document.querySelector(`.${input.id}-error`);
    errSpan.textContent = input.validationMessage;
    errSpan.classList.add(this._errorEnabled);
  }
  
  _hideInputError(input){
    const errSpan = document.querySelector(`.${input.id}-error`);
    errSpan.textContent = '';
    errSpan.classList.remove(this._errorEnabled);
  }
  
  _hasInvalidInput(){
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }
  
  _isValid (input) {
    if (!input.validity.valid) {
      this._openInputError(input);
    } else {
      this._hideInputError(input);
    }
  }
}