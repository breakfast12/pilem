const baseUrl = 'https://api.themoviedb.org/3/movie';
const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(`id: ${id}`);

const detailsMovie = () => {
    const detailsMovie = document.querySelector('detail-movie');

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

    const renderDetailsMovie = (responseJson) => {
        detailsMovie.responseJson = responseJson;

    }

    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getDetailsMovie();

    });
}

export default detailsMovie;