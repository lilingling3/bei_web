import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { SystemCompanyService } from '../service/system-company.service';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  private isAdd:boolean;
  private title:string;
  private editId:number;
  private company:any ={};
  private companies:any ={};
  private headers = new Headers({
    'Content-Type':'application/json',
    'Accept': 'application/json'
  });
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private systemCompanyService:SystemCompanyService,
    private http:Http,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.editId = params['id'];
        this.isAdd = !this.editId;
        console.log(this.isAdd);
      });
    this.title = this.isAdd?'新增公司管理':'修改公司管理';

    if(!this.isAdd){
      this.getCompanyById(this.editId)
    }

  }

  getCompanyById(id:number){
    console.log(id);
      this.systemCompanyService.getCompanies()
        .then(res =>{
          if(res.errorCode == 0){
            this.companies = res.content;
            //sessionStorage.setItem('companies',JSON.stringify(this.companies));
            let company_index = this.companies.findIndex((value,index)=>{
              return value.id == id;
            });
            console.log(this.company);
            this.company = this.companies[company_index];
          }
        });
  }

  submitForm(){
    if(this.isAdd){
      console.log('增加');
      this.addCompany()
    }else {
      console.log('编辑');
      // this.editCompany(this.editId)
    }
  }

  getCompanies(){
    this.systemCompanyService.getCompanies()
      .then(res =>{
        if(res.errorCode == 0){
          this.companies = res.content;
          console.log(this.companies);
        }
      });
  }
  addCompany(){
    // post 请求 必须是这个
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    let new_company = {
      "name": this.company.name,
      "full_name": this.company.full_name,
      "type": this.company.type,
      "code": this.company.code,
      "contacts": this.company.contacts,
      "tel": this.company.tel,
      "postcode": this.company.postcode,
      "address": this.company.address
    };
    let body = "name=" + new_company.name+"&full_name="+new_company.full_name+
      "&type=" + new_company.type+"&code="+new_company.code+
      "&contacts=" + new_company.contacts+"&tel="+new_company.tel+
      "&postcode=" + new_company.postcode+"&address="+new_company.address;
    console.log(body);
    this.http.post('http://test2.cn/v1/companies',body,options)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/company']);
        },
        error => {
          console.log(error.text());
        })
  }

  editCompany(id:number){
    let edit_company = {
      "name": this.company.name,
      "full_name": this.company.full_name,
      "type": this.company.type,
      "code": this.company.code,
      "contacts": this.company.contacts,
      "tel": this.company.tel,
      "postcode": this.company.postcode,
      "address": this.company.address
    };

    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let body = "name=" + edit_company.name+"&full_name="+edit_company.full_name+
      "&type=" + edit_company.type+"&code="+edit_company.code+
      "&contacts=" + edit_company.contacts+"&tel="+edit_company.tel+
      "&postcode=" + edit_company.postcode+"&address="+edit_company.address;
    //let ss_companies = sessionStorage.getItem('companies');
    //this.companies = JSON.parse(ss_companies);

    let company_index = this.companies.findIndex((value,index)=>{
      return value.id == id;
    });
    this.http.put('http://test2.cn/v1/companies/'+id,body,options)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/company']);
        },
        error => {
          console.log(error.text());
        });
    this.getCompanies();
    this.router.navigate(['/workentry/system/company']);
  }
}
