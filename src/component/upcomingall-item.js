class UpcomingAllItem extends HTMLElement {
    set result(result) {
        this._result = result;
        this.render();
    }

    render () {
        this.innerHTML = 
        `
            <div class="mt-5">
                <div class="card card-width">
                    <img src="https://image.tmdb.org/t/p/w500/${this._result.poster_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this._result.title}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item item-title">Release date : <br> ${this._result.release_date}</li>
                        </ul>
                    </div>
            </div>
        `;
    }
}

customElements.define("upcomingall-item", UpcomingAllItem);