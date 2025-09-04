import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import  {IonicModule} from '@ionic/angular'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private route:Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginId: ['', [Validators.required, Validators.email]],   // email as loginId
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      this.route.navigate(['/home']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  forget(){
    this.route.navigate(['/forget']);
  }
}
