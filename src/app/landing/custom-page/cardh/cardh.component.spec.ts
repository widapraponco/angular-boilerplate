import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhComponent } from './cardh.component';

describe('CardhComponent', () => {
  let component: CardhComponent;
  let fixture: ComponentFixture<CardhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
