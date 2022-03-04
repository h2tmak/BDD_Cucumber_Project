$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/NewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on \"Dashboard\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on \"Account\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"accountTitle\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"description\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"initialBalance\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"accountNumber\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"contactPerson\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Phone\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Tech_Mak",
        "saving",
        "1000",
        "1001",
        "Mak",
        "8886705678"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2051302600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on \"Dashboard\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on \"Account\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"accountTitle\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"description\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"initialBalance\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"accountNumber\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"contactPerson\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Phone\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAccountPageSteps.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 4019267099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 17
    }
  ],
  "location": "NewAccountPageSteps.user_enters_the(String)"
});
formatter.result({
  "duration": 3100479699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 17
    }
  ],
  "location": "NewAccountPageSteps.user_enters_the(String)"
});
formatter.result({
  "duration": 3087917001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 16
    }
  ],
  "location": "NewAccountPageSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 4668798000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 21
    }
  ],
  "location": "NewAccountPageSteps.user_should_land_on_page(String)"
});
formatter.result({
  "duration": 3234474099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 16
    }
  ],
  "location": "NewAccountPageSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 3098647201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "NewAccountPageSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 632826800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account",
      "offset": 21
    }
  ],
  "location": "NewAccountPageSteps.user_should_land_on_page(String)"
});
formatter.result({
  "duration": 3163829301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountTitle",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3113373700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3122454000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "initialBalance",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3111070599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountNumber",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3119427500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactPerson",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3113361501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3106468900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "NewAccountPageSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 4232015299,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountPageSteps.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 3205544900,
  "status": "passed"
});
formatter.after({
  "duration": 685045801,
  "status": "passed"
});
});