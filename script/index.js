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
const placeNameInput = cardForm.placeName;
const urlInput = cardForm.link;


function formToggleClass (obj) {
    obj.classList.toggle('popup_closed');
};

function escHandler (popup) {
  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      popup.classList.add('popup_closed');
    }
  }) 
}

function overlayFormHandler (popup) {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      popup.classList.add('popup_closed');
    } 
  })
}

function overlayFocusHandler (popup) {
  popup.addEventListener('click', (evt) => {
    if (evt.target !== document.querySelector('.focus__img')) {
      popup.classList.add('popup_closed');
    } 
  })
}



function makeCard (name, link) {
    const cardTemplate = document.querySelector('#cardTemplate').content;
    const newCard = cardTemplate.cloneNode(true);       

    newCard.querySelector('.card__img').src = link;
    newCard.querySelector('.card__place').textContent = name;
    if(popupCard.classList.contains('popup_closed')){
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
  formToggleClass(popupUser);
  escHandler(popupUser);
  overlayFormHandler(popupUser);

  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
};

function formPlaceOpenHandler () {
  formToggleClass(popupCard);
  escHandler(popupCard);
  overlayFormHandler(popupCard);

  placeNameInput.value = '';
  urlInput.value = '';
}

function formUserSubmitHandler (evt) {
    evt.preventDefault();
      userName.textContent = nameInput.value;
      userJob.textContent = jobInput.value;
      formToggleClass(popupUser);
}

function formCardSubmitHandler (evt) {
  evt.preventDefault();
  makeCard(placeNameInput.value, urlInput.value);
  formToggleClass(popupCard);
}

function imgFocusHandler(evt) {
  const focusImg = focusBlock.querySelector('.focus__img');
  const focusSubtitle = focusBlock.querySelector('.focus__info');
  
  if (evt.target.classList.contains('card__img')) {
    focusBlock.classList.remove('popup_closed');
    focusImg.src = evt.target.src;
    focusSubtitle.textContent  = evt.target.parentNode.querySelector('.card__place').textContent;
    escHandler(focusBlock);
    overlayFocusHandler(focusBlock);
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
closeUserButton.addEventListener('click', () => {
  formToggleClass(popupUser); 
});


closeCardButton.addEventListener('click', () => {
  formToggleClass(popupCard)
}); 
userForm.addEventListener('submit', formUserSubmitHandler); 
addButton.addEventListener('click', formPlaceOpenHandler);
cardGrid.addEventListener('click', imgFocusHandler);
focusClose.addEventListener('click', imgCloseHandler);
cardGrid.addEventListener('click', cardLikeHandler);
cardForm.addEventListener('submit', formCardSubmitHandler); 
cardGrid.addEventListener('click', cardDeleteHandler); 
