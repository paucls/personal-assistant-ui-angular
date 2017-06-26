import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-delete-contact-modal',
  templateUrl: './delete-contact-modal.component.html',
  providers: [ContactsService]
})
export class DeleteContactModalComponent {

  @Input() contact: Contact;
  @Input() isModalOpened = false;
  @Output() modalClosed = new EventEmitter();

  constructor(public contactsService: ContactsService, public toastrService: ToastrService) {
  }

  deleteContact() {
    this.contactsService
      .deleteContact(this.contact.id)
      .then(() => {
        this.closeModal('success');
        this.toastrService.success('Contact deleted successfully');
      });
  }

  closeModal(result: string = 'dismissed') {
    this.isModalOpened = false;
    this.modalClosed.emit(result);
  }

}
