import React from 'react';

const CurrentWeather = (props) => {
    console.log('props on currentweather', props);

    const currTemp = 2 * (props.data.list[0].main.temp - 273.15)
    const feelsLike = 2 * (props.data.list[0].main.feels_like - 273.15)

    const tempInC = currTemp.toFixed() / 2;
    const feelsLikeInC = feelsLike.toFixed() / 2;
    return (
        <>
            <div>current temperature: {tempInC} C</div>
            <div>feels like: {feelsLikeInC} C</div>
            <div>humidity: {props.data.list[0].main.humidity} %</div>
        </>
    )
}

export default CurrentWeather;