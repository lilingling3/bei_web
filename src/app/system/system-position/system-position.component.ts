import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PositionServiceService } from './service/position-service.service';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-system-position',
  templateUrl: './system-position.component.html',
  styleUrls: ['./system-position.component.css']
})
export class SystemPositionComponent implements OnInit {
  private duties;
  private duty;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private positionServiceService:PositionServiceService,
    private http:Http
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
    let indexduties = this.duties.findIndex(function (value, index) {
      return value.id == id;
    });


    this.duty = this.duties[indexduties];

    let headers = new Headers({'content-type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    if (confirm(`确定删除id为${id}吗`)) {
      const url = 'http://test2.cn/v1/duties/' + id;
      this.http.delete(url, options)
        .toPromise()
        .then(()=> {
          console.log('llll');
          this.duties = this.duties.filter(duty =>duty != this.duty);
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
