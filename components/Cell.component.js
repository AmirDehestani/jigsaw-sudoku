class CellComponent extends HTMLElement {
  #cellID;

  constructor() {
    super();
  }

  set cellID(cellID) {
    this.#cellID = cellID;
  }

  connectedCallback() {
    this.classList.add('cell');
    this.setAttribute('id', this.#cellID);
  }
}

customElements.define('cell-component', CellComponent);
