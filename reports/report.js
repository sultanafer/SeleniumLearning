$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature_2/doc.feature");
formatter.feature({
  "name": "Automated Leaftaps Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch chrome browser and load URL",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username as \u003cusername\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "enter password as \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "Click the logout button",
  "keyword": "Then "
});
formatter.step({
  "name": "Close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa"
      ]
    },
    {
      "cells": [
        "DemoCSR",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch chrome browser and load URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.launch_chrome_browser_and_load_URL()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\sulta\\eclipse-workspace\\SeleniumLearning\\.\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepsA.LogInStepA.launch_chrome_browser_and_load_URL(LogInStepA.java:17)\r\n\tat ✽.Launch chrome browser and load URL(file:src/test/java/feature_2/doc.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LogInStepA.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.its_navigated_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.click_the_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch chrome browser and load URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.launch_chrome_browser_and_load_URL()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\sulta\\eclipse-workspace\\SeleniumLearning\\.\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepsA.LogInStepA.launch_chrome_browser_and_load_URL(LogInStepA.java:17)\r\n\tat ✽.Launch chrome browser and load URL(file:src/test/java/feature_2/doc.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter username as DemoCSR",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LogInStepA.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.its_navigated_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.click_the_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "TC002_CreatLead",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch chrome browser and load URL",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "Given "
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "Given "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "Click CRM/SFA link",
  "keyword": "And "
});
formatter.step({
  "name": "Click Create Lead link button",
  "keyword": "And "
});
formatter.step({
  "name": "Enter company name as \u003ccompanyname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter first name as \u003cfirstname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter last name as \u003clastname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Choose Direct Mail from source",
  "keyword": "And "
});
formatter.step({
  "name": "Close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "companyname",
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "ABC",
        "Hema",
        "Ma"
      ]
    },
    {
      "cells": [
        "XYZ",
        "He",
        "Mali"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC002_CreatLead",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch chrome browser and load URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.launch_chrome_browser_and_load_URL()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\sulta\\eclipse-workspace\\SeleniumLearning\\.\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepsA.LogInStepA.launch_chrome_browser_and_load_URL(LogInStepA.java:17)\r\n\tat ✽.Launch chrome browser and load URL(file:src/test/java/feature_2/doc.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LogInStepA.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click CRM/SFA link",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.click_CRM_SFA_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Create Lead link button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.click_Create_Lead_link_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter company name as ABC",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.enter_company_name_as_ABC(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter first name as Hema",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.enter_first_name_as_Hema(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter last name as Ma",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.enter_last_name_as_Ma(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Direct Mail from source",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.choose_Direct_Mail_from_source()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC002_CreatLead",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch chrome browser and load URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.launch_chrome_browser_and_load_URL()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\sulta\\eclipse-workspace\\SeleniumLearning\\.\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepsA.LogInStepA.launch_chrome_browser_and_load_URL(LogInStepA.java:17)\r\n\tat ✽.Launch chrome browser and load URL(file:src/test/java/feature_2/doc.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LogInStepA.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click CRM/SFA link",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.click_CRM_SFA_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Create Lead link button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.click_Create_Lead_link_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter company name as XYZ",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.enter_company_name_as_ABC(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter first name as He",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.enter_first_name_as_Hema(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter last name as Mali",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.enter_last_name_as_Ma(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Direct Mail from source",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.choose_Direct_Mail_from_source()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC003_CreatAccount",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch chrome browser and load URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.launch_chrome_browser_and_load_URL()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\sulta\\eclipse-workspace\\SeleniumLearning\\.\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepsA.LogInStepA.launch_chrome_browser_and_load_URL(LogInStepA.java:17)\r\n\tat ✽.Launch chrome browser and load URL(file:src/test/java/feature_2/doc.feature:44)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepA.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LogInStepA.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click CRM/SFA link",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.click_CRM_SFA_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Creat Account link button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.creat_Account_link_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Account name as ABC.inc",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.enter_Account_name_as_ABC_inc()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Annual Revenue as $50000",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepA.enter_Annual_Revenue_as_$(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepA.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});