import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetail } from '../../Classes/user-detail';
import { UserDetailsService } from '../../Services/user-details.service';
import { AuthServiceService } from '../../Services/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userDetail:UserDetail=new UserDetail();
  errorMessage:String='';
  error:string = '';
   successMessage:string = '';
   show=false;
   data:any;
 
 
  regForm = new FormGroup({
   uname:new FormControl("john",[Validators.required,Validators.minLength(5)]),
   password: new FormControl('', [Validators.required, Validators.minLength(5)])
   // email:new FormControl("naik@gmai",[Validators.required,Validators.email,Validators.minLength(8)])
  })

  constructor(private router:Router, private http:HttpClient,private userService:UserDetailsService,private authService:AuthServiceService){}

  userLogin(){
    this.http.get(`http://localhost:8080/cis/api/user/login?emailId=${this.userDetail.emailId}&password=${this.userDetail.password}`)
    .subscribe((Response:any)=>{
      
      if(Response!=null){
        // const bAdmin=JSON.parse(Response);
        if(Response.emailId==this.userDetail.emailId && Response.password==this.userDetail.password){
          // const data= this.userService.isLoggedIn()
          // this.authService.setRole(Response.role);
          // alert(Response.emailId)
          localStorage.clear();
          localStorage.setItem("userData",JSON.stringify(Response));
          this.data=Response;
          this.authService.setRole(Response.role);
          this.openPopup();
        }else{
          alert(' Invalid emailId And password');
        }
      }else{
        alert('login Fail..!');
    }
    })
  }

  openPopup(){
    this.show=true;
  }
}
