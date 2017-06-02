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
      console.log(this.showId);
      this.getDutyMenuById(this.showId);
      console.log('kkkkk');
    });

    console.log(this.right);

    // if(!!this.right){
    //   this.roles = this.right.duty_menu;
    //
    //   console.log(this.roles);
    //
    //   this.roles? this.hidden = false:this.hidden = true;
    //   console.log(this.hidden);
    // }

  }

  getDutyMenuById(id:number){
    console.log(id);
      this.rightServiceService.getRights()
        .then(res =>{
          if(res.errorCode == 0){
            this.rights = res.content;

            console.log(this.rights);

            this.right = this.rights.find((value,index) =>{
              return value.id == id;
            });

            console.log(this.right);

              this.roles = this.right.duty_menu;

              console.log(this.roles);

              this.roles? this.hidden = false:this.hidden = true;
              console.log(this.hidden);
          }
        })
  }

  goBack(){
    this.location.back()
  }

}
