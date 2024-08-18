import axios from "axios";
import { apiEndpoints } from "../../constants/apiEndpoints";
import { apiKeys } from "../../constants/apiKeys";

type params = {
  payload: object;
  successCb: (data: any) => void;
  errorCb: (data: any) => void;
};

export const getTop100Movies = (params: params) => {
  axios
    .post(`${apiEndpoints.top100Movies}`, params.payload, {
      headers: {
        "x-rapidapi-key": `${apiKeys.imdb}`,
      },
    })
    .then((response) => {
      params.successCb(response.data);
    })
    .catch((error) => {
      params.errorCb(error);
    });
};

export const serachMovieByTitle = (params: params) => {
  axios
    .get(`${apiEndpoints.serach}`, {
      params: params.payload,
      headers: {
        "x-rapidapi-key": `${apiKeys.imdb}`,
      },
    })
    .then((response) => {
      params.successCb(response.data);
    })
    .catch((error) => {
      params.errorCb(error);
    });
};
