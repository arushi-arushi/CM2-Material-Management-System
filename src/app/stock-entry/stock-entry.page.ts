import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SidebarPage } from "../sidebar/sidebar.page";

@Component({
  selector: 'app-stock-entry',
  templateUrl: './stock-entry.page.html',
  styleUrls: ['./stock-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderPage, SidebarPage, ReactiveFormsModule, SidebarPage],
})
export class StockEntryPage implements OnInit {
  sidebarOpen=false;
   @ViewChild(SidebarPage) stock!:SidebarPage;
  materialForm: FormGroup;
  vendors = ['Vendor A', 'Vendor B', 'Vendor C'];
  productList = [
    {
      barcode: '123456789123',
      name: 'Anchor Switch 3/4',
      category: 'Switch',
      purchasePrice: 10,
      sellingPrice: 12,
      quantity: 10,
      uom: 'Piece',
      add:'Yes',
      comment: 'Available in white/black',
    },
  ];
  totalAmount = 0;

  constructor(private fb: FormBuilder) {
    this.materialForm = this.fb.group({
      vendor: [''],
      invoice: [''],
      date: [''],
      comment: [''],
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

  onSubmit() {
    console.log('Form submitted:', this.materialForm.value);
  }

  resetForm() {
    this.materialForm.reset();
  }

  scanBarcode() {
    console.log('Scan initiated');
  }
}
