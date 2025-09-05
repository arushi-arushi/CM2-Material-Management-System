import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import {  FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from "@angular/forms";
import {  Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [ CommonModule,IonicModule,ReactiveFormsModule,HeaderPage]
})

export class ResetPasswordPage implements OnInit {
resetPassword:FormGroup;
  constructor(private fb:FormBuilder,private route:Router) {
      this.resetPassword=this.fb.group({
          name:['',[Validators.required]],
          password:['',[Validators.required,Validators.minLength(6)]],
          conPassword:['',[Validators.required]]
       },
      {Validators:this.passwordMatchValidator});
   }

  ngOnInit() {
   
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('conPassword')?.value;
    return password && confirmPassword && password !== confirmPassword
      ? { mismatch: true }
      : null;
  }
submit(){
 if (this.resetPassword.valid) {
     this.route.navigate(['/user']);
    }
}
cancel(){
this.resetPassword.reset();
}
}
