import PopupWithImage from '../components/PopupWithImage.js';


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

const focusElement = new PopupWithImage({popupSelector:'.focus'});


const imgFocusHandler = (evt) => {
  if (evt.target.classList.contains('card__img')) {
    focusElement.open(evt);
  }
}
  export {editButton, addButton, cardGrid, cardTemplate, gridSection, imgFocusHandler, popupUser, popupCard, formSelectors, nameSelector, jobSelector, avatarSelector, popupAvatar, avatarUpdater};