import { limpaTela } from "./utils/limpa-tela.js";
import { renderMovie } from "./utils/render.js";
// import { movies } from "./movies/movies.js";
// movies.forEach(movie => { renderMovie(movie)})
const apiKey = 'api_key=70e3e441756a92dc3049d9b0c0586915';
const baseURL = 'https://api.themoviedb.org/3/';
const apiUrl = baseURL + 'discover/movie?sort_by=popularity.desc&' + apiKey;
const search = document.querySelector('#search');
const searchInput = document.querySelector('#search-form');
const checkboxMostrarFavoritos = document.querySelector('#mostrar-favoritos');
getPopularMovies();
async function getPopularMovies() {
    const fetchResponse = await fetch(apiUrl);
    const response = await fetchResponse.json();
    const moviesApi = response.results;
    moviesApi.forEach(movie => { renderMovie(movie); });
    console.log(moviesApi);
}
;
searchInput.addEventListener('submit', pesquisarFilmes);
function pesquisarFilmes(event) {
    event.preventDefault();
    const filme = `${search.value}`.toLowerCase();
    filtrarFilmes(filme);
}
;
async function filtrarFilmes(filme) {
    const fetchResponse = await fetch(apiUrl);
    const response = await fetchResponse.json();
    const moviesApi = response.results;
    const filmesFiltrados = [];
    moviesApi.forEach(movie => separarFilmes(movie, filme, filmesFiltrados));
    if (filme !== '') {
        limpaTela();
        filmesFiltrados.forEach(movie => { renderMovie(movie); });
    }
    else {
        limpaTela();
        getPopularMovies();
    }
}
;
function separarFilmes(movie, filme, filmesFiltrados) {
    if (movie.title.toLowerCase().includes(filme)) {
        filmesFiltrados.push(movie);
    }
    ;
}
;
checkboxMostrarFavoritos.addEventListener('change', mostrarFavoritos);
const keys = Object.keys(localStorage);
function mostrarFavoritos() {
    if (this.checked) {
        const filmesFavoritosParaMostrar = [];
        keys.forEach(key => { filmesFavoritosParaMostrar.push(JSON.parse(localStorage.getItem(`${key}`))); });
        limpaTela();
        filmesFavoritosParaMostrar.forEach(movie => { renderMovie(movie); });
    }
    else {
        limpaTela();
        getPopularMovies();
    }
}
;
