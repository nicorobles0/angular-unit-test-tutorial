import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: HTMLElement;
  const auxActualYear = new Date().getFullYear();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate current year', () => {
    const actualYear = component.actualYear;
    expect(auxActualYear).toEqual(actualYear);
  });

  it('should set current year', () => {
    const actualYear = component.actualYear;
    const p = compiled.querySelector('p');
    expect( p?.innerText ).toEqual(`© Ejemplo pruebas unitarias Karma - Jasmine ${actualYear}`)
  });
});
