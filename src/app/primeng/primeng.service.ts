import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PrimengService {

  constructor(
    private http:Http
  ) { }

  public getDutyMenu(){
    return this.http.get('https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/primeng/tree')
    .toPromise()
    .then(res => res.json())
  }
  public getSchedule(){
    return this.http.get('https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/schedule')
    .toPromise()
    .then(res => res.json())
  }

}
