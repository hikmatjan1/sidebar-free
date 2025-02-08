import React from 'react';

function Home() {

    return (
        <div>
            {Array.from(Array(70).keys()).map((item, index) => (
                <h2>{index}</h2>
            ))}
        </div>
    )
}

export default Home;