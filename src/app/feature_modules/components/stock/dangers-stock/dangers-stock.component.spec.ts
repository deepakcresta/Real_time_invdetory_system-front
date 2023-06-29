import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangersStockComponent } from './dangers-stock.component';

describe('DangersStockComponent', () => {
  let component: DangersStockComponent;
  let fixture: ComponentFixture<DangersStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangersStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangersStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
