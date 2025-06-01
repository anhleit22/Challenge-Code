import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const baseURL =
  typeof window === 'undefined'
    ? process.env.BASE_URL
    : process.env.REACT_APP_BASE_URL;
const service = axios.create({
  baseURL: baseURL || 'http://localhost:4000',
});

axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data ? response.data : { statusCode: response.status };
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const res = {
        data: AnalyserNode,
        status: AnalyserNode,
        headers: AnalyserNode,
      };
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        res.data = error.response.data;
        res.status = error.response.status;
        res.headers = error.response.headers;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser
        // and an instance of http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      return Promise.reject(error);
    }
  );
export default service;