import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MenuServiceService {
  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  constructor(
    private http:Http
  ) { }

  getMenuList(){
   return this.http.get('http://test2.cn/v1/menu')
     .toPromise()
     .then(res =>res.json())
  }
}
