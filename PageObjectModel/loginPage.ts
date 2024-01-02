import { loginSelectors } from "../selectors";

export class LoginPage {
  fillLoginInputs(user: string, pass: string) {
    browser.setValue(loginSelectors.inputLogin, user);
    browser.setValue(loginSelectors.inputPassword, pass);
    browser.expect
      .element(loginSelectors.inputLogin)
      .to.have.value.that.equals(user);
    browser.expect
      .element(loginSelectors.inputPassword)
      .to.have.value.that.equals(pass);
  }
  clickLoginButton() {
    browser.waitForElementVisible(loginSelectors.buttonLogin);
    browser.click(loginSelectors.buttonLogin);
  }
  assertIncorrectLoginErrorMessage() {
    browser.expect
      .element(loginSelectors.alertLogin)
      .text.to.contain("Error: Incorrect login or password provided.");
  }
}
export const loginPage = new LoginPage();
