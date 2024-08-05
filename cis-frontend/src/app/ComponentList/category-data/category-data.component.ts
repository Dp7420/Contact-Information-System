import { Component, OnInit } from '@angular/core';
import { Categories } from '../../Classes/categories';
import { CategoryServiceService } from '../../Services/category-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-data',
  templateUrl: './category-data.component.html',
  styleUrl: './category-data.component.css'
})
export class CategoryDataComponent implements OnInit{
  categories:Categories=new Categories();
  categoryId:bigint;

  constructor(private categoryService:CategoryServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.categoryId=this.route.snapshot.params['categoryId'];
    this.categoryService.fetchCategoryById(this.categoryId).subscribe(data=>{
      this.categories=data;
    })
  }
}
