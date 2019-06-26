import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPage2Component } from './shop-page2.component';

describe('ShopPage2Component', () => {
  let component: ShopPage2Component;
  let fixture: ComponentFixture<ShopPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
