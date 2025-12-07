import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Popular_Movie, options } from "../utils/constant";
import { getPopularMovie } from "../redux/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const res = await axios.get(Popular_Movie, options);
                dispatch(getPopularMovie(res.data.results));
            } catch (error) {
                console.log("Popular Movies Error:", error);
            }
        };

        fetchPopularMovies();
    }, [dispatch]);   // <- Correct dependency
};

export default usePopularMovies;
