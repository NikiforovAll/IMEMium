import { Injectable } from '@angular/core';
import { Response, Http, } from '@angular/http'

@Injectable()
export class CustomHttpService {

  constructor(private _http: Http) {
  }

  public makeRequest(method: string, url: string, payload?: any): Promise<any> {
    if (method == 'GET') {
      return this._http.get(url)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError)
    }
  }

  public extractData(res: Response): Promise<any> {
    let body = res.json();
    console.info(body);
    return new Promise((resolve, reject) => {
      resolve(body || {});
    });
  }

  public handleError(error: Response | any) {
    let errorResponse = (<Response>error);
    console.log('errorResponse ', errorResponse);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    if (errorResponse.status == 401) {
      throw errMsg;
    }
    console.error(errMsg);
  }


}
