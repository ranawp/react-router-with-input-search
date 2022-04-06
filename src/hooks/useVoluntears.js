import React, { useEffect, useState } from 'react';

const useVoluntears = () => {
    const [volunters, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, []);
    return [volunters, setVolunteers];
}
export default useVoluntears;