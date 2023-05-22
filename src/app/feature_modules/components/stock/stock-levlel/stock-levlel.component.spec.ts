import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLevlelComponent } from './stock-levlel.component';

describe('StockLevlelComponent', () => {
  let component: StockLevlelComponent;
  let fixture: ComponentFixture<StockLevlelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLevlelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLevlelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
