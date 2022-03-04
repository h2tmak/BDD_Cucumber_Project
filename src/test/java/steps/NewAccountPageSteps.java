package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import junit.framework.Assert;
import pages.BankAndCashPage;
import pages.LoginPage;
import pages.TestBase;

public class NewAccountPageSteps extends TestBase{
	
	LoginPage loginPage;
	BankAndCashPage bankCashPage;
	
	@Before
	public void beforeRun() {
		init();
		loginPage=PageFactory.initElements(driver, LoginPage.class);
		bankCashPage=PageFactory.initElements(driver, BankAndCashPage.class);
			
	}
	
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() throws Throwable {
		driver.get("https://techfios.com/billing/?ng=admin/");
		Thread.sleep(3000);
	    
	}

	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_the(String loginData) throws Throwable {
		switch(loginData) {
		case"username":
			loginPage.insertUserName("demo@techfios.com");
			Thread.sleep(3000);
			
			break;
		case"password":
			loginPage.insertPasword("abc123");
			Thread.sleep(3000);
			break;
			default:
				System.out.println("Unable to get login data");
				
		
		}
	 
	}

	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String button) throws Throwable {
		switch (button) {
		case "login":
			loginPage.clickSignIn();
			Thread.sleep(3000);
			break;
		case "bankCash":
			bankCashPage.clickBankAndCash();
			Thread.sleep(3000);
			
			break;
		case "newAccount":
			bankCashPage.clickNewAccount();
			
			break;
		case "submit":
			bankCashPage.clickSubmitButton();
			Thread.sleep(3000);
			
			break;
		default:
			System.out.println("Could not click");
		}
	  
	}

	@Then("^User should land on \"([^\"]*)\" page$")
	public void user_should_land_on_page(String pageName) throws Throwable {
		switch(pageName) {
	    case "Dashboard":
	    	String actualPageTitle=loginPage.getPageTitle();
			String expectedPageTitle="Dashboard- iBilling";
			Assert.assertEquals("Wrong page",expectedPageTitle ,actualPageTitle );
			Thread.sleep(3000);
			takeScreenshot(driver);
	    	break;
	    case"Account":
	    	String aPageTitle=bankCashPage.getPageTitle();
			String ePageTitle="Accounts- iBilling";
			Assert.assertEquals("Wrong page",ePageTitle ,aPageTitle );
			Thread.sleep(3000);
			takeScreenshot(driver);
	    	break;
	    	default:
	    		System.out.println("Land on wrong page");
	    		break;
	    	
	    	
	    }
	  
	}

	

	@Then("^User enters \"([^\"]*)\" in accounts page$")
	public void user_enters_in_accounts_page(String insertedData) throws Throwable {
		switch(insertedData) {
		case"accountTitle":
			bankCashPage.insertAccountTitle("Tech_Mak"+generateRandomNumber(999));
			Thread.sleep(3000);
			break;
		case"description":
			bankCashPage.insertDescription("savings");
			Thread.sleep(3000);
			break;
		case"initialBalance":
			bankCashPage.insertBalance("10000");
			Thread.sleep(3000);
			break;
		case"accountNumber":
			bankCashPage.insertAccountNumber("4000"+generateRandomNumber(99999));
			Thread.sleep(3000);
			break;
		case"contactPerson":
			bankCashPage.insertContactPerson("MR Mak");
			Thread.sleep(3000);
			break;
		case"Phone":
			bankCashPage.insertContactPhone("402678"+generateRandomNumber(9999));
			Thread.sleep(3000);
			break;
		
			default:
				System.out.println("Could not insert data");
				break;
		}
	  
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
	   String expectedText="Account Created Successfully";
	   boolean actualText=bankCashPage.accountSuccessfull().contains(expectedText);
	   
       Assert.assertTrue("Account not created", actualText);
	   Thread.sleep(3000);
	   takeScreenshot(driver);
	}
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
