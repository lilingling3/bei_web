import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Component, Inject, forwardRef, OnInit} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import {USER,User} from  '../models/User';
import { AppService } from '../server/app.service';
import { commonsInstances } from '../models/Acommons';
import AppConstants  from "../models/app.constants";

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public user;
  public error = '';
  public isLoading = false;
  private codetimer=60;
  public getCodeSuccess=false;
  private getCodeTimer;
  private iscode=false;

  constructor(
    private appService : AppService,
    private commonsInstances : commonsInstances,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {this.user=new User()}

  ngOnInit() {}

  public login(){
    let vm = this;
    vm.error = '';
    if(!this.commonsInstances.vmobile(this.user.mobile) ||　!this.commonsInstances.vcode(this.user.code)){
      vm.error = "手机号或者验证码错误!"
      return false;
    }
    vm.isLoading = true;
    this.appService.login(this.user).subscribe(
      res => {
        let data=res.json();
        console.log(data);
        if(data["errorCode"]!=0){
          vm.error = data["errorMessage"]
          vm.isLoading = false;
          vm.isLoading = false;
          return false;
        }

        let user = data["user"];
        sessionStorage.setItem(AppConstants.JIABEI_USER,JSON.stringify(data["user"]))
        USER.setMember(user);
        vm.isLoading = false;
        this.router.navigateByUrl(AppConstants.ROUTER_WORKENTRY);
      },
      err => {
        vm.error = "Account or password is wrong!！！！！";
        vm.isLoading = false;
      }
    )
  }

  public getcode(){
    let vm = this;
    vm.error = '';
    console.log('lllll');
    if(!this.user.mobile || !this.commonsInstances.vmobile(this.user.mobile)){
      vm.error = "手机号有误!";
      return false;
    }
    vm.iscode = true;

    this.appService.code(this.user.mobile).subscribe(
      res => {
        var data = res.json();
        console.log('kkkkkk');
        console.log(data);
        if(data["errorCode"]!=0){
          vm.error = data["errorMessage"];
          vm.iscode = false;
        }
        vm.codetimer=60;
        vm.getCodeSuccess=true;
        vm.getCodeTimer=setInterval(()=>{
          vm.codetimer--;
          if(vm.codetimer<0){
            clearInterval(vm.getCodeTimer);
            vm.getCodeSuccess=false;
          }
        },1000);
        vm.iscode = false;
      },
      err => {
        vm.error = "Account or password is wrong!";
        vm.iscode = false;
      }
    )
  }
}
