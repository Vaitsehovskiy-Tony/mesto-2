let popup = document.querySelector('.popup');
let editButton = document.querySelector('.info__edit-button');
let submitButton = document.querySelector('.info-edit__submit');
let userForm = document.forms.user;
let userName = document.querySelector('.info__name');
let userJob = document.querySelector('.info__job');
let nameInput = document.forms.user.name;
let jobInput = document.forms.user.job;
let closeButton = document.querySelector('.popup__close-button');

function formOpenHandler () {
    popup.classList.remove('popup_closed');
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
};

function formSubmitHandler (evt) {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    popup.classList.add('popup_closed');
};

function formCloseHandler() {
    popup.classList.add('popup_closed');
};

editButton.addEventListener('click', formOpenHandler);
closeButton.addEventListener('click', formCloseHandler); 
userForm.addEventListener('submit', formSubmitHandler); 