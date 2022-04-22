import "../component/nowplayingall-list.js";
import "../component/searchmovie-list.js";
import SearchData from "../data/search-data.js";

const baseUrl = 'https://api.themoviedb.org/3/movie';
const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

const nowplayingAll = () => {
    const nowplayingAll = document.querySelector('nowplayingall-list');
    const judul = document.getElementById('judulall');
    const searchElement = document.querySelector('app-bar');
    const searchMovieList = document.querySelector('searchmovie-list');

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

    const onButtonSearchClicked = async () => {
        try {
            const result = await SearchData.searchFilm(searchElement.value);
            renderResult(result);
            nowplayingAll.style.display = 'none';
            judul.style.display = 'none';
  
        } catch (message) {
            showResponseMessage(message);
        }
      }

    const renderNowPlayingAllListMovie = results => {
        nowplayingAll.results = results;

    }

    const renderResult = results => {
        searchMovieList.results = results;
    };

    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getNowPlayingAllListMovie();

    });

    searchElement.clickEvent = onButtonSearchClicked;
}

export default nowplayingAll;