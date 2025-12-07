import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constant";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(Now_Playing_Movie, options);
                dispatch(getNowPlayingMovies(res.data.results));
            } catch (error) {
                console.log("API Error:", error);
            }
        }

        fetchData();
    }, [dispatch]); 
};

export default useNowPlayingMovies;
