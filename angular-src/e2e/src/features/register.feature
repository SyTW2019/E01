Feature: Error handling in Register Form

    Scenario: Incomplete form fields
        Given I am on the register page
        When I leave a blank field in the register form
        Then I should see an alert notification

    #Scenario: Invalid email 
     #   Given I am on the register page again
      #  When I introduce an invalid email
       # Then I should see another alert notification