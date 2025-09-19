import { TestBed } from '@angular/core/testing';

import { dropdownOptionValidator } from './dropdown-validator';
import { DropDown } from './dropdown';

describe('DropdownValidation', () => {
  let service: DropDown;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropDown);//i have some changes because of error
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
