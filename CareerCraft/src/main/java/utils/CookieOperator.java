package utils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

public class CookieOperator
{
	public static String getCookieValue(Cookie[] cookies, String cookieName){
		for(Cookie cookie : cookies){
			if(cookie.getName().equals(cookieName))
				return cookie.getValue();
		}
		return "";
	}
	public static void setCookie(HttpServletResponse res, String cookieName, String CookieValue){
		Cookie cookie = new Cookie(cookieName, CookieValue);
		res.addCookie(cookie);
	}
}
