import axios from "axios";

axios.defaults.baseURL = "http://admin.jr.zhyxcxcs.cn";
axios.defaults.headers.post["Content-Type"] = "application/x-www-from-urlencoded";
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    // console.log("request: " + JSON.stringify(config));
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // console.log("response: " + JSON.stringify(response));
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function all(callback = [], spread) {
  axios.all(callback).then(function(values) {
    spread(values);
  });
}
