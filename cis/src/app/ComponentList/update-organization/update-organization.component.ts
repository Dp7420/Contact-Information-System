import { Component, OnInit } from '@angular/core';
import { Organization } from '../../Classes/organization';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-update-organization',
  templateUrl: './update-organization.component.html',
  styleUrl: './update-organization.component.css'
})
export class UpdateOrganizationComponent implements OnInit{

  show=false;
  organization:Organization;
  organizationCOde:bigint;
  constructor(private route:ActivatedRoute, private authService:AuthServiceService,private router:Router){}

  ngOnInit(): void {
    this.organizationCOde=this.route.snapshot.params['organizationCode'];
    this.organization=new Organization();
    this.authService.fetchOrganizationById(this.organizationCOde).subscribe(data=>{
      this.organization=data;
    },
  error=>console.log(error));
  }

  onSubmit(){
    this.authService.updateOrganizationInformation(this.organizationCOde,this.organization).subscribe(data=>{
      this.openPopup();
    })    
  }

  openPopup(){
    this.show=true;
  }

}
