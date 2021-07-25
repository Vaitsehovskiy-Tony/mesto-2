export default class Api {
  constructor({config}){
    this._baseUrl = config.baseUrl;
    this._avatarLink = config.avatarLink;
    this._userLink= config.userLink;
    this._cardLink = config.cardLink;
    this._usersLink = config.usersLink;
    this._likesLink = config.likesLink;
    this._authCode = config.authCode;
    this._headers = config.headers;
  }
  

  getUserInfo() {
    return fetch(this._baseUrl + this._usersLink + this._userLink, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._handleResult)
    .catch(this._handleError)
  }

  getInitialCards() {
    return fetch(this._baseUrl + this._cardLink, 
    {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._handleResult)
    .catch(this._handleError)
  } 

  updateUserInfo(info) {
    fetch(this._baseUrl + this._usersLink + this._userLink, 
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: info.name,
          about: info.link
        })
      })
    .then(this._handleResult)
    .catch(this._handleError)
  }

  
  updateUserAvatar(info) {
    fetch(this._baseUrl + this._usersLink + this._userLink + this._avatarLink, 
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: info.avatar
        })
      })
    .then(this._handleResult)
    .catch(this._handleError)
  }

  createCard(item) {
    return fetch(this._baseUrl + this._cardLink, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: item[0],
        link: item[1]
      })
    })
    .then(this._handleResult)
    .catch(this._handleError)
  }

  deleteCard(cardId) {
    fetch(this._baseUrl + this._cardLink + cardId, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._handleResult)
    .catch(this._handleError)
  }

  getLikesInfo(_cardID) {
    return fetch(this._baseUrl + this._cardLink + this._likesLink + _cardID , {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._handleResult)
    .catch(this._handleError)
  }

  // setLike(_cardID) {
  //   fetch (this._baseUrl + this._cardLink + this._likesLink + _cardID, {
  //     method: 'PUT',
  //     headers: this._headers,
  //   })
  //   .then(this._handleResult)
  //   .catch(this._handleError)
  // }

  // removeLike(_cardID) {
  //   fetch (this._baseUrl + this._cardLink + this._likesLink + _cardID, {
  //     method: 'DELETE',
  //     headers: this._headers,
  //   })
  //   .then(this._handleResult)
  //   .catch(this._handleError)
  // }


  _handleResult(res){
    if (res.ok) return res.json();
  }

  _handleError(err) {
    return `Ошибка. Код ${err.code}. ${err}`;
  }

}