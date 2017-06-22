import { browser, element, by } from 'protractor';

export class PersonalAssistantPage {
  go() {
    return browser.get('/');
  }

  getNavbarTitle() {
    return element(by.css('.navbar .navbar-brand')).getText();
  }

  getSignedInUser() {
    return element(by.css('.navbar .signed-in-user')).getText();
  }
}
