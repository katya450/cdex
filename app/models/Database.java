package models;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import play.db.DB;

public class Database {

  public static int persist(Record record) throws Throwable {
    Connection conn = DB.getConnection();
    PreparedStatement stm = conn.prepareStatement("insert into records (artist, name) values (?, ?)",
        Statement.RETURN_GENERATED_KEYS);
    stm.setString(1, record.artist);
    stm.setString(2, record.name);
    stm.executeUpdate();
    
    ResultSet keys = stm.getGeneratedKeys();
    keys.next();
    return keys.getInt(1);
  }
  
}
