// 认证用户相关服务
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SystemDictionaryService {

  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

  constructor(private http:Http){}
  //  获取列表 带分页
  // public getWorkBooks(page:number){
  //   //return this.http.get("http://test2.cn/v1/wordbook");
  //   // get 请求传递参数
  //   let params = new URLSearchParams();
  //   params.set('page',String(page));
  //   return this.http.get("https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/system/dictionary",{search:params});
  // }

  //  不带分页
  public getWorkBooks(){
    return this.http.get("http://test2.cn/v1/wordbook");
    //return this.http.get("https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/system/dictionary");
  }
}
