import axios from 'axios';

const apiClient = () => {
  const axiosInstance = axios.create(
    {
      baseURL: 'https://swapi.dev/api/',
      responseType: 'json',
    },
  );
  return axiosInstance;
};

export default apiClient;
