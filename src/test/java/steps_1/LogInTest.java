package steps_1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogInTest {
	public ChromeDriver driver;
	
	@Given("Launch Chrome browser and load url")
	public void launch_Chrome_browser_and_load_url() {
	 System.setProperty("webdriver.chrome.driver","./driver/chromedriver.exe");   
	 ChromeDriver driver = new ChromeDriver();
		driver.get("http://leaftaps.com/opentaps");
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}

	@Given("Enter username as DemoSlalesManager")
	public void enter_username_as_DemoSlalesManager() {
		driver.findElementById("username").sendKeys("DemoSalesManager");

    
	}

	@Given("Enter password as crmsfa")
	public void enter_password_as_crmsfa() {
		driver.findElementById("password").sendKeys("crmsfa");

   
	}

	@When("click the login button")
	public void click_the_login_button() {
		driver.findElementByClassName("decorativeSubmit").click();   
	}

	@Then("Its navigated Homepage")
	public void its_navigated_Homepage() {
	 driver.close();   
	}

	@Then("click the logout button")
	public void click_the_logout_button() {
		driver.findElementByClassName("decorativeSubmit").click();  
	}

	@Then("close the browser")
	public void close_the_browser() {
	    
	}

	@Given("Enter username as ddddd")
	public void enter_username_as_ddddd() {
		driver.findElementById("username").sendKeys("ddddd");

    
	}

	@Then("Its navigated same page")
	public void its_navigated_same_page() {
		 System.out.println(driver.getTitle());  
	}

	@Then("verify error msg")
	public void verify_error_msg() throws InterruptedException {
		 String text = driver.findElementById("errorDiv").getText(); 
		 System.out.println(text);
		 if (text.contains("The Following Errors Occured:")) {
			 System.out.println("error msg  is matched");
		 }
		 else {
			 System.out.println("error msg  not matched");
		}

		Thread.sleep(3000);   
	}



}
