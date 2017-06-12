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
   return this.http.get('http://t.api.jiaab.com/menu')
     .toPromise()
     .then(res =>res.json())
  }
  addMenuList(sn,name,url,parentId){
    let body = "sn=" + sn+"&name="+name+
      "&url=" + url+"&parentId="+parentId;
    return this.http.post('http://t.api.jiaab.com/menus',body,{headers:this.headers})

  }

  editMenuList(id,sn,name,url,parentId){
    let body = "sn=" + sn+"&name="+name+
      "&url=" + url+"&parentId="+parentId;
    return this.http.put('http://t.api.jiaab.com/menus/'+id,body,{headers:this.headers})
  }

  delMenuList(id){
    return this.http.delete('http://t.api.jiaab.com/menus/'+id,{headers:this.headers})
  }
}
