import {Component, Inject, forwardRef, OnInit, AfterViewInit} from '@angular/core';
import {commonsInstances  }from "../models/Acommons";
import {USER,User} from  '../models/User';
import { LoginUser } from '../mock/login-user';
import { TopMenuService } from '../server/top-menu.service';
import {error} from "util";
@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
  private id = 1;
  public user;
  private navLists;
  constructor(
    private commonsInstances : commonsInstances,
    private topMenuService : TopMenuService
  ) {
    //this.user=USER.getMember()
    this.user = LoginUser;
  }

  ngOnInit() {
    console.log("获取导航栏之前");
    this.getNavBarList()
  }

  public logout(): void {
    this.commonsInstances.logout()
  }

  public getNavBarList(){
    //this.topMenuService.getNavList(this.id)
    this.topMenuService.getNavList()
      .subscribe(res=>{
        console.log('获取导航栏了');
        var data = res.json();
        if(data.errorCode == 0){
          var content = data.content;
          console.log(content);
          this.navLists = content;
          }
          // alert('111');
          // 发送请求后，引入js
          require('assets/js/custom.js');
        },
        error => console.log(error)
      )
      }
}
