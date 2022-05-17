$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Search.feature");
formatter.feature({
  "name": "Searching location",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchFunction"
    }
  ]
});
formatter.scenario({
  "name": "Validate the search box takes a maximum length of text for which it is designed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchFunction"
    },
    {
      "name": "@TC-02"
    }
  ]
});
formatter.step({
  "name": "user is on search screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchDefs.userIsOnSearchScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the keyword \"Vietnam Abiera Abangay SantoTolosa Lamisahan Landang\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchDefs.userEntersTheKeyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is unable to enter more than \"50\" characters into search box",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefs.userIsUnableToEnterMoreThanCharactersIntoSearchBox(String)"
});
formatter.result({
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: expected:\u003c[\"50\"]\u003e but was:\u003c[52]\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat com.backbase.assignment.steps.SearchSteps.verifyNumberOfCharacter(SearchSteps.java:25)\r\n\tat com.backbase.assignment.steps.SearchSteps$$EnhancerByCGLIB$$27e6cc84.CGLIB$verifyNumberOfCharacter$6(\u003cgenerated\u003e)\r\n\tat com.backbase.assignment.steps.SearchSteps$$EnhancerByCGLIB$$27e6cc84$$FastClassByCGLIB$$2664c338.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:372)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:157)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat com.backbase.assignment.steps.SearchSteps$$EnhancerByCGLIB$$27e6cc84.verifyNumberOfCharacter(\u003cgenerated\u003e)\r\n\tat com.backbase.assignment.defs.SearchDefs.userIsUnableToEnterMoreThanCharactersIntoSearchBox(SearchDefs.java:51)\r\n\tat ✽.user is unable to enter more than \"50\" characters into search box(src/test/resources/features/Search.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate search rules defined for  \"Start with\" the search key word",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchFunction"
    },
    {
      "name": "@TC-03"
    }
  ]
});
formatter.step({
  "name": "user is on search screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchDefs.userIsOnSearchScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the keyword \"Aban\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchDefs.userEntersTheKeyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search result shows all cities that have the name start with \"Aban\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefs.searchResultShowsAllCitiesThatHaveTheNameStartWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user views detail location of first city",
  "keyword": "And "
});
formatter.match({
  "location": "SearchDefs.userViewsDetailLocationOfFirstCity()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate search rules when keyword starts with/ends with space",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC-04"
    },
    {
      "name": "@TC-05"
    }
  ]
});
formatter.step({
  "name": "user is on search screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the \"\u003ckeyword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "search result shows all cities that have the name start with \"Baak\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword"
      ]
    },
    {
      "cells": [
        "\u0027 Baak\u0027"
      ]
    },
    {
      "cells": [
        "\u0027Abu \u0027"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate search rules when keyword starts with/ends with space",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchFunction"
    },
    {
      "name": "@TC-04"
    },
    {
      "name": "@TC-05"
    }
  ]
});
formatter.step({
  "name": "user is on search screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchDefs.userIsOnSearchScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"\u0027 Baak\u0027\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchDefs.userEntersThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search result shows all cities that have the name start with \"Baak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefs.searchResultShowsAllCitiesThatHaveTheNameStartWith(String)"
});
formatter.result({
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat com.backbase.assignment.steps.SearchSteps.verifySearchResultStartWith(SearchSteps.java:29)\r\n\tat com.backbase.assignment.steps.SearchSteps$$EnhancerByCGLIB$$27e6cc84.CGLIB$verifySearchResultStartWith$5(\u003cgenerated\u003e)\r\n\tat com.backbase.assignment.steps.SearchSteps$$EnhancerByCGLIB$$27e6cc84$$FastClassByCGLIB$$2664c338.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:372)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:157)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat com.backbase.assignment.steps.SearchSteps$$EnhancerByCGLIB$$27e6cc84.verifySearchResultStartWith(\u003cgenerated\u003e)\r\n\tat com.backbase.assignment.defs.SearchDefs.searchResultShowsAllCitiesThatHaveTheNameStartWith(SearchDefs.java:40)\r\n\tat ✽.search result shows all cities that have the name start with \"Baak\"(src/test/resources/features/Search.feature:21)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate search rules when keyword starts with/ends with space",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchFunction"
    },
    {
      "name": "@TC-04"
    },
    {
      "name": "@TC-05"
    }
  ]
});
formatter.step({
  "name": "user is on search screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchDefs.userIsOnSearchScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"\u0027Abu \u0027\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchDefs.userEntersThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search result shows all cities that have the name start with \"Baak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefs.searchResultShowsAllCitiesThatHaveTheNameStartWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate search rules defined for \"not case sensitive\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchFunction"
    },
    {
      "name": "@TC-06"
    },
    {
      "name": "@TC-11"
    }
  ]
});
formatter.step({
  "name": "user is on search screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchDefs.userIsOnSearchScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"a dos\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchDefs.userEntersThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search result shows all cities have the name starts with \"a dos\" ignore case",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchDefs.searchResultShowsAllCitiesHaveTheNameStartsWithIgnoreCase(String)"
});
formatter.result({
  "status": "passed"
});
});