/*
 * Directive: 指令模块
 * ElementRef: 获取节点
 * Input: 获取输入内容
 * Renderer: 渲染新节点
 * HostListener: 这是监听事件的, 绑定时间
 *
 * 注意:
 * 1. 指令的名称要使用中括号括起来
 * 2. html中使用的时候, 不需要中括号
 * 3. 构造模板中传递参数的时候, 如果是字符串, 那么要单引号: [myHighlight]="'blue'"
 */
import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';
@Directive({
  selector: '[myHighlight]'
})

export class OneDirective {
  constructor(private el:ElementRef, private renderer:Renderer) {

  }
   // 响应用户操作
  // 给myHighlight指令定义一个输入变量(外部调取这个指令传递的参数)
  @Input("myHighlight") chColor: string;

  @HostListener("click") onClick() {
    // 调用函数, 传递指令外部获取的颜色
    this.changeColor(this.chColor);
  }
  // 自定义函数
  public changeColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, "background-color", color);
  }
}