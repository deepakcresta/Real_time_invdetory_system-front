import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryStockComponent } from './entry-stock.component';

describe('EntryStockComponent', () => {
  let component: EntryStockComponent;
  let fixture: ComponentFixture<EntryStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
