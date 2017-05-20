declare let $:any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.css']
})
export class UsersHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //  时间控件
    $(function () {
      chooseDate('#startTime','#endTime');
      function chooseDate(startItem,endStart){
        $(startItem).datepicker({
          format: 'yyyy-mm-dd',
          language: 'zh-CN',
          weekStart: 1,
          autoclose: true,
          orientation:'auto',
          todayBtn:'linked'
        }).on('changeDate',function(e){
          var startTime = e.date;
          $(endStart).datepicker('setStartDate',startTime);
        });

        $(endStart).datepicker({
          format: 'yyyy-mm-dd',
          language:'zh-CN',
          todayBtn: 'linked',
          todayHighlight:true, //高亮‘今天’
          autoclose:true,   //点击后关闭时间面板
          endDate : new Date()
        }).on('changeDate',function(e){
          var endTime = e.date;
          $(startItem).datepicker('setEndDate',endTime);
        });


      }
    });
  }

}
