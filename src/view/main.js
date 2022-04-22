import "../component/upcoming-list.js";
import "../component/nowplaying-list.js";
import "../component/populer-list.js";
import "../component/searchmovie-list.js";
import SearchData from "../data/search-data.js";


const baseUrl = 'https://api.themoviedb.org/3/movie';
const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

const main = () => {

    const carouselImg = document.querySelector('populer-carousel');
    const carouselBlock = document.getElementById('carouselExampleFade');
    const upcomingList = document.querySelector('upcoming-list');
    const linkupcomingPlaying = document.querySelector('link-upcoming');
    const nowplayingList = document.querySelector('nowplaying-list');
    const linknowPlaying = document.querySelector('link-nowplaying');
    const populerList   = document.querySelector('populer-list');
    const linkpopularPlaying = document.querySelector('link-popular');
    const searchElement = document.querySelector('app-bar');
    const searchMovieList = document.querySelector('searchmovie-list');


    const getImgCarousel = () => {
        fetch(`${baseUrl}/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderPopulerMovie(responseJson.results)
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })

            
    }

    const getUpcomingMovie = () => {
        fetch(`${baseUrl}/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderUpcomingMovie(responseJson.results)
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    const getNowPlayingMovie = () => {
        fetch(`${baseUrl}/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderNowPlayingMovie(responseJson.results)
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    const getPopulerMovie = () => {
        fetch(`${baseUrl}/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderPopulerListMovie(responseJson.results)
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
          carouselImg.style.display = 'none';
          carouselBlock.style.display = 'none';
          upcomingList.style.display = 'none';
          linkupcomingPlaying.style.display = 'none';
          nowplayingList.style.display = 'none';
          linknowPlaying.style.display = 'none';
          populerList.style.display = 'none';
          linkpopularPlaying.style.display = 'none';



      } catch (message) {
          showResponseMessage(message);
      }
    }

    const renderPopulerMovie = results => {
        carouselImg.results = results;
    }

    const renderUpcomingMovie = results => {
        upcomingList.results = results;
    }
    

    const renderNowPlayingMovie = results => {
        nowplayingList.results = results;
    };

    const renderPopulerListMovie = results => {
        populerList.results = results;
    }

    const renderResult = results => {
        searchMovieList.results = results;
    };


    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getImgCarousel();
        getUpcomingMovie();
        getNowPlayingMovie();
        getPopulerMovie();


    });

    searchElement.clickEvent = onButtonSearchClicked;

    
    
}

export default main;

