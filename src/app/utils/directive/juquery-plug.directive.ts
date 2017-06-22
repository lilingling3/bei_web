// import { Directive, Output, Input, ElementRef, EventEmitter } from '@angular/core';

// // 引入jquery.daterangepicker插件相关JS和css,Css打包时需要打包成单个文件，或者直接在html单独引用

// require('../../../assets/lib/daterangepicker.js');
// require('../../../assets/lib/daterangepicker.css');
// // 自定义指令
// @Directive({
//   selector: '[dateRangePicker]',
// })

// export class DateRangePicker {
//   /**
//    * jquery.daterangepicker插件所需的参数
//    * 参数:http://www.daterangepicker.com/#options
//    */
//   @Input() public dateRangePickerOptions: IJQueryDateRangePicker;

//   // 选中事件
//   @Output() selected: any = new EventEmitter();

//   /**
//    * 初始化
//    * @param _elementRef
//    */
//   constructor(private _elementRef: ElementRef) {
//   }

//   /**
//    * 属性发生更改时
//    * @private
//    */
//   ngOnChanges() {
//     $(this._elementRef.nativeElement).daterangepicker(this.dateRangePickerOptions, this.dateCallback.bind(this));
//   }

//   /**
//    * 时间发生更改时使用emit传递事件
//    * @private
//    */
//   dateCallback(start, end) {
//     let format = "YYYY-MM-DD";
//     if (this.dateRangePickerOptions.locale.format) {
//       format = this.dateRangePickerOptions.locale.format;
//     }
//     let date = {
//       startDate: start.format(format),
//       endDate: end.format(format),
//     }

//     this.selected.emit(date);
//   }

// }