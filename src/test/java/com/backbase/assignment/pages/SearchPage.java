package com.backbase.assignment.pages;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.webdriver.WebDriverFacade;
import org.openqa.selenium.By;
import net.serenitybdd.core.pages.WebElementFacade;

import java.util.stream.Collectors;

import net.serenitybdd.core.annotations.findby.FindBy;
import org.openqa.selenium.Point;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

@DefaultUrl("https://www.backbase.com/")
public class SearchPage extends PageObject {
    @FindBy(id = "search")
    private WebElementFacade txtSearch;

    @FindBy(id = "citiesList")
    private WebElementFacade lstCities;

    @FindBy(xpath = "(//*[@id='cityName'])[1]")
    private WebElementFacade cityItem;


    public void startApplication() {
    }

    public List<String> getListCities() {
        WebElementFacade cityList = find(By.id("citiesList"));
        return cityList.findElements(By.id("cityName")).stream()
                .map(element -> element.getText())
                .collect(Collectors.toList());
    }

    public boolean isResultExisted() {
        return isElementVisible(By.id("citiesList"));
    }

    public boolean isResultStartsWith(String keyword) {
        boolean isMatched = true;
        List<String> citiesList = getListCities();
        for (String city : citiesList) {
            if (!city.startsWith(keyword)) {
                isMatched = false;
            }
        }
        return isMatched;

    }

    public boolean isResultIgnoreCaseStartsWith(String keyword) {
        boolean isMatched = true;
        List<String> citiesList = getListCities();
        for (String city : citiesList) {
            if (!city.toLowerCase().startsWith(keyword)) {
                isMatched = false;
            }
        }
        return isMatched;

    }

    public void enterTheKeyword(String keyword) {
        txtSearch.clear();
        txtSearch.type(keyword);
    }

    public String getTheKeyword() {
        return txtSearch.getText();
    }


    public void selectFirstCity() {
        List<AndroidElement> elements=mobileDriver().findElements(By.id("cityName"));
        AndroidElement androidElement=elements.get(0);
        tabOnElementByPosition(androidElement);
        waitUntilElementVisibleByXpath("//*[@content-desc='Google Map']");

    }
    public void waitUntilElementVisibleByXpath(String xpath) {
        WebDriverWait wait = new WebDriverWait(getDriver(), 15);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
    }
    private void tabOnElementByPosition(AndroidElement androidElement) {
        Point location = androidElement.getCenter();
        TouchAction touchAction = new TouchAction(mobileDriver());
        touchAction.tap(PointOption.point(location.getX(), location.getY() )).perform();

    }

    public AppiumDriver<AndroidElement> mobileDriver() {
        return (AppiumDriver<AndroidElement>) ((WebDriverFacade) getDriver()).getProxiedDriver();
    }


}