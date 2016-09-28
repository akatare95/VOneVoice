package com.vzw.onevoice.service;

import com.vzw.onevoice.dto.request.AccessRequestListRequest;
import com.vzw.onevoice.dto.response.AccessRequestListResponse;

public interface AccessService {
	AccessRequestListResponse getAccessRequestList();
	
	AccessRequestListResponse createAccessRequest(AccessRequestListRequest requestBody);
	
}
