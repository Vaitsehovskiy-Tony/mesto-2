import './styles/style.css'; 
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import FormValidator from './components/FormValidator.js';
import UserInfo from './components/UserInfo.js';

import {initialCards, editButton, addButton, cardGrid, cardTemplate, gridSection, imgFocusHandler, popupUser, popupCard, formSelectors, nameSelector, jobSelector} from './utils/constants.js';

const formValidatorUser = new FormValidator(popupUser, formSelectors);
const formValidatorCard = new FormValidator(popupCard, formSelectors);
const userInfo = new UserInfo(nameSelector, jobSelector);


const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplate);
      return card.makeCard();
    }
  },
  gridSection,
)   

cardList.generateCards();

const placePopup = new PopupWithForm({
  popupSelector:'.popup-card',
  callback: (item) => {
    cardList.addItem(item);
  }
});

const userPopup = new PopupWithForm({
  popupSelector:'.popup-user',
  callback: (input) => {
    userInfo.setUserInfo(input);
  }
});

editButton.addEventListener('click', () => {
  userPopup.setInputValues(
    userInfo.getUserInfo()
  );
  formValidatorUser.enableValidation();
  userPopup.open();
});


addButton.addEventListener('click', () => {
  formValidatorCard.enableValidation();
  placePopup.open();
});

cardGrid.addEventListener('click', imgFocusHandler);
