class LinkPopular extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<p><a href="./popular.html" class="link-list">Popular</a></p>`;
    }
}

customElements.define("link-popular", LinkPopular);