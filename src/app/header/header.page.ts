import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {IonicModule} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HeaderPage implements OnInit {
 @Input() showUserIcon: boolean = true;
  @Input() showCloseIcon: boolean = false;

  @Output() close = new EventEmitter<void>();
  constructor(private route:Router) { }

  ngOnInit() {
  }
  goToProfile() {
  this.route.navigate(['/user']);
  }

changePassword() {
  this.route.navigate(['/forget']);
}

logout() {
  this.route.navigate(['/login']);
}
onClose(){
  this.close.emit();
}

}
