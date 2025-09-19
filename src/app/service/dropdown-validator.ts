// dropdown-validator.service.ts
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { DropDown } from './dropdown';
import { FieldKey } from './dropdown';

export function dropdownOptionValidator(
  field: FieldKey,
  dropdownService: DropDown,
  caseInsensitive: boolean = true
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const val = control.value;
    // If empty/null, let required or other validators handle it
    if (val == null || val === '') {
      return null;
    }
    const options = dropdownService.getOptions(field);
    let valid: boolean;
    if (caseInsensitive) {
      valid = options.some(opt => opt.toLowerCase() === val.toString().toLowerCase());
    } else {
      valid = options.includes(val);
    }
    return valid ? null : { invalidOption: { value: val, field: field } };
  };
}