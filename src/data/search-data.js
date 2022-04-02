const API_KEY = '36091c355a600c8eedf6c772176f7f6b';
const searchUrl = 'https://api.themoviedb.org/3/search';

class SearchData {
    static searchFilm(search) {
        return fetch(`${searchUrl}/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${search} is not found`);
                }
            })
    }

}
export default SearchData;