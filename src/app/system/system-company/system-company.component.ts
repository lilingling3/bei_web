import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SystemCompanyService } from './service/system-company.service';

@Component({
  selector: 'app-system-company',
  templateUrl: './system-company.component.html',
  styleUrls: ['./system-company.component.css']
})
export class SystemCompanyComponent implements OnInit {
  private companies:any = {};
  constructor(
    private systemCompanyService:SystemCompanyService,
  ) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    return this.systemCompanyService.getCompanies()
      .then(res =>{
        console.log(res);
      })
  }
}
