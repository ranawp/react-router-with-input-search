import React from 'react';
import './Acitivity.css'

const Activity = (props) => {
    // console.log(props.activity)
    const { month, investment } = props.activity;
    return (
        <div className='activity'>
            <div>
                <h2>{month}</h2>
                <h2>Investment:{investment}</h2>
            </div>
        </div>
    );
};

export default Activity;