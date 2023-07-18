import { ComponentFixture, TestBed} from '@angular/core/testing';

import { Example3Component } from './example3.component';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('Example3Component', () => {
  let component: Example3Component;
  let fixture: ComponentFixture<Example3Component>;
  let compiled: HTMLElement;
  let buttonSend: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example3Component ],
      // Añadimos módulo de formularios reactivos
      imports:[ ReactiveFormsModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(Example3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });
  // Intanciamos el boton de envio antes de cada prueba
  beforeEach( () => {
    buttonSend = compiled.querySelector('.form__button') as HTMLButtonElement;
  } )

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate all form inputs are defined and initial error', () => {
    // Validamos que todos los campos del formulario esten definidos en nuestro form group
    expect(component.fakeForm.get('names')).toBeDefined();
    expect(component.fakeForm.get('phone')).toBeDefined();
    expect(component.fakeForm.get('email')).toBeDefined();
    expect(component.fakeForm.get('department')).toBeDefined();
    expect(component.fakeForm.get('city')).toBeDefined();
  });

  it('validate form initial state', () => {
    // Validamos que los campos tengan definidos sus errorres inicales
    expect(component.fakeForm.get('names')?.errors).toBeDefined();
    expect(component.fakeForm.get('phone')?.errors).toBeDefined();
    expect(component.fakeForm.get('email')?.errors).toBeDefined();
    expect(component.fakeForm.get('department')?.errors).toBeDefined();
    expect(component.fakeForm.get('city')?.errors).toBeNull();
  });

  it('should be no save info when the form is invalid', () => {
    // Verificamos que la función no llame al estar el formulario invalido
    const spySaveFunction = spyOn(component, 'sendInfoToLocal').and.callThrough();
    const spyUpdateValidate = spyOn(component.fakeForm, 'updateValueAndValidity').and.callThrough();
    const spyMarkAllAsTouched = spyOn(component.fakeForm, 'markAllAsTouched').and.callThrough();
    buttonSend.click();
    // Verificamos que las funciones de untouch y update validate se llamen
    expect(spyUpdateValidate).toHaveBeenCalled();
    expect(spyMarkAllAsTouched).toHaveBeenCalled();
    // Verificamos que no se llame la funcón del click del botón
    expect(spySaveFunction).not.toHaveBeenCalled();
  });

  it('should be see screen erros on invalid input name', () => {
    component.fakeForm.get('names')?.setValue('');
    buttonSend.click();
    fixture.detectChanges();
    let nameErros: NodeListOf<HTMLSpanElement> = compiled.querySelectorAll('[error-names]');
    expect( nameErros[0]?.innerText ).toBe('Este campo es requerido *');
    component.fakeForm.get('names')?.setValue('An');
    fixture.detectChanges();
    nameErros = compiled.querySelectorAll('[error-names]');
    expect( nameErros[0].innerText ).toBe('Este campo requiere al menos 5 caracteres *')
  });




});
