Feature: Automated Leaftaps Application

Scenario Outline: TC001_Login and Logout

Given Launch chrome browser and load URL
Given enter username as <username>
Given enter password as <password>
When Click the login button
Then its navigated Homepage
Then Click the logout button
Then Close browser 

Examples:
         |username|password|
         |DemoSalesManager|crmsfa|
         |DemoCSR|crmsfa|





Scenario Outline: TC002_CreatLead

Given Launch chrome browser and load URL
Given enter username as DemoSalesManager
Given enter password as crmsfa
When Click the login button
And Click CRM/SFA link
And Click Create Lead link button
And Enter company name as <companyname>
And Enter first name as <firstname>
And Enter last name as <lastname>
And Choose Direct Mail from source
Then Close browser 

Examples: 
         |companyname|firstname|lastname|
         |ABC|Hema|Ma|
         |XYZ|He|Mali|


Scenario: TC003_CreatAccount

Given Launch chrome browser and load URL
Given enter username as DemoSalesManager
Given enter password as crmsfa
When Click the login button
And Click CRM/SFA link
And Creat Account link button
And Enter Account name as ABC.inc
And Enter Annual Revenue as $50000
Then Close browser



