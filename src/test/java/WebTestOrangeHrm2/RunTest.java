package WebTestOrangeHrm2;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.sun.deploy.cache.Cache.copyFile;


@RunWith(Cucumber.class)
@CucumberOptions(strict = true,features=".", tags = "@login",plugin = {"pretty","html:target/Destination"})



public class RunTest {

}

