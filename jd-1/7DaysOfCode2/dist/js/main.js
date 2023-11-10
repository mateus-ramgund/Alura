import { renderMovie } from "./utils/render.js";
// import { movies } from "./movies/movies.js";
// movies.forEach(movie => { renderMovie(movie)})
const apiKey = 'api_key=70e3e441756a92dc3049d9b0c0586915';
const baseURL = 'https://api.themoviedb.org/3/';
const apiUrl = baseURL + 'discover/movie?sort_by=popularity.desc&' + apiKey;
getPopularMovies();
async function getPopularMovies() {
    const fetchResponse = await fetch(apiUrl);
    const response = await fetchResponse.json();
    const moviesApi = response.results;
    moviesApi.forEach(movie => { renderMovie(movie); });
}
