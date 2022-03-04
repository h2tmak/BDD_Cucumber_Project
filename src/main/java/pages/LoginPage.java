package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
//	String userName = "demo@techfios.com";
//	String password = "abc123";
	

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
		
	
	@FindBy(how = How.XPATH, using="//*[@id='username']") WebElement USERNAME_ELEMENT;
	@FindBy(how = How.XPATH, using="//*[@id='password']") WebElement PASSWORD_ELEMENT;
	@FindBy(how = How.XPATH, using="//button[@name='login']") WebElement SIGNIN_ELEMENT;
	
	
	public void insertUserName(String userName) {
		USERNAME_ELEMENT.sendKeys(userName);
	}
	public void insertPasword(String password) {
		PASSWORD_ELEMENT.sendKeys(password);
	}
	public void clickSignIn() {
		SIGNIN_ELEMENT.click();
	}
	public String getPageTitle() {
		return driver.getTitle();
	}
	
	
}
