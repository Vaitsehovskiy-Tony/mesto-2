export default class Card {
  constructor(placeInput, cardTemplate){
    this._name = placeInput.name;
    this._link = placeInput.link;
    this._likes = placeInput.likes;
    this.owner_id = placeInput.owner._id;
    this._cardTemplate = cardTemplate;
    this._id = placeInput._id;
  }


  _getTemplate() {
    return document
      .querySelector(this._cardTemplate)
      .content
      .cloneNode(true);
  }

  makeCard(myId) {
    this.newCard = this._getTemplate();
    this.newCard.querySelector('.card__like-container').id = this._id;
    this.newCard.querySelector('.card__img').src = this._link;
    this.newCard.querySelector('.card__place').textContent = this._name;
    this.newCard.querySelector('.card__like-counter').textContent = this._likes.length;
    this.binIconInspector(myId);
    return this.newCard;
  }

  binIconInspector(myId){
    if(this.owner_id === myId){
      console.log(this._id);
      this.newCard.querySelector('.card__bin-icon').style.display = 'block';
      this.newCard.querySelector('.card__bin-icon').id = this._id;
    } else if(this.owner_id !== myId) {
      this.newCard.querySelector('.card__bin-icon').style.display = 'none';
    }
  }
}