package Stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;


import POM.PageObjects;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login extends Baseclass {

	
	
	@Given("Enter valid user name as (.*)")
	public void enterValidUserNameAsShobanvikki(String Name) {
		 PageFactory.initElements(driver,PageObjects.class);
		 PageObjects.UserName.sendKeys(Name);
		 
//		 driver.findElement(By.id("email")).sendKeys(Name);
	}

	@Given("Enter the Valid password as (.*)")
	public void enterTheValidPasswordAsSmrs(String Pss) {
		PageFactory.initElements(driver,PageObjects.class);
		PageObjects.Password.sendKeys(Pss);
//		driver.findElement(By.id("password")).sendKeys(Pss);  	
	}

	@When("Click on Login button")
	public void clickOnLoginButton() {
		PageFactory.initElements(driver,PageObjects.class);
		PageObjects.LoginButton.click();
//		driver.findElement(By.xpath("//span[@class='MuiButton-label']")).click();
	}

	@Then("Successful login")
	public void successfulLogin() throws InterruptedException {
		 System.out.println("Login successful");
		 
	}
	
    @But("UnSuccessful login")
	public void UnSuccessfullogin()
	{
		System.out.println("UnSuccessful login");
	}
	
	
	
}
