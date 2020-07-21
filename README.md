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

12. change `Search.js` to a functional component using ***React Hooks***

13. call `Search.js` on `Home.js` instead of `App.js`

14. create a functional component `DaysList.js` and call it on `Home.js`

15. add a state to `DaysList.js` that will hold the information of 5 objects of the array of 40 elements of data that we receive as props.

16. create a method that will help you choose only 1 information of the next 5 upcoming days. These 5 objects should be related to either average weather of the day, or a certain time of each upcoming day.

tip: use the method `.filter()` and `.includes()`
tip2: don't forget to re-render our app every time there is a change on the props.

17. for each element on the array, show the component `Day.js`

18. `Day.js` should contain the temperature, feels like, humidity and the icon corresponding to the weather

tip: you can use the library [Moment](https://www.npmjs.com/package/react-moment) to format the date