import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarPage } from "../sidebar/sidebar.page";



@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderPage, SidebarPage, ReactiveFormsModule, SidebarPage],
})
export class SalePage implements OnInit {
sidebarOpen=false;
   @ViewChild(SidebarPage) stock!:SidebarPage;
  itemForm: FormGroup;
  transType = ['Type A', 'Type B', 'Type C'];
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
     minStock:'10',
     warPeriod:'2',
     location:'aaa',
     action:'',
    },
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

    this.calculateTotal();
  }

  ngOnInit() {}
onSidebarToggled(open: boolean) {
  this.sidebarOpen = open;
}
  addProduct(index: number) {
    console.log('Product added:', this.productList[index]);
  }

  calculateTotal() {
    this.totalAmount = this.productList.reduce(
      (sum, item) => sum + item.purchasePrice * item.quantity,
      0
    );
  }
editProduct(index: number) {
  console.log('Edit product:', this.productList[index]);
  // Example: this.materialForm.patchValue(this.productList[index]);
}

deleteProduct(index: number) {
  this.productList.splice(index, 1);
  this.calculateTotal();
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


