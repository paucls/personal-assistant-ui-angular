import {element, by} from 'protractor';

export class AddContactModalPage {

  modal = element(by.id('add-contact-modal'));
  title = this.modal.element(by.css('.modal-title'));
  body = this.modal.element(by.css('div.modal-body'));

  firstNameInput = element(by.id('first-name'));
  lastNameInput = element(by.id('last-name'));
  companyInput = element(by.id('company'));
  phoneInput = element(by.id('phone'));
  emailInput = element(by.id('email'));
  addressInput = element(by.id('address'));
  notesTextArea = element(by.id('notes'));

  cancelButton = element(by.id('add-contact-modal-cancel'));
  saveButton = element(by.id('add-contact-modal-save'));

  isDisplayed() {
    return this.modal.isDisplayed();
  }

}
