package com.www.contactinformationsystem.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class CardDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cardId;
	private String cardType;
	private String name;
	private String companyName;
	private String designation;
	private String department;
	private Long residentialNumber;
	private Long mobileNumber;
	private String emaiId;
	private Long fax;
	private String officeEmailId;
	private String address;
	private String officeWebSite;
	private String branches;
	private String partner;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_ct_id")
	private Categories categories;
	
}
