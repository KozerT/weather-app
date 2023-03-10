import React from 'react';


function TopButtons({ setQuery }) {
    const cities = [
        {
            id: 1,
            title: 'London',
        },
        {
            id: 2,
            title: 'Sydney',
        },
        {
            id: 3,
            title: 'Tokyo',
        },
        {
            id: 4,
            title: 'Toronto',
        },
        {
            id: 5,
            title: 'Paris',
        },
    ];

    return <div className="flex justify-around my-6 item-center">
        {cities.map((city) => (
            <button
                key={city.id}
                className="text-lg font-medium text-white"
                onClick={() => setQuery({ q: city.title })}>
                {city.title}
            </button>
        ))}
    </div>
}
export default TopButtons; 