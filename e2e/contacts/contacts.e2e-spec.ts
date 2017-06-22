import {ContactsPage} from '../contacts/contacts.po';

describe('Contacts', () => {

  const CONTACTS_COUNT = 2;

  let contactsPage: ContactsPage;

  beforeEach(() => {
    contactsPage = new ContactsPage();
    contactsPage.go();
  });

  describe('Header', function () {

    it('should display page title', function () {
      expect(contactsPage.header.getText()).toBe('Contacts');
    });

    it('should display a button for add project', function () {
      expect(contactsPage.addContactButton.isDisplayed()).toBe(true);
    });

  });

  describe('Contacts Table', function () {

    it('should have visible rows', function () {
      expect(contactsPage.contactsTableRows.count()).toBe(CONTACTS_COUNT);
    });

  });

});
