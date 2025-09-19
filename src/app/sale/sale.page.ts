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
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
  standalone: true,
  imports: [ IonicModule,
    CommonModule,
    HeaderPage,
    SidebarPage,
    ReactiveFormsModule,
    SidebarPage,],
})
export class SalePage implements OnInit {
sidebarOpen=false;
   @ViewChild(SidebarPage) stock!:SidebarPage;
  itemForm: FormGroup;
  fieldKeys: FieldKey[] = ['transType', 'vendor', 'invoiceNo', 'role','category','bill'];
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
       code: '',
      name: '',
      category: '',
      curStock:'',
      purchasePrice: '',
      quantity: '',
      total:'',
      uom: '',
      mrp:'',
     minStock:'',
     warPeriod:'',
     location:'',
     action:'',
    }
  ];
  totalAmount = 0;

  constructor(private fb: FormBuilder, private ddService: DropDown,private popoverController:PopoverController) {
    this.itemForm = this.fb.group({
      transType: ['Purchase',
        [
          Validators.required,
          dropdownOptionValidator('transType', this.ddService),
        ],
      ],
      bill: ['',
        [
          Validators.required,
          dropdownOptionValidator('bill', this.ddService),
        ],],
      name: [''],
      mobile: [''],
      comment:['']
    });

    this.calculateTotal();
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
      const ctrl = this.itemForm.get(field);
      if (ctrl) {
        ctrl.valueChanges
          .pipe()
          .subscribe((val) => {
            this.ddService.filter(field, val);
          });
      }
    });
  }
onSidebarToggled(open: boolean) {
  this.sidebarOpen = open;
}
onFocus(field: FieldKey) {
    this.ddService.focus(field);
  }

  onBlur(field: FieldKey) {
    this.ddService.blur(field);
  }

  onSelect(field: FieldKey, value: string) {
    this.itemForm.get(field)?.setValue(value);
    this.ddService.select(field, value);
  }

  addProduct(index: number) {
    console.log('Product added:', this.productList[index]);
  }

  calculateTotal() {
    // this.totalAmount = this.productList.reduce(
    //   (sum, item) => sum + item.purchasePrice * item.quantity,
    //   0
    // );
  }
editProduct(index: number) {
  console.log('Edit product:', this.productList[index]);
  // Example: this.materialForm.patchValue(this.productList[index]);
}

deleteProduct(index: number) {
  this.productList.splice(index, 1);
  this.calculateTotal();
}
display(){

}
print(){
  
}
  onSubmit() {
    console.log('Form submitted:', this.itemForm.value);
  }

  resetForm() {
    this.itemForm.reset();
  }

  scanBarcode() {
    console.log('Scan initiated');
  }
}


