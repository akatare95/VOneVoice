package com.vzw.onevoice.config;

import org.dozer.DozerBeanMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author : Apoorve Katare
 * @version: 1.0
 */
@Configuration
public class ServiceConfig {
	private static final Logger LOGGER = LoggerFactory
			.getLogger(ServiceConfig.class);

	
	@Bean
	public DozerBeanMapper dozer() {
		DozerBeanMapper dozer = new DozerBeanMapper();
		return dozer;
	}
	
	
	
}