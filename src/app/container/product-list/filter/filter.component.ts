import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

 @Input() all:number;
 @Input() inStock:number;
 @Input() outOfStock:number
 @Input() men:number
 @Input() women:number
 @Input() discount:number


 @Output() seletedFilterRadioButtonChanged:EventEmitter<string>=new EventEmitter<string>()

 seletedFilterRadioButton:string='All'

 onSeletedFilterRadioButtonChanged(event:any){
  // this.seletedFilterRadioButtonChanged.emit(this.seletedFilterRadioButton)
  this.seletedFilterRadioButtonChanged.emit(event.target.value)
  // console.log(event.target.value);
  // console.log(this.seletedFilterRadioButton+' button');

 }

}
