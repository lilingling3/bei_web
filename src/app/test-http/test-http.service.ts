import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpService } from '../server/common.service';

@Injectable()
export class TestHttpService {

  constructor(
    private httpService:HttpService
  ) { }

  testToBodyString(obj){
    return this.httpService.toBodyString(obj)
  }

  testToQueryString(obj){
    return this.httpService.toQueryString(obj)
  }

  getCompaies(){
    return this.httpService.get('http://t.api.jiaab.com/company')
    .then(res => {
      console.log(res);
      res;
    })
  }
}
