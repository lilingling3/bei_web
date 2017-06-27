import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilsComponent } from './utils.component';

import {OneDirective } from './directive/beauty.directive';
import {BeautyDirective } from './directive/color.directive';
import {BeautyInputDirective } from './directive/input.directive';
import {MyUnlessDirective } from './directive/unClass.directive';
import {BooleanPipe } from './pipe/boolean-pipe';
// import {DateRangePicker } from './directive/juquery-plug.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  // 组件 指定 管道
  declarations: [
    UtilsComponent,
    OneDirective,
    BeautyDirective,
    BeautyInputDirective,
    MyUnlessDirective,
    BooleanPipe
    // DateRangePicker
  ]
})
export class UtilsModule { }