package models;

import javax.persistence.Entity;
import javax.persistence.Id;

import play.data.validation.Constraints;
import play.db.ebean.Model;

@Entity
public class Record extends Model {

  private static final long serialVersionUID = 1L;

  @Id
  public Long record_id;
  
  @Constraints.Required
  public String artist;

  @Constraints.Required
  public String name;
  
  public static Finder<Long, Record> find = 
      new Finder<Long, Record>(Long.class, Record.class);
  
}
