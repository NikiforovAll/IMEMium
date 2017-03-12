import { Injectable } from '@angular/core';
import { Response, Http} from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomHttpService {

  constructor(private _http: Http) {

  }

  public makeRequest(method: string, url: string, payload?:any){
    if(method == 'GET'){
      return this._http.get(url) 
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError)
    }
  }

  public extractData(res: Response):Promise<any> {
    let body = res.json();
    console.log(body);
    return new Promise((resolve, reject) => {
        resolve(body || { });
    });
  }

  public handleError (error: Response | any):Promise<any>{
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


}
