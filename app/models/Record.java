package models;

import javax.persistence.Entity;
import javax.persistence.Id;
import play.data.validation.Constraints;
import play.db.ebean.Model;

@Entity                                     //@ = annotaatio
public class Record extends Model {

  private static final long serialVersionUID = 2776119609273705779L;

  @Constraints.Required
  public String artist;
  
  @Constraints.Required    
  public String name;
  
  @Id
  @Constraints.Min(10)
  public Long id;

  public static Finder<Long, Record> find = 
      new Finder<Long, Record>(Long.class, Record.class);

}
