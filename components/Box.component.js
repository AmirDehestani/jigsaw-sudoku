class BoxComponent extends HTMLElement {
  #boxID;

  constructor() {
    super();
  }

  set boxID(boxID) {
    this.#boxID = boxID;
  }

  connectedCallback() {
    this.classList.add('box');

    // Create a 3x3 box of cell components
    for (let r = 0; r < 3; r++) {
      const row = document.createElement('div');
      row.classList.add('cell-row');

      for (let c = 0; c < 3; c++) {
        const cell = document.createElement('cell-component');
        cell.cellID = `${this.#boxID}-${r}-${c}`;
        row.appendChild(cell);
      }

      this.appendChild(row);
    }
  }
}

customElements.define('box-component', BoxComponent);
