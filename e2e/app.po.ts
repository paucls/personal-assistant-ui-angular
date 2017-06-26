import { browser, element, by } from 'protractor';

export class PersonalAssistantPage {
  go() {
    return browser.get('/');
  }

  getNavbarTitle() {
    return element(by.css('.header .branding .title')).getText();
  }

  getSignedInUser() {
    return element(by.css('.header .signed-in-user')).getText();
  }
}
