class GridComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add('grid');
    let boxIDIndex = 'a'.charCodeAt(0);

    for (let r = 0; r < 3; r++) {
      const row = document.createElement('div');
      row.classList.add('box-row');

      for (let c = 0; c < 3; c++) {
        const box = document.createElement('box-component');
        box.boxID = String.fromCharCode(boxIDIndex++);
        row.appendChild(box);
      }

      this.appendChild(row);
    }
  }
}

customElements.define('grid-component', GridComponent);
