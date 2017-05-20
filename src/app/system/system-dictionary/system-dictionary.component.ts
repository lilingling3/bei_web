import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SystemService } from '../service/system.service';

@Component({
  selector: 'system-dictionary',
  templateUrl: './system-dictionary.component.html',
  styleUrls: ['./system-dictionary.component.css']
})
export class SystemDictionaryComponent implements OnInit {
  private workBookList;
  public maxSize:number = 5;// 最大数量
  public itemsPerPage:number=10;// 显示数量
  public totalItems:number;// 总页数
  public currentPage:number = 1;// 当前页数
  public numPages;
  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute,
    private systemService:SystemService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params =>{
        console.log(params);
        this.getWorkBookList(this.currentPage);
      })
  }
  // 获取
  public getWorkBookList(page:number) {
    this.systemService.getWorkBooks(page)
      .subscribe(
        res => {
          var data = res.json();
          console.log(data);
          if(data.errorCode == 0){
            let offset = (this.currentPage -1 )*this.itemsPerPage;
            let end = this.currentPage*this.itemsPerPage;
            console.log(offset);
            console.log(end);
            this.totalItems = 48;
            this.workBookList = data.content.slice(offset,end>this.totalItems?this.totalItems:end);
            console.log(this.workBookList);
          }
        }
      )
  }

  public pageChanged(event:any):void {
    this.router.navigateByUrl("/workentry/systems/dictionary/page/"+event.page);
  }
 // 修改
  public editItem(event){
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const id = nameAttr.nodeValue;
    console.log('itemId>' + id);
    const workBookArray = this.workBookList;
    var editObj = workBookArray.find(function (value, index) {
      return value.id = id;
    });

    console.log(editObj);

    $('#editSn').val(editObj.sn);
    $('#editName').val(editObj.name);
    $('#editValue').val(editObj.value);
    $('#editEnabled').val(editObj.enabled);
    $('#editParentId').val(editObj.parentId);
    $('#saveBtn').attr('data-id',id);

  }
  // 删除
  public delItem(event){
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const id = nameAttr.nodeValue;
    console.log('itemId>' + id);
    const workBookArray = this.workBookList;
    //console.log(data);
    const index = workBookArray.findIndex(function (value, index) {
      //console.log(value);
      return value.id=id;//如果为true当前的index就是findIndex()的返回值
    });
    console.log(index);
    if(confirm(`确定删除id为${id}吗`)){
      workBookArray.splice(index,1);
      this.systemService.delWorkBooks(id);
    }
}
  // 新建
  public newItem(){
    const sn = $('#newSn').val();
    const name = $('#newName').val();
    const value = $('#newValue').val();
    const enabled = $('#newenabled').val();
    const parentId = $('#newParentId').val();
    const newobj = {
      "id":1,
      "sn": sn,
      "name": name,
      "value": value,
      "enabled": enabled,
      "parentId": parentId
    };
    console.log(newobj);
    this.workBookList.unshift(newobj);
    $('#newSn').val('');
    $('#newName').val('');
    $('#newValue').val('');
    $('#newenabled').val('');
    $('#newParentId').val('');
    this.systemService.newWorkBooks(sn,name,value,enabled,parentId);

  }
  // 保存修改
  public editSave(){
    // 获取新值
    const id = $('#saveBtn').attr('data-id');
    const sn = $('#editSn').val();
    const name = $('#editName').val();
    const value = $('#editValue').val();
    const enabled = $('#editEnabled').val();
    const parentId = $('#editParentId').val();

    console.log('修改了');
    // 发请求 保存数据库
    this.systemService.correctWorkBooks(id,sn,name,value,enabled,parentId);

    // 修改前端列表
    const workBookArray = this.workBookList;
    const index = workBookArray.findIndex(function (value, index) {
      //console.log(value);
      return value.id=id;//如果为true当前的index就是findIndex()的返回值
    });
    const editNewObj = {
      id:id,
      sn:sn,
      name:name,
      value:value,
      enabled:enabled,
      parentId:parentId
    };
    workBookArray.splice(index,1,editNewObj);
  }
}
