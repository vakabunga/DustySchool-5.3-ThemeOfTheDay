// create a function which get Word of the day from API
function getWordOfTheDay() {
  const wordApiKey = localStorage.getItem('wordApiKey');
  return fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${wordApiKey}`);
}
