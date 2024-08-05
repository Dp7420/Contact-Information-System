package com.www.contactinformationsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.www.contactinformationsystem.entity.Company_Information;

@Repository
public interface CompanyRepo extends JpaRepository<Company_Information, Long>{

}
