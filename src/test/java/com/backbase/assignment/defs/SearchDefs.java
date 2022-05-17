package com.backbase.assignment.defs;

import com.backbase.assignment.steps.SearchSteps;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;

public class SearchDefs {
    @Steps
    SearchSteps searchSteps;


    @Then("^user should see the result$")
    public void userShouldSeeTheResult() {
        searchSteps.verifyNumberOfRecord();

    }

    @When("^user enters the \"([^\"]*)\"$")
    public void userEntersThe(String keyword) {
        searchSteps.enterTheKeyword(keyword.replaceAll("'",""));
    }

    @When("^user enters the keyword \"([^\"]*)\"$")
    public void userEntersTheKeyword(String keyword) {
        searchSteps.enterTheKeyword(keyword);
    }


    @Given("^user is on search screen$")
    public void userIsOnSearchScreen() {
        searchSteps.startApplication();
    }

    @Then("^search result shows all cities that have the name start with \"([^\"]*)\"$")
    public void searchResultShowsAllCitiesThatHaveTheNameStartWith(String keyword) {
        searchSteps.verifySearchResultStartWith(keyword);
    }

    @Then("^search result shows all cities have the name starts with \"([^\"]*)\" without case sensitive$")
    public void searchResultShowsAllCitiesHaveTheNameStartsWithWithoutCaseSensitive(String keyword) {
        searchSteps.verifySearchResultIgnoreCaseStartWith(keyword);

    }

    @Then("^user is unable to enter more than \"([^\"]*)\" characters into search box$")
    public void userIsUnableToEnterMoreThanCharactersIntoSearchBox(String maxlength) {
        searchSteps.verifyNumberOfCharacter(maxlength);
    }

    @Then("^search result shows all cities have the name starts with \"([^\"]*)\" ignore case$")
    public void searchResultShowsAllCitiesHaveTheNameStartsWithIgnoreCase(String keyword)  {
        searchSteps.verifySearchResultIgnoreCaseStartWith(keyword);
    }

    @And("^user views detail location of first city$")
    public void userViewsDetailLocationOfFirstCity() {
        searchSteps.selectFirstCity();
    }
}
