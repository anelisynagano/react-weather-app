import React, { useState, useEffect } from 'react';
import Day from './Day';

const DaysList = (props) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => setData(), [props])

    const setData = () => {
        setDailyData(
            props.data.list.filter(data => data.dt_txt.includes('15:00:00'))
        )
    }

    return (
        <div>
            <h2>5-day forecast</h2>
            <div className='daysContainer'>
                {
                    dailyData.map(day => <Day {...day} key={day.dt_txt} />)
                }
            </div>
        </div>
    )
}

export default DaysList;