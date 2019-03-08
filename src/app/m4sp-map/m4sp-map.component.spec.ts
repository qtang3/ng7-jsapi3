import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M4spMapComponent } from './m4sp-map.component';

describe('M4spMapComponent', () => {
  let component: M4spMapComponent;
  let fixture: ComponentFixture<M4spMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M4spMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M4spMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
