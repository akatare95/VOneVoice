package com.vzw.onevoice.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author c0bhan3
 * @version 1.0
 *
 */
public final class DateUtil {

	private static final String DATE_FORMAT = "dd-MMM-yyyy HH:mm:ss";
	private static final Long NUMBER_OF_MILLISECONDS_PER_DAY = (long) (24 * 60 * 60 * 1000) ;

	private DateUtil() {
		super();
	}

	/**
	 * Converts {@link Date} to String in the format specified by
	 * {@code DATE_FORMAT}
	 * 
	 * @param date
	 * @return
	 */
	public static String convertDateToString(final Date date) {
		final DateFormat df = new SimpleDateFormat(DATE_FORMAT);
		return df.format(date);
	}
	
	public static Long numberOfDaysBetweenDates(String olderDate , String recentDate , String format){
		
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		
		try {
			Date old = sdf.parse(olderDate);
			Date recent = sdf.parse(recentDate);
			Long numberOfMilliSecondsBetweenDates = recent.getTime() - old.getTime() ;
			return (numberOfMilliSecondsBetweenDates / NUMBER_OF_MILLISECONDS_PER_DAY); 
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return 0L;	
	}
	
	public static Long numberOfDaysFromToday(String date , String format){
		
		Date currentDate = new Date(System.currentTimeMillis());
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		String currentDateString = sdf.format(currentDate);
		
		return numberOfDaysBetweenDates(date, currentDateString , format);
	}

}