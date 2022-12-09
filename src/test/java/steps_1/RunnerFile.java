package steps_1;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/features",
glue="steps_1")
public class RunnerFile extends AbstractTestNGCucumberTests {

}
