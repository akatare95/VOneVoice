package com.vzw.onevoice.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

/**
 * Filter to prevent XSS attacks. Uses {@link XSSRequestWrapper} to implement
 * the logic
 * 
 * @author c0bhan3
 * @version 1.0
 * @see {@link XSSRequestWrapper}
 *
 */
@Component
public class XSSFilter extends GenericFilterBean {
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain)
			throws IOException, ServletException {
		chain.doFilter(new XSSRequestWrapper((HttpServletRequest) request),
				response);
	}

}