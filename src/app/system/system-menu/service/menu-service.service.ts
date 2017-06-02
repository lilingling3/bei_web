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
   return this.http.get('http://test2.cn/menu')
     .toPromise()
     .then(res =>res.json())
  }
  addMenuList(sn,name,url,parent_id){
    let body = "sn=" + sn+"&name="+name+
      "&url=" + url+"&parent_id="+parent_id;
    return this.http.post('http://test2.cn/menus',body,{headers:this.headers})

  }

  editMenuList(id,sn,name,url,parent_id){
    let body = "sn=" + sn+"&name="+name+
      "&url=" + url+"&parent_id="+parent_id;
    return this.http.put('http://test2.cn/menus/'+id,body,{headers:this.headers})
  }

  delMenuList(id){
    return this.http.delete('http://test2.cn/menus/'+id,{headers:this.headers})
  }
}
