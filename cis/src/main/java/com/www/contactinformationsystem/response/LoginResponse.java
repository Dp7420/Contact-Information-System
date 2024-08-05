package com.www.contactinformationsystem.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.www.contactinformationsystem.entity.Role;

import lombok.Data;

@Data
public class LoginResponse {
	private String userName;
	private String email;
	private String name;
	@JsonIgnore
	private String password;
	private String token;
	private String message;
	private Role role;

}
