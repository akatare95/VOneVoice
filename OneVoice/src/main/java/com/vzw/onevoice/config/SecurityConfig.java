package com.vzw.onevoice.config;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

import com.vzw.onevoice.security.XSSFilter;

/**
 * @author Harpreet Singh Gumber
 * @version : 1.0
 * 
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
//	@Autowired
//	private SSOSecurityFilter ssoSecurityFilter;
//
//	@Autowired
//	private SSOAuthenticationEntryPoint ssoAuthenticationEntryPoint;
//
//	@Autowired
//	private SSOAuthenticationProvider ssoAuthenticationProvider;

	@Autowired
	private XSSFilter xssFilter;
	

	@Bean(name = "authenticationManager")
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		// Required to have the Security Context available across
		// child threads spawn by the parent thread (in those
		// functionalities where parallel calling is supported).
		SecurityContextHolder
		.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHREADLOCAL);

		//auth.authenticationProvider(ssoAuthenticationProvider);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		RequestMatcher csrfRequestMatcher = new RequestMatcher() {
			  			  
			  // Disable CSFR protection on the following URLs:
				private AntPathRequestMatcher[] requestMatchers = {
					new AntPathRequestMatcher("/**/index"),
					
					new AntPathRequestMatcher("/**/status"), //this is not JS page so it wont include CSRF token.
					new AntPathRequestMatcher("/**/logout")};

				
			  public boolean matches(HttpServletRequest request) {
			    // If the request match one url the CSFR protection will be disabled
			    for (AntPathRequestMatcher rm : requestMatchers) {
			      if (rm.matches(request)) { return false; }
			    }
			    return true;
			  } // method matches
			};
		
		// Required to have the Security Context available across
		// child threads spawn by the parent thread (in those
		// functionalities where parallel calling is supported).
		SecurityContextHolder
			.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHREADLOCAL);
		
		http
		.headers().frameOptions().disable()
		.and()
		//CSRF token handling
		.csrf()
			.csrfTokenRepository(csrfTokenRepository())
			.requireCsrfProtectionMatcher(csrfRequestMatcher)
			.and();
		//other security configuration
//		.authorizeRequests()
//				.antMatchers("/secure/**", "/api/**")
//				.permitAll()
//				// FIXME: This should be authenticated and not permit all
//				.and()
//				.addFilterBefore(ssoSecurityFilter,
//						UsernamePasswordAuthenticationFilter.class)
//				.authenticationProvider(ssoAuthenticationProvider)
//				.exceptionHandling()
//				.authenticationEntryPoint(ssoAuthenticationEntryPoint);

		http.addFilterBefore(xssFilter, WebAsyncManagerIntegrationFilter.class);
//		http.addFilterAfter(csrfHeaderFilter, CsrfFilter.class);
		http
	      .csrf().disable();
	}
	
	/**
	 * By default Spring Security provides a token with name X-SRF-TOKEN, but AngularJS
	 * by default expect other token as mentioned in the below function. This function set
	 * the same token parameter name in the header of the response.
	 * 
	 * @return CsrfTokenRepository
	 */
	private CsrfTokenRepository csrfTokenRepository() {
		  HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
		  repository.setHeaderName("X-XSRF-TOKEN");
		  return repository;
		}
}
