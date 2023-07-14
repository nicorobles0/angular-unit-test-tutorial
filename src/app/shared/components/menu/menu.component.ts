import { Component } from '@angular/core';
import { Menu } from '@interfaces/menu.interface';
const menuData = require('@data/menu.json');
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList: Menu[];
  constructor(){ 
    this.menuList = menuData;
   }
}
