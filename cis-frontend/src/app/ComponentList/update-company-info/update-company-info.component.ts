import { Component, OnInit } from '@angular/core';
import { CompanyInformation } from '../../Classes/company-information';
import { AuthServiceService } from '../../Services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-company-info',
  templateUrl: './update-company-info.component.html',
  styleUrl: './update-company-info.component.css'
})
export class UpdateCompanyInfoComponent implements OnInit{

  show=false;
  companyInformation:CompanyInformation;
  cid:bigint
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.cid=this.route.snapshot.params['cid'];
  this.companyInformation=new CompanyInformation();
  this.authService.fetchCompanyById(this.cid).subscribe(data=>{
    this.companyInformation=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateCompanyInformation(this.cid,this.companyInformation).subscribe(data=>{
      this.openPopup();
    },error=>console.log(error));
  }

  openPopup(){
    this.show=true;
  }

}
