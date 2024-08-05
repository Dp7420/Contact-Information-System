package com.www.contactinformationsystem.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.www.contactinformationsystem.entity.CardDetail;

@Repository
public interface CardDetailRepo extends JpaRepository<CardDetail, Long>{

	@Query("SELECT c.cardType FROM CardDetail c")
    List<String> getCardTypes();
}
