package com.www.contactinformationsystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
@Table(name = "admin", uniqueConstraints = { @UniqueConstraint(columnNames = "userName"),
		@UniqueConstraint(columnNames = "email") })
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	private String userName;

	@NotBlank
	private String password;

	@Enumerated(EnumType.STRING)
	private Role role;

	@NotBlank
	@Email
	private String email;

	@NotBlank
	private String name;
}
