import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class CustomRequestOptionsService extends BaseRequestOptions {

  // merge(options?: RequestOptionsArgs): RequestOptions {
  //   if (options !== null && options.url !== null) {
  //     options.url = environment.baseUrl + options.url;
  //   }
  //   let requestOptions = super.merge(options)
  //   return new CustomRequestOptionsService({
  //     method: requestOptions.method,
  //     url: requestOptions.url,
  //     search: requestOptions.search,
  //     headers: requestOptions.headers,
  //     body: requestOptions.body,
  //     withCredentials: requestOptions.withCredentials,
  //     responseType: requestOptions.responseType
  //   });
  // }
    merge(options?: RequestOptionsArgs): RequestOptions {
      options.url = environment.baseUrl + options.url;
      return super.merge(options);
    }
}
