class LinkUpcoming extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<p><a href="./upcoming.html" class="link-list">Upcoming Movie</a></p>`;
    }
}

customElements.define("link-upcoming", LinkUpcoming);