import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { PositionServiceService } from '../service/position-service.service';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.css']
})
export class PositionEditComponent implements OnInit {
  private isAdd:boolean;
  private title:string;
  private editId:number;
  private duty:any ={};
  private duties:any ={};
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private positionServiceService:PositionServiceService,
    private http:Http
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.editId = params['id'];
      this.isAdd = !this.editId;

    });
    this.title = this.isAdd?'新建职位管理':'修改职位管理';
    if(!this.isAdd){
      this.getDutyById(this.editId)
    }
  }

  getDutyById(id:number){
    let ss_duties = sessionStorage.getItem('duties');
    if(ss_duties){
      this.duties = JSON.parse(ss_duties);
      this.duty = this.duties.find((value,index)=>{
        return value.id == id;
      })
    }else {
      this.positionServiceService.getDuties()
        .then(res =>{
          if(res.errorCode == 0){
            this.duties = res.content;
            sessionStorage.setItem('duties',JSON.stringify(this.duties));
            this.duty = this.duties.find((value,index) =>{
               return value.id == id;
            })
          }
        })
    }
  }

  submitForm(){
    if(this.isAdd){
      this.addDuty()
    }else {
      this.editDuty(this.editId)
    }
  }

  addDuty(){
    let add_duty = {
      "sn": this.duty.sn,
      "name": this.duty.name,
      "parent_id": this.duty.parent_id,
      "company_id": this.duty.company_id
    };

    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let body = "sn=" + add_duty.sn+"&name="+add_duty.name+
      "&parent_id=" + add_duty.parent_id+"&company_id="+add_duty.company_id;
    this.http.post('http://test2.cn/v1/duties/',body,options)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/position']);
        },
        error => {
          console.log(error.text());
        });
  }


  editDuty(id:number){
    let edit_duty = {
      "sn": this.duty.sn,
      "name": this.duty.name,
      "parent_id": this.duty.parent_id,
      "company_id": this.duty.company_id
    };

    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let body = "sn=" + edit_duty.sn+"&name="+edit_duty.name+
      "&parent_id=" + edit_duty.parent_id+"&company_id="+edit_duty.company_id;
    this.http.put('http://test2.cn/v1/duties/',body,options)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/position']);
        },
        error => {
          console.log(error.text());
        });
  }
}
