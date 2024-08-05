package com.www.contactinformationsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.www.contactinformationsystem.entity.Categories;

@Repository
public interface CategoryRepo extends JpaRepository<Categories, Long>{

}
