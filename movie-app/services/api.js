import axios from "axios";
import qs from "qs";
import { KEY, BASE_URL } from "./api_config";

export const getMovies = async (type) => {
  const url = BASE_URL + type + `?api_key=${KEY}`;
  //  https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

  try {
    const params = {
      api_key: KEY,
    };
    const recipeAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await recipeAxios.get(url, { params });
    return response.data.results;
  } catch (ex) {
    throw ex;
  }
};
