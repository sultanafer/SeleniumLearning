package stepsA;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/feature_2", glue="stepsA", plugin={"html:reports"})
public class RunnerFileStebA  extends AbstractTestNGCucumberTests {

}
