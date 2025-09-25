import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule,PopoverController } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarPage } from "../sidebar/sidebar.page";
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-multiple-popup',
  templateUrl: './item-multiple-popup.page.html',
  styleUrls: ['./item-multiple-popup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderPage, ReactiveFormsModule],
})
export class ItemMultiplePopupPage implements OnInit {
sidebarOpen=false;
   @ViewChild(SidebarPage) stock!:SidebarPage;
  
  productList = [
    {
      name: 'Led Bulb 14 W',
      curStock:'10',
      purchasePrice: 10,
    mrp:120
    },
     {
      name: 'Led Bulb 12 W',
      curStock:'10',
      purchasePrice: 10,
    mrp:100
    }
  ];
  constructor(private route:Router,private popoverController:PopoverController){

  }
   
  ngOnInit() {}
onSidebarToggled(open: boolean) {
  this.sidebarOpen = open;
}
goBack(){
  this.route.navigate(['/sale']);
  this.popoverController.dismiss();  
}

}
