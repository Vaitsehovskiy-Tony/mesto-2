const openInputError = ({input, errorEnabled, ...rest}) => {
  const errSpan = document.querySelector(`.${input.id}-error`);
  errSpan.textContent = input.validationMessage;
  errSpan.classList.add(errorEnabled);
}

const hideInputError = ({input, errorEnabled, ...rest}) => {
  const errSpan = document.querySelector(`.${input.id}-error`);
  errSpan.textContent = '';
  errSpan.classList.remove(errorEnabled);
}

const submitButtonToggler = (formElement) => {

  const submitState = !hasInvalidInput(formElement);
  const submitButton = formElement.querySelector('.info-edit__submit');

    if(submitState){
      submitButton.classList.add('info-edit__submit_enabled');
    } else {
      submitButton.classList.remove('info-edit__submit_enabled');
    }
}

const hasInvalidInput = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function isValid ({formElement, input, ...rest}) {
    if (!input.validity.valid) {
      openInputError({input, ...rest});
    } else {
      hideInputError({input, ...rest});
    }
  }

const setInputListeners = ({formElement, ...rest}) => {
  submitButtonToggler(formElement);

  // submitButtonToggler({formElement, ...rest});

  const inputs = Array.from(document.querySelectorAll('.popup__field'));

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        isValid({formElement, input, ...rest});
        submitButtonToggler(formElement);
      });
    });
}

const enableValidation = ({formElement, ...rest}) => { 
  const formList = document.querySelectorAll(formElement);
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setInputListeners({formElement, ...rest});
  })
}

enableValidation({
  formElement: '.info-edit',
  inputElement: '.popup__field',
  errorElement: '.popup__field-error',
  errorEnabled: 'popup__field-error_show-error',
}); 
  


