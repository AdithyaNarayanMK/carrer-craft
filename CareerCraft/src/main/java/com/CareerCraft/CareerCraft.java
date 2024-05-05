package com.CareerCraft;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CareerCraft extends HttpServlet {
		public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
			res.getWriter().println("Hello world this is vikram");
		}
}
