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

import com.www.contactinformationsystem.entity.Organization;
import com.www.contactinformationsystem.service.OrganizationService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class OrganizationController {
	@Autowired
	private OrganizationService os;

	@PostMapping("/admin/organization/saveOrganization")
	public Organization addOrganizationInfo(@RequestBody Organization organization) {
		return os.addOrganizationInfo(organization);
	}

	@GetMapping("/user/organization/fetch/{organizationCode}")
	public Organization fetchOrgById(@PathVariable Long organizationCode) {
		return os.fetchById(organizationCode);
	}

	@GetMapping("/user/organization/getAllOrgs")
	public List<Organization> getAllOrgsInfo() {
		return os.getAllOrganizationInfo();
	}

	@PutMapping("/admin/organization/updateOrg/{organizationCode}")
	public Organization updateOrgInfo(@PathVariable Long organizationCode, @RequestBody Organization organization) {
		return os.updateOrganizationInfo(organizationCode, organization);
	}

	@DeleteMapping("/admin/organization/deleteOrg/{organizationCode}")
	public Organization deleteOrgById(@PathVariable Long organizationCode) {
		return os.deleteOrganizationInfo(organizationCode);
	}

}
