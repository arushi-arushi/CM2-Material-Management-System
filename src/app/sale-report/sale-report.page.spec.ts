import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaleReportPage } from './sale-report.page';

describe('SaleReportPage', () => {
  let component: SaleReportPage;
  let fixture: ComponentFixture<SaleReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
