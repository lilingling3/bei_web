import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
@Directive({
  selector:'[myUnless]'
})
export class MyUnlessDirective{
  @Input('myUnless')
  set condition(newCondition:boolean){
    if(!newCondition){
      this.viewContainer.createEmbeddedView(this.templateRef);
      // console.log(newCondition);
      // console.log(this.templateRef)
    }else {
      this.viewContainer.clear();
      // console.log("clear");
      // console.log(this.viewContainer)
    }
  }
  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ){}

}