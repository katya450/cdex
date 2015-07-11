package controllers;

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
}
   