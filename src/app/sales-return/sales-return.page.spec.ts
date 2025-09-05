import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesReturnPage } from './sales-return.page';

describe('SalesReturnPage', () => {
  let component: SalesReturnPage;
  let fixture: ComponentFixture<SalesReturnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReturnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
