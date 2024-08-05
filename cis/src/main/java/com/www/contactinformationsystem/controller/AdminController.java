package com.www.contactinformationsystem.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.www.contactinformationsystem.entity.Admin;
import com.www.contactinformationsystem.request.signIn;
import com.www.contactinformationsystem.request.signUp;
import com.www.contactinformationsystem.service.AdminService;
import com.www.contactinformationsystem.service.AuthenticationService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@Autowired
	private AuthenticationService authenticationService;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody signIn request) {
		return ResponseEntity.ok(authenticationService.signin(request));
	}

	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody signUp request) {
		return ResponseEntity.ok(authenticationService.signUp(request));
	}
	
//	@PostMapping("/user")
//	public ResponseEntity<?> Userregister(@RequestBody signUp request) {
//		return ResponseEntity.ok(detailsService.signUp(request));
//	}
//	http://localhost:7777/admin/login?adminUsername=123&adminPassword=Dp

	@PutMapping("/changePassword/{id}")
	public ResponseEntity<?> changePassword(@PathVariable Long id, @RequestBody Map<String, String> request) {
		try {
			String oldPassword = request.get("oldPassword");
			String newPassword = request.get("newPassword");
			Admin updatedAdmin = adminService.changePassword(id, oldPassword, newPassword);
			return ResponseEntity.ok(updatedAdmin);
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

}
