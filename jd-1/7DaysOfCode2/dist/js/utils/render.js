export function renderMovie(movie) {
    const area = document.querySelector('#princial');
    const movieElement = document.createElement('section');
    movieElement.classList.add('container');
    area.appendChild(movieElement);
    movie.number = c;
    movie.isFavorited = receberDadoFavorito(movie);
    movieElement.innerHTML = `
        <div class="left">
            <img class="cartaz-filme" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Cartaz do filme ${movie.title}">
            <div class="informacoes">
                <h2 class="titulo">${movie.title} (${movie.release_date.slice(0, 4)})</h2>
                <div class="detalhes">
                    <div class="numeros">
                        <img src="images/icons/nota.svg" alt="Ícone de estrela">
                        <p>${Number(movie.vote_average).toFixed(1)}</p>
                    </div>
                    <a id="fav-${movie.id}" class="favorite">
                        <img class="icon-fav" src="${favMovie(movie)}" alt="Ícone de favorito">
                        Favoritar
                    </a>
                </div>
            </div>
        </div>
        
        <p class="right">
            ${movie.overview}
        </p>
    `;
    const favoritarBotao = document.querySelectorAll('.favorite');
    if (favoritarBotao) {
        favoritarBotao.forEach(botao => botao.addEventListener('click', () => favoritarFilme(movie, botao)));
    }
    function favoritarFilme(movie, botao) {
        let movieWithID = 'fav-' + movie.id;
        const iconFav = document.querySelectorAll('.icon-fav');
        if (movieWithID === botao.id) {
            if (JSON.parse(localStorage.getItem(`${movie.number}`))) {
                removerFilmeDuplicado(movie, iconFav);
            }
            else {
                trabalharFilmesEmArray(movie, iconFav);
            }
        }
    }
    c++;
}
let c = 0;
let filmesFavoritados = [];
function receberDadoFavorito(movie) {
    const filmesGuardados = JSON.parse(localStorage.getItem(`${movie.number}`));
    if (filmesGuardados !== null) {
        const estaFavoritado = filmesGuardados.isFavorited;
        return estaFavoritado;
    }
    else {
        return false;
    }
}
function favMovie(movie) {
    if (movie.isFavorited === true) {
        return 'images/icons/fav_checked.svg';
    }
    else {
        return 'images/icons/fav_unchecked.svg';
    }
}
function removerFilmeDuplicado(movie, iconFav) {
    if (movie.number === JSON.parse(localStorage.getItem(`${movie.number}`)).number) {
        movie.isFavorited = false;
        iconFav[movie.number].setAttribute('src', 'images/icons/fav_unchecked.svg');
        const filmesFavoritadosJSON = JSON.stringify(movie);
        localStorage.setItem(movie.number, filmesFavoritadosJSON);
        const posicaoExcluida = filmesFavoritados.indexOf(movie);
        filmesFavoritados.splice(posicaoExcluida, 1);
        localStorage.removeItem(movie.number);
    }
}
function trabalharFilmesEmArray(movie, iconFav) {
    if (!filmesFavoritados.includes(movie)) {
        movie.isFavorited = true;
        filmesFavoritados.push(movie);
        iconFav[movie.number].setAttribute('src', 'images/icons/fav_checked.svg');
        const filmesFavoritadosJSON = JSON.stringify(movie);
        localStorage.setItem(movie.number, filmesFavoritadosJSON);
    }
    else {
        movie.isFavorited = false;
        const posicaoExcluida = filmesFavoritados.indexOf(movie);
        filmesFavoritados.splice(posicaoExcluida, 1);
        iconFav[movie.number].setAttribute('src', 'images/icons/fav_unchecked.svg');
        localStorage.removeItem(movie.number);
    }
}
