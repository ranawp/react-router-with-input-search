import React, { useEffect, useState } from 'react';
import useVoluntears from '../../hooks/useVoluntears';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    // const [volunteers] = useVoluntears([]); //way1 
    const [searchText, setSearchText] = useState(''); //way 1 and way2 
    const [searchResult, setSeachResult] = useState([]); //way 2 

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.month.includes(searchText));
                setSeachResult(match);
            })

    }, [searchText])

    const handleSearchChange = event => {
        setSearchText(event.target.value);


    }

    // way1 to show input feild result 
    // const handleSearchChange = event => {
    //     const searchText = event.target.value
    //     const match = volunteers.filter(v => v.month.toLowerCase().includes(searchText));
    //     setSeachResult(match);
    // }
    return (
        <div>
            voluntears activites:{searchResult.length}

            <div style={{ 'margin': '20px' }}>
                <input onChange={handleSearchChange} type="text" placeholder='search' />
            </div>

            <div className="acitivity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    >
                    </Activity>)
                }
            </div>
        </div>
    );
};

export default Main;