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
    JsonNode json = request().body().asJson();			//kaivaa bodyn sisällön jsonina 
    Record record = Json.fromJson(json, Record.class);	//tsekkaa, että json vastaa record -oliota. Jos ok, muuntaa olioksi, jos ei ok, niin antaa virheen.
    Ebean.save(record);                                 //tallentaa recordin tietokantaan
    return ok(Json.toJson(record));						//ok = http200
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
   