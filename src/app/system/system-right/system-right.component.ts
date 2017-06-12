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
  public rights;
  public right;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private rightServiceService:RightServiceService,
  ) { }

  ngOnInit() {
    this.getRights()
  }

  getRights(){
      this.rightServiceService.getRights()
        .then(res =>{
          console.log(res);
          this.rights = res.content;
          console.log(this.rights);
        })
  }

  showItem(id:number){
    sessionStorage.removeItem('dutyId');
    this.router.navigate(['workentry/system/right/show',id]);
    sessionStorage.setItem('dutyId',JSON.stringify(id));
  }

}
