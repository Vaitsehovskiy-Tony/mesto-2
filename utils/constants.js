import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const popupUser = document.querySelector('.popup-user');
const popupCard = document.querySelector('.popup-card');
const nameSelector = '.info__name';
const jobSelector = '.info__job'  ;
const editButton = document.querySelector('.info__edit-button');
const addButton = document.querySelector('.add-button');
const cardGrid = document.querySelector('.card-grid');
const cardTemplate = '#cardTemplate';
const gridSection = '.card-grid';

const formSelectors = {
  formElement: '.info-edit',
  inputElement: '.popup__field',
  errorElement: '.popup__field-error',
  errorEnabled: 'popup__field-error_show-error',
  submitButton: '.info-edit__submit',
}

const focusElement = new PopupWithImage({popupSelector:'.focus'});

const imgFocusHandler = (evt) => {
  if (evt.target.classList.contains('card__img')) {
    focusElement.open(evt);
  }
}

const formValidatorUser = new FormValidator(popupUser, formSelectors);
const formValidatorCard = new FormValidator(popupCard, formSelectors);
const userInfo = new UserInfo(nameSelector, jobSelector);

  export {initialCards, editButton, addButton, cardGrid, cardTemplate, gridSection, userInfo, formValidatorUser, formValidatorCard, imgFocusHandler};