import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  actualYear: number = 0;

  constructor(){
    this.actualYear = new Date().getFullYear();
  }
}
