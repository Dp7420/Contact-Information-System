import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import { CompanyInformation } from '../../Classes/company-information';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css'
})
export class CompanyInfoComponent implements OnInit{
  companyInformation:CompanyInformation=new CompanyInformation();
  cid:bigint

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.cid=this.route.snapshot.params['cid'];
    this.authService.fetchCompanyById(this.cid).subscribe(data=>{
      this.companyInformation=data;
      console.log(data);
    },
    error=>console.log(error));
  }

}
