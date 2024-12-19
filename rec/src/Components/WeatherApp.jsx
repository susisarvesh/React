import React, { useEffect, useState } from 'react';

function WeatherApp() {
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchapi = async () => {
            try {
                const req = await fetch(
                    'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b5988bfc601f1d484d78ded61ff6fa98'
                );
                if (!req.ok) {
                    throw new Error(`HTTP error! Status: ${req.status}`);
                }
                const result = await req.json();
                setWeather(result.list || []);
            } catch (err) {
                console.error('Error fetching weather data:', err);
                setError('Failed to fetch weather data');
            }
        };

        fetchapi();
    }, []);

    return (
        <div>
            <h3 className="text-[30px] font-thin">Weather App: [useEffect, useState , AsyncAwait , Api]</h3>
            {error && <p className="text-red-500">{error}</p>}
            <div className='grid grid-cols-1 lg:grid-cols-6'>
                {weather.length > 0 ? (
                    weather.map((ele, index) => (
                        <div key={index} className="border p-2 m-2 rounded-md bg-slate-100">
                            <p><strong>Date & Time:</strong> {ele.dt_txt}</p>
                            <p><strong>Temperature:</strong> {ele.main.temp} K</p>
                            <p><strong>Weather:</strong> {ele.weather[0].description}</p>
                        </div>
                    ))
                ) : (
                    !error && <p>Loading weather data...</p>
                )}
            </div>
        </div>
    );
}

export default WeatherApp;
