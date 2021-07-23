import './styles/style.css'; 
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import FormValidator from './components/FormValidator.js';
import UserInfo from './components/UserInfo.js';
import Api from './components/Api.js';

import {initialCards, editButton, addButton, cardGrid, cardTemplate, gridSection, imgFocusHandler, popupUser, popupCard, formSelectors, nameSelector, jobSelector, apiData, avatarSelector, popupAvatar} from './utils/constants.js';

const formValidatorUser = new FormValidator(popupUser, formSelectors);
const formValidatorCard = new FormValidator(popupCard, formSelectors);
const formValidatorAvatar = new FormValidator(popupAvatar, formSelectors);
const userInfo = new UserInfo(nameSelector, jobSelector, avatarSelector);
const api = new Api({apiData}); 
const apiCards = [];

// api.getInitialCards()
//   .then(res => res.forEach(item => {
//     cardList.addItem(item);
//   }))

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplate);
      return card.makeCard( );
    }
  },
  gridSection,
)

userInfo.updateUserAvatar('https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg');

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

const inputt = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup__avatar',
  callback: () => {
    userInfo.updateUserAvatar(inputt);

  }
})

document.querySelector('.info__avatar-container').addEventListener('click', () => {
  formValidatorAvatar.enableValidation();

  avatarPopup.open();

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
