import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BasicsModule } from 'src/app/pages/basics/basics.module';
import { IntermediateModule } from 'src/app/pages/Intermediate/Intermediate.module';
import { Location } from '@angular/common';


fdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let compiled: HTMLElement;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule, BasicsModule, IntermediateModule],
    }).compileComponents();
    // Inyectamos Router
    router = TestBed.inject(Router);
    // Inyectamos location
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    // En casi de necesitar ir al path inicial se ejecuta la siguiente línea
    //router.initialNavigation();
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Change location on clic on a element
  it('should change path on select menu', fakeAsync(() => {
    const links: NodeListOf<HTMLAnchorElement> = compiled.querySelectorAll(
      '.menu__link--sublink'
    );
    const relativePath: string = links[0].pathname;
    links[0].click();
    // Importate tener en cuenta el tick ya que el cambio de página es asincrono.
    tick();
    expect(relativePath).toContain(location.path());
  }));
});
