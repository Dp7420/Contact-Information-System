import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  show=false;
  changePasswordForm: FormGroup;
  errorMessage: string = '';
  adminD:any;

  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router:Router) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatch });
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  passwordsMatch(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    this.changePassword(); 
  }

  openPopup(){
    this.show=true;
  } 

  changePassword(){
    if (this.changePasswordForm.valid) {
      const data=localStorage.getItem('adminData');
      this.adminD=JSON.parse(data);
      const { oldPassword, newPassword } = this.changePasswordForm.value;
      this.authService.adminChangePassword(this.adminD.id, oldPassword, newPassword)
        .subscribe(
          response => {
            console.log('Password changed successfully', response);
            localStorage.removeItem('adminData');
            this.openPopup();  
            this.errorMessage = ''; // Clear the error message on success
          },
          error => {
            console.error('Error changing password', error);
            this.errorMessage = error; // Display the error message from the server
          }
        );
    }
  }
}
