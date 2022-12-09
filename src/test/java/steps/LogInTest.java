package steps;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LogInTest {
	public ChromeDriver driver;
	
	@Given("Launch chrome browser and load url")
	public void launch_chrome_browser_and_load_url() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","./drivers/chromedriver.exe");
	 driver = new ChromeDriver();
		driver.get("http://leaftaps.com/opentaps");
	    driver.manage().window().maximize();
	    Thread.sleep(2000);
	}

	@Given("enter username as DemoSalesManager")

		public void enter_username_as_DemoSlalesManager() {
			driver.findElementById("username").sendKeys("DemoSalesManager");  
		}
		
	
	
	@Given("enter password as crmsfa")
	public void enter_password_as_crmsfa() {
		driver.findElementById("password").sendKeys("crmsfa");  
	}

	@Then("its navigated Homepage")
	public void its_navigated_Homepage() {
        System.out.println(driver.getTitle());   
	}

	@Then("close browser")
	public void close_browser() {
		 driver.close();
	}

	@Given("enter Username as ssssss")
	public void enter_Username_as_ssssss() {
		driver.findElementById("username").sendKeys("ssssss");   
	}

	@Then("its navigate Homepage")
	public void its_navigate_Homepage() {
		System.out.println(driver.getTitle());   
	}
	
	}

	
	/*@Given("Launch Chrome browser and load url")

	public void launch_Chrome_browser_and_load_url() {
	System.setProperty("webdriver.chrome.driver","C:\\Users\\sulta\\eclipse-workspace\\SeleniumLearning\\.\\drivers\\chromedriver.exe");
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
		driver.findElementByClassName("DecorativeSubmit").click();


	    
	}

	@Then("Its navigated Homepage")
	public void its_navigated_Homepage() {
		System.out.println(driver.getTitle());   
	}

	@Then("click the logout button")
	public void click_the_logout_button() {
		driver.findElementByClassName("DecorativeSubmit").click();

   
	}

	@Then("close the browser")
	public void close_the_browser() {
	    driver.close();
	}

	@Given("Enter username as ddddd")
	public void enter_username_as_ddddd() {
		driver.findElementById("username").sendKeys("ddddd");    
	}

	@Then("Its navigated same page")
	public void its_navigated_same_page() {
	   //System.out.println(driver.getTitle()); 
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
}*/
