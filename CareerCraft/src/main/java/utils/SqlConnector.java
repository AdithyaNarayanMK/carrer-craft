package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SqlConnector
{
	public static Connection connector() throws ClassNotFoundException, SQLException
	{
		String url
			= "jdbc:mysql://localhost:3306/careercraft";
		String username = "root";
		String password = "";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, username, password);
		return con;

	}
}