class GridComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add('grid');

    // Create a 3x3 grid of box components
    for (let r = 0; r < 3; r++) {
      const row = document.createElement('div');
      row.classList.add('box-row');

      for (let c = 0; c < 3; c++) {
        const box = document.createElement('box-component');
        box.boxCol = c;
        box.boxRow = r;
        row.appendChild(box);
      }

      this.appendChild(row);
    }
  }
}

customElements.define('grid-component', GridComponent);
