package stepsB;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogInStepsB {
	
	ChromeDriver driver;
	
	@Given("Launch chrome browser and load URL")
	public void launch_chrome_browser_and_load_URL() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
	    driver= new ChromeDriver();
	    driver.get("http://leaftaps.com/opentaps/control/main");
	    Thread.sleep(2000);
	}
 
	

	@Given("enter username as (.*)")
	public void enter_username_as_DemoSalesManager(String uname) {
		driver.findElementById("username").sendKeys(uname);
	}

	@Given("enter password as (.*)")
	public void enter_password_as_crmsfa(String pwd) {
		driver.findElementById("password").sendKeys(pwd);
	}

	@When("Click the login button")
	public void click_the_login_button() {
		driver.findElementByClassName("decorativeSubmit").click();
	}

	@Then("its navigated Homepage")
	public void its_navigated_Homepage() {
	    System.out.println(driver.getTitle());;
	}

	/*@Then("Click the logout button")
	public void click_the_logout_button() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}*/

	@Then("Close browser")
	public void close_browser() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	/*@Given("enter username as DemoCSR")
	public void enter_username_as_DemoCSR() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}*/

	@When("Click CRM\\/SFA link")
	public void click_CRM_SFA_link() {
	    driver.findElementByLinkText("CRM/SFA").click();
	}

	@When("Click Creat Lead link button")
	public void click_Creat_Lead_link_button() {
	    driver.findElementByLinkText("Create Lead").click();
	}

	@When("Enter company name as (.*)")
	public void enter_company_name_as_ABC(String cname) {
		driver.findElementById("createLeadForm_companyName").sendKeys(cname);
	}

	@When("Enter first name as (.*)")
	public void enter_first_name_as_Hema(String fname) {
		driver.findElementById("createLeadForm_firstName").sendKeys(fname);
	}

	@When("Enter last name as (.*)")
	public void enter_last_name_as_Ma(String lname) {
		driver.findElementById("createLeadForm_lastName").sendKeys(lname);
	}

	@When("Choose Direct Mail from source")
	public void choose_Direct_Mail_from_source() {
	    WebElement src = driver.findElementById("createLeadForm_dataSourceId");
	    Select dd=new Select(src);
	    dd.selectByVisibleText("Direct Mail");
	
	}

	/*@When("Enter company name as (.*)")
	public void enter_company_name_as_XYZ() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}*/

	/*@When("Enter first name as He")
	public void enter_first_name_as_He() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("Enter last name as Mali")
	public void enter_last_name_as_Mali() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("Enter company name as CBC")
	public void enter_company_name_as_CBC() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("Enter first name as Gopi")
	public void enter_first_name_as_Gopi() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("Enter last name as Raj")
	public void enter_last_name_as_Raj() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}*/

	

}
