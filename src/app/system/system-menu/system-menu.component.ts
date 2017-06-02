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
  private menu;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private menuServiceService:MenuServiceService
  ) { }

  ngOnInit() {
    this.getMenuLists()
  }

  getMenuLists(){
      this.menuServiceService.getMenuList()
        .then(res =>{
          this.menuList = res.content;
          console.log(this.menuList);
        })
  }

  update(id:number){
    this.router.navigate(['workentry/system/menu/edit',id])
  }

  goToEdit(){
    this.router.navigate(['workentry/system/menu/edit'])
  }

  delItem(id:number) {

    let indexMenu = this.menuList.findIndex(function (value, index) {
      return value.id == id;
    });

    this.menu = this.menuList[indexMenu];

    if(confirm(`确定删除id为${id}吗`)){
      this.menuServiceService.delMenuList(id)
        .subscribe(res =>{
          console.log(res.json());
          this.menuList.splice(indexMenu,1);
        })
    }
  }
}
