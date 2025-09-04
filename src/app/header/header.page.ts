import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HeaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
