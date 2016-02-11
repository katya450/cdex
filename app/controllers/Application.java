package controllers;

import java.util.List;

import com.avaje.ebean.Ebean;
import com.fasterxml.jackson.databind.JsonNode;

import models.Record;
import play.libs.Json;
import play.mvc.*;

public class Application extends Controller {

  @BodyParser.Of(BodyParser.Json.class)
  public static Result upsertRecord() {
    JsonNode json = request().body().asJson(); 
    Record record = Json.fromJson(json, Record.class);
    Ebean.save(record);
    return ok(Json.toJson(record));
  }
  
  public static Result getRecords() {
    List<Record> records = Record.find.all();
    return ok(Json.toJson(records));
  }
  
  public static Result getArtist(String prefix) {
      List<Record> records = Ebean
    		  .find(Record.class).where()
    		  .startsWith("artist", prefix)
    		  .findList();

	  return ok(Json.toJson(records));
  }
}
   