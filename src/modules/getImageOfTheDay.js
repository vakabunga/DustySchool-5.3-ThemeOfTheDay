// get image by word of the day
function getImageOfTheDay() {
  if (dateInLocalStorage !== today) {
    localStorage.setItem('date', today);
    fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape`)
      .then((response) => response.json())
      .then((data) => {
        const bgImageUrl = data.urls.full;
        localStorage.setItem('imgUrl', `${bgImageUrl}`);
        backgroundImage.src = bgImageUrl;

        backgroundImage.addEventListener('load', () => {
          page.appendChild(backgroundImage);
          page.style = `background-image: url(${bgImageUrl})`;
        });
      })
      .catch((error) => {
        page.classList.add('default_background');
      });
  } else {
    page.style = `background-image: url(${isInLocalStorage})`;
  }
}
