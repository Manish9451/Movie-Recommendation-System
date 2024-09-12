import axios from 'axios';

// API Key and Base URL
const apiKey = "7ddcf554222c6018ac2c907b13e121ff";
const apiBaseUrl = 'https://api.themoviedb.org/3';

// API Endpoints
const trendingMovieEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}&language=en-US`;
const upcomingMovieEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US`;
const topRatedMovieEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`;

//dynamic endpoints
const movieDetailsEndpoint = (id) => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;
const movieCreditsEndpoint = (id) => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
const similarMovieEndpoint = (id) => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}&language=en-US`;


export const image500= path=> path? `https://image.tmdb.org/t/p/w500/${path}`:null;
export const image342= path=> path? `https://image.tmdb.org/t/p/w342/${path}`:null;
export const image185= path=> path? `https://image.tmdb.org/t/p/w185/${path}`:null;


// Generic API Call Function
const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
    header: 'accept: application/json'
    
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return {};
  }
};

// Exported Functions for Fetching Data
export const fetchTrendingMovies = () => {
  return apiCall(trendingMovieEndpoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMovieEndpoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMovieEndpoint);
};

export const fetchMovieDetails = (id) => {
  return apiCall(movieDetailsEndpoint(id));
};

export const fetchMovieCredits = (id) => {
  return apiCall(movieCreditsEndpoint(id));
};

export const fetchSimilarMovies = (id) => {
  return apiCall(similarMovieEndpoint(id));
};
