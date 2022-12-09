Feature: Automate Leaftaps Application

Scenario Outline: TC001_Login and Logout

Given Launch Chrome browser and load url
And enter username as <username>
And enter password as <password>
When click the login button 
Then its navigates the Homepage
And click the logout button
And close the browser



Examples: 

|username|password|
|DemoSalesManager|crmsfa|
|DemoCSR|crmsfa|

Scenario:  TC002_Login and Logout for failures
Given Launch Chrome browser and load url
And enter username as ssss
And enter password as crmsfa
When click the login button 
Then its navigates the Homepage
But verify the error message
And close the browser
        