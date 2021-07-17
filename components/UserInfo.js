export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
    }
    getUserInfo(){
        return {
            userName: this._nameSelector.textContent,
            userJob: this._jobSelector.textContent
        }
    }
    setUserInfo(input){
        this._nameSelector.textContent = input.name;
        this._jobSelector.textContent = input.link;
    }
}

// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.