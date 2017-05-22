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
  private companies;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private systemCompanyService:SystemCompanyService,
  ) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    let ss_companies = sessionStorage.getItem('companies');
    if(ss_companies){
      this.companies = JSON.parse(ss_companies);
    }else {
     this.systemCompanyService.getCompanies()
        .then(res =>{
          if(res.errorCode == 0){
            this.companies = res.content;
            sessionStorage.setItem('companies',JSON.stringify(this.companies));
          }
        })
    }

  }

  // pageChanged(event:any):void{
  //   this.router.navigateByUrl("/workentry/system/company/page/"+event.page);
  // }

  // 删除
  public delItem(id:number){
    let ss_companies = sessionStorage.getItem('companies');
    if(ss_companies){
      this.companies = JSON.parse(ss_companies);
      let indexCompany= this.companies.findIndex(function (value, index) {
        return value.id == id;
      });
      if(confirm(`确定删除id为${id}吗`)){
        this.systemCompanyService.delCompanies(id);
        this.companies.splice(indexCompany,1);
        sessionStorage.setItem('companies',JSON.stringify(this.companies));
        this.getCompanies();
      }
    }else {
      this.systemCompanyService.getCompanies()
        .then(res =>{
          if(res.errorCode == 0){
            this.companies = res.content;
            let indexCompany= this.companies.findIndex(function (value, index) {
              return value.id == id;
            });
            if(confirm(`确定删除id为${id}吗`)){
              this.systemCompanyService.delCompanies(id);
              this.companies.splice(indexCompany,1);
              sessionStorage.setItem('companies',JSON.stringify(this.companies));
              this.getCompanies();
            }
          }
        })
    }
  }

  goToEdit(){
    this.router.navigate(['workentry/system/company/edit'])
  }

  update(id:number){
    this.router.navigate(['workentry/system/company/edit',id])
  }

}
