package WebTestOrangeHrm2;

import org.openqa.selenium.By;

public class LogInPage extends Utils {

    private By _userName = By.id("txtUsername");
    private By _passWord = By.id("txtPassword");
    private By _login =By.cssSelector("input#btnLogin");
    private By _errorMessage = By.cssSelector("span#spanMessage");
    private String expectedInvalidCredentials = "Invalid credentials";
    private String expectedEmptyUserName = "Username cannot be empty";
    private String expectedEmptyPassword = "Password cannot be empty";



public void userEntersUsername(String username)
{
    enterText(_userName,username);

}

public void userEntersPassword(String password)
{
    enterText(_passWord,password);
}

public void clickOnLogInButton()
{
    clickOnElement(_login);
}

public void assertErrorMessage(String expected_error_message)
{
    assertTextMessage(expected_error_message,_errorMessage);
}

public void assertErrorMessageForEmptyUsername()
{
    assertTextMessage(expectedEmptyUserName,_errorMessage);
}
public void assertErrorMessageForEmptyPassword()
{
    assertTextMessage(expectedEmptyPassword,_errorMessage);
}
}
