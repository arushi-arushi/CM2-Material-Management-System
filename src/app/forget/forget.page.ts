import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import  {IonicModule} from '@ionic/angular'
import { Router } from '@angular/router';
import { HeaderPage } from '../header/header.page';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule,HeaderPage]
})
export class ForgetPage implements OnInit {
  forgetForm!:FormGroup;
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.forgetForm=this.fb.group({
      emailId:['',[Validators.required,Validators.email]]
    })
  }
onSubmit(){
  if(this.forgetForm.valid){
   console.log('forget');
    this.route.navigate(['/login']);
  }
}
goBack(){
  this.route.navigate(['/login']);
}
}
