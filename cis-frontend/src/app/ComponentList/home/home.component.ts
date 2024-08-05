import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../Services/admins.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  
  store:any;
  constructor(){
    const data=localStorage.getItem('adminData');
    const data1=localStorage.getItem('userData');
    if(localStorage.getItem('adminData')!=null){
      this.store=JSON.parse(data);
    }else if(data1!=null){
      this.store=JSON.parse(localStorage.getItem('userData'));
    }
  }
}
