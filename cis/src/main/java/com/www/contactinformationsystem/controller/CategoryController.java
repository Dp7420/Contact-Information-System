package com.www.contactinformationsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.www.contactinformationsystem.entity.Categories;
import com.www.contactinformationsystem.service.CategoryService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping("/admin/category/addCategory")
	public ResponseEntity<?> addCategory(@RequestBody Categories categories) {
		return ResponseEntity.ok(categoryService.addCategory(categories));
	}
	
	@GetMapping("/user/category/allCategory")
	public List<Categories> getAllCategory(){
		return categoryService.getAllCategories();
	}
	
	@GetMapping("/user/category/fetch/{categoryId}")
	public Categories fetchCategoryById(@PathVariable Long categoryId) {
		return categoryService.fetchById(categoryId);
	}
	
	@PutMapping("/admin/category/update/{categoryId}")
	public Categories updateCategory(@PathVariable Long categoryId, @RequestBody Categories categories) {
		return categoryService.updateCategories(categoryId, categories);
	}
	
	@DeleteMapping("/admin/category/deleteCategory/{categoryId}")
	public Categories deleteById(@PathVariable Long categoryId) {
		return categoryService.deleteCategoryById(categoryId);
	}
	
}
