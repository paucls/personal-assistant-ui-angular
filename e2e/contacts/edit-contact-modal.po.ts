import {element, by} from 'protractor';

export class EditContactModalPage {

  modal = element(by.id('edit-contact-modal'));
  title = this.modal.element(by.css('.modal-title'));
  body = this.modal.element(by.css('div.modal-body'));

  firstNameInput = element(by.id('first-name'));
  lastNameInput = element(by.id('last-name'));
  companyInput = element(by.id('company'));
  phoneInput = element(by.id('phone'));
  emailInput = element(by.id('email'));
  addressInput = element(by.id('address'));
  notesTextArea = element(by.id('notes'));

  cancelButton = element(by.id('edit-contact-modal-cancel'));
  updateButton = element(by.id('edit-contact-modal-update'));

  isDisplayed() {
    return this.modal.isDisplayed();
  }

}
