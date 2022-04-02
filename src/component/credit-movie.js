import img from '../img/blank-profile.png';
console.log(img);
class CreditMovie extends HTMLElement {
    set casts(casts) {
        this._casts = casts;
        this.render();
    }

    render() {
        if (this._casts.profile_path == null) {
            this.innerHTML = 
        `
                <div class="mt-5">
                    <div class="row">
                        <div class="col-md-6 col-lg-5 col-xl-4">
                            <img class="rounded-circle z-depth-2 img-cast" height="150" width="150" alt="100x100" src="${img}"
                            data-holder-rendered="true">
                        </div>
                        <div class="col-md-6 col-lg-5 col-xl-6 casts-name">
                            <p>${this._casts.name}</p>
                            <p class="character-name"> as ${this._casts.character}</p>
                        </div>
                    </div>
                </div>
        `;
        } else{
            this.innerHTML = 
        `
                <div class="mt-5">
                    <div class="row">
                        <div class="col-md-6 col-lg-5 col-xl-4">
                            <img class="rounded-circle z-depth-2 img-cast" height="150" width="150" alt="100x100" src="https://image.tmdb.org/t/p/w500${this._casts.profile_path}"
                            data-holder-rendered="true">
                        </div>
                        <div class="col-md-6 col-lg-5 col-xl-6 casts-name">
                            <p>${this._casts.name}</p>
                            <p class="character-name"> as ${this._casts.character}</p>
                        </div>
                    </div>
                </div>
        `;
        }
            
    } 

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2>${message}</h2>`;
    }
}


customElements.define("credit-movie", CreditMovie);