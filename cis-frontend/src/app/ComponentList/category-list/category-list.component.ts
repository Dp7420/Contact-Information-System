import { Component, OnInit } from '@angular/core';
import { Categories } from '../../Classes/categories';
import { CategoryServiceService } from '../../Services/category-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'] // Corrected to 'styleUrls' from 'styleUrl'
})
export class CategoryListComponent implements OnInit {
  categories: Categories[];
  isAdmin: boolean = false;
  searchQuery: string = '';
  searchResults: Categories[] = [];
  paginatedCategories: Categories[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  constructor(
    private categoryService: CategoryServiceService,
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.categoryList();
  }

  categoryList(): void {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categories = data;
      this.searchResults = data;
      this.calculateTotalPages();
      this.updatePaginatedCategories();
    });
  }

  updateCategory(categoryId: bigint): void {
    this.router.navigate(['/updateCategory', categoryId]);
  }

  deleteCategory(categoryId: bigint): void {
    this.categoryService.deleteCategory(categoryId).subscribe(data => {
      console.log(data);
      this.categoryList();
    });
  }

  categoriesDataView(categoryId: bigint): void {
    this.router.navigate(['/categoryData', categoryId]);
  }

  onSearch(event: Event): void {
    event.preventDefault();
    if(this.searchQuery){
      this.searchResults= this.categories.filter(data=>
        data.categoryName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.currentPage = 1;
      this.calculateTotalPages();
      this.updatePaginatedCategories();
    }else{
      this.searchResults=this.categories;
    }

  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.searchResults.length / this.itemsPerPage);
    this.totalPagesArray = Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  updatePaginatedCategories(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCategories = this.searchResults.slice(start, end);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedCategories();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedCategories();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedCategories();
  }
}
