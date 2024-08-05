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

import com.www.contactinformationsystem.entity.CardDetail;
import com.www.contactinformationsystem.service.CardDetailService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CardDetailController {
	@Autowired
	private CardDetailService cardDetailService;

	@GetMapping("/user/card/getAllCard")
	public List<CardDetail> getAllCard() {
		return cardDetailService.getAllCard();
	}

	@GetMapping("/user/card/fetch/{cardId}")
	public CardDetail fetchById(@PathVariable Long cardId) {
		return cardDetailService.fetchCardById(cardId);
	}

	@PostMapping("/admin/card/addCard")
	public CardDetail addCard(@RequestBody CardDetail cardDetail) {
		return cardDetailService.addCard(cardDetail);
	}

	@PutMapping("/admin/card/updateCard/{cardId}")
	public CardDetail updateCard(@PathVariable Long cardId, @RequestBody CardDetail cardDetail) {
		return cardDetailService.updateCategories(cardId, cardDetail);
	}

	@DeleteMapping("/admin/card/deleteCard/{cardId}")
	public CardDetail deleteCardById(@PathVariable Long cardId) {
		return cardDetailService.deleteCardById(cardId);
	}

	@GetMapping("/user/card/getAllCardTypes")
	public List<String> getCards() {
		return cardDetailService.getCardTypes();

	}
}
