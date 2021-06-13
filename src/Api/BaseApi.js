import axios from 'axios';

export default class BaseApi {
  static request = null;

  _getInstance = (sendToken, isMultipart = false) => {
    const request = axios.create({
      baseURL: 'http://newsapi.org/v2/top-headlines?country=us&apikey=514ad79dd8df49459b3248dc85808013',  ///// baseurl goes here
      headers: { Accept: 'application/json', 'Content-Type': isMultipart ? 'multipart/form-data; charset=utf-8;' : 'application/x-www-form-urlencoded; charset=UTF-8' },
    });
    return request;
    }
  publicApi() {
    if (this.request != null) {
      return this.request;
    }
    this.request = this._getInstance(false);
    return this.request;
  }
}

