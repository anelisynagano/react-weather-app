import React from 'react';

const Title = ({ cityName }) => {
    return (
        <h1 className="title">hello! this is the weather in {cityName}</h1>
    )
}

export default Title;