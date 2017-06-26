import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  providers: [ContactsService]
})
export class AddContactModalComponent {

  @Input() isModalOpened = false;
  @Output() modalClosed = new EventEmitter();

  contact: Contact = {};

  constructor(public contactsService: ContactsService, public toastrService: ToastrService) {
  }

  save(contact) {
    this.contactsService
      .saveContact(contact)
      .then(() => {
        this.modalClosed.emit('success');
        this.toastrService.success('Contact added successfully')
      });
  }

  closeModal(result: string = 'dismissed') {
    this.isModalOpened = false;
    this.modalClosed.emit(result);
  }

}
