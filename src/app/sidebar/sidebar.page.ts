import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {IonicModule} from '@ionic/angular';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule]
})
export class SidebarPage implements OnInit {

  constructor() { }

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
}
