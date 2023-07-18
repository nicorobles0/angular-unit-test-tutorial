import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example3Component } from './example3.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('Example3Component', () => {
  let component: Example3Component;
  let fixture: ComponentFixture<Example3Component>;
  let compiled: HTMLElement;
  let buttonSend: HTMLButtonElement;
  let storage: any = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Example3Component],
      // Añadimos módulo de formularios reactivos
      imports: [ReactiveFormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(Example3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });
  // Intanciamos el boton de envio antes de cada prueba
  beforeEach(() => {
    buttonSend = compiled.querySelector('.form__button') as HTMLButtonElement;
  });

  // Mockeamos metodos del local storage
  beforeEach(() => {
    spyOn(localStorage, 'setItem').and.callFake( (key: string, data: string) => {
      storage[key] = data;
    });
    spyOn(localStorage, 'getItem').and.callFake( (key: string) => storage[key] ? storage[key] : null );
  });

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
    const spySaveFunction = spyOn(
      component,
      'sendInfoToLocal'
    ).and.callThrough();
    const spyUpdateValidate = spyOn(
      component.fakeForm,
      'updateValueAndValidity'
    ).and.callThrough();
    const spyMarkAllAsTouched = spyOn(
      component.fakeForm,
      'markAllAsTouched'
    ).and.callThrough();
    buttonSend.click();
    // Verificamos que las funciones de untouch y update validate se llamen
    expect(spyUpdateValidate).toHaveBeenCalled();
    expect(spyMarkAllAsTouched).toHaveBeenCalled();
    // Verificamos que no se llame la funcón del click del botón
    expect(spySaveFunction).not.toHaveBeenCalled();
  });
  // Pruebas para verificar que los errores mostrados en pantalla si sean los correctos
  it('should be see screen erros on invalid input name', () => {
    // Enviamos un valor vacio al campo nombres
    component.fakeForm.get('names')?.setValue('');
    // Enviamos el formulario
    buttonSend.click();
    // detectamos cambios en el html
    fixture.detectChanges();
    // recogemos los elementos de error del campo
    let nameErros: NodeListOf<HTMLSpanElement> =
      compiled.querySelectorAll('[error-names]');
    // Comprobamos que el error mostrado sea el correcto
    expect(nameErros[0]?.innerText).toBe('Este campo es requerido *');
    // Enviamos otro valor para cambiar el error que se debería mostrar
    component.fakeForm.get('names')?.setValue('An');
    // Detectamos cambios en la vista
    fixture.detectChanges();
    // Recogemos nuevos elementos de error
    nameErros = compiled.querySelectorAll('[error-names]');
    // Verificamos error mostrado al usuario
    expect(nameErros[0].innerText).toBe(
      'Este campo requiere al menos 5 caracteres *'
    );
  });
 // Validación para verificar el formulario valido realice el guardado correctamente
  it('should be save data when when the form is valid', () => {
    // Objeto esperado que se guarde en el local
    const expectResult: any = {
      names: 'Nombre prueba',
      phone: '3002811844',
      email: 'micorreo@gmail.com',
      department: 'Boyacá',
      city: 'Tunja'
    };
    // Colocamos datos validos en el formulario,
    component.fakeForm.get('names')?.setValue('Nombre prueba');
    component.fakeForm.get('phone')?.setValue('3002811844');
    component.fakeForm.get('email')?.setValue('micorreo@gmail.com');
    component.fakeForm.get('department')?.setValue('Boyacá');
    component.fakeForm.get('city')?.setValue('Tunja');
    // espiamos la función que se ejecuta cuando el formulario es valido
    const spySendInfoToLocal = spyOn(component, 'sendInfoToLocal').and.callThrough();
    // Enviamos el formulario
    buttonSend.click();
    // Verificamos los datos guardados con los esperados
    expect( spySendInfoToLocal ).toHaveBeenCalled();
    expect( JSON.parse(storage['contact']) ).toEqual(expectResult);
  });
});
