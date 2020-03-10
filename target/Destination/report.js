$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "User should not be able to log in with invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters invalid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.step({
  "name": "user should be able to see \"\u003cexpected error message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expected error message"
      ]
    },
    {
      "cells": [
        "Admin",
        "abc123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Masw",
        "admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Masw",
        "abc123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Masw",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "abc123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat WebTestOrangeHrm2.Utils.enterText(Utils.java:13)\r\n\tat WebTestOrangeHrm2.LogInPage.userEntersUsername(LogInPage.java:19)\r\n\tat WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(MyStepdefs.java:18)\r\n\tat ✽.user enters invalid \"Admin\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm2/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid \"abc123\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldNotBeAbleToLogIn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Invalid credentials\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldBeAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Masw\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat WebTestOrangeHrm2.Utils.enterText(Utils.java:13)\r\n\tat WebTestOrangeHrm2.LogInPage.userEntersUsername(LogInPage.java:19)\r\n\tat WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(MyStepdefs.java:18)\r\n\tat ✽.user enters invalid \"Masw\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm2/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldNotBeAbleToLogIn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Invalid credentials\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldBeAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Masw\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat WebTestOrangeHrm2.Utils.enterText(Utils.java:13)\r\n\tat WebTestOrangeHrm2.LogInPage.userEntersUsername(LogInPage.java:19)\r\n\tat WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(MyStepdefs.java:18)\r\n\tat ✽.user enters invalid \"Masw\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm2/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid \"abc123\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldNotBeAbleToLogIn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Invalid credentials\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldBeAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat WebTestOrangeHrm2.Utils.enterText(Utils.java:13)\r\n\tat WebTestOrangeHrm2.LogInPage.userEntersUsername(LogInPage.java:19)\r\n\tat WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(MyStepdefs.java:18)\r\n\tat ✽.user enters invalid \"Admin\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm2/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldNotBeAbleToLogIn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Password cannot be empty\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldBeAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat WebTestOrangeHrm2.Utils.enterText(Utils.java:13)\r\n\tat WebTestOrangeHrm2.LogInPage.userEntersUsername(LogInPage.java:19)\r\n\tat WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(MyStepdefs.java:18)\r\n\tat ✽.user enters invalid \"\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm2/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldNotBeAbleToLogIn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Username cannot be empty\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldBeAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Masw\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat WebTestOrangeHrm2.Utils.enterText(Utils.java:13)\r\n\tat WebTestOrangeHrm2.LogInPage.userEntersUsername(LogInPage.java:19)\r\n\tat WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(MyStepdefs.java:18)\r\n\tat ✽.user enters invalid \"Masw\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm2/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldNotBeAbleToLogIn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Password cannot be empty\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldBeAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat WebTestOrangeHrm2.Utils.enterText(Utils.java:13)\r\n\tat WebTestOrangeHrm2.LogInPage.userEntersUsername(LogInPage.java:19)\r\n\tat WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(MyStepdefs.java:18)\r\n\tat ✽.user enters invalid \"\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm2/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid \"abc123\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldNotBeAbleToLogIn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Username cannot be empty\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldBeAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat WebTestOrangeHrm2.Utils.enterText(Utils.java:13)\r\n\tat WebTestOrangeHrm2.LogInPage.userEntersUsername(LogInPage.java:19)\r\n\tat WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(MyStepdefs.java:18)\r\n\tat ✽.user enters invalid \"\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm2/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userEntersInvalid(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldNotBeAbleToLogIn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Username cannot be empty\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebTestOrangeHrm2.MyStepdefs.userShouldBeAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});