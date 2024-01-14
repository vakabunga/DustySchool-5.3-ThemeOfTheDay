// get image by word of the day
function getImageOfTheDay() {
  const unsplashApiKey = localStorage.getItem('unsplashApiKey');
  if (dateInLocalStorage !== today || isInLocalStorage === null) {
    localStorage.setItem('date', today);
    getWordOfTheDay()
      .then((response) => response.json())
      .then(({ word }) => {
        fetch(`https://api.unsplash.com/search/photos?query=${word}&client_id=${unsplashApiKey}&orientation=landscape`)
          .then((response) => response.json())
          .then((data) => {
            if (data.total === 0) {
              throw new Error('There are no images finding by the word of the day. Using default background');
            }
            const bgImageUrl = data.results[0].urls.full;

            localStorage.setItem('imgUrl', `${bgImageUrl}`);
            backgroundImage.src = bgImageUrl;

            backgroundImage.addEventListener('load', () => {
              page.style = `background-image: url(${bgImageUrl})`;
            });
          })
          .catch((error) => {
            statusContainer.textContent = error;
            statusContainer.classList.remove('hidden');
            setTimeout(() => {
              statusContainer.classList.add('hidden');
            }, 3000);
            page.classList.add('default_background');
          });
      });
  } else {
    page.style = `background-image: url(${isInLocalStorage})`;
  }
}
