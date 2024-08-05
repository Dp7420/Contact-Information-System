package com.www.contactinformationsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.www.contactinformationsystem.entity.Admin;
import com.www.contactinformationsystem.entity.Role;
import com.www.contactinformationsystem.repo.AdminRepo;
import com.www.contactinformationsystem.request.signIn;
import com.www.contactinformationsystem.request.signUp;
import com.www.contactinformationsystem.response.LoginResponse;

@Service
public class AuthenticationService {

	@Autowired
	private AdminRepo repo;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private UserDetailsImp userDetailsImp;

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	public ResponseEntity<?> signUp(signUp request) {
		if (repo.existsByEmail(request.getEmail())) {
			return ResponseEntity.badRequest().body("Email Id Already Exsited.." + request.getEmail());
		}
		if (repo.existsByUserName(request.getUserName())) {
			return ResponseEntity.badRequest().body("UserName  Already Exsited.." + request.getUserName());
		}

		Admin admin = new Admin();
		admin.setEmail(request.getEmail());
		admin.setName(request.getName());
		admin.setPassword(encoder.encode(request.getPassword()));
		admin.setUserName(request.getUserName());

		if (request.getRole().name() != null && request.getRole().name().equals("ADMIN"))
			admin.setRole(Role.ADMIN);

		admin.setRole(Role.ADMIN);

		repo.save(admin);
		return ResponseEntity.ok("Signup Successfully.");
	}

	public ResponseEntity<?> signin(signIn request) {
		try {
			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);

			Admin admin = repo.findByUserName(request.getUserName())
					.orElseThrow(() -> new IllegalArgumentException("Invalid Email..!"+request.getUserName()));

			UserDetailsImp userDetails = (UserDetailsImp) userDetailsImp.loadUserByUsername(request.getUserName());

			String token = jwtService.generateToken(userDetails);

			LoginResponse response = new LoginResponse();
			response.setUserName(admin.getUserName());
			response.setName(admin.getName());
			response.setEmail(admin.getEmail());
			response.setToken(token);
			response.setMessage("Login Successfully.");
			response.setPassword(admin.getPassword());
			response.setRole(admin.getRole());

			return ResponseEntity.ok(response);
		} catch (BadCredentialsException e) {
			e.printStackTrace();
			return ResponseEntity.status(401).body("Error: Invalid email or password!");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("Error: Something went wrong!");
		}
	}
}
