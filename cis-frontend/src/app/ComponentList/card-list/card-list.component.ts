import { Component, OnInit } from '@angular/core';
import { CardDetail } from '../../Classes/card-detail';
import { CardServiceService } from '../../Services/card-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit{

  cardDetail:CardDetail[];
  isAdmin : boolean = false;
  searchQuery: String ='';
  searchResult: CardDetail[];


  constructor(private cardservice:CardServiceService,private router: Router, private authService:AuthServiceService){}
  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.cardList();
  }

  cardList(){
    this.cardservice.getCardList().subscribe(data=>{
      console.log(data);
      this.cardDetail=data;
      this.searchResult=data;
      this.router.navigate(['/cardList']);
    });
  }

  updateCard(cardId:bigint){
    this.router.navigate(['/updateCard',cardId]);
  }

  deleteCard(cardId:bigint){
    this.cardservice.deleteCardById(cardId).subscribe(data=>{
      this.cardList();
      this.router.navigate(['/cardList']);
    })

  }
  cardDetailss(cardId:bigint){
    this.router.navigate(['/cardData',cardId]);
  }

  onSearch(event:Event):void{
    event.preventDefault();
    if(this.searchQuery){
      this.searchResult = this.cardDetail.filter(card=>
        card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }else{
      this.searchResult=this.cardDetail;
    }
  }
}
