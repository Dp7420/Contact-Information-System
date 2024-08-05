package com.www.contactinformationsystem.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Organization {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long organizationCode;
	private String organizationName;
	private String address1;
	private String address2;
	private String place;
	private int pinCode;
	private Long phoneNo;
	private Long teleEx;
	private Long fax;
	private Double grams;
	private String email;
	private Long registerNo;
	private Date dateOfReg;
	private Date inceptionDate;
	private int CSTNo;
	private int GSTNo;
	private Long CECode;
	private Long CERNo;
	private Long DRCLNo;
	private Date FormDate;
	private String logo;
	private String TDSAccount;
	private String PANGIR;
	private String PANEXT;
	private String EXIMCode;
	private Double CSTRate;
	private Double GSTRate;
	private Double ExciseDutyRate;
}
