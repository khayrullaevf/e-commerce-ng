import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {



  searchText:string=''



@Output() searchTextChanged:EventEmitter<string>=new EventEmitter<string>()

updateSearchText(event:any){
this.searchText=event.target.value
// this.onSearchTextChanged.emit(this.searchText)
// console.log('hoi');

}
onSearchTextChanged(event:any){
  this.searchText=event.target.value
  this.searchTextChanged.emit(event.target.value)
   console.log(event.target.value);

}

}

