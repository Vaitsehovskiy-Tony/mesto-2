export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);;
    }

    generateCards() {
        this._items.forEach(i => {
            this.addItem(i);
        });
        this._setEventListeners();
    }

    addItem(item) {
        this._container.prepend(
            this._renderer(item)
        );
    }

    _cardDeleteHandler(listnerToSet) {
        listnerToSet.addEventListener('click', (evt) => {
          if(evt.target.classList.contains('card__bin-icon')){
            evt.target.parentNode.remove();
            }
        });
    }
    
    _cardLikeHandler(listnerToSet) {
        listnerToSet.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('card__like-icon')) {
                this._cardLikeToggler(evt);
            }
        });
    }

    _cardLikeToggler(evt) {
        if(!evt.target.classList.contains('is-liked')){
            evt.target.src = "./images/like-is-liked.svg" ;
            evt.target.classList.add('is-liked');
        } else {
            evt.target.src = "./images/like-icon.svg" ;
            evt.target.classList.remove('is-liked');
        }
    }

    _setEventListeners(){
        this._cardDeleteHandler(this._container);
        this._cardLikeHandler(this._container);
    }
    
}