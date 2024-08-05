package com.www.contactinformationsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

@SpringBootApplication
//@EntityScan(basePackageClasses = { ContactInformationSystemApplication.class, Jsr310JpaConverters.class })
public class ContactInformationSystemApplication extends SpringBootServletInitializer{
	
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ContactInformationSystemApplication.class);
    }


	public static void main(String[] args) {
		SpringApplication.run(ContactInformationSystemApplication.class, args);
	}
	
	
}
