import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../../Classes/user-detail';
import { UserDetailsService } from '../../Services/user-details.service';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit{
  UserDetail:UserDetail=new UserDetail();
  memberId:bigint;
  isAdmin: boolean = false;
  constructor(private userService:UserDetailsService,private route:ActivatedRoute, private authService:AuthServiceService){}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.memberId=this.route.snapshot.params['memberId'];
    this.userService.fetchUserById(this.memberId).subscribe(data=>{
      this.UserDetail=data;
    });
  }
  

}
