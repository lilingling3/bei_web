import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  private isAdd:boolean;
  private title:string;
  private editId:number;
  private menu:any ={};
  private menuList:any ={};
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private menuServiceService:MenuServiceService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parmas =>{
      this.editId = parmas['id'];
      this.isAdd = !this.editId;
    });
    this.title = this.isAdd?"新增菜单管理":'编辑菜单管理';
    if(!this.isAdd){
      this.getMenuById(this.editId)
    }
  }

  getMenuById(id:number){
    let ss_menu = sessionStorage.getItem('menu');
    if(ss_menu){
      this.menuList = JSON.parse(ss_menu);
      this.menu = this.menuList.find((value,index)=>{
        return value.id == id;
      })
    }else {
      this.menuServiceService.getMenuList()
        .then(res =>{
          if(res.errorCode == 0){
            this.menuList = res.content;
            sessionStorage.setItem('menu',JSON.stringify(this.menuList));
            this.menu = this.menuList.find((value,index) =>{
              return value.id == id;
            })
          }
        })
    }
  }


  submitForm(){
    if(this.isAdd){
      this.addMenu()
    }else {
      this.editMenu(this.editId)
    }
  }

  addMenu(){
    let ss_menu = sessionStorage.getItem('menu');
    if(ss_menu){
      this.menuList = JSON.parse(ss_menu)
    }else {
      this.menuServiceService.getMenuList()
        .then(res =>{
          if(res.errorCode == 0){
            this.menuList = res.content;
            sessionStorage.setItem('menu',JSON.stringify(this.menuList));
          }
        })
    }

    let new_id = +this.menuList[this.menuList.length-1].id +1;
    let add_menu = {
      // "id": new_id,
      "sn": this.menu.sn,
      "name": this.menu.name,
      "url":this.menu.url,
      "parent_id": this.menu.parent_id
    };
    this.menuList.push(add_menu);
    this.menuServiceService.addMenuList(add_menu);
    sessionStorage.setItem('menu',JSON.stringify(this.menuList));
    this.router.navigate(['/workentry/system/menu'])
  }

  editMenu(id:number){
    let edit_menu = {
      // "id": this.editId,
      "sn": this.menu.sn,
      "name": this.menu.name,
      "url":this.menu.url,
      "parent_id": this.menu.parent_id
    };
    let ss_menu = sessionStorage.getItem('menu');
    this.menuList = JSON.parse(ss_menu);
    let edit_index = this.menuList.findIndex((value,index)=>{
        return value.id == id
    });

    this.menuList.splice(edit_index,1,edit_menu);
    this.menuServiceService.editMenuList(id,edit_menu);
    sessionStorage.setItem('menu',JSON.stringify(this.menuList));
    this.router.navigate(['/workentry/system/menu'])
  }
}
