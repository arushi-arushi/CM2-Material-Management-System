import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule,PopoverController } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DropDown, FieldKey } from '../service/dropdown';
import { dropdownOptionValidator } from '../service/dropdown-validator';

@Component({
  selector: 'app-item-entry-popup',
  templateUrl: './item-entry-popup.page.html',
  styleUrls: ['./item-entry-popup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderPage,ReactiveFormsModule]
})
export class ItemEntryPopupPage implements OnInit {
itemEntry:FormGroup;
fieldKeys: FieldKey[] = ['transType', 'vendor', 'invoiceNo', 'role','category'];

  filtered: { [key in FieldKey]: string[] } = {
    transType: [],
    vendor: [],
    invoiceNo: [],
    role: [],
    category:[],
    parentUom:[],
    bill:[],
  };

  showDropdown: { [key in FieldKey]: boolean } = {
    transType: false,
    vendor: false,
    invoiceNo: false,
    role: false,
    category:false,
    parentUom:false,
    bill:false,
  };
   
  itemList=[
    {
      childUOM:'Meter',
      conversion:100,
      mrp:100
    },
     {
      childUOM:'',
      conversion:'',
      mrp:''
    }
  ]
  constructor( private fb:FormBuilder,private route: Router,private ddService: DropDown,private popoverController:PopoverController) {
    this.itemEntry=fb.group({
      itemCode:['',Validators.required],
      itemName:['',[Validators.required, Validators.pattern, Validators.minLength(3)]],
      curStock:[''],
      category:['',[Validators.required,dropdownOptionValidator('role',ddService)]],
      purchasePrice:['',Validators.required],
      minStock:[''],
      parentUom:[''],
      period:[''],
      mrp:[''],
      loc:[''],

    });
   }


  ngOnInit() {
    this.fieldKeys.forEach((field) => {
      // subscribe to filtered list
      this.ddService.getFiltered(field).subscribe((list) => {
        this.filtered[field] = list;
      });
      // subscribe to visibility
      this.ddService.isDropdownVisible(field).subscribe((show) => {
        this.showDropdown[field] = show;
      });

      // listen to value changes of the form control
      const ctrl = this.itemEntry.get(field);
      if (ctrl) {
        ctrl.valueChanges
          .pipe
          // maybe debounceTime, distinctUntilChanged
          ()
          .subscribe((val) => {
            this.ddService.filter(field, val);
          });
      }
    });
  }
    onFocus(field: FieldKey) {
    this.ddService.focus(field);
  }

  onBlur(field: FieldKey) {
    this.ddService.blur(field);
  }

  onSelect(field: FieldKey, value: string) {
    this.itemEntry.get(field)?.setValue(value);
    this.ddService.select(field, value);
  }
addItem(){

}
removeItem(){
  
}
onSubmit(){
     this.route.navigate(['/stock-entry']);

}
cancel(){
 this.route.navigate(['/stock-entry']);
 this.popoverController.dismiss();
}
goBack(){
this.route.navigate(['/stock-entry']);
 this.popoverController.dismiss();  
}
}
