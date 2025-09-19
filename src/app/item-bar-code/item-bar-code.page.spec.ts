import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemBarCodePage } from './item-bar-code.page';

describe('ItemBarCodePage', () => {
  let component: ItemBarCodePage;
  let fixture: ComponentFixture<ItemBarCodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBarCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
