// 认证用户相关服务
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StationService {
  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

  constructor(private http:Http){}

  // 获取租赁点列表
  public getRentalStations(id){
    const body = JSON.stringify({
      id : id
    });
    return this.http.post("https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/station",
      body, {headers:this.headers})
  }
  // 三级联动
  public getStationArea(){
    return this.http.get("https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/three/level")
  }





}
