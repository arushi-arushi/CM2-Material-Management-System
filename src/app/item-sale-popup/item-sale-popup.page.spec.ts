import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemSalePopupPage } from './item-sale-popup.page';

describe('ItemSalePopupPage', () => {
  let component: ItemSalePopupPage;
  let fixture: ComponentFixture<ItemSalePopupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSalePopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
