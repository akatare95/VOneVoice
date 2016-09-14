package com.vzw.onevoice.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;


/**
 * The Spring security context class, will hold all the information relevant to
 * the logged-in user.
 * 
 * @author Harpreet Singh Gumber
 * @version 1.0
 * 
 */
public class SecurityUser extends User {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String role;
	private String firstName;
	private String lastName;
	private List<Integer> authorizedSiteids;
	private String profileId;
	private String clientId;
	private String ipAddress;
//	private EcpdInfoResponseForSession ecpdInfo;
//	private RetrieveResponse v4bInfo;

	public SecurityUser(final String username, final String password,
			final boolean enabled, final boolean accountNonExpired,
			final boolean credentialsNonExpired,
			final boolean accountNonLocked,
			final Collection<? extends GrantedAuthority> authorities
//			,
//			final EcpdInfoResponseForSession ecpdInfoObj,
//			final RetrieveResponse v4bInfoObj
			) {
		super(username, password, enabled, accountNonExpired,
				credentialsNonExpired, accountNonLocked, authorities);

//		this.setEcpdInfo(ecpdInfoObj);
//		this.setV4bInfo(v4bInfoObj);
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public List<Integer> getAuthorizedSiteids() {
		return authorizedSiteids;
	}

	public void setAuthorizedSiteids(List<Integer> authorizedSiteids) {
		this.authorizedSiteids = authorizedSiteids;
	}

	public String getProfileId() {
		return profileId;
	}

	public void setProfileId(String profileId) {
		this.profileId = profileId;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}
}