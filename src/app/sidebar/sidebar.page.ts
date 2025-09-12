import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {IonicModule} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule]
})
export class SidebarPage implements OnInit {
@Input() header!:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }
 sidebarOpen = false;
  showSetup=false;
   @Output() sidebarToggled = new EventEmitter<boolean>();
  sideBar() {
    this.sidebarOpen = !this.sidebarOpen;
     this.sidebarToggled.emit(this.sidebarOpen);
  } 
  toggleSetup(){
    this.showSetup=!this.showSetup;
  }
  dashboard(){
this.route.navigate(['/dashboard']);
  }
  userType(){
this.route.navigate(['/user-type']);
  }
  user(){
this.route.navigate(['/user']);
  }
  stockEntry(){
this.route.navigate(['/stock-entry']);
  }
  sale(){
this.route.navigate(['/sale']);
  }
  report(){
   this.route.navigate(['/report']); 
  }
}
