import { Component, OnInit } from '@angular/core';
import { CardDetail } from '../../Classes/card-detail'; 
import { CardServiceService } from '../../Services/card-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent implements OnInit{

  show=false;
  cardDetail:CardDetail=new CardDetail();
  cardType:any={};
  constructor(private cardService:CardServiceService, private router:Router){}
  ngOnInit(): void {
    this.cardType=this.cardService.cardTyes();  
    
  }
  onSubmit(){
    this.createCard();
    this.openPopup();    
    // this.gotoCardList();
  }
  gotoCardList(){
    this.router.navigate(['/cardList']);
  }

  openPopup(){
    this.show=true;
  } 
  
  createCard(){
    console.log(this.cardDetail);
    this.cardService.createCard(this.cardDetail).subscribe(data=>{
      console.log(data);
     
    },
    error=>console.log(error));
    
  }

}
