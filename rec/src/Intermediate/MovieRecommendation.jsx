import React, { useEffect, useState } from 'react';

function MovieRecommendation() {
  const [movienamefilter, setMovienamefilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movienamefilter) {
        setMovies([]);
        setError('');
        return;
      }

      try {
        const req = await fetch(
          `http://www.omdbapi.com/?s=${movienamefilter}&type=movie&apikey=c557a975`
        );
        const result = await req.json();

        if (result.Response === 'True') {
          setMovies(result.Search);
          setError('');
        } else {
          setMovies([]);
          setError(result.Error || 'No results found.');
        }
      } catch (err) {
        setMovies([]);
        setError('Failed to fetch movies.');
      }
    };

    fetchMovies();
  }, [movienamefilter]);

    return (
        <>
                              <h3 className="text-[30px] font-thin mb-10 mt-10">Movie Reccomendation: [useState, useEffect , Dynamic Filtering , API]</h3>

    <div className="min-h-screen p-6 text-black bg-white">
      
      <h1 className="mb-6 text-4xl font-bold text-center animate-bounce">
        Movie Search App 🎬
      </h1>

      
      <div className="flex items-center justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="w-full p-3 text-black border border-gray-700 rounded-lg md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMovienamefilter(e.target.value)}
        />
      </div>

     
      {error && <p className="mb-4 text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 rounded-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
              alt={movie.Title}
              className="object-cover w-full h-64 mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-white truncate">{movie.Title}</h2>
            <p className="text-sm text-gray-400">Year: {movie.Year}</p>
          </div>
        ))}
      </div>
            </div>
            </>
  );
}

export default MovieRecommendation;