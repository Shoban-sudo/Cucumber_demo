$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeatureFiles/CreatePost.feature");
formatter.feature({
  "name": "Create post functionality testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create post test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as shobanvikki",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as Smrs321#",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "login.successfulLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on create post",
  "keyword": "When "
});
formatter.match({
  "location": "CreatePost.click_on_create_post()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create Post page navigte",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePost.create_Post_page_navigte()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter comment on comment box",
  "keyword": "Given "
});
formatter.match({
  "location": "CreatePost.enter_comment_on_comment_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreatePost.click_on_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post should be created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePost.post_should_be_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Used waits",
  "keyword": "And "
});
formatter.match({
  "location": "CreatePost.Usedwaits()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create post empty test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as shobanvikki",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as Smrs321#",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "login.successfulLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on create post",
  "keyword": "When "
});
formatter.match({
  "location": "CreatePost.click_on_create_post()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create Post page navigte",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePost.create_Post_page_navigte()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Without enter comments in comment box",
  "keyword": "But "
});
formatter.match({
  "location": "CreatePost.Withoutentercommentsincommentbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreatePost.click_on_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post should be Empty",
  "keyword": "But "
});
formatter.match({
  "location": "CreatePost.post_should_be_Empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Used waits",
  "keyword": "And "
});
formatter.match({
  "location": "CreatePost.Usedwaits()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/FeatureFiles/login.feature");
formatter.feature({
  "name": "Login Functionality of baeroad application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test Using Valid login Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as shobanvikki",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as Smrs321#",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "login.successfulLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test Using InValid login Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "Enter valid user name as \u003cusername\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the Valid password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.step({
  "name": "UnSuccessful login",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "shobanvikki",
        "Smrs"
      ]
    },
    {
      "cells": [
        "shobanvik",
        "Smrs321#"
      ]
    },
    {
      "cells": [
        "shobanvik",
        "Smrs31#"
      ]
    },
    {
      "cells": [
        "",
        "Smrs321#"
      ]
    },
    {
      "cells": [
        "shobanvikki",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test Using InValid login Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as shobanvikki",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as Smrs",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UnSuccessful login",
  "keyword": "But "
});
formatter.match({
  "location": "login.UnSuccessfullogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Using InValid login Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as shobanvik",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as Smrs321#",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UnSuccessful login",
  "keyword": "But "
});
formatter.match({
  "location": "login.UnSuccessfullogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Using InValid login Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as shobanvik",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as Smrs31#",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UnSuccessful login",
  "keyword": "But "
});
formatter.match({
  "location": "login.UnSuccessfullogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Using InValid login Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as ",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as Smrs321#",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UnSuccessful login",
  "keyword": "But "
});
formatter.match({
  "location": "login.UnSuccessfullogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Using InValid login Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as shobanvikki",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as ",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UnSuccessful login",
  "keyword": "But "
});
formatter.match({
  "location": "login.UnSuccessfullogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Using InValid login Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid user name as ",
  "keyword": "Given "
});
formatter.match({
  "location": "login.enterValidUserNameAsShobanvikki(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Valid password as ",
  "keyword": "And "
});
formatter.match({
  "location": "login.enterTheValidPasswordAsSmrs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "login.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UnSuccessful login",
  "keyword": "But "
});
formatter.match({
  "location": "login.UnSuccessfullogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});