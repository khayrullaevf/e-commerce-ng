import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {



  searchText:string=''



@Output() searchTextChanged:EventEmitter<string>=new EventEmitter<string>()

updateSearchText(event:HTMLInputElement){
this.searchText=event.value
this.searchTextChanged.emit(event.value)

}


}

