package controllers;

import java.util.List;

import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import models.Database;
import models.Record;

public class Application extends Controller {

    public static Result create() throws Throwable {
    	JsonNode body = request().body().asJson();
    	if (body == null) {
    		return badRequest("Missing JSON body");
    	} else {
    		Record record = Json.fromJson(body, Record.class);
    		if (record.artist == null || record.name == null) {
    			return badRequest("Missing fields");
    		}
    		
    		int id = Database.persist(record);
    		
    		ObjectNode result = Json.newObject();
    		result.put("id", id);
        return ok(result);
    	}
    }
    
    public static Result getAll() throws Throwable {
      List<Record> records = Database.getRecords();
      return ok(Json.toJson(records));
    }
}
