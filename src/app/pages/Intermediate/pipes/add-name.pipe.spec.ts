import { AddNamePipe } from './add-name.pipe';

describe('AddNamePipe', () => {
  // Declaramos variable del tipo de nuestro pipe
  let pipe: AddNamePipe;

  beforeEach( () => {
    // Intanciamos niestra clase pipe para cada prueba
    pipe = new AddNamePipe();
  } )

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  // En esta prueba llamamos el pipe pasandole un valor inicial
  it('add text "Nombre:" to original text', () => {
    expect(pipe.transform('Nicolas')).toBe('Nombre: Nicolas');
  });
});
