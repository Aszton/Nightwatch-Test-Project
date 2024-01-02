import { mainPage } from "../PageObjectModel/mainPage";
import { loginPage } from "../PageObjectModel/loginPage";
import user from "../data/user.json";

describe("Login Tests", () => {
  beforeEach(() => {
    mainPage.openBaseUrl();
    mainPage.clickLoginOrRegisterButton();
  });

  it("Correct Login", () => {
    loginPage.fillLoginInputs(user.userName, user.userPassword);
    loginPage.clickLoginButton();
    browser.assert.urlContains("account/account");
  });

  it("Incorrect Login", () => {
    loginPage.fillLoginInputs("fail", "fail");
    loginPage.clickLoginButton();
    loginPage.assertIncorrectLoginErrorMessage();
  });

  afterEach(() => browser.end());
});
