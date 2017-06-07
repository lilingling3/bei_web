import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { MenuServiceService } from '../service/menu-service.service';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  public isAdd:boolean;
  public title:string;
  public editId:number;
  public menu:any ={};
  public menuList:any ={};
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private menuServiceService:MenuServiceService,
    private http:Http
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
      this.menuServiceService.getMenuList()
        .then(res =>{
          if(res.errorCode == 0){
            this.menuList = res.content;
            this.menu = this.menuList.find((value,index) =>{
              return value.id == id;
            })
     }})
  }


  submitForm(){
    if(this.isAdd){
      this.addMenu()
    }else {
      this.editMenu(this.editId)
    }
  }

  addMenu(){
    let add_menu = {
      "sn": this.menu.sn,
      "name": this.menu.name,
      "url":this.menu.url,
      "parent_id": this.menu.parent_id
    };
    this.menuServiceService.addMenuList(add_menu.sn,add_menu.name,add_menu.url,add_menu.parent_id)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/menu'])
        },
        error => {
          console.log(error.text());
        });
  }

  editMenu(id:number){
    let edit_menu = {
      "sn": this.menu.sn,
      "name": this.menu.name,
      "url":this.menu.url,
      "parent_id": this.menu.parent_id
    };
    this.menuServiceService.editMenuList(id,edit_menu.sn,edit_menu.name,edit_menu.url,edit_menu.parent_id)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/menu'])
        },
        error => {
          console.log(error.text());
        });
  }
}
