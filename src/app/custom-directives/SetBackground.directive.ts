import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector:'[setBackground]'
})
export class SetBackground implements OnInit{
  // private element:ElementRef
  // private renderer:Renderer2
  // @Input('setBackground') backColor:string=''
  // @Input() textColor:string=''

  @Input('setBackground') changeTextAndBackColor:{backColor:string,textColor:string}


  constructor(private element:ElementRef, private renderer:Renderer2){
    // this.element=ElementRef
    // this.renderer=renderer
  }

  ngOnInit(){
    // this.element.nativeElement.style.backgroundColor='#36454F'
    // this.element.nativeElement.style.color='white'
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor', this.changeTextAndBackColor.backColor)
    this.renderer.setStyle(this.element.nativeElement,'color', this.changeTextAndBackColor.textColor)
    // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is title')
  }

}
