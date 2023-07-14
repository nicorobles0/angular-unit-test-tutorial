import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '@components/components.module';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutComponent ],
      providers: [],
      imports: [RouterTestingModule, ComponentsModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
