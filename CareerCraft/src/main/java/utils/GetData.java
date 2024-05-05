package utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class GetData
{
	public static Integer getIDFromUrl(String url){
		System.out.println("hello world" + url);
		String[] splits = url.split("/");
		try{
			return Integer.parseInt(splits[splits.length - 1]);
		}catch(NumberFormatException e){
			return -1;
		}

	}

	public static JsonObject getJsonDataFromRequest(HttpServletRequest req) throws IOException
	{
		StringBuilder sb = new StringBuilder();
		String data;
		BufferedReader br = req.getReader();
		while((data = br.readLine()) != null)
			sb.append(data);
		System.out.println(sb);
		System.out.println(sb.toString());
		Gson gson = new Gson();
		JsonObject jsonData = gson.fromJson(sb.toString(), JsonObject.class);
		return jsonData;
	}

	public static List<String> changeJsonToList(JsonArray jsonArryaData){
		List<String> listStringData = new ArrayList<>();

		return listStringData;
	}
}
