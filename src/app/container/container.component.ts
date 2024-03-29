import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  // name:string='John Doe'


  listOfnames:string[]=[
    'Mark',
    'Paul',
    'Frank'
  ]



  searchText:string=''
   setSearchText(value:any){
   console.log(value+'  Container');
   this.searchText=value
  }





  // addToCart: number = 0;
  // product = {
  //   name: 'Iphone 14',
  //   price: 999,
  //   color: 'Red',
  //   discount: 8.5,
  //   inStock: 0,
  //   image: '/assets/images/iphone.jpg',
  // };
  // getDiscountedPrice() {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }

  // onNameChange(event: any) {
  //   // console.log(event.target.value);
  //   // this.name=event.target.value
  // }

  // increment() {
  //   this.addToCart++;
  // }
  // decrement() {
  //   if (this.addToCart >0) {
  //     this.addToCart--;
  //   }
  // }
}
