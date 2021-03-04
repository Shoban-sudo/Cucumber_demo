package Stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Baseclass {
	@Before
	public void BrowserLaunch(Scenario sc)
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\MEN IN BLUE\\Desktop\\Selenium\\file\\drivernew\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("https://stage.baeroad.com/");
	    driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	    System.out.println(sc.getName());
	    System.out.println(sc.getId());
	}
	
	@After
	public void CloseBrowser(Scenario sc) 
	{
		
        driver.close();
        System.out.println(sc.getStatus());
	}
	

}
