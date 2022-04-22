import "./searchmovie-item.js";
class SearchMovieList extends HTMLElement {
    set results(results) {
        this._results = results;
        console.log(this._results);
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this.className = "row row-cols-xxl-4 row-cols-xl-3 row-cols-2 row-cols-sm-3 row-cols-md-3";
        if (this._results.length === 0) {
            this.renderError("No Movie Found");

        } else {

            this._results.forEach(result => {
                const searchMovieElement = document.createElement("searchmovie-item");
                searchMovieElement.result = result;
                this.appendChild(searchMovieElement);
            });
        }
}

    renderError(message) {
        this.innerHTML = "";
       this.innerHTML += `<h2>${message}</h2>`;
    }
}

customElements.define("searchmovie-list", SearchMovieList);