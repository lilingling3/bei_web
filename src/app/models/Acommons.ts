/**
 * Created by linlin on 2017/4/5.
 */
import {Injectable, Inject} from '@angular/core';
import { Router } from "@angular/router";
import {USER} from  '../models/User';
import AppConstants from "./app.constants";
@Injectable()
export class commonsInstances{
    public vregmobile=/^1[3|4|5|8|7]\d{9}$/;
    public vregcode=/^\d{4}$/;

  constructor( public router: Router) {
  }
    public vmobile(m) {
        if(this.vregmobile.test(m)){
            return true;
        }
        return false;
    }
    public vcode(c) {
        if(this.vregcode.test(c)){
            return true;
        }
        return false;
    }
  public vmember(){
    // if(!USER.getMember()){
    //   this.router.navigate(['/'+AppConstants.ROUTER_ERROR, '没有此用户或者登录过期，请重新登录!'])
    // }
  }
  public logout(){
    this.router.navigateByUrl('/'+AppConstants.ROUTER_LOGIN)
    USER.deleteMember();
  }

  public test(){
    console.log("rest");
  }

}






