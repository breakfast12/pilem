import "./upcomingall-item.js";
class UpcomingAllList extends HTMLElement {
    set results(results) {
        this._results = results;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this.className = "row row-cols-xxl-4 row-cols-xl-3 row-cols-2 row-cols-sm-3 row-cols-md-3";
        this._results.forEach(result => {
            const upcomingAllItemElement = document.createElement("upcomingall-item");
            upcomingAllItemElement.result = result;
            this.appendChild(upcomingAllItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
       this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("upcomingall-list", UpcomingAllList);