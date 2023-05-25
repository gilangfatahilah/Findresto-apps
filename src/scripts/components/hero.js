class Hero extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <section class="hero">
        <div class="hero-content">
            <h1><span>Find</span> the Authentic Restaurant <span>here</span>.</h1>
            <p>We provide the best Indonesian restaurant recomendation to visit.</p>
            <button class="cta-btn">Find Out</button>
        </div>
    </section>
        `;
  }
}

customElements.define('hero-component', Hero);
