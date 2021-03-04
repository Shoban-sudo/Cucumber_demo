package Runnerclass;

import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features= {"src/test/java/FeatureFiles"},
                            glue = "Stepdefinitions",
                            monochrome = true,
//                           tags = {"@smoke"},
                            plugin = {"html:report"}
//                            dryRun = true,
//                            snippets = SnippetType.CAMELCASE

)
public class run extends AbstractTestNGCucumberTests  {
	

}

