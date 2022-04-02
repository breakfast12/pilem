class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }

    get value() {
      return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `<nav class="navbar navigasi">
        <div class="container-fluid">
          <a class="navbar-brand txt-judul">Pilem</a>
          <div class="d-flex">
            <input class="form-control me-2" id="searchElement" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-color" id="searchElementButton" type="submit">Search</button>
          </div>
        </div>
      </nav>`;

      this.querySelector("#searchElementButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("app-bar", AppBar);