import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';
import { Character } from '@interfaces/character.interface';
import { AddNamePipe } from '../../pipes/add-name.pipe';

// MOck de un personaje
const characterMock: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    //Configracmos tesbed
    await TestBed.configureTestingModule({
      declarations: [ CharacterCardComponent, AddNamePipe ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Verificamos que si no se ha definido nada un nuestro input
  // No se renderice nuestra tarjeta
  it('No load html on character is null', () => {
    const characterArticle = compiled.querySelector('.character');
    expect(characterArticle).toBeNull();
  });
  // Verificamos html cuando el input ya está definido.
  it('Load html on character is defined', () => {
    component.character = characterMock;
    fixture.detectChanges();
    const characterArticle = compiled.querySelector('.character');
    expect(characterArticle).toBeDefined();
  });
  // Verificamos label en html cuando paso por el pipe.
  it('see correctly name label of character pass by pipe', () => {
    component.character = characterMock;
    fixture.detectChanges();
    const characterName = compiled.querySelector('.character__name');
    expect( characterName?.innerHTML ).toBe('Nombre: Rick Sanchez')
  });
  // Verificamos que el output no se llame si el caracter no esta definido
  it('Call output on character is defined', () => {
    component.character = characterMock;
    const spyOutput = spyOn( component.onSetId, 'emit' ).and.callThrough();
    fixture.detectChanges();
    const characterButton = compiled.querySelector('.character__button') as HTMLButtonElement;
    characterButton?.click();
    expect(spyOutput).toHaveBeenCalled();
  });
// Verificamos que el output  se llame si el caracter esta definido
  it('No call output on character is defined', () => {
    const spyOutput = spyOn( component.onSetId, 'emit' ).and.callThrough();
    fixture.detectChanges();
    const characterButton = compiled.querySelector('.character__button') as HTMLButtonElement;
    characterButton?.click();
    expect(spyOutput).not.toHaveBeenCalled();
  });
});
