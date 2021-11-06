import FailedToFetchException from "../exceptions/FailedToFetchException";

class HttpClient {

    baseUrl: string = 'http://localhost:9000'
  
  defaultRequestConfiguration: RequestInit = { mode: 'cors', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
    constructor() {
    }
  
    public async get(method: string, requestConfiguration?: RequestInit): Promise<Response> {
      const getRequestConfiguration: RequestInit = { ...this.defaultRequestConfiguration,...requestConfiguration, method: 'get' }

      try {
        var request = new Request(this.construcUrl(method, this.baseUrl), getRequestConfiguration)
        return await fetch(request)
      } catch (error) {
        const exception = new FailedToFetchException(`${error}`);
        exception.notifyError();
        throw exception;
      }
    }
  
    public async post(method: string, payload: any, requestConfiguration?: RequestInit): Promise<Response> {
      const postRequestConfiguration: RequestInit = {
        ...this.defaultRequestConfiguration,
        ...requestConfiguration,
        method: 'post',
        body: JSON.stringify(payload)
      }

      try {
        const request = new Request(this.construcUrl(method, this.baseUrl), postRequestConfiguration)
        return await fetch(request)
      } catch (error) {
        const exception = new FailedToFetchException(`${error}`);
        exception.notifyError();
        throw exception;
      }
    }
  
    public async put(method: string, payload: any, requestConfiguration?: RequestInit): Promise<Response> {
      const putRequestConfiguration: RequestInit = {
        ...this.defaultRequestConfiguration,
        ...requestConfiguration,
        method: 'put',
        body: JSON.stringify(payload)
      }
      try {
        const request = new Request(this.construcUrl(method, this.baseUrl), putRequestConfiguration)
        return await fetch(request)
      } catch (error) {
        const exception = new FailedToFetchException(`${error}`);
        exception.notifyError();
        throw exception;
      }
    }

    public async delete(method: string, requestConfiguration?: RequestInit): Promise<Response> {
    
      const getRequestConfiguration: RequestInit = { ...this.defaultRequestConfiguration, ...requestConfiguration, method: 'delete' }

      try {
        var request = new Request(this.construcUrl(method, this.baseUrl), getRequestConfiguration)
        return await fetch(request)
      } catch (error) {
        const exception = new FailedToFetchException(`${error}`);
        exception.notifyError();
        throw exception;
      }

    }
  
    public construcUrl(method: string, base: string): string {
      return new URL(method, base).toString()
    }
  }
  export default new HttpClient()
