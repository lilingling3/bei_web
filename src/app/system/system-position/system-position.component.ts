import { Component, OnInit , ElementRef} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PositionServiceService } from './service/position-service.service';

import 'ztree';
declare var $: any;

@Component({
  selector: 'app-system-position',
  templateUrl: './system-position.component.html',
  styleUrls: ['./system-position.component.css']
})
export class SystemPositionComponent implements OnInit {
  private duties;
  private duty;
  private setting = {
    data: {
      simpleData: {
        enable: true
      }
    }
  };


  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private positionServiceService:PositionServiceService,
    public el: ElementRef
  ) { }

  ngOnInit() {
    this.getAllDuties();
  }

  getAllDuties(){
      return this.positionServiceService.getDuties()
        .then(res =>{
            console.log(res);
            this.duties = res.content;
          //   console.log('kkkkkk');
          //   this.duties = res;
          // $.fn.zTree.init($("#ztree"),this.setting,this.duties);
        })
  }

  pageChanged(event:any):void{
    this.router.navigateByUrl("/workentry/system/position/page/"+event.page);
  }

  // 删除
  public delItem(id:number){
    let indexDuty = this.duties.findIndex(function (value, index) {
      return value.id == id;
    });

    this.duty = this.duties[indexDuty];

    if(confirm(`确定删除id为${id}吗`)){
      this.positionServiceService.delDuties(id)
        .subscribe(res =>{
          console.log(res.json());
          this.duties.splice(indexDuty,1);
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
