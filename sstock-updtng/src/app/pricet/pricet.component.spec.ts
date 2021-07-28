import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricetComponent } from './pricet.component';

describe('PricetComponent', () => {
  let component: PricetComponent;
  let fixture: ComponentFixture<PricetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
