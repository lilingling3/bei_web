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
    return this.http.get('http://t.api.jiaab.com/duty')
      .toPromise()
      .then(res => res.json())
  }

  // getDuties(){
  //   return this.http.get('https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/z-tree')
  //     .toPromise()
  //     .then(res => res.json())
  // }

  addDuties(sn,name,parentId,companyId){
    let body = "sn=" + sn+"&name="+name+
      "&parentId=" + parentId+"&companyId="+companyId;
    return this.http.post('http://t.api.jiaab.com/duties',body,{headers:this.headers})

  }

  editDuties(id,sn,name,parentId,companyId){
    let body = "sn=" + sn+"&name="+name+
      "&parentId=" + parentId+"&companyId="+companyId;
    return this.http.put('http://t.api.jiaab.com/duties/'+id,body,{headers:this.headers})
  }

  delDuties(id){
    return this.http.delete('http://t.api.jiaab.com/duties/'+id,{headers:this.headers})
  }

}
