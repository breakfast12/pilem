class DetailMovie extends HTMLElement {
    set results(responseJson) {
        this._results = responseJson;
        this.render();
    }

    render() {
        this.innerHTML = ``;
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2>${message}</h2>`;
    }
}


customElements.define("detail-movie", DetailMovie);