package com.www.contactinformationsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.www.contactinformationsystem.entity.UserDetail;

@Repository
public interface UserDetailsRepo extends JpaRepository<UserDetail, Long>{
	
	@Query("SELECT u FROM UserDetail u WHERE u.email = ?1 AND u.password = ?2")
	public UserDetail findByEmailAndPassword(String email,String password);
	
	
//	Optional<UserDetail> findByUserName(String userName);

//	Optional<UserDetail> findByEmail(String email);

//	Boolean existsByUserName(String userName);

//	Boolean existsByMobile(String mobile);
//
//	Boolean existsByEmail(String email);
//
//	Admin findByRole(Role role);
}
