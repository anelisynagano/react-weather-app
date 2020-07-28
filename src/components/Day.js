import React from 'react';
import Moment from 'react-moment';

const Day = (props) => {
    return (
        <div>
            <div>
                <Moment format="Do of MMMM YYYY">{props.dt_txt}</Moment>
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt=""/>
                <div>temperature: {props.main.temp}</div>
                <div>feels like: {props.main.feels_like}</div>
                <div>humidity: {props.main.humidity}</div>
            </div>
        </div>
    )
}

export default Day;