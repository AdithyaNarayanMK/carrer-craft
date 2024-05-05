package utils;



import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

  public class dbOperations
{
	public static void insertIntoUser(JsonObject jsonData) throws SQLException, ClassNotFoundException
	{
		String FIRST_NAME = jsonData.get("first_name").getAsString();
		String LAST_NAME = jsonData.get("last_name").getAsString();
		String MAIL_ID = jsonData.get("mail_id").getAsString();
		Long PHONE_NUMBER = jsonData.get("phone_number").getAsLong();
		Integer AGE = jsonData.get("age").getAsInt();
		String HIGHEST_QUALIFICATION = jsonData.get("highest_qualification").getAsString();
		String LATEST_DEGREE = jsonData.get("latest_degree").getAsString();
		String STREAM = jsonData.get("stream").getAsString();
		String PASSWORD = jsonData.get("password").getAsString();
		Connection con = SqlConnector.connector();
		PreparedStatement prep = con.prepareStatement("INSERT INTO user (firstname, lastname, email, phoneno, age, highestqualification, latestdegree, Stream, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
		prep.setString(1, FIRST_NAME);
		prep.setString(2, LAST_NAME);
		prep.setString(3, MAIL_ID);
		prep.setLong(4, PHONE_NUMBER);
		prep.setInt(5, AGE);
		prep.setString(6, HIGHEST_QUALIFICATION);
		prep.setString(7, LATEST_DEGREE);
		prep.setString(8, STREAM);
		prep.setString(9, PASSWORD);
		prep.executeUpdate();

	}

	public static void insertIntoSkill(JsonObject jsonData) throws SQLException, ClassNotFoundException
	{
		JsonArray skillSetJsonArray = jsonData.getAsJsonArray("skill_set");
		String[] SKILL_SET = new Gson().fromJson(skillSetJsonArray, String[].class);
		String MAIL_ID = jsonData.get("mail_id").getAsString();
		Connection con = SqlConnector.connector();
		for(String skill : SKILL_SET){
			PreparedStatement prep = con.prepareStatement("INSERT INTO skill (email, skillset) VALUES (?, ?)");
			prep.setString(1, MAIL_ID);
			prep.setString(2, skill);
			prep.executeUpdate();
		}
	}

	public static void insertIntoInterest(JsonObject jsonData) throws SQLException, ClassNotFoundException
	{
		JsonArray interestJsonArray = jsonData.getAsJsonArray("area_of_interest");
		String[] AREA_OF_INTEREST = new Gson().fromJson(interestJsonArray, String[].class);
		String MAIL_ID = jsonData.get("mail_id").getAsString();
		Connection con = SqlConnector.connector();
		for(String interest : AREA_OF_INTEREST){
			PreparedStatement prep = con.prepareStatement("INSERT INTO interest (email, areaofinterest) VALUES (?, ?)");
			prep.setString(1, MAIL_ID);
			prep.setString(2, interest);
			prep.executeUpdate();
		}
	}

	public static void addNewUser(HttpServletRequest req) throws IOException, SQLException, ClassNotFoundException
	{
		System.out.println("hello");
		JsonObject jsonData = GetData.getJsonDataFromRequest(req);
		insertIntoUser(jsonData);
		insertIntoSkill(jsonData);
		insertIntoInterest(jsonData);
	}


}
