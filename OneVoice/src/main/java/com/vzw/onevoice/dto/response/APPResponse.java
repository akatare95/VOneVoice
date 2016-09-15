package com.vzw.onevoice.dto.response;

import java.util.HashMap;
import java.util.Map;

/**
 * Class used to send all JSON responses from Controllers to the UI. The
 * response would be divided into 2 sections: Header {@link APPResponseHeader} &
 * Data {@link APPResponseData}
 * 
 * @author c0bhan3
 * @version: 1.0
 * 
 */

public class APPResponse {

	private APPResponseHeader appHeader;
	private Map<String, Object> appResult = new HashMap<String, Object>();

	public APPResponse() {
		super();
		appResult = new HashMap<String, Object>();
		appHeader = new APPResponseHeader();
	}

	/**
	 * @return the appHeader
	 */
	public APPResponseHeader getAppHeader() {
		return appHeader;
	}

	/**
	 * @param appHeader
	 *            the appHeader to set
	 */
	public void setAppHeader(APPResponseHeader appHeader) {
		this.appHeader = appHeader;
	}

	public Map<String, Object> getAppResult() {
		return appResult;
	}

	public void setAppResult(Map<String, Object> appResult) {
		this.appResult = appResult;
	}

	/**
	 * @return the appResult
	 */

}