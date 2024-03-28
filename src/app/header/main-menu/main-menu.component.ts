import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  mainMneuItems:string[]=[
    'Home',
    'Products',
    'About',
    'Contacts'
  ]

}
