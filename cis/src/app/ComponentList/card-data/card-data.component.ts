import { Component, OnInit } from '@angular/core';
import { CardDetail } from '../../Classes/card-detail';
import { CardServiceService } from '../../Services/card-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrl: './card-data.component.css'
})
export class CardDataComponent implements OnInit{
  cardDetails:CardDetail=new CardDetail();
  cardId:bigint;
  constructor(private cardService:CardServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.cardId=this.route.snapshot.params['cardId'];
    this.cardService.getCardById(this.cardId).subscribe(data=>{
      this.cardDetails=data;
      console.log(data);
    })    
  }
}
