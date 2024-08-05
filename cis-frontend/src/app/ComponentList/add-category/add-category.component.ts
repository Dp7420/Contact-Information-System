import { Component } from '@angular/core';
import { Categories } from '../../Classes/categories';
import { CategoryServiceService } from '../../Services/category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  show=false;
  categories:Categories=new Categories();

  constructor(private categoryService:CategoryServiceService, private router:Router){}


  onSubmit(){
    console.log(this.categories);
    this.createdCategory();
    this.openPopup();

  }

  createdCategory(){
    if(true){
    this.categoryService.createCategory(this.categories).subscribe(data=>{
      console.log(data);
    })
    console.log("User added successfully.");
    } else {
      // If form is not valid, do nothing
      console.log("User not added. Please correct the form errors.");
  }
  }
  openPopup(){
    this.show=true;
    // this.goToUsersList();
  }
}
