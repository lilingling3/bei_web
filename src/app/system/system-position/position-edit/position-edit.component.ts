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
  public isAdd:boolean;
  public title:string;
  public editId:number;
  public duty:any ={};
  public duties:any ={};
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
    this.positionServiceService.getDuties()
      .then(res =>{
        if(res.errorCode == 0){
          this.duties = res.content;
          this.duty = this.duties.find((value,index) =>{
            return value.id == id;
          })
        }})

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
      "sn": parseInt(this.duty.sn),
      "name": this.duty.name,
      "parent_id": parseInt(this.duty.parent_id),
      "company_id": parseInt(this.duty.company_id)
    };

    console.log(add_duty);
    this.positionServiceService.addDuties(add_duty.sn,add_duty.name,add_duty.parent_id,add_duty.company_id)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/position'])
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

    this.positionServiceService.editDuties(id,edit_duty.sn,edit_duty.name,edit_duty.parent_id,edit_duty.company_id)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/position'])
        },
        error => {
          console.log(error.text());
        });
  }
}
