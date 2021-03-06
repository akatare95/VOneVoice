package com.vzw.onevoice.dto.response;

import com.vzw.onevoice.enums.AccessRequestStatus;

public class AccessRequest {
	
	String moduleName;
	String level;
	String accessLevel;
	String reason;
	AccessRequestStatus status;
	
	public String getModuleName() {
		return moduleName;
	}
	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getAccessLevel() {
		return accessLevel;
	}
	public void setAccessLevel(String accessLevel) {
		this.accessLevel = accessLevel;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public AccessRequestStatus getStatus() {
		return status;
	}
	public void setStatus(AccessRequestStatus status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "AccessRequest [moduleName=" + moduleName + ", level=" + level + ", accessLevel=" + accessLevel
				+ ", reason=" + reason + ", status=" + status + "]";
	}
	public AccessRequest(String moduleName, String level, String accessLevel, String reason,
			AccessRequestStatus status) {
		this.moduleName = moduleName;
		this.level = level;
		this.accessLevel = accessLevel;
		this.reason = reason;
		this.status = status;
	}
	public AccessRequest() {
		super();
	}
	
	
	
}
