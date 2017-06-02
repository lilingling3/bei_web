import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RightServiceService {
  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

  constructor(
    private http:Http
  ) { }

  public getRights(){
    return this.http.get('http://test2.cn/duty/menu')
      .toPromise()
      .then(res => res.json())
  }

  // 修改
  public editRights(id,body){
    return this.http.put("http://test2.cn/dutymenu/"+id,body,{headers:this.headers});
  }
  // 删除
  public delRights(id){
    return this.http.delete("http://test2.cn/dutymenu/"+id)
  }

  // 新建
  public addRights(body){
    return this.http.post("http://test2.cn/dutymenu",body,{headers:this.headers});
  }

}
