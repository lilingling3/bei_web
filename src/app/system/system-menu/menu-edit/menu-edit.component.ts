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
  private isAdd:boolean;
  private title:string;
  private editId:number;
  private menu:any ={};
  private menuList:any ={};
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
    let add_menu = {
      "sn": this.menu.sn,
      "name": this.menu.name,
      "url":this.menu.url,
      "parent_id": this.menu.parent_id
    };

    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let body = "sn=" + add_menu.sn+"&name="+add_menu.name+
      "&url=" + add_menu.url+"&parent_id="+add_menu.parent_id;
    this.http.post('http://test2.cn/v1/menus/',body,options)
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

    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let body = "sn=" + edit_menu.sn+"&name="+edit_menu.name+
      "&url=" + edit_menu.url+"&parent_id="+edit_menu.parent_id;
    this.http.put('http://test2.cn/v1/menus/',body,options)
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
