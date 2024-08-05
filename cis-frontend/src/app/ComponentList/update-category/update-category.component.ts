import { Component, OnInit } from '@angular/core';
import { Categories } from '../../Classes/categories';
import { CategoryServiceService } from '../../Services/category-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit{

  show=false; 
  categories:Categories
  categoryId:bigint;

  constructor(private categoryService:CategoryServiceService,private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.categoryId=this.route.snapshot.params['categoryId'];
    this.categories=new Categories();
    this.categoryService.fetchCategoryById(this.categoryId).subscribe(data=>{
      this.categories=data;
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.categoryService.updateCategory(this.categoryId,this.categories).subscribe(data=>{
      this.openPopup();
    },
    error=>console.log(error));
  }
  openPopup(){
    this.show=true;
  }

}
