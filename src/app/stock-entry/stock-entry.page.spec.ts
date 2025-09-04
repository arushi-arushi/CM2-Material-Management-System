import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockEntryPage } from './stock-entry.page';

describe('StockEntryPage', () => {
  let component: StockEntryPage;
  let fixture: ComponentFixture<StockEntryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StockEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
