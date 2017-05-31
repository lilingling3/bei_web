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
  private hidden:boolean;
  private title:string;
  private showId:number;
  private rights:any ={};
  private right:any ={};
  private roles:any;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private rightServiceService:RightServiceService,
    private location:Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parmas =>{
      this.showId = parmas['id'];
      this.getDutyMenuById(this.showId)
    });

    if(this.right.duty_menu){
      this.hidden = false
    }else {
      this.hidden = true
    }
    console.log(this.hidden);
    this.roles = this.right.duty_menu;
    console.log(this.roles);
  }

  getDutyMenuById(id:number){
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

  goBack(){
    this.location.back()
  }
}
