package com.vzw.onevoice.dto.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.vzw.onevoice.dto.base.AbstractBaseDTO;

/**
 * The abstract base DTO for all the request DTOs.
 * 
 * @author Apoorve Katare
 * @version 1.0
 *
 */
@JsonAutoDetect
@JsonIgnoreProperties(ignoreUnknown=true)
public abstract class AbstractBaseRequestDTO extends AbstractBaseDTO {

	private String v4bId;
	private List<String> groupIds;

	@JsonIgnore
	private String featureName;

	/**
	 * @return the v4bId
	 */
	public String getV4bId() {
		return v4bId;
	}

	/**
	 * @param v4bId
	 *            the v4bId to set
	 */
	public void setV4bId(String v4bId) {
		this.v4bId = v4bId;
	}

	/**
	 * @return the groupIds
	 */
	public List<String> getGroupIds() {
		return groupIds;
	}

	/**
	 * @param groupIds
	 *            the groupIds to set
	 */
	public void setGroupIds(final List<String> groupIds) {
		this.groupIds = groupIds;
	}

	/**
	 * @return the featureName
	 */
	public String getFeatureName() {
		return featureName;
	}

	/**
	 * @param featureName
	 *            the featureName to set
	 */
	public void setFeatureName(String featureName) {
		this.featureName = featureName;
	}
}