## DustySchool-5.3-ThemeOfTheDay
API homework. Task 3

Сделайте страницу с каким-нибудь текстом, которая автоматически загружает случайную “тему”. Тема заключается размещении картинки на фоне страницы.

Как мы получаем картинку дня: мы запрашиваем из API https://www.wordnik.com/word-of-the-day (зарегистрируйтесь и запросите ключ API побыстрее, потребуется время для того, чтобы ключ на самом деле выдали)

Далее, мы делаем запрос в https://unsplash.com/developers – ищем картинки по полученному слову. Если вдруг ни одной картинки не найдётся, то получите от API unsplash просто случайную картинку. Далее, поставьте картинку на фон для страницы.

**Усложнение 1:** после получения адреса положите его в localStorage, чтобы сегодня больше не ходить в API

**Усложнение 2:** если вы просто разместите картинку на фон страницы, она будет грзится долго и некрасиво. Подумайте, как сначала загрузить картинку, а затем красиво поместить ее на фон страницы.

## NOTE

1. Get API key at https://www.wordnik.com/word-of-the-day
2. Save API key to `localStorage.setItem('wordApiKey', 'your_api_secret_key')`
3. Get API key at https://unsplash.com/developers
4. Save API key to `localStorage.setItem('unsplashApiKey', 'your_api_secret_key')`
5. Don't forget refresh page after set items in `localStorage`
6. You can now use both the local clone and GitPages

### Usage
1. `git clone`
2. `npm install`
3. `npm run build`
4. `npm start`

### GitPages

https://vakabunga.github.io/DustySchool-5.3-ThemeOfTheDay/
