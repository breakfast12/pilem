import "./upcoming-item.js";

class UpcomingList extends HTMLElement {
    set results(results) {
        this._results = results;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this.className = "row row-cols-xxl-4 row-cols-xl-3 row-cols-2 row-cols-sm-3 row-cols-md-3";
        this._results.slice(0, 4).forEach(result => {
            const upcomingItemElement = document.createElement('upcoming-item');
            upcomingItemElement.result = result;
            this.appendChild(upcomingItemElement);            
        });
    }

    renderError(message) {
        this.innerHTML = "";
       this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("upcoming-list", UpcomingList);