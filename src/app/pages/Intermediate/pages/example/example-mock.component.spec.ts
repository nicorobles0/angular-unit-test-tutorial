import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterService } from '../../services/character.service';
import { CharacterServiceMock } from '../../services/mocks/character.service.mock';
import { AddNamePipe } from '../../pipes/add-name.pipe';
import { ExampleComponent } from './example.component';

describe('ExampleComponent Variant', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;
  let compiled: HTMLElement;
  // Definimos variable de tipo espia para espiar la funcion de getCharacterList
  let spyGetCharacterList: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Declaramos componentes y pipes utilizados en el componente
      declarations: [ ExampleComponent, CharacterCardComponent, AddNamePipe],
      // Importamos Http Client Module (Importaten: Utilizar el de testing)
      imports: [ HttpClientTestingModule ],
      // Proveemos el servicio en nuestro módulo de pruebas
      // Inyectamos nuestra clase mock al servicio que estamos proveyendo
      providers: [ { provide: CharacterService, useClass: CharacterServiceMock } ]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    // Asignamos un espía en la función getCharacterList
    spyGetCharacterList = spyOn( component, 'getCharacterList' ).and.callThrough();
    fixture.detectChanges();
    // Asignamos el html compilado a nuestra variable compiled
    compiled = fixture.nativeElement;
  })

  it('should create and call initial function', () => {
    expect(component).toBeTruthy();    
    // Comprobamos que se realiza el llamado a la función (getCharacterList) al inicar componente
    expect( spyGetCharacterList ).toHaveBeenCalledWith('character');
  });

  it('should get response of service, and assign result to ', () => {
    component.getCharacterList('character');
    // comprobamos que los resultados se hayan asignado a la variable caracteres y que esta contenda los 2 resultados
    // Que son los que mockeamos en nuestra clase fake
    expect( component.characters ).toHaveSize(2);
    fixture.detectChanges();
    const cards = compiled.querySelectorAll('app-character-card');
    // Comprobamos que se hayan renderizado dos tarjetas en el Html
    expect(cards).toHaveSize(2);
  });

});