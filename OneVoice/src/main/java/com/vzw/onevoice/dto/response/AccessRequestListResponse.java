package com.vzw.onevoice.dto.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonAutoDetect
@JsonIgnoreProperties(ignoreUnknown = true)
public class AccessRequestListResponse extends AbstractBaseResponse {
	List<AccessRequest> accessRequestList;

	public List<AccessRequest> getAccessRequestList() {
		return accessRequestList;
	}

	public void setAccessRequestList(List<AccessRequest> accessRequestList) {
		this.accessRequestList = accessRequestList;
	}
	
}
