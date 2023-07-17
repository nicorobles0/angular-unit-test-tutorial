import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
//import { PLATFORM_ID } from '@angular/core';
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  // Instancia al componente que vamos a probar
  let component: ExampleComponent;
  // El fixture es una instancia viva del componente (El que nos permite detectar sus ciclos de vida etc)
  let fixture: ComponentFixture<ExampleComponent>;
  // Compilado html generado al crear componente
  let compiled: HTMLElement;

  // Función que se ejecuta antes de cada test
  beforeEach(async () => {
    /**
     * Tesbet hace referencia a la suit o al módulo de testeo que vamos a configurar
     * Acá es importante:
     * 1. Declarar todos los componentes que hagan parte o se utilicen en el componente,
     * 2. Importar Módulos que se utilicen (Ej: HttpClientTestingModule)
     * 3. Proveer los servicios o variables que se necesiten a nivel global
     * 4. Agregar esquemas necesarios
     */
    await TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      //providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    }).compileComponents();
  });

  beforeEach(() => {
    // Se asisgna el componente creado al fixture
    fixture = TestBed.createComponent(ExampleComponent);
    // Se asisgna el componente instanciado al component
    component = fixture.componentInstance;
    // Se hace detección de cambios iniciales.
    fixture.detectChanges();
    // Se asigna el Dom renderizado a la variable compiled
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Ejemplo simple llamado directo a una función
  it('should increment variable counter (6)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(5);
  });

  // Ejemplo de seleccion de elementos traidos del Dom y ejecutar funciones simulando interactividad
  it('Should change counter variable when buttons are clicked', () => {
    const buttons: NodeListOf<HTMLButtonElement> =
      compiled.querySelectorAll('.counter__button');
    expect(buttons).toHaveSize(2);
    buttons[0].click();
    expect(component.counter).toBe(-1);
    buttons[1].click();
    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(2);
  });
  // Pruebas de cambios en DOM al ejecutar una función 
  it('Should change h2 when changing counter variable', () => {
    const h2 = compiled.querySelector('h2');
    component.increaseBy(2);
    // Importante volver a detectar los cambios en fixture para que este tome los cambios del dom al ser modificados.
    fixture.detectChanges();
    expect(h2?.innerText).toBe('Contador:\n2');
  });

   // Pruebas a un método privado siguiendo el flujo de implementación.
   it('should disable button correctly', () => {
    component.increaseBy(10);
    expect(component.disabledPlusButton).toBeTrue();
    component.increaseBy(-9);
    expect(component.disabledPlusButton).not.toBeTrue();
  });

  // Pruebas a un método privado (Solo ejemplo no hacer :c )
  // it('should disable button correctly (Ilegal test) ', () => {
  //   component["__blockButtons"](10);
  //   expect(component.disabledPlusButton).toBeTrue();
  //   component["__blockButtons"](9);
  //   expect(component.disabledPlusButton).not.toBeTrue();
  // });

  // Pruebas a un método privado utilizando un spy
  it('should block button when counter value when is equal or major to 10', () => {
    const spy = spyOn(component as any, '__blockButtons').and.callThrough();
    component.increaseBy(10);
    // Prueba para verificar que una función haya sido llamada
    expect(spy).toHaveBeenCalled();
    component.increaseBy(9);
    // Prueba de llamado con parametros
    expect(spy).toHaveBeenCalledWith(10);
    // Pruebas para verificar número de llamados a una función
    expect(spy).toHaveBeenCalledTimes(2)
  });

  // Pruebas a un método con tiempo diferido ej : Fake Async Y tick
  it('should increment variable counter (5) by defer time (Tick)', fakeAsync (() => {
    component.deferIncreaseBy(5);
    expect(component.disabledDeferButton).toBeTrue();
    // tick hace un salto falso en el tiempo de la prueba.
    tick(3100);
    expect(component.disabledDeferButton).not.toBeTrue();
    expect(component.counter).toBe(5);
  }));

  // Pruebas a un método con tiempo diferido ej : done Function
  it('should increment variable counter (4) by defer time (Done Function)', (done: DoneFn) => {
    component.deferIncreaseBy(5);
    expect(component.disabledDeferButton).toBeTrue();
    setTimeout( () => {
      expect(component.disabledDeferButton).not.toBeTrue();
      expect(component.counter).toBe(5);
      done();
    }, 3100 )
  });
});