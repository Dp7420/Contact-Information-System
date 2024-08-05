import { Component, OnInit } from '@angular/core';
import { CardDetail } from '../../Classes/card-detail';
import { ActivatedRoute, Router } from '@angular/router';
import { CardServiceService } from '../../Services/card-service.service';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrl: './update-card.component.css'
})
export class UpdateCardComponent implements OnInit{

  show=false;  
  cardDetail:CardDetail;
  cardType:any={};
  cardId:bigint;
  constructor(private route:ActivatedRoute, private cardService:CardServiceService,private router:Router){}

  ngOnInit(): void {
    this.cardType=this.cardService.cardTyes();
    this.cardDetail=new CardDetail();
    this.cardId=this.route.snapshot.params['cardId'];
    this.cardService.getCardById(this.cardId).subscribe(data=>{
      this.cardDetail=data;
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.cardService.updateCardData(this.cardId,this.cardDetail).subscribe(data=>{
      this.openPopup();
    })
  }

  openPopup(){
    this.show=true;
  } 

}
