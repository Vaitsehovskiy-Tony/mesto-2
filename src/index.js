import './styles/style.css'; 
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import FormValidator from './components/FormValidator.js';
import UserInfo from './components/UserInfo.js';
import Api from './components/Api.js';
import {config} from './utils/config.js';

import {editButton, addButton, cardGrid, cardTemplate, gridSection, imgFocusHandler, popupUser, popupCard, formSelectors, nameSelector, jobSelector, apiData, avatarSelector, popupAvatar, avatarUpdater} from './utils/constants.js';


const formValidatorUser = new FormValidator(popupUser, formSelectors);
const formValidatorCard = new FormValidator(popupCard, formSelectors);
const formValidatorAvatar = new FormValidator(popupAvatar, formSelectors);
const userInfo = new UserInfo(nameSelector, jobSelector, avatarSelector);
const api = new Api({config}); 
const apiCards = [];

Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
.then(([userData, cardItems]) => {
  userInfo.setUserInfo({
    name: userData.name,
    link: userData.about
  });
  userInfo.updateUserAvatar(userData.avatar, userData._id);
  cardItems.forEach(item => {
    cardList.addItem(item);
  })

});   

const cardList = new Section({
    items: apiCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplate);
      return card.makeCard(userInfo.getUserId());
    },  
    removeCallback:(evt)=> {
      removePopup.openBeforeRemove(evt);
    },
  },
  gridSection,
)

cardList.generateCards();


const placePopup = new PopupWithForm({
  popupSelector:'.popup-card',
  callback: (item) => {
    api.createCard(item)
      .then(res => {
        cardList.addItem(res);
      })
  }
});

const userPopup = new PopupWithForm({
  popupSelector:'.popup-user',
  callback: (input) => {
    api.updateUserInfo({
      name: input[0],
      link: input[1]
    })

    api.getUserInfo()
    .then(res => {
      userInfo.setUserInfo({
        name: res.name,
        link: res.about
        });
    });  

  }
});

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup__avatar',
  callback: (input) => {
    
    api.updateUserAvatar({
      avatar: input[0]
    })

    api.getUserInfo()
    .then(res => {
      userInfo.updateUserAvatar(res.avatar);
    });  
  }
})

const removePopup = new PopupWithForm({
  popupSelector: '.popup__delete',
  callback: (cardId) => {
    api.deleteCard(cardId);
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




// 1. Прикрутить прелоадер - window.onload из интекса не срабатывает.Api
// 2. Когда в index.html требуется require у картинок
// 3. Кнопка "Сохранение" в placePopup чтобы работала во время сохранения.
// 4 В 5-10% случаев запуска приложения появляется черный экран, который убирается только рефрешем.


// 4. Рабочий removeEventListener ->
// При закрытии попапа необходимо корректно удалять обработчик с document. Для удаления обработчика события, необходимо использовать removeEventListener, также нужно передать ту же функцию, которую передавали при создании обработчика события.  Чтобы его удалить нужно не использовать стрелочные функции в качестве обработчиков, а использовать методы класса привязав их к контексту класса с помощью bind, для того, чтобы не потерять контекст
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// https://learn.javascript.ru/introduction-browser-events

// ->>>

// close() { 
//   this._popupSelector.classList.remove('popup_opened'); 
//   document.removeEventListener('keydown', this._handleEscClose.bind(this)); 
// } 

// _handleEscClose(evt) { 
//   if (document.querySelector('.popup_opened') !== null && evt.code === 'Escape') { 
//       this.close(); 
//   } 
// } 


// cardList.addEventListener('load', () => {
//   document.querySelector('.preloader').style.display = 'none';
// });

// const load = () => {
//   window.onload = function() {
//     document.querySelector('.preloader').style.display = 'none';
//   };
// }

// setTimeout(() =>{
//   load();
// }, 200);

// document.querySelector('.preloader').style.display = 'block';
