package com.vzw.onevoice.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vzw.onevoice.dto.request.AccessRequestListRequest;
import com.vzw.onevoice.dto.response.APPResponse;
import com.vzw.onevoice.dto.response.AccessRequestListResponse;
import com.vzw.onevoice.service.AccessService;

@Controller
public class MainController extends AbstractBaseController {

	@Autowired
	AccessService service;

	@RequestMapping(value = "/modules", method = RequestMethod.POST, headers = "Accept=application/json", produces = { "application/json" })
	@ResponseBody
	public APPResponse accessRequestList
		(@Valid @RequestBody final AccessRequestListRequest requestBody) {
		final APPResponse responseBody = new APPResponse();
		AccessRequestListResponse serviceResponse = service.getAccessRequestList();
		responseBody.getAppResult().put(DEFAULT_JSON_RESPONSE_TAG,
				serviceResponse);
		populateResponseBodyWithSuccessInfo(responseBody, RESPONSE_SUCCESS, RESPONSE_MESSAGE_SUCCESS);
		return responseBody;
	}
	
}