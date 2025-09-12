import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaleReturnPage } from './sale-return.page';

describe('SaleReturnPage', () => {
  let component: SaleReturnPage;
  let fixture: ComponentFixture<SaleReturnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleReturnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
