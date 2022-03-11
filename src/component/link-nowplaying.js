class LinkNowPlaying extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<p><a href="./now-playing.html" class="link-list">Now Playing</a></p>`;
    }
}

customElements.define("link-nowplaying", LinkNowPlaying);