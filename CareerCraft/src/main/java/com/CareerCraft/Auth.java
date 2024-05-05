package com.CareerCraft;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static utils.CookieOperator.setCookie;
import static utils.GetData.getJsonDataFromRequest;
import static utils.SqlConnector.connector;
import static utils.dbOperations.addNewUser;

import java.sql.SQLException;
import java.util.Random;

import com.google.gson.JsonObject;

@WebServlet("/auth")
public class Auth extends HttpServlet {

	public void addCookie(HttpServletResponse res, ResultSet rs, String email) throws SQLException, ClassNotFoundException
	{
		Connection con = connector();
		String query;
		Random rand = new Random();
		int authToken = rand.nextInt();
		setCookie(res, "auth", authToken + "");
		setCookie(res, "mail", email);
		query = "INSERT INTO loggeduser(email, authtoken) VALUES(?, ?)";
		PreparedStatement prep = con.prepareStatement(query);
		prep.setString(1, email);
		prep.setInt(2, authToken);
		prep.executeUpdate();
		setCookie(res, "job_page_no", "1");
	}
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException // For Login
	{
		JsonObject data = getJsonDataFromRequest(req);
		String email = data.get("mail_id").getAsString();
		String password = data.get("password").getAsString();
		try
		{
			Connection con = connector();
			String query = "SELECT password FROM user WHERE email = ?";
			PreparedStatement prep = con.prepareStatement(query);
			prep.setString(1, email);
			ResultSet rs = prep.executeQuery();
			if(rs.next()){
				if(password.equals(rs.getString(1)))
					new Auth().addCookie(res, rs, email);
				}
		}catch(Exception e){
			res.getWriter().println(e);
		}
		res.getWriter().println("Logged in Successfully");
	}

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException // For signUp
	{
		try
		{
			addNewUser(req);
		}
		catch(Exception e)
		{
			res.getWriter().println(e);
		}
		res.getWriter().println("User has been added successfully");
	}
	public void doDelete(HttpServletRequest req, HttpServletResponse res) {
		//Will come back after implementing the business logics
	}
}
