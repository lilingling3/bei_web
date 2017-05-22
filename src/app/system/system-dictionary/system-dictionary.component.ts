import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SystemDictionaryService } from './service/system-dictionary.service';

@Component({
  selector: 'system-dictionary',
  templateUrl: './system-dictionary.component.html',
  styleUrls: ['./system-dictionary.component.css']
})
export class SystemDictionaryComponent implements OnInit{
  private workBookList;
  public maxSize:number = 5;// 最大数量
  public itemsPerPage:number=8;// 显示数量
  public totalItems:number;// 总页数
  public currentPage:number = 1;// 当前页数
  public numPages;
  public workBooks;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private systemDictionaryService:SystemDictionaryService,
    private location:Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params =>{
        console.log(params);
        this.getWorkBookList();
      })
  }

  // 模拟分页 获取  分页
  // public getWorkBookList(page:number) {
  //   // 使用session 模拟操作
  //   let ss_workBooks = sessionStorage.getItem('workBooks');
  //   if(!ss_workBooks){
  //     this.systemService.getWorkBooks(page)
  //       .subscribe(
  //         res => {
  //           var data = res.json();
  //           this.workBooks = data.content;
  //           sessionStorage.setItem('workBooks',JSON.stringify(this.workBooks));
  //           if(data.errorCode == 0){
  //             let offset = (this.currentPage -1 )*this.itemsPerPage;
  //             let end = this.currentPage*this.itemsPerPage;
  //             // console.log(offset);
  //             // console.log(end);
  //             // 后台指定
  //             this.totalItems = this.workBooks.length;
  //             console.log(this.totalItems);
  //             this.workBookList =  this.workBooks.slice(offset,end>this.totalItems?this.totalItems:end);
  //             //console.log('this workBookList');
  //             //console.log(this.workBookList);
  //           }
  //         }
  //       )
  //   }else {
  //       let ss_workBooks = sessionStorage.getItem('workBooks');
  //       this.workBooks = JSON.parse(ss_workBooks);
  //       let offset = (this.currentPage -1 )*this.itemsPerPage;
  //       let end = this.currentPage*this.itemsPerPage;
  //       //console.log(offset);
  //       //console.log(end);
  //       this.totalItems = this.workBooks.length;
  //       this.workBookList = this.workBooks.slice(offset,end>this.totalItems?this.totalItems:end);
  //   }
  // }

public getWorkBookList() {
    // 使用session 模拟操作
    let ss_workBooks = sessionStorage.getItem('workBooks');
    if(!ss_workBooks){
      this.systemDictionaryService.getWorkBooks()
        .subscribe(
          res => {
            var data = res.json();
            if(data.errorCode == 0){
              this.workBooks = data.content;
              sessionStorage.setItem('workBooks',JSON.stringify(this.workBooks));
            }
          }
        )
    }else {
        let ss_workBooks = sessionStorage.getItem('workBooks');
        this.workBooks = JSON.parse(ss_workBooks);
    }
  }

  // public pageChanged(event:any):void {
  //   this.router.navigateByUrl("/workentry/system/dictionary/page/"+event.page);
  // }

  // 删除
  public delItem(id:number){
    let ss_workBooks = sessionStorage.getItem('workBooks');
    if(ss_workBooks){
      this.workBooks = JSON.parse(ss_workBooks);
      let indexWorkBooks = this.workBooks.findIndex(function (value, index) {
        return value.id == id;
      });
      if(confirm(`确定删除id为${id}吗`)){
        this.workBooks.splice(indexWorkBooks,1);
        this.systemDictionaryService.delWorkBooks(id);
        sessionStorage.setItem('workBooks',JSON.stringify(this.workBooks));
        this.getWorkBookList();
      }
    }else {
      this.systemDictionaryService.getWorkBooks()
        .subscribe(
          res => {
            var data = res.json();
            if(data.errorCode == 0){
              this.workBooks = data.content;
              let indexWorkBooks = this.workBooks.findIndex(function (value, index) {
                return value.id == id;
              });
              if(confirm(`确定删除id为${id}吗`)){
                this.workBooks.splice(indexWorkBooks,1);
                this.systemDictionaryService.delWorkBooks(id);
                sessionStorage.setItem('workBooks',JSON.stringify(this.workBooks));
                this.getWorkBookList();
              }
            }
          }
        )
    }
}

  goToEdit(){
    this.router.navigate(['workentry/system/dictionary/edit'])
  }

  update(id:number){
    this.router.navigate(['workentry/system/dictionary/edit',id])
  }


}


