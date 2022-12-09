package step_4;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/features",
glue="step_4")
public class RunnerFile extends AbstractTestNGCucumberTests {

}
