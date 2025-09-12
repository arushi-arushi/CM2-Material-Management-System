import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarPage } from "../sidebar/sidebar.page";

@Component({
  selector: 'app-sale-defective',
  templateUrl: './sale-defective.page.html',
  styleUrls: ['./sale-defective.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule,HeaderPage,SidebarPage]
})
export class SaleDefectivePage implements OnInit {
sidebarOpen=false;
   @ViewChild(SidebarPage) stock!:SidebarPage;
  itemForm: FormGroup;
  transType = ['New','Return','Defective'];
  productList = [
    {
      code: '123456789123',
      name: 'Anchor Switch 3/4',
      category: 'Switch',
      curStock:'10',
      purchasePrice: 10,
      quantity: 10,
      total:10,
      uom: 'Piece',
      mrp:'12',
     minStock:'10',
     warPeriod:'2',
     location:'aaa',
     action:'',
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

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      transType: ['',Validators.required],
      bill: [''],
      name: [''],
      mobile: [''],
      comment:['']
    });

  }

  ngOnInit() {}
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

deleteProduct(){

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
