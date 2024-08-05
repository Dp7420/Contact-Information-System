package com.www.contactinformationsystem.request;

import com.www.contactinformationsystem.entity.Role;

import lombok.Data;

@Data
public class signUp {
	private String userName;
	private String password;
	private Role role;
	private String email;
	private String name;
	private String mobile;
	private String address;
	private Long telephone;
}
