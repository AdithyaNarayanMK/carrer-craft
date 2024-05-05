package utils;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.conversions.Bson;
import com.mongodb.client.model.Filters;

public class MongoDbConnector
{
	
	public static Bson constructFilterObject(JsonObject rawFilter) {
		List<Bson> filters = new ArrayList<>();
		for(String key : rawFilter.keySet()) {
			if(key.equals("isFiltered"))
				continue;
			JsonArray vals = rawFilter.getAsJsonArray(key);
			System.out.println("hello world");
			filters.add(Filters.in("jobData."+key, Arrays.asList(new Gson().fromJson(vals, String[].class))));
		}
		Bson toFilter = Filters.and(filters);
		return toFilter;
		
	}
	
	public static MongoCollection getConnector(String collection){
		MongoClient client = MongoClients.create("mongodb+srv://realvikram63:63Vikram63@cluster0.j7cnqcz.mongodb.net/?retryWrites=true&w=majority");
		MongoDatabase db = client.getDatabase("CareersDB");
		MongoCollection col = db.getCollection(collection);
		return col;
	}

	public static String getDataByID(String collection, int id){
		MongoCollection col = getConnector(collection);
		Document query = new Document("id", id);
		Document result = (Document) col.find(query).first();
		return result.toJson();
	}

	public static String getData(String collection, int pageNo, int pageSize, JsonObject rawFilter){
		System.out.println("hello");
		MongoCollection col = getConnector(collection);
		Bson toFilter = null;
		if(rawFilter.get("isFiltered").getAsString().equals("true"))
			toFilter = constructFilterObject(rawFilter);
		System.out.println("This is to check");
		FindIterable<Document> documents = col.find(toFilter);
		JsonArray jobs = new JsonArray();
		for(Document document : documents){
			jobs.add(document.toJson());
		}
		return jobs.toString();
	}

}
