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
  public right:any ={menuId:'-1',
                     action: [ {text:"新建",value:'46',checked:false},
                     {text:"删除",value:'47',checked:false},{text:"编辑",value:'48',checked:false}]};
  public roles:any;
  public menuList:any;
 // public actionList = ['46','47','48'];
  //public actionList = [];
  public selectAction:Array<string> = [];
  public dutyId;
  public menuId;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private rightServiceService:RightServiceService,
    private menuServiceService:MenuServiceService,
  ) { }

  ngOnInit() {
    this.dutyId = JSON.parse(sessionStorage.getItem('dutyId'));

    console.log('dutyId'+this.dutyId);

    this.activatedRoute.params.subscribe(
      params => {
        this.editId = params['id'];
        this.isAdd = !this.editId;
        console.log(this.isAdd);
      });
    this.title = this.isAdd?'新增权限管理':'编辑权限管理';

    if(!this.isAdd){
      console.log(this.editId)
      this.getDutyMenuById(this.editId)
    }

     this.getMenuLists();

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
               const menuSubStr = ' <option value ="'+ value.id +'">'+ value.name +'</option>';
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
            const data = res.content;
            console.log(data);

          this.rights = data.find((value,index) =>{
            return value.dutyId == this.dutyId
          }).dutyMenu

          this.right = this.rights.find((value,index) =>{
             return value.dutyMenuId == id
          })
          console.log("menuId"+this.right.menuId)
          }
        })
  }

  onChange(event,item){
    item.checked = event.target.checked;
    if(item.checked){
      //console.log(item.value)
      this.selectAction.push(item.value)
    }

  }

  selectCheckbox(check:boolean,value:string){
    var index:number = this.selectAction.indexOf(value);
    //当前选择的就追加否则就移除
    if(check){
      if(index < 0){
        this.selectAction.push(value);
      }
    }else{
      if(index > -1){
        this.selectAction = this.selectAction.filter((ele,index)=>{
          return ele != value;
        })
      }
    }
    //this.dictionaryForm.value["hobby"] = this.selectHobby.toString();
    console.log(this.selectAction)
  }

  submitForm(){
    if(this.isAdd){
      this.addDutyMenu()
    }else {
      this.editDutyMenu(this.editId)
    }
  }

  addDutyMenu(){
    this.menuId = $('#menSub').val();
    console.log("seleted:"+this.menuId);
    console.log(this.right.action);
    let add_duty = {
      "dutyId": this.dutyId,
      //"menuId": parseInt(this.menuId),
      "menuId": parseInt(this.right.menuId),
      "action": this.selectAction
      //"action": parseInt(this.right.action.value)
    };

    console.log(add_duty);

    this.rightServiceService.addRights(add_duty.dutyId, add_duty.menuId, add_duty.action)
      .subscribe(res =>{
           console.log(res.json());
          //console.log(res)
          this.router.navigate(['/workentry/system/right/show',this.dutyId])
      },
      error => {
        console.log(error.text())
      })

  }


  editDutyMenu(id:number){
    let edit_duty = {
      "dutyId": this.dutyId,
      "menuId": parseInt(this.right.menuId),
      "action": this.right.action
    };
    console.log('编辑 edit_duty')
    console.log(edit_duty)
  }



}
