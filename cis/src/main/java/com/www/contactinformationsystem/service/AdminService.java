package com.www.contactinformationsystem.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.www.contactinformationsystem.entity.Admin;
import com.www.contactinformationsystem.repo.AdminRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AdminService {
	@Autowired
	private AdminRepo adminRepo;

//	public Admin login(String adminUsername, String adminPassword) {
//		return adminRepo.findByAdminUserIdAndPassword(adminUsername, adminPassword);
//	}

	public Admin changePassword(Long id, String oldPassword, String newPassword) {
		Optional<Admin> adminOptional = adminRepo.findById(id);
		if (adminOptional.isPresent()) {
			Admin admin = adminOptional.get();
			if (admin.getPassword().equals(oldPassword)) { // Verify old password
				admin.setPassword(newPassword);
				return adminRepo.save(admin);
			} else {
				throw new IllegalArgumentException("Old password is incorrect");
			}
		} else {
			throw new EntityNotFoundException("Admin not found");
		}
	}

//	
//	public void changePassword(String adminUsername, String oldPassword, String newPassword) {
//        Admin admin = adminRepository.findByAdminUsername(adminUsername);
//        if (admin == null) {
//            throw new UsernameNotFoundException("Admin not found");
//        }
//
//        if (!passwordEncoder.matches(oldPassword, admin.getAdminPassword())) {
//            throw new UnauthorizedException("Invalid old password");
//        }
//
//        admin.setAdminPassword(passwordEncoder.encode(newPassword));
//        adminRepository.save(admin);
//    }
}
