import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-item-entry-popup',
  templateUrl: './item-entry-popup.page.html',
  styleUrls: ['./item-entry-popup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderPage,ReactiveFormsModule]
})
export class ItemEntryPopupPage implements OnInit {
itemEntry:FormGroup;
  constructor( private fb:FormBuilder) {
    this.itemEntry=fb.group({
       barCode:[''],
    });
   }
category = ['Category A', 'Category B', 'Category C'];
uom=['uom1','uom2','uom3']
  ngOnInit() {
  }
onSubmit(){
  
}
cancel(){

}
}
