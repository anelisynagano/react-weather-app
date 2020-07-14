# weather app

1. fetch data on `App.js` from [weather api](https://openweathermap.org/forecast5). *** don't forget to create your API key! ***

2. create a Navbar component

3. create routes for `Home.js` and `Contact.js`

4. pass data down as props to `Home.js`

5. call `Title.js` component on `Home.js` and show the city name.

6. call `CurrentWeather.js` component on `Home.js` and show the current: weather, feels like and humidity.

7. create a `Search.js` class component and add a state to it.

8. add a `form` and call a method `handleChange` that will set the text that the user is writing as a new state (this should be done on the input).

9. on `App.js` create a new method `onSearch` that will receive the `userInput` as an argument. this method will do a new API call with the `userInput` as the city name on the call.

10. pass `onSearch` to `Search.js`.

11. create a method `handleSubmit` that will be called once the form is submitted, and it will call the prop `onSearch` with the state text as argument.