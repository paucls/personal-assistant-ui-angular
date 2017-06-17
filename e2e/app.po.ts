import { browser, element, by } from 'protractor';

export class PersonalAssistantPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarTitle() {
    return element(by.css('.navbar-header .navbar-brand')).getText();
  }
}
