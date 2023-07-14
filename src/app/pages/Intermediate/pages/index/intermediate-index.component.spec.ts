import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateIndexComponent } from './intermediate-index.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterService } from '../../services/character.service';
import { of } from 'rxjs';
import { AddNamePipe } from '../../pipes/add-name.pipe';
// Mock de respuesta esperada al llmar servicio de traer personajes
const mockResult = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
];

describe('IntermediateIndexComponent', () => {
  // Definición de nuestras variables
  let component: IntermediateIndexComponent;
  let fixture: ComponentFixture<IntermediateIndexComponent>;
  let compiled: HTMLElement;
  // Declaramos una variable del tipo de nuestro servicio
  let characterSerivice: CharacterService;
  // Definimos variable de tipo espia para espiar la funcion de getCharacterList
  let spyGetCharacterList: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Declaramos componentes y pipes utilizados en el componente
      declarations: [ IntermediateIndexComponent, CharacterCardComponent, AddNamePipe],
      // Importamos Http Client Module (Importaten: Utilizar el de testing)
      imports: [ HttpClientTestingModule ],
      // Proveemos el servicio en nuestro módulo de pruebas
      providers: [ CharacterService  ]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(IntermediateIndexComponent);
    component = fixture.componentInstance;
    // Asignamos un espía en la función getCharacterList
    spyGetCharacterList = spyOn( component, 'getCharacterList' ).and.callThrough();
    fixture.detectChanges();
    // Asignamos el html compilado a nuestra variable compiled
    compiled = fixture.nativeElement;
  })

  beforeEach( () => {
    // Asignamos a nuestra variable la injección del servicio en el componente
    // Lo hacemos así para poder acceder ya que la instacia en la clase es privada
    characterSerivice = fixture.debugElement.injector.get(CharacterService);
    // Creamos un espía en la función getCharacterList de nuestro servicio.
    spyOn(characterSerivice, 'getCharacterList').and.callFake( () => of(mockResult));
  });

  it('should create and call initial function', () => {
    expect(component).toBeTruthy();    
    // Comprobamos que se realiza el llamado a la función (getCharacterList) al inicar componente
    expect( spyGetCharacterList ).toHaveBeenCalledWith('character');
  });

  it('should get response of service, and assign result to ', () => {
    component.getCharacterList('character');
    // comprobamos que los resultados se hayan asignado a la variable caracteres y que esta contenda los 2 resultados
    expect( component.characters ).toHaveSize(2);
    fixture.detectChanges();
    const cards = compiled.querySelectorAll('app-character-card');
    // Comprobamos que se hayan renderizado dos tarjetas en el Html
    expect(cards).toHaveSize(2);
  });

  it('should get response of service, and assign result to ', () => {
    component.getCharacterList('character');
    // comprobamos que los resultados se hayan asignado a la variable caracteres y que esta contenda los 2 resultados
    expect( component.characters ).toHaveSize(2);
    fixture.detectChanges();
    const cards = compiled.querySelectorAll('app-character-card');
    //const cards = fixture.debugElement.nativeElement.querySelectorAll('app-character-card');
    // Comprobamos que se hayan renderizado dos tarjetas en el Html
    expect(cards).toHaveSize(2);
  });
  
});
