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

        const genresArr = this._responseJson.genres.map((item) => {
            return item.name
        });

        const genres = genresArr.join(', ');

        const formater = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        const budgetFormat = formater.format(this._responseJson.budget);

        const revenueFormat = formater.format(this._responseJson.revenue);

        const prodArr = this._responseJson.production_companies.map((item) => {
            return item.name
        })

        const prod = prodArr.join(', ');

        this.innerHTML = ``;
        this.innerHTML += 
        `
            <div class="row">
                <div class="col col-sm col-md col-lg">
                    <h1>${this._responseJson.title}</h1>
                </div>
                <div class="col-sm-3 col-md-5 col-lg-4">
                    <h3>Popularity: ${this._responseJson.popularity}</h3>
                </div>
            </div>
            <p class="tahun">${y} </p>
            <p class="sebelahTahun"> ${timeConvert(this._responseJson.runtime)}</p>
            <div class="row mt-5">
                <div class="col-xxl-3 col-md-5 col-lg-4 col-xl-3">
                    <img src="https://image.tmdb.org/t/p/original/${this._responseJson.poster_path}" class="img-fluid rounded posterDetail" alt="...">
                </div>
                <div class="col-xxl-8 col-md-6 col-lg-6 col-xl-7">
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
            <div class="row">
                <div class="col">
                    <p><b>Genre</b>: ${genres}</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Budget</b>: ${budgetFormat}</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Revenue</b>: ${revenueFormat}</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Production Companies</b>: ${prod}</p>
                </div>
            </div>
        `;

    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2>${message}</h2>`;
    }
}


customElements.define("detail-movie", DetailMovie);
