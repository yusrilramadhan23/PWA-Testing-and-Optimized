/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (value) => `${CONFIG.BASE_URL}/search?q=${value}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
