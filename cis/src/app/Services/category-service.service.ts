import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../Classes/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private baseURL="http://localhost:8080/api/user/category/allCategory";
  constructor(private httpClient:HttpClient) { }

  getCategoryList():Observable<Categories[]>{
    return this.httpClient.get<Categories[]>(`http://localhost:8080/api/user/category/allCategory`);
  }

  createCategory(categories:Categories):Observable<object>{
    return this.httpClient.post(`http://localhost:8080/api/admin/category/addCategory`,categories);
  }

  deleteCategory(categoryId:bigint):Observable<object>{
    return this.httpClient.delete(`http://localhost:8080/api/admin/category/deleteCategory/${categoryId}`);
  }

  updateCategory(categoryId:bigint ,categories:Categories):Observable<object>{
    return this.httpClient.put(`http://localhost:8080/api/admin/category/update/${categoryId}`,categories);
  }

  fetchCategoryById(categoryId:bigint):Observable<Categories>{
    return this.httpClient.get<Categories>(`http://localhost:8080/api/user/category/fetch/${categoryId}`);
  }

}
