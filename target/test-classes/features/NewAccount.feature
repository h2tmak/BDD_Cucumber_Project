Feature: Techfios bank and cash New Account Functionality 
@smoke
Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
	Given User is on the techfios login page 
	When User enters the "<username>"   
	When User enters the "<password>" 
	And  User clicks on "login" 
	Then User should land on "Dashboard" page 
	And User clicks on "bankCash" 
	And User clicks on "newAccount" 
	Then User should land on "Account" page
	And User enters "<accountTitle>" in accounts page 
	And User enters "<description>" in accounts page 
	And User enters "<initialBalance>" in accounts page 
	And User enters "<accountNumber>" in accounts page 
	And User enters "<contactPerson>" in accounts page 
	And User enters "<Phone>" in accounts page 
	And User clicks on "submit" 
	Then User should be able to validate account created successfully
	
	Examples:
	|username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|
	|demo@techfios.com|abc123|Tech_Mak|saving|1000|1001|Mak|8886705678|
	
	
	
