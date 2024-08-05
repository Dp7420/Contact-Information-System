import { Component, OnInit } from '@angular/core';
import { Organization } from '../../Classes/organization';
import { AuthServiceService } from '../../Services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrl: './organization-info.component.css'
})
export class OrganizationInfoComponent implements OnInit{
    organization:Organization;
    organizationCode:bigint;

    constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

    ngOnInit(): void {
      this.organization=new Organization();
      this.organizationCode=this.route.snapshot.params['organizationCode'];
      this.authService.fetchOrganizationById(this.organizationCode).subscribe(data=>{
        this.organization=data;
      },
      error=>console.log(error));
    }
}
