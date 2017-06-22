import {Directive, ElementRef,Input} from "@angular/core";
@Directive({
  selector:'[beauty]'
})
export class BeautyDirective{
  constructor(el:ElementRef){
    el.nativeElement.style.backgroundColor='green';
  }
}


