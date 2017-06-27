import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.css']
})
export class UtilsComponent implements OnInit {
  isTrue:boolean = true;
  testArry = ['46','47'];
  isChecked = true;
  /**
   * 当前选中的时间
   */
  public date: any
  /**
   * jquery时间插件参数
   */
  private option: Object = {
    locale: {
      format: "YYYY-MM-DD",
      separator: " 至 ",
      applyLabel: "确定",
      cancelLabel: '取消',
      fromLabel: '起始时间',
      toLabel: '结束时间',
      customRangeLabel: '自定义',
      daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'],
      firstDay: 1
    },
  };
  boolValue:boolean = true;
  constructor() { }

  ngOnInit() {
    console.log(this.isTrue)
  }

   dateSelected(date) {
    this.date = date;
  }

  onChange(event){
    //console.log(event.target.value)
     this.isTrue = !this.isTrue;
     console.log(this.isTrue);
     this.isChecked = !this.isChecked
  }
  onSubmit(val){
    console.log(val.target.action)
  }

}
