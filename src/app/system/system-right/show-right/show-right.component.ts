import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { RightServiceService } from '../service/right-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-show-right',
  templateUrl: './show-right.component.html',
  styleUrls: ['./show-right.component.css']
})
export class ShowRightComponent implements OnInit {
  public hidden:boolean;
  public title:string;
  public showId:number;
  public rights:any ={};
  public right:any ={};
  public roles:any;
  public role:any;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private rightServiceService:RightServiceService,
    private location:Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parmas =>{
      this.showId = parmas['id'];
      console.log(this.showId);

      //sessionStorage.setItem('dutyId',JSON.stringify(this.showId));

      this.getDutyMenuById(this.showId);
      // console.log('kkkkk');
    });
  }

  getDutyMenuById(showId:number){
    console.log(showId);
      this.rightServiceService.getRights()
        .then(res =>{
          if(res.errorCode == 0){
            this.rights = res.content;

            console.log(this.rights);

            this.right = this.rights.find((value,index) =>{
              return value.dutyId == showId;
            });
              this.roles = this.right.dutyMenu;
              console.log('this roles');
              console.log(this.roles);

              this.roles? this.hidden = false:this.hidden = true;
              console.log(this.hidden);
          }
        })
  }

  goBack(){
    //this.location.back()
    this.router.navigate(['workentry/system/right'])
  }

  // 删除
  public delItem(id:number){
    let roleIndex = this.roles.findIndex(function (value, index) {
      return value.dutyMenuId == id;
    });
    console.log(roleIndex);
    this.role = this.roles[roleIndex];

    if(confirm(`确定删除dutyMenuId为${id}吗`)){
      this.rightServiceService.delRights(id)
        .subscribe(res =>{
          console.log(res.json());
          this.roles.splice(roleIndex,1);
        })
    }
  }

  addRight(){
    this.router.navigate(['workentry/system/right/edit'])
  }

  updateRight(id:number){
    this.router.navigate(['workentry/system/right/edit',id])
  }

}
