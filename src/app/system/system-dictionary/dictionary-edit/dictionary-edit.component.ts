import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from  '@angular/router';
import { SystemDictionaryService } from '../service/system-dictionary.service';

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
    this.systemDictionaryService.getWorkBooks()
      .then(res =>{
        if(res.errorCode == 0){
          this.workBooks = res.content;
          console.log(this.workBooks);
          let company_index = this.workBooks.findIndex((value,index)=>{
            return value.id == id;
          });
          console.log(company_index);
          this.work = this.workBooks[company_index];
          console.log(this.work);
        }
      });

  }

  submitForm(){
      if(this.isAdd){
        this.addDictionary()
      }else {
        this.editDictionary(this.editId)
      }
  }

  addDictionary(){
    let new_dictionary = {
      "sn": this.work.sn,
      "name": this.work.name,
      "value": this.work.value,
      "enabled": this.work.enabled,
      "parentId":this.work.parentId
    };
    this.systemDictionaryService.addWorkBooks(new_dictionary.sn,new_dictionary.name,
      new_dictionary.value,new_dictionary.enabled,new_dictionary.parentId)
      .subscribe(res => {
        console.log(res.json());
        this.router.navigate(['/workentry/system/dictionary']);
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

    this.systemDictionaryService.editWorkBooks(id,edit_dictionary.sn,edit_dictionary.name,
      edit_dictionary.value,edit_dictionary.enabled,edit_dictionary.parentId)
      .subscribe(res => {
        console.log(res.json());
        this.router.navigate(['/workentry/system/dictionary']);
      })

    }
}
