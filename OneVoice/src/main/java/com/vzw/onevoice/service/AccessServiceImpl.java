package com.vzw.onevoice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.vzw.onevoice.dto.response.AccessRequest;
import com.vzw.onevoice.dto.response.AccessRequestListResponse;
import com.vzw.onevoice.enums.AccessRequestStatus;

@Component
public class AccessServiceImpl implements AccessService {

	public AccessRequestListResponse getAccessRequestList() {
		
		List<AccessRequest> accessRequestList = new ArrayList<AccessRequest>();
		
		AccessRequest areq1 = new AccessRequest();
		areq1.setAccessLevel("Modify");
		areq1.setLevel("Agent Schedule");
		areq1.setModuleName("After Call Survey");
		areq1.setReason("Testing Testing...");
		areq1.setStatus(AccessRequestStatus.APPROVED);
		accessRequestList.add(areq1);
		
		AccessRequest areq2 = new AccessRequest();
		areq2.setAccessLevel("Delete");
		areq2.setLevel("Add");
		areq2.setModuleName("After Call Survey");
		areq2.setReason("Testing 12 Testing...");
		areq2.setStatus(AccessRequestStatus.PENDING);
		accessRequestList.add(areq2);
		
		AccessRequestListResponse resp = new AccessRequestListResponse();
		resp.setAccessRequestList(accessRequestList);
		
		return resp;
	}

}
