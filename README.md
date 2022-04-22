# Watcha

> ## Capstone project - Web Development Bootcamp at [neuefische GmbH](https://www.neuefische.de)

## `Description`

![Watcha](/public/images/header.png)

### An app for everyone who likes to watch movies and series

Watcha helps you to discover new movies and series and add them to your watchlist. You can mark individual films and episodes of a series as watched, so that you always know which film you have already seen or where you stopped in a series. On the individual detail pages you get information about the film or series. Furthermore, you can decide whether you want to have the background image or the trailer displayed on the detail pages. Happy Watching! 🍿 📺

## `Demo`

Have a look at the hosted version on Vercel: [Watcha Demo](https://watcha.vercel.app/)

**Important:** This demo is optimized for mobile screen!
![App screens](/public/images/screen.png)

## `Tech Stack`

- [React](https://reactjs.org/)
  - [React Router](https://reactrouter.com/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [React Player](https://github.com/CookPete/react-player)
- [Husky](https://typicode.github.io/husky/#/)
- [Jest](https://jestjs.io/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [TMDB API](https://www.themoviedb.org/)
- [Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Vercel API](https://vercel.com/docs/rest-api)
- [Node.js](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.mongodb.com/de-de/cloud/atlas/register)
- [mongoose](https://mongoosejs.com/)

## `Project Setup`

- Clone this repository
- Use `.env.example` to create your own `.env` inside the root folder
  - Add your `API_KEY` from [TMDB](https://www.themoviedb.org/)
  - Add your `MONGODB_URI`
- Install all dependencies via `$ npm install`
- Run app in development mode via `$ npm start`
- Open http://localhost:3000/ to view it in the browser
- Run tests via `$ npm test`
- Run Storybook via `$ npm run storybook`

### Side Note

> All data comes from [The Movie Database API](https://www.themoviedb.org/)
> , the data of providers comes from JustWatch in partnership with The Movie Database API
