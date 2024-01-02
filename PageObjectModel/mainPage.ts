import { mainPageSelectors, loginSelectors } from "../selectors";

export class MainPage {
  openBaseUrl() {
    browser.navigateTo("/");
    browser.assert.titleEquals("A place to practice your automation skills!");
  }
  clickLoginOrRegisterButton() {
    browser
      .waitForElementVisible(mainPageSelectors.buttonLoginOrRegister)
      .click(mainPageSelectors.buttonLoginOrRegister)
      .waitForElementVisible(loginSelectors.inputLogin)
  }
}

export const mainPage = new MainPage();
