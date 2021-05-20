import axios from "axios";

export default class BaseService {

  static getInstance() {
    if (!BaseService.instance) {
      BaseService.instance = new BaseService();
    }
    return BaseService.instance;
  }

  config={
    method: 'GET',
    url: '',
    headers: {'Content-Type':'application/json'},
    data: {}
  }

  async fnRest(method, url, requestBody){
    
    this.config.method = method
    
    this.config.url = 'http://localhost:3300/users/' + url    //문제 url 넣기

    this.config.data = requestBody

    try {

      console.log("axios request url : " + url + ", requestBody : " + requestBody)
      
      const response = await axios.request(this.config)
      console.log('server response -----'+JSON.stringify(response.data))
      if (response.status === 200) {
        return response.data
      } else {
        const noResponseError = {
          successOrNot: 'N',
          statusCode: 'NO.RESPONSE',
          data: {}
        }
        throw noResponseError
      }
    } catch (errorResponse) {
      if (errorResponse && (errorResponse).error) {
        const errors = {
          successOrNot: 'N',
          statusCode: 'ERROR.RESPONSE',
          data: errorResponse.data
        }
        throw errors
      } else {
        const unknownError= {
          successOrNot: 'N',
          statusCode: 'UNKNOWN.SERVER',
          data: {}
        }
        throw unknownError
      }
    }
  }


}