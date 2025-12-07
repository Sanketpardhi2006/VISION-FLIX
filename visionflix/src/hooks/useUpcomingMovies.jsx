import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUpcomingMovie } from "../redux/movieSlice";
import { Upcoming_Movie, options } from "../utils/constant";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const res = await axios.get(Upcoming_Movie, options);
                dispatch(getUpcomingMovie(res.data.results));
            } catch (error) {
                console.log("Upcoming Movies Error:", error);
            }
        };

        fetchUpcomingMovies();
    }, [dispatch]);
};

export default useUpcomingMovies;
