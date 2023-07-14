import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theory2Component } from './theory2.component';

describe('Theory2Component', () => {
  let component: Theory2Component;
  let fixture: ComponentFixture<Theory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Theory2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Theory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
