import { AddNamePipe } from './add-name.pipe';

describe('AddNamePipe', () => {
  let pipe: AddNamePipe;

  beforeEach( () => {
    pipe = new AddNamePipe();
  } )

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('add text "Nombre:" to original text', () => {
    expect(pipe.transform('Nicolas')).toBe('Nombre: Nicolas');
  });

});
