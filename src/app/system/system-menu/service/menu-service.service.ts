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

// 修改
  public editMenuList(id,body){
    return this.http.put("http://test2.cn/v1/menus/"+id,body,{headers:this.headers});
  }
  // 删除
  public delMenuList(id){
    return this.http.delete("http://test2.cn/v1/menus/"+id)
  }

  // 新建
  public addMenuList(body){
    return this.http.post("http://test2.cn/v1/menus",body,{headers:this.headers});
  }

}
