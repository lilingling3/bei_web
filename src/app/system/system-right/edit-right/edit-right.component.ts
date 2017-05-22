import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { RightServiceService } from '../service/right-service.service';

@Component({
  selector: 'app-edit-right',
  templateUrl: './edit-right.component.html',
  styleUrls: ['./edit-right.component.css']
})
export class EditRightComponent implements OnInit {
  private isAdd:boolean;
  private title:string;
  private editId:number;
  private rights:any ={};
  private right:any ={};
  private roles:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private rightServiceService:RightServiceService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.editId = params['id'];
        this.isAdd = !this.editId;
        console.log(this.isAdd);
      });
    this.title = this.isAdd?'新增权限管理':'修改权限管理';

    if(!this.isAdd){
      this.getDutyMenuById(this.editId)
    }

  };

  getDutyMenuById(id:number){
    let ss_right = sessionStorage.getItem('right');
    if(ss_right){
      this.rights = JSON.parse(ss_right);
      this.right = this.rights.find((value,index)=>{
        return value.id == id;
      })
    }else {
      this.rightServiceService.getRights()
        .then(res =>{
          if(res.errorCode == 0){
            this.rights = res.content;
            sessionStorage.setItem('right',JSON.stringify(this.rights));
            this.right = this.right.find((value,index) =>{
              return value.id == id;
            })
          }
        })
    }
  }

}
