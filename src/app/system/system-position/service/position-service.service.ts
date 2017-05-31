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

  // getDuties(){
  //   return this.http.get('http://test2.cn/v1/duty')
  //     .toPromise()
  //     .then(res => res.json())
  // }

  getDuties(){
    return this.http.get('https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/z-tree')
      .toPromise()
      .then(res => res.json())
  }

  addDuties(sn,name,parent_id,company_id){
    let body = "sn=" + sn+"&name="+name+
      "&parent_id=" + parent_id+"&company_id="+company_id;
    return this.http.post('http://test2.cn/v1/duties',body,{headers:this.headers})

  }

  editDuties(id,sn,name,parent_id,company_id){
    let body = "sn=" + sn+"&name="+name+
      "&parent_id=" + parent_id+"&company_id="+company_id;
    return this.http.put('http://test2.cn/v1/duties/'+id,body,{headers:this.headers})
  }

  delDuties(id){
    return this.http.delete('http://test2.cn/v1/duties/'+id,{headers:this.headers})
  }

}
