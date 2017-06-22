import {ContactsPage} from './contacts.po';
import {DeleteContactModalPage} from './delete-contact-modal.po';

describe('Contacts', () => {

  const CONTACTS_COUNT = 2;

  let contactsPage: ContactsPage;
  let deleteContactModal: DeleteContactModalPage;

  beforeEach(() => {
    contactsPage = new ContactsPage();
    deleteContactModal = new DeleteContactModalPage();
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

  describe('Delete Contact dialog', function () {

    it('should be shown when delete button is clicked on a contact row', function () {
      contactsPage.clickDeleteOnContactRow(0);

      // expect(deleteContactModal.isDisplayed()).toBeTruthy();
      // expect(deleteContactModal.header.getText()).toBe('Delete Contact');
      // expect(deleteContactModal.body.getText()).toContain('Are you sure you wish to delete');
      // expect(deleteContactModal.deleteButton.isDisplayed()).toBeTruthy();
      // expect(deleteContactModal.cancelButton.isDisplayed()).toBeTruthy();
    });

    // it('should remove the contact and notify success', function () {
    //   contactsPage.clickDeleteOnContactRow(0);
    //   deleteContactModal.deleteButton.click();
    //
    //   expect(contactsPage.successToast.isDisplayed()).toBeTruthy();
    //   expect(contactsPage.successToast.getText()).toBe('Contact deleted successfully');
    //   expect(contactsPage.contactsTableRows.count()).toBe(CONTACTS_COUNT - 1);
    // });

  });

});
