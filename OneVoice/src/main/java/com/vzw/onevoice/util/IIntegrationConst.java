package com.vzw.onevoice.util;

/**
 * Contains all the constants needed for integration with the service layer
 * 
 * @author c0bhan3
 * @version 1.0
 *
 */
public interface IIntegrationConst {

	public String KEY_VOLTE_SERVICE_CONNECT_USERNAME = "SERVICE_USERNAME";
	public String KEY_VOLTE_SERVICE_CONNECT_PASSWORD = "SERVICE_PASSWORD";
	public String KEY_VOLTE_SERVICE_CONNECT_PROPERTY_NAME = "HOST";

	public String KEY_VOLTE_CDN_URL_INSECURE_PROPERTY_TYPE = "CDN_URL_INSECURE";
	public String KEY_VOLTE_CDN_URL_INSECURE_PROPERTY_NAME = "HOST";

	public String KEY_EXTERNAL_SYSTEM_CACHE_SYSTEM_NAME = "VOLTE_SERVICES";
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_DASHBOARD_DEVICES_COUNT_API_NAME =  "DASHBOARD_DEVICES_COUNT";

	public String KEY_EXTERNAL_SYSTEM_CACHE_LINE_COUNT_API_NAME = "LINE_COUNT";
	public String KEY_EXTERNAL_SYSTEM_CACHE_LINE_SUMMARY_API_NAME = "LINE_LIST";
	public String KEY_EXTERNAL_SYSTEM_CACHE_LINE_ASSOCIATED_DEVICES_API_NAME = "LINE_ASSOCIATED_DEVICE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_LINE_DETAILS_API_NAME = "LINE_DETAIL";
	public String KEY_EXTERNAL_SYSTEM_CACHE_LINE_LOOKUP = "LINE_LOOKUP";
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_HUNT_GROUP_LINE_INFO = "HUNT_GROUP_LINE_INFO";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ACCOUNT_CODE_LINE_INFO = "ACCOUNT_CODE_LINE_INFO";
	public String KEY_EXTERNAL_SYSTEM_CACHE_CALL_PICKUP_LINE_INFO = "CALL_PICKUP_LINE_INFO";

	public String KEY_EXTERNAL_SYSTEM_CACHE_LINE_USER_UPDATE_INFO = "LINE_USER_UPDATE_INFO";
	public String KEY_EXTERNAL_SYSTEM_CACHE_BLOCK_UNBLOCK_API_NAME = "BLOCK_UNBLOCK";

	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_COUNT_API_NAME = "DEVICE_COUNT";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_SUMMARY_API_NAME = "DEVICE_LIST";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_ASSOCIATED_DEVICES_API_NAME = "DEVICE_ASSOCIATED_DEVICE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_DESKPHONE_DETAILS_API_NAME = "DEVICE_DESKPHONE_DETAIL";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_OTT_DETAILS_API_NAME = "DEVICE_OTT_DETAIL";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_SMARTPHONE_DETAILS_API_NAME = "DEVICE_SMARTPHONE_DETAIL";

	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_REBOOT_DESKPHONE_API_NAME = "REBOOT_DESKPHONE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_BRIDGE_LINE_API_NAME = "DEVICE_BRIDGE_LINE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_UNBRIDGE_LINE_API_NAME = "DEVICE_UNBRIDGE_LINE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_DISCONNECT_API_NAME = "DEVICE_DISCONNECT";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_DISABLE_API_NAME = "DEVICE_DISABLE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_UPDATE_ADDRESS911_API_NAME = "DEVICE_UPDATE_ADDRESS911";
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_ENABLE_API_NAME = "DEVICE_ENABLE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_DEVICE_VALIDATE_ADDRESS911_API_NAME = "DEVICE_VALIDATE_ADDRESS911";

	public String KEY_EXTERNAL_SYSTEM_CACHE_ONBOARDING_SUBMIT_API_NAME = "ONBOARDING_SUBMIT";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ONBOARDING_RETRIEVE_API_NAME = "ONBOARDING_RETRIEVE";

	public String KEY_EXTERNAL_SYSTEM_CACHE_PREAUTH_ADD_API_NAME = "PREAUTHORIZATION_ADD";
	public String KEY_EXTERNAL_SYSTEM_CACHE_PREAUTH_RETRIEVE_HISTORY_API_NAME = "PREAUTHORIZATION_RETRIEVE_HISTORY";
	public String KEY_EXTERNAL_SYSTEM_CACHE_PREAUTH_MTN_DETAILS_API_NAME = "PREAUTHORIZATION_MTN_DETAILS";

	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CALLING_PLAN_GET_API_NAME = "GET_DIAL_PLAN";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CALLING_PLAN_UPDATE_API_NAME = "MODIFY_DIAL_PLAN";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_GROUP_FORWARDING_GET_API_NAME = "GET_NIGHT_FORWARDING";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_GROUP_FORWARDING_UPDATE_API_NAME = "MODIFY_NIGHT_FORWARDING";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_MUSIC_ON_HOLD_GET_API_NAME = "MUSIC_ON_HOLD";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_MUSIC_ON_HOLD_UPDATE_API_NAME = "MODIFY_MUSIC_ON_HOLD";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_ACCOUNT_CODE_GET_API_NAME = "GET_ACCOUNT_CODE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_ACCOUNT_CODE_ADD_API_NAME = "ADD_ACCOUNT_CODE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_ACCOUNT_CODE_DELETE_API_NAME = "DELETE_ACCOUNT_CODE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_ACCOUNT_CODE_MODIFY_API_NAME = "MODIFY_ACCOUNT_CODE_USERS";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_ACCOUNT_CODE_MANAGE_API_NAME = "MANAGE_ACCOUNT_CODE_USERS";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CUSTOM_RINGBACK_GET_API_NAME = "GET_CUSTOM_RINGBACK";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CUSTOM_RINGBACK_UPDATE_API_NAME = "MODIFY_CUSTOM_RINGBACK";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_SCHEDULE_LIST_GET_API_NAME = "GET_SCHEDULE_LIST";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_SCHEDULE_LIST_DELETE_API_NAME = "DELETE_SCHEDULE_LIST";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_SCHEDULE_MODIFY_NAME_API_NAME = "MODIFY_SCHEDULE_NAME";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_SCHEDULE_ADD_EVENT_API_NAME = "ADD_EVENT_SCHEDULE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_EVENT_LIST_DELETE_API_NAME = "DELETE_EVENT_SCHEDULE_LIST";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_GET_EVENT_SCHEDULE_LIST_API_NAME = "GET_SCHEDULE_EVENT_LIST";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_SCHEDULE_MODIFY_API_NAME = "MODIFY_SCHEDULE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_HUNT_GROUP_GET_API_NAME = "HUNT_GROUP";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_HUNT_GROUP_INFO_API_NAME = "HUNT_GROUP_INSTANCE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_HUNT_GROUP_MODIFY_API_NAME = "HUNT_GROUP_MODIFY";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_AUTO_ATTENDANT_GET_LIST_API_NAME = "GET_AUTO_ATTENDANT_LIST";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_AUTO_ATTENDANT_GET_INFO_API_NAME = "GET_AUTO_ATTENDANT_INFO";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_AUTO_ATTENDANT_MODIFY_API_NAME = "MODIFY_AUTO_ATTENDANT";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CALL_PICKUP_INFO_API_NAME = "CALL_PICKUP_INFO";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CALL_PICKUP_LIST_API_NAME = "CALL_PICKUP_LIST";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CALL_PICKUP_MODIFY_API_NAME = "CALL_PICKUP_MODIFY";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CALL_PICKUP_ADD_API_NAME = "CALL_PICKUP_ADD";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CALL_PICKUP_DELETE_API_NAME = "CALL_PICKUP_DELETE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_FACC_API_NAME = "FACC";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_GET_CALLING_LINE_ID_API_NAME = "GET_CALLING_LINE_ID";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_MODIFY_CALLING_LINE_ID_API_NAME = "MODIFY_CALLING_LINE_ID";
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_GET_AUTHORIZATION_CODE_API_NAME = "GET_AUTHORIZATION_CODE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_MODIFY_AUTHORIZATION_CODE_API_NAME = "MODIFY_AUTHORIZATION_CODE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_CREATE_AUTHORIZATION_CODE_API_NAME = "CREATE_AUTHORIZATION_CODE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_MANAGE_AUTHORIZATION_CODE_API_NAME = "MANAGE_AUTHORIZATION_CODE";
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_DELETE_AUTHORIZATION_CODE_API_NAME = "DELETE_AUTHORIZATION_CODE";
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_REMOVE_DEVICE_API_NAME = "REMOVE_DEVICE";
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_USER_FEATURE_MAPPING_GET = "USER_FEATURE_MAPPING_GET";
	public String KEY_EXTERNAL_SYSTEM_CACHE_USER_FEATURE_GET = "USER_FEATURE_GET";
	public String KEY_EXTERNAL_SYSTEM_CACHE_USER_FEATURE_UPDATE = "USER_FEATURE_UPDATE";
	
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_HOST_NAME_MOCK1 = "MOCK1";
	public String KEY_EXTERNAL_SYSTEM_CACHE_HOST_NAME_MOCK2 = "MOCK2";
	public String KEY_EXTERNAL_SYSTEM_CACHE_HOST_NAME_MOCK3 = "MOCK3";
	public String KEY_EXTERNAL_SYSTEM_CACHE_HOST_NAME_DEV1 = "DEV1";
	public String KEY_EXTERNAL_SYSTEM_CACHE_HOST_NAME_DEV2 = "DEV2";
	public String KEY_EXTERNAL_SYSTEM_CACHE_HOST_NAME_DEV3 = "DEV3";
	public String KEY_EXTERNAL_SYSTEM_CACHE_HOST_NAME_DEV4 = "DEV4";
	public String KEY_EXTERNAL_SYSTEM_CACHE_HOST_NAME_DEV5 = "DEV5";

	public String KEY_SERVER_HOST_NAME = "server.host";
	public String KEY_SERVER_PORT_NUMBER = "server.port";

	public String KEY_HUNT_GROUPS_TO_BE_DELETED = "deletedHuntGroups";

	public String OK = "OK";
	public String SUCCESS = "Success";
	public String TRUE = "true";
	public String FALSE = "false";
	public String YES_Y = "Y";
	public String NO_N = "N";

	public String KEY_ENTERPRISE_FEATURE_DIRECTORY_ASSISTANCE = "directoryAssistance";
	public String KEY_ENTERPRISE_FEATURE_EMERGENCY_CALLS = "emergencyCalls";
	public String KEY_ENTERPRISE_FEATURE_INTERNAL_CALLS = "internalCalls";
	public String KEY_ENTERPRISE_FEATURE_INTERNATIONAL_CALLS = "internationalCalls";
	public String KEY_ENTERPRISE_FEATURE_LOCAL_CALLS = "localCalls";
	public String KEY_ENTERPRISE_FEATURE_PAID_SERVICES = "paidServices";
	public String KEY_ENTERPRISE_FEATURE_SELECTIVE_LIST = "selectiveList";
	public String KEY_ENTERPRISE_FEATURE_TOLL_FREE_CALLS = "tollFreeCalls";
	public String KEY_ENTERPRISE_FEATURE_SPECIALSERVICEII = "specialServicesII";
	public String KEY_ENTERPRISE_FEATURE_PREMIUM_SERVICESI = "premiumServicesI";
	public String KEY_ENTERPRISE_FEATURE_PREMIUM_SERVICESII = "premiumServicesII";
	public String KEY_ENTERPRISE_FEATURE_CASUAL = "casual";
	public String KEY_ENTERPRISE_FEATURE_URL_DIALING = "urlDialing";
	public String KEY_ENTERPRISE_FEATURE_UNKNOW = "unknown";

	public String KEY_ENTERPRISE_FEATURE_IS_MUSIC_ON_HOLD_AVAILABLE = "isFeatureAvailable";
	public String KEY_ENTERPRISE_FEATURE_SYSTEM_DEFAULT_GREETING_AVAILABLE = "isSystemDefaultGreetingAvailable";
	public String KEY_ENTERPRISE_FEATURE_CUSTOM_GREETING_AVAILABLE = "isCustomGreetingAvailable";
	public String KEY_ENTERPRISE_FEATURE_CUSTOM_GREETING_FILE_NAME = "customGreetingFileName";

	public String KEY_REQUEST_HEADER_ECPD_ID = "AM_ECPD_ID";
	public String KEY_REQUEST_HEADER_UID = "AM_UID";
	public String KEY_REQUEST_HEADER_EMAIL_ADDRESS = "AM_EMAIL_ADDRESS";
	public String KEY_REQUEST_HEADER_FIRST_NAME = "AM_FIRST_NAME";
	public String KEY_REQUEST_HEADER_LAST_NAME = "AM_LAST_NAME";
	public String KEY_REQUEST_HEADER_MB_ROLE = "AM_MB_ROLE";
	public String KEY_REQUEST_HEADER_USER_TYPE = "AM_USER_TYPE";
	public String KEY_REQUEST_HEADER_PORTAL_ROLES = "PORTAL_ROLES";
	public String KEY_REQUEST_HEADER_PORTAL_ACCESS_LIST = "PORTAL_ACCESS_LIST";
	public String KEY_REQUEST_HEADER_GLOBAL_NAV = "GLOBAL_NAV";
	public String KEY_REQUEST_HEADER_EPAM = "EPAM";
	public String KEY_REQUEST_HEADER_IMPERSONATED_ID = "CSR_ID";

	public String CONFIG_GLOBAL_NAV_ONE_NAV_PROPERTY_TYPE = "GLOBAL_NAV";
	public String CONFIG_GLOBAL_NAV_ONE_NAV_PROPERTY_NAME = "HOST";

	public String CONFIG_GLOBAL_NAV_MB_PROPERTY_TYPE = "MB";
	public String CONFIG_GLOBAL_NAV_MB_PROPERTY_NAME = "HOST";

	public String CONFIG_GLOBAL_NAV_APPBASE_PROPERTY_TYPE = "APPBASE";
	public String CONFIG_GLOBAL_NAV_APPBASE_PROPERTY_NAME = "HOST";

	public String CONFIG_GLOBAL_NAV_MBSS_PROPERTY_TYPE = "MBSS";
	public String CONFIG_GLOBAL_NAV_MBSS_PROPERTY_NAME = "HOST";

	public String CONFIG_GLOBAL_NAV_TVP = "https://tvp.terremark.com";
	public String CONFIG_GLOBAL_NAV_M2M = "m2m.verizonwireless.com";

	public String CONFIG_GLOBAL_NAV_STATICBASE_PROPERTY_TYPE = "STATICBASE";
	public String CONFIG_GLOBAL_NAV_STATICBASE_PROPERTY_NAME = "HOST";
	
	public String CONFIG_GLOBAL_NAV_AM_URL_PROPERTY_TYPE = "AM_URL";
	public String CONFIG_GLOBAL_NAV_AM_URL_PROPERTY_NAME = "HOST";
	
	public String CONFIG_CDN_PROPERTY_TYPE = "STATIC_CONTENT";
	public String CONFIG_CDN_PROPERTY_NAME = "HOST";

	public String CONFIG_CDN_WEB_SERVER_LOCATION = "CDN_WEB_SERVER_LOCATION";

	public String CONFIG_CDN_PORTAL_BACKEND_URL = "PORTAL_BACKEND_URL";
	public String CONFIG_CDN_NAVIGATION_INFO = "navigationInfo";
	public String CONFIG_CDN_USER_INFO = "userInfo";

	public String CONFIG_PORTAL_BACKEND_PROPERTY_TYPE = "VOLTE_SERVICES";
	public String CONFIG_PORTAL_BACKEND_PROPERTY_NAME = "HOST";

	public String CONFIG_PORTAL_MOCKED_BACKEND_PROPERTY_TYPE = "MOCKED_VOLTE_SERVICES";
	public String CONFIG_PORTAL_MOCKED_BACKEND_PROPERTY_NAME = "HOST";

	public String CONFIG_PORTAL_LOGOUT_PROPERTY_TYPE = "LOGOUT";
	public String CONFIG_PORTAL_LOGOUT_PROPERTY_NAME = "HOST";
	
	
	public String CONFIG_HUNT_GROUP_URL_PROPERTY_TYPE = "HUNT_GROUP_URL";
	public String CONFIG_HUNT_GROUP_URL_PROPERTY_NAME = "HOST";
	
	public String CONFIG_AUTO_ATTENDANT_URL_PROPERTY_TYPE = "AUTO_ATTENDANT_URL";
	public String CONFIG_AUTO_ATTENDANT_URL_PROPERTY_NAME = "HOST";
	
	public String CONFIG_ADD_NEW_VOLTE_LINE_URL_PROPERTY_TYPE = "ADD_NEW_VOLTE_LINE_URL";
	public String CONFIG_ADD_NEW_VOLTE_LINE_URL_PROPERTY_NAME = "HOST";
	
	public String CONFIG_IMAGE_SERVER_URL_PROPERTY_TYPE = "IMAGE_SERVER_URL";
	public String CONFIG_IMAGE_SERVER_URL_PROPERTY_NAME="HOST";
	

	public static final String CLIENT_ID_VALUE_ONBOARDING = "MyBusiness";
	public static final String CLIENT_ID_VALUE = "VOLTEAdmin";
	public static final String USER_ID_VALUE = "EPB User";
	public static final String TRANSACTION_ID_PREFIX = "VOLTE";
	public static final String USER_TYPE_VOLTE_MYBIZ = "myBiz";

	public static final String VOLTE_USER_ROLE_PRIMARY_CONTACT = "PrimaryContact";
	public static final String VOLTE_USER_ROLE_ADMIN = "Admin";
	public static final String VOLTE_USER_ROLE_PRODUCT_SERVICE_ADMIN = "ProductServiceAdmin";
	public static final String VOLTE_USER_ROLE_ANALYST = "Analyst";

	public static final String SERVICE_CODE_SUCCESS = "0";
	public static final String SERVICE_CODE_SUCCESS2 = "00";
	public static final String SERVICE_CODE_PARTIAL_SUCESS = "1";
	public static final String SERVICE_CODE_AUTH_ERROR = "2";
	public static final String SERVICE_CODE_CLIENT_ERROR = "4";
	public static final String SERVICE_CODE_SYSTEM_ERROR = "5";
	public static final String SERVICE_CODE_MEDIA_ERROR = "6";
	public static final String SERVICE_CODE_MODIFY_ERROR = "9";
	
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_ENTERPRISE_ACCOUNT_CODE_TYPE = "Account Code";
	
	public String KEY_EXTERNAL_SYSTEM_CACHE_USER_INFO_UPDATE_API_NAME =  "USER_INFO_UPDATE";
	
	public String CONFIG_LINE_LEVEL_FILTER = "LINE_LEVEL_FILTER";
	public String CONFIG_DEVICE_LEVEL_FILTER = "DEVICE_LEVEL_FILTER";
	
	public String RECORD_LIMIT_ENABLE  = "Yes";
	public String RECORD_LIMIT_DISABLE = "No";
}