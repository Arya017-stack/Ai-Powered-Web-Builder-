import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const getHeaders = () => {
  const token = localStorage.getItem("token");

  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
};

const api = {
  get: async (url) => {
    return await axios.get(`${BASE_URL}${url}`, {
      headers: getHeaders(),
    });
  },

  post: async (url, data) => {
    return await axios.post(`${BASE_URL}${url}`, data, {
      headers: getHeaders(),
    });
  },

  put: async (url, data) => {
    return await axios.put(`${BASE_URL}${url}`, data, {
      headers: getHeaders(),
    });
  },

  delete: async (url) => {
    return await axios.delete(`${BASE_URL}${url}`, {
      headers: getHeaders(),
    });
  },
};

export default api;
