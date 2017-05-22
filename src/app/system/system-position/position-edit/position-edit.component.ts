import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { PositionServiceService } from '../service/position-service.service';

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
    private positionServiceService:PositionServiceService
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
      this.editDuty()
    }
  }

  addDuty(){
    let ss_duties = sessionStorage.getItem('duties');
    if(ss_duties){
      this.duties = JSON.parse(ss_duties)
    }
    let new_id = +this.duties[this.duties.length-1].id +1;
    let add_duty = {
      "id": new_id,
      "sn": this.duty.sn,
      "name": this.duty.name,
      "parent_id": this.duty.parent_id,
      "company_id": this.duty.company_id
    };
    this.duties.push(add_duty);
    sessionStorage.setItem('duties',JSON.stringify(this.duties));
    this.router.navigate(['/workentry/system/position']);
  }

  editDuty(){
    let edit_duty = {
      "id": this.editId,
      "sn": this.duty.sn,
      "name": this.duty.name,
      "parent_id": this.duty.parent_id,
      "company_id": this.duty.company_id
    };
    let ss_duties = sessionStorage.getItem('duties');
    this.duties = JSON.parse(ss_duties);

    let edit_index = this.duties.findIndex((value,index) => {
      return value.id == this.editId
    });

    this.duties.splice(edit_index,1,edit_duty);

    sessionStorage.setItem('duties',JSON.stringify(this.duties));
    this.router.navigate(['/workentry/system/position'])
  }
}
