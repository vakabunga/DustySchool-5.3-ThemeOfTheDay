//create constants
const page = document.querySelector('.page');
const backgroundImage = new Image();
const isInLocalStorage = localStorage.getItem('imgUrl');
const dateInLocalStorage = localStorage.getItem('date');

backgroundImage.classList.add('preload');

//check date
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

//get word of the day
//TODO when get API-KEY

//get image by word of the day (Now i get random image, while dont have api-key for the 'word of the day' API)
function imageOfTheDay() {
    if (dateInLocalStorage !== today) {
        localStorage.setItem('date', today);
        fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape`)
            .then(response => response.json())
            .then((data) => {
                bgImageUrl = data.urls.full;
                localStorage.setItem('imgUrl', `${bgImageUrl}`);
                backgroundImage.src = bgImageUrl;

                backgroundImage.addEventListener('load', () => {
                    page.appendChild(backgroundImage);
                    page.style = `background-image: url(${bgImageUrl})`;
                });
            })
            .catch(error => console.log(error))
    } else {
        page.style = `background-image: url(${isInLocalStorage})`;
    }
}

imageOfTheDay();
