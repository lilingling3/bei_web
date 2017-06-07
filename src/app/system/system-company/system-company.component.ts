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
  public companies;
  public company;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private systemCompanyService:SystemCompanyService,

  ) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    console.log('获取公司列表');
     this.systemCompanyService.getCompanies()
        .then(res =>{
          if(res.errorCode == 0){
            this.companies = res.content;
            console.log(this.companies);
          }
        });
  }

  // pageChanged(event:any):void{
  //   this.router.navigateByUrl("/workentry/system/company/page/"+event.page);
  // }

  // 删除
  public delItem(id:number){
      let indexCompany= this.companies.findIndex(function (value, index) {
        return value.id == id;
      });
      console.log(indexCompany);

      this.company = this.companies[indexCompany];

      if(confirm(`确定删除id为${id}吗`)){
        this.systemCompanyService.delCompanies(id)
          .subscribe(res =>{
            console.log(res.json());
            this.companies.splice(indexCompany,1);
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
