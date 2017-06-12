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
    return this.http.get('http://t.api.jiaab.com/company')
      .toPromise()
      .then(res => res.json())
  }

  addCompanies(name,fullName,type,code,contacts,tel,postcode,address){
    let body = "name=" + name+"&fullName="+fullName+
      "&type=" + type+"&code="+code+
      "&contacts=" + contacts+"&tel="+tel+
      "&postcode=" + postcode+"&address="+address;
    return this.http.post('http://t.api.jiaab.com/companies',body,{headers:this.headers})
  }

  editCompanies(id,name,fullName,type,code,contacts,tel,postcode,address){
    let body = "name=" + name+"&fullName="+fullName+
      "&type=" + type+"&code="+code+
      "&contacts=" + contacts+"&tel="+tel+
      "&postcode=" + postcode+"&address="+address;

    return this.http.put('http://t.api.jiaab.com/companies/'+id,body,{headers:this.headers})
  }

  delCompanies(id){
    return this.http.delete('http://t.api.jiaab.com/companies/'+id,{headers:this.headers})
  }

}
