cdex
====
Install [Java](http://openjdk.java.net/install/), [MariaDB](https://downloads.mariadb.org/), [sbt](http://www.scala-sbt.org/download.html), [node.js and npm](https://nodejs.org/en/download/) and [bower](http://bower.io/#install-bower).

In project root:
- On Ubuntu, create symlink for nodejs so that bower finds it `ln -s /usr/bin/nodejs /usr/bin/node`.
- Install browser javascript libraries `bower install`.
- Create empty database `mysql -u root -p < scripts/create_database.sql`.
- Start application `sbt run`.
