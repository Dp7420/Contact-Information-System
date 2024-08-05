package com.www.contactinformationsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.www.contactinformationsystem.entity.Organization;

@Repository
public interface OrganizationRepo extends JpaRepository<Organization, Long>{

}
