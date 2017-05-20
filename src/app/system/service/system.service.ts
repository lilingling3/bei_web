// 认证用户相关服务
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SystemService {
  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

  constructor(private http:Http){}
  //  获取列表
  public getWorkBooks(page:number){
    //return this.http.get("http://test2.cn/v1/wordbook");
    // get 请求传递参数
    let params = new URLSearchParams();
    params.set('page',String(page));
    return this.http.get("https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/system/dictionary",{search:params});
  }
  // 修改
  public correctWorkBooks(id,sn,name,value,enabled,parentId){
    const body = `sn=${sn} & name=${name} & value=${value} & enabled=${enabled} & parentId=${parentId}`;
    return this.http.put("http://test2.cn/v1/wordbooks/"+id,body,{headers:this.headers});
  }
  // 删除
 public delWorkBooks(id){
   return this.http.delete("http://test2.cn/v1/wordbooks/"+id)
 }
 // 新建
  public newWorkBooks(sn,name,value,enabled,parentId){
    const body = `sn=${sn} & name=${name} & value=${value} & enabled=${enabled} & parentId=${parentId}`;
    return this.http.post("http://test2.cn/v1/wordbooks",body,{headers:this.headers});
  }

}
