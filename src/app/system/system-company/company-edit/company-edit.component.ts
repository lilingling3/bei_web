import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { SystemCompanyService } from '../service/system-company.service';
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
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private systemCompanyService:SystemCompanyService
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
            console.log(this.companies);
            let company_index = this.companies.findIndex((value,index)=>{
              return value.id == id;
            });
            console.log(company_index);
            this.company = this.companies[company_index];
            console.log(this.company);
          }
        });
  }

  submitForm(){
    if(this.isAdd){
      console.log('增加');
      this.addCompany()
    }else {
      console.log('编辑');
      this.editCompany(this.editId)
    }
  }

  addCompany(){
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
    this.systemCompanyService.addCompanies(new_company.name,new_company.full_name,new_company.type,
      new_company.code,new_company.contacts,new_company.tel,new_company.postcode,new_company.address)
      .subscribe(res => {
        console.log(res.json());
        this.router.navigate(['/workentry/system/company']);
      })
  }

  editCompany(id:number){
    console.log('111');
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
    let company_index = this.companies.findIndex((value,index)=>{
      return value.id == id;
    });
    console.log('222');
    this.systemCompanyService.editCompanies(id,edit_company.name,edit_company.full_name,edit_company.type,
      edit_company.code,edit_company.contacts, edit_company.tel,edit_company.postcode,edit_company.address)
      .subscribe(res =>{
        console.log(res);
        this.router.navigate(['/workentry/system/company']);
      })
  }
}
