import "../component/detail-movie.js"
import "../component/credit-list.js"

const baseUrl = 'https://api.themoviedb.org/3/movie';
const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(`id: ${id}`);

const detailsMovie = () => {
    const detailsMovie = document.querySelector('detail-movie');
    const creditMovie = document.querySelector('credit-list');

    const getDetailsMovie = () => {
        fetch(`${baseUrl}/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderDetailsMovie(responseJson);
                    console.log(responseJson);
                    
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    const getCreditMovie = () => {
        fetch(`${baseUrl}/${id}/credits?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderCreditMovie(responseJson.cast);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    const renderCreditMovie = cast => {
        creditMovie.cast = cast;
    }

    const renderDetailsMovie = (responseJson) => {
        detailsMovie.responseJson = responseJson;

    }

    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getDetailsMovie();
        getCreditMovie();
    });
}

export default detailsMovie;