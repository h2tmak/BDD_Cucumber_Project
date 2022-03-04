package pages;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCashPage {

	WebDriver driver;

	public BankAndCashPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//span[text()='Bank & Cash']")
	WebElement BANK_AND_CASH_BUTTON;
	@FindBy(how = How.XPATH, using = "//a[text()='New Account']")
	WebElement NEW_ACCOUNT_BUTTON;
	@FindBy(how = How.ID, using = "account")
	WebElement ACCOUNT_TITLE;
	@FindBy(how = How.ID, using ="description" )
	WebElement DESCRIPTION;
	@FindBy(how = How.ID, using ="balance" )
	WebElement BALANCE;
	@FindBy(how = How.ID, using = "account_number")
	WebElement ACCOUNT_NUMBER;
	@FindBy(how = How.ID, using ="contact_person" )
	WebElement CONTACT_PERSON;
	@FindBy(how = How.ID, using ="contact_phone" )
	WebElement CONTACT_PHONE;
	@FindBy(how = How.XPATH, using ="//button[@class='btn btn-primary']" )
	WebElement SUBMIT_BUTTON;
	@FindBy(how = How.XPATH, using ="//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	WebElement ACCOUNT_SUCCCESSFULL;

//	public void insertUserName(String userName) {
//		USERNAME_ELEMENT.sendKeys(userName);
//	}
//
//	public void insertPasword(String password) {
//		PASSWORD_ELEMENT.sendKeys(password);
//	}

	public void clickBankAndCash() {
		BANK_AND_CASH_BUTTON.click();
	}
	public void clickNewAccount() {
		NEW_ACCOUNT_BUTTON.click();
	}
	public  void insertAccountTitle(String accountTitle) {
		
		
		ACCOUNT_TITLE.sendKeys(accountTitle );
	}
	public void insertDescription(String description) {
		DESCRIPTION.sendKeys(description);
		
	}
	public void insertBalance(String balance) {
		BALANCE.sendKeys(balance);
		
	} 
	public void insertAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER.sendKeys(accountNumber);
		
	}
	public void insertContactPerson(String contactPerson) {
		CONTACT_PERSON.sendKeys(contactPerson);
		
	}
	public void insertContactPhone(String contactPhone) {
		CONTACT_PHONE.sendKeys(contactPhone);
		
	}
	public void clickSubmitButton() {
		SUBMIT_BUTTON.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}
	public String accountSuccessfull() {
		return ACCOUNT_SUCCCESSFULL.getText();
	}
	

}
