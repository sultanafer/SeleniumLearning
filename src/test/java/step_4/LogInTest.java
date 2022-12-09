package step_4;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogInTest {
public ChromeDriver driver;
	@Given("Launch Chrome browser and load url")
	public void launch_Chrome_browser_and_load_url() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\sulta\\eclipse-workspace\\SeleniumLearning\\.\\drivers\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("http://leaftaps.com/opentaps");
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    
	}

	@Given("Enter username as (.*)")
	public void enter_username_as_DemoSlalesManager(String uname) {
	driver.findElementById("username").sendKeys(uname);   
	}

	@Given("Enter password as (.*)")
	public void enter_password_as_crmsfa(String pwd) {
	 driver.findElementById("password").sendKeys(pwd);
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

	@Given("Enter username as (.*)")
	public void enter_username_as_DemoCSR(String uname) {
		driver.findElementById("username").sendKeys(uname);   
	}

	@Given("Launch chrome browser and load url")
	public void launch_chrome_browser_and_load_url() {
	    
	}

	/* @Given("enter username as demosalesmanager")
	public void enter_username_as_demosalesmanager(String uname) {
	    
	}

	@Given("enter password as crmsfa")
	public void enter_password_as_crmsfa(String pwd) {
	    
	}*/

	@When("click CRMSFA")
	public void click_CRMSFA() {
		driver.findElementByLinkText("CRM/SFA").click();
	}

	@When("click leads link")
	public void click_leads_link() {
	    
	}

	@When("click createLead")
	public void click_createLead() {
		driver.findElementByLinkText("Create Lead").click();   
	}

	@When("enter the company as TCS (.*)")
	public void enter_the_company_as_TCS(String cname) {
		  driver.findElementById("createLeadForm_companyName").sendKeys(cname);    
	}

	@When("enter the firstname as Hema")
	public void enter_the_firstname_as_Hema(String fname) {
		 driver.findElementById("createLeadForm_firstName").sendKeys(fname);   
	}

	@When("enter the lastname as Mali")
	public void enter_the_lastname_as_Mali(String lname) {
		 driver.findElementById("createLeadForm_lastName").sendKeys(lname); 
	}

	@When("choose source as Website")
	public void choose_source_as_Website() {
		driver.findElementById(null);
	}

	@Then("its navigated ViewLeadPage")
	public void its_navigated_ViewLeadPage() {
	   
	}

	@Then("close browser")
	public void close_browser() {
	    
	}

	@When("enter the company as ABC")
	public void enter_the_company_as_ABC() {
	   
	}

	@When("enter the firstname as Raj")
	public void enter_the_firstname_as_Raj() {
	   
	}

	@When("enter the lastname as Kumar")
	public void enter_the_lastname_as_Kumar() {
	   
	}

	@When("enter the company as CBC")
	public void enter_the_company_as_CBC() {
	  
	}

	@When("enter the firstname as Gopi")
	public void enter_the_firstname_as_Gopi() {
	   
	}

	@When("enter the lastname as Jkumar")
	public void enter_the_lastname_as_Jkumar() {
	   
	}


	
	
}
