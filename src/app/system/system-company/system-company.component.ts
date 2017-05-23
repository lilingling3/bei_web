import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SystemCompanyService } from './service/system-company.service';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-system-company',
  templateUrl: './system-company.component.html',
  styleUrls: ['./system-company.component.css']
})
export class SystemCompanyComponent implements OnInit {
  private companies;
  private URL_COMPANY = 'http://test2.cn/v1/companies';
  private headers = new Headers({
    'Content-Type':'application/x-www-form-urlencoded',
    // 'Accept': 'application/json'
  });
  private company;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private systemCompanyService:SystemCompanyService,
    private http:Http
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

      let headers = new Headers({ 'content-type':'application/x-www-form-urlencoded'});
      let options = new RequestOptions({ headers: headers });
      if(confirm(`确定删除id为${id}吗`)){
          const url = `${this.URL_COMPANY}/${id}`;
          this.http.delete(url,options)
            .toPromise()
            .then(()=>{
              console.log('llll');
              this.companies = this.companies.filter(company =>company!=this.company);
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
