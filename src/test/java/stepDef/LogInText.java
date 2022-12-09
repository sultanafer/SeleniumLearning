package stepDef;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogInText {
	ChromeDriver driver;
	
	@Given("Launch Chrome browser and load url")
	public void launch_Chrome_browser_and_load_url() {
	 System.setProperty("webdriver.chrome.driver", "./driver/chromedriver/exe");
	    driver=new ChromeDriver();
	   driver.get("http://leaftaps.com/opentaps");
	}

	@Given("enter username as (.*)")
	public void enter_username_as_DemoSalesManager(String uname) {
	    driver.findElementById("username").sendKeys(uname);
	}

	@Given("enter password as (.*)")
	public void enter_password_as_crmsfa(String pwd) {
	   driver.findElementById("password").sendKeys(pwd);
	}

	@When("click the login button")
	public void click_the_login_button() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("its navigates the Homepage")
	public void its_navigates_the_Homepage() {
	    driver.findElementByClassName("decorativeSubmit").click();
	}

	@Then("click the logout button")
	public void click_the_logout_button() {
		driver.findElementByClassName("decorativeSubmit").click();
	}

	@Then("close the browser")
	public void close_the_browser() {
	    driver.close();
	}

	@Given("enter username as DemoCSR")
	public void enter_username_as_DemoCSR() {
	    driver.findElementById("username").sendKeys("DemoCSR");
	}

	/*@Given("enter username as ssss")
	public void enter_username_as_ssss() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}*/

	@Then("verify the error message")
	public void verify_the_error_message() {
		  System.out.println( driver.getTitle()); 
	  
	}


}
