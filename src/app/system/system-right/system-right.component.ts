import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RightServiceService } from './service/right-service.service';

@Component({
  selector: 'app-system-right',
  templateUrl: './system-right.component.html',
  styleUrls: ['./system-right.component.css']
})
export class SystemRightComponent implements OnInit {
  private rights;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private rightServiceService:RightServiceService,
  ) { }

  ngOnInit() {
    this.getRights()
  }

  getRights(){
    let ss_right = sessionStorage.getItem('right');
    if(ss_right){
      this.rights = JSON.parse(ss_right)
    }else {
      this.rightServiceService.getRights()
        .then(res =>{
          this.rights = res.content;
          sessionStorage.setItem('right',JSON.stringify(this.rights))
        })
    }
  }


  update(id:number){
    this.router.navigate(['workentry/system/right/edit',id])
  }

  goToEdit(){
    this.router.navigate(['workentry/system/right/edit'])
  }

  delItem(id:number){
    let ss_right = sessionStorage.getItem('right');
    if(ss_right){
      this.rights = JSON.parse(ss_right);
      let right_index = this.rights.findIndex((value,index)=>{
        return value.id == id
      });
      if(confirm(`确定删除id为${id}吗`)) {
        this.rights.splice(right_index, 1);
        this.rightServiceService.delRights(id);
        sessionStorage.setItem('right', JSON.stringify(this.rights));
        this.getRights()
      }
    }else {
      this.rightServiceService.getRights()
        .then(res =>{
          if(res.errorCode == 0){
            this.rights = res.content;
            sessionStorage.setItem('right',JSON.stringify(this.rights));
            let menu_index= this.rights.findIndex(function (value, index) {
              return value.id == id;
            });
            if(confirm(`确定删除id为${id}吗`)){
              this.rights.splice(menu_index,1);
              this.rightServiceService.delRights(id);
              sessionStorage.setItem('menu',JSON.stringify(this.rights));
              this.getRights()
            }
          }
        })
    }

  }

  showItem(id:number){
    this.router.navigate(['workentry/system/right/show',id])
  }



}
