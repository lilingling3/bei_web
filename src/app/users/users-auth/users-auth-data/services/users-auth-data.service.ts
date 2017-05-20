// 认证用户相关服务
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersAuthService {
    private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    constructor(private http:Http){}

    public getUsers(){
      return this.http.get("https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/user/list");
    }


}
