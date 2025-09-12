import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemMultiplePopupPage } from './item-multiple-popup.page';

describe('ItemMultiplePopupPage', () => {
  let component: ItemMultiplePopupPage;
  let fixture: ComponentFixture<ItemMultiplePopupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMultiplePopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
