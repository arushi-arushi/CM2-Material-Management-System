import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule,PopoverController } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { SidebarPage } from '../sidebar/sidebar.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,ReactiveFormsModule,HeaderPage,SidebarPage]
})
export class DasboardPage implements OnInit {
sidebarOpen=false;
   @ViewChild(SidebarPage) stock!:SidebarPage;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSidebarToggled(open: boolean) {
  this.sidebarOpen = open;
}

}
