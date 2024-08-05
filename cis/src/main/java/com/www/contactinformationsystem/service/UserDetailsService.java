package com.www.contactinformationsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.www.contactinformationsystem.entity.UserDetail;
import com.www.contactinformationsystem.exception.ResourceNotFoundException;
import com.www.contactinformationsystem.repo.UserDetailsRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserDetailsService {
	@Autowired
	private UserDetailsRepo repo;

//	@Autowired
//	private JwtService jwtService;
//
//	@Autowired
//	private AuthenticationManager authenticationManager;
//
//	@Autowired
//	private PasswordEncoder encoder;

//	@Autowired
//	private UserDetailImp2 detailImp2;
//	
//	public ResponseEntity<?> signUp(signUp request){
//		if(repo.existsByEmail(request.getEmail())) {
//			return ResponseEntity.badRequest().body("Error: Email Already Exists..!");
//		}
//		if(repo.existsByMobile(request.getMobile())) {
//			return ResponseEntity.badRequest().body("Error: Mobile Already Exists..!");
//		}
//		
//		UserDetail user=new UserDetail();
//		user.setAddress(request.getAddress());
//		user.setEmail(request.getEmail());
//		user.setMobile(request.getMobile());
//		user.setName(request.getName());
//		user.setPassword(encoder.encode(request.getPassword()));
//		user.setTelephone(request.getTelephone());
//		user.setRole(Role.USER);
//		repo.save(user);
//		
//		return ResponseEntity.ok("Registration Successfull.");
//	}

	public UserDetail loginUser(String emailId, String password) {
		return repo.findByEmailAndPassword(emailId, password);
	}

	public UserDetail changePassword(Long memberId, String oldPassword, String newPassword) {
		Optional<UserDetail> userOptional = repo.findById(memberId);
		if (userOptional.isPresent()) {
			UserDetail user = userOptional.get();
			if (user.getPassword().equals(oldPassword)) { // Verify old password
				user.setPassword(newPassword);
				return repo.save(user);
			} else {
				throw new IllegalArgumentException("Old password is incorrect");
			}
		} else {
			throw new EntityNotFoundException("User not found");
		}
	}

//	public UserDetail findByUserIdAndPassword(String userId,String password) {
//		return userDetailsRepo.findByUserIdAndPassword(userId,password);
//	}

	public List<UserDetail> getAllUser() {
		return repo.findAll();
	}

	public UserDetail fetchUser(Long memberId) {
		return repo.findById(memberId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with memberId: " + memberId));
	}

	public UserDetail deleteUser(Long memberId) {
		Optional<UserDetail> o = repo.findById(memberId);
		if (o.isPresent()) {
			repo.deleteById(memberId);
			return o.get();
		} else
			return null;

	}
//	public String deleteUser(Long memberId) {
//		 userDetailsRepo.deleteById(memberId);
//		 return "Record Deleted Successfully";
//	}

	public UserDetail updateUser(Long memberId, UserDetail userDetail) {
		Optional<UserDetail> optionalUser = repo.findById(memberId);
		if (optionalUser.isPresent()) {
			UserDetail existingUser = optionalUser.get();
			if (userDetail.getEmail() != null) {
				existingUser.setEmail(userDetail.getEmail());
			}
			if (userDetail.getAddress() != null) {
				existingUser.setAddress(userDetail.getAddress());
			}
			if (userDetail.getMobile() != null) {
				existingUser.setMobile(userDetail.getMobile());
			}
			if (userDetail.getName() != null) {
				existingUser.setName(userDetail.getName());
			}
			if (userDetail.getTelephone() != null) {
				existingUser.setTelephone(userDetail.getTelephone());
			}
			if (userDetail.getPassword() != null) {
				existingUser.setPassword(userDetail.getPassword());
			}
			return repo.save(existingUser);
		} else {
			// Handle case when user with memberId is not found
			return null;
		}
	}

	public UserDetail AddUser(UserDetail user) {
		return repo.save(user);
	}

}
