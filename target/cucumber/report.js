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
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cpassword\u003e\"",
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
  "name": "User enters \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cPhone\u003e\" in accounts page",
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
  "duration": 4126034300,
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
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"abc123\"",
  "matchedColumns": [
    1
  ],
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
  "name": "User enters \"Tech_Mak\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"saving\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"1000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"1001\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"Mak\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"8886705678\" in accounts page",
  "matchedColumns": [
    7
  ],
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
  "duration": 4615734900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "NewAccountPageSteps.user_enters_the(String)"
});
formatter.result({
  "duration": 3333566400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    }
  ],
  "location": "NewAccountPageSteps.user_enters_the(String)"
});
formatter.result({
  "duration": 3095341300,
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
  "duration": 5498801400,
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
  "duration": 3490992200,
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
  "duration": 3228736700,
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
  "duration": 1236667800,
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
  "duration": 3366640100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tech_Mak",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3200385700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saving",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3273408100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3211993900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1001",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3252778800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mak",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3283839500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8886705678",
      "offset": 13
    }
  ],
  "location": "NewAccountPageSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3223815600,
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
  "duration": 4617489700,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountPageSteps.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 3392931600,
  "status": "passed"
});
formatter.after({
  "duration": 855522100,
  "status": "passed"
});
});