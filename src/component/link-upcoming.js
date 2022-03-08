class LinkUpcoming extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this.innerHTML = `<p><a href="./upcoming-movie.html" class="link-list" id="link-upcoming">Upcoming Movie</a></p>`;
        this.querySelector("#link-upcoming").addEventListener("click", this._clickEvent);
    }
}

customElements.define("link-upcoming", LinkUpcoming);