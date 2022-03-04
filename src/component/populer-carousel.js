class PopulerCarousel extends HTMLElement {
    set results(results) {
        this._results = results;
        this.render();
    }

    render() {
        this.classList.add('carousel-inner');
        this.innerHTML = "";
        this._results.slice(0, 4).forEach((result, index) => {
            this.innerHTML += 
            `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="https://image.tmdb.org/t/p/original/${result.backdrop_path}" class="d-md-block w-100" alt="poster1">
                <div class="carousel-caption">
                    <h5 class="populer-title">${result.title}</h5>
                </div>
            </div>`;
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2>${message}</h2>`;
    }
}


customElements.define("populer-carousel", PopulerCarousel);