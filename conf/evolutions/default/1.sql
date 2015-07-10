# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table record (
  id                        bigint auto_increment not null,
  artist                    varchar(255),
  name                      varchar(255),
  constraint pk_record primary key (id))
;




# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table record;

SET FOREIGN_KEY_CHECKS=1;

