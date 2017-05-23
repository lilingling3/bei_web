import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { SystemDictionaryService } from '../service/system-dictionary.service';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-dictionary-edit',
  templateUrl: './dictionary-edit.component.html',
  styleUrls: ['./dictionary-edit.component.css']
})
export class DictionaryEditComponent implements OnInit {

  private isAdd:boolean;
  private title:string;
  private editId:number;
  private work:any = {};
  private workBooks:any = {};

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private systemDictionaryService:SystemDictionaryService,
    private http:Http,
  ) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe(params =>{
       this.editId = params['id'];
       this.isAdd = !this.editId;
     });

    this.title = this.isAdd?'新增':'修改';

    if(!this.isAdd){
      this.getWorkBookById(this.editId)
    }

  }

  getWorkBookById(id:number){
    let ss_workBooks = sessionStorage.getItem('workBooks');

    if(ss_workBooks){
      this.workBooks = JSON.parse(ss_workBooks);
      let indexWorkBooks = this.workBooks.findIndex(function (value, index) {
        return value.id == id;
      });
      this.work = this.workBooks[indexWorkBooks];
    }
  }

  submitForm(){
      if(this.isAdd){
        this.addDictionary()
      }else {
        this.editDictionary(this.editId)
      }
  }

  addDictionary(){
    // post 请求 必须是这个
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    let new_dictionary = {
      "sn": this.work.sn,
      "name": this.work.name,
      "value": this.work.value,
      "enabled": this.work.enabled,
      "parentId":this.work.parentId
    };

    let body = "sn=" + new_dictionary.sn+"&name="+new_dictionary.name+
      "&value=" + new_dictionary.value+"&enabled="+new_dictionary.enabled;

    console.log(body);
    this.http.post('http://test2.cn/v1/wordbooks',body,options)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/dictionary']);
        },
        error => {
          console.log(error.text());
        })
  }

  editDictionary(id:number){

    let edit_dictionary = {
      "sn": this.work.sn,
      "name": this.work.sn,
      "value": this.work.value,
      "enabled": this.work.enabled,
      "parentId":this.work.parentId,
    };

    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });


    let body = "sn=" + edit_dictionary.sn+"&name="+edit_dictionary.name+
      "&value=" + edit_dictionary.value+"&enabled="+edit_dictionary.enabled;

    let indexWorkBooks = this.workBooks.findIndex(function (value, index) {
      return value.id == id;
    });
    this.http.put('http://test2.cn/v1/wordbooks/'+id,body,options)
      .subscribe(
        res => {
          console.log(res.json());
          this.router.navigate(['/workentry/system/company']);
        },
        error => {
          console.log(error.text());
        });

    }
}
