import axios from 'axios';
import {URL} from './const';

const createAPI = (onRequireAuth: () => void) => {
  const api = axios.create({
    baseURL: `${URL.DOMEN}${URL.HOST}`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 401) {
      onRequireAuth();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
