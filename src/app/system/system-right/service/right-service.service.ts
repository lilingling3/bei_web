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
    return this.http.get('http://t.api.jiaab.com/duty/menu')
      .toPromise()
      .then(res => res.json())
  }

  // 修改
  public editRights(dutyMenuId,dutyId,menuId,action){
    let body = "dutyId=" + dutyId+"&menuId="+menuId+
      "&action=" + action;
    return this.http.put("http://t.api.jiaab.com/duties/" + dutyMenuId + "/menu",body,{headers:this.headers});
  }
  // 删除
  public delRights(id){
    return this.http.delete("http://t.api.jiaab.com/duties/" + id + "/menu")
  }

  // 新建
  public addRights(dutyId,menuId,action){
    let body = "dutyId=" + dutyId+"&menuId="+menuId+
      "&action=" + action;
    return this.http.post("http://t.api.jiaab.com/duties/menus",body,{headers:this.headers});
  }

}
