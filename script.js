const movieDB = {
    movies: [
        "Logan",
        "Titanic",
        "Bəyin oğurlanması",
        "Xaç atası",
        "Avatar", 
        "Inspection"
    ]
}

const reklam = document.querySelectorAll('.promo_adv img')
const janr = document.querySelector('.promo_genre')
const sekil = document.querySelector('.promo_bg')
const kinolar = document.querySelector('.promo_interactive-list')


reklam.forEach(e=> {
    e.remove()
});

janr.innerHTML = 'Drama';

sekil.style.backgroundImage = 'url(img/bg.jpg)';

kinolar.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((kino, index) => {
    kinolar.innerHTML +=`
    <li class="promo_interactive-item">${index+1}. ${kino}
    <div class="delete"></div>
</li>`
});