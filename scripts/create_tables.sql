# mysql -u cdex -p cdex < create_tables.sql
CREATE TABLE IF NOT EXISTS records (
  record_id int(11) NOT NULL AUTO_INCREMENT,
  artist varchar(100) NOT NULL,
  name varchar(200) NOT NULL,
  PRIMARY KEY (record_id)
) ENGINE=InnoDB