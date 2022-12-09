package stepDef;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/feature_1", glue="stepDef")
public class RunnerFile extends AbstractTestNGCucumberTests{

}
