import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen h-[1000px]">
            <div className="container mx-auto">
                <p className="text-lg text-center">This is some additional content on the home page.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Click Me
                </button>
            </div>
        </div>
    );
};

export default Home;
