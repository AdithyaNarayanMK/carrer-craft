package com.CareerCraft;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;


import utils.CookieOperator;
import utils.SqlConnector;

public class IsLoggedInFilter implements Filter {

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException
	{
		HttpServletRequest req = (HttpServletRequest) request;
		Cookie[] cookies = req.getCookies();
		String email = CookieOperator.getCookieValue(cookies, "mail");
		String authToken = CookieOperator.getCookieValue(cookies, "auth");
		if(!email.isEmpty() && !authToken.isEmpty()){
			try
			{
				Connection con = SqlConnector.connector();
				String query = "SELECT authtoken FROM loggeduser WHERE email = ?";
				PreparedStatement prep = con.prepareStatement(query);
				prep.setString(1, email);
				ResultSet rs = prep.executeQuery();
				while(rs.next()){
					int authfromDb = rs.getInt("authtoken");
					if(authToken.equals(authfromDb + ""))
						chain.doFilter(request, response);
				}
			}
			catch(Exception e)
			{
				response.getWriter().println(e);
			}
		}

	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub
		
	}


}
