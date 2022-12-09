Feature: Automate Testleaf Application

Scenario: TC001_Login and Logout 

	Given Launch chrome browser and load url 
	And enter username as DemoSalesManager
	And enter password as crmsfa
	When click the login button 
	Then its navigated Homepage 
	And  click the logout button
	And close browser
	
 
Scenario: TC002_Login and Logout for failure

	Given Launch chrome browser and load url 
	And enter Username as ssssss 
	And enter password as crmsfa 
	When click the login button 
	Then its navigate Homepage
	But verify error msg
	And close browser