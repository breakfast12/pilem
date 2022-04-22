import "../component/upcomingall-list.js";
import "../component/searchmovie-list.js";
import SearchData from "../data/search-data.js";

const baseUrl = 'https://api.themoviedb.org/3/movie';
const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

const upcomingAll = () => {
    const upcomingAll = document.querySelector('upcomingall-list');
    const judul = document.getElementById('judulall');
    const searchElement = document.querySelector('app-bar');
    const searchMovieList = document.querySelector('searchmovie-list');

    const getUpcomingAllListMovie = () => {
        fetch(`${baseUrl}/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderUpcomingAllListMovie(responseJson.results)
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
            upcomingAll.style.display = 'none';
            judul.style.display = 'none';
  
  
  
        } catch (message) {
            showResponseMessage(message);
        }
      }

    const renderUpcomingAllListMovie = results => {
        upcomingAll.results = results;

    }

    const renderResult = results => {
        searchMovieList.results = results;
    };

    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getUpcomingAllListMovie();

    });
    searchElement.clickEvent = onButtonSearchClicked;
}

export default upcomingAll;