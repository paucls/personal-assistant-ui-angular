import {element, by} from 'protractor';

export class DeleteContactModalPage {

  modal = element(by.id('delete-contact-modal'));
  title = this.modal.element(by.css('.modal-title'));
  body = this.modal.element(by.css('div.modal-body'));

  deleteButton = element(by.id('delete-contact-modal-delete'));
  cancelButton = element(by.id('delete-contact-modal-cancel'));

  isDisplayed() {
    return this.modal.isDisplayed();
  }

}
