import { Component } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  counter: number = 0;
  disabledPlusButton: boolean = false;
  disabledDeferButton: boolean = false;

  //constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  /**
   * Función para reasignar valor de contador
   * @param value cantidad a incrementar
   */
  increaseBy(value: number) {
    //if (isPlatformBrowser(this.platformId)) {
    this.counter += value;
    this.__blockButtons(value);
    //}
  }
  /**
   * Función para hacer incremento diferido en el tiempo
   * @param value cantidad a incrementar
   */
  deferIncreaseBy(value: number) {
    this.disabledDeferButton = true;
    setTimeout(() => {
      this.increaseBy(value);
      this.disabledDeferButton = false;
    }, 3000);
  }
  /**
   * Función para bloquear botón +1
   * @param value valor actual del contador
   */
  private __blockButtons(value: number) {
    if(value === 10) {this.disabledPlusButton = true}
    else {this.disabledPlusButton = false};
  }

}
