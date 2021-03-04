Feature: Create post functionality testing
@smoke
Scenario: Create post test
Given Enter valid user name as shobanvikki 
And Enter the Valid password as Smrs321#   
When Click on Login button  
Then Successful login 
When  Click on create post
Then  Create Post page navigte
Given Enter comment on comment box
When click on post button
Then Post should be created successfully
And Used waits

@smoke
Scenario: Create post empty test
Given Enter valid user name as shobanvikki 
And Enter the Valid password as Smrs321#   
When Click on Login button   
Then Successful login 
When  Click on create post
Then  Create Post page navigte
But   Without enter comments in comment box
When click on post button
But Post should be Empty
And Used waits