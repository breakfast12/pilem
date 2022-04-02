import "./credit-movie.js";
class CreditList extends HTMLElement {
    set cast(cast) {
        this._cast = cast;
        this.render();
    }

    render () {
        this.innerHTML = ``;
        this.className = "row row-cols-xxl-2 row-cols-2";
        this._cast.forEach(casts => {
            const creditItemElement = document.createElement("credit-movie");
            creditItemElement.casts = casts
            this.appendChild(creditItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
       this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("credit-list", CreditList);