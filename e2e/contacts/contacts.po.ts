import { browser, element, by } from 'protractor';

export class ContactsPage {

  // Header
  header = element(by.css('.page-header'));

  // Body
  addContactButton = element(by.id('add-contact-button'));
  contactsTableRows = element.all(by.css('#contacts tbody > tr'));
  successToast = element(by.css('#toast-container .toast-success'));

  go() {
    return browser.get('/contacts');
  }

  clickDeleteOnContactRow(rowNumber) {
    this.contactsTableRows.get(rowNumber).element(by.css('.delete-contact-btn')).click();
  }

  clickEditOnContactRow(rowNumber) {
    this.contactsTableRows.get(rowNumber).element(by.css('.edit-contact-btn')).click();
  }

}
