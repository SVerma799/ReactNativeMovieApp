import axios from "axios";
import qs from "qs";
import { KEY, BASE_URL } from "./api_config";

export const getMovies = async (type) => {
  const url = BASE_URL + "movie/" + type;
  try {
    const params = {
      api_key: KEY,
    };
    const moviesAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await moviesAxios.get(url, { params });
    return response.data.results;
  } catch (ex) {
    throw ex;
  }
};

export const getSepecificMovie = async (movieId) => {
  const url = BASE_URL + "movie/" + movieId;
  console.log(url);
  try {
    const params = {
      api_key: KEY,
    };
    const specificMovieAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await specificMovieAxios.get(url, { params });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getTvShowsAsPerType = async (type) => {
  try {
    const url = BASE_URL + "tv/" + type;
    const params = {
      api_key: KEY,
    };
    const tvShowAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await tvShowAxios.get(url, { params });
    return response.data.results;
  } catch (ex) {
    throw ex;
  }
};

export const getSepecificTvShow = async (tvID) => {
  const url = BASE_URL + "tv/" + tvID;
  try {
    const params = {
      api_key: KEY,
    };
    const specificMovieAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await specificMovieAxios.get(url, { params });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getSearchResult = async (type, text) => {
  const url = BASE_URL + `search/${type}/`;

  // const url = `https://api.themoviedb.org/3/search/${type}?api_key=${KEY}&query=${text}`;
  try {
    const params = {
      api_key: KEY,
      query: text,
    };
    const seachAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });
    const response = await seachAxios.get(url, { params });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
