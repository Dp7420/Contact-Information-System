package com.www.contactinformationsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.www.contactinformationsystem.entity.Company_Information;
import com.www.contactinformationsystem.exception.ResourceNotFoundException;
import com.www.contactinformationsystem.repo.CompanyRepo;

@Service
public class CompanyService {
	@Autowired
	private CompanyRepo companyRepo;

	public Company_Information saveCompInformation(Company_Information company_Information) {
		return companyRepo.save(company_Information);
	}

	public List<Company_Information> getAllCompanyInfo() {
		return companyRepo.findAll();
	}

	public Company_Information fetchById(Long cId) {
		return companyRepo.findById(cId)
				.orElseThrow(() -> new ResourceNotFoundException("Company Information Not Found with This Id:" + cId));
	}

	public Company_Information updateCompanyInfo(Long cId, Company_Information ci) {
		Optional<Company_Information> ob = companyRepo.findById(cId);
		if (ob.isPresent()) {
			Company_Information ex = ob.get();
			if (ci.getAddress() != null)
				ex.setAddress(ci.getAddress());
			if (ci.getActive() != null)
				ex.setActive(ci.getActive());
			if (ci.getCity() != null)
				ex.setCity(ci.getCity());
			if (ci.getCName() != null)
				ex.setCName(ci.getCName());
			if (ci.getContactNumber() != null)
				ex.setContactNumber(ci.getContactNumber());
			if (ci.getEMail() != null)
				ex.setEMail(ci.getEMail());
			if (ci.getPinCode() != 0)
				ex.setPinCode(ci.getPinCode());
			if (ci.getState() != null)
				ex.setState(ci.getState());
			if (ci.getWebAddress() != null)
				ex.setWebAddress(ci.getWebAddress());
			return companyRepo.save(ex);
		} else
			return null;
	}

	public Company_Information deleteById(Long cId) {
		Optional<Company_Information> ob = companyRepo.findById(cId);
		if (ob.isPresent()) {
			companyRepo.deleteById(cId);
			return ob.get();
		} else
			return null;
	}

}
