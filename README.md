cdex
====

###A tiny project to get familiar with modern way to build web applications.

Install [Java](http://openjdk.java.net/install/), [PostgreSQL](https://www.postgresql.org/download/), [sbt](http://www.scala-sbt.org/download.html), [node.js and npm](https://nodejs.org/en/download/) and [bower](http://bower.io/#install-bower).

In project root:
- On Ubuntu, create symlink for nodejs so that bower finds it `ln -s /usr/bin/nodejs /usr/bin/node`.
- Install browser javascript libraries `bower install`.
- Create empty database `psql template1 < create_database.sql`.
- Start sbt `sbt`.
- To start application, on sbt command line type `run`.
- To create eclipse project files, on sbt command line type `eclipse`.
