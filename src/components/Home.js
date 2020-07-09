import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';

const Home = (props) => {
    return (
        <>
            <Title cityName={props.cityName} />
            <CurrentWeather data= {props} />
        </>
    )
}

export default Home;