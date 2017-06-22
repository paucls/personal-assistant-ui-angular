import { browser, element, by } from 'protractor';

export class ContactsPage {

  // Header
  header = element(by.css('.page-header'));

  // Body
  addContactButton = element(by.id('add-contact-button'));
  contactsTableRows = element.all(by.css('#contacts tbody > tr'));

  go() {
    return browser.get('/contacts');
  }

}
