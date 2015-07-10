package models;

import javax.persistence.Entity;
import javax.persistence.Id;
import play.data.validation.Constraints;
import play.db.ebean.Model;

@Entity                                     //@ = annotaatio
public class Record extends Model {
    @Constraints.Required
    public String artist;
    
    @Constraints.Required    
    public String name;
    
    @Id
    @Constraints.Min(10)
    public Long id;
}
