class DetailMovie extends HTMLElement {
    set responseJson(responseJson) {
        this._responseJson = responseJson;
        this.render();
    }

    render() {
        function timeConvert(time) {
            const tm = time;
            const hours = (tm / 60);
            const thours = Math.floor(hours);
            const minutes = (hours - thours) * 60;
            const tminutes = Math.round(minutes);
            return thours + "h " + tminutes + "m";
        }
        const d = new Date(this._responseJson.release_date)
        const y = d.getFullYear();

        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                            ];
        
        function dateFormat(datemd) {
            const dt = new Date(datemd);
            dt.setDate(dt.getDate());
            return dt.getDate()+' '+monthNames[dt.getMonth()]+' '+dt.getFullYear();
        }

        this.innerHTML = ``;
        this.innerHTML += 
        `
            <div class="row">
                <div class="col">
                    <h1>${this._responseJson.title}</h1>
                </div>
                <div class="col-md-3">
                    <h3>Popularity: ${this._responseJson.popularity}</h3>
                </div>
            </div>
            <p class="tahun">${y} </p>
            <p class="sebelahTahun"> ${timeConvert(this._responseJson.runtime)}</p>
            <div class="row mt-5">
                <div class="col-md-3">
                    <img src="https://image.tmdb.org/t/p/original/${this._responseJson.poster_path}" class="img-fluid rounded posterDetail" alt="...">
                </div>
                <div class="col-md-8">
                    <p class="overview-detail"><h3>Overview: <br></h3>${this._responseJson.overview}</p>
                </div>
            </div>
            <div class="row more-detail">
                <div classs="col">
                    <h2>More Detail</h2>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <p><b>Release Date</b>: ${dateFormat(this._responseJson.release_date)}</p>
                </div>
            </div>
        `;

        this._responseJson.genres.forEach((genre, index) => {
            this.innerHTML += `<p>Genre: </p>${ index === this._responseJson.genres.length - 1 ? genre.name + '.' : genre.name + ', '}`
        });

    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2>${message}</h2>`;
    }
}


customElements.define("detail-movie", DetailMovie);
