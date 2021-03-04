Feature: Login Functionality of baeroad application
@regression
Scenario: Test Using Valid login Credentials
Given Enter valid user name as shobanvikki 
And Enter the Valid password as Smrs321#   
When Click on Login button  
Then Successful login 
@regression
Scenario Outline: Test Using InValid login Credentials
Given Enter valid user name as <username> 
And Enter the Valid password as <password>   
When Click on Login button  
But UnSuccessful login
Examples:
|username|password|
|shobanvikki|Smrs|
|shobanvik|Smrs321#|
|shobanvik|Smrs31#|
||Smrs321#|
|shobanvikki||
|||


