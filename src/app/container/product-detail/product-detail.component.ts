import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() productListComp:ProductListComponent=undefined
  product:Product



  ngOnInit() {
    this.product=this.productListComp.selectedProduct
  }

  onClose(){
    console.log(this.product);

  }

}
