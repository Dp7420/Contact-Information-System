import { Component, OnInit } from '@angular/core';
import { CompanyInformation } from '../../Classes/company-information';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company-info',
  templateUrl: './add-company-info.component.html',
  styleUrl: './add-company-info.component.css'
})
export class AddCompanyInfoComponent implements OnInit{
  show=false;
  companyInformation:CompanyInformation;
  constructor(private authService:AuthServiceService, private router:Router){}
  ngOnInit(): void {
    this.companyInformation=new CompanyInformation();
  }

  onSubmit(){
    this.authService.createCompanyInformation(this.companyInformation).subscribe(data=>{
      console.log(data);
      this.openPopup();
    },
    error=>console.log(error));
  }
  openPopup(){
    this.show=true;
    // this.goToUsersList();
  } 

}
