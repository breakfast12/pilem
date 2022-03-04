import "../component/upcoming-list.js";
import "../component/nowplaying-list.js";
import "../component/populer-list.js";
import "../component/upcomingall-list.js";

const main = () => {
    
    const baseUrl = 'https://api.themoviedb.org/3/movie';
    const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

    const carouselImg = document.querySelector('populer-carousel');
    const upcomingList = document.querySelector('upcoming-list');
    const nowplayingList = document.querySelector('nowplaying-list');
    const populerList   = document.querySelector('populer-list');
    const upcomingAll = document.querySelector('upcomingall-list');

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

    const renderUpcomingAllListMovie = results => {
        upcomingAll.results = results;
    }


    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getImgCarousel();
        getUpcomingMovie();
        getNowPlayingMovie();
        getPopulerMovie();
        getUpcomingAllListMovie();
    });
}

export default main;

