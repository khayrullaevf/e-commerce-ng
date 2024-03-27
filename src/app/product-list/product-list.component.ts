import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name:string='John Doe'
  addToCart: number = 0;
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

  onNameChange(event: any) {
    // console.log(event.target.value);
    // this.name=event.target.value
  }

  increment() {
    this.addToCart++;
  }
  decrement() {
    if (this.addToCart >0) {
      this.addToCart--;
    }
  }
}
