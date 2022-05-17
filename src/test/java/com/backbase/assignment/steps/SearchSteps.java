package com.backbase.assignment.steps;

import com.backbase.assignment.pages.SearchPage;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


public class SearchSteps {

    SearchPage searchPage;

    public void startApplication() {
        searchPage.startApplication();

    }

    public void enterTheKeyword(String keyword) {
        searchPage.enterTheKeyword(keyword);
    }

    public void verifyNumberOfRecord() {
        assertThat(searchPage.getListCities().size()).isEqualTo(20);
    }

    public void verifyNumberOfCharacter(String maxlength) {
        assertThat(searchPage.getTheKeyword().length()).isEqualTo(maxlength);
    }

    public void verifySearchResultStartWith(String keyword) {
        assertThat(searchPage.isResultExisted()).isEqualTo(true);
        searchPage.isResultStartsWith(keyword);
    }

    public void verifySearchResultIgnoreCaseStartWith(String keyword) {
        assertThat(searchPage.isResultExisted()).isEqualTo(true);
        searchPage.isResultIgnoreCaseStartsWith(keyword);
    }

    public void selectFirstCity() {
        searchPage.selectFirstCity();
    }
}
