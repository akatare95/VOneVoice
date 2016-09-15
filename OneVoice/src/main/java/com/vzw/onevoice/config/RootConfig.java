package com.vzw.onevoice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;

/**
 * The root / parent class for boot straping spring java configuration classes
 * 
 * @author c0bhan3
 * @version 1.0
 *
 */
@Configuration
@Import(value = { 
		SecurityConfig.class })
@PropertySource("classpath:config.properties")
public class RootConfig {
	//
}