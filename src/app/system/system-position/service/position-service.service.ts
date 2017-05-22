import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PositionServiceService {
  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

  constructor(
    private http:Http
  ) { }

  getDuties(){
    return this.http.get('http://test2.cn/v1/duty')
      .toPromise()
      .then(res => res.json())
  }

  // 修改
  public editDuties(id,body){
    return this.http.put("http://test2.cn/v1/duties/"+id,body,{headers:this.headers});
  }
  // 删除
  public delDuties(id){
    return this.http.delete("http://test2.cn/v1/duties/"+id)
  }

  // 新建
  public addDuties(body){
    return this.http.post("http://test2.cn/v1/duties",body,{headers:this.headers});
  }
}
