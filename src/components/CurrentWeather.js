import React from 'react';

const CurrentWeather = (props) => {
    return (
        <>
            <h1>current weather</h1>
            <div>current temperature: {props.data.list[0].main.temp} C</div>
            <div>feels like: {props.data.list[0].main.feels_like} C</div>
            <div>humidity: {props.data.list[0].main.humidity} %</div>
        </>
    )
}

export default CurrentWeather;