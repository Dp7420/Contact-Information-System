package com.www.contactinformationsystem.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.www.contactinformationsystem.entity.UserDetail;
import com.www.contactinformationsystem.service.UserDetailsService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/cis/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserDetailsController {
	@Autowired
	private UserDetailsService userDetailsService;

	@GetMapping("/login")
	public UserDetail loginUser(@RequestParam String emailId, @RequestParam String password) {
		return userDetailsService.loginUser(emailId, password);
	}
//	http://localhost:7777//api/user/login?userId=Dp7420&password=123

	@PutMapping("/changePassword/{id}")
	public ResponseEntity<?> changePassword(@PathVariable Long memberId, @RequestBody Map<String, String> request) {
		try {
			String oldPassword = request.get("oldPassword");
			String newPassword = request.get("newPassword");
			UserDetail updateUser = userDetailsService.changePassword(memberId, oldPassword, newPassword);
			return ResponseEntity.ok(updateUser);
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/getUser")
	public List<UserDetail> getAllUser() {
		return userDetailsService.getAllUser();
	}

	@GetMapping("/fetchUser/{memberId}")
	public UserDetail fetchUser(@PathVariable Long memberId) {
		return userDetailsService.fetchUser(memberId);
	}

	@PostMapping("/addUser")
	public UserDetail addUser(@RequestBody UserDetail user) {
		return userDetailsService.AddUser(user);
	}

	@DeleteMapping("/deleteUser/{memberId}")
	public UserDetail deleteUser(@PathVariable Long memberId) {
		return userDetailsService.deleteUser(memberId);
	}

	@PutMapping("/update/{memberId}")
	public UserDetail updateUser(@PathVariable Long memberId, @RequestBody UserDetail userDetail) {
		return userDetailsService.updateUser(memberId, userDetail);
	}
}
