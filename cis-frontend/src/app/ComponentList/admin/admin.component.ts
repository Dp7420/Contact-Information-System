import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from '../../Services/admins.service'; 
import { AuthServiceService } from '../../Services/auth-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  show = false;
  signin: signIn;
  errorMessage: String = '';
  error: string = '';
  successMessage: string = '';
  adminData: any;

  regForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private adminService: AdminsService,
    private authService: AuthServiceService,
    private fb: FormBuilder
  ) {
    this.signin = new signIn();
  }

  ngOnInit(): void {
    localStorage.clear();
    this.regForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit() {
    if (this.regForm.valid) {
      this.signin = this.regForm.value;
      console.log('Form Submitted', this.signin);

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post<any>('http://localhost:8080/api/auth/login', this.signin, { headers })
        .subscribe({
          next: (response) => {
            console.log(response);
            if (response && response.body.userName === this.signin.userName) {
              localStorage.clear();
              localStorage.setItem('adminData',JSON.stringify(response.body.role));
              localStorage.setItem('userName',JSON.stringify(response.body.userName));
              localStorage.setItem('token', JSON.stringify(response.body.token));
              this.router.navigate(['/home']);
              this.successMessage = 'Admin login success';
              this.adminData = response; // Assuming response contains adminData
              this.show = true;
            } else {
              this.error = 'Username and Password is not correct';
            }
          },
          error: (error: HttpErrorResponse) => {
            console.error('Login failed', error);
            this.error = 'Invalid credentials or insufficient permissions.';
          }
        });
    } else {
      this.error = 'Please fill out the form correctly.';
    }
  }

  openPopup() {
    this.show = true;
  }
}

export class signIn {
  userName: String;
  password: String;
  constructor() {
    this.userName = '';
    this.password = '';
  }
}
