// export const API_END_POINT = "http://localhost:8080/api/v1/user";

// export const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWZmYmYyODViNzYwMTk2NjlmYTMwNDZjYzRmZWFmOSIsIm5iZiI6MTc2NTA4NTMyMC42MzM5OTk4LCJzdWIiOiI2OTM1MTA4ODI4MTBmYjUyMDhjMWY0MTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bjh6NZVFhtw0zcgDcVtP4fIt-TrSt47dHvsdZWBBTgQ'
//     }
//   };
// export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
// export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
// export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
// export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

// export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";

// export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";


//second 

// // TMDB v3 API Key (safe for frontend)
// export const API_KEY = "faffbf285b76019669fa3046cc4feaf9";

// // Backend API
// export const API_END_POINT = "http://localhost:8080/api/v1/user";

// // TMDB API Options (v3 key ke liye headers me Authorization nahi chahiye)
// export const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//   },
// };

// // TMDB Endpoints
// export const Now_Playing_Movie = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
// export const Popular_Movie = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
// export const Top_Rated_Movie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
// export const Upcoming_Movie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

// // Search Movie (FINAL & COMPLETE)
// export const SEARCH_MOVIE_URL = (query) =>
//   `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`;

// // Image Base URL
// export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";





//third

// TMDB v3 API Key (safe for frontend)
export const API_KEY = "faffbf285b76019669fa3046cc4feaf9";

// Backend API
export const API_END_POINT = "http://localhost:8080/api/v1/user";

// TMDB API Options (for v3 API Key)
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

// TMDB Endpoints
export const Now_Playing_Movie = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
export const Popular_Movie = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
export const Top_Rated_Movie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
export const Upcoming_Movie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

export const SEARCH_MOVIE_URL = (query) =>
  `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`;

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
