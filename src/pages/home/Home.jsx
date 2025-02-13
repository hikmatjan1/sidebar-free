import React from 'react';

function Home() {

    return (
        <div>
            {Array.from(Array(70).keys()).map((item, index) => (
                <h2 key={index}>{index}</h2>
            ))}
        </div>
    )
}

export default Home;