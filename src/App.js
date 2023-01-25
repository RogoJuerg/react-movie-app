import { useEffect, useState } from "react";
import React from "react";
import uuid from "react-uuid";

import MovieCard from "./MovieCard";

import './App.css';
import SearchBar from "./SearchBar";

const API_KEY = '699df87f';
const API_URL = 'http://www.omdbapi.com?apikey=' + API_KEY;



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <SearchBar searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchMovies={searchMovies}
            />

            {
                movies?.length > 0
                    ? (
                        <div className="container"> {movies.map((movie) => <MovieCard key={uuid()} movie={movie} />)}</div>
                    ) : (
                        <div className="empty"> <h2>No movies found</h2> </div>
                    )
            }
        </div>
    );
}

export default App;