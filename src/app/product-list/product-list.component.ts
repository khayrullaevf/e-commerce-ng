import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  name:string='John Doe'
  product = {
    name: 'Iphone 14',
    price: 999,
    color: 'Red',
    discount: 8.5,
    inStock: 0,
    image: '/assets/images/iphone.jpg',
  };
  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
}
