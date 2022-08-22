
import data from './data/ghibli/ghibli.js';
import utilities from './data.js';

const films = data.films;
const listMovie = document.getElementById("peliculas");
const cardDirectors = document.getElementById("directores");

function printMovies(movies) {
    // limpia contenerdor
    listMovie.innerHTML = "";
    cardDirectors.innerHTML = "";

    // agrega peliculas
    movies.forEach(function (film) {
        const newLabel = document.createElement("li");
        newLabel.classList.add("card");
        const img = document.createElement("img");
        img.setAttribute("srcset", film.poster);
        img.classList.add("imgMovie");
        listMovie.appendChild(newLabel);
        newLabel.appendChild(img);
        newLabel.innerHTML += `<h3>${film.title}</h3> Director: ${film.director} <br> Relase date: ${film.release_date} <br> Raiting: ${film.rt_score}/100`;
    });
}
printMovies(films);

const btnOrderAsc = document.getElementById("orderAsc");
btnOrderAsc.addEventListener("click", printOrderAsc);

function printOrderAsc() {
    const order = utilities.sortData(films, 'title', 'ascendente');
    printMovies(order);
}

const btnOrderDes = document.getElementById("orderDesc");
btnOrderDes.addEventListener("click", printOrderDes);

function printOrderDes() {
    const orderDesc = utilities.sortData(films, 'title', 'descendente');
    printMovies(orderDesc);
}

const btnOrderByScore = document.getElementById("orderByScore");
btnOrderByScore.addEventListener("click", printOrderByScore);

function printOrderByScore() {
    const orderScore = utilities.filterData(films);
    printMovies(orderScore);
}

const btnDirectors = document.getElementById("cuantity");
btnDirectors.addEventListener("click", printDirectors);

function printDirectors() {
    const directors = utilities.curiousData(films);
    listMovie.innerHTML = "";
    cardDirectors.innerHTML = "";

    directors.forEach(function (director) {
        const withouSpace = director.name.replace(/\s+/g, '');
        const labelDir = document.createElement("li");
        const imgDirector = document.createElement("img");
        imgDirector.setAttribute("srcset", `img/${withouSpace}.jpg`);
        imgDirector.classList.add("imgDir");
        labelDir.classList.add("card");
        cardDirectors.appendChild(labelDir);
        labelDir.appendChild(imgDirector);
        labelDir.innerHTML += `<h3>${director.name}</h3> Total movies: ${director.length} /20`;
    });
}

const btnTop = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

const btnTopUp = document.getElementById("topBtn");
btnTopUp.addEventListener("click", topFunction);
function topFunction() {
    document.body.scrollTop = 0; // para safari
    document.documentElement.scrollTop = 0; // para Chrome
}