import React, { useState } from 'react';
import axios from "axios";
import { SEARCH_MOVIE_URL, options } from '../utils/constant';
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();

    const isLoading = useSelector(store => store.app.isLoading);
    const { movieName, searchedMovie } = useSelector(store => store.searchMovie);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!searchMovie.trim()) return;

        dispatch(setLoading(true));

        try {
            const url = SEARCH_MOVIE_URL(searchMovie);  // function call
            const res = await axios.get(url, options);

            const movies = res?.data?.results || [];

            dispatch(setSearchMovieDetails({ searchMovie, movies }));

        } catch (error) {
            console.log("Search Movie Error:", error);
        } finally {
            dispatch(setLoading(false));
        }

        setSearchMovie("");
    };

    return (
        <>
            <div className='flex justify-center pt-[10%] w-full'>
                <form onSubmit={submitHandler} className='w-[50%]'>
                    <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-full'>
                        <input 
                            value={searchMovie} 
                            onChange={(e) => setSearchMovie(e.target.value)} 
                            className='w-full outline-none rounded-md text-lg' 
                            type="text" 
                            placeholder='Search Movies...' 
                        />
                        <button className='bg-red-800 text-white rounded-md px-4 py-2'>
                            {isLoading ? "Loading..." : "Search"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Show result only after search */}
            {movieName && (
                searchedMovie?.length > 0 ? (
                    <MovieList 
                        title={movieName} 
                        searchMovie={true} 
                        movies={searchedMovie}
                    />
                ) : (
                    <h1 className='text-center mt-10 text-lg font-semibold'>
                        Movie Not Found!!
                    </h1>
                )
            )}
        </>
    );
};

export default SearchMovie;
