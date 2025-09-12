import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemReportPage } from './item-report.page';

describe('ItemReportPage', () => {
  let component: ItemReportPage;
  let fixture: ComponentFixture<ItemReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
