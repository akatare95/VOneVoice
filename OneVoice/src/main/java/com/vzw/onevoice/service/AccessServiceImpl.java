package com.vzw.onevoice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import

com.vzw.onevoice.dto.request.AccessRequestListRequest;
import com.vzw.onevoice.dto.response.AccessRequest;
import

com.vzw.onevoice.dto.response.AccessRequestListResponse;
import com.vzw.onevoice.enums.AccessRequestStatus;

@Component
public class

AccessServiceImpl implements AccessService {


	// TODO Implement createAccessRequest
	//List of Access Requests for argument
	public AccessRequestListResponse createAccessRequest(AccessRequestListRequest request) {
		AccessRequestListResponse response = new AccessRequestListResponse();

		response.setStatus("SUCCESS");
		response.setAccessRequestList(getAddedAccessRequests(request));
		return response;
	}
	
	@Override
	//Single Access Requests for argument
	public AccessRequestListResponse createAccessRequest(AccessRequest requestBody) {
		AccessRequestListResponse response = new AccessRequestListResponse();
		response.setStatus("SUCCESS");
		response.setAccessRequestList(getAddedAccessReq(requestBody));
		return response;
	}
	
	// TODO Implement getAddedAccessReq
	//List of Access Requests for argument
	private List<AccessRequest> getAddedAccessRequests(AccessRequestListRequest requestBody) {
		// TODO Get the passed in data from request and send it back as
		// response.
		return null;
	}
	
	// TODO Implement getAddedAccessReq
	//Single Access Requests for argument
	private List<AccessRequest> getAddedAccessReq(AccessRequest requestBody) {
		// TODO Get the passed in data from request and send it back as
		// response.
		List<AccessRequest> reqList=new ArrayList<AccessRequest>();
		requestBody.setStatus(AccessRequestStatus.PENDING);
		System.out.println("request body="+requestBody.toString());
		reqList.add(requestBody);
		System.out.println("request list="+reqList.toString());
		return reqList;
	}

	// TODO Read and write requests to an included project file to persist
	@Override
	public AccessRequestListResponse getAccessRequestList() {
		AccessRequestListResponse response = new AccessRequestListResponse();
		response.setStatus("SUCCESS");
		response.setAccessRequestList(getAccessReqDummyList());
		return response;
	}

	private List<AccessRequest> getAccessReqDummyList() {
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
				
				AccessRequest areq3 = new AccessRequest();
				areq3.setAccessLevel("Admin");
				areq3.setLevel("Agent Schedules");
				areq3.setModuleName("After Call Survey");
				areq3.setReason("Testing 12 Testing...");
				areq3.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq3);
				
			

				AccessRequest areq4 = new AccessRequest();
				areq4.setAccessLevel("Modify");
				areq4.setLevel("Add");
				areq4.setModuleName("ANI Block");
				areq4.setReason("Testing 12 Testing...");
				areq4.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq4);
		

		
				AccessRequest areq5 = new AccessRequest();
				areq5.setAccessLevel("Admin");
				areq5.setLevel("Current");
				areq5.setModuleName("IMT");
				areq5.setReason("Testing 12 Testing...");
				areq5.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq5);
				
				AccessRequest areq6 = new AccessRequest();
				areq6.setAccessLevel("Admin");
				areq6.setLevel("Current");
				areq6.setModuleName("Messaging");
				areq6.setReason("Testing 12 Testing...");
				areq6.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq6);
				
				
				AccessRequest areq7 = new AccessRequest();
				areq7.setAccessLevel("Modify");
				areq7.setLevel("Retail Routing");
				areq7.setModuleName("Messaging");
				areq7.setReason("Testing 12 Testing...");
				areq7.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq7);
				
				AccessRequest areq8 = new AccessRequest();
				areq8.setAccessLevel("IT User");
				areq8.setLevel("Campaign");
				areq8.setModuleName("Outbound");
				areq8.setReason("Testing 12 Testing...");
				areq8.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq8);
				
				AccessRequest areq9 = new AccessRequest();
				areq9.setAccessLevel("Admin");
				areq9.setLevel("Files");
				areq9.setModuleName("Outbound");
				areq9.setReason("This is also a reason");
				areq9.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq9);
				

				AccessRequest areq10 = new AccessRequest();
				areq10.setAccessLevel("Admin");
				areq10.setLevel("Config");
				areq10.setModuleName("Vocab");
				areq10.setReason("Testing 12 Testing...");
				areq10.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq10);
				
				
				AccessRequest areq11 = new AccessRequest();
				areq11.setAccessLevel("Bus. User");
				areq11.setLevel("Re-Record");
				areq11.setModuleName("Vocab");
				areq11.setReason("Testing 12 Testing...");
				areq11.setStatus(AccessRequestStatus.PENDING);
				accessRequestList.add(areq11);
				
				return accessRequestList;	
			}

}
