import axios, { AxiosError } from 'axios';

import { BASE_GITHUB_API_URL } from './apiConfig';

export const axiosFetch = axios.create({
  baseURL: BASE_GITHUB_API_URL,
});

axiosFetch.interceptors.request.use(
  config => {
    const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

    if (githubToken) config.headers.Authorization = `Bearer ${githubToken}`;

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
