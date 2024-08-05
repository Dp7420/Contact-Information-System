package com.www.contactinformationsystem.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.www.contactinformationsystem.entity.Admin;
import com.www.contactinformationsystem.entity.Role;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {
	@Query("SELECT a FROM Admin a WHERE a.userName = ?1 AND a.password = ?2")
	public Admin findByUserNameAndPassword(String userName, String password);

//	Admin findByAdminUsername(String adminUsername);

	Optional<Admin> findByUserName(String userName);

	Optional<Admin> findByEmail(String email);

	Boolean existsByUserName(String userName);

//	Boolean existsByMobile(String mobile);

	Boolean existsByEmail(String email);

	Admin findByRole(Role role);
}
