import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { SystemDictionaryService } from '../service/system-dictionary.service';
import {constructDependencies} from "@angular/core/src/di/reflective_provider";
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
    private systemDictionaryService:SystemDictionaryService
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
        this.editDictionary()
      }
  }

  addDictionary(){
    let ss_workBooks = sessionStorage.getItem('workBooks');
    this.workBooks = JSON.parse(ss_workBooks);

    let dictionary_length = this.workBooks.length;
    console.log(dictionary_length);
    let new_id = +this.workBooks[dictionary_length-1].id + 1;
    console.log(new_id);
    let new_dictionary = {
      "id": new_id,
      "sn": this.work.sn,
      "name": this.work.name,
      "value": this.work.value,
      "enabled": this.work.enabled,
      "parentId":this.work.parentId
    };

    this.workBooks.push(new_dictionary);
    sessionStorage.setItem('workBooks',JSON.stringify(this.workBooks));
    this.router.navigate(['/workentry/systems/dictionary']);
  }

  editDictionary(){

    let edit_contact = {
      "id": this.editId,
      "sn": this.work.sn,
      "name": this.work.sn,
      "value": this.work.value,
      "enabled": this.work.enabled,
      "parentId":this.work.parentId,
    };

    let ss_workBooks = sessionStorage.getItem('workBooks');
    this.workBooks = JSON.parse(ss_workBooks);

     console.log(this.editId);
    let indexWorkBooks = this.workBooks.findIndex(function (value, index) {
      return value.id == edit_contact.id;
    });
     console.log('1111');
    console.log(indexWorkBooks);
    this.workBooks.splice(indexWorkBooks, 1, edit_contact);
    sessionStorage.setItem("workBooks",JSON.stringify(this.workBooks));
    this.router.navigate(['/workentry/systems/dictionary']);
  }
}
