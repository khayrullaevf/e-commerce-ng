import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }


 @HostBinding('style.backgroundColor') backgroundColor:string='#28282b';
 @HostBinding('style.border') border:string='none';
 @HostBinding('style.color') color:string='white';


 @HostListener('mouseenter') onMouseEnter(){
  this.backgroundColor='white'
  this.color='#28282b'
  this.border='#28282b 2px solid'

 }
 @HostListener('mouseout') onMouseOut(){
  this.backgroundColor='#28282b'
  this.color='white'
  this.border='none'

 }




}
