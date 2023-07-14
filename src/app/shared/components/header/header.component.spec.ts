import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set correct src logo', () => {
    const img = <HTMLImageElement>compiled.querySelector('.header__logo');
    expect( img?.src ).toContain('logo.png');
  })

  it('should set correct alt logo', () => {
    const img = <HTMLImageElement>compiled.querySelector('.header__logo');
    expect( img?.alt ).toEqual('Logo App');
  })

  it('should get only one logo', () => {
    const img = compiled.querySelectorAll('.header__logo');
    expect(img).toHaveSize(1)
  })
});
