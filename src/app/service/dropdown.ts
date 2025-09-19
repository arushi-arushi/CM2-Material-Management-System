// src/app/shared/services/dropdown.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type FieldKey = 'transType' | 'vendor' | 'invoiceNo'|'role'|'category'|'parentUom'|'bill';  // adjust as needed

@Injectable({
  providedIn: 'root'
})
export class DropDown {

  private sourceLists: { [key in FieldKey]: string[] } = {
    transType: ['Purchase','Item New', 'Item Update', 'Stock Adjustment'],
    vendor: ['Vendor A', 'Vendor B', 'Vendor C'],
    invoiceNo: ['Invoice 1', 'Invoice 2', 'Invoice 3'],
   role:['role1', 'role2', 'role3', 'roleAdmin', 'roleUser', 'roleManager'],
   category:['Category A', 'Category B', 'Category C'],
   parentUom:['parentUom1','parentUom2','parentUom3'],
   bill:['Bill 1','Bill 2'],
  };
  
  // for filtered suggestions
  private filteredSubjects: { [key in FieldKey]: BehaviorSubject<string[]> } = {
    transType: new BehaviorSubject<string[]>([]),
    vendor: new BehaviorSubject<string[]>([]),
    invoiceNo: new BehaviorSubject<string[]>([]),
    role:new BehaviorSubject<string[]>([]),
    category:new BehaviorSubject<string[]>([]),
     parentUom:new BehaviorSubject<string[]>([]),
     bill:new BehaviorSubject<string[]>([]),
  };

  // for dropdown visible state
  private showDropdownSubjects: { [key in FieldKey]: BehaviorSubject<boolean> } = {
    transType: new BehaviorSubject<boolean>(false),
    vendor: new BehaviorSubject<boolean>(false),
    invoiceNo: new BehaviorSubject<boolean>(false),
    role:new BehaviorSubject<boolean>(false),
    category:new BehaviorSubject<boolean>(false),
     parentUom:new BehaviorSubject<boolean>(false),
     bill:new BehaviorSubject<boolean>(false),
  };

  constructor() { }

  // get source list
  getOptions(field: FieldKey): string[] {
    return this.sourceLists[field] || [];
  }

  // set or update a source list (if you load from API)
  setOptions(field: FieldKey, options: string[]) {
    this.sourceLists[field] = options;
  }

  // get observable of filtered suggestions
  getFiltered(field: FieldKey): Observable<string[]> {
    return this.filteredSubjects[field].asObservable();
  }

  // get observable of showDropdown state
  isDropdownVisible(field: FieldKey): Observable<boolean> {
    return this.showDropdownSubjects[field].asObservable();
  }

  // call when focus to field
  focus(field: FieldKey) {
    const all = this.getOptions(field);
    this.filteredSubjects[field].next(all);
    this.showDropdownSubjects[field].next(all.length > 0);
  }

  // call when user types (e.g. on value change)
  filter(field: FieldKey, typed: string) {
    const source = this.getOptions(field);
    if (typed && typed.trim().length > 0) {
      const typedLower = typed.toLowerCase();
      const filtered = source.filter(opt =>
        opt.toLowerCase().includes(typedLower)
      );
      this.filteredSubjects[field].next(filtered);
      this.showDropdownSubjects[field].next(filtered.length > 0);
    } else {
      this.filteredSubjects[field].next([]);
      this.showDropdownSubjects[field].next(false);
    }
  }

  // select a value
  select(field: FieldKey, value: string) {
    this.showDropdownSubjects[field].next(false);
  }

  // on blur hide (with delay)
  blur(field: FieldKey) {
    setTimeout(() => {
      this.showDropdownSubjects[field].next(false);
    }, 200);
  }

}
