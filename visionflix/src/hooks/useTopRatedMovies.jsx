import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/movieSlice";
import { Top_Rated_Movie, options } from "../utils/constant";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTopRated = async () => {
            try {
                const res = await axios.get(Top_Rated_Movie, options);
                dispatch(getTopRatedMovie(res.data.results));
            } catch (error) {
                console.log("Top Rated Error:", error);
            }
        };

        fetchTopRated();
    }, [dispatch]);
};

export default useTopRatedMovies;
