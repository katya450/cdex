# mysql -u root -p < create_database.sql
DROP DATABASE IF EXISTS cdex;
CREATE DATABASE cdex;
GRANT ALL ON cdex.* TO cdex@localhost IDENTIFIED BY 'cdex';