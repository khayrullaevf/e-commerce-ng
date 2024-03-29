import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  searchText:string=''


   setSearchText(value:any){
   this.searchText=value
  }


  @ViewChild(ProductListComponent) productListComponent:ProductListComponent


}
