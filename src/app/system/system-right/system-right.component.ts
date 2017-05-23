import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RightServiceService } from './service/right-service.service';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-system-right',
  templateUrl: './system-right.component.html',
  styleUrls: ['./system-right.component.css']
})
export class SystemRightComponent implements OnInit {
  private rights;
  private right;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private rightServiceService:RightServiceService,
    private http:Http
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

    let indexrights = this.rights.findIndex(function (value, index) {
      return value.id == id;
    });


    this.right = this.rights[indexrights];

    let headers = new Headers({'content-type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    if (confirm(`确定删除id为${id}吗`)) {
      const url = 'http://test2.cn/v1/dutymenu/' + id;
      this.http.delete(url, options)
        .toPromise()
        .then(()=> {
          console.log('llll');
          this.rights = this.rights.filter(right =>right != this.right);
        })
    }

  }

  showItem(id:number){
    this.router.navigate(['workentry/system/right/show',id])
  }



}
