package com.www.contactinformationsystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Company_Information {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cId;
	private String cName;
	private String city;
	private String address;
	private String state;
	private int pinCode;
	private Long contactNumber;
	private String webAddress;
	private String eMail;
	@Column(length = 3)
	private String active;
}
