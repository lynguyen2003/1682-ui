import React from 'react';

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen ">
            <h1 className="text-4xl font-bold text-center">Welcome to the Home Page!</h1>
            <div className="container mx-auto mt-8">
                <p className="text-lg text-center">This is some additional content on the home page.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Click Me
                </button>
            </div>
        </div>
    );
}

export default Home;
