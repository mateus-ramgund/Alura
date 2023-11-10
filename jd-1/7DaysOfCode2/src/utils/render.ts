export function renderMovie(movie): void {
    const area = document.querySelector('#princial') as HTMLElement;
    const movieElement = document.createElement('section');
    movieElement.classList.add('container');
    area.appendChild(movieElement);
    movieElement.innerHTML = `
        <div class="left">
            <img class="cartaz-filme" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Cartaz do filme ${movie.title}">
            <div class="informacoes">
                <h2 class="titulo">${movie.title} (${movie.release_date.slice(0, 4)})</h2>
                <div class="detalhes">
                    <div class="numeros">
                        <img src="images/icons/nota.svg" alt="Ícone de estrela">
                        <p>${movie.vote_average}</p>
                    </div>
                    <div class="favorite">
                        <input type="checkbox" name="fav-bat" id="fav-bat" class="fav" checked>
                        <img src="${favMovie(movie)}" alt="Ícone de favorito">
                        <label for="fav">Favoritar</label>
                    </div>
                </div>
            </div>
        </div>

        <p class="right">
            ${movie.overview}
        </p>
    `
}

function favMovie (movie): string {
    if (movie.isFavorited === true) {
        return 'images/icons/fav_checked.svg'
    } else {
        return 'images/icons/fav_unchecked.svg'
    }
}