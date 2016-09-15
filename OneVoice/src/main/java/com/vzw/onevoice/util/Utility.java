/**
 * 
 */
package com.vzw.onevoice.util;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.codec.binary.Base64;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.multipart.MultipartFile;

import com.vzw.onevoice.security.SecurityUser;

/**
 * Contains generic utility methods to be used across the aplication
 * 
 * @author c0bhan3
 * @version 1.0
 *
 */
public final class Utility {
	private static final String HEADER_X_FORWARDED_FOR = "X-FORWARDED-FOR";
	private static final String DOT = ".";
	private static final char COMMA = ',';

	/**
	 * Read the "X-FORWARDED-FOR" header from the request and returns the
	 * client's IP Address
	 * 
	 * @param request
	 * @return IP address
	 */
	public static String getOriginatorIPAddress(final HttpServletRequest request) {
		String remoteAddr = request.getRemoteAddr();
		final String x;
		
		if ((x = request.getHeader(HEADER_X_FORWARDED_FOR)) != null) {
			remoteAddr = x;
			final Integer commaIndex = remoteAddr.indexOf(COMMA);
			if (commaIndex > -1) {
				remoteAddr = remoteAddr.substring(0, commaIndex);
			}
		}
		return remoteAddr;
	}

	/**
	 * Fetches the client's session id and returns it back.
	 * 
	 * @param request
	 * @return
	 */
	public static String getSessionId(final HttpServletRequest request) {
		final HttpSession session = request.getSession(false);
		if (session != null) {
			return session.getId();
		}
		return null;
	}


	/**
	 * Returns the security user from security context
	 * 
	 * @return
	 */
	private static SecurityUser getSecurityUser() {
		final Authentication authData = SecurityContextHolder.getContext()
				.getAuthentication();
		if (authData == null) {
			return null;
		}
		final SecurityUser principal = (SecurityUser) authData.getPrincipal();
		return principal;
	}

	/**
	 * Reads the header from the request and returns the value
	 * 
	 * @param request
	 * @param headerName
	 * @return
	 */
	public static String getHeaderValue(final HttpServletRequest request,
			final String headerName) {
		return request.getHeader(headerName);
	}

	/**
	 * Generates a transaction id to be passed to service layer for every
	 * transaction. Combination of current time in miliseconds, session id & app
	 * name
	 * 
	 * @param sessionId
	 * @return
	 */
	public static String getTransactionId(final String sessionId) {
		//This logic is provided by the service team to generate the transaction id.
		Random n = new Random();
		return String.valueOf(n.nextInt(1000))+String.valueOf(new Date().getTime());		
	}

	/**
	 * Encodes the uploaded file into Base 64 string
	 * 
	 * @param file
	 * @return
	 * @throws FileUploadException
	 */
	public static String encodeFileToString(final MultipartFile file)
			throws FileUploadException {
		try {
			final String encodedfile = new String(Base64.encodeBase64(file.getBytes()));
			return encodedfile;
		} catch (FileNotFoundException e) {
			throw new FileUploadException(
					"Exception occured while uploading file ", e);
		} catch (IOException e) {
			throw new FileUploadException(
					"Exception occured while uploading file ", e);
		}
	}

	/**
	 * Returns the logged-in user's username
	 * 
	 * @return
	 */
	public static String getUsername() {
		final SecurityUser securityUser = getSecurityUser();
		if(securityUser != null) {
			return securityUser.getUsername();
		}
		return null;
	}

	/**
	 * Returns the file extension (part after the last ".")
	 * @param fullFileName
	 * @return
	 */
	public static String getFileExtension(final String fullFileName) {
		if(fullFileName == null) {
			return null;
		}
		final int dotIndex = fullFileName.lastIndexOf(DOT);
		return fullFileName.substring(dotIndex + 1, fullFileName.length());
	}
	
	
	/**
	 * 
	 * @param phoneNumber 
	 * @return String without hyphen.
	 */
	public static String removeHyphen(String phoneNumber) {
		return phoneNumber.replaceAll("[\\s\\-()]", "");
	}

}