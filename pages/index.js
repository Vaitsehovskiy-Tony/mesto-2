import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import initialCards from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';



const popupUser = document.querySelector('.popup-user');
const popupCard = document.querySelector('.popup-card');
const editButton = document.querySelector('.info__edit-button');
const closeUserButton = document.querySelector('.popup-user .popup__close-button');
const closeCardButton = document.querySelector('.popup-card .popup__close-button');
const userForm = document.forms.userData;
const cardForm = document.forms.newCard;
const addButton = document.querySelector('.add-button');
const cardGrid = document.querySelector('.card-grid');
const submitButton = document.querySelector('.info-edit__submit');
const userName = document.querySelector('.info__name');
const userJob = document.querySelector('.info__job');
const popupHeader = document.querySelector('.info-edit__header');
const focusBlock = document.querySelector('.focus');
const focusClose = focusBlock.querySelector('.focus__close-bttn');
const nameInput = userForm.name;
const jobInput = userForm.job;
const cardTemplate = '#cardTemplate';
const gridSection = '.card-grid';

const formSelectors = {
  formElement: '.info-edit',
  inputElement: '.popup__field',
  errorElement: '.popup__field-error',
  errorEnabled: 'popup__field-error_show-error',
  submitButton: '.info-edit__submit',
}

const formValidatorUser = new FormValidator(popupUser, formSelectors);
const formValidatorCard = new FormValidator(popupCard, formSelectors);

formValidatorUser.enableValidation();
formValidatorCard.enableValidation();


function overlayFormHandler (popup) {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      popup.classList.add('popup_closed');
    } 
  })
}

// function overlayFocusHandler (popup) {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target !== document.querySelector('.focus__img')) {
//       popup.classList.add('popup_closed');
//     } 
//   })
// }

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplate);
      const newCard = card.makeCard();
      cardList.addItem(newCard)
    }
  },
  gridSection,
)   

cardList.generateCards();

const placePopup = new PopupWithForm({
  popupSelector:'.popup-card',
  callback: () => {
    const card = new Card(placePopup._getInputValues(), cardTemplate);
    cardList.addItem(card.makeCard());
    placePopup.close();
  }
});

const userPopup = new PopupWithForm({
  popupSelector:'.popup-user',
  callback: () => {
    // const card = new Card(placePopup._getInputValues(), cardTemplate);
    // cardList.addItem(card.makeCard());
    // placePopup.close();
  }
});


function formUserOpenHandler () {
  formToggleClass(popupUser);
  escHandler(popupUser);
  overlayFormHandler(popupUser);

  nameInput.value = userName.textContent;
  jobInput.value =  userJob.textContent;
};


function formUserSubmitHandler (evt) {
    evt.preventDefault();
      userName.textContent = nameInput.value;
      userJob.textContent = jobInput.value;
      formToggleClass(popupUser);
}



function imgFocusHandler(evt) {
  // const focusImg = focusBlock.querySelector('.focus__img');
  // const focusSubtitle = focusBlock.querySelector('.focus__info');
  
  if (evt.target.classList.contains('card__img')) {
    // focusBlock.classList.remove('popup_closed');
    const focusElement = new PopupWithImage({popupSelector:'.focus'});
    focusElement.open(evt);
    // focusImg.src = evt.target.src;
    // focusSubtitle.textContent  = evt.target.parentNode.querySelector('.card__place').textContent;
    // escHandler(focusBlock);
    // overlayFocusHandler(focusBlock);
    // focusClose.addEventListener('click', imgCloseHandler);
  }
}

function imgCloseHandler() {
  focusBlock.classList.add('popup_closed');
  focusBlock.removeEventListener('click', imgCloseHandler);
}

function cardDeleteHandler(evt) {
  if(evt.target.classList.contains('card__bin-icon')){
    evt.target.parentNode.remove();
  }
}

function cardLikeToggler(evt) {
  if(!evt.target.classList.contains('is-liked')){
    evt.target.src = "./images/like-is-liked.svg" ;
    evt.target.classList.add('is-liked');
  } else {
    evt.target.src = "./images/like-icon.svg" ;
    evt.target.classList.remove('is-liked');
  }
}

function cardLikeHandler(evt) {
  if (evt.target.classList.contains('card__like-icon')) {
    cardLikeToggler(evt);
  }
}


editButton.addEventListener('click', formUserOpenHandler);
closeUserButton.addEventListener('click', () => {
  formToggleClass(popupUser); 
});

userForm.addEventListener('submit', formUserSubmitHandler); 
addButton.addEventListener('click', () => {placePopup.open()});
cardGrid.addEventListener('click', imgFocusHandler);
cardGrid.addEventListener('click', cardLikeHandler);
// cardForm.addEventListener('submit', formCardSubmitHandler); 
cardGrid.addEventListener('click', cardDeleteHandler); 




// function formCardSubmitHandler (evt) {
//   evt.preventDefault();
//   const placeInput = {
//     name: cardForm.placeName.value,
//     link: cardForm.link.value,
//   }
//   const card = new Card(placeInput, cardTemplate);
//   card.makeCard();
  
//   formToggleClass(popupCard);
// }



// const cardList = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const card = new Card(item, cardTemplate);
//     const newCard = card.makeCard();
//     cardList.addItem(newCard)
//   }
// },
// gridSection,
// )

// cardList.generateCards();



// function formPlaceOpenHandler () {
//   formToggleClass(popupCard);
//   escHandler(popupCard);
//   overlayFormHandler(popupCard);
//   cardForm.placeName.value = '';
//   cardForm.link.value = '';
// }