export default class Api {
  constructor({apiData}){
    this._userAvatar = apiData.userAvatar;
    this._userLink = apiData.userLink;
    this._cardLink = apiData.cardLink;
    this._authCode = apiData.authCode;
  }
  


  getInitialCards() {
    return fetch(this._cardLink, 
    {
      method: 'GET',
      headers: {
        authorization: this._authCode
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((err) => `Ошибка. Код ${err.code}. ${err}`); 
  } 
}