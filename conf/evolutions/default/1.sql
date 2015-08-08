# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table records (
  id                        bigint auto_increment not null,
  artist                    varchar(255) not null,
  name                      varchar(255) not null,
  media_type                integer,
  constraint ck_records_media_type check (media_type in (0,1,2,3,4,5)),
  constraint pk_records primary key (id))
;




# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table records;

SET FOREIGN_KEY_CHECKS=1;

