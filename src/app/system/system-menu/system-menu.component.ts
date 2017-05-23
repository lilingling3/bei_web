import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MenuServiceService } from './service/menu-service.service';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-system-menu',
  templateUrl: './system-menu.component.html',
  styleUrls: ['./system-menu.component.css']
})
export class SystemMenuComponent implements OnInit {
  private menuList;
  private menu;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private menuServiceService:MenuServiceService,
    private http:Http
  ) { }

  ngOnInit() {
    this.getMenuLists()
  }

  getMenuLists(){
    let ss_menu = sessionStorage.getItem('menu');
    if(ss_menu){
      this.menuList = JSON.parse(ss_menu);
    }else {
      this.menuServiceService.getMenuList()
        .then(res =>{
          this.menuList = res.content;
          sessionStorage.setItem('menu',JSON.stringify(this.menuList))
        })
    }
  }

  update(id:number){
    this.router.navigate(['workentry/system/menu/edit',id])
  }

  goToEdit(){
    this.router.navigate(['workentry/system/menu/edit'])
  }

  delItem(id:number) {

    let indexWorkBooks = this.menuList.findIndex(function (value, index) {
      return value.id == id;
    });


    this.menu = this.menuList[indexWorkBooks];

    let headers = new Headers({'content-type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    if (confirm(`确定删除id为${id}吗`)) {
      const url = 'http://test2.cn/v1/wordbook/' + id;
      this.http.delete(url, options)
        .toPromise()
        .then(()=> {
          console.log('llll');
          this.menuList = this.menuList.filter(menu =>menu != this.menu);
        })
    }
  }
}
