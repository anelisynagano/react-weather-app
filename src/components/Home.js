import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import DaysList from './DaysList';

const Home = (props) => {
    return (
        <>
            <Search onSearch={props.onSearch} />
            <Title cityName={props.cityName} />
            <CurrentWeather data={props} />
            <DaysList data={props} />
        </>
    )
}

export default Home;