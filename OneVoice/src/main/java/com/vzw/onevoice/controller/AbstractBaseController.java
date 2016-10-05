package com.vzw.onevoice.controller;

import java.util.List;
import java.util.ListIterator;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.vzw.onevoice.dto.response.APPResponse;
import com.vzw.onevoice.dto.response.AbstractBaseResponse;
import com.vzw.onevoice.util.IIntegrationConst;
import com.vzw.onevoice.util.RestClientErrorMessageMapper;

/**
 * Base controller for all the REST Controllers exposed for FE integration.
 * 
 * @author Apoorve Katare
 * @version 1.0
 * 
 */
@CrossOrigin
public abstract class AbstractBaseController {
	protected static final String RESPONSE_SUCCESS = "OK";
	protected static final String RESPONSE_MESSAGE_SUCCESS = "Operation was successful";
	protected static final String RESPONSE_ERROR = "ERROR";
	protected static final String RESPONSE_MESSAGE_ERROR = "Error performing operation";
	protected static final String DEFAULT_JSON_RESPONSE_TAG = "serviceResponse";

	/**
	 * @param responseBody
	 * @param statusCode
	 * @param statusMessage
	 */
	protected void populateResponseBodyWithSuccessInfo(
			APPResponse responseBody, String statusCode, String statusMessage) {
		responseBody.getAppHeader().setStatusCode(statusCode);
		responseBody.getAppHeader().setStatusMessage(statusMessage);
	}

	/**
	 * @param responseBody
	 * @param statusCode
	 * @param statusMessage
	 */
	protected void populateResponseBodyWithErrorInfo(APPResponse responseBody,
			String statusCode, String statusMessage) {
		responseBody.getAppHeader().setStatusCode(statusCode);
		responseBody.getAppHeader().setStatusMessage(RestClientErrorMessageMapper.
				getErrorMessage(statusCode));
	}
	
	/**
	 * 
	 * @param responseBody
	 * @param serviceResponse
	 */
	protected void populateResponseHeaderWithStaus(APPResponse responseBody,
			AbstractBaseResponse serviceResponse) {

		final String responseCode = serviceResponse.getErrorCode();
		if (null == responseCode
				|| responseCode.equalsIgnoreCase(IIntegrationConst.SERVICE_CODE_SUCCESS)
				|| responseCode.equalsIgnoreCase(IIntegrationConst.SERVICE_CODE_SUCCESS2)){
			responseBody.getAppHeader().setStatusCode(RESPONSE_SUCCESS);
			responseBody.getAppHeader().setStatusMessage(RESPONSE_MESSAGE_SUCCESS);
		}else {
			responseBody.getAppHeader().setStatusCode(RESPONSE_ERROR);
			responseBody.getAppHeader().setStatusMessage(RestClientErrorMessageMapper.
					getErrorMessage(responseCode));
		}
	}

	
}
