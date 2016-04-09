name := """cdex"""

version := "1.0-SNAPSHOT"

lazy val root = project in file(".") enablePlugins(PlayJava) configs(FunTest) settings( inConfig(FunTest)(Defaults.testTasks) : _*)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  javaWs,
  "mysql" % "mysql-connector-java" % "5.1.18"
)

lazy val FunTest = config("it") extend(Test)

def funTestFilter(name: String): Boolean = ((name endsWith "ItTest") || (name endsWith "IntegrationTest"))
def unitTestFilter(name: String): Boolean = ((name endsWith "Test") && !funTestFilter(name))

testOptions in FunTest := Seq(Tests.Filter(funTestFilter))

testOptions in Test := Seq(Tests.Filter(unitTestFilter))