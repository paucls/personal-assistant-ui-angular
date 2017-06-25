import {ContactsPage} from './contacts.po';
import {AddContactModalPage} from './add-contact-modal.po';
import {DeleteContactModalPage} from './delete-contact-modal.po';
import {EditContactModalPage} from './edit-contact-modal.po';

describe('Contacts', () => {

  const CONTACTS_COUNT = 5;

  let contactsPage: ContactsPage;
  let addContactModal: AddContactModalPage;
  let deleteContactModal: DeleteContactModalPage;
  let editContactModal: EditContactModalPage;

  beforeEach(() => {
    contactsPage = new ContactsPage();
    addContactModal = new AddContactModalPage();
    deleteContactModal = new DeleteContactModalPage();
    editContactModal = new EditContactModalPage();
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

      expect(deleteContactModal.isDisplayed()).toBeTruthy();
      expect(deleteContactModal.title.getText()).toBe('Delete Contact');
      expect(deleteContactModal.body.getText()).toContain('Are you sure you wish to delete');
      expect(deleteContactModal.deleteButton.isDisplayed()).toBeTruthy();
      expect(deleteContactModal.cancelButton.isDisplayed()).toBeTruthy();
    });

    it('should remove the contact and notify success', function () {
      contactsPage.clickDeleteOnContactRow(0);
      deleteContactModal.deleteButton.click();

      // expect(contactsPage.successToast.isDisplayed()).toBeTruthy();
      // expect(contactsPage.successToast.getText()).toBe('Contact deleted successfully');
      expect(contactsPage.contactsTableRows.count()).toBe(CONTACTS_COUNT - 1);
    });

  });

  describe('Add Contact dialog', function () {

    beforeEach(function () {
      contactsPage.addContactButton.click();
    });

    it('should be displayed and initialized correctly', function () {
      expect(addContactModal.isDisplayed()).toBeTruthy();
      expect(addContactModal.title.getText()).toBe('Add Contact');

      expect(addContactModal.firstNameInput.isDisplayed()).toBeTruthy();
      expect(addContactModal.lastNameInput.isDisplayed()).toBeTruthy();
      expect(addContactModal.companyInput.isDisplayed()).toBeTruthy();
      expect(addContactModal.phoneInput.isDisplayed()).toBeTruthy();
      expect(addContactModal.emailInput.isDisplayed()).toBeTruthy();
      expect(addContactModal.addressInput.isDisplayed()).toBeTruthy();
      expect(addContactModal.notesTextArea.isDisplayed()).toBeTruthy();

      expect(addContactModal.saveButton.isDisplayed()).toBeTruthy();
      expect(addContactModal.saveButton.getAttribute('disabled')).toBeTruthy();
      expect(addContactModal.cancelButton.isDisplayed()).toBeTruthy();
      expect(addContactModal.cancelButton.getAttribute('disabled')).toBeNull();
    });

    it('should prevent the user from saving with invalid fields', function () {
      expect(addContactModal.saveButton.getAttribute('disabled')).toBeTruthy();

      addContactModal.firstNameInput.sendKeys('John');

      expect(addContactModal.saveButton.getAttribute('disabled')).toBeFalsy();
    });

    it('should save contact when fields are populated and user clicks save', function () {
      addContactModal.firstNameInput.sendKeys('John');
      addContactModal.lastNameInput.sendKeys('Doe');
      addContactModal.companyInput.sendKeys('ACME');
      addContactModal.phoneInput.sendKeys('075 1234567');
      addContactModal.emailInput.sendKeys('john.doe@acme.com');
      addContactModal.addressInput.sendKeys('Acme City');
      addContactModal.notesTextArea.sendKeys('Some notes ...');

      addContactModal.saveButton.click();

      // expect(contactsPage.successToast.isDisplayed()).toBeTruthy();
      // expect(contactsPage.successToast.getText()).toBe('Contact created successfully');
      expect(contactsPage.contactsTableRows.count()).toBe(CONTACTS_COUNT + 1);
      expect(contactsPage.contactsTableRows.get(CONTACTS_COUNT).getText()).toContain('John');
    });

  });

  describe('Edit Contact dialog', function () {

    beforeEach(function() {
      contactsPage.clickEditOnContactRow(0);
    });

    it('should be shown when edit action is clicked on a contact row', function () {
      expect(editContactModal.isDisplayed()).toBeTruthy();
      expect(editContactModal.title.getText()).toBe('Edit Contact');

      expect(editContactModal.updateButton.isDisplayed()).toBeTruthy();
      expect(editContactModal.updateButton.getAttribute('disabled')).toBeTruthy();
      expect(editContactModal.cancelButton.isDisplayed()).toBeTruthy();
      expect(editContactModal.cancelButton.getAttribute('disabled')).toBeNull();
    });

    it('should update contact when fields are edited and user clicks update', function () {
      editContactModal.firstNameInput.clear();
      editContactModal.firstNameInput.sendKeys('Joan');

      editContactModal.updateButton.click();

      // expect(contactsPage.successToast.isDisplayed()).toBeTruthy();
      // expect(contactsPage.successToast.getText()).toBe('Contact updated successfully');
      expect(contactsPage.contactsTableRows.count()).toBe(CONTACTS_COUNT);
      expect(contactsPage.contactsTableRows.get(0).getText()).toContain('Joan');
    });

  });

});
