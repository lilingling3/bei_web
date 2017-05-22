import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PositionServiceService } from './service/position-service.service';

@Component({
  selector: 'app-system-position',
  templateUrl: './system-position.component.html',
  styleUrls: ['./system-position.component.css']
})
export class SystemPositionComponent implements OnInit {
  private duties;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private positionServiceService:PositionServiceService,
  ) { }

  ngOnInit() {
    this.getAllDuties();
  }

  getAllDuties(){
    let ss_duties = sessionStorage.getItem('duties');
    if(ss_duties){
      this.duties = JSON.parse(ss_duties);
    }else {
      return this.positionServiceService.getDuties()
        .then(res =>{
          if(res.errorCode == 0){
            this.duties = res.content;
            sessionStorage.setItem('duties',JSON.stringify(this.duties));
          }
        })
    }

  }

  pageChanged(event:any):void{
    this.router.navigateByUrl("/workentry/system/position/page/"+event.page);
  }

  // 删除
  public delItem(id:number){
    let ss_duties = sessionStorage.getItem('duties');
    if(ss_duties){
      this.duties = JSON.parse(ss_duties);
      let indexDuty= this.duties.findIndex(function (value, index) {
        return value.id == id;
      });
      if(confirm(`确定删除id为${id}吗`)){
        this.duties.splice(indexDuty,1);
        sessionStorage.setItem('duties',JSON.stringify(this.duties));
        this.getAllDuties()
      }
    }else {
      this.positionServiceService.getDuties()
        .then(res =>{
          if(res.errorCode == 0){
            this.duties = res.content;
            sessionStorage.setItem('duties',JSON.stringify(this.duties));
            let indexDuty= this.duties.findIndex(function (value, index) {
              return value.id == id;
            });
            if(confirm(`确定删除id为${id}吗`)){
              this.duties.splice(indexDuty,1);
              sessionStorage.setItem('duties',JSON.stringify(this.duties));
              this.getAllDuties()
            }
          }
        })
    }
  }

  goToEdit(){
    this.router.navigate(['workentry/system/position/edit'])
  }

  update(id:number){
    this.router.navigate(['workentry/system/position/edit',id])
  }

}
