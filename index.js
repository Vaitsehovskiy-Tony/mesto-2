const popup = document.querySelector('.popup');
const editButton = document.querySelector('.info__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const userForm = document.forms.form;
const addButton = document.querySelector('.add-button');
const cardGrid = document.querySelector('.card-grid');
const submitButton = document.querySelector('.info-edit__submit');
const userName = document.querySelector('.info__name');
const userJob = document.querySelector('.info__job');
const popupHeader = document.querySelector('.info-edit__header');
const focusBlock = document.querySelector('.focus');
const focusClose = focusBlock.querySelector('.focus__close-bttn');
const firstInput = userForm.field1;
const secondInput = userForm.field2;


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

function formToggleClass (obj) {
    obj.classList.toggle('popup_closed');
};

function makeCard (name, link) {
    const cardTemplate = document.querySelector('#cardTemplate').content;
    const newCard = cardTemplate.cloneNode(true);       

    newCard.querySelector('.card__img').src = link;
    newCard.querySelector('.card__place').textContent = name;
    if(popup.classList.contains('popup_closed')){
      cardGrid.append(newCard);
    } else {
      cardGrid.prepend(newCard);
    };
}

function cardRender (arr) {
    arr.forEach((item) => {
        makeCard(item.name, item.link);
    });
};

function formUserOpenHandler () {
    formToggleClass(popup);
    popupHeader.textContent = 'Редактировать профиль'
    firstInput.value = userName.textContent;
    secondInput.value = userJob.textContent;
};

function formPlaceOpenHandler () {
    formToggleClass(popup);
    popupHeader.textContent = 'Новое место';
    firstInput.value = '';
    secondInput.value = '';
    firstInput.placeholder = 'Название';
    secondInput.placeholder = 'Ссылка на картинку';
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    if(popupHeader.textContent === 'Редактировать профиль'){
      userName.textContent = firstInput.value;
      userJob.textContent = secondInput.value;
      formToggleClass(popup);
    } else if (popupHeader.textContent === 'Новое место') {
      makeCard(secondInput.value, firstInput.value);
      formToggleClass(popup);
    }
};

function formCloseHandler() {
    formToggleClass(popup);
};

function imgFocusHandler(evt) {
  const focusImg = focusBlock.querySelector('.focus__img');
  const focusSubtitle = focusBlock.querySelector('.focus__info');
  
  if (evt.target.classList.contains('card__img')) {
    focusBlock.classList.remove('popup_closed');
    focusImg.src = evt.target.src;
    focusSubtitle.textContent  = evt.target.parentNode.querySelector('.card__place').textContent;
  }
}

function imgCloseHandler() {
  focusBlock.classList.add('popup_closed');
}

function cardDeleteHandler(evt) {
  if(evt.target.classList.contains('card__bin-icon')){
    evt.target.parentNode.remove();
    console.log('пытаюсь удалить');
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

cardRender(initialCards);
editButton.addEventListener('click', formUserOpenHandler);
closeButton.addEventListener('click', formCloseHandler); 
userForm.addEventListener('submit', formSubmitHandler); 
addButton.addEventListener('click', formPlaceOpenHandler);
cardGrid.addEventListener('click', imgFocusHandler);
focusClose.addEventListener('click', imgCloseHandler);
cardGrid.addEventListener('click', cardLikeHandler);
userForm.addEventListener('submit', formSubmitHandler); 
cardGrid.addEventListener('click', cardDeleteHandler); 
