import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { RightServiceService } from '../service/right-service.service';
import { MenuServiceService } from '../../system-menu/service/menu-service.service';

@Component({
  selector: 'app-edit-right',
  templateUrl: './edit-right.component.html',
  styleUrls: ['./edit-right.component.css']
})
export class EditRightComponent implements OnInit {
  public isAdd:boolean;
  public title:string;
  public editId:number;
  public rights:any ={};
  public right:any ={};
  public roles:any;
  public menuList:any;
  //public dutyId:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private rightServiceService:RightServiceService,
    private menuServiceService:MenuServiceService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.editId = params['id'];

        //this.dutyId = this.editId;

        //console.log("dutyId"+this.dutyId);
        this.isAdd = !this.editId;
        console.log(this.isAdd);
      });
    this.title = this.isAdd?'新增权限管理':'编辑权限管理';

    if(!this.isAdd){
      this.getDutyMenuById(this.editId)
    }

    this.getMenuLists();
    //console.log(this.right);
  };

  getMenuLists(){
    const $menuPrev = $('#menuPrev');
    const $menSub = $('#menSub');

    this.menuServiceService.getMenuList()
      .then(res =>{
        this.menuList = res.content;
        //console.log(this.menuList);
        this.menuList.forEach(function (value,index) {
           const muenStr = ' <option value="'+ value.id +'">'+ value.name +'</option>';
           $menuPrev.append(muenStr);

           $menuPrev.change(function () {
             // 获取 一级菜单的id
             const menuPrevIndex = this.value;
             console.log(menuPrevIndex);
             // 情况二级菜单
             $menSub.children('option:not(:first)').remove();
             //console.log(this.menuList);
             const  menuSub = res.content[menuPrevIndex-1].sub;
             menuSub.forEach(function (value,index) {
               const menuSubStr = ' <option value="'+ value.id +'">'+ value.name +'</option>';
               $menSub.append(menuSubStr);
             })
           })
        });
      })
  }

  getDutyMenuById(id:number){
      this.rightServiceService.getRights()
        .then(res =>{
          if(res.errorCode == 0){
            this.rights = res.content.dutyMenu;

            this.right = this.rights.find((value,index) =>{
              return value.dutyMenuId == id;
            });

          }
        })
  }

  submitForm(){
    if(this.isAdd){
      this.addDutyMenu()
    }else {
      this.editDutyMenu(this.editId)
    }
  }

  addDutyMenu(){
    const dutyId = sessionStorage.getItem('dutyId');
    let add_duty = {
      "dutyId": JSON.parse(dutyId),
      "menuId": parseInt(this.right.menuId),
      "action": this.right.action
    };

    console.log(add_duty);

    this.rightServiceService.addRights(add_duty.dutyId, add_duty.menuId, add_duty.action)
      .subscribe(res =>{
          console.log(res.json());
          const dutyId = sessionStorage.getItem('dutyId');
          this.router.navigate(['/workentry/system/right/show',dutyId])
      },
      error => {
        console.log(error.text())
      })

  }


  editDutyMenu(id:number){
    const dutyId = sessionStorage.getItem('dutyId');
    let add_duty = {
      "dutyId": JSON.parse(dutyId),
      "menuId": parseInt(this.right.menuId),
      "action": this.right.action
    };
  }

}
