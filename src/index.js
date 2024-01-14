// create constants
const page = document.querySelector('.page');
const backgroundImage = new Image();
const isInLocalStorage = localStorage.getItem('imgUrl');
const dateInLocalStorage = localStorage.getItem('date');

backgroundImage.classList.add('preload');

// check date
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = `${dd}/${mm}/${yyyy}`;

const wordOfTheDay = getWordOfTheDay();
getImageOfTheDay(wordOfTheDay);
