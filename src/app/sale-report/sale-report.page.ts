import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarPage } from "../sidebar/sidebar.page";
@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.page.html',
  styleUrls: ['./sale-report.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule,HeaderPage,SidebarPage]
})
export class SaleReportPage implements OnInit {
sidebarOpen=false;
   @ViewChild(SidebarPage) stock!:SidebarPage;
  itemForm: FormGroup;
  reportType = ['Purchase', 'Item Update', 'Stock Adjustment'];
  productList = [
    {
      code: '',
      name: '',
      curStock:'',
      uom: '',
      category:'',
     status:'',
     location:'',
     threshold:'',
    quantity: '',
entryDate:''
    },
    {
      code: '',
      name: '',
      curStock:'',
      uom: '',
      category:'',
     status:'',
     location:'',
     threshold:'',
    quantity: '',
entryDate:''
    }
  ];
  totalAmount = 0;

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      reportType: ['',Validators.required],
      count:[''],
      transFromDate:[''],
      transToDate:[''],
      category:[''],
      itemName:[''],
      activeItem:[true],
      threshold:[true],
      groupByMonthly:[true]
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
