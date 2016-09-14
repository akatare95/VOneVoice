package com.vzw.onevoice.initializer;

import java.util.EnumSet;

import javax.servlet.DispatcherType;
import javax.servlet.Filter;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import com.vzw.onevoice.config.RootConfig;

/**
 * Class to initialize the Spring MVC & Servlet container context
 * 
 * @author c0bhan3
 * @version 1.0
 *
 */
public class AppInitializer extends
		AbstractAnnotationConfigDispatcherServletInitializer implements
		WebApplicationInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class[] { RootConfig.class };
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return null;
	}

	@Override
	protected String[] getServletMappings() {
		return new String[] { "/secure/*", "/api/*" };
	}

	protected EnumSet<DispatcherType> getSecurityDispatcherTypes() {
		return EnumSet.of(DispatcherType.REQUEST, DispatcherType.ERROR,
				DispatcherType.ASYNC);
	}

	@Override
	protected Filter[] getServletFilters() {
		return null;
	}
}