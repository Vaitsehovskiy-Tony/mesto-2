export default class Card {
  constructor(placeInput, cardTemplate){
      this._name = placeInput.name;
      this._link = placeInput.link;
      this._cardTemplate = cardTemplate;
  }


  _getTemplate() {
    return document
          .querySelector(this._cardTemplate)
          .content
          .cloneNode(true);
  }

  makeCard() {
      this.newCard = this._getTemplate();
      this.newCard.querySelector('.card__img').src = this._link;
      this.newCard.querySelector('.card__place').textContent = this._name;
      return this.newCard;
  }
}