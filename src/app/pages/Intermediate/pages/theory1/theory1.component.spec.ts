import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theory1Component } from './theory1.component';

describe('Theory1Component', () => {
  let component: Theory1Component;
  let fixture: ComponentFixture<Theory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Theory1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Theory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
