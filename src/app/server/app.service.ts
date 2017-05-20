import {Injectable, Inject} from '@angular/core';
import {Http,Headers,Request,RequestMethod,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AppService {
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    constructor(private http : Http) {}

    public getUsers(user,page) {

        let page1=page?page:1
        let username='123132343243';
        var body = "userID=" + user.member.userID+"&page="+page1;
        console.log(body);
        return this.http.post("http://testys.cn/api/user/getusers", body,{headers: this.headers});
    }
    // 登录
    public login(user){
      console.log(user);

        let username='123132343243';
        var body = "mobile=" + user.mobile+"&code="+user.code+"&source=3";
        console.log("body::::"+body);
        return this.http.post("http://lingys.cn/api/account/verify/login", body,{headers: this.headers});
    }
    // 获取验证码
    public code(mobile){
        var body = "mobile=" + mobile;
        console.log(body);
        return this.http.post("http://lingys.cn/api/account/login/code", body,{headers: this.headers});
    }
}
