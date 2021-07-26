export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
        this._avatarSelector = document.querySelector(avatarSelector);
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

    updateUserAvatar(link, _id) {
        this._avatarSelector.src = link;
        this._avatarSelector.id = _id;
    }

    getUserId(){
        return this._avatarSelector.id;
    }
}
