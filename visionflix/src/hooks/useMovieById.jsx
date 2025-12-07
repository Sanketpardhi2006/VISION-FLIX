// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getTrailerMovie } from "../redux/movieSlice";
// import { options } from "../utils/constant";

// const useMovieById = (movieId) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchMovieById = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/videos`,
//           options
//         );

//         const trailer = res.data.results.filter(
//           (item) => item.type === "Trailer"
//         );

//         dispatch(
//           getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
//         );
//       } catch (error) {
//         console.log("Movie Trailer Error:", error);
//       }
//     };

//     if (movieId) fetchMovieById();
//   }, [movieId, dispatch]);
// };

// export default useMovieById;






// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getTrailerMovie } from "../redux/movieSlice";
// import { API_KEY } from "../utils/constant";

// const useMovieById = (movieId) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchMovieById = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
//         );

//         const trailer = res.data.results.filter(
//           (item) => item.type === "Trailer"
//         );

//         dispatch(
//           getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
//         );
//       } catch (error) {
//         console.log("Movie Trailer Error:", error);
//       }
//     };

//     if (movieId) fetchMovieById();
//   }, [movieId, dispatch]);
// };

// export default useMovieById;





import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";
import { API_KEY } from "../utils/constant";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
        );

        const trailer = res.data.results.filter(
          (item) => item.type === "Trailer"
        );

        dispatch(
          getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log("Movie Trailer Error:", error);
      }
    };

    if (movieId) fetchMovieById();
  }, [movieId, dispatch]);
};

export default useMovieById;
