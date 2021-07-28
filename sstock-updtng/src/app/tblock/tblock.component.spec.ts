import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblockComponent } from './tblock.component';

describe('TblockComponent', () => {
  let component: TblockComponent;
  let fixture: ComponentFixture<TblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
