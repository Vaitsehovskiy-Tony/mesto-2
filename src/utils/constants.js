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
const popupAvatar = document.querySelector('.popup__avatar');
const avatarUpdater = document.querySelector('.info__avatar-container');
const nameSelector = '.info__name';
const jobSelector = '.info__job'  ;
const avatarSelector = '.info__avatar';
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

const apiData = {
  userAvatar:'http://nomoreparties.co/cohort7/users/me/avatar',
  userLink: 'http://nomoreparties.co/cohort7/users/me',
  cardLink: 'http://nomoreparties.co/cohort7/cards',
  authCode: '18709e85-c197-4083-8e6e-7400479c7833'
}

const focusElement = new PopupWithImage({popupSelector:'.focus'});


const imgFocusHandler = (evt) => {
  if (evt.target.classList.contains('card__img')) {
    focusElement.open(evt);
  }
}
  export {initialCards, editButton, addButton, cardGrid, cardTemplate, gridSection, imgFocusHandler, popupUser, popupCard, formSelectors, nameSelector, jobSelector, apiData, avatarSelector, popupAvatar, avatarUpdater};