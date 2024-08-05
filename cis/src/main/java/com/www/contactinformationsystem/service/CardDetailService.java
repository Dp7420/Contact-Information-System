package com.www.contactinformationsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.www.contactinformationsystem.entity.CardDetail;
import com.www.contactinformationsystem.exception.ResourceNotFoundException;
import com.www.contactinformationsystem.repo.CardDetailRepo;

@Service
public class CardDetailService {
	@Autowired
	private CardDetailRepo cardDetailRepo;

	public List<CardDetail> getAllCard() {
		return cardDetailRepo.findAll();
	}

	public CardDetail addCard(CardDetail cardDetail) {
		return cardDetailRepo.save(cardDetail);
	}

	public CardDetail fetchCardById(Long cardId) {
		return cardDetailRepo.findById(cardId)
				.orElseThrow(() -> new ResourceNotFoundException("Card Not Found with This cardId:" + cardId));
	}

	public CardDetail deleteCardById(Long cardId) {
		Optional<CardDetail> ob = cardDetailRepo.findById(cardId);
		if (ob.isPresent()) {
			// System.out.println("gfgf");
			cardDetailRepo.deleteById(cardId);
			return ob.get();
		} else
			return null;
	}

	public CardDetail updateCategories(Long cardId, CardDetail cardDetail) {
		try {
			Optional<CardDetail> optionalCard = cardDetailRepo.findById(cardId);
			if (optionalCard.isPresent()) {
				CardDetail existingCard = optionalCard.get();
				if (cardDetail.getAddress() != null) {
					existingCard.setAddress(cardDetail.getAddress());
				}
				if (cardDetail.getBranches() != null) {
					existingCard.setBranches(cardDetail.getBranches());
				}
				if (cardDetail.getCardType() != null) {
					existingCard.setCardType(cardDetail.getCardType());
				}
				if (cardDetail.getCompanyName() != null) {
					existingCard.setCompanyName(cardDetail.getCompanyName());
				}
				if (cardDetail.getDepartment() != null) {
					existingCard.setDepartment(cardDetail.getDepartment());
				}
				if (cardDetail.getDesignation() != null) {
					existingCard.setDesignation(cardDetail.getDesignation());
				}
				if (cardDetail.getEmaiId() != null) {
					existingCard.setEmaiId(cardDetail.getEmaiId());
					;
				}
				if (cardDetail.getFax() != null) {
					existingCard.setFax(cardDetail.getFax());
				}
				if (cardDetail.getMobileNumber() != null) {
					existingCard.setMobileNumber(cardDetail.getMobileNumber());
				}
				if (cardDetail.getName() != null) {
					existingCard.setName(cardDetail.getName());
				}
				if (cardDetail.getOfficeEmailId() != null) {
					existingCard.setOfficeEmailId(cardDetail.getOfficeEmailId());
				}
				if (cardDetail.getOfficeWebSite() != null) {
					existingCard.setOfficeWebSite(cardDetail.getOfficeWebSite());
				}
				if (cardDetail.getPartner() != null) {
					existingCard.setPartner(cardDetail.getPartner());
				}
				return cardDetailRepo.save(existingCard);
			} else {
				// Log a message indicating that the category with the provided categoryId was
				// not found
				System.out.println("Category with ID " + cardId + " not found.");
				return null;
			}
		} catch (Exception e) {
			// Log any exceptions that occur during the update process
			System.err.println("An error occurred while updating category: " + e.getMessage());
			e.printStackTrace(); // Print stack trace for detailed error information
			return null;
		}
	}
	
	public List<String> getCardTypes(){
		return cardDetailRepo.getCardTypes();
	}

}
