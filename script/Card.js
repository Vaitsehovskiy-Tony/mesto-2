export default class Card {
    constructor(placeInput, cardTemplate){
        this._name = placeInput.name;
        this._link = placeInput.link;
        this._cardTemplate = cardTemplate;
    }


    _getTemplate() {
      return newCard = document
                      .querySelector(this._cardTemplate)
                      .content
                      .cloneNode(true);
    }

    makeCard() {
        this.newCard = this._getTemplate();
        const popupCard = document.querySelector('.popup-card');
        const cardGrid = document.querySelector('.card-grid');
        this.newCard.querySelector('.card__img').src = this._link;
        this.newCard.querySelector('.card__place').textContent = this._name;

        if(popupCard.classList.contains('popup_closed')){
          cardGrid.append(this.newCard);
        } else {
          cardGrid.prepend(this.newCard);
        };
    }

}