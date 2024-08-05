package com.www.contactinformationsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.www.contactinformationsystem.entity.Company_Information;
import com.www.contactinformationsystem.service.CompanyService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CompanyController {
	@Autowired
	private CompanyService companyService;
	
	@PostMapping("/admin/company/saveCompany")
	public Company_Information saveCompanyInfo(@RequestBody Company_Information company_Information) {
		return companyService.saveCompInformation(company_Information);
	}
	
	@GetMapping("/user/company/getAllCompanyInfo")
	public List<Company_Information> getAllComInformations(){
		return companyService.getAllCompanyInfo();
	}
	
	@GetMapping("/user/company/fetch/{cId}")
	public Company_Information fetchById(@PathVariable Long cId) {
		return companyService.fetchById(cId);
	}
	
	@PutMapping("/admin/company/updateCompanyInfo/{cId}")
	public Company_Information updateCompanyInfo(@PathVariable Long cId, @RequestBody Company_Information ci) {
		return companyService.updateCompanyInfo(cId, ci);
	}
	
	@DeleteMapping("/admin/company/deleteComoanyInfo/{cId}")
	public Company_Information deleteCompany_Information(@PathVariable Long cId) {
		return companyService.deleteById(cId);
	}
}
