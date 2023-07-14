import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateIndexComponent } from './intermediate-index.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterService } from '../../services/character.service';
import { CharacterServiceMock } from '../../services/mocks/character.service.mock';
import { AddNamePipe } from '../../pipes/add-name.pipe';

describe('IntermediateIndexComponent Variant', () => {
  let component: IntermediateIndexComponent;
  let fixture: ComponentFixture<IntermediateIndexComponent>;
  let compiled: HTMLElement;
  let spyGetCharacterList: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediateIndexComponent, CharacterCardComponent, AddNamePipe],
      imports: [ HttpClientTestingModule ],
      // Proveemos al servicio utilizado un valor o una clase con métodos mockeados
      providers: [ { provide: CharacterService, useClass: CharacterServiceMock } ]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(IntermediateIndexComponent);
    component = fixture.componentInstance;
    // Creamos un espía en la función getCharacterList
    spyGetCharacterList = spyOn( component, 'getCharacterList' ).and.callThrough();
    fixture.detectChanges();
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
    expect( component.characters ).toHaveSize(2);
    fixture.detectChanges();
    const cards = compiled.querySelectorAll('app-character-card');
    // Comprobamos que se hayan renderizado dos tarjetas en el Html
    expect(cards).toHaveSize(2);
  });

});
