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
    private systemService:SystemDictionaryService,
    private location:Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params =>{
        console.log(params);
        this.getWorkBookList(this.currentPage);
      })
  }

  //获取  分页
  public getWorkBookList(page:number) {
    // 使用session 模拟操作
    let ss_workBooks = sessionStorage.getItem('workBooks');
    if(!ss_workBooks){
      this.systemService.getWorkBooks(page)
        .subscribe(
          res => {
            var data = res.json();
            this.workBooks = data.content;
            sessionStorage.setItem('workBooks',JSON.stringify(this.workBooks));
            if(data.errorCode == 0){
              let offset = (this.currentPage -1 )*this.itemsPerPage;
              let end = this.currentPage*this.itemsPerPage;
              // console.log(offset);
              // console.log(end);
              // 后台指定
              this.totalItems = this.workBooks.length;
              console.log(this.totalItems);
              this.workBookList =  this.workBooks.slice(offset,end>this.totalItems?this.totalItems:end);
              //console.log('this workBookList');
              //console.log(this.workBookList);
            }
          }
        )
    }else {
        let ss_workBooks = sessionStorage.getItem('workBooks');
        this.workBooks = JSON.parse(ss_workBooks);
        let offset = (this.currentPage -1 )*this.itemsPerPage;
        let end = this.currentPage*this.itemsPerPage;
        //console.log(offset);
        //console.log(end);
        this.totalItems = this.workBooks.length;
        this.workBookList = this.workBooks.slice(offset,end>this.totalItems?this.totalItems:end);
    }
  }


  public pageChanged(event:any):void {
    this.router.navigateByUrl("/workentry/systems/dictionary/page/"+event.page);
  }
  // 删除
  public delItem(event){
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const id = nameAttr.nodeValue;
    console.log('itemId>' + id);
    let ss_workBooks = sessionStorage.getItem('workBooks');

    if(ss_workBooks){
      this.workBooks = JSON.parse(ss_workBooks);
      let indexWorkBooks = this.workBooks.findIndex(function (value, index) {
        return value.id == id;
      });
      // let indexWorkBookList = this.workBookList.findIndex(function (value, index) {
      //   return value.id == id;
      // });

      console.log(indexWorkBooks);
      //console.log(indexWorkBookList);
      //console.log(this.workBooks);
      if(confirm(`确定删除id为${id}吗`)){
        this.workBooks.splice(indexWorkBooks,1);
        //this.workBookList.splice(indexWorkBookList,1);
        //console.log(this.workBookList);
        // 发送请求
        //this.systemService.delWorkBooks(id);
        // 保存session
        //console.log('删除后');
        //console.log(this.workBooks);
        sessionStorage.setItem('workBooks',JSON.stringify(this.workBooks));
        this.getWorkBookList(this.currentPage)
      }
    }
}

  goToEdit(){
    this.router.navigate(['workentry/systems/dictionary/edit'])
  }

  update(id:number){
    this.router.navigate(['workentry/systems/dictionary/edit',id])
  }


}


