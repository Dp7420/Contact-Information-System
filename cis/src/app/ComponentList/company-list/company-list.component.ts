import { Component, OnInit } from '@angular/core';
import { CompanyInformation } from '../../Classes/company-information';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Categories } from '../../Classes/categories';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{
  companyInformation:CompanyInformation[];
  isAdmin : boolean = false;
  searchResult:CompanyInformation[]=[];
  searchQuery: String='';


  constructor(private router:Router,private authService:AuthServiceService){}
  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.getAllCompanyInformation();
  }

  getAllCompanyInformation(){
    this.authService.getAllCompanyInformations().subscribe(data=>{
      this.companyInformation=data;
      this.searchResult=data;
      console.log(data);
    });
  }

  updateCompanyInfo(cid:bigint){
    this.router.navigate(['/updateCompanyInfo',cid]);
  }

  deleteCompanyInformation(cid:bigint){
    this.authService.deleteCompanyInformation(cid).subscribe(data=>{
      console.log(data);
      this.getAllCompanyInformation();
      this.router.navigate(['/companyList']);
    },error=>console.log(error));
  }

  fullCompanyInformation(cid:bigint){
    this.router.navigate(['/companyInfo',cid]);
  }

  onSearch(event:Event):void{
    event.preventDefault();
    if(this.searchQuery){
      this.searchResult = this.companyInformation.filter(company=>
        company.cname.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }else{
      this.searchResult=this.companyInformation;
    }
  }
}
