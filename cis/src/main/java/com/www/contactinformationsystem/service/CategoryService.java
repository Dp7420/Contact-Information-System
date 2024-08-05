package com.www.contactinformationsystem.service;

import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.www.contactinformationsystem.entity.Categories;
import com.www.contactinformationsystem.exception.ResourceNotFoundException;
import com.www.contactinformationsystem.repo.CategoryRepo;

@Service
public class CategoryService {
	
	private static final Logger logger = LoggerFactory.getLogger(CategoryService.class);
	
	@Autowired
	private CategoryRepo categoryRepo;

	public ResponseEntity<Categories> addCategory(Categories categories) {
		logger.error("Hello");
		return ResponseEntity.ok(categoryRepo.save(categories));
	}

	public List<Categories> getAllCategories() {
		return categoryRepo.findAll();
	}

	public Categories fetchById(Long categoryId) {
		return categoryRepo.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Category Not Found with This Id:" + categoryId));
	}

	public Categories updateCategories(Long categoryId, Categories categories) {
	    try {
	        Optional<Categories> optionalCategory = categoryRepo.findById(categoryId);
	        if (optionalCategory.isPresent()) {
	            Categories existingCategory = optionalCategory.get();
	            if (categories.getCategoryName() != null) {
	                existingCategory.setCategoryName(categories.getCategoryName());
	            }
	            if (categories.getShortName() != null) {
	                existingCategory.setShortName(categories.getShortName());
	            }
	            return categoryRepo.save(existingCategory);
	        } else {
	            // Log a message indicating that the category with the provided categoryId was not found
	            System.out.println("Category with ID " + categoryId + " not found.");
	            return null;
	        }
	    } catch (Exception e) {
	        // Log any exceptions that occur during the update process
	        System.err.println("An error occurred while updating category: " + e.getMessage());
	        e.printStackTrace(); // Print stack trace for detailed error information
	        return null;
	    }
	}


	public Categories deleteCategoryById(Long categoryId) {
		Optional<Categories> ob = categoryRepo.findById(categoryId);
		if (ob.isPresent()) {
			categoryRepo.deleteById(categoryId);
			return ob.get();
		} else
			return null;
	}
}
