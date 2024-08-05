package com.www.contactinformationsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.www.contactinformationsystem.entity.Organization;
import com.www.contactinformationsystem.exception.ResourceNotFoundException;
import com.www.contactinformationsystem.repo.OrganizationRepo;

@Service
public class OrganizationService {
	@Autowired
	private OrganizationRepo organizationRepo;

	public Organization addOrganizationInfo(Organization organization) {
		return organizationRepo.save(organization);
	}

	public Organization fetchById(Long organizationCode) {
		return organizationRepo.findById(organizationCode).orElseThrow(() -> new ResourceNotFoundException(
				"Organization Details Not found with THis code" + organizationCode));
	}

	public List<Organization> getAllOrganizationInfo() {
		return organizationRepo.findAll();
	}

	public Organization updateOrganizationInfo(Long organizationCode, Organization o) {
		Optional<Organization> ob = organizationRepo.findById(organizationCode);
		if (ob.isPresent()) {
			Organization ex = ob.get();
			if (o.getAddress1() != null)
				ex.setAddress1(o.getAddress1());
			if (o.getAddress2() != null)
				ex.setAddress2(o.getAddress2());
			if (o.getOrganizationName() != null)
				ex.setOrganizationName(o.getOrganizationName());
			if(o.getFax()!=null)
				ex.setFax(o.getFax());
			if(o.getGrams()!=null)
				ex.setGrams(o.getGrams());
			if (o.getCECode() != null)
				ex.setCECode(o.getCECode());
			if (o.getCERNo() != null)
				ex.setCERNo(o.getCERNo());
			if (o.getCSTNo() != 0)
				ex.setCSTNo(o.getCSTNo());
			if (o.getCSTRate() != null)
				ex.setCSTRate(o.getCSTRate());
			if (o.getDateOfReg() != null)
				ex.setDateOfReg(o.getDateOfReg());
			if (o.getDRCLNo() != null)
				ex.setDRCLNo(o.getDRCLNo());
			if (o.getEmail() != null)
				ex.setEmail(o.getEmail());
			if (o.getExciseDutyRate() != null)
				ex.setExciseDutyRate(o.getExciseDutyRate());
			if (o.getEXIMCode() != null)
				ex.setEXIMCode(o.getEXIMCode());
			if (o.getFormDate() != null)
				ex.setFormDate(o.getFormDate());
			if (o.getGSTNo() != 0)
				ex.setGSTNo(o.getGSTNo());
			if (o.getGSTRate() != null)
				ex.setGSTRate(o.getGSTRate());
			if (o.getInceptionDate() != null)
				ex.setInceptionDate(o.getInceptionDate());
			if (o.getLogo() != null)
				ex.setLogo(o.getLogo());
			if (o.getPANEXT() != null)
				ex.setPANEXT(o.getPANEXT());
			if (o.getPANGIR() != null)
				ex.setPANGIR(o.getPANGIR());
			if (o.getPhoneNo() != null)
				ex.setPhoneNo(o.getPhoneNo());
			if (o.getPinCode() != 0)
				ex.setPinCode(o.getPinCode());
			if (o.getPlace() != null)
				ex.setPlace(o.getPlace());
			if (o.getRegisterNo() != null)
				ex.setRegisterNo(o.getRegisterNo());
			if (o.getTDSAccount() != null)
				ex.setTDSAccount(o.getTDSAccount());
			if (o.getTeleEx() != null)
				ex.setTeleEx(o.getTeleEx());

			return organizationRepo.save(ex);
		} else
			return null;
	}

	public Organization deleteOrganizationInfo(Long organizationCode) {
		Optional<Organization> ob = organizationRepo.findById(organizationCode);
		if (ob.isPresent()) {
			organizationRepo.deleteById(organizationCode);
			return ob.get();
		} else
			return null;
	}
}
