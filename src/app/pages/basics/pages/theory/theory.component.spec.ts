/** Importaciones necesarias */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheoryComponent } from './theory.component';

/** Función describe */
describe('TheoryComponent', () => {
  /** Definición de variables necesarias para nuestros tests */
  let component: TheoryComponent;
  let fixture: ComponentFixture<TheoryComponent>;
  /** Configuración del TesBed */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoryComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /** Seguidilla de tests */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
