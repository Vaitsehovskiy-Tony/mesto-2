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
    return this._request(this._usersLink + this._userLink, 'GET');
  }

  getInitialCards() {
    return this._request(this._cardLink, 'GET');
  }

  updateUserInfo(info) {
    return this._request(this._usersLink + this._userLink, 'PATCH', {
      name: info.name,
      about: info.link
    });
  }

  updateUserAvatar(info) {
    return this._request(this._usersLink + this._userLink + this._avatarLink, 'PATCH', {
      avatar: info.avatar
    });
  }

  createCard(item) {
    return this._request(this._cardLink, 'POST', {
      name: item[0],
      link: item[1]
    });
  }

  deleteCard(cardId) {
    return this._request(this._cardLink + cardId, 'DELETE');
  }
  
  setLike(_cardID) {
    return this._request(this._cardLink + this._likesLink + _cardID, 'GET');
  }

  async _request(url, method, toString) {
    try {
      const res = await fetch(this._baseUrl + url, {
        method,
        headers: this._headers,
        body: toString ? JSON.stringify(toString) : undefined
      });
      if (res.ok) return res.json();
    } catch (e) 
    {`error: ${e}`}
  }

}