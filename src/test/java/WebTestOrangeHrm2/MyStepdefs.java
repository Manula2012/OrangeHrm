package WebTestOrangeHrm2;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyStepdefs {

    LogInPage logInPage = new LogInPage();
    @Given("user is in the login page")
    public void userIsInTheLoginPage() {
    }

    @When("user enters invalid {string}")
    public void userEntersInvalid(String username)
    {
        logInPage.userEntersUsername(username);
    }

    @Then("user should not be able to log in")
    public void userShouldNotBeAbleToLogIn(String password)
    {
        logInPage.userEntersPassword(password);
        logInPage.clickOnLogInButton();
    }

    @And("user should be able to see {string}")
    public void userShouldBeAbleToSee(String expected_error_message)
    {
        logInPage.assertErrorMessage(expected_error_message);
    }
}
