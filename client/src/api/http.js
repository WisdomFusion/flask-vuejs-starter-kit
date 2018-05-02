import axios from 'axios'
import config from '../shared/config';

class HttpClient {
  constructor() {
    let httpClient = axios.create({
      // TODO
    });

    httpClient.interceptors.request.use(
      config => {
        // TODO

        return config;
      },
      error => Promise.reject(error)
    );

    this.httpClient = httpClient;
  }
}

export default new HttpClient();
