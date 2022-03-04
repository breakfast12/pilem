class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<nav class="navbar navigasi">
        <div class="container-fluid">
          <a class="navbar-brand txt-judul">Pilem</a>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-color" type="submit">Search</button>
          </form>
        </div>
      </nav>`;
    }
}

customElements.define("app-bar", AppBar);