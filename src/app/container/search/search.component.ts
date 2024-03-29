import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {



  searchText:string=''



@Output() searchTextChanged:EventEmitter<string>=new EventEmitter<string>()

@ViewChild('searchInputEl') searchInputEl:ElementRef

updateSearchText(){
this.searchText=this.searchInputEl.nativeElement.value
this.searchTextChanged.emit(this.searchText)

}


}

