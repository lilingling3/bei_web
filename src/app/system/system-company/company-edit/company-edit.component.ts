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
    let ss_companies = sessionStorage.getItem('companies');
    if(ss_companies){
      this.companies = JSON.parse(ss_companies);
      let company_index = this.companies.findIndex((value,index)=>{
        return value.id == id;
      });
      this.company = this.companies[company_index];
    }else {
      this.systemCompanyService.getCompanies()
        .then(res =>{
          if(res.errorCode == 0){
            this.companies = res.content;
            sessionStorage.setItem('companies',JSON.stringify(this.companies));
            let company_index = this.companies.findIndex((value,index)=>{
              return value.id == id;
            });
            this.company = this.companies[company_index];
          }
        })
    }
  }

  submitForm(){
    if(this.isAdd){
      this.addCompany()
    }else {
      this.editCompany(this.editId)
    }
  }

  addCompany(){
    console.log('111');
    let ss_companies = sessionStorage.getItem('companies');
    this.companies = JSON.parse(ss_companies);
    let company_length = this.companies.length;
    console.log(company_length);

    let new_id = +this.companies[company_length-1].id +1;
    console.log(new_id);
    let new_company = {
      "name": this.company.name,
      "full_name": this.company.full_name,
      "type": this.company.type,
      "contacts": this.company.contacts,
      "tel": this.company.tel,
      "postcode": this.company.postcode,
      "address": this.company.address
    };

    this.companies.push(new_company);
    this.systemCompanyService.addCompanies(new_company);
    console.log(this.companies);
    sessionStorage.setItem('companies',JSON.stringify(this.companies));
    this.router.navigate(['/workentry/system/company']);
  }

  editCompany(id:number){
    let edit_company = {
      // "id": this.editId,
      "name": this.company.name,
      "full_name": this.company.full_name,
      "type": this.company.type,
      "contacts": this.company.contacts,
      "tel": this.company.tel,
      "postcode": this.company.postcode,
      "address": this.company.address
    };

    let ss_companies = sessionStorage.getItem('companies');
    this.companies = JSON.parse(ss_companies);

    let company_index = this.companies.findIndex((value,index)=>{
      return value.id == id;
    });

    this.companies.splice(company_index,1,edit_company);
    this.systemCompanyService.editCompanies(id,edit_company);
    sessionStorage.setItem('companies', JSON.stringify(this.companies));
    this.router.navigate(['/workentry/system/company']);
  }



}
