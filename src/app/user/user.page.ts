import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, PopoverController } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { SidebarPage } from '../sidebar/sidebar.page';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordPage } from '../reset-password/reset-password.page';
import { DropDown, FieldKey } from '../service/dropdown';
import { dropdownOptionValidator } from '../service/dropdown-validator';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderPage,
    SidebarPage,
  ],
})
export class UserPage implements OnInit {
  sidebarOpen = false;
  @ViewChild(SidebarPage) stock!: SidebarPage;
  userForm: FormGroup;
  fieldkeys: FieldKey[] = ['role'];
  userList = [
    {
      category: 'Admin',
      userName: 'CD',
      active: 'yes',
      action: '',
    },
    {
      category: 'Admin',
      userName: 'Suraj',
      active: 'yes',
      action: '',
    },
  ];
  filtered: { [key in FieldKey]: string[] } = {
    transType: [],
    vendor: [],
    invoiceNo: [],
    role: [],
    category:[],
    parentUom:[],
    bill:[],
  };

  showDropdown: { [key in FieldKey]: boolean } = {
    transType: false,
    vendor: false,
    invoiceNo: false,
    role: false,
    category:false,
    parentUom:false,
    bill:false,
  };
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private popoverController: PopoverController,
    private ddService:DropDown
  ) {
    this.userForm = this.fb.group({
      items: [''],
      name: [
        '',
        [Validators.required, Validators.pattern, Validators.minLength(3)],
      ],
      role: ['',[Validators.required,dropdownOptionValidator('role',ddService)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      active: [true],
    });
  }

  ngOnInit() {
   this.fieldkeys.forEach((field)=>{
    this.ddService.getFiltered(field).subscribe((list)=>{
      this.filtered[field]=list;
    });
    this.ddService.isDropdownVisible(field).subscribe((show)=>{
      this.showDropdown[field]=show;
    });
     const ctrl=this.userForm.get(field);
     if(ctrl){
      ctrl.valueChanges.pipe().subscribe((val)=>{
        this.ddService.filter(field,val);
      });
     }
   });
  }
  onFocus(field:FieldKey) {
    this.ddService.focus(field);
  }

  onSelect(field:FieldKey,value: string) {
    this.userForm.get(field)?.setValue(value);
    this.ddService.select(field,value);
  }

  onBlur(field:FieldKey) {
  this.ddService.blur(field);
  }

  onSidebarToggled(open: boolean) {
    this.sidebarOpen = open;
  }
  onSubmit() {
    this.route.navigate(['/stock-entry']);
  }
  reset() {
    this.route.navigate(['/reset-password']);
  }
  delete() {}
  editProduct() {}
  deleteProduct() {}
  async resetButton() {
    const popover = await this.popoverController.create({
      component: ResetPasswordPage,
      translucent: true,
      cssClass: 'custom-popover',
    });
    await popover.present();
  }
}
