import './styles/style.css'; 
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import FormValidator from './components/FormValidator.js';
import UserInfo from './components/UserInfo.js';
import Api from './components/Api.js';

import {initialCards, editButton, addButton, cardGrid, cardTemplate, gridSection, imgFocusHandler, popupUser, popupCard, formSelectors, nameSelector, jobSelector, apiData, avatarSelector, popupAvatar, avatarUpdater} from './utils/constants.js';

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
    },
    removeCallback:(evt)=> {
      removePopup.openBeforeRemove(evt);
    }
  },
  gridSection,
)

// удалить это примерно скоро >>
userInfo.updateUserAvatar('https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg');

cardList.generateCards();


const placePopup = new PopupWithForm({
  popupSelector:'.popup-card',
  callback: (item) => {
    cardList.addItem({
      name: item[0],
      link: item[1]
    });
  }
});

const userPopup = new PopupWithForm({
  popupSelector:'.popup-user',
  callback: (input) => {
    userInfo.setUserInfo({
      name: input[0],
      link: input[1]
    });;
  }
});

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup__avatar',
  callback: (input) => {
    userInfo.updateUserAvatar(input[0]);
  }
})

const removePopup = new PopupWithForm({
  popupSelector: '.popup__delete',
  callback: () => {
  }
})

avatarUpdater.addEventListener('click', () => {
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
