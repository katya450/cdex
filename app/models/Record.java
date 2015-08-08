package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import play.data.validation.Constraints;
import play.db.ebean.Model;

@Entity                                     //@ = annotaatio
@Table(name="records")
public class Record extends Model {

  private static final long serialVersionUID = 2776119609273705779L;
  
  public enum MediaType {
      CD, DVD, LP, BD, VHS, MC
  }
  
  @Constraints.Required
  @Column(nullable = false)
  public String artist;
  
  @Constraints.Required    
  @Column(nullable = false)
  public String name;
  
  @Id
  @Constraints.Min(10)
  public Long id;

  @Enumerated(EnumType.ORDINAL)
  public MediaType mediaType;
  
  public static Finder<Long, Record> find = 
      new Finder<Long, Record>(Long.class, Record.class);

}
