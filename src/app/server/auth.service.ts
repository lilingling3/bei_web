/**
 * Created by Administrator on 2017/4/12.
 */
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  constructor(){}

  loginWith( name:string,pass:string):boolean{
    if(name==="123"){
      return true
    }
    return false
  }
}


