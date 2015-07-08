package controllers;

import java.util.List;

import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import com.fasterxml.jackson.databind.JsonNode;

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
    		record.id = Database.persist(record);
        return ok(Json.toJson(record));
    	}
    }
    
    public static Result getAll() throws Throwable {
      List<Record> records = Database.getRecords();
      return ok(Json.toJson(records));
    }
}
