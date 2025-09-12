import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaleDefectivePage } from './sale-defective.page';

describe('SaleDefectivePage', () => {
  let component: SaleDefectivePage;
  let fixture: ComponentFixture<SaleDefectivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDefectivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
