import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetail } from '../Classes/user-detail';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private baseUrl="http://localhost:8080/cis/api/user";
  constructor(private httpClient:HttpClient) { }


  
  getUserList(): Observable<UserDetail[]>{
    return this.httpClient.get<UserDetail[]>(`${this.baseUrl}/getUser`);
  }

  createUser(userDetails: UserDetail):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/addUser`,userDetails);
  }

  fetchUserById(memeberId:bigint):Observable<UserDetail>{
    return this.httpClient.get<UserDetail>(`${this.baseUrl}/fetchUser/${memeberId}`);
  }

  updateUser(memberId:bigint ,UserDetails:UserDetail):Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/update/${memberId}`,UserDetails);
  }

  deleteUserData(memberId:bigint):Observable<object>{
  return this.httpClient.delete(`${this.baseUrl}/deleteUser/${memberId}`);
  }

isLoggedIn(){
  let token=localStorage.getItem('userData');
  if(token!=null){
    return true;
  }else{
    return false;
  }
}
logout(){
  localStorage.removeItem('userData');
  return true;
}

getToken(){
  return localStorage.getItem("userData");
}
IsAuthentication(){
  if(localStorage.getItem('userData')!=null){
    return true;
  }else{
    return false;
  }
}
}
