import React from 'react';
import useVoluntears from '../../hooks/useVoluntears';
import Activity from '../Activity/Activity';

const Volunteers = () => {
    const [volunteers] = useVoluntears()
    return (
        <div>
            <h1>All data </h1>
            {
                volunteers.map(activity => <Activity
                    key={activity._id}
                    activity={activity}
                ></Activity>)
            }
        </div>
    );
};

export default Volunteers;