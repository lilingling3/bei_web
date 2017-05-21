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
      return this.systemCompanyService.getCompanies()
        .then(res =>{
          if(res.errorCode == 0){
            this.companies = res.content;
            console.log(typeof this.companies);
            console.log(this.companies);
            sessionStorage.setItem('companies',JSON.stringify(this.companies));
          }
        })
    }

  }

  pageChanged(event:any):void{
    this.router.navigateByUrl("/workentry/systems/company/page/"+event.page);
  }

  // 删除
  public delItem(event){
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const id = nameAttr.nodeValue;
    console.log('itemId>' + id);
    let ss_companies = sessionStorage.getItem('companies');

    if(ss_companies){
      this.companies = JSON.parse(ss_companies);
      let indexCompany= this.companies.findIndex(function (value, index) {
        return value.id == id;
      });
      console.log(indexCompany);
      if(confirm(`确定删除id为${id}吗`)){
        this.companies.splice(indexCompany,1);
        sessionStorage.setItem('companies',JSON.stringify(this.companies));
        this.getCompanies()
      }
    }
  }

  goToEdit(){
    this.router.navigate(['workentry/systems/company/edit'])
  }

  update(id:number){
    this.router.navigate(['workentry/systems/company/edit',id])
  }

}
