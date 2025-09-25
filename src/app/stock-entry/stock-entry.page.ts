import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule,PopoverController } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SidebarPage } from '../sidebar/sidebar.page';
import { dropdownOptionValidator } from '../service/dropdown-validator';
import { DropDown, FieldKey } from '../service/dropdown';
import { ItemEntryPopupPage } from '../item-entry-popup/item-entry-popup.page';
import { ItemBarCodePage } from '../item-bar-code/item-bar-code.page';
@Component({
  selector: 'app-stock-entry',
  templateUrl: './stock-entry.page.html',
  styleUrls: ['./stock-entry.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    HeaderPage,
    SidebarPage,
    ReactiveFormsModule,
    SidebarPage,
  ],
})
export class StockEntryPage implements OnInit {
  sidebarOpen = false;
  @ViewChild(SidebarPage) stock!: SidebarPage;
  materialForm: FormGroup;
  fieldKeys: FieldKey[] = ['transType', 'vendor', 'invoiceNo', 'role','category','bill','item','transId'];

  filtered: { [key in FieldKey]: string[] } = {
    transType: [],
    vendor: [],
    invoiceNo: [],
    role: [],
    category:[],
    parentUom:[],
    bill:[],
    saleTransType:[],
    item:[],
    transId:[],
  };

  showDropdown: { [key in FieldKey]: boolean } = {
    transType: false,
    vendor: false,
    invoiceNo: false,
    role: false,
    category:false,
    parentUom:false,
    bill:false,
    saleTransType:false,
    item:false,
    transId:false,
  };

  productList = [
    {
      code: '123456789123',
      name: 'Anchor Switch 3/4 Anchor Switch 3/4 Anchor Switch 3/4',
      category: 'Switch',
      curStock: '10',
      purchasePrice: 10,
      quantity: 10,
      total: 10,
      uom: 'Piece',
      mrp: '10',
      minStock: '10',
      warPeriod: '2',
      location: 'aaa',
      action: '',
    },
      {
      code: '123456789123',
      name: 'Anchor Switch 3/4',
      category: 'Switch',
      curStock: '10',
      purchasePrice: 10,
      quantity: 10,
      total: 10,
      uom: 'Piece',
      mrp: '10',
      minStock: '10',
      warPeriod: '2',
      location: 'aaa',
      action: '',
    },
      {
      code: '123456789123',
      name: 'Anchor Switch 3/4',
      category: 'Switch',
      curStock: '10',
      purchasePrice: 10,
      quantity: 10,
      total: 10,
      uom: 'Piece',
      mrp: '10',
      minStock: '10',
      warPeriod: '2',
      location: 'aaa',
      action: '',
    },
      {
      code: '123456789123',
      name: 'Anchor Switch 3/4',
      category: 'Switch',
      curStock: '10',
      purchasePrice: 10,
      quantity: 10,
      total: 10,
      uom: 'Piece',
      mrp: '10',
      minStock: '10',
      warPeriod: '2',
      location: 'aaa',
      action: '',
    },
    
  ];
  totalAmount = 0;

  constructor(private fb: FormBuilder, private ddService: DropDown,private popoverController:PopoverController) {
    this.materialForm = this.fb.group({
      transType: ['Purchase',[dropdownOptionValidator('transType',ddService)]],
      vendor: ['',[dropdownOptionValidator('vendor',ddService)]],
      invoiceNo: ['',[dropdownOptionValidator('invoiceNo',ddService)]],
      category: ['',[dropdownOptionValidator('category',ddService)]],
      remark:[''],
      item:['',[dropdownOptionValidator('item',ddService)]],
      date: [''],
      transId:['',[dropdownOptionValidator('transId',ddService)]],
    });

    // this.calculateTotal();
  }

  ngOnInit() {
    // this.materialForm.get('transType')?.valueChanges.subscribe(val => {
    //   this.applyConditionalValidation(val);
    // });
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
      const ctrl = this.materialForm.get(field);
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
// applyConditionalValidation(transTypeValue:string){
//       const invoiceCtrl = this.materialForm.get('invoiceNo');
//     const vendorCtrl = this.materialForm.get('vendor');
//     const categoryCtrl = this.materialForm.get('category');
//     const itemCtrl = this.materialForm.get('item');

//     if (transTypeValue === 'Purchase') {
//       // make vendor & invoice required
//       invoiceCtrl?.setValidators([Validators.required ,dropdownOptionValidator('invoiceNo', this.ddService)]);
//       vendorCtrl?.setValidators([Validators.required ,dropdownOptionValidator('vendor', this.ddService)]);
//       categoryCtrl?.clearValidators();
//       itemCtrl?.clearValidators();
//     }
   
//     else {
//       categoryCtrl?.setValidators([Validators.required,dropdownOptionValidator('category', this.ddService)]);
//       vendorCtrl?.clearValidators();
//       invoiceCtrl?.clearValidators();
//       itemCtrl?.clearValidators();
//     }

//     // After changing validators, update validity
//     invoiceCtrl?.updateValueAndValidity();
//     vendorCtrl?.updateValueAndValidity();
//     categoryCtrl?.updateValueAndValidity();
//     itemCtrl?.updateValueAndValidity();
//   }
  onFocus(field: FieldKey) {
    this.ddService.focus(field);
  }

  onBlur(field: FieldKey) {
    this.ddService.blur(field);
  }

  onSelect(field: FieldKey, value: string) {
    this.materialForm.get(field)?.setValue(value);
    this.ddService.select(field, value);
  }

  onSidebarToggled(open: boolean) {
    this.sidebarOpen = open;
  }
  addProduct(index: number) {
    console.log('Product added:', this.productList[index]);
  }

  
  editProduct(index: number) {
    console.log('Edit product:', this.productList[index]);
    // Example: this.materialForm.patchValue(this.productList[index]);
  }

  deleteProduct(index: number) {
    this.productList.splice(index, 1);
    // this.calculateTotal();
  }
  async add() {
    const popover = await this.popoverController.create({
      component:ItemEntryPopupPage,
      translucent:true,
      cssClass:'customs-popover',
    });
     await popover.present();
  }
   async scanBarcode() {
    const popover = await this.popoverController.create({
      component:ItemBarCodePage,
      translucent:true,
      cssClass:'custom-popover',
    });
     await popover.present();
  }
  onSubmit() {
    console.log('Form submitted:', this.materialForm.value);
  }

  resetForm() {
    this.materialForm.reset();
  }

display() {
    console.log('Scan initiated');
  }
}
