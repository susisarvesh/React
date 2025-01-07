import React, { useEffect, useState } from 'react';

function Select() {
  const countries = [
    { name: "United States", cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"] },
    { name: "India", cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"] },
    { name: "United Kingdom", cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"] },
    { name: "Canada", cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"] },
    { name: "Australia", cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"] },
    { name: "Germany", cities: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"] },
    { name: "Japan", cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"] },
    { name: "France", cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"] },
    { name: "Brazil", cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"] },
    { name: "South Africa", cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"] }
  ];

  const [country, setCountry] = useState<string>('');  // Selected country
  const [cities, setCities] = useState<string[]>([]);  // Cities of selected country

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  useEffect(() => {
    const selectedCities = countries.find((c) => c.name === country)?.cities || [];
    setCities(selectedCities);
  }, [country]); // Run effect when `country` changes

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="w-full max-w-xs">
        <label htmlFor="country-select" className="block text-sm font-medium text-gray-700">
          Select a Country:
        </label>
        <select
          id="country-select"
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">-- Select a Country --</option>
          {countries.map((ele) => (
            <option key={ele.name} value={ele.name}>
              {ele.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-xs">
        <label htmlFor="city-select" className="block text-sm font-medium text-gray-700">
          Select a City:
        </label>
        <select
          id="city-select"
          disabled={!country}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            !country ? 'bg-gray-100' : ''
          }`}
        >
          <option value="">-- Select a City --</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
