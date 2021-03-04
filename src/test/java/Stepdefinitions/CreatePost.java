package Stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import POM.PageObjects;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreatePost extends Baseclass {
	
	
	@When("Click on create post")
	public void click_on_create_post() {
		PageFactory.initElements(driver, PageObjects.class);
		PageObjects.CreateButton.click();
//	    driver.findElement(By.xpath("//div[@class='icon_wrap']//div[@class='icons']")).click();
	}

	@Then("Create Post page navigte")
	public void create_Post_page_navigte() {
		System.out.println("redirecting to Comment page");
	    
	}

	@Given("Enter comment on comment box")
	public void enter_comment_on_comment_box() {
		PageFactory.initElements(driver,PageObjects.class);
		PageObjects.CommentBody.sendKeys("hello");
//		driver.findElement(By.xpath("//textarea[@placeholder='Your post here']")).sendKeys("Hi all");
	}

	@When("click on post button")
	public void click_on_post_button() {
		PageFactory.initElements(driver,PageObjects.class);
		PageObjects.PostSendButton.click();
//		driver.findElement(By.xpath("//div[@class='post_submit_btn']")).click();
	}

	@Then("Post should be created successfully")
	public void post_should_be_created_successfully() {
	    System.out.println("Post created successfully");
	}

	@But("Without enter comments in comment box")
	public void Withoutentercommentsincommentbox()
	{
		PageFactory.initElements(driver, PageObjects.class);
		PageObjects.CommentBody.sendKeys("");
//		driver.findElement(By.xpath("//textarea[@placeholder='Your post here']")).sendKeys("");
		
	}
	
	@But("Post should be Empty")
	public void post_should_be_Empty() {
		System.out.println("post is empty");
	}
	
	@And("Used waits")
	public void Usedwaits() throws InterruptedException
	{
		Thread.sleep(3000);
	}

}
