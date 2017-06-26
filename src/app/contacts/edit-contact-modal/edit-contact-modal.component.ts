import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  providers: [ContactsService]
})
export class EditContactModalComponent {

  @Input() contact: Contact;
  @Input() isModalOpened = false;
  @Output() modalClosed = new EventEmitter();

  constructor(public contactsService: ContactsService, public toastrService: ToastrService) {
  }

  update(contact) {
    this.contactsService
      .updateContact(contact)
      .then(() => {
        this.modalClosed.emit('success');
        this.toastrService.success('Contact updated successfully')
      });
  }

  closeModal(result: string = 'dismissed') {
    this.isModalOpened = false;
    this.modalClosed.emit(result);
  }

}
