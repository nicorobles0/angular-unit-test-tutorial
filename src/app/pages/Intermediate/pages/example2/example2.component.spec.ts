import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2Component } from './example2.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { AddNamePipe } from '../../pipes/add-name.pipe';
import { By } from '@angular/platform-browser';
import { Character } from '@interfaces/character.interface';

describe('Example2Component', () => {
  let component: Example2Component;
  let fixture: ComponentFixture<Example2Component>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example2Component, CharacterCardComponent,  AddNamePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be call setCharacterID when component children emmit  ' , () => {
    // Mock del personaje
    const characterMock: Character = {
      id: 2222,
      name: 'Rick Sanchez',
      status: 'Alive',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    };
    // Creamos espia de nuestra función setCharacterID
    const spy1 = spyOn(component , 'setcharacterID').and.callThrough();
    // Verificamos H1 este en su estado inicial
    const h1Element = compiled.querySelector('h1');
    expect(h1Element?.innerText).toBe('El ID del personaje es:');
    // Extraemos componentes hijos
    // Accedemos al debugElement que es nuestro componente "vivo" y seleccionamos por firectiva
    const cardDebugElement = fixture.debugElement.query( By.directive(CharacterCardComponent) );
    // Extraemos el componente hijo del componente instaciado
    const cardElement: CharacterCardComponent = cardDebugElement.componentInstance;
    // Simulamos el evento output
    cardElement.saveCharacterId(characterMock);
    // Validamos que el metodo setCharacterID se dispare con el output
    expect(spy1).toHaveBeenCalledOnceWith(2222);
    // Validamos que nuestro h1 renderice correctamente luego del output
    fixture.detectChanges();
    expect(h1Element?.innerText).toBe('El ID del personaje es: 2222');
  })

});
