import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SystemCompanyService {
  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  constructor(
    private http:Http
  ) { }

  public getCompanies(){
    return this.http.get('http://test2.cn/v1/company')
      .toPromise()
      .then(res => res.json())
  }


  // 修改
  public editCompanies(id,body){
    // let body = {
    //   "name": name,
    //   "full_name": full_name,
    //   "type": type,
    //   "contacts": contacts,
    //   "tel": tel,
    //   "postcode": postcode,
    //   "address": address
    // };
    return this.http.put("http://test2.cn/v1/companies/"+id,body,{headers:this.headers});

  }
  // 删除
  public delCompanies(id){
    return this.http.delete("http://test2.cn/v1/companies/"+id)
  }

  // 新建
  public addCompanies(body){
    return this.http.post("http://test2.cn/v1/companies",body,{headers:this.headers});
  }



}
