import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDetail } from '../Classes/card-detail';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  private baseURL="http://localhost:8080/api/admin/card";
  constructor(private httpClient:HttpClient) { }

  getCardList():Observable<CardDetail[]>{
    return this.httpClient.get<CardDetail[]>(`http://localhost:8080/api/user/card/getAllCard`);
  }

  getCardTypes():Observable<any>{
    return this.httpClient.get(`http://localhost:8080/api/user/card/getAllCardTypes`);
  }

  createCard(cardDetail:CardDetail):Observable<object>{
    return this.httpClient.post(`http://localhost:8080/api/admin/card/addCard`,cardDetail);
  }

  getCardById(cardId:bigint):Observable<CardDetail>{
    return this.httpClient.get<CardDetail>(`http://localhost:8080/api/user/card/fetch/${cardId}`);
  }

  updateCardData(cardId:bigint, cardDetail:CardDetail):Observable<object>{
    return this.httpClient.put(`http://localhost:8080/api/admin/card/updateCard/${cardId}`,cardDetail);
  }

  deleteCardById(cardId:bigint):Observable<object>{
    return this.httpClient.delete(`http://localhost:8080/api/admin/card/deleteCard/${cardId}`);
  }

  cardTyes(){
    return [
      {
        id:1, name:"Business"
      },
      {
        id:2, name:"Advertising"
      },
      {
        id:3, name:"Branding"
      },
      {
        id:4, name:"Service"
      },
      {
        id:5, name:"Hospitality"
      }
    ]
  }
}
