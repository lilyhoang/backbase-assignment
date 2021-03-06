package com.backbase.assignment;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features="src/test/resources/features/",tags = "@SearchFunction",
        plugin =    {
        "pretty", "html:target/site/serenity/",
        "json:target/serenity-reports/cucumber_report.json",
        "rerun:target/site/serenity/rerun.txt"
        })
public class DefinitionTestSuite {
}
