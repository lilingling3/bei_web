import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MenuServiceService } from './service/menu-service.service';

@Component({
  selector: 'app-system-menu',
  templateUrl: './system-menu.component.html',
  styleUrls: ['./system-menu.component.css']
})
export class SystemMenuComponent implements OnInit {
  private menuList;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private menuServiceService:MenuServiceService,
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

  delItem(id:number){
    let ss_menu = sessionStorage.getItem('menu');
    if(ss_menu){
      this.menuList = JSON.parse(ss_menu);
      let menu_index = this.menuList.findIndex((value,index)=>{
        return value.id == id
      });
      if(confirm(`确定删除id为${id}吗`)) {
        this.menuList.splice(menu_index, 1);
        sessionStorage.setItem('menu', JSON.stringify(this.menuList));
        this.getMenuLists()
      }
    }else {
      this.menuServiceService.getMenuList()
        .then(res =>{
          if(res.errorCode == 0){
            this.menuList = res.content;
            sessionStorage.setItem('menu',JSON.stringify(this.menuList));
            let menu_index= this.menuList.findIndex(function (value, index) {
              return value.id == id;
            });
            if(confirm(`确定删除id为${id}吗`)){
              this.menuList.splice(menu_index,1);
              sessionStorage.setItem('menu',JSON.stringify(this.menuList));
              this.getMenuLists()
            }
          }
        })
    }



  }

}
