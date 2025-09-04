import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemEntryPopupPage } from './item-entry-popup.page';

describe('ItemEntryPopupPage', () => {
  let component: ItemEntryPopupPage;
  let fixture: ComponentFixture<ItemEntryPopupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEntryPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
