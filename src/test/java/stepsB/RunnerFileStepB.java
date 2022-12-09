package stepsB;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/feature_3", glue="stepsB", plugin={"html:reports"},tags="@FUNCTIONAL")
public class RunnerFileStepB extends AbstractTestNGCucumberTests {

}
