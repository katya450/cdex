package models;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import play.db.DB;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

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
  
  public static List<Record> getRecords() throws Throwable {
    Connection conn = DB.getConnection();
    Statement stm = conn.createStatement();
    ResultSet rs = stm.executeQuery("select * from records");
    List<Record> records = new ArrayList<Record>();
    while (rs.next()) {
      Record record = new Record();
      record.artist = rs.getString("artist");
      record.name = rs.getString("name");
      record.id = rs.getInt("record_id");
      records.add(record);
    }
    return Collections.unmodifiableList(records);
  }
}
