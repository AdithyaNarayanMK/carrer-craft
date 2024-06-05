package com.CareerCraft;

import utils.CookieOperator;
import utils.GetData;
import utils.MongoDbConnector;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import utils.GetData;


@WebServlet("/job/*")
public class JobSearch extends HttpServlet{
	public Boolean isValidPath(String url){
		if(url == null || url.equals("/"))
			return Boolean.FALSE;
		return Boolean.TRUE;
	}
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException
	{
		String path;
		path = req.getPathInfo();
		int id = -1;
		if(isValidPath(path))
			id = GetData.getIDFromUrl(req.getPathInfo());

		String job = "";
		if(id != -1){
			job = MongoDbConnector.getDataByID("Jobs", id);
		}
		else
		{
		
			job = MongoDbConnector.getData("Jobs", GetData.getJsonDataFromRequest(req));
		}
		res.getWriter().println(job);
	}
}
