/**
 * 
 */
package com.vzw.onevoice.util;

import java.util.Map;
import java.util.TreeMap;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Contains generic utility methods to be used across the application
 * 
 * @author c0bhan3
 * @version 1.0
 * 
 */
public final class RestClientErrorMessageMapper {

	private static final Logger logger = LoggerFactory
			.getLogger(RestClientErrorMessageMapper.class);

	private static Map<String, String> errorCodeMapper = new TreeMap<String, String>();

	static final String UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE = "Sorry, we encountered an unexpected error. Please try again.";
	static final String INVALID_PHONE_NUMBER_ERROR_MESSAGE = "Please enter a valid phone number";
	static final String NARROW_PHONE_SEARCH = "Please narrow your search. There are (0) matching records.";
	static final String USER_NOT_FOUND_GROUP = "User is not found in group.";
	static final String USER_NOT_FOUND_ENTERPRISE = "User is not found in enterprise.";
	static final String IO_ERROR = "Sorry, we encountered an unexpected error. Please try again. If this issue persists, "
			+ "please contact customer service.";
	static final String UNEXPECTED_ERROR_CUSTOMER_SERVICE_MESSAGE = "Sorry, we encountered an unexpected error. Please contact customer service.";
	static final String DONT_RECOGNIZE_CUSTOMER_MESSAGE = "Sorry, we don't recognize one of your customer identifiers. Please contact customer service.";

	static final String HOLIDAY_SCHEDULE_NAME_EXISTS = "The holiday schedule name already exists. Please create a different name.";
	static final String HOLIDAY_SCHEDULE_START_DATE = "The holiday start date must be before the end date.";
	static final String HOLIDAY_SCHEDULE_NOT_FOUND = "The holiday schedule cannot be found.";
	static final String SCHEDULE_REMOVE_FROM_FEATURES = "You must remove this schedule from all features before it can be deleted";

	static final String BUSINESS_SCHEDULE_NAME_EXISTS = "The time schedule name already exists. Please create a different name.";
	static final String BUSINESS_SCHEDULE_NOT_FOUND = "The business schedule cannot be found.";

	static final String USER_GROUP_NOT_ENTERPRISE = "User or Group is not part of an enterprise.";
	static final String SCHEDULE_NAME_EXISTS = "The schedule name already exists. Please select a new name.";
	static final String SCHEDULE_NOT_FOUND = "The schedule cannot be found.";
	static final String START_DATE_BEFORE_END_DATE = "The start date and time must be before the end date and time.";
	static final String EXPIRED_EVENT = "The event is expired. Please update the schedule.";
	static final String ALREADY_ASSIGNED_EXTENSION = "This extension has already been assigned, Please choose an unused extension.";
	static final String ALREADY_USED_NAME = "You are already using this name.  Please enter a unique name and try again.";
	static final String TELEPHONE_NUMBER_NOT_IN_GROUP = "Please enter a telephone number from within your group.";
	static final String DEVICE_NOT_FOUND = "Device was not found. Please modify your search.";
	static final String VALID_PHONE_NUMBER = "Please enter a valid phone number";
	static final String LENGTH_OF_NAME = "The name needs to be between 2 and 20 characters.";
	static final String VALID_VALUE = "Please enter a valid value and try again.";
	static final String INCORRECT_FILE_FORMAT = "Please upload a file in the correct format. Please refer to the instructions.";

	static final String INCOMPLETE_REQUEST_TRY_AGAIN = "We are unable to complete the request. Please try again later.";
	static final String FILE_UPLOAD_INCORRECT_FORMAT = "Please upload a file in the correct format. Please refer to the instructions.";
	static final String INCOMPLETE_REQUEST_CUSTOMER_SERVICE = "We are unable to complete the request. Please contact customer service.";

	static final String CALLING_LINE_ID_GRP_NUMBER_IN_USE = "This number is in use as the group calling line id. It can't be deleted. "
			+ "Please change the group calling line id number and then retry.";
	static final String CALLING_LINE_ID_GRP_NAME_IN_USE = "This name is in use as the group calling line id. It can't be deleted. "
			+ "Please change the group calling line id name and then retry.";
	
	static final String MISSING_START_DATE_TIME = "Missing start date/time for time range.";
	static final String MISSING_END_DATE_TIME = "Missing end date/time for time range.";
	static final String INVALID_START_DATE_TIME = "Invalid start date/time for time range.";
	static final String INVALID_END_DATE_TIME = "Invalid end date/time for time range.";
	static final String INVALID_TIME_RANGE = "Invalid time range.  End date/time must be later than start date/time.";
	static final String SPECIFIC_PHONE_NUMBER =  "At least one specific phone number must be entered unless \"Any private number\" or \"Any unavailable number\" is selected."; 
	static final String NUMBER_OF_SECONDS_TO_WAIT = "The number of seconds to wait before forwarding call must be an integer value >=0 and <= 7200.";
	static final String MAXIMUM_NUMBER_OF_ENTRIES =  "The maximum number of entries allowed in the sim ring list is 10."; 
	static final String INVALID_SELECTIVE_CRITERIA = "Invalid selective criteria name {0}.";
	static final String DEFAULT_SPECIFIC_CALL_FORWARD = "Either default or specific call forward to phone number must be entered before adding call forward list.";
	static final String CALL_FORWARDING_SELECTIVE = "Call Forwarding Selective can not be enabled unless there is at least 1 active criteria.";
	static final String DEFAULT_CALL_FORWARD_PHONE_NUMBER = "Default call forward phone number is required when Call Forwarding Selective is active.";
	
	static final String VIDEO_ASSIGNMENT_URL_ERROR = "Cannot set Video Announcement to URL unless a valid URL is specified.";
	static final String VIDEO_ASSIGNMENT_CUSTOM_ERROR = "Cannot set Video Announcement to Custom unless a valid video file is specified.";
	static final String ANNOUNCEMENT_INTERUPTION_ERROR = "Cannot set Announcement Interruption to Interrupt with digit sequence without a valid digit sequence.";
	static final String PRE_ALERTING_ANNOUNECMENT_ERROR = "Pre-alerting Announcement can not be enabled unless there is at least 1 active criteria.";
	static final String PERSONAL_FILE_OPTION_WAITING_RB_ERROR = "Personal file option cannot be selected if no audio media file is uploaded for Waiting Ringback.";
	static final String EXCEED_SYSTEM_MAXIMUM_ANSWER_RINGS = "Exceeded the System maximum number of no answer rings allowed.  Allowed: {0}, Attempted {1}.";
	static final String DN_ALREADY_EXISTS = "DN already exists : {0}.";
	static final String RESET_NOT_SUPPORTED = "Reset is not supported by this device.";
	static final String ACCOUNT_CODE_DUPLICATE = "Please enter a new account code. This one already exists.";
	
	static final String HOILIDAY_MENU_NOT_ASSIGNABLE = "Holiday Menu is not assignable to Auto Attendant - Basic.";
	static final String SUBMENU_NOT_ASSIGNED = "Submenus may not be assigned to Auto Attendant - Basic menus.";
	static final String ADDRESS_NOT_VALID = "Please enter a valid 911 address. "
			+ "Helpful Hint: Please use street abbreviations. For example Street should be ST, Road should be RD.";
	static final String ALTERNATE_911_ADDRESS_MESSAGE = "You have entered an address that is not 911 compatible. "
			+ "We have populated an alternate address. Please verify and proceed.";
	
	static {
		errorCodeMapper.put("9", ADDRESS_NOT_VALID);
		errorCodeMapper.put("4000", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4001", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4002", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4003", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4004", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4005", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4006", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4007", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4008", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4011", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4012", "");
		errorCodeMapper.put("4013", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4017", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4022", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4024", INVALID_PHONE_NUMBER_ERROR_MESSAGE);
		errorCodeMapper.put("4025", "");
		errorCodeMapper.put("4026", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4027", NARROW_PHONE_SEARCH);
		errorCodeMapper.put("4030", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4031", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4032", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4033", USER_NOT_FOUND_GROUP);
		errorCodeMapper.put("4034", USER_NOT_FOUND_ENTERPRISE);
		errorCodeMapper.put("4035", IO_ERROR);
		errorCodeMapper.put("4036", UNEXPECTED_ERROR_CUSTOMER_SERVICE_MESSAGE);
		errorCodeMapper.put("4044", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4047", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4050", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4053", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4054", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4055", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4056", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4059", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4060", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4061", "");
		errorCodeMapper.put("4099", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("4108", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4151", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4152", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4162", HOLIDAY_SCHEDULE_NAME_EXISTS);
		errorCodeMapper.put("4163", HOLIDAY_SCHEDULE_START_DATE);
		errorCodeMapper.put("4164", HOLIDAY_SCHEDULE_NOT_FOUND);
		errorCodeMapper.put("4165", SCHEDULE_REMOVE_FROM_FEATURES);
		errorCodeMapper.put("4166", BUSINESS_SCHEDULE_NAME_EXISTS);
		errorCodeMapper.put("4167", BUSINESS_SCHEDULE_NOT_FOUND);
		errorCodeMapper.put("4168", SCHEDULE_REMOVE_FROM_FEATURES);
		errorCodeMapper.put("4169", "");
		errorCodeMapper.put("4170", "");
		errorCodeMapper.put("4171", "");
		errorCodeMapper.put("4172", "");
		errorCodeMapper.put("4173", "");
		errorCodeMapper.put("4174", "");
		errorCodeMapper.put("4175", "");
		errorCodeMapper.put("4176", "");
		errorCodeMapper.put("4177", "");
		errorCodeMapper.put("4184", "");
		errorCodeMapper.put("4185", "");
		errorCodeMapper.put("4186", USER_GROUP_NOT_ENTERPRISE);
		errorCodeMapper.put("4190", "");
		errorCodeMapper.put("4191", SCHEDULE_REMOVE_FROM_FEATURES);
		errorCodeMapper.put("4192", SCHEDULE_NAME_EXISTS);
		errorCodeMapper.put("4193", SCHEDULE_NOT_FOUND);
		errorCodeMapper.put("4194", "");
		errorCodeMapper.put("4195", START_DATE_BEFORE_END_DATE);
		errorCodeMapper.put("4196", "");
		errorCodeMapper.put("4197", "");
		errorCodeMapper.put("4199", EXPIRED_EVENT);
		errorCodeMapper.put("4202", ALREADY_ASSIGNED_EXTENSION);
		errorCodeMapper.put("4208", ALREADY_USED_NAME);
		errorCodeMapper.put("4252", "");
		errorCodeMapper.put("4253", TELEPHONE_NUMBER_NOT_IN_GROUP);
		errorCodeMapper.put("4254", "");
		errorCodeMapper.put("4258", "");
		errorCodeMapper.put("4407", ACCOUNT_CODE_DUPLICATE);
		errorCodeMapper.put("4438", "");
		errorCodeMapper.put("4439", "");
		errorCodeMapper.put("4440", "");
		errorCodeMapper.put("4441", "");
		errorCodeMapper.put("4445", "");
		errorCodeMapper.put("4446", "");
		errorCodeMapper.put("4447", "");
		errorCodeMapper.put("4455", "");
		errorCodeMapper.put("4458", "");
		errorCodeMapper.put("4460", "");
		errorCodeMapper.put("4461", "");
		errorCodeMapper.put("4462", "");
		errorCodeMapper.put("4470", "");
		errorCodeMapper.put("4495", "");

		errorCodeMapper.put("4505", DEVICE_NOT_FOUND);

		errorCodeMapper.put("4509", "");
		errorCodeMapper.put("4510", "");
		errorCodeMapper.put("4512", "");
		errorCodeMapper.put("4513", "");
		errorCodeMapper.put("4514", "");
		errorCodeMapper.put("4515", "");
		errorCodeMapper.put("4516", "");

		errorCodeMapper.put("4518", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);

		errorCodeMapper.put("4519", "");
		errorCodeMapper.put("4524", "");
		errorCodeMapper.put("4525", "");
		errorCodeMapper.put("4530", "");
		errorCodeMapper.put("4539", "");

		errorCodeMapper.put("4619", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);

		errorCodeMapper.put("4620", "");
		errorCodeMapper.put("4621", "");
		errorCodeMapper.put("4622", "");
		errorCodeMapper.put("4623", "");
		errorCodeMapper.put("4624", "");
		errorCodeMapper.put("4625", "");
		errorCodeMapper.put("4626", "");
		errorCodeMapper.put("4627", "");
		errorCodeMapper.put("4628", "");
		errorCodeMapper.put("4629", "");
		errorCodeMapper.put("4630", "");
		errorCodeMapper.put("4631", "");
		errorCodeMapper.put("4632", "");
		errorCodeMapper.put("4633", "");
		errorCodeMapper.put("4634", "");
		errorCodeMapper.put("4635", "");
		errorCodeMapper.put("4636", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4637", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4638", "");
		errorCodeMapper.put("4641", "");
		errorCodeMapper.put("4642", "");

		errorCodeMapper.put("4804", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4805", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4806", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4807", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4840", VALID_PHONE_NUMBER);

		errorCodeMapper.put("4850", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4851", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4852", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4853", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4854", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4855", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4858", DONT_RECOGNIZE_CUSTOMER_MESSAGE);

		errorCodeMapper.put("4875", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4876", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4877", DONT_RECOGNIZE_CUSTOMER_MESSAGE);
		errorCodeMapper.put("4878", "");

		errorCodeMapper.put("4902", "");
		errorCodeMapper.put("4903", "");
		errorCodeMapper.put("4909", "");
		errorCodeMapper.put("4910", "");
		errorCodeMapper.put("4911", "");
		errorCodeMapper.put("4912", "");

		errorCodeMapper.put("4916", LENGTH_OF_NAME);

		errorCodeMapper.put("4917", "");
		errorCodeMapper.put("4920", "");
		errorCodeMapper.put("4922", "");

		errorCodeMapper.put("4950", "");
		errorCodeMapper.put("4951", "");
		errorCodeMapper.put("4952", "");
		errorCodeMapper.put("4953", "");
		errorCodeMapper.put("4954", "");
		errorCodeMapper.put("4955", "");
		errorCodeMapper.put("4956", "");
		errorCodeMapper.put("4957", "");
		errorCodeMapper.put("4958", VALID_VALUE);
		errorCodeMapper.put("4959", "");
		errorCodeMapper.put("4961", "");

		errorCodeMapper.put("4980", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4981", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4982", VALID_PHONE_NUMBER);
		errorCodeMapper.put("4984", VALID_PHONE_NUMBER);

		errorCodeMapper.put("4990", "");
		errorCodeMapper.put("4992", "");
		errorCodeMapper.put("4993", "");
		errorCodeMapper.put("4994", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("4997", "");

		errorCodeMapper.put("5000", MISSING_START_DATE_TIME);
		errorCodeMapper.put("5001", MISSING_END_DATE_TIME);
		errorCodeMapper.put("5002", INVALID_START_DATE_TIME);
		errorCodeMapper.put("5003", INVALID_END_DATE_TIME);
		errorCodeMapper.put("5004", INVALID_TIME_RANGE);

		errorCodeMapper.put("5013", SPECIFIC_PHONE_NUMBER);
		errorCodeMapper.put("5015", NUMBER_OF_SECONDS_TO_WAIT);
		errorCodeMapper.put("5020", MAXIMUM_NUMBER_OF_ENTRIES);
		errorCodeMapper.put("5021", INVALID_SELECTIVE_CRITERIA);
		errorCodeMapper.put("5022", DEFAULT_SPECIFIC_CALL_FORWARD);
		errorCodeMapper.put("5023", CALL_FORWARDING_SELECTIVE);
		errorCodeMapper.put("5024", DEFAULT_CALL_FORWARD_PHONE_NUMBER);
		errorCodeMapper.put("5026", "");

		errorCodeMapper.put("5150", "");
		errorCodeMapper.put("5151", "");
		errorCodeMapper.put("5152", "");
		errorCodeMapper.put("5153", "");
		errorCodeMapper.put("5154", "");
		errorCodeMapper.put("5155", "");
		errorCodeMapper.put("5156", "");
		errorCodeMapper.put("5160", "");
		errorCodeMapper.put("5161", "");
		errorCodeMapper.put("5177", "");

		errorCodeMapper.put("5201", INCOMPLETE_REQUEST_TRY_AGAIN);
		errorCodeMapper.put("5202", INCOMPLETE_REQUEST_TRY_AGAIN);
		errorCodeMapper.put("5203", INCOMPLETE_REQUEST_TRY_AGAIN);
		errorCodeMapper.put("5204", INCOMPLETE_REQUEST_TRY_AGAIN);
		errorCodeMapper.put("5207", INCOMPLETE_REQUEST_TRY_AGAIN);
		errorCodeMapper.put("5208", FILE_UPLOAD_INCORRECT_FORMAT);
		errorCodeMapper.put("5209", INCOMPLETE_REQUEST_CUSTOMER_SERVICE);
		errorCodeMapper.put("5242", INVALID_PHONE_NUMBER_ERROR_MESSAGE);
		errorCodeMapper.put("5295", "");
		errorCodeMapper.put("5296", "");
		errorCodeMapper.put("5297", "");
		errorCodeMapper.put("5298", "");
		errorCodeMapper.put("5300", "");
		errorCodeMapper.put("5301", "");
		errorCodeMapper.put("5302", "");
		errorCodeMapper.put("5304", "");
		errorCodeMapper.put("5305", "");
		errorCodeMapper.put("5306", "");
		errorCodeMapper.put("5324", "");
		errorCodeMapper.put("5325", FILE_UPLOAD_INCORRECT_FORMAT);
		errorCodeMapper.put("5326", VIDEO_ASSIGNMENT_URL_ERROR);
		errorCodeMapper.put("5327", VIDEO_ASSIGNMENT_CUSTOM_ERROR);
		errorCodeMapper.put("5328", ANNOUNCEMENT_INTERUPTION_ERROR);
		errorCodeMapper.put("5329", PRE_ALERTING_ANNOUNECMENT_ERROR);

		errorCodeMapper.put("5330", "");
		errorCodeMapper.put("5331", PERSONAL_FILE_OPTION_WAITING_RB_ERROR);
		errorCodeMapper.put("5332", "");
		errorCodeMapper.put("5333", "");
		errorCodeMapper.put("5334", "");

		errorCodeMapper.put("5602", CALLING_LINE_ID_GRP_NUMBER_IN_USE);
		errorCodeMapper.put("5603", "");
		errorCodeMapper.put("5604", CALLING_LINE_ID_GRP_NAME_IN_USE);
		errorCodeMapper.put("5605", "");
		errorCodeMapper.put("5665", "");
		errorCodeMapper.put("5700", INCOMPLETE_REQUEST_CUSTOMER_SERVICE);

		errorCodeMapper.put("6002", INCOMPLETE_REQUEST_CUSTOMER_SERVICE);
		errorCodeMapper.put("6003", INCOMPLETE_REQUEST_CUSTOMER_SERVICE);
		errorCodeMapper.put("6004", INCOMPLETE_REQUEST_CUSTOMER_SERVICE);
		errorCodeMapper.put("6005", INCOMPLETE_REQUEST_CUSTOMER_SERVICE);
		errorCodeMapper.put("6510", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6512", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6513", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6514", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6515", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6516", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6517", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6518", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6530", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6531", INCORRECT_FILE_FORMAT);
		errorCodeMapper.put("6640", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("6660", EXCEED_SYSTEM_MAXIMUM_ANSWER_RINGS);

		errorCodeMapper.put("8210", DN_ALREADY_EXISTS);
		errorCodeMapper.put("8429", RESET_NOT_SUPPORTED);
		errorCodeMapper.put("8430", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("8441", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);

		errorCodeMapper.put("9800", HOILIDAY_MENU_NOT_ASSIGNABLE);
		errorCodeMapper.put("9801", SUBMENU_NOT_ASSIGNED);
		errorCodeMapper.put("9802", INCOMPLETE_REQUEST_CUSTOMER_SERVICE);
		errorCodeMapper.put("9812", "");

		errorCodeMapper.put("18538", UNEXPECTED_ERROR_TRY_AGAIN_MESSAGE);
		errorCodeMapper.put("18539", ALTERNATE_911_ADDRESS_MESSAGE);
		

	}

	public static String getErrorMessage(String errorCode) {

		String errorMessage = errorCodeMapper.get(errorCode);

		if (StringUtils.isBlank(errorMessage)) {
			logger.debug("The Error message is not defined for " + errorCode
					+ ". Returning generic error message.");
			errorMessage = "An error occured in performing operation...";
		}
		return errorMessage;
	}

}
