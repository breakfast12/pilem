import "../component/nowplayingall-list.js";

const baseUrl = 'https://api.themoviedb.org/3/movie';
const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

const nowplayingAll = () => {
    const nowplayingAll = document.querySelector('nowplayingall-list');

    const getNowPlayingAllListMovie = () => {
        fetch(`${baseUrl}/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderNowPlayingAllListMovie(responseJson.results)
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    const renderNowPlayingAllListMovie = results => {
        nowplayingAll.results = results;

    }

    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getNowPlayingAllListMovie();

    });
}

export default nowplayingAll;