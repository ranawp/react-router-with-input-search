import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1)
    }
    const mynumber = 45;
    return (
        <div>
            <button onClick={handleCount}>Click me</button>
            <h1>Count add: {count}</h1>
            <h1>COunt add:{count - 1}</h1>
            <h1>Number:{mynumber}</h1>
        </div>
    );
};

export default Home;