import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablenComponent } from './tablen.component';

describe('TablenComponent', () => {
  let component: TablenComponent;
  let fixture: ComponentFixture<TablenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
