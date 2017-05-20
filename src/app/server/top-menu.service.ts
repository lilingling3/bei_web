import {Injectable, Inject} from '@angular/core';
import {Http,Headers,Request,RequestMethod,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class TopMenuService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  constructor(private http : Http) {}

  // 获取导航栏列表
  public getNavList(){
    //return this.http.get("http://test2.cn/v1/level/"+id);
    return this.http.get("https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/nav");
  }
}

