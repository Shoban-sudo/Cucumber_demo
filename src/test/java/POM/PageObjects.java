package POM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PageObjects {
	@FindBy(id="email")
	public static WebElement UserName;
	
	@FindBy(id="password")
	public static WebElement Password;

	@FindBy(xpath="//button[contains(@class,'MuiButtonBase-root MuiButton-root jss6')]")
	public static WebElement LoginButton;
	
	@FindBy(xpath = "//h1[contains(@class,'descri')]")
	public static WebElement CreateButton;
	
	@FindBy(xpath="//textarea[contains(@type,text)]")
	public static WebElement CommentBody;
	
	@FindBy(xpath="//div[contains(@class,'post_submit_btn')]")
	public static WebElement PostSendButton;
	
	
}
