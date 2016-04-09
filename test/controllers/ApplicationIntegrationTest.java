package controllers;


import org.junit.*;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import com.gargoylesoftware.htmlunit.BrowserVersion;

import play.test.*;
import play.libs.F.*;
import static play.test.Helpers.*;
import static org.fest.assertions.Assertions.*;

public class ApplicationIntegrationTest {

  @Test
  public void test() {
    running(testServer(3333, fakeApplication(inMemoryDatabase())), new HtmlUnitDriver(BrowserVersion.CHROME), new Callback<TestBrowser>() {
      public void invoke(TestBrowser browser) {
        browser.goTo("http://localhost:3333");
        assertThat(browser.pageSource()).contains("CDEX");
      }
    });
  }
  
}
