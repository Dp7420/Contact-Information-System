import { Component, OnInit } from '@angular/core';
import { Organization } from '../../Classes/organization';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrl: './organization-list.component.css'
})
export class OrganizationListComponent implements OnInit{
  organization:Organization[];
  isAdmin: boolean = false;
  searchQuery: string = '';
  searchResults: Organization[] = [];

  constructor(private authService:AuthServiceService, private router:Router){}

  ngOnInit(){
    this.isAdmin = this.authService.isAdmin();
    this.getAllOrganizationInformation();
  }
  getAllOrganizationInformation(){
    this.authService.getAllorganizationInfo().subscribe(data=>{
      this.organization=data;
      this.searchResults=data;
    })
  }

  updateOrganizationInfo(organizationCode:bigint){
    this.router.navigate(['/updateOrganization',organizationCode]);
  }

  deleteOrganizationInformation(organizationCode:bigint){
    this.authService.deleteOrgById(organizationCode).subscribe(data=>{
      console.log(data);
      this.getAllOrganizationInformation();
      this.router.navigate(['/organizationList']);

    })
  }

  ViewAllOrganizationInformation(organizationCode:bigint){
    this.router.navigate(['/organizationInfo',organizationCode]);
  }
  onSearch(event:Event):void{
    event.preventDefault();
    if(this.searchQuery){
      this.searchResults=this.organization.filter(org=>
        org.organizationName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }else{
      this.searchResults=this.organization;
    }
  }
}
