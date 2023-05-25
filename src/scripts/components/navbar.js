class Navbar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="nav-logo">
            <img src="./logo/logo.png" alt="Logo" />
        </div>
            <button aria-label="menu button" class="menu-btn" id="menu-btn"><i class="fa-solid fa-bars"></i></button>
        <nav id="navigation-drawer">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li>
                    <a target="_blank" href="https://instagram.com/gilanqf">About Us</a>
                </li>
            </ul>
        </nav>
        
        `;
  }
}

customElements.define('nav-bar', Navbar);
