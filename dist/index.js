// create constants
const page = document.querySelector('.page');
page.classList.remove('default_background');
const backgroundImage = new Image();
const isInLocalStorage = localStorage.getItem('imgUrl');
const dateInLocalStorage = localStorage.getItem('date');

// create status container
const statusContainer = document.createElement('div');
statusContainer.classList.add('status', 'hidden');
page.appendChild(statusContainer);

// check date
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = `${dd}/${mm}/${yyyy}`;
getImageOfTheDay();