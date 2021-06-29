export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);;
    }

    generateCards() {
        this._items.forEach(i => {
            this._renderer(i);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    }
}