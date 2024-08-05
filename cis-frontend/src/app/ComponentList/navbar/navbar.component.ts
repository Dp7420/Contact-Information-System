import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isAdmin: boolean=false;
  hideSidebar(): void {
    this.isSidebarVisible = false;
  }
isSidebarVisible:  boolean = false;
toggleSidebar(): void {
  this.isSidebarVisible = !this.isSidebarVisible;
}
  store:any;
  constructor(private router:Router, private authService:AuthServiceService){
    const username=JSON.parse(localStorage.getItem('userName'));
    if(username!=null){
      this.store=username;
    }
    console.log(username);
    
  }
  ngOnInit(): void {
    this.isAdmin=JSON.parse(this.authService.getRole());
  }

  changePassword(){
    this.router.navigate(['/changePassword'])
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/user']);89    
  }

}
