import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule,PopoverController } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-bar-code',
  templateUrl: './item-bar-code.page.html',
  styleUrls: ['./item-bar-code.page.scss'],
  standalone: true,
 imports: [IonicModule, CommonModule, HeaderPage,ReactiveFormsModule]
})
export class ItemBarCodePage implements OnInit {
itemList=[
    {
      itemName:'Bulb',
      copies:100,
    },
     {
      itemName:'',
      copies:'',
    }
  ]
   constructor( private route: Router,private popoverController:PopoverController) {

   }
  ngOnInit() {
  }

print(){
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
