import "../component/popularall-list.js";
import "../component/searchmovie-list.js";
import SearchData from "../data/search-data.js";

const baseUrl = 'https://api.themoviedb.org/3/movie';
const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

const popularAll = () => {
    const popularAll = document.querySelector('popularall-list');
    const judul = document.getElementById('judulall');
    const searchElement = document.querySelector('app-bar');
    const searchMovieList = document.querySelector('searchmovie-list');

    const getPopularAllListMovie = () => {
        fetch(`${baseUrl}/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderPopularAllListMovie(responseJson.results)
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
            popularAll.style.display = 'none';
            judul.style.display = 'none';
  
  
  
        } catch (message) {
            showResponseMessage(message);
        }
      }

    const renderPopularAllListMovie = results => {
        popularAll.results = results;

    }
    
    const renderResult = results => {
        searchMovieList.results = results;
    };

    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getPopularAllListMovie();

    });

    searchElement.clickEvent = onButtonSearchClicked;
}

export default popularAll;