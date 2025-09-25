import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {IonicModule,PopoverController} from '@ionic/angular';
import { Router } from '@angular/router';
import { ResetPasswordPage } from '../reset-password/reset-password.page';

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
  constructor(private route:Router, private popoverController : PopoverController) { }

  ngOnInit() {
  }
  goToProfile() {
  this.route.navigate(['/user']);
  }

 async changePassword() {
    const popover = await this.popoverController.create({
      component: ResetPasswordPage,
      translucent: true,
      cssClass: 'custom-popover',
    });
    await popover.present();
  }
logout() {
  this.route.navigate(['/login']);
}
onClose(){
  this.close.emit();
}

}
