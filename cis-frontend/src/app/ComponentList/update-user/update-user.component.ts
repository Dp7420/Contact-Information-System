import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../../Classes/user-detail';
import { UserDetailsService } from '../../Services/user-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
  userDetails:UserDetail=new UserDetail();
  memberId:bigint;
  show=false;

  constructor(private userService:UserDetailsService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.memberId=this.route.snapshot.params['memberId'];
    this.userService.fetchUserById(this.memberId).subscribe(data=>{
      this.userDetails=data;
    },
    error=>console.log(error));


  }

  onSubmit(){
    this.userService.updateUser(this.memberId,this.userDetails).subscribe(data=>{
      this.openPopup();
    },
    error=>console.log(error));
  }

  openPopup(){
    this.show=true;
  }

  goToUserDetail(){
    this.router.navigate(['/userDetails']);
  }
}
