import "../component/upcomingall-list.js";

const baseUrl = 'https://api.themoviedb.org/3/movie';
const API_KEY = '36091c355a600c8eedf6c772176f7f6b';

const upcomingAll = () => {
    const upcomingAll = document.querySelector('upcomingall-list');

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

    const renderUpcomingAllListMovie = results => {
        upcomingAll.results = results;

    }

    const showResponseMessage = (message = "Check your connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getUpcomingAllListMovie();

    });
}

export default upcomingAll;