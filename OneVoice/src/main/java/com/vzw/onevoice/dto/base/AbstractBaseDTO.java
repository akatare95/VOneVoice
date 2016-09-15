package com.vzw.onevoice.dto.base;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The abstract base DTO for all the request / response DTOs.
 * 
 * @author Apoorve Katare
 * @version 1.0
 *
 */
@JsonAutoDetect
@JsonIgnoreProperties(ignoreUnknown=true)
public abstract class AbstractBaseDTO {
	
	@JsonIgnore
	private String clientIPAddress;

	@JsonIgnore
	private String sessionId;

	public String getClientIPAddress() {
		return clientIPAddress;
	}

	public void setClientIPAddress(String clientIPAddress) {
		this.clientIPAddress = clientIPAddress;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
}