import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule,PopoverController } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { SidebarPage } from '../sidebar/sidebar.page';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.page.html',
  styleUrls: ['./user-type.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule,ReactiveFormsModule, HeaderPage,SidebarPage]
})
export class UserTypePage implements OnInit {
sidebarOpen=false;
   @ViewChild(SidebarPage) stock!:SidebarPage;
   userForm:FormGroup;
   role=['role1','role2','role3'];

  constructor(private fb:FormBuilder,private route:Router,private popoverController:PopoverController) {
    this.userForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern,Validators.minLength(3)]],
      role:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      active:[true],
    });
   }

  ngOnInit() {
  }
onSidebarToggled(open: boolean) {
  this.sidebarOpen = open;
}
onSubmit(){
this.route.navigate(['/stock-entry']);
}
reset(){
this.route.navigate(['/reset-password']);
}
delete(){

}
}
