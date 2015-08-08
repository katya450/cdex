# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table record (
  id                        bigint not null,
  artist                    varchar(255),
  name                      varchar(255),
  constraint pk_record primary key (id))
;

create sequence record_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists record;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists record_seq;

